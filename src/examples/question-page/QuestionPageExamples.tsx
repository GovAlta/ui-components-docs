import { Sandbox } from "@components/sandbox";
import {
  GoABlock,
  GoAButton,
  GoADetails, GoADropdown, GoADropdownItem,
  GoAFormItem, GoAInput,
  GoARadioGroup,
  GoARadioItem
} from "@abgov/react-components";
import "./question-page-example.css";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export default function QuestionPageExamples() {

  return (
    <div className="question-page-example">
      <h3 id="component-example-1">One question</h3>
      <Sandbox fullWidth>
        <GoAButton type="tertiary" leadingIcon="arrow-back" mb="2xl">
          Back
        </GoAButton>
        <GoAFormItem
          label="Are you currently in school?"
          labelSize="large"
          helpText="School includes foundational, skills and employment training, micro-credentials, post-secondary and continuing education.">
          <GoARadioGroup name="school" ariaLabel="are you currently in school?" onChange={() => {}}>
            <GoARadioItem value="yes" label="Yes"></GoARadioItem>
            <GoARadioItem value="no" label="No">
              No
            </GoARadioItem>
          </GoARadioGroup>
        </GoAFormItem>
        <GoAButton type="submit" mt="2xl">
          Save and continue
        </GoAButton>
      </Sandbox>

      <h3 id="component-example-2">Additional background information</h3>
      <Sandbox fullWidth>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            .form-header h2 {
              margin-top: 0;
              margin-bottom: 0;
            }
            .form-header + p {
              margin-top: var(--goa-space-l);
            }
            p.last-paragraph {
              margin-bottom: 0;
            }
          `}
        />
        <GoABlock direction="column" gap="none">
          <GoAButton type="tertiary" leadingIcon="arrow-back" mb="2xl">
            Back
          </GoAButton>
          <div className="form-header">
            <h2>Current school status</h2>
          </div>
          <p>
            School can encompass foundational programs that help individuals gain basic skills for
            further learning and living, such as literacy and numeracy courses. It also includes
            skills and employment training programs, designed to equip you with specific skills for
            the job market.
          </p>
          <p>
            Post-secondary education, such as Bachelor's, Master's, or Doctoral degrees, and
            continuing education courses for professional or personal development, are also
            categorized under 'school'.
          </p>
          <p className="last-paragraph">
            Contact your provider if you’re concerned about your school status.
          </p>
          <GoAFormItem label="Are you currently in school?" mt="2xl">
            <GoARadioGroup name="school" ariaLabel="are you currently in school?" onChange={() => {}}>
              <GoARadioItem value="yes" label="Yes"></GoARadioItem>
              <GoARadioItem value="no" label="No"></GoARadioItem>
            </GoARadioGroup>
          </GoAFormItem>
          <GoAButton type="submit" mt="2xl">
            Save and continue
          </GoAButton>
        </GoABlock>
      </Sandbox>

      <h3 id="component-example-3">Progressive disclosure</h3>
      <Sandbox fullWidth>
        <GoABlock direction="column" gap="none">
          <GoAButton type="tertiary" leadingIcon="arrow-back" mb="2xl">
            Back
          </GoAButton>

          <GoAFormItem
            label="Do you pay for child care?"
            labelSize="large"
            helpText="Examples of child care are daycares, day homes and baby-sisters.">
            <GoARadioGroup name="child-care" ariaLabel="Do you pay for child care?" onChange={() => {}}>
              <GoARadioItem value="yes" label="Yes"></GoARadioItem>
              <GoARadioItem value="no" label="No"></GoARadioItem>
            </GoARadioGroup>
          </GoAFormItem>

          <GoADetails heading="Why are we asking this question?" mt="xl">
            <p>We ask this question to determine if you are eligible for child care benefits.</p>
          </GoADetails>
          <GoAButton type="submit" mt="2xl">
            Save and continue
          </GoAButton>
        </GoABlock>
      </Sandbox>

      <h3 id="component-example-4">Section title</h3>
      <Sandbox fullWidth>
        <GoABlock direction="column" gap="none">
          <GoAButton type="tertiary" leadingIcon="arrow-back" mb="xs">
            Back
          </GoAButton>

          <h3>Personal information</h3>
          <GoAFormItem
            label="Do you currently live in Canada?"
            labelSize="large"
            helpText="Helper text">
            <GoARadioGroup name="canada" ariaLabel="Do you currently live in Canada?" onChange={() => {}}>
              <GoARadioItem value="yes">Yes</GoARadioItem>
              <GoARadioItem value="no">No</GoARadioItem>
            </GoARadioGroup>
          </GoAFormItem>
          <GoAButton type="submit" mt="2xl">
            Save and continue
          </GoAButton>
        </GoABlock>
      </Sandbox>

      <h3 id="component-example-5">Simple progress indicator</h3>
      <Sandbox fullWidth>
        <GoABlock direction="column" gap="none">
          <GoAButton type="tertiary" leadingIcon="arrow-back" mb="xs">
            Back
          </GoAButton>
          <h3>Question 3 of 9</h3>
          <GoAFormItem
            label="Do you currently live in Canada?"
            labelSize="large"
            helpText="Helper text">
            <GoARadioGroup name="canada" ariaLabel="Do you currently live in Canada?" onChange={() => {}}>
              <GoARadioItem value="yes" label="Yes"></GoARadioItem>
              <GoARadioItem value="no" label="No"></GoARadioItem>
            </GoARadioGroup>
          </GoAFormItem>
          <GoAButton type="submit" mt="2xl">
            Save and continue
          </GoAButton>
        </GoABlock>
      </Sandbox>

      <h3 id="component-example-6">Multiple questions</h3>
      <Sandbox fullWidth>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            .form-header h2 {
              margin-top: 0;
              margin-bottom: 0;
            }
            .form-header h3 {
              margin-bottom: var(--goa-space-xs);
            }
            .form-header h2 + h3 {
              margin-top: var(--goa-space-xs);
            }
          `}
        />
        <GoABlock direction="column" gap="none">
          <GoAButton type="tertiary" leadingIcon="arrow-back" mb="2xl">
            Back
          </GoAButton>
          <div className="form-header">
            <h2>Your address</h2>
            <h3>This is the home address of the person applying</h3>
          </div>
          <GoAFormItem label="Address line 1" mt="l">
            <GoAInput onChange={() => {}} name="address-line-1" ariaLabel="Address line 1" width="50ch" />
          </GoAFormItem>
          <GoAFormItem label="Address line 2" mt="xl">
            <GoAInput onChange={() => {}} name="address-line-2" ariaLabel="Address line 2" width="50ch" />
          </GoAFormItem>
          <GoAFormItem label="Town or city" mt="xl">
            <GoAInput onChange={() => {}} name="town-city" ariaLabel="Town or city name" />
          </GoAFormItem>
          <GoAFormItem label="Province or territory" mt="xl" id="provinceLabel">
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
          <GoAFormItem label="Postal code" mt="xl">
            <GoAInput onChange={() => {}} name="postal-code" maxLength={6} />
          </GoAFormItem>
          <GoAButton type="submit" mt="2xl">
            Save and continue
          </GoAButton>
        </GoABlock>
      </Sandbox>

      <h3 id="component-example-7">Multiple questions and a simple progress indicator</h3>
      <Sandbox fullWidth>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            .form-header h2 {
              margin-top: 0;
              margin-bottom: 0;
            }
            .form-header h3 {
              margin-bottom: var(--goa-space-xs);
            }
            .form-header h2 + h3 {
              margin-top: var(--goa-space-xs);
            }
          `}
        />
        <GoABlock direction="column" gap="none">
          <GoAButton type="tertiary" leadingIcon="arrow-back" mb="xs">
            Back
          </GoAButton>
          <div className="form-header">
            <h3>Step 1 of 5</h3>
            <h2>Personal information</h2>
          </div>

          <GoAFormItem label="What is your name?" mt="xl">
            <GoAInput onChange={() => {}} name="name" ariaLabel="what is your name?" width="50ch" />
          </GoAFormItem>
          <GoAFormItem label="What is your phone number?" mt="xl">
            <GoAInput onChange={() => {}} name="phone-number" ariaLabel="what is your phone number?" leadingContent="+1" />
          </GoAFormItem>
          <GoAFormItem label="What is your home postal code?" mt="xl">
            <GoAInput onChange={() => {}} name="postal-code" width="14ch" ariaLabel="what is your home postal code, max length is 6" maxLength={6}></GoAInput>
          </GoAFormItem>
          <GoAButton type="submit" mt="2xl">
            Save and continue
          </GoAButton>
        </GoABlock>
      </Sandbox>
    </div>
  );
}
