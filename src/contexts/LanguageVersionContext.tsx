import React, { createContext, useEffect, useState } from "react";
import {
  Language,
  LanguageVersion,
  LOCAL_STORAGE_LANGUAGE_KEY,
  LOCAL_STORAGE_VERSION_KEY
} from "@components/version-language-switcher/version-language-constants.ts";

interface LanguageVersionContextProps {
  language: Language;
  version: LanguageVersion;
  setLanguage: (lang: Language) => void;
  setVersion: (version: LanguageVersion) => void;
}

export const LanguageVersionContext = createContext<LanguageVersionContextProps>({
  language: "react",
  version: "new",
  setLanguage: () => {},
  setVersion: () => {},
});

export const LanguageVersionProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) || "react") as Language);
  const [version, setVersion] = useState<LanguageVersion>(() => localStorage.getItem(LOCAL_STORAGE_VERSION_KEY) as LanguageVersion || "new");

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
