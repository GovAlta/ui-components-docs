import { useContext } from "react";
import { GoabIconButton, GoabTooltip } from "@abgov/react-components";

import { useVersionUpdateNotification } from "@components/version-language-switcher/VersionUpdateNotificationContext";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext";

export function HelpButton() {
  const { reset: resetVersion } = useVersionUpdateNotification();
  useContext(LanguageVersionContext);

  const handleHelpClick = () => {  
    resetVersion();
  };

  return (
    <GoabTooltip content="Version info">
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