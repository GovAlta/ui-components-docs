import { useEffect } from "react";
import { GoabNotification } from "@abgov/react-components";
import { MAX_CONTENT_WIDTH } from "../../global-constants";
import { useVersionUpdateNotification } from "./VersionUpdateNotificationContext";
import type { LanguageVersion } from "@components/version-language-switcher/version-language-constants";

interface VersionUpdateNotificationProps {
  version: LanguageVersion;
}

export function VersionUpdateNotification({ version }: VersionUpdateNotificationProps) {
  const { isDismissed, dismiss, oldLinkRef, newLinkRef } = useVersionUpdateNotification();

  useEffect(() => {
    const el = document.querySelector("goa-notification");
    if (!el) return;

    const handleDismiss = () => dismiss();
    el.addEventListener("_dismiss", handleDismiss as EventListener);

    return () => el.removeEventListener("_dismiss", handleDismiss as EventListener);
  }, [dismiss]);

  if (isDismissed) return null;

  return (
    <GoabNotification type={version === "old" ? "important" : "information"} maxContentWidth={MAX_CONTENT_WIDTH}>
      {version === "old" ? (
        <>
          Support for the Long Term Support (LTS) version of the Design system will be available until September
          2025.{" "}
          <a ref={oldLinkRef} href="/get-started/developers/update">
            <span style={{ whiteSpace: "nowrap" }}>View the upgrade guide</span>
          </a>
        </>
      ) : (
        <>
          Upgrading to the latest version of the design system?{" "}
          <a ref={newLinkRef} href="/get-started/developers/update">
            <span style={{ whiteSpace: "nowrap" }}>View the upgrade guide</span>
          </a>
        </>
      )}
    </GoabNotification>
  );
}

export default VersionUpdateNotification;