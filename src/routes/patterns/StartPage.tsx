import {
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { StartPageExamples } from "@examples/start-page/StartPageExamples";
import css from "./patterns.module.css";

export default function StartPage() {
  return (
    <>
      <h1>Start page</h1>
      <h3>
        This is the starting point for a citizen to begin your form from within your service or from
        Alberta.ca.
      </h3>
      <ComponentContent
        contentClassName="start-page"
        tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            <StartPageExamples />
          </GoabTab>

          <GoabTab heading="Design guidelines">
            <figure className={css.imageContainer}>
              <h2 id="overview" className="hidden">
                Overview
              </h2>
              <img
                alt="form pattern start page image"
                src="/images/patterns/form-pattern_start-page.png"
              />
            </figure>
            <h2 id="toc-1">When to use a start page</h2>
            <p>
              A start page is the front door to a government service for a citizen. It is the way
              into the service, how they access the service. Each government service has a start
              page on Alberta.ca. Contact the relevant person at Alberta.ca to make changes to the
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

            <h2 id="toc-2">A service's start page should</h2>
            <ul>
              <li>
                give the user just enough information to help them understand what the service does
                and whether it will meet their need
              </li>
              <li>a service's name should reflects the problem it solves for users</li>
              <li>be written in plain language — <a href="https://www.alberta.ca/web-writing-style-guide" target="_blank">GOA web writing style guide</a>.</li>
              <li>
                include a "start button" linking into the service, with text that's consistent with
                the action you're asking users to take — for example, "Start now", "Sign in" or
                "Register or update your details"
              </li>
              <li>
                If relevant let users resume an application they've already started or update their
                details
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

            <h2 id="toc-3">Page content</h2>
            <p>
              Consider what is the primary information that the user needs to know before entering
              into the service. Provide that information to the user clearly, and then provide a
              link to start using the service. Provide additional secondary information below the
              call to action.
            </p>
            <figure className={css.imageContainer}>
              <img
                alt="service page content image"
                src="/images/patterns/start-page-overview.png"
              />
            </figure>

            <h3 id="toc-3-1">Overview</h3>
            <p>
              What the user needs to know before they enter into the service. A high level description of what the service is and what you can use it to do
            </p>

            <h3 id="toc-3-2">Before you begin</h3>
            <ul>
              <li>how long it will take</li>
              <li>what you will need to complete the service</li>
              <ul>
                <li>e.g. specific documents</li>
              </ul>
              <li>other important information</li>
            </ul>

            <h3 id="toc-3-3">Call to action</h3>
            <p>
              Below the primary information, include an obvious call to action to get started with the service.
            </p>

            <h3 id="toc-3-4">Other information</h3>
            <p>
              Below the call to action, include any additional information as applicable such as customer support, frequently asked questions, or related links.
            </p>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
