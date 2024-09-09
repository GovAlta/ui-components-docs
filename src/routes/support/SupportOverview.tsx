import {
  GoABlock, 
  GoASpacer,
  GoADivider,
} from "@abgov/react-components";
import { Link } from "react-router-dom";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function SupportOverviewPage() {
  return (
    <ComponentContent>
      <h1>Support</h1>
      <h3>
        Get support building government services. The design system team can help Government of Alberta product teams use the components, patterns, design and usage guidelines, best practices for accessibility, and more.
      </h3>

      <div className="max-width-72ch">
        <h2>
          Drop in hours
        </h2>
        <h3>(every Tuesday and Friday 1:00 - 3:00pm MST)</h3>
        <p>
          For designers and developers on Government of Alberta product teams to get feedback on their usage of the design system, propose new components or changes to existing components, ask any questions, and give feedback to the design system.
        </p>
        <GoABlock gap="m" mb="2xl">
          <Link to="/support/drop-in-hours">Learn more about Drop in hours</Link>
          <a
            href="https://outlook.office365.com/owa/calendar/BKGDesignsystemdropinhours@abgov.onmicrosoft.com/bookings/"
            target="_blank">
            Book a time
          </a>
        </GoABlock>
        <h2>Submit an issue</h2>
        <h3>Report a bug</h3>
        <p>
          If an issue or inconsistency is encountered within the design system, please use GitHub to
          report a bug. Doing so notifies the design system team of a problem requiring immediate
          attention and resolution. Ensure that the bug report is fully filled out; this ensures
          that the team has all the necessary information to investigate, prioritize, and fix the
          issue effectively. This is intended for Government of Alberta product teams.<br />
          <a href="https://github.com/GovAlta/ui-components/issues/new/choose" target="_blank">
            Report a bug on Github
          </a>
        </p>
        <GoASpacer vSpacing="2xs"></GoASpacer>
        <h3>Request a feature</h3>
        <p>
          Use GitHub to submit well-defined requests for new features. Submitting a feature request
          implies that the contribution process has been followed, providing the design system team
          with actionable items to evaluate and prioritize. This is intended for Government of Alberta product teams.
          <GoABlock gap="l">
            <a href="https://github.com/GovAlta/ui-components/issues/new/choose" target="_blank">
              Request a feature on Github
            </a>
            <Link to="/support/contribute">View our contribution process</Link>
          </GoABlock>
        </p>
        
        <GoADivider mt="2xl" mb="2xl"></GoADivider>        
        
        <h2>Design system team</h2>
        <div className="ds-team-title">Product Owner</div>
        <div className="ds-team">
          Mark Elamatha | <a href="mailto:mark.elamatha@gov.ab.ca">mark.elamatha@gov.ab.ca</a>
        </div>

        <div className="ds-team-title">Digital architect and scrum master</div>
        <div>
          Dustin Nielsen | <a href="mailto:dustin.nielsen@gov.ab.ca">dustin.nielsen@gov.ab.ca</a>
        </div>

        <div className="ds-team-title">Developers</div>
        <div>
          Chris Olsen | <a href="mailto:chris.olsen@gov.ab.ca">chris.olsen@gov.ab.ca</a>
        </div>
        <div>
          Vanessa Tran | <a href="mailto:vanessa.m.tran@gov.ab.ca">vanessa.m.tran@gov.ab.ca</a>
        </div>
        <div>
          Syed Zeeshan | <a href="mailto:syed.zeeshan@gov.ab.ca">syed.zeeshan@gov.ab.ca</a>
        </div>

        <div className="ds-team-title">Service designer</div>
        <div>
          Ali Nicholls Asikinack |{" "}
          <a href="mailto:ali.nicholls-asikinack@gov.ab.ca">ali.nicholls-asikinack@gov.ab.ca</a>
        </div>

        <div className="ds-team-title">UX designers</div>
        <div>
          Thomas Jeffery | <a href="mailto:thomas.jeffery@gov.ab.ca">thomas.jeffery@gov.ab.ca</a>
        </div>
        <div>
          Rianna Alizadeh |{" "}
          <a href="mailto:rianna.alizadeh@gov.ab.ca">rianna.alizadeh@gov.ab.ca</a>
        </div>

        <div className="ds-team-title">QA</div>
        <div>
          Ken Li |{" "}
          <a href="mailto:ken.li@gov.ab.ca">ken.li@gov.ab.ca</a>
        </div>
        
      </div>
    </ComponentContent>
  );
}
