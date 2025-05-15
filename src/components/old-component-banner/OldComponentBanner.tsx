import { GoabCallout } from "@abgov/react-components";
import { ANGULAR_VERSIONS, REACT_VERSIONS } from "@components/version-language-switcher/version-language-constants.ts";
import { Link } from "react-router-dom";

interface OldComponentBannerProps {
  componentName: string;
  language: string;
}

export const OldComponentBanner = ({ componentName, language }: OldComponentBannerProps) => {
  return (
    <GoabCallout type="important" size={"medium"} heading={
      `${componentName} component not available in this version`
    }>
      This component is only available in {language == "angular" ? ANGULAR_VERSIONS.NEW.label.substring(0,2).toUpperCase()
      : REACT_VERSIONS.NEW.label.substring(0,2).toUpperCase()} of the design system components.
      <br/>
      <Link to="/get-started/developers/update">View upgrade guide</Link>{" "}
    </GoabCallout>
  )
}
