import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { GoabIconButton, GoabTooltip } from "@abgov/react-components";

import { useVersionUpdateNotification } from "@components/version-language-switcher/VersionUpdateNotificationContext";
import { useSiteWideNotification } from "@contexts/SiteWideNotificationContext";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext";

export function HelpButton() {
  const { reset: resetVersion } = useVersionUpdateNotification();
  const { reset: resetSiteWideNotification } = useSiteWideNotification();
  useContext(LanguageVersionContext);
  const location = useLocation();

  const handleHelpClick = () => {
    const isComponentOrExamplePage =
      location.pathname.startsWith("/components") || location.pathname.startsWith("/examples");

    if (isComponentOrExamplePage) {
      resetVersion();
    } else {
      resetSiteWideNotification();
    }
  };

  return (
    <GoabTooltip content="Version and framework info">
      <GoabIconButton ml={"xs"}
                      variant="color"
                      size="small"
                      icon="help-circle"
                      ariaLabel="Help"
                      onClick={handleHelpClick}
      />
    </GoabTooltip>
  );
}