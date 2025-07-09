import { Sandbox } from "@components/sandbox";
import "./question-page/question-page-examples.css";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabButton,
  GoabDropdown, GoabDropdownItem,
  GoabFormItem,
  GoabInput
} from "@abgov/react-components";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useContext } from "react";

export default function GroupRelatedQuestionsTogetherOnAQuestionPage() {
  useContext(LanguageVersionContext);
  return (
    <div className="question-page-example">


      <Sandbox fullWidth allow={["h2", "h3", "a"]}>
        {/*CSS Code Snippet*/}
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
            
            a.back-link + h2 {
              margin-top: var(--goa-space-2xl);
            }
            
            h2.section-title {
              margin-bottom: 0;
            }
            
            h2.section-title + h3 {
              margin-top: var(--goa-space-xs);
            }
          `}
        />

        <a href="#" className="back-link">
          Back
        </a>
        <h2 className="section-title">Your address</h2>
        <h3>This is the home address of the person applying</h3>
        <GoabFormItem label="Address line 1" mt="l">
          <GoabInput
            onChange={() => {
            }}
            name="address-line-1"
            ariaLabel="Address line 1"
            width="100%"
          />
        </GoabFormItem>
        <GoabFormItem label="Address line 2" mt="xl">
          <GoabInput
            onChange={() => {
            }}
            name="address-line-2"
            ariaLabel="Address line 2"
            width="100%"
          />
        </GoabFormItem>
        <GoabFormItem label="Town or city" mt="xl">
          <GoabInput
            onChange={() => {
            }}
            name="town-city"
            ariaLabel="Town or city name"
            width={"460px"}
          />
        </GoabFormItem>
        <GoabFormItem label="Province or territory" mt="xl" id="provinceLabel">
          <GoabDropdown onChange={() => {
          }} name="province-territory" ariaLabelledBy="provinceLabel">
            <GoabDropdownItem value="AB" label="Alberta" />
            <GoabDropdownItem value="BC" label="British Columbia" />
            <GoabDropdownItem value="MB" label="Manitoba" />
            <GoabDropdownItem value="NB" label="New Brunswick" />
            <GoabDropdownItem value="NL" label="Newfoundland and Labrador" />
            <GoabDropdownItem value="NS" label="Nova Scotia" />
            <GoabDropdownItem value="ON" label="Ontario" />
            <GoabDropdownItem value="PE" label="Prince Edward Island" />
            <GoabDropdownItem value="QC" label="Quebec" />
            <GoabDropdownItem value="SK" label="Saskatchewan" />
            <GoabDropdownItem value="NT" label="Northwest Territories" />
            <GoabDropdownItem value="NU" label="Nunavut" />
            <GoabDropdownItem value="YT" label="Yukon" />
          </GoabDropdown>
        </GoabFormItem>
        <GoabFormItem label="Postal code" mt="xl">
          <GoabInput onChange={() => {
          }} name="postal-code" width={"105px"} />
        </GoabFormItem>
        <GoabButton type="submit" mt="2xl">
          Save and continue
        </GoabButton>
      </Sandbox>

    </div>
  );
}
