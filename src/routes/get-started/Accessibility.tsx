import { ComponentContent } from "@components/component-content/ComponentContent";

export default function AccessibilityPage() {
  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">
      <h1>Accessibility</h1>
      <h3 className="introduction">
        We are dedicated to creating inclusive and equitable digital services for all citizens and workers.
      </h3>
      <div className="max-width-72ch">
        <p>
          Each component is designed and developed to ensure it meets the required accessibility standards of <strong>WCAG AA</strong>. The design system has been designed to be accessible by all users, including those with disabilities.
        </p>

        <h2 id="wcag">WCAG accessibility compliance</h2>
        <p>We follow the <a href="https://www.w3.org/WAI/WCAG21/Understanding/intro#understanding-the-four-principles-of-accessibility">4 principles of web accessibility</a> upon which WCAG is based:</p>
        <ol>
          <li><strong>Perceivable</strong> – Information and user interface components must be presentable to users in ways they can perceive.</li>
          <li><strong>Operable</strong> – User interface components and navigation must be operable.</li>
          <li><strong>Understandable</strong> – Information and the operation of the user interface must be understandable.</li>
          <li><strong>Robust</strong> – Content must be robust enough that it can be interpreted reliably by operating systems, web browsers, and assistive technologies.</li>
        </ol>

        <h2>Design considerations</h2>
        <h3>Visuals</h3>
        <ul>
          <li><strong>Colour contrast</strong> - Our components all meet <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">colour contrast</a> ratios following WCAG 2.2 guidance. In Figma, you can use <a href="https://www.figma.com/community/plugin/734693888346260052/able-friction-free-accessibility">the Able plugin</a> to check colour contrast in your designs.</li>
          <li><strong>Text-size</strong> - We recommend using text no smaller than 16px for adequate readability by all users.</li>
          <li><strong>Avoid using colour as the sole indicator of information</strong> - For instance, always supply an icon or text to communicate, rather than relying on colour alone. Colour-only changes do not work well for those who may be colour blind or have low vision.</li>
        </ul>

        <h3>Interaction</h3>
        <ul>
          <li><strong>Visually distinct designs for every component state</strong> - Such as focus, hover, focus + hover, active, selected, disabled, and anything else that might be relevant.</li>
          <li><strong>Large touch targets</strong> - <a href="https://wcag.com/developers/2-5-8-target-size-minimum-level-aa/#:~:text=8%20Target%20Size%20%E2%80%93%20Minimum%20(Level%20AA)&text=All%20interactive%20targets%20should%20take,white%20space%20around%20the%20target.">Touch targets</a> should be a minimum size of 24x24 CSS pixels of space to ensure they are large enough for people with limited mobility to accurately press what they're aiming for.</li>
          <li><strong>Avoid disabling elements on the page</strong> - If you need to disable something, consider hiding it altogether from the user and/or provide information to the user for how they can move forward. Do not disable buttons to submit a form, allow the user to submit the form and then use validation and error handling to help the user recover and correct their errors to move forward.</li>
        </ul>

        <h3>Content</h3>
        <ul>
          <li><strong>Clear language</strong> - Use simple, straightforward language to ensure that content is easily understandable. Avoid jargon and technical terms; if they must be used ensure they are clearly defined. Aim for an accessible reading level to accommodate a broad audience.</li>
          <li><strong>Structured headings and labels</strong> - Organize content using hierarchical headings and labels to provide a clear structure. This helps users, especially those with cognitive disabilities or those using screen readers, to navigate and comprehend information more effectively.</li>
          <li><strong>Feedback and error messages</strong> - Design clear, concise feedback and error messages that are easy to understand.</li>
        </ul>

        <h2 id="dev">Development considerations</h2>
        <ul>
          <li><strong>Accessible Rich Internet Applications (ARIA) attributes</strong> provide ways to make applications more accessible by supplementing HTML so that common interactions in applications can be properly utilized with assistive technology.</li>
          <li><strong>Accessible Properties in Components</strong> - Our design system components come with automatically included ARIA behaviours and properties. These are clearly documented to help developers understand and correctly implement accessibility features without the need for extensive modifications.</li>
          <li><strong>Keyboard Navigation</strong> is essential for users who rely on keyboard-only interactions. All interactive elements are accessible through logical tab sequences with visible focus indicators present.</li>
          <li><strong>Performance Optimization</strong> - Ensuring that websites are optimized for speed and responsiveness, which can significantly affect users with older technology or slower internet connections.</li>
        </ul>

        <h2 id="accessibility">Accessibility testing</h2>
        <p>Building with accessible GOA components does not guarantee an accessible service. You need to keep testing to stay accessible.</p>
        <p>We recommend a mix of automated, semi-automated, and manual testing in addition to actual tests with real people who need assistive accommodations to interact with services effectively.</p>

        <h3>Screen reader tools</h3>
        <ul>
          <li><strong>NVDA (NonVisual Desktop Access)</strong> - A free and open-source screen reader for Windows.</li>
          <li><strong>VoiceOver</strong> - An integrated screen reader in all Apple operating systems.</li>
          <li><strong>JAWS (Job Access With Speech)</strong> - A comprehensive screen reader for Windows. <a href="url">Request a licence.</a></li>
        </ul>

        <h3>Automated testing tools</h3>
        <ul>
          <li><strong>Axe</strong> - An accessibility testing tool that works both as a browser extension and within development testing environments.</li>
          <li><strong>Wave</strong> - A suite of evaluation tools that helps authors make their web content more accessible to individuals with disabilities.</li>
          <li><strong>Lighthouse</strong> - An open-source, automated tool for improving the quality of web pages, with audits for performance, accessibility, progressive web apps, and more.</li>
        </ul>

        <h3>Usability testing with persons with disabilities</h3>
        <ul>
          <li><strong>Disability Employee Resource Group</strong> - A team of government employees who are committed to improving the accessibility of our digital products through direct involvement in user testing. Contact <a href="mailto:pamela.klebanov@gov.ab.ca">pamela.klebanov@gov.ab.ca</a> and <a href="mailto:Corinna.Sales@gov.ab.ca">corinna.sales@gov.ab.ca</a> for more information and to recruit users for testing.</li>
        </ul>

        <h2 id="aria">ARIA roles and headings</h2>
        <p>Proper use of ARIA roles and HTML headings is essential for creating accessible web content. These elements help assistive technologies interpret the structure and function of a webpage, enabling users with disabilities to navigate and interact more effectively. Here’s how to implement basic roles and headings:</p>
        <h3>ARIA roles</h3>
        <ul>
          <li><strong>Landmark Roles</strong> - Use landmark roles to define areas of the page like banner, navigation, main, complementary, and content info. These roles enable users with assistive technologies to quickly navigate to specific sections of the page.</li>
          <li><strong>Widget Roles</strong> - Assign roles such as button, link, tab, tooltip, and alert to interactive elements to communicate the element’s purpose and state. This is crucial for users who rely on screen readers to interact with page elements.</li>
          <li><strong>Application Role</strong> - Use the application role sparingly, as it indicates to assistive technologies that traditional navigation and reading modes should be disabled. Use this role only when necessary to manage complex interactions.</li>
        </ul>

        <h3>HTML Headings</h3>
        <ul>
          <li><strong>Structure</strong> - Use headings to structure content hierarchically. Begin with an h1 for the main title of the page, followed by h2 for main section titles, and h3 (and so forth) for subsections. This hierarchical use of headings helps users with screen readers understand the layout and navigate the content efficiently.</li>
          <li><strong>Consistency</strong> - Maintain consistency in heading usage across pages. This predictability aids users in quickly finding the information they need.</li>
        </ul>

        <h2 id="dynamic">Dynamic content</h2>
        <p>Dynamic content, which updates or changes without a full page reload, poses specific challenges for accessibility. Ensuring that these updates are perceivable and manageable by all users, especially those using assistive technologies, is crucial for maintaining an inclusive web environment. Here are key strategies for handling dynamic content accessibility:</p>
        <h3>Use of ARIA Live Regions</h3>
        <ul>
          <li><strong>Purpose</strong> - ARIA live regions provide a way to programmatically notify assistive technologies of content changes without requiring user focus to shift to that content.</li>
          <li><strong>Implementation</strong> - Utilize attributes like aria-live (with values such as "polite", "assertive", or "off") to manage how updates are announced. For example, use "polite" for updates that are not urgent, so they do not interrupt what the user is currently doing.</li>
          <li><strong>Examples</strong> - Common applications include updating an error summary, notification messages, or the status of ongoing processes.</li>
        </ul>

        <h3>Role attribute</h3>
        <ul>
          <li><strong>Application</strong> - Assign the role="status" or role="alert" to small regions where simple feedback about an operation in a user interface is needed. role="alert" automatically has an implicit aria-live value of "assertive", and it should be used for critical updates that require immediate attention.</li>
        </ul>

        <h3>Managing focus</h3>
        <ul>
          <li><strong>Focus handling</strong> - In Single Page Applications (SPAs), manage focus to ensure that users understand where they are after dynamic content loads. For example, when opening a modal or navigating in a single-page application, move focus to the new content or back to a logical starting point after the content is dismissed or changed.</li>
          <li><strong>Navigation</strong> - Use ARIA roles like role="navigation" and techniques such as updating the browser's history API to improve the usability of dynamically changing content.</li>
        </ul>

        <h2 id="skip">Skip to content link</h2>
        <p>Skip to content links are a crucial feature in web accessibility. These links allow users, especially those using screen readers or keyboard navigation, to bypass repetitive navigation links and directly access the main content of a page. Implementing skip navigation links effectively enhances the usability of a website for users with disabilities by reducing the effort required to reach actionable content.</p>
        <ul>
          <li>Skip navigation links are typically positioned at the very beginning of the webpage, making them the first focusable element.</li>
          <li>When activated, these links allow users to jump straight to a designated section of the page, usually the main content area, which helps avoid the frustration of tabbing through lengthy navigation menus.</li>
          <li>For sighted keyboard users, it's crucial that these links become visible on focus, ensuring that they are both accessible and unobtrusive to the overall site design.</li>
        </ul>
        <p><strong>Design system component</strong></p>
        <p>We recognize the importance of this feature and have a skip navigation link component planned in our development backlog. <a href="https://github.com/GovAlta/ui-components/issues/1191">View Github issue.</a></p>
      </div>
    </ComponentContent>
  );
}
