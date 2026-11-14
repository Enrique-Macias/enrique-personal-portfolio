import { useEffect, useMemo } from "react";
import type { ReactNode } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { dictionaries } from "./dictionaries";
import { LanguageContext } from "./language-context";
import type { Language } from "./types";

// The URL is the source of truth, so shared links and server-rendered metadata
// use the same language as the page. No post-hydration language replacement.
export function LanguageProvider({ children }: { children: ReactNode }) {
  const search = useSearch({ strict: false });
  const navigate = useNavigate();
  const language: Language = search.lang === "es" ? "es" : "en";
  useEffect(() => {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `portfolio-language=${language}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
  }, [language]);
  const value = useMemo(
    () => ({
      language,
      setLanguage: (next: Language) => {
        void navigate({
          to: ".",
          search: (previous) => ({ ...previous, lang: next }),
          hash: true,
          replace: true,
          resetScroll: false,
        });
      },
      dictionary: dictionaries[language],
    }),
    [language, navigate],
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
