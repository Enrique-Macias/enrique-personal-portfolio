import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(5).max(2000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.TO_EMAIL;
    const CONTACT_FROM = process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>";

    if (!RESEND_API_KEY) {
      return {
        ok: false,
        error: "emailServiceNotConfigured" as const,
      };
    }

    if (!TO_EMAIL) {
      return {
        ok: false,
        error: "emailRecipientNotConfigured" as const,
      };
    }

    const html = `
      <div style="font-family:system-ui,sans-serif;line-height:1.5">
        <h2 style="margin:0 0 12px">New portfolio message</h2>
        <p><strong>From:</strong> ${escape(data.name)} &lt;${escape(data.email)}&gt;</p>
        <p style="white-space:pre-wrap">${escape(data.message)}</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
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
      const text = await res.text().catch(() => "");
      console.error("Resend send failed:", res.status, text);
      return { ok: false, error: "sendFailed" as const };
    }
    return { ok: true };
  });

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
