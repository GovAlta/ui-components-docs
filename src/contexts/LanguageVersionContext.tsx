import React, { createContext, useEffect, useState } from "react";
import {
  Language,
  LanguageVersion,
  LOCAL_STORAGE_LANGUAGE_KEY,
  LOCAL_STORAGE_VERSION_KEY
} from "@components/version-language-switcher/version-language-constants.ts";
import { DEFAULT_LANGUAGE, DEFAULT_VERSION } from "../global-constants";

interface LanguageVersionContextProps {
  language: Language;
  version: LanguageVersion;
  setLanguage: (lang: Language) => void;
  setVersion: (version: LanguageVersion) => void;
}

export const LanguageVersionContext = createContext<LanguageVersionContextProps>({
  language: DEFAULT_LANGUAGE,
  version: DEFAULT_VERSION,
  setLanguage: () => {},
  setVersion: () => {},
});

export const LanguageVersionProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) || DEFAULT_LANGUAGE) as Language);
  const [version, setVersion] = useState<LanguageVersion>(() => localStorage.getItem(LOCAL_STORAGE_VERSION_KEY) as LanguageVersion || DEFAULT_VERSION);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_VERSION_KEY, version);
  }, [version]);

  return(
    <LanguageVersionContext.Provider value={{language, version, setLanguage, setVersion}}>
      {children}
    </LanguageVersionContext.Provider>
  )
}
