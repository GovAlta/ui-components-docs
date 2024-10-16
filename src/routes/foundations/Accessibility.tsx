import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function AccessibilityPage() {
  return (
      <ComponentContent>
        <h1>Accessibility</h1>
        <h3>We are committed to developing digital services that are inclusive, equitable, and valuable for all users. Our design philosophy centers on creating experiences that are both usable and beneficial to everyone, regardless of their abilities or circumstances.</h3>

        <p>Each component in our design system is designed and developed to meet the required accessibility standards by <strong>WCAG AA</strong> ensuring that our digital services are accessible to all citizens, including those with disabilities.</p>
        <p>Though our design system comes with accessibility features, there are some additional considerations to keep in mind while building a consistent and accessible experience across all products and platforms. </p>

        <h2>WCAG accessibility compliance</h2>
        <p>We follow <a href="https://www.w3.org/WAI/WCAG21/Understanding/intro#understanding-the-four-principles-of-accessibility" target="_blank">4 principles of web accessibility</a> upon which WCAG is based:</p>
        <ol>
          <li><strong>Perceivable:</strong> Information and user interface components must be presentable to users in ways they can perceive. This means: 
            <ol>
              <li>Providing text alternatives for non-text content</li>
              <li>Creating content that can be presented in different ways without losing meaning</li>
              <li>Making it easier for users to see and hear content</li>
            </ol>
          </li>
          
          <li><strong>Operable:</strong> User interface components and navigation must be operable. This includes:
            <ol>
              <li>Making all functionality available from a keyboard</li>
              <li>Providing users enough time to read and use content</li>
              <li>Helping users navigate and find content</li>
            </ol>
          </li>

          <li><strong>Understandable:</strong> Information and the operation of the user interface must be understandable. This involves:
            <ol>
              <li>Making text readable and understandable</li>
              <li>Making content appear and operate in predictable ways</li>
              <li>Helping users avoid and correct mistakes</li>
            </ol>
          </li>
          
          <li><strong>Robust:</strong> Content must be robust enough to be interpreted reliably by operating systems, web browsers and assistive technologies. This means:
            <ol>
              <li>Maximizing compatibility with current and future user tools</li>
              <li>Ensuring that content is parsed correctly by different browsers and assistive technologies</li>
              <li>Providing clear and consistent structure to content</li>
            </ol>
          </li>
        </ol>

        <h2>Design considerations</h2>
        <h3>Visuals</h3>
        <ul>
          <li><strong>Color contrast</strong> - We follow the <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" target="_blank">WCAG 2.2</a> guidelines for our design system components to achieve the minimum recommended color contrast between the foreground and the background elements. For text, we ensure a ratio of 4.5:1 for normal text and 3:1 for large text.You can use plugins like <a href="https://www.figma.com/community/plugin/734693888346260052/able-friction-free-accessibility" target="_blank">the Able plugin</a> or the <a href="https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker" target="_blank">Stark Accessibility plugin</a> in Figma, or an online tool like the <a href="https://webaim.org/resources/contrastchecker/" target="_blank">WebAIM’s contrast checker</a> to check color contrast in your designs.</li>
          <li><strong>Avoid using color as the sole indicator of information</strong> - In addition to color, always supply an icon or text to communicate. Color-only information or changes are hard to distinguish for users with color blindness or limited vision.</li>
          <li><strong>Semantic colors</strong> - Semantic colors help reinforce the interface and available interaction to the user. By using appropriate colors, you can highlight positive, negative, neutral, or critical information and convey its level of severity. For example, in user interfaces, green typically indicates positive statuses like "on" or "complete," while red signifies "off," "alert," "warning," "error," or "failure."</li>
          <li><strong>Text size</strong> - We recommend using text no smaller than 16px for adequate readability for all users. Smaller fonts should be used sparingly and only for less important information.</li>
        </ul>

        <h3>Interactions</h3>
        <ul>
          <li><strong>Component states</strong> - To help users navigate the interface, relevant component states should be included such as focus, hover, active, selected, disabled.</li>
          <li><strong>Target size</strong> - We recommend keeping the minimum interactive target size as 24X24 pixels including the white space around the target, and provide additional space when needed.  This ensures that the touch target is large enough for people with limited mobility to accurately tap what they are aiming for.</li>
          <li><strong>Avoid displaying disabled elements</strong> - We suggest hiding an element on a page rather than showing it in a disabled state. If you need to keep a disabled element, provide information on why it is disabled and how to enable it. For instance, do not disable the button to submit a form, instead allow the users to submit and then provide validation and errors to help users recover or correct their input accordingly.</li>
        </ul>
        
        <h3>Content</h3>
        <ul>
          <li><strong>Plain, clear and inclusive language</strong> - Ensure that the content is simple, straightforward and easy to understand. We recommend following the <a href="https://www.w3.org/TR/WCAG22/#reading-level" target="_blank">WCAG 2.2 guidelines for reading level</a>, i.e., lower secondary education level. This helps in avoiding jargon and technical terms unless necessary and clearly defined and makes your content accessible to a broad audience.</li>
          <li><strong>Headings and labels</strong> - Organizing content using hierarchical labels provides a clear structure and makes information easy to understand and navigate. This is especially important for those with cognitive disabilities or those using screen readers.</li>
        </ul>
        
        <h3>Accessibility text</h3>
        <ul>
          <li><strong>Alternative text</strong> - Screen readers and other text to speech tools rely on alternative text to convey information and actions in the user journey.  Supporting images, icons, buttons and links with alternative text makes the service usable for people relying on assistive technology.</li>
          <li><strong>Audio descriptions, transcripts and captions</strong> - Any prerecorded or live audio or video content should be supported with audio descriptions, transcripts or captions to provide an alternative way of accessing content for users with hearing loss, low vision or blindness.</li>
        </ul>
        
        <h3>Time on task</h3>
        <ul>
          <li><strong>Adequate time for completing tasks</strong> - Allocate enough time for tasks like one-time-password (OTP) validation, verification using CAPTCHA and other sessions that may expire. Providing ample time allows users with disabilities to navigate and complete these tasks effectively.</li>
          <li><strong>Saving progress for time–sensitive task sessions</strong> - Allow users to save their progress during time-sensitive sessions. This enables them to preserve their inputs and continue later without losing any progress or data.</li>
        </ul>
        
        <h3>Input assistance and system feedback</h3>
        <ul>
          <li><strong>Feedback and error messages</strong> - Most users depend on the feedback from the system when making a decision or performing a task. Providing clear and concise help text, instructions, feedback and error messages allows users to navigate and move forward effectively.</li>
        </ul>
        
        <h3>Device agnostic</h3>
        <ul>
          <li><strong>Text resizing</strong> - Make sure that text resizing does not result in losing content or functionalities.</li>
          <li><strong>Responsiveness</strong> - While adapting a design for different screens, also consider how users access content on different devices. For instance, playing videos on mobile could automatically switch to a landscape alignment if the device orientation settings allow it. Similarly, scanning a cheque on mobile devices could also allow scanning in a landscape mode for better usability and output.</li>
        </ul>

        <h2>Development considerations</h2>
        <h3>Accessibility Rich Internet Applications (ARIA)</h3>
        <p>Accessible Rich Internet Applications (ARIA) attributes provide ways to make applications more accessible by supplementing HTML so that common interactions in applications can be properly utilized with assistive technology.</p>
        <p>Our design system components come with default ARIA behaviors and properties. These are documented to help developers understand and implement accessibility features without the need for extensive modifications.</p>

        <h4>ARIA roles and headings</h4>
        <p>Proper use of ARIA roles and HTML headings is essential for creating accessible web content. These elements help assistive technologies interpret the structure and function of a web page, enabling users with disabilities to navigate and interact more effectively.</p>

        <h5>ARIA roles</h5>
        <p>Our design system utilizes ARIA roles where necessary to enhance accessibility by providing semantic meaning to UI components, ensuring that users of assistive technologies can navigate and interact with our interfaces effectively.</p>

        <h5>HTML headings</h5>
        <p><strong>Structure:</strong> Use headings to structure content hierarchically. Begin with an H1 for main title of the page, followed by H2 for main section titles, and H3 (and so forth) for subsections. This hierarchical use of headings helps users with screen readers understand the layout and navigate the content efficiently.</p>
        <p>The H tags can be independent of the actual size of the text. For example, if you only have a Large Heading (which is the second largest heading in <a href="#">our typescale</a>), it can be labeled as H1 on the page.</p>
        <p><strong>Consistency:</strong> Maintain consistency in headings across pages. This predictability aids users in quickly finding the information they need.</p>
        
        <h3>Dynamic content</h3>
        <p>Dynamic content, which updates or changes without a full page reload, poses specific challenges for accessibility. Ensuring that these updates are perceivable and manageable by all users, especially those using assistive technologies, is crucial for maintaining an inclusive web environment. </p>
        <p>Here are some key strategies for handling dynamic content accessibility:</p>

        <h4>Use of ARIA live regions</h4>
        <ul>
          <li><strong>Purpose:</strong> ARIA live regions provide a way to programmatically notify assistive technologies of content changes without requiring user focus to shift to that content.</li>
          <li><strong>Implementation:</strong> Utilize attributes like aria-live (with values such as “polite”, “assertive”, or “off”) to manage how updates are announced. For example, use “polite” for updates that are not urgent, so that they do not interrupt what the user is currently doing.</li>
          <li><strong>Examples:</strong> Common applications include updating an error summary, notification messages, or the status of ongoing processes.</li>
        </ul>

        <h4>Role attribute</h4>
        <ul>
          <li><strong>Application:</strong> Assign the role=”status” or role=”alert” to small regions where simple feedback about an operation in a user interface is needed. role=”alert” automatically has an implicit aria-live value of “assertive”, and it should only be used for critical updates that require immediate attention.</li>
        </ul>
        
        <h4>Use of ARIA live regions</h4>
        <ul>
          <li><strong>Focus handling:</strong> In Single Page Applications (SPAs), manage focus to ensure that users understand where they are after dynamic content loads. For example, when opening a modal or navigating in a single-page application, move focus to the new content or back to a logical starting point after the content is dismissed or changed.</li>
          <li><strong>Navigation:</strong> Use ARIA roles like role=”navigation” and techniques such as updating the browser’s history API to improve the usability of dynamically changing content.</li>
        </ul>
        
        <h3>Skip to content link</h3>
        <p>Skip to content links allow users, especially those using screen readers or keyboard navigation, to bypass repetitive navigation links and directly access the main content of a page. Implementing skip navigation links enhances the website's usability for users with disabilities by reducing the effort required to reach actionable content. </p>
        <ul>
          <li>Skip navigation links are typically positioned at the very top of the webpage, making them the first focusable element.</li>
          <li>When activated, these links allow users to jump straight to a designated section of the page, usually the main content area, which helps avoid the frustration of tabbing through lengthy navigation menus.</li>
          <li>For sighted keyboard users, it’s crucial that these links become visible on first focus so that the users can immediately skip the navigation links.</li>
        </ul>

        <h3>Keyboard navigation</h3>
        <p>Keyboard navigation is essential for users who rely on keyboard-only interactions to support navigational controls and actions using a keyboard.</p>
        <p>All interactive elements in our design system are accessible through logical tab sequences with visible focus indicators present.</p>
        
        <h3>Performance optimization</h3>
        <p>Optimizing speed, loading time, refresh time, real-time updates and responsiveness ensures that people with older technology or slower internet connections can use our services.</p>
        
        <h2>Accessibility testing</h2>
        <p>Though all the GoA components come with accessibility features, it is important to make sure that the components are integrated in a way that makes the service fully accessible. Accessibility testing helps in identifying some unforeseen issues.</p>
        <p>We recommend a mix of automated, semi-automated, and manual testing in addition to actual tests with real people who need assistive accommodation to interact with services effectively.</p>
        
        <h3>Screen reader tools</h3>
        <ul>
          <li><strong>NVDA (Non-Visual Desktop Access):</strong> A free and open-source screen reader for windows.</li>
          <li><strong>VoiceOver:</strong> An integrated screen reader found in all Apple operating systems.</li>
          <li><strong>JAWS (Job Access With Speech):</strong> A comprehensive screen reader for Windows. <a href="#">Request a license</a></li>
        </ul>
        
        <h3>Automated testing tools</h3>
        <ul>
          <li><strong>Axe:</strong> An accessibility testing tool that works both as a browser extension and within development testing environments.</li>
          <li><strong>Wave:</strong> A suite of evaluation tools that help authors make their web content more accessible to individuals with disabilities.</li>
          <li><strong>Lighthouse:</strong> An open-source, automated tool for improving the quality of web pages, with audits for performance, accessibility, progressive web apps, and more.</li>
        </ul>
        
        <h3>Usability testing with people with disabilities</h3>
        <ul>
          <li><strong>Disability Employee Resource Group:</strong> A team within GoA that is committed to improving the accessibility of our digital products through direct involvement in user testing. Contact <a href="mailto:pamela.klebanov@gov.ab.ca">pamela.klebanov@gov.ab.ca</a> and <a href="mailto:corinna.sales@gov.ab.ca">corinna.sales@gov.ab.ca</a> for more information or to recruit users for testing.</li>
        </ul>
      </ComponentContent>
  );
}
