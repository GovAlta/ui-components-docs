import { GoADivider } from "@abgov/react-components";
import { Link } from "react-router-dom";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function AccessibilityPage() {
  return (
      <ComponentContent tocCssQuery="h2[id], h3[id]">
        <h1>Accessibility</h1>
        <h3>We aim to create digital products that everyone can use, no matter their abilities or situation. This guide outlines key principles, design tips, and tools to help create accessible and inclusive experiences.</h3>
        <GoADivider mt="2xl" mb="2xl"></GoADivider>
        <div className="max-width-72ch">
          <p>Every component in our design system meets WCAG 2 Level AA standards. While the system has accessibility features, teams should take extra steps to ensure consistent and accessible experiences across all products and platforms.</p>

          <h2 id="wcag-accessibility-compliance">Key principles of accessibility</h2>
          <p>We follow <a href="https://www.w3.org/WAI/WCAG22/Understanding/intro" target="_blank">the four WCAG principles</a>:</p>
          <ol>
            <li><strong>Perceivable:</strong> Ensure users can sense all information. This means:
              <ul>
                <li>Providing text alternatives for non-text content</li>
                <li>Creating content that can be presented in different ways without losing meaning</li>
                <li>Making content easy to see and hear.</li>
              </ul>
            </li>
            
            <li><strong>Operable:</strong> Make every function easy to use. This means:
              <ul>
                <li>Making all functionality available from a keyboard</li>
                <li>Providing users enough time to read and use content</li>
                <li>Helping users navigate and find content</li>
              </ul>
            </li>

            <li><strong>Understandable:</strong> Keep content clear and predictable. This means:
              <ul>
                <li>Making text readable and understandable</li>
                <li>Making content appear and operate in predictable ways</li>
                <li>Helping users avoid and correct mistakes</li>
              </ul>
            </li>
            
            <li><strong>Robust:</strong> Make sure it works with both current and future tools. This means:
              <ul>
                <li>Ensuring compatibility with different browsers and assistive tools.</li>
                <li>Providing clear and consistent structure to content</li>
              </ul>
            </li>
          </ol>

          <h2 id="design-considerations">Design considerations</h2>
          <h3>Visuals</h3>
          <ul>
            <li><strong>Color contrast</strong> - Use a ratio of 4.5:1 for normal text and 3:1 for large text. Helpful tools include: 
              <ul>
                <li><a href="https://www.figma.com/community/plugin/734693888346260052/able-friction-free-accessibility" target="_blank">Able Figma plugin</a></li>
                <li><a href="https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker" target="_blank">Stark Accessibility plugin</a></li>
                <li><a href="https://webaim.org/resources/contrastchecker/" target="_blank">WebAIM's contrast checker</a></li>
              </ul>
            </li>
            <li><strong>Don't rely on color alone</strong> - Use text or icons for clarity. Color-only information or changes are hard to distinguish for users with color blindness or limited vision.</li>
            <li><strong>Semantic colors</strong> - Use colors thoughtfully (e.g., green for success, red for errors).</li>
            <li><strong>Text size</strong> - Use a minimum font size of 16px for readability. Smaller fonts should be used sparingly and only for less important information.</li>
          </ul>

          <h3>Interactions</h3>
          <ul>
            <li><strong>Component states</strong> - Include relevant component states such as focus, hover, active, selected, and disabled to guide users.</li>
            <li><strong>Target size</strong> - Make interactive areas at least 24x24 pixels, including the white space.</li>
            <li><strong>Avoid displaying disabled elements</strong> - Instead of disabling buttons, let users try actions and provide feedback or guidance if needed. Alternatively, you can hide an element on a page rather than showing it in a disabled state.</li>
          </ul>
          
          <h3>Content</h3>
          <ul>
            <li><strong>Clear language</strong> - Use simple, inclusive language, aiming for a Grade 9 reading level.</li>
            <li><strong>Headings and labels</strong> - Organize content using clear headings for easier navigation. This is especially important for those with cognitive disabilities or those using screen readers.</li>
            <li><strong>Alternative text</strong> - Provide descriptive text for images and clear labels for links or buttons. Screen readers and text-to-speech tools rely on alternative text for images and accessible labels for interactive elements to share information and actions clearly.</li>
          </ul>
          
          <h3>Multimedia</h3>
          <ul>
            <li><strong>Transcripts and captions</strong> - Provide captions or transcripts for all video and audio content. These offer a different way for users with hearing loss, low vision, or blindness to access content.</li>
          </ul>
          
          <h3>Time on task</h3>
          <ul>
            <li><strong>Allow enough time for completing tasks</strong> - Make sure users have enough time to complete tasks like one-time-password validation and other sessions that may expire.</li>
            <li><strong>Save progress</strong> - Let users save their progress during time-limited tasks.</li>
          </ul>
          
          <h3>Input assistance and system feedback</h3>
          <ul>
            <li><strong>Feedback and error messages</strong> - Most users depend on the feedback from the system when making a decision or performing a task. Providing clear and concise help text, instructions, feedback and error messages allows users to navigate and move forward effectively.</li>
          </ul>
          
          <h3>Device-friendly design</h3>
          <ul>
            <li><strong>Text resizing</strong> - Ensure content remains accessible when users enlarge text.</li>
            <li><strong>Responsiveness</strong> - While adapting a design for different screens, consider how users access content on different devices. For example, scanning a cheque on a mobile device could also allow scanning in landscape mode for better usability and output.</li>
          </ul>

          <h2 id="development-considerations">Development considerations</h2>
          <h3>Accessibility Rich Internet Applications (ARIA)</h3>
          <p>ARIA attributes add extra accessibility features to components.</p>
          <p>Our design system components come with default ARIA behaviours and properties. These are documented to help developers understand and implement accessibility features without requiring extensive modifications.</p>

          <h4>ARIA roles and headings</h4>
          <p>The system uses ARIA roles to help assistive tools understand the purpose of different elements. These roles communicate what each element is for to screen readers and other assistive technologies.</p>
          <ul>
            <li><strong>Headings</strong> - Use structured headings (H1, H2, etc.) to organize content. H tags don't have to match the text size. For example, a Large Heading can be labeled as H1. Just keep headings consistent across pages, as this helps users find information quickly.</li>
          </ul>
          
          <h3>Dynamic content</h3>
          <p>Dynamic content, which updates or changes without a full page reload, can create challenges for accessibility. Here are some ways to handle dynamic content for accessibility:</p>

          <h4>Use of ARIA live regions</h4>
          <p>ARIA live regions let screen readers announce webpage updates without changing focus.</p>
          <p>Use aria-live with values like:</p>
          <ul>
            <li>"polite" for non-urgent updates</li>
            <li>"assertive" for important updates</li>
            <li>"off" to turn off announcements</li>
          </ul>

          <p>Check the <Link to="/components/callout">Callout</Link> or <Link to="/components/notification-banner">Notification Banner</Link> components to see how we handle updates for assistive technology.</p>

          <h4>Form updates</h4>
          <p>Use ARIA role=”alert” or live regions to notify users when new questions show up. When a form changes and new fields appear based on what a user enters, it's important to let them know.</p>
          
          <h4>Managing focus</h4>
          <p>In Single Page Applications (SPAs), manage focus to help users understand where they are after dynamic content loads. For example:</p>
          <ul>
            <li>If a pop-up window opens, move focus to it.</li>
            <li>When the pop-up closes, move focus back to the main page.</li>
          </ul>
          
          <h3>Skip to content link</h3>
          <p>Skip to content links help users, especially those using screen readers or keyboard navigation, jump directly to the main part of a webpage. This makes it easier for people with varying abilities to use the product without having to go through repetitive navigation links.</p>
          <ul>
            <li><strong>Positioning</strong> - These links are usually placed at the top of the page, so they are the first thing users can focus on.</li>
            <li><strong>Functionality</strong> - When users activate these links, they go straight to the main content, avoiding long navigation menus.</li>
            <li><strong>Visibility</strong> - For users who can see, these links should be visible when they first tab to them, allowing them to skip navigation easily.</li>
          </ul>

          <h3>Keyboard navigation</h3>
          <p>All interactive elements in our design system are accessible via the keyboard, with clear focus indicators.</p>
          <p>Keyboard navigation is important for users who only use a keyboard to interact with websites and apps. It allows them to move around and do things without a mouse or touch screen.</p>
          
          <h3>Optimizing performance</h3>
          <p>Improving speed, loading time, and responsiveness helps users with older devices, slower internet connections, or mobile phones access our services effectively.</p>
          
          <h2 id="accessibility-testing">Accessibility testing</h2>
          <p>Testing ensures components are used in ways that make services fully accessible. Recommended tools include:</p>
          <ul>
            <li><strong>Screen readers</strong> - <a href="https://www.nvaccess.org/" target="_blank">NVDA</a> (Windows), <a href="https://www.apple.com/accessibility/" target="_blank">VoiceOver</a> (Apple). </li>
            <li><strong>Automated tools</strong> - <a href="https://www.deque.com/axe/" target="_blank">Axe</a>, <a href="https://wave.webaim.org/" target="_blank">Wave</a>, <a href="https://developers.google.com/web/tools/lighthouse" target="_blank">Lighthouse</a>. </li>
          </ul>

          <p>For more information on accessibility testing or to recruit users, please check out our internal guidance for <a href="https://goa-dio.atlassian.net/l/cp/M136kgku" target="_blank">accessibility testing recruitment</a>.</p>
          
          <h3>Additional resources</h3>
          <ul>
            <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">Web Content Accessibility Guidelines (WCAG)</a></li>
            <li><a href="https://www.figma.com/community/accessibility" target="_blank">Accessibility Plugins for Figma</a></li>
            <li><a href="https://support.microsoft.com/en-us/office/get-your-document-s-readability-and-level-statistics-85b4969e-e80a-4777-8dd3-f7fc3c8b3fd2" target="_blank">Microsoft Word document readability checker</a></li>
            <li><a href="https://www.a11yproject.com/" target="_blank">The A11y Project</a></li>
            <li><a href="https://www.magentaa11y.com/" target="_blank">MagentaA11y</a></li>
          </ul>
        </div>
      </ComponentContent>
  );
}
