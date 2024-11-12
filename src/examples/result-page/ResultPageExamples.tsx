import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import "./result-page-example.css";
import { GoabBlock, GoabCallout } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export function ResultPageExamples() {
  const {version} = useContext(LanguageVersionContext);
  return (
    <div className="result-page-example">
      <div className="component-example-header">
        <h3 id="component-example-1">Result page</h3>
        <a
          href="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4110&mode=design"
          target="_blank"
          rel="noreferrer">
          View in Figma
        </a>
      </div>
      <Sandbox fullWidth skipRender>
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

        {/*Angular code*/}
        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <goa-block direction="column" gap="none">
              <div class="page-header">
                <h2>
                You have completed the application
                </h2>
                <goa-callout type="success" heading="Application submitted" mt="xl" mb="2xl">
                  <p>You will receive a copy of the confirmation to the email name&#64;email.com</p>
                  <p><span>Your reference number is:&nbsp;</span><strong>1234ABC</strong></p>
                </goa-callout>
                  <h3>What happens next</h3>
              </div>
              <p>We’ve sent your application to service name. They will contact you to confirm your registration.</p>
              <p>You can now close this window.</p>
              <p><span>What did you think of this service?&nbsp;</span><a href="#">Give feedback</a></p>
              <h3>If you have questions about your application</h3>
              <p>Contact the [ministry area].</p>
              <p><span>Email:&nbsp;</span><a href="mailto:information&#64;gov.ab.ca">information&#64;gov.ab.ca</a></p>
              <p><span>Phone:&nbsp;</span><a href="tel:780 123 4567">780 123 4567</a></p>
            </goa-block>
        `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <goab-block direction="column" gap="none">
              <div class="page-header">
                <h2>
                You have completed the application
                </h2>
                <goab-callout type="success" heading="Application submitted" mt="xl" mb="2xl">
                  <p>You will receive a copy of the confirmation to the email name&#64;email.com</p>
                  <p><span>Your reference number is:&nbsp;</span><strong>1234ABC</strong></p>
                </goab-callout>
                  <h3>What happens next</h3>
              </div>
              <p>We’ve sent your application to service name. They will contact you to confirm your registration.</p>
              <p>You can now close this window.</p>
              <p><span>What did you think of this service?&nbsp;</span><a href="#">Give feedback</a></p>
              <h3>If you have questions about your application</h3>
              <p>Contact the [ministry area].</p>
              <p><span>Email:&nbsp;</span><a href="mailto:information&#64;gov.ab.ca">information&#64;gov.ab.ca</a></p>
              <p><span>Phone:&nbsp;</span><a href="tel:780 123 4567">780 123 4567</a></p>
            </goab-block>
        `}
        />}


        {/*React code*/}
        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <GoABlock direction="column" gap="none">
              <div className="page-header">
                <h2>You have completed the application</h2>
                <GoACallout type="success" heading="Application submitted" mt="xl" mb="2xl">
                  <p>You will receive a copy of the confirmation to the email name@email.com</p>
                  <p><span>Your reference number is:&nbsp;</span><strong>1234ABC</strong></p>
                </GoACallout>
                <h3>What happens next</h3>
              </div>
              <p>We’ve sent your application to service name. They will contact you to confirm your registration.</p>
              <p>You can now close this window.</p>
              <p><span>What did you think of this service?&nbsp;</span><a href="#">Give feedback</a></p>
              <h3>If you have questions about your application</h3>
              <p>Contact the [ministry area].</p>
              <p><span>Email:&nbsp;</span><a href="mailto:information@gov.ab.ca">information@gov.ab.ca</a></p>
              <p><span>Phone:&nbsp;</span><a href="tel:780 123 4567">780 123 4567</a></p>
            </GoABlock>
          `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <GoabBlock direction="column" gap="none">
              <div className="page-header">
                <h2>You have completed the application</h2>
                <GoabCallout type="success" heading="Application submitted" mt="xl" mb="2xl">
                  <p>You will receive a copy of the confirmation to the email name@email.com</p>
                  <p><span>Your reference number is:&nbsp;</span><strong>1234ABC</strong></p>
                </GoabCallout>
                <h3>What happens next</h3>
              </div>
              <p>We’ve sent your application to service name. They will contact you to confirm your registration.</p>
              <p>You can now close this window.</p>
              <p><span>What did you think of this service?&nbsp;</span><a href="#">Give feedback</a></p>
              <h3>If you have questions about your application</h3>
              <p>Contact the [ministry area].</p>
              <p><span>Email:&nbsp;</span><a href="mailto:information@gov.ab.ca">information@gov.ab.ca</a></p>
              <p><span>Phone:&nbsp;</span><a href="tel:780 123 4567">780 123 4567</a></p>
            </GoabBlock>
          `}
        />}

        <GoabBlock direction="column" gap="none">
          <div className="page-header">
            <h2>You have completed the application</h2>
            <GoabCallout type="success" heading="Application submitted" mt="xl" mb="2xl">
              <p>You will receive a copy of the confirmation to the email name@email.com</p>
              <p>
                <span>Your reference number is: </span><strong>1234ABC</strong>
              </p>
            </GoabCallout>
            <h3>What happens next</h3>
          </div>
          <p>
            We’ve sent your application to service name. They will contact you to confirm your
            registration.
          </p>
          <p>You can now close this window.</p>
          <p>
            <span>What did you think of this service?</span> <a href="#">Give feedback</a>
          </p>
          <h3>If you have questions about your application</h3>
          <p>Contact the [ministry area].</p>
          <p>
            <span>Email: </span><a href="mailto:information@gov.ab.ca">information@gov.ab.ca</a>
          </p>
          <p>
            <span>Phone: </span><a href="tel:780 123 4567">780 123 4567</a>
          </p>
        </GoabBlock>
      </Sandbox>
    </div>
  );
}
