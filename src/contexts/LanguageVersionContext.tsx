import React, { createContext, useEffect, useState } from "react";
import {
  LOCAL_STORAGE_LANGUAGE_KEY,
  LOCAL_STORAGE_VERSION_KEY
} from "@components/version-language-switcher/version-language-constants.ts";

interface LanguageVersionContextProps {
  language: string;
  version: string;
  setLanguage: (lang: string) => void;
  setVersion: (version: string) => void;
}

export const LanguageVersionContext = createContext<LanguageVersionContextProps>({
  language: "react",
  version: "new",
  setLanguage: () => {},
  setVersion: () => {},
});

export const LanguageVersionProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [language, setLanguage] = useState(() => localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) || "react");
  const [version, setVersion] = useState(() => localStorage.getItem(LOCAL_STORAGE_VERSION_KEY) || "new");

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
