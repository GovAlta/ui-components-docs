import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {
  LOCAL_STORAGE_LANGUAGE_KEY,
  LOCAL_STORAGE_VERSION_KEY,
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

  useEffect(() => {
    const updateVersion = () => {
      const pathSegments = window.location.pathname.split("/");
      const versionSegment = pathSegments.find(segment => segment.startsWith("v"));
      if (versionSegment) {
        setVersionFromPath(versionSegment);
       localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, versionSegment.includes("angular") ? "angular" : "react");
      } else {
        console.log("Reach versionFromUrl ", pathSegments);
        setVersionFromPath(null);
        // Fresh, new version
        localStorage.setItem(LOCAL_STORAGE_VERSION_KEY, "new");
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
