import { GoabCallout, GoabText } from "@abgov/react-components";
import { Link } from "react-router-dom";

export const OutofSupportPage = () => {
  return (
    <>
      <GoabText tag="h1" size="heading-xl">Out-of-support versions</GoabText>

      <GoabText size="body-l" tag="h3">
        Versions v3 (Angular) and v5 (React) are no longer supported.
      </GoabText>

      <GoabText tag={"p"} size="heading-m">
        What this means:
      </GoabText>

      <GoabText size="body-m" mb="xl">
        <ul>
          <li><strong>No fixes or patches:</strong> We won't ship bug or security fixes for v3/v5</li>
          <li><strong>No new features or enhancements:</strong> All new work happens in the current major version.</li>
          <li><strong>Use at your own risk:</strong> Existing projects may continue to run, but we won't test or guarantee compatibility with new browsers, OS updates, or framework changes.</li>
        </ul>
      </GoabText>

      <GoabText tag={"p"} size="heading-m">
        What to do next
      </GoabText>

      <GoabText size="body-m" mb="xl">
        <ul>
          <li>Upgrade to the latest version. See the <Link to="update">update guide</Link></li>
          <li>Need help planning the upgrade? Book a <a href="https://outlook.office365.com/owa/calendar/BKGDesignsystemdropinhours@abgov.onmicrosoft.com/bookings/" target="_blank">drop in hours session</a> for guidance</li>
        </ul>
      </GoabText>

      <GoabCallout type="important" size={"medium"} heading="Active maintenance has ended"
                   maxWidth={"65ch"} mt={"xl"}>
        Projects still using v3/v5 will continue to work, but new issues or bugs in v3 (Angular) and v5 (React) will not be fixed.
      </GoabCallout>
    </>
  );
}
