import { Sandbox } from "@components/sandbox";
import {
  GoABlock,
  GoAButton,
  GoAButtonGroup, GoACallout,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import "./result-page-example.css";

export function ResultPageExamples() {

  return (
    <div className="result-page-example">
      <h3 id="component-example-1">Result page</h3>
      <Sandbox fullWidth>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            .page-header h2 {
              margin-top: 0;
              margin-bottom: 0;
            }
          `}
        />
        <GoABlock direction="column" gap="none">
          <div className="page-header">
            <h2>You have completed the application</h2>
            <GoACallout type="success" heading="Application submitted" mt="xl" mb="2xl">
              <p>You will receive a copy of the confirmation to the email name@email.com</p>
              <p>
                Your reference number is: <strong>1234ABC</strong>
              </p>
            </GoACallout>
            <h3>What happens next</h3>
          </div>
          <p>We’ll check your application and may contact you if we have any questions.</p>
          <h3>If you have questions about your application</h3>
          <p>Contact the [ministry area].</p>
          <p>Email: <a href="mailto:information@gov.ab.ca">information@gov.ab.ca</a></p>
          <p>Phone: <a href="tel:780 123 4567">780 123 4567</a></p>

          <GoAButtonGroup alignment="start" mt="2xl">
            <GoAButton type="primary">Continue [step]</GoAButton>
            <GoAButton type="tertiary">Back to [dashboard]</GoAButton>
          </GoAButtonGroup>
        </GoABlock>
      </Sandbox>
    </div>
  );
}
