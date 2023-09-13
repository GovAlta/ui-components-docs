import "./ContactSupport.css";
import { GoACallout } from "@abgov/react-components";

export const ContactSupport = () => {
  return (
    <div className="contact-support-card">
      <GoACallout
        type="information"
        heading="Need help? Connect with us on Slack"
        mt="2xl"
        mb="2xl"
      >
        <div>
          <a href="#">#design-system-support</a> General information and
          discussion related to design system including questions, new component
          proposals, contribution, and other requests.
        </div>
      </GoACallout>
    </div>
  );
};