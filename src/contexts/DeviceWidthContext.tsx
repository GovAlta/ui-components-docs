import React, { ReactNode } from "react";
import { useMediaQuery } from "@hooks/useMediaQuery.tsx";

interface DeviceWidthProviderProps {
  children: ReactNode;
}

export const DeviceWidthContext = React.createContext({
  isDesktop: true,
  isMobile: false,
});

export const DeviceWidthProvider: React.FC<DeviceWidthProviderProps> = ({ children }) => {
  const isDesktop = useMediaQuery("(min-width: 1232px)");
  const isMobile = useMediaQuery("(max-width: 623px)");

  return (
    <DeviceWidthContext.Provider value={{ isDesktop, isMobile }}>
  {children}
  </DeviceWidthContext.Provider>
);
};
