import {
  GoABlock,
  GoACheckbox,
  GoAContainer,
  GoADivider,
  GoAFormItem,
  GoAGrid,
  GoAInput,
  GoATable,
} from "@abgov/react-components";
import { DoDont } from "@components/do-dont/DoDont";
import { Link } from "react-router-dom";

export default function HelperTextPage() {
  return (
    <>
      <h1>Helper text</h1>
      <h3>
        Helper text is additional context and guidance that is always visible below an input. The
        text instructs a user on what needs to be completed to move to the next question in the form
        or process.
      </h3>
      <span>Helper text is available within: </span>
      <span>
        <Link to="/components/text-field">Text Input</Link>,{" "}
        <Link to="/components/radio">Radio</Link>, <Link to="/components/dropdown">Dropdown</Link>,{" "}
        <Link to="/components/checkbox">Checkbox</Link>, <Link to="/components/button">Button</Link>
      </span>
      <h3></h3>
      <GoAContainer type="non-interactive" mt="2xl" mb="2xl">
        <div
          className="example"
          style={{
            margin: "0 auto",
            textAlign: "left",
          }}>
          <GoAFormItem
            label="Project name"
            labelSize="regular"
            helpText="Select an existing or create a new project name.">
            <GoAInput name="item" onChange={() => {}} value=""></GoAInput>
          </GoAFormItem>
        </div>
      </GoAContainer>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <h2 id="considerations">Considerations</h2>
      <p>Consider the following ways to convey more information:</p>
      <GoATable width="100%" mb="xl">
        <thead>
          <tr>
            <th style={{ font: "var(--goa-typography-body-s)" }}>Is your content...</th>
            <th>Essential</th>
            <th>Supporting</th>
            <th>Long</th>
            <th>Short</th>
            <th>Persistant</th>
            <th>Temporary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a></a>Helper text
            </td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked={false} name="helper-text" disabled={true} />
            </td>
          </tr>
          <tr>
            <td>Accordion</td>
            <td>
              <GoACheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
          </tr>
          <tr>
            <td>Callout</td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked={false} name="helper-text" disabled={true} />
            </td>
          </tr>
          <tr>
            <td>Details</td>
            <td>
              <GoACheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
          </tr>
          <tr>
            <td>Tooltip</td>
            <td>
              <GoACheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoACheckbox checked name="helper-text" disabled={true} />
            </td>
          </tr>
        </tbody>
      </GoATable>
      <p>View a pattern and guide on how to show more information.</p>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <h2 id="anatomy">Anatomy</h2>
      <p>Helper text can be used with any input.</p>
      <GoAContainer>
        <div style={{ textAlign: "center" }}>
          <img src="/images/helper-text/anatomy.png" width="80%"></img>
        </div>
      </GoAContainer>
      <ol>
        <li>Input label + optional / required</li>
        <li>Text Input</li>
        <li>Helper Text</li>
      </ol>
      <p>Examples of helper text within different inputs</p>
      <img src="/images/helper-text/examples.png" width="80%"></img>
      <ol>
        <li>Input label + optional / required</li>
        <li>Input control(s)</li>
        <li>Helper Text</li>
      </ol>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <h2 id="language-and-tone">Language and Tone</h2>
      <h3>Keep it concise</h3>
      <p>
        Helper text should be short and to the point. Avoid long paragraphs or complicated
        explanations.
      </p>
      <h3>Use plain language</h3>
      <p>
        Write in a language that is easy to understand for your target audience. Avoid technical
        jargon or complex terms.
        <br />
        <a
          href="https://www.alberta.ca/web-writing-style-guide-writing-style#:~:text=depending%20on%20audience-,Plain%20language,-Write%20all%20web"
          target="_blank">
          Web writing style guide - Plain language
        </a>
      </p>
      <h3>Provide examples</h3>
      <p>
        Examples can help clarify the type of input you are looking for. For example: if you are
        asking for a phone number, provide an example of the format you are expecting.
      </p>
      <h3>Be specific</h3>
      <p>Use specific language to describe what type of information you are looking for.</p>
      <h3>Use specific language to describe what type of information you are looking for.</h3>
      <p>
        Write numbers using digits E.g. “342” except when the number starts the sentence or is the
        number ‘one’.
        <br />
        <a
          href="https://www.alberta.ca/web-writing-style-guide-numbers-and-measurements"
          target="_blank">
          Web writing style guide – Numbers and measurements
        </a>
      </p>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <h2 id="usage">Usage</h2>
      <p>
        Helper text generally falls into 3 different categories. Examine the patterns and examples
        below to use helper text properly.
      </p>
      <GoABlock direction="column" gap="xs">
        <a href="#disclosure">Disclosure</a>
        <a href="#instructional">Instructional</a>
        <a href="#restrictive">Restrictive</a>
      </GoABlock>
      <GoADivider mb="xl" mt="2xl"></GoADivider>
      <h3 id="disclosure">Disclosure – Why are we asking this question</h3>
      <p>
        Disclosive helper text helps a user understand the data, task or system associated with the
        input. It can be used to provide context or to explain what is expected from the user and
        can help users understand what information they need to provide and why it is needed.
      </p>
      <p>
        <strong>Examples of disclosive helper text:</strong>
        <ul>
          <li>Your full name is used for verification</li>
          <li>Emails will be sent in your language of choice</li>
          <li>This will be viewable to clients</li>
          <li>Providing optional info helps us assist you better</li>
          <li>This address will receive your printed certificate</li>
          <li>Your birthdate is used to verify your eligibility</li>
        </ul>
      </p>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch" gap="2xl">
          <DoDont
            type="do"
            description="Refer directly to the content in the Text field using words such as This, These, and The when possible.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/helper-text/disclosure-do-1.png" width="80%"></img>
            </div>
          </DoDont>
          <DoDont
            type="dont"
            description="Don’t be ambiguous with unknown outcomes and phrasing of objects, groups and places.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/helper-text/disclosure-dont-1.png" width="80%"></img>
            </div>
          </DoDont>
          <DoDont
            type="do"
            description="Use phrasing that communicates specific actions to objects, groups, and places.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/helper-text/disclosure-do-2.png" width="80%"></img>
            </div>
          </DoDont>
          <DoDont
            type="do"
            description="Use phrasing that informs the user what the data provided will be used for.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/helper-text/disclosure-dont-2.png" width="80%"></img>
            </div>
          </DoDont>
        </GoAGrid>
      </div>
      <h3 id="instructional">Instructional – Directions for how to use the input</h3>
      <p>
        Instructional helper text is used to provide instructions on how to interact with a
        particular input field or control. It can be used to explain how to use a particular
        feature, what actions are possible, or what the result of a certain action will be.
      </p>
      <p>
        <strong>Examples of instructional helper text:</strong>
        <ul>
          <li>Search by staff name or certification number</li>
          <li>Select an existing project or create a new project name</li>
          <li>Use arrow keys to choose from options</li>
          <li>Type in your search terms to see results</li>
          <li>Select a file to upload for verification</li>
          <li>Select a date from the calendar for scheduling</li>
          <li>Drag and drop files to upload for review</li>
          <li>Select an option from the dropdown menu to filter results</li>
        </ul>
      </p>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch" gap="2xl">
          <DoDont
            type="do"
            description="Begin with an Action (Directive Verb) e.g. Search, Start, Select, Find, Deposit; phrasing that follows should briefly describe or summarize directions.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/helper-text/instructions-do-1.png" width="80%"></img>
            </div>
          </DoDont>
          <DoDont
            type="dont"
            description="Don’t begin with polite phrases or adverbs e.g. Please, Thank you, or Quickly. ">
            <div style={{ textAlign: "center" }}>
              <img src="/images/helper-text/instructions-dont-1.png" width="80%"></img>
            </div>
          </DoDont>
          <DoDont type="do" description="Summarize directions or intended interaction.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/helper-text/instructions-do-2.png" width="80%"></img>
            </div>
          </DoDont>
          <DoDont type="dont" description="Don’t be vague with the data you need.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/helper-text/instructions-dont-2.png" width="80%"></img>
            </div>
          </DoDont>
        </GoAGrid>
      </div>
      <h3 id="restrictive">Restrictive – Rules and requirements that the input needs to meet</h3>
      <p>
        Restrictive helper text indicates limitations or requirements that must be met when filling
        out a form or using a control. It can be used to communicate restrictions on input format,
        length, or content. Restrictive helper text can help users avoid errors and ensure that
        their input meets the required criteria.
      </p>
      <p>
        <strong>Examples of restrictive helper text:</strong>
        <ul>
          <li>Must be 8 or more characters with one uppercase letter and one number</li>
          <li>Must be 5MB or smaller</li>
          <li>Choose a date within the last six months</li>
          <li>Password must contain 1 uppercase letter and 1 number</li>
          <li>File size limit: 5MB</li>
        </ul>
      </p>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch" gap="2xl">
          <DoDont type="do" description="Be specific about the information you are asking for.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/helper-text/restrictive-do-1.png" width="80%"></img>
            </div>
          </DoDont>
          <DoDont
            type="dont"
            description="Don’t rely on error validation to provide all of the specific formatting information required.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/helper-text/restrictive-dont-1.png" width="80%"></img>
            </div>
          </DoDont>
          <DoDont type="do" description="Be specific about the required formatting.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/helper-text/restrictive-do-2.png" width="80%"></img>
            </div>
          </DoDont>
          <DoDont
            type="dont"
            description="Don’t use character symbols in lieu of words. eg. > || >= || != for greater than, less than or not equal to.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/helper-text/restrictive-dont-2.png" width="80%"></img>
            </div>
          </DoDont>
        </GoAGrid>
      </div>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <h2 id="formatting">Formatting</h2>
      <p>
        Helper text should be a short succinct statement, sentence case, with no period or
        punctuation.
      </p>
      <div className="dodont-wrapper">
        <GoAGrid gap="2xl" minChildWidth="50ch">
          <DoDont
            type="do"
            description="Use sentence case with no punctuation at the end of the helper text.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/helper-text/formatting-do.png" width="80%"></img>
            </div>
          </DoDont>
          <DoDont type="dont" description="Don’t use a period at the end of the helper text.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/helper-text/formatting-dont.png" width="80%"></img>
            </div>
          </DoDont>
        </GoAGrid>
      </div>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <h2 id="accessibility">Accessibility</h2>
      <p>
        For screen reader accessibility, consider using the aria-describedby attribute as helper
        text for the input control. This allows screen readers to provide additional context that
        would be present for a sighted user.
      </p>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <h2 id="references">References</h2>
      <p>
        <a href="https://www.w3.org/TR/WCAG20-TECHS/ARIA1.html" target="_blank">
          W3C - Using the aria-describedby property to provide a descriptive label for ui controls
        </a>
        <br />
        <a href="https://a11y-101.com/development/aria-describedby" target="_blank">
          Aria described by Introduction to Accessibility
        </a>
      </p>
    </>
  );
}
