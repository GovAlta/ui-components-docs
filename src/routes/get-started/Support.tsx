import {
  GoabButton,
  GoabFormItem,
  GoabRadioGroup,
  GoabRadioItem,
  GoabSpacer, GoabText
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoabRadioGroupOnChangeDetail } from "@abgov/ui-components-common";

export default function SupportPage() {
  let navigate = useNavigate();

  const [issueSelection, setIssueSelection] = useState<string>("")

  function bugOrFeature(value: string) {
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
    <ComponentContent tocCssQuery="h2[id]">
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
        <GoabFormItem label="What would you like to do?" mt="xs">
          <GoabRadioGroup name="bug-or-feature" onChange={(event: GoabRadioGroupOnChangeDetail) => bugOrFeature(event.value)}>
            <GoabRadioItem value="bug" label="Report a bug" />
            <GoabRadioItem value="feature" label="Request a new feature" />
          </GoabRadioGroup>
        </GoabFormItem>
        <br />
        <GoabButton onClick={openPage} mb="xl">Raise an issue</GoabButton>
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
        <div className="hours">
          <h3 id="drop-in">Drop in Hours</h3>
          <span className="grey-text">(Tuesday and Friday 1:00 - 3:00pm MST)</span>
        </div>
        <p>
          For service teams to get feedback on their usage of the design system, propose new components or changes
          to existing components, ask any questions, and give feedback to the design system.
          <br />
          <a href="https://outlook.office365.com/book/BKGDesignsystemdropinhours@abgov.onmicrosoft.com/" target="_blank">Book a time</a>
        </p>
        <GoabSpacer vSpacing="m" />
        <h2 id="team">Design system team</h2>
        <GoabText as="h3" mb="2xs">Product Owner</GoabText>
        <p>
          Mark Elamatha | <a href="mailto:mark.elamatha@gov.ab.ca">mark.elamatha@gov.ab.ca</a>
        </p>
        <GoabText as="h3" mb="2xs">Scrum master and DevOps</GoabText>
        <p>
          Dustin Nielsen | <a href="mailto:dustin.nielsen@gov.ab.ca">dustin.nielsen@gov.ab.ca</a>
        </p>
        <GoabText as="h3" mb="2xs">Digital architect and Lead developer</GoabText>
        <p>
          Chris Olsen | <a href="mailto:chris.olsen@gov.ab.ca">chris.olsen@gov.ab.ca</a>
        </p>
        <GoabText as="h3" mb="2xs">Developers</GoabText>
        <p>
          Vanessa Tran | <a href="mailto:vanessa.m.tran@gov.ab.ca">vanessa.m.tran@gov.ab.ca</a>
          <br />
          Syed Zeeshan | <a href="mailto:syed.zeeshan@gov.ab.ca">syed.zeeshan@gov.ab.ca</a>
        </p>
        <GoabText as="h3" mb="2xs">QA Automation Developer</GoabText>
        <p>
          Ken Li | <a href="mailto:ken.li@gov.ab.ca">ken.li@gov.ab.ca</a>
        </p>
        <GoabText as="h3" mb="2xs">Service designer</GoabText>
        <p>
          Ali Nicholls Asikinack | <a href="mailto:ali.nicholls-asikinack@gov.ab.ca">ali.nicholls-asikinack@gov.ab.ca</a>
        </p>
        <GoabText as="h3" mb="2xs">UX designers</GoabText>
        <p>
          Thomas Jeffery | <a href="mailto:thomas.jeffery@gov.ab.ca">thomas.jeffery@gov.ab.ca</a>
          <br />
          Rianna Alizadeh | <a href="mailto:rianna.alizadeh@gov.ab.ca">rianna.alizadeh@gov.ab.ca</a>
        </p>
      </div>
    </ComponentContent>
  );
}
