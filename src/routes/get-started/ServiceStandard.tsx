export default function ServiceStandardPage() {
  return (
    <>
      <h1>Service standards</h1>
      <h3 className="introduction">
        User experience at the Government of Alberta.
      </h3>

      <div className="max-width-72ch">

        <h2>The strategy</h2>
        <p>
          The Digital Design and Delivery’s User Experience Team is beginning the process of establishing 
          a broader User Experience Strategy for the Government of Alberta. This strategy will be focused 
          on the experience delivered to the public and/or staff through design and development of digital 
          products.
        </p>
        <p>
          As part of this strategy, resources are available for teams to conduct their own usability testing. 
          The User Experience team is also available for consultation.
        </p>
        <h2>Digital experience guidelines</h2>
        <p>
          These guidelines apply to all digital products across government, regardless of delivery method or 
          platform for both public and employee experiences.
        </p>
        <h3>How do these guidelines relate to other standards and practices?</h3>
        <p>
          When the Government of Alberta begins to redesign or create a new digital service, we employ Service 
          Design principles and methodologies. The Alberta Digital Strategy contains the standards that govern 
          these outcomes. Once a service becomes supported by a digital product (working software), the 
          Experience Guidelines specify quality measures for these digital experiences.
        </p>
        <h3>Digital products are:</h3>
        <ol>
          <li><strong>Usable:</strong>Using human-centered design to understand users’ context of use, goals, tasks, and environments</li>
          <li>
            The developed component is validated on all popular browsers leading to cross-browser testing.
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
