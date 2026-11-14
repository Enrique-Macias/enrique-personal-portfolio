import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(5).max(2000),
  website: z.string().max(200).optional().default(""),
});

// Defense in depth for a small contact form, scoped to each Worker isolate.
// This is not a distributed quota: an edge rate-limit rule remains recommended.
const attempts = new Map<string, { count: number; expiresAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const MAX_BUCKETS = 2000;

function allowAttempt(key: string) {
  const now = Date.now();
  const existing = attempts.get(key);
  if (existing && existing.expiresAt > now) {
    if (existing.count >= MAX_ATTEMPTS) return false;
    existing.count += 1;
    return true;
  }
  if (attempts.size >= MAX_BUCKETS) {
    for (const [id, bucket] of attempts) {
      if (bucket.expiresAt <= now) attempts.delete(id);
    }
    if (attempts.size >= MAX_BUCKETS) return false;
  }
  attempts.set(key, { count: 1, expiresAt: now + WINDOW_MS });
  return true;
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const request = getRequest();
    // Require the full origin, including scheme and port. Do not trust forwarded
    // host headers, and do not rely on CORS to prevent cross-site submissions.
    if (
      request.headers.get("origin") !== new URL(request.url).origin ||
      request.headers.get("sec-fetch-site") === "cross-site" ||
      data.website
    ) {
      return { ok: false, error: "sendFailed" as const };
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.TO_EMAIL;
    const CONTACT_FROM = process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>";

    if (!RESEND_API_KEY) {
      return { ok: false, error: "emailServiceNotConfigured" as const };
    }
    if (!TO_EMAIL) {
      return { ok: false, error: "emailRecipientNotConfigured" as const };
    }

    // Cloudflare supplies this header at the edge. Unidentified clients share a
    // conservative bucket; raw addresses are never persisted or logged.
    if (!allowAttempt(request.headers.get("cf-connecting-ip") ?? "unidentified")) {
      return { ok: false, error: "rateLimited" as const };
    }

    const html = `
      <div style="font-family:system-ui,sans-serif;line-height:1.5">
        <h2 style="margin:0 0 12px">New portfolio message</h2>
        <p><strong>From:</strong> ${escape(data.name)} &lt;${escape(data.email)}&gt;</p>
        <p style="white-space:pre-wrap">${escape(data.message)}</p>
      </div>
    `;

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        signal: AbortSignal.timeout(10_000),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: CONTACT_FROM,
          to: [TO_EMAIL],
          reply_to: data.email,
          subject: `Portfolio message from ${data.name}`,
          html,
        }),
      });
      if (!res.ok) {
        // Do not log the provider response body or credentials.
        console.error("Contact delivery failed:", res.status);
        return { ok: false, error: "sendFailed" as const };
      }
      return { ok: true };
    } catch {
      return { ok: false, error: "sendFailed" as const };
    }
  });

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
