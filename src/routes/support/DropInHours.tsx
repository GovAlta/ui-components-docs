import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function DropInHoursPage() {
  return (
    <ComponentContent>
      <h1>Drop in hours</h1>
      <h3>
        <a href="https://outlook.office365.com/owa/calendar/BKGDesignsystemdropinhours@abgov.onmicrosoft.com/bookings/" target="_blank">
          Book a time
        </a>
      </h3>

      <div className="max-width-72ch">
        <p>Every Tuesday and Friday from 1:00pm - 3:00pm MST</p>
        <h2>Purpose</h2>
        <p>
          For designers and developers on Government of Alberta product teams seeking feedback on their usage of design system, content, styles, and anything else. This is also a great time to propose new components or changes to existing components, ask any questions, and give feedback to the design system.
        </p>
        <h2>Audience</h2>
        <p>
          Drop in hours are for intended for designers and developers from all Government of Alberta product teams.
        </p>

      </div>
    </ComponentContent>
  );
}
