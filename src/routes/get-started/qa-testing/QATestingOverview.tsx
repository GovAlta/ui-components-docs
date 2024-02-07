import { Link } from "react-router-dom";

export default function QATestingOverviewPage() {
  return (
    <>
      <h1>QA testing</h1>
      <h3 className="introduction">
        The QA testing practice involves creating test cases based on user acceptance criteria,
        conducting functional and cross-browser testing of components, and executing accessibility
        validations using assistive technologies.
      </h3>

      <div className="max-width-72ch">

        <h2>Definition of done for testing activities</h2>

        <ol>
          <li>Automated unit testing is run.</li>
          <li>
            The developed component is validated on all popular browsers leading to cross-browser testing.{" "}
            <Link to="/get-started/developers/browsers">
              View cross browser compatibility.
            </Link>
          </li>
          <li>Manual accessibility testing of components using Axe accessibility testing tools.</li>
          <li>
            Defects observed are communicated to the development team by logging an issue or comment
            in Github.
          </li>
          <li>
            Once the development team fixes all the issues/defects raised, retesting will be
            performed on the component to validate the fixes.
          </li>
          <li>The component undergoes a design review to ensure alignment to the design.</li>
          <li>After QA signoff, the code is deployed to Alpha branch.</li>
        </ol>

        <h2>Accessibility testing</h2>
        <p>
          To perform accessibility testing, NVDA and VoiceOver screen reader software are used to
          navigate through the application, ensuring proper keyboard accessibility, accurate screen
          reader feedback, and adherence to accessibility guidelines for elements such as focus
          management, and semantic markup.
        </p>

        <h3>We use following tools for accessibility testing:</h3>
        <ul>
          <li>
            <strong>NVDA (Windows):</strong> NVDA provides various features to test accessibility,
            such as Keyboard navigation, Screen reader announcements, ARIA support. Apple VoiceOver
            (Mac): Apple VoiceOver, the built-in screen reader for Mac and iOS devices, offers a
            range of features to enhance accessibility such as Spoken Feedback, Navigation and
            Gestures, Web Page Navigation, Multi-language Support.
          </li>
          <li>
            <strong>Apple VoiceOver (Mac):</strong> Apple VoiceOver, the built-in screen reader for
            Mac and iOS devices, offers a range of features to enhance accessibility such as Spoken
            Feedback, Navigation and Gestures, Web Page Navigation, Multi-language Support.
          </li>
        </ul>

        <p>
          The design system team uses{" "}
          <a href="https://www.lambdatest.com/" target="_blank">
            Lambda Test
          </a>{" "}
          which offers built-in accessibility testing features using NVDA for Windows and VoiceOver
          for macOS, allowing to easily test the accessibility of our components.
        </p>

        <p>
          To see the latest updates, additions, changes, and improvements to our design system, view
          our{" "}
          <a href="https://github.com/GovAlta/ui-components/releases" target="_blank">
            release notes on GitHub
          </a>
          .
        </p>
      </div>
    </>
  );
}
