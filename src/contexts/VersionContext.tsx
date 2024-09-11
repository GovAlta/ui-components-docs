import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface VersionContextProps {
  version: string | null;
}

const VersionContext = createContext<VersionContextProps>({ version: null });

export const useVersion = () => useContext(VersionContext).version;

interface VersionProviderProps {
  children: ReactNode;
}

export const VersionProvider: React.FC<VersionProviderProps> = ({ children }) => {
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    const updateVersion = () => {
      const pathSegments = window.location.pathname.split("/");
      const versionSegment = pathSegments.find(segment => segment.startsWith("v"));
      if (versionSegment) {
        setVersion(versionSegment);
        if (versionSegment.includes("angular")) {
          localStorage.setItem("goa-docs-lang", "angular");
        }
        if (versionSegment.includes("react")) {
          localStorage.setItem("goa-docs-lang", "react");
        }
      } else {
        setVersion(null);
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
  return <VersionContext.Provider value={{ version }}>{children}</VersionContext.Provider>;
};
