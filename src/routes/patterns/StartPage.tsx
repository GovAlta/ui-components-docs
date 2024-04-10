import {
  GoAAppFooter,
  GoAAppHeader,
  GoAButton,
  GoAMicrositeHeader,
  GoAOneColumnLayout,
  GoAPageBlock,
  GoATab,
  GoATabs,
} from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import Browser from "@components/browser/Browser";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export default function StartPage() {
  return (
    <>
      <h1>Start page</h1>
      <h3>
        This is the starting point for a citizen to begin your form from within your service or
        from Alberta.ca.
      </h3>
      <ComponentContent
        contentClassName="start-page"
        tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code examples">
            <h3 id="start-page">Start page from Alberta</h3>
            <Sandbox fullWidth allow={["Browser"]}>
              <CodeSnippet
                lang="css"
                allowCopy={true}
                code={`
                  h2.secondHeading {
                    margin-top: var(--goa-space-2xl);
                    margin-bottom: var(--goa-space-l);
                  }
                  h2.support {
                    margin-top: var(--goa-space-2xl);
                    margin-bottom: var(--goa-space-xs);
                  }
                  p.last-paragraph {
                    margin-bottom: var(--goa-space-3xl);
                  }
                `}
              />
              <Browser ignore>
                <GoAOneColumnLayout>
                  <section slot="header">
                    <GoAMicrositeHeader type="alpha" version="UAT" />
                    <GoAAppHeader url="/" heading="Design System">
                      <a href="/login">Sign in</a>
                    </GoAAppHeader>
                  </section>
                  <GoAPageBlock width="704px">
                    <h1>Name of service</h1>
                    <h3>
                      1-3 sentence overview gravida amet habitant quam semper rhoncus vitae
                      vulputate eu.
                    </h3>
                    <p>
                      Longer and richer overview with more information. Egestas egestas enim cras
                      pretium nulla mattis consectetur. Ornare varius lacus mauris tellus egestas
                      hendrerit. Purus ac ullamcorper enim sodales mauris elit aenean. Donec a justo
                      lacinia ultrices praesent eget.
                      <br />
                      Quisque sollicitudin risus pretium condimentum pharetra malesuada. Tincidunt
                      lacus nullam tincidunt leo neque vel. Habitant nunc libero dictum sit lacus
                      dolor sem at eget.
                    </p>
                    <h2 className="secondHeading">Before you begin</h2>
                    <p>
                      Longer and richer overview with more information. Egestas egestas enim cras
                      pretium nulla mattis consectetur.
                    </p>
                    <p>
                      Quisque sollicitudin risus pretium condimentum pharetra malesuada. Tincidunt
                      lacus nullam tincidunt leo neque vel. Habitant nunc libero dictum sit lacus.
                    </p>

                    <GoAButton mt="xl" type="start" onClick={() => {
                    }}>
                      Get started
                    </GoAButton>

                    <h2 className="second-heading">Other information about the service</h2>
                    <p>
                      Longer and richer overview with more information. Egestas egestas enim cras
                      pretium nulla mattis consectetur. Ornare varius lacus mauris tellus egestas
                      hendrerit. Purus ac ullamcorper enim sodales mauris elit aenean. Donec a justo
                      lacinia ultrices praesent eget.
                    </p>
                    <p>
                      Quisque sollicitudin risus pretium condimentum pharetra malesuada. Tincidunt
                      lacus nullam tincidunt leo neque vel. Habitant nunc libero dictum sit lacus
                      dolor sem at eget.
                    </p>

                    <h2 className="support">Support</h2>
                    <p className="last-paragraph">
                      For assistance, email us at <a href="mailto:help@gov.ab.ca">help@gov.ab.ca</a>
                    </p>
                  </GoAPageBlock>
                  <section slot="footer">
                    <GoAAppFooter />
                  </section>
                </GoAOneColumnLayout>
              </Browser>
            </Sandbox>
          </GoATab>

          <GoATab heading="Design guidelines">
            <div className="image-container">
              <h2 id="overview" className="hidden">
                Overview
              </h2>
              <img
                alt="form pattern start page image"
                src="/images/patterns/form-pattern_start-page.png"
              />
            </div>
            <h2 id="start-page" className="second-heading">When to use a start page</h2>
            <p>
              A start page is the front door to a government service for a citizen. It is the way
              into the service, how they access the service. Each government service has a start
              page on Alberta.ca. Contact [the relevant person at Alberta.ca] to make changes to the
              start page for your service.
            </p>
            <p>
              This is the starting point for a citizen to begin your form from within your service
              or from Alberta.ca.
            </p>
            <p>
              Provide the user with any information that is important before starting the form such
              as how long it should take, list documents or information they may need to complete
              the form, if there are any costs involved, or alternative ways to access the service.
            </p>

            <h2 id="service-start-page" style={{marginTop: "64px"}}>A service's start page should:</h2>
            <ul style={{marginTop: "24px"}}>
              <li>
                give the user just enough information to help them understand what the service does
                and whether it will meet their need
              </li>
              <li>a service's name should reflects the problem it solves for users</li>
              <li>be written in plain language (GOA web writing style guide)</li>
              <li>
                include a "start button" linking into the service, with text that's consistent with
                the action you're asking users to take — for example, "Start now", "Sign in" or
                "Register or update your details"
              </li>
              <li>
                let users sign in, resume an application they've already started or update their
                details (if relevant)
              </li>
              <li>
                include any other information that most users are likely to need before they start
                using the service online — for example, how much it costs to use the service and
                roughly how long it will take
              </li>
              <li>
                include additional information about the service such as other ways to access the
                service (eg. by telephone or by completing a paper form). This should be included
                after the main call to action to start the digital service.
              </li>
            </ul>

            <h2 id="page-content" style={{marginTop: "64px", marginBottom: "24px"}}>Page content</h2>
            <p>
              Consider what is the primary information that the user needs to know before entering
              into the service. Provide that information to the user clearly, and then provide a
              link to start using the service. Provide additional secondary information below the
              call to action.
            </p>
            <div className="image-container" style={{marginTop: "24px"}}>
              <img
                alt="service page content image"
                src="/images/patterns/start-page-overview.png"
              />
            </div>

            <h3 id="service-page-overview" style={{marginBottom: "16px"}}>Overview</h3>
            <p>
              What the user needs to know before they enter into the service. A high level
              description of what the service is and what you can use it to do
            </p>

            <h3 id="before-you-begin" style={{marginBottom: "16px"}}>Before you begin</h3>
            <ul style={{marginTop: "16px"}}>
              <li>How long it will take</li>
              <li>What you will need to complete the service</li>
              <ul>
                <li>eg. specific documents</li>
              </ul>
              <li>Other important information</li>
            </ul>

            <h3 id="call-to-action" style={{marginBottom: "16px"}}>Call to action</h3>
            <p>
              Below the primary information, include an obvious call to action to get started with
              the service.
            </p>

            <h3 id="other-information" style={{marginBottom: "16px"}}>Other information</h3>
            <p>
              Below the call to action, include any additional information as applicable such as
              customer support, frequently asked questions, or related links.
            </p>
          </GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}
