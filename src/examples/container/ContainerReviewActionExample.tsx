import "./container-review-action-example.css";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabBlock,
  GoabButton,
  GoabContainer,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabGrid,
  GoabRadioGroup,
  GoabRadioItem,
  GoabTextarea,
} from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const ContainerReviewActionExample = () => {
  const { version } = useContext(LanguageVersionContext);
  return (
    <Sandbox fullWidth flags={["reactive"]}>
      <CodeSnippet
        lang="css"
        allowCopy={true}
        code={`
            h3.container-example-4--h3 {
              margin-bottom: var(--goa-space-m);
            }
            label.container-example-4--label {
              font: var(--goa-typography-body-s);
              color: var(--goa-color-text-secondary);
            }
            .container-example-4--container-content {
              font: var(--goa-typography-body-m);
            }
            p.container-example-4--container-content {
              margin-bottom: 0;
            }

            h5.container-example-4--h5 {
              font: var(--goa-typography-body-m);
              color: var(--goa-color-text-secondary);
              margin-top: var(--goa-space-m);
              margin-bottom: var(--goa-space-m);
            }

            h6.container-example-4--h6 {
              font: var(--goa-typography-heading-s);
              margin-top:0;
              margin-bottom: 0;
            }
          `}
      />

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags={["angular", "reactive"]}
          allowCopy={true}
          code={`
                  export class ExampleComponent {
                    form!: FormGroup;
                    constructor(private fb: FormBuilder) {
                      this.form = this.fb.group({
                        case: [''],
                        reason: ['']
                      })
                    }
                    onClick() {
                      console.log("clicked!");
                    }
                  }  
                `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags={"react"}
          allowCopy={true}
          code={`
        const radioGroupOnChange = (event: GoabRadioGroupOnChangeDetail) => {
          console.log(event.value);
        };
        const dropdownOnChange = (event: GoabDropdownOnChangeDetail) => {
          console.log(event.value);
        };
        const textareaOnChange = (event: GoabTextAreaOnChangeDetail) => {
          console.log(event.value);
        };
        const onClick = () => {
          console.log('clicked!');
        };  
        `}
        />
      )}

      <GoabGrid minChildWidth="315px">
        <GoabContainer accent="thin" type="non-interactive">
          <h3 className="container-example-4--h3">Appearance details</h3>
          <GoabGrid minChildWidth="40%" gap="m">
            <GoabBlock direction="column" gap="xs">
              <label className="container-example-4--label">Accused name</label>
              <span className="container-example-4--container-content">Doe, John Scott</span>
            </GoabBlock>

            <GoabBlock direction="column" gap="xs">
              <label className="container-example-4--label">Date of birth</label>
              <span className="container-example-4--container-content">Mar 14, 2021</span>
            </GoabBlock>

            <GoabBlock direction="column" gap="xs">
              <label className="container-example-4--label">Court location</label>
              <span className="container-example-4--container-content">Calgary</span>
            </GoabBlock>

            <GoabBlock direction="column" gap="xs">
              <label className="container-example-4--label">Upcoming appearance date(s)</label>
              <span className="container-example-4--container-content">Sep 20, 2021</span>
            </GoabBlock>
          </GoabGrid>

          <h5 className="container-example-4--h5">Docket number(s) $ charges</h5>
          <GoabContainer type="non-interactive">
            <h6 className="container-example-4--h6">1) 12345678</h6>
            <p className="container-example-4--container-content">CC 334(1) - Theft under $5000</p>
            <p className="container-example-4--container-content">CC 268(1) - Aggravated assult</p>
          </GoabContainer>

          <GoabContainer type="non-interactive">
            <h6 className="container-example-4--h6">2) 12345678</h6>
            <p className="container-example-4--container-content">CC 334(1) - Theft under $5000</p>
            <p className="container-example-4--container-content">CC 268(1) - Aggravated assult</p>
          </GoabContainer>

          <GoabContainer type="non-interactive">
            <h6 className="container-example-4--h6">3) 12345678</h6>
            <p className="container-example-4--container-content">CC 334(1) - Theft under $5000</p>
            <p className="container-example-4--container-content">CC 268(1) - Aggravated assult</p>
          </GoabContainer>
        </GoabContainer>
        <GoabContainer accent="thin" width={"content"}>
          <form>
            <h3 className="container-example-4--h3">Adjournment request</h3>
            <p className="container-example-4--container-content">
              Keep track of the individuals who are placed in lodges and may qualify for the Lodge
              Assistance Program subsidy.
            </p>

            <GoabFormItem label="Case history and new request" mt="l">
              <GoabRadioGroup name="case" onChange={() => {}}>
                <GoabRadioItem value="grant" label="Grant"></GoabRadioItem>
                <GoabRadioItem value="deny" label="Deny"></GoabRadioItem>
              </GoabRadioGroup>
            </GoabFormItem>

            <GoabFormItem label="Reason to deny">
              <GoabDropdown name="reason" width="100%" onChange={() => {}}>
                <GoabDropdownItem value="1" label="Incomplete Application"></GoabDropdownItem>
                <GoabDropdownItem value="2" label="Eligibility Criteria Not Met"></GoabDropdownItem>
                <GoabDropdownItem
                  value="3"
                  label="Documentation Verification Failure"
                ></GoabDropdownItem>
              </GoabDropdown>
            </GoabFormItem>

            <GoabFormItem label="Message" mt="l">
              <GoabTextarea name="message" rows={5} width="100%" value="" onChange={() => {}} />
            </GoabFormItem>

            <GoabButton mt="xl" onClick={() => {}}>
              Confirm
            </GoabButton>
          </form>
        </GoabContainer>
      </GoabGrid>
    </Sandbox>
  );
};
