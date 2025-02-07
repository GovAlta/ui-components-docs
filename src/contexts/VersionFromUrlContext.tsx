import React, { createContext, useEffect, useState, ReactNode } from "react";
import {
  LOCAL_STORAGE_LANGUAGE_KEY,
  LOCAL_STORAGE_VERSION_KEY,
} from "@components/version-language-switcher/version-language-constants.ts";
import { DEFAULT_VERSION } from "../global-constants";

interface VersionFromUrlContextProps {
  version: string | null;
}

const VersionFromUrlContext = createContext<VersionFromUrlContextProps>({ version: null });

interface VersionProviderProps {
  children: ReactNode;
}

export const VersionFromUrlProvider: React.FC<VersionProviderProps> = ({ children }) => {
  const [versionFromPath, setVersionFromPath] = useState<string | null>(null);

  useEffect(() => {
    const updateVersion = () => {
      const pathSegments = window.location.pathname.split("/");
      const versionSegment = pathSegments.find(segment => segment.startsWith("v"));
      if (versionSegment) {
        setVersionFromPath(versionSegment);
       localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, versionSegment.includes("angular") ? "angular" : "react");
      } else {
        setVersionFromPath(null);
        localStorage.setItem(LOCAL_STORAGE_VERSION_KEY, DEFAULT_VERSION);
      }
    };

    updateVersion();

    window.addEventListener("popstate", updateVersion);

    return () => {
      window.removeEventListener("popstate", updateVersion);
    };
  }, []);
  return <VersionFromUrlContext.Provider value={{ version: versionFromPath }}>{children}</VersionFromUrlContext.Provider>;
};
