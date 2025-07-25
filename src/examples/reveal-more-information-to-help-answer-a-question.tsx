import { Sandbox } from "@components/sandbox";
import "./question-page/question-page-examples.css";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabButton, GoabDetails,
  GoabFormItem,
  GoabRadioGroup,
  GoabRadioItem
} from "@abgov/react-components";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useContext } from "react";

export default function RevealMoreInformationToHelpAnswerAQuestion() {
  useContext(LanguageVersionContext);
  return (
    <div className="question-page-example">

      <Sandbox fullWidth allow={["a"]}>
        {/*
        CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            a.back-link::before {
              content: "";
              display: inline-block;
              width: 42px;
              height: 24px;
              vertical-align: middle;
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%230070C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }

            a.back-link:visited::before,
            a.back-link:hover::before {
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%23004f84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }
            
            a.back-link {
             margin-top: var(--goa-space-m);
            }
        `}
        />

        <a href="#" className="back-link">
          Back
        </a>
        <GoabFormItem
          mt="2xl"
          label="Do you pay for child care?"
          labelSize="large"
          helpText="Examples of child care are daycares, day homes and baby-sisters.">
          <GoabRadioGroup
            name="child-care"
            ariaLabel="Do you pay for child care?"
            onChange={() => {
            }}>
            <GoabRadioItem value="yes" label="Yes"></GoabRadioItem>
            <GoabRadioItem value="no" label="No"></GoabRadioItem>
          </GoabRadioGroup>
        </GoabFormItem>

        <GoabDetails heading="Why are we asking this question?" mt="xl">
          <p>We ask this question to determine if you are eligible for child care benefits.</p>
        </GoabDetails>
        <GoabButton type="submit" mt="2xl">
          Save and continue
        </GoabButton>
      </Sandbox>

    </div>
  );
}
