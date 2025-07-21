import { GoabCallout } from "@abgov/react-components";
import { ReactNode } from "react";
interface LegacyCalloutBannerProps {
  heading?: string;
  children?: ReactNode;
}

export const LegacyCalloutBanner = ({
  heading,
  children,
}: LegacyCalloutBannerProps) => {

  return (
    <GoabCallout type={"important"} size={"medium"} mt={"m"} heading={heading} maxWidth="608px">
      {children}
    </GoabCallout>
  );
};

export default LegacyCalloutBanner;
