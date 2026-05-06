import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { dictionaries } from "./dictionaries";
import { DEFAULT_LANGUAGE, LanguageContext } from "./language-context";
import type { Dictionary, Language } from "./types";

const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const nextLanguage = isLanguage(stored)
      ? stored
      : getLanguageFromNavigator(window.navigator.language);

    setLanguageState(nextLanguage);
    setIsReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    updateDocumentMeta(dictionaries[language]);

    if (isReady) {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
  }, [isReady, language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
      dictionary: dictionaries[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "es";
}

function getLanguageFromNavigator(language: string): Language {
  return language.toLowerCase().startsWith("es") ? "es" : DEFAULT_LANGUAGE;
}

function updateDocumentMeta(dictionary: Dictionary) {
  document.title = dictionary.meta.homeTitle;
  setMetaContent("name", "description", dictionary.meta.homeDescription);
  setMetaContent("property", "og:title", dictionary.meta.homeTitle);
  setMetaContent("property", "og:description", dictionary.meta.homeOgDescription);
}

function setMetaContent(attribute: "name" | "property", value: string, content: string) {
  const meta = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${value}"]`);
  meta?.setAttribute("content", content);
}
