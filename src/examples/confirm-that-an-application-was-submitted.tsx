import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabButton, GoabButtonGroup, GoabCallout, GoabSpacer } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const ConfirmThatAnApplicationWasSubmitted = () => {
  const { version } = useContext(LanguageVersionContext);
  return (
    <>

      <Sandbox fullWidth allow={["h2", "h3", "p"]} skipRender>
        {/*Angular code*/}
        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                      <h2>You have completed the application</h2>

                      <goa-callout type="success">
                        <span slot="heading">Your application was successful</span>
                        <p>You will receive a copy of the confirmation to the email person&#64;email.com</p>
                        <p>Confirmation number: <strong>1234ABC</strong></p>
                      </goa-callout>

                      <h3>Go back to the dashboard, or direct your user somewhere else useful.</h3>
                      <p>
                        Other information about what was just completed, other tertiary information, and/or contact information.
                        Phone: <a href="tel:7801234567">780 123 4567</a>
                        Email: <a href="mailto:information&#64;gov.ab.ca">information&#64;gov.ab.ca</a>
                      </p>

                      <goa-button-group alignment="start">
                        <goa-button type="primary">Go to application</goa-button>
                        <goa-button type="secondary">Back to dashboard</goa-button>
                      </goa-button-group>
                    `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                    <h2>You have completed the application</h2>

                    <goab-callout type="success" heading="Your application was successful">
                        <p>You will receive a copy of the confirmation to the email person&#64;email.com</p>
                        <p>Confirmation number: <strong>1234ABC</strong></p>
                    </goab-callout>

                    <h3>Go back to the dashboard, or direct your user somewhere else useful.</h3>
                    <p>Other information about what was just completed, other tertiary information, and/or contact information.
                    <br/>
                    Phone: <a href="tel:7801234567">780 123 4567</a>
                    <br/>
                    Email: <a href="mailto:information&#64;gov.ab.ca">information&#64;gov.ab.ca</a>
                    </p>

                    <goab-button-group alignment="start">
                      <goab-button type="primary">Go to application</goab-button>
                      <goab-button type="secondary">Back to dashboard</goab-button>
                    </goab-button-group>
                `}
        />}

        {/*React code*/}
        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                    <h2>You have completed the application</h2>

                    <GoACallout type="success" heading="Your application was successful">
                      <p>You will receive a copy of the confirmation to the email person@email.com</p>
                      <p>Confirmation number: <strong>1234ABC</strong></p>
                    </GoACallout>

                    <h3>Go back to the dashboard, or direct your user somewhere else useful.</h3>
                    <p>
                      Other information about what was just completed, other tertiary information, and/or contact information.
                      Phone: <a href="tel:7801234567">780 123 4567</a>
                      Email: <a href="mailto:information@gov.ab.ca">information@gov.ab.ca</a>
                    </p>

                    <GoAButtonGroup alignment="start">
                      <GoAButton type="primary">Go to application</GoAButton>
                      <GoAButton type="secondary">Back to dashboard</GoAButton>
                    </GoAButtonGroup>
                  `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                    <h2>You have completed the application</h2>

                    <GoabCallout type="success" heading="Your application was successful">
                      <p>You will receive a copy of the confirmation to the email person@email.com</p>
                      <p>Confirmation number: <strong>1234ABC</strong></p>
                    </GoabCallout>

                    <h3>Go back to the dashboard, or direct your user somewhere else useful.</h3>
                    <p>
                      Other information about what was just completed, other tertiary information, and/or contact information.
                      <br />
                      Phone: <a href="tel:7801234567">780 123 4567</a>
                      <br />
                      Email: <a href="mailto:information@gov.ab.ca">information@gov.ab.ca</a>
                    </p>

                    <GoabButtonGroup alignment="start" mt="l">
                      <GoabButton type="primary">Go to application</GoabButton>
                      <GoabButton type="secondary">Back to dashboard</GoabButton>
                    </GoabButtonGroup>
                  `}
        />}

        <h2 style={{ marginTop: 0 }}>You have completed the application</h2>
        <GoabCallout type="success" heading="Your application was successful">
          <p>You will receive a copy of the confirmation to the email person@email.com</p>
          <p style={{ marginBottom: 0 }}>Confirmation number: <strong>1234ABC</strong></p>
        </GoabCallout>
        <h3>Go back to the dashboard, or direct your user somewhere else useful.</h3>
        <p>
          Other information about what was just completed, other tertiary information, and/or contact information.<br />
          Phone: <a href="#">780 123 4567</a><br />
          Email: <a href="#">information@gov.ab.ca</a>
        </p>
        <GoabSpacer vSpacing="l"></GoabSpacer>
        <GoabButtonGroup alignment="start">
          <GoabButton type="primary">Go to application</GoabButton>
          <GoabButton type="secondary">Back to dashboard</GoabButton>
        </GoabButtonGroup>
      </Sandbox>
    </>
  );

};

export default ConfirmThatAnApplicationWasSubmitted;
