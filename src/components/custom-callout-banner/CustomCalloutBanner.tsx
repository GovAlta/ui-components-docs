import { GoabCallout } from "@abgov/react-components";
import { GoabCalloutSize, GoabSpacerVerticalSpacing } from "@abgov/ui-components-common"
import {
  ANGULAR_VERSIONS,
  REACT_VERSIONS,
} from "@components/version-language-switcher/version-language-constants.ts";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { GoabCalloutType } from "@abgov/ui-components-common";

interface CustomCalloutBannerProps {
  componentName: string;
  language: string;
  type?: "example" | "component" | string;
  calloutType?: GoabCalloutType;
  size?: GoabCalloutSize;
  mt?: GoabSpacerVerticalSpacing;
  heading?: string;
  children?: ReactNode;
}

export const CustomCalloutBanner = ({
  componentName,
  language,
  type = "component",
  calloutType = "important",
  size = "medium",
  mt = "m",
  heading,
  children,
}: CustomCalloutBannerProps) => {
  // Use provided heading or generate default one
  const bannerHeading = heading || `${componentName} ${type} is not available in this version`;

  // Determine version label based on language
  const versionLabel =
    language === "angular"
      ? ANGULAR_VERSIONS.NEW.label.substring(0, 2).toUpperCase()
      : REACT_VERSIONS.NEW.label.substring(0, 2).toUpperCase();

  return (
    <GoabCallout type={calloutType} size={size} mt={mt} heading={bannerHeading} maxWidth="608px">
      {/* Use custom content if provided, otherwise use default message */}
      {children || (
        <>
          This {type} is only available in {versionLabel} of the design system components.
          <br />
          <Link to="/get-started/developers/update">View upgrade guide</Link>{" "}
        </>
      )}
    </GoabCallout>
  );
};

export default CustomCalloutBanner;
