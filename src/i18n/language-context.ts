import { createContext, useContext } from "react";
import { dictionaries } from "./dictionaries";
import type { Dictionary, Language } from "./types";

export const DEFAULT_LANGUAGE: Language = "en";

export type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  dictionary: Dictionary;
};

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const fallbackContext: LanguageContextValue = {
  language: DEFAULT_LANGUAGE,
  setLanguage: (_language: Language) => undefined,
  dictionary: dictionaries[DEFAULT_LANGUAGE],
};

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    return fallbackContext;
  }

  return context;
}
