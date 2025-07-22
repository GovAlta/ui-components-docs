import {
  GoabGrid, GoabTab, GoabTabs, GoabText
} from "@abgov/react-components";

import css from "@routes/examples/patterns.module.css";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";
import { StartPageExamples } from "@examples/start-page/StartPageExamples.tsx";

export function StartPage() {

  return (

    <ComponentContent
      contentClassName="start-page"
      tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
      <GoabTabs initialTab={1}>
        <GoabTab heading="Code">
          <StartPageExamples />
        </GoabTab>

        <GoabTab heading="Design guidelines">
          <GoabGrid gap="2xl" minChildWidth="400px">
            <div>
              <h2 id="when-to-use" className="hidden">
                When to use a start page
              </h2>
              <GoabText size="heading-l" mt="none" mb="l">
                When to use a start page
              </GoabText>
              <GoabText size="body-m" mt="l" mb="l">
                A start page is the front door to a government service for a citizen. It is the way
                into the service, how they access the service. Each government service has a start
                page on Alberta.ca. Contact the relevant person at Alberta.ca to make changes to the
                start page for your service.
              </GoabText>
              <GoabText size="body-m" mt="l" mb="l">
                This is the starting point for a citizen to begin your form from within your service
                or from Alberta.ca.
              </GoabText>
              <GoabText size="body-m" mt="l" mb="l">
                Provide the user with any information that is important before starting the form such
                as how long it should take, list documents or information they may need to complete
                the form, if there are any costs involved, or alternative ways to access the service.
              </GoabText>
            </div>
            <figure className={css.imageContainer}>
              <img
                alt="form pattern start page image"
                src="/images/patterns/form-pattern_start-page.png"
              />
            </figure>
          </GoabGrid>
          <h2 id="toc-2">A service's start page should</h2>
          <ul>
            <li>
              <GoabText size="body-m" mt="l" mb="xs">
                give the user just enough information to help them understand what the service does
                and whether it will meet their need
              </GoabText>
            </li>
            <li>
              <GoabText size="body-m" mt="none" mb="xs">
                a service's name should reflects the problem it solves for users
              </GoabText>
            </li>
            <li>
              <GoabText size="body-m" mt="none" mb="xs">
                be written in plain language — <a href="https://www.alberta.ca/web-writing-style-guide" target="_blank">GOA
                web writing style guide</a>.
              </GoabText>
            </li>
            <li>
              <GoabText size="body-m" mt="none" mb="xs">
                include a "start button" linking into the service, with text that's consistent with
                the action you're asking users to take — for example, "Start now", "Sign in" or
                "Register or update your details"
              </GoabText>
            </li>
            <li>
              <GoabText size="body-m" mt="none" mb="xs">
                a service's name should reflects the problem it solves for users
              </GoabText>
            </li>
            <li>
              <GoabText size="body-m" mt="none" mb="xs">
                include any other information that most users are likely to need before they start
                using the service online — for example, how much it costs to use the service and
                roughly how long it will take
              </GoabText>
            </li>
            <li>
              <GoabText size="body-m" mt="none" mb="xs">
                include additional information about the service such as other ways to access the
                service (eg. by telephone or by completing a paper form). This should be included
                after the main call to action to start the digital service.
              </GoabText>
            </li>
          </ul>

          <GoabGrid gap="2xl" minChildWidth="400px" mt={"4xl"}>
            <div>
              <h2 id="page-content" className="hidden">
                Page content
              </h2>
              <GoabText size="heading-l" mt="none" mb="l">
                Page content
              </GoabText>
              <GoabText size="body-m" mt="l" mb="l">
                Consider what is the primary information that the user needs to know before entering
                into the service. Provide that information to the user clearly, and then provide a
                link to start using the service. Provide additional secondary information below the
                call to action.
              </GoabText>
              <h3 id="toc-3-1">Overview</h3>
              <GoabText size="body-m" mt="l" mb="l">
                What the user needs to know before they enter into the service. A high level description of what the
                service
                is and what you can use it to do
              </GoabText>

              <h3 id="toc-3-2">Before you begin</h3>
              <ul>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">
                    how long it will take
                  </GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">
                    what you will need to complete the service
                  </GoabText>
                </li>
                <ul>
                  <li>
                    <GoabText size="body-m" mt="none" mb="xs">
                      e.g. specific documents
                    </GoabText>
                  </li>
                </ul>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">
                    other important information
                  </GoabText>
                </li>
              </ul>

              <h3 id="toc-3-3">Call to action</h3>
              <GoabText size="body-m" mt="l" mb="l">
                Below the primary information, include an obvious call to action to get started with the service.
              </GoabText>

              <h3 id="toc-3-4">Other information</h3>
              <GoabText size="body-m" mt="l" mb="l">
                Below the call to action, include any additional information as applicable such as customer support,
                frequently asked questions, or related links.
              </GoabText>
            </div>
            <figure className={css.imageContainer}>
              <img
                alt="service page content image"
                src="/images/patterns/start-page-overview.png"
              />
            </figure>
          </GoabGrid>

        </GoabTab>
      </GoabTabs>
    </ComponentContent>
  );
}

export default StartPage;
