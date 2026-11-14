import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader, setResponseHeader } from "@tanstack/react-start/server";
import type { Language } from "@/i18n/types";

// Resolve the old automatic language preference on the server, before rendering,
// so the URL, page and metadata never disagree during hydration.
export const getPreferredLanguage = createServerFn({ method: "GET" }).handler((): Language => {
  setResponseHeader("Cache-Control", "private, no-store");
  setResponseHeader("Vary", "Cookie, Accept-Language");
  const cookie = getRequestHeader("cookie") ?? "";
  const saved = cookie.match(/(?:^|;\s*)portfolio-language=(en|es)(?:;|$)/)?.[1];
  if (saved === "en" || saved === "es") return saved;
  return getRequestHeader("accept-language")?.toLowerCase().startsWith("es") ? "es" : "en";
});
