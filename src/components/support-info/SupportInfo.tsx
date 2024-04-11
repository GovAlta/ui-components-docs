import { GoACallout } from "@abgov/react-components";
import "./SupportInfo.css";

export const SupportInfo = (props:{hidden?: boolean}) => {
  if(props.hidden){
    return null;
  }
  return (
    <div className="support-info">
      <GoACallout
        type="information"
        heading="Need help? Join us in Drop in hours"
      >
        <a href="https://outlook.office365.com/book/BKGDesignsystemdropinhours@abgov.onmicrosoft.com/" target="_blank">
          Book time with us in drop in hours
        </a>{" "}
        Get feedback on usage of the design system, propose new ideas or components or changes 
        to existing components, ask any questions, and give feedback to the design system.
      </GoACallout>
    </div>
  );
};
