import { GoabCallout } from "@abgov/react-components";
import "./SupportInfo.css";

export const SupportInfo = (props: { hidden?: boolean }) => {
  if (props.hidden) {
    return null;
  }
  return (
    <div className="support-info">
      <GoabCallout
        type="information"
        heading="Need help building a government service?"
      >
        Join design system drop in hours to get feedback on your service, propose new components or patterns, suggest changes
        to existing resources, ask questions, and give feedback to the design system. These sessions are for Government of Alberta product teams.
        <br></br>
        <a href="https://outlook.office365.com/book/BKGDesignsystemdropinhours@abgov.onmicrosoft.com/" target="_blank">
          Book time in drop in hours
        </a>{" "}
      </GoabCallout>
    </div>
  );
};
