import { createContext, useContext, useState } from "react";

interface SiteWideNotificationContextType {
  isDismissed: boolean;
  dismiss: () => void;
  reset: () => void;
}

const SiteWideNotificationContext = createContext<SiteWideNotificationContextType | undefined>(undefined);

export const SiteWideNotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDismissed, setIsDismissed] = useState(() => {
    const stored = localStorage.getItem("siteWideDismissed");
    return stored === "true";
  });
  const dismiss = () => {
    localStorage.setItem("siteWideDismissed", "true");
    setIsDismissed(true);
  };

  const reset = () => {
    localStorage.removeItem("siteWideDismissed");
    setIsDismissed(false);
  };

  return (
    <SiteWideNotificationContext.Provider value={{ isDismissed, dismiss, reset }}>
      {children}
    </SiteWideNotificationContext.Provider>
  );
};

export const useSiteWideNotification = () => {
  const context = useContext(SiteWideNotificationContext);
  if (!context) {
    throw new Error("useSiteWideNotification must be used within SiteWideNotificationProvider");
  }
  return context;
};