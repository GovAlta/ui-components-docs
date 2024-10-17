import {
  GoABlock,
  GoAButton,
  GoADivider,
  GoARadioGroup,
  GoARadioItem
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SupportPage() {
  let navigate = useNavigate();

  const [issueSelection, setIssueSelection] = useState<string>("")

  function bugOrFeature(name: string, value: string) {
    setIssueSelection(value);
  }

  function openPage() {
    if (issueSelection === "bug") {
      navigate("/get-started/support/report-bug");
    } else {
      navigate("/get-started/support/request-feature");
    }
  }

  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">
      <h1>Support</h1>
      <h3>
        Get help from our team with using the design system, including components, guidelines, best practices, and accessibility.
      </h3>

      <div className="max-width-72ch">
        <h2 id="raise-issue">
          Raise an issue
        </h2>
        <p>
          Let us know if you find a problem in the design system or if you need a new component or pattern.
        </p>
        <h4>What would you like to do?</h4>
        <GoARadioGroup name="bug-or-feature" onChange={bugOrFeature}>
          <GoARadioItem value="bug" label="Report a bug" />
          <GoARadioItem value="feature" label="Request a new feature" />
        </GoARadioGroup>
        <br />
        <GoAButton onClick={openPage} mt="m">Raise an issue</GoAButton>
        <h2 id="talk">Talk to us</h2>
        <h3>Slack</h3>
        <p>
          <a href="https://goa-dio.slack.com/archives/C02PLLT9HQ9" target="_blank">#design-system-support</a>
          <br />
          Reach out to the design system directly to ask a question and get support.
        </p>
        <p>
          <a href="https://goa-dio.slack.com/archives/C02BQQBKN66" target="_blank">#figma</a>
          <br />
          A place for any Figma discussion. Share tips, tricks, techniques, ask questions, report issues.
        </p>
        <GoABlock gap="m" alignment="center">
          <h3 id="drop-in">Drop in Hours</h3>
          <span className="grey-text">(every Friday 1:00 - 3:00pm MST)</span>
        </GoABlock>
        <p>
          For service teams to get feedback on their usage of the design system, propose new components or changes
          to existing components, ask any questions, and give feedback to the design system.
          <br />
          <a href="https://outlook.office365.com/book/BKGDesignsystemdropinhours@abgov.onmicrosoft.com/" target="_blank">Book a time</a>
        </p>
        
        <GoADivider mt="2xl" mb="2xl"></GoADivider>        
        
        <h2 id="team">Design system team</h2>
        <h3 id="po">Product Owner</h3>
        <p>
          Mark Elamatha | <a href="mailto:mark.elamatha@gov.ab.ca">mark.elamatha@gov.ab.ca</a>
        </p>

        <h3 id="architect">Digital architect and scrum master</h3>
        <p>
          Dustin Nielsen | <a href="mailto:dustin.nielsen@gov.ab.ca">dustin.nielsen@gov.ab.ca</a>
        </p>

        <h3 id="developers">Developers</h3>
        <p>
          Chris Olsen | <a href="mailto:chris.olsen@gov.ab.ca">chris.olsen@gov.ab.ca</a>
          <br />
          Vanessa Tran | <a href="mailto:vanessa.m.tran@gov.ab.ca">vanessa.m.tran@gov.ab.ca</a>
          <br />
          Syed Zeeshan | <a href="mailto:syed.zeeshan@gov.ab.ca">syed.zeeshan@gov.ab.ca</a>
        </p>

        <h3 id="qa">QA Automation Developer</h3>
        <p>
          Ken Li | <a href="mailto:ken.li@gov.ab.ca">ken.li@gov.ab.ca</a>
        </p>

        <h3 id="service">Service designer</h3>
        <p>
          Ali Nicholls Asikinack | <a href="mailto:ali.nicholls-asikinack@gov.ab.ca">ali.nicholls-asikinack@gov.ab.ca</a>
        </p>

        <h3 id="ux">UX designers</h3>
        <p>
          Thomas Jeffery | <a href="mailto:thomas.jeffery@gov.ab.ca">thomas.jeffery@gov.ab.ca</a>
          <br />
          Rianna Alizadeh | <a href="mailto:rianna.alizadeh@gov.ab.ca">rianna.alizadeh@gov.ab.ca</a>
        </p>
      </div>
    </ComponentContent>
  );
}
