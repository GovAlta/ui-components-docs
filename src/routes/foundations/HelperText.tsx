import {
  GoabBlock,
  GoabCheckbox,
  GoabContainer,
  GoabDivider,
  GoabFormItem,
  GoabGrid,
  GoabInput,
  GoabTable,
  GoabText
} from "@abgov/react-components";
import { DoDont } from "@components/do-dont/DoDont.tsx";
import { Link } from "react-router-dom";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

const minGridWidth = "36ch";

export default function HelperTextPage() {
  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">

      <GoabText size="heading-xl" mb="m" mt="xl">
        Helper text
      </GoabText>
      <GoabText size="heading-m" mb="m">
        Additional context and guidance that is always visible below an input. The
        text instructs a user on what needs to be completed to move to the next question in the form
        or process.
      </GoabText>

      <GoabBlock direction={"row"} gap={"xs"}>
        <GoabText size="body-m">Helper text is available within: </GoabText>
        <GoabText size="body-m">
        <Link to="/components/text-field">Text Input</Link>,{" "}
        <Link to="/components/radio">Radio</Link>, <Link to="/components/dropdown">Dropdown</Link>,{" "}
        <Link to="/components/checkbox">Checkbox</Link>, <Link to="/components/button">Button</Link>
        </GoabText>
      </GoabBlock>
      <GoabContainer type="non-interactive" mt="l">
        <div
          className="example"
          style={{
            margin: "0 auto",
            textAlign: "left",
          }}>
          <GoabFormItem
            label="Project name"
            labelSize="regular"
            helpText="Select an existing or create a new project name.">
            <GoabInput name="item" onChange={() => {}} value=""></GoabInput>
          </GoabFormItem>
        </div>
      </GoabContainer>
      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>
      <h2 id="considerations">Considerations</h2>
      <GoabText size="body-m" mt="l" mb="l">Consider the following ways to convey more information:</GoabText>
      <GoabTable width="100%" mb="xl">
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
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked={false} name="helper-text" disabled={true} />
            </td>
          </tr>
          <tr>
            <td>Accordion</td>
            <td>
              <GoabCheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
          </tr>
          <tr>
            <td>Callout</td>
            <td>
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked={false} name="helper-text" disabled={true} />
            </td>
          </tr>
          <tr>
            <td>Details</td>
            <td>
              <GoabCheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
          </tr>
          <tr>
            <td>Tooltip</td>
            <td>
              <GoabCheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked={false} name="helper-text" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="helper-text" disabled={true} />
            </td>
          </tr>
        </tbody>
      </GoabTable>
      <GoabText size="body-m" mt="l" mb="l">View a pattern and guide on how to show more information.</GoabText>
      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>
      <h2 id="anatomy">Anatomy</h2>
      <GoabText size="body-m" mt="l" mb="l">Helper text can be used with any input.</GoabText>
      <GoabContainer>
        <div style={{ textAlign: "center" }}>
          <img src="/images/helper-text/anatomy.png" width="80%"></img>
        </div>
      </GoabContainer>
      <ol>
        <li>
          <GoabText size="body-m" mt="none">Input label + optional / required</GoabText>
        </li>
        <li>
          <GoabText size="body-m" mt="none">Text Input</GoabText>
        </li>
        <li>
          <GoabText size="body-m" mt="none">Helper Text</GoabText>
        </li>
      </ol>
      <GoabText size="body-m" mt="l" mb="l">Examples of helper text within different inputs</GoabText>
      <img src="/images/helper-text/examples.png" width="80%"></img>
      <ol>
        <li>
          <GoabText size="body-m" mt="none">Input label + optional / required</GoabText>
        </li>
        <li>
          <GoabText size="body-m" mt="none">Input control(s)</GoabText>
        </li>
        <li>
          <GoabText size="body-m" mt="none">Helper Text</GoabText>
        </li>
      </ol>
      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>
      <h2 id="language-and-tone">Language and Tone</h2>
      <GoabText size="heading-m" mt="2xl" mb="m">Keep it concise</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        Helper text should be short and to the point. Avoid long paragraphs or complicated
        explanations.
      </GoabText>
      <GoabText size="heading-m" mt="2xl" mb="m">Use plain language</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        Write in a language that is easy to understand for your target audience. Avoid technical
        jargon or complex terms.
        <br />
        <a
          href="https://www.alberta.ca/web-writing-style-guide-writing-style#:~:text=depending%20on%20audience-,Plain%20language,-Write%20all%20web"
          target="_blank">
          Web writing style guide - Plain language
        </a>
      </GoabText>
      <GoabText size="heading-m" mt="2xl" mb="m">Provide examples</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        Examples can help clarify the type of input you are looking for. For example: if you are
        asking for a phone number, provide an example of the format you are expecting.
      </GoabText>
      <GoabText size="heading-m" mt="2xl" mb="m">Be specific</GoabText>
      <GoabText size="body-m" mt="l" mb="l">Use specific language to describe what type of information you are looking
        for.</GoabText>
      <GoabText size="heading-m" mt="2xl" mb="m">Use specific language to describe what type of information you are
        looking for.</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        Write numbers using digits E.g. “342” except when the number starts the sentence or is the
        number ‘one’.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        <a
          href="https://www.alberta.ca/web-writing-style-guide-numbers-and-measurements"
          target="_blank">
          Web writing style guide – Numbers and measurements
        </a>
      </GoabText>
      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>
      <h2 id="usage">Usage</h2>
      <GoabText size="body-m" mt="l" mb="l">
        Helper text generally falls into 3 different categories. Examine the patterns and examples
        below to use helper text properly.
      </GoabText>
      <GoabBlock direction="column" gap="xs">
        <a href="#disclosure">Disclosure</a>
        <a href="#instructional">Instructional</a>
        <a href="#restrictive">Restrictive</a>
      </GoabBlock>
      <GoabDivider mb="xl" mt="2xl"></GoabDivider>
      <h3 id="disclosure">Disclosure – Why are we asking this question</h3>
      <GoabText size="body-m" mt="l" mb="l">
        Disclosive helper text helps a user understand the data, task or system associated with the
        input. It can be used to provide context or to explain what is expected from the user and
        can help users understand what information they need to provide and why it is needed.
      </GoabText>
      <GoabText size="body-m" mt="none" mb="l">
        <strong>Examples of disclosure helper text:</strong>
        <ul>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Your full name is used for verification</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Emails will be sent in your language of choice</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">This will be viewable to clients</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Providing optional info helps us assist you better</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">This address will receive your printed certificate</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Your birthdate is used to verify your eligibility</GoabText>
          </li>
        </ul>
      </GoabText>
      <div className="dodont-wrapper">
        <GoabGrid minChildWidth={minGridWidth} gap="2xl" mb={"2xl"}>
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
        </GoabGrid>
      </div>
      <h3 id="instructional">Instructional – Directions for how to use the input</h3>
      <GoabText size="body-m" mt="l" mb="l">
        Instructional helper text is used to provide instructions on how to interact with a
        particular input field or control. It can be used to explain how to use a particular
        feature, what actions are possible, or what the result of a certain action will be.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        <strong>Examples of instructional helper text:</strong>
        <ul>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Search by staff name or certification number</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Select an existing project or create a new project name</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Use arrow keys to choose from options</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Type in your search terms to see results</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Select a file to upload for verification</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Select a date from the calendar for scheduling</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Drag and drop files to upload for review</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Select an option from the dropdown menu to filter
              results</GoabText>
          </li>
        </ul>
      </GoabText>
      <div className="dodont-wrapper">
        <GoabGrid minChildWidth={minGridWidth} gap="2xl" mb={"2xl"}>
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
        </GoabGrid>
      </div>
      <h3 id="restrictive">Restrictive – Rules and requirements that the input needs to meet</h3>
      <GoabText size="body-m" mt="l" mb="l">
        Restrictive helper text indicates limitations or requirements that must be met when filling
        out a form or using a control. It can be used to communicate restrictions on input format,
        length, or content. Restrictive helper text can help users avoid errors and ensure that
        their input meets the required criteria.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        <strong>Examples of restrictive helper text:</strong>
        <ul>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Must be 8 or more characters with one uppercase letter and one
              number</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Must be 5MB or smaller</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Choose a date within the last six months</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">Password must contain 1 uppercase letter and 1 number</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">File size limit: 5MB</GoabText>
          </li>
        </ul>
      </GoabText>
      <div className="dodont-wrapper">
        <GoabGrid minChildWidth={minGridWidth} gap="2xl">
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
        </GoabGrid>
      </div>
      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>
      <h2 id="formatting">Formatting</h2>
      <GoabText size="body-m" mt="l" mb="l">
        Helper text should be a short succinct statement, sentence case, with no period or
        punctuation.
      </GoabText>
      <div className="dodont-wrapper">
        <GoabGrid gap="2xl" minChildWidth={minGridWidth}>
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
        </GoabGrid>
      </div>
      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>
      <h2 id="accessibility">Accessibility</h2>
      <GoabText size="body-m" mt="l" mb="l">
        For screen reader accessibility, consider using the aria-describedby attribute as helper
        text for the input control. This allows screen readers to provide additional context that
        would be present for a sighted user.
      </GoabText>
      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>
      <h2 id="references">References</h2>
      <GoabText size="body-m" mt="l" mb="l">
        <a href="https://www.w3.org/TR/WCAG20-TECHS/ARIA1.html" target="_blank">
          W3C - Using the aria-describedby property to provide a descriptive label for ui controls
        </a>
        <br />
        <a href="https://a11y-101.com/development/aria-describedby" target="_blank">
          Aria described by Introduction to Accessibility
        </a>
      </GoabText>
    </ComponentContent>
  );
}
