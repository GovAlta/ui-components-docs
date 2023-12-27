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
        heading="Need help? Connect with us on Slack"
      >
        <a href="https://goa-dio.slack.com/archives/C02PLLT9HQ9" target="_blank">
          #design-system-support
        </a>{" "}
        General information and discussion related to design system including
        questions, new component proposals, contribution, and other requests.
      </GoACallout>
    </div>
  );
};
