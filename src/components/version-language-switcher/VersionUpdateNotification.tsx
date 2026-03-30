import { useEffect } from "react";
import { GoabNotification } from "@abgov/react-components";
import { MAX_CONTENT_WIDTH } from "../../global-constants";
import { useVersionUpdateNotification } from "./VersionUpdateNotificationContext";
import { getV2Link } from "../../utils";

export function VersionUpdateNotification() {
  const { isDismissed, dismiss, newLinkRef } = useVersionUpdateNotification();
  const v2UpgradeLink = getV2Link("/get-started/migration-guide");

  useEffect(() => {
    const el = document.querySelector("goa-notification");
    if (!el) return;

    const handleDismiss = () => dismiss();
    el.addEventListener("_dismiss", handleDismiss as EventListener);

    return () => el.removeEventListener("_dismiss", handleDismiss as EventListener);
  }, [dismiss]);

  if (isDismissed) return null;

  return (
    <GoabNotification type="information" maxContentWidth={MAX_CONTENT_WIDTH}>
        <>
          The new Design System is now available! Check out the{" "}
          <a
            ref={newLinkRef}
            href={v2UpgradeLink}
            className="no-external-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ whiteSpace: "nowrap" }}>migration guide</span>
          </a>.
        </>
    </GoabNotification>
  );
}

export default VersionUpdateNotification;