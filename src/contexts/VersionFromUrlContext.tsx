import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import useLocalStorage from "@hooks/useLocalStorage.ts";
import {
  ANGULAR_VERSIONS,
  LOCAL_STORAGE_LANGUAGE_KEY,
  LOCAL_STORAGE_VERSION_KEY, REACT_VERSIONS
} from "@components/version-language-switcher/version-language-constants.ts";

interface VersionFromUrlContextProps {
  version: string | null;
}

const VersionFromUrlContext = createContext<VersionFromUrlContextProps>({ version: null });

export const useVersionFromUrlContext = () => useContext(VersionFromUrlContext).version;

interface VersionProviderProps {
  children: ReactNode;
}

export const VersionFromUrlProvider: React.FC<VersionProviderProps> = ({ children }) => {
  const [versionFromPath, setVersionFromPath] = useState<string | null>(null);
  const [language] = useLocalStorage(LOCAL_STORAGE_LANGUAGE_KEY, "react");
  const [_version, setVersion] = useLocalStorage(LOCAL_STORAGE_VERSION_KEY, "");

  useEffect(() => {
    const updateVersion = () => {
      const pathSegments = window.location.pathname.split("/");
      const versionSegment = pathSegments.find(segment => segment.startsWith("v"));
      if (versionSegment) {
        setVersionFromPath(versionSegment);
       localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, versionSegment.includes("angular") ? "angular" : "react");
      } else {
        setVersionFromPath(null);
        setVersion(language === "angular" ? ANGULAR_VERSIONS.NEW.value : REACT_VERSIONS.NEW.value);
      }
    };

    // Initial call to set the version
    updateVersion();

    // Add event listener for popstate
    window.addEventListener("popstate", updateVersion);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("popstate", updateVersion);
    };
  }, []);
  return <VersionFromUrlContext.Provider value={{ version: versionFromPath }}>{children}</VersionFromUrlContext.Provider>;
};
