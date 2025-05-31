import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { LanguageVersion } from "@components/version-language-switcher/version-language-constants";

interface VersionUpdateNotificationContextType {
  isDismissed: boolean;
  dismiss: () => void;
  reset: () => void;
  oldLinkRef: React.RefObject<HTMLAnchorElement>;
  newLinkRef: React.RefObject<HTMLAnchorElement>;
}

const VersionUpdateNotificationContext = createContext<VersionUpdateNotificationContextType | undefined>(undefined);

export const VersionUpdateNotificationProvider = ({
                                                    version,
                                                    children
                                                  }: {
  version: LanguageVersion;
  children: React.ReactNode;
}) => {
  const storageKey = `versionUpdateNotificationDismissed-${version}`;
  const [isDismissed, setIsDismissed] = useState(false);

  const oldLinkRef = useRef<HTMLAnchorElement>(null);
  const newLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const storedValue = localStorage.getItem(storageKey);
    setIsDismissed(storedValue === "true");
  }, [version]);

  const dismiss = () => {
    localStorage.setItem(storageKey, "true");
    setIsDismissed(true);
  };

  const reset = () => {
    localStorage.removeItem(storageKey);
    setIsDismissed(false);
  };

  return (
    <VersionUpdateNotificationContext.Provider value={{ isDismissed, dismiss, reset, oldLinkRef, newLinkRef }}>
      {children}
    </VersionUpdateNotificationContext.Provider>
  );
};

export const useVersionUpdateNotification = () => {
  const context = useContext(VersionUpdateNotificationContext);
  if (!context) {
    throw new Error("useVersionUpdateNotification must be used within VersionUpdateNotificationProvider");
  }
  return context;
};