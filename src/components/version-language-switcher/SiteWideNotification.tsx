import { GoabNotification } from "@abgov/react-components";
import { useLocation } from "react-router-dom";
import { useSiteWideNotification } from "@contexts/SiteWideNotificationContext";

export function SiteWideNotification() {
  const { isDismissed, dismiss } = useSiteWideNotification();
  const location = useLocation();

  const isComponentOrExamplePage =
    location.pathname.startsWith("/components") || location.pathname.startsWith("/examples");

  if (isComponentOrExamplePage || isDismissed) return null;

  return (
    <GoabNotification type="information" onDismiss={dismiss}>
      Select your development framework to see all code in your development languages. You can change this in the top
      right of the screen.
    </GoabNotification>
  );
}

export default SiteWideNotification;