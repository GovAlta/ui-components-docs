import { Sandbox } from "@components/sandbox";
import "./question-page/question-page-examples.css";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabButton,
  GoabFormItem,
  GoabDropdown,
  GoabDropdownItem
} from "@abgov/react-components";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useContext } from "react";

export default function BasicPageWithDropdown() {
  const { version } = useContext(LanguageVersionContext);
  return (
    <div className="question-page-example">

      <Sandbox fullWidth allow={["h2", "h3", "a"]} skipRender>
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
          `}
        />

        {/*Angular Code Snippet - need for leadingContent slot*/}

        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <a href="#" className="back-link">
                Back
            </a>

            <goa-form-item label="Choose a location" mt="xl" labelSize="large">
                <goa-dropdown onChange={() => {}} name="province-territory" ariaLabelledBy="provinceLabel">
                    <goa-dropdown-item value="AB" label="Alberta"></goa-dropdown-item>
                    <goa-dropdown-item value="BC" label="British Columbia"></goa-dropdown-item>
                    <goa-dropdown-item value="MB" label="Manitoba"></goa-dropdown-item>
                    <goa-dropdown-item value="NB" label="New Brunswick"></goa-dropdown-item>
                    <goa-dropdown-item value="NL" label="Newfoundland and Labrador"></goa-dropdown-item>
                    <goa-dropdown-item value="NS" label="Nova Scotia"></goa-dropdown-item>
                    <goa-dropdown-item value="ON" label="Ontario"></goa-dropdown-item>
                    <goa-dropdown-item value="PE" label="Prince Edward Island"></goa-dropdown-item>
                    <goa-dropdown-item value="QC" label="Quebec"></goa-dropdown-item>
                    <goa-dropdown-item value="SK" label="Saskatchewan"></goa-dropdown-item>
                    <goa-dropdown-item value="NT" label="Northwest Territories"></goa-dropdown-item>
                    <goa-dropdown-item value="NU" label="Nunavut"></goa-dropdown-item>
                    <goa-dropdown-item value="YT" label="Yukon"></goa-dropdown-item>
                </goa-dropdown>
            </goa-form-item>
            <goa-button type="submit" mt="2xl">
                Continue
            </goa-button>
          `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <a href="#" className="back-link">
                Back
            </a>

            <goab-form-item label="Choose a location" mt="xl" labelSize="large">
                <goab-dropdown onChange={() => {}} name="province-territory" ariaLabelledBy="provinceLabel">
                    <goab-dropdown-item value="AB" label="Alberta"></goab-dropdown-item>
                    <goab-dropdown-item value="BC" label="British Columbia"></goab-dropdown-item>
                    <goab-dropdown-item value="MB" label="Manitoba"></goab-dropdown-item>
                    <goab-dropdown-item value="NB" label="New Brunswick"></goab-dropdown-item>
                    <goab-dropdown-item value="NL" label="Newfoundland and Labrador"></goab-dropdown-item>
                    <goab-dropdown-item value="NS" label="Nova Scotia"></goab-dropdown-item>
                    <goab-dropdown-item value="ON" label="Ontario"></goab-dropdown-item>
                    <goab-dropdown-item value="PE" label="Prince Edward Island"></goab-dropdown-item>
                    <goab-dropdown-item value="QC" label="Quebec"></goab-dropdown-item>
                    <goab-dropdown-item value="SK" label="Saskatchewan"></goab-dropdown-item>
                    <goab-dropdown-item value="NT" label="Northwest Territories"></goab-dropdown-item>
                    <goab-dropdown-item value="NU" label="Nunavut"></goab-dropdown-item>
                    <goab-dropdown-item value="YT" label="Yukon"></goab-dropdown-item>
                </goab-dropdown>
            </goab-form-item>
            <goab-button type="submit" mt="2xl">
                Continue
            </goab-button>
          `}
        />}

        {/*React Code Snippet - need for leadingContent slot*/}
        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <a href="#" className="back-link">
                Back
            </a>

            <GoAFormItem label="Choose a location" mt="xl" labelSize="large">
                <GoADropdown onChange={() => {}} name="province-territory" ariaLabelledBy="provinceLabel">
                    <GoADropdownItem value="AB" label="Alberta" />
                    <GoADropdownItem value="BC" label="British Columbia" />
                    <GoADropdownItem value="MB" label="Manitoba" />
                    <GoADropdownItem value="NB" label="New Brunswick" />
                    <GoADropdownItem value="NL" label="Newfoundland and Labrador" />
                    <GoADropdownItem value="NS" label="Nova Scotia" />
                    <GoADropdownItem value="ON" label="Ontario" />
                    <GoADropdownItem value="PE" label="Prince Edward Island" />
                    <GoADropdownItem value="QC" label="Quebec" />
                    <GoADropdownItem value="SK" label="Saskatchewan" />
                    <GoADropdownItem value="NT" label="Northwest Territories" />
                    <GoADropdownItem value="NU" label="Nunavut" />
                    <GoADropdownItem value="YT" label="Yukon" />
                </GoADropdown>
            </GoAFormItem>
            <GoAButton type="submit" mt="2xl">
                Continue
            </GoAButton>
          `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <a href="#" className="back-link">
                Back
            </a>

            <GoabFormItem label="Choose a location" mt="xl" labelSize="large">
                <GoabDropdown onChange={() => {}} name="province-territory" ariaLabelledBy="provinceLabel">
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
            <GoabButton type="submit" mt="2xl">
                Continue
            </GoabButton>
          `}
        />}

        <a href="#" className="back-link">
            Back
        </a>

        <GoabFormItem label="Choose a location" mt="xl" labelSize="large">
            <GoabDropdown onChange={() => {}} name="province-territory" ariaLabelledBy="provinceLabel">
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
        <GoabButton type="submit" mt="2xl">
            Continue
        </GoabButton>
      </Sandbox>
    </div>
  );
}
