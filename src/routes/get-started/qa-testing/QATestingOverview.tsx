import { GoACallout } from "@abgov/react-components";

export const QATestingOverview: React.FC = () => {
  return (
    <>
      <h1>QA testing</h1>
      <h3>
        The QA testing practice involves creating test cases based on user
        acceptance criteria, conducting functional and cross-browser testing of
        components, and executing accessibility validations using assistive
        technologies.
      </h3>
      <div className="qa-testing-page">
        <GoACallout
          type="information"
          heading="Design system components are thoroughly tested"
          size="large"
          mt="xl"
          mb="xl"
        >
          You don't need to test the design system components. <br />
          <strong>
            If problems found regarding components{" "}
            <a
              href="https://github.com/GovAlta/ui-components/issues/new/choose"
              target="_blank"
            >
              report a bug
            </a>
          </strong>
        </GoACallout>

        <h2>Definition of done for testing activities</h2>

        <ul>
          <li>Automated unit testing is run.</li>
          <li>
            The developed component is{" "}
            <a href="/get-started/developers/browsers">
              validated on all popular browsers leading to cross-browser
              testing.
            </a>
          </li>
          <li>
            Manual accessibility testing of components using Axe accessibility
            testing tools.
          </li>
          <li>
            Defects observed are communicated to the development team by logging
            an issue or comment in Github.
          </li>
          <li>
            Once the development team fixes all the issues/defects raised,
            retesting will be performed on the component to validate the fixes.
          </li>
          <li>
            The component undergoes a design review to ensure alignment to the
            design.
          </li>
          <li>After QA signoff, the code is deployed to Alpha branch.</li>
        </ul>

        <h2>Accessibility testing</h2>

        <p>
          To perform accessibility testing, NVDA and VoiceOver screen reader
          software are used to navigate through the application, ensuring proper
          keyboard accessibility, accurate screen reader feedback, and adherence
          to accessibility guidelines for elements such as focus management, and
          semantic markup.
        </p>

        <h3>We use following tools for accessibility testing:</h3>

        <ul>
          <li>
            <strong>NVDA (Windows):</strong> NVDA provides various features to
            test accessibility, such as Keyboard navigation, Screen reader
            announcements, ARIA support. Apple VoiceOver (Mac): Apple VoiceOver,
            the built-in screen reader for Mac and iOS devices, offers a range
            of features to enhance accessibility such as Spoken Feedback,
            Navigation and Gestures, Web Page Navigation, Multi-language
            Support.
          </li>
          <li>
            <strong>Apple VoiceOver (Mac):</strong> Apple VoiceOver, the
            built-in screen reader for Mac and iOS devices, offers a range of
            features to enhance accessibility such as Spoken Feedback,
            Navigation and Gestures, Web Page Navigation, Multi-language
            Support.
          </li>
        </ul>

        <p>
          The design system team uses{" "}
          <a href="https://www.lambdatest.com/" target="_blank">
            LambdaTest
          </a>{" "}
          which offers built-in accessibility testing features using NVDA for
          Windows and VoiceOver for macOS, allowing to easily test the
          accessibility of our components.
        </p>

        <p>
          To see the latest updates, additions, changes, and improvements to our
          design system, view our{" "}
          <a
            href="https://github.com/GovAlta/ui-components/releases"
            target="_blank"
          >
            release notes on GitHub
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default QATestingOverview;
