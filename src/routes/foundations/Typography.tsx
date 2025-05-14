import { GoADivider, GoAContainer, GoASpacer } from "@abgov/react-components";
import { Link } from "react-router-dom";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function FoundationsTypographyPage() {

  return (
      <ComponentContent tocCssQuery="h2[id], h3[id]">
        <h1>Typography</h1>
        <h3>Our typography system is designed to create a consistent and accessible experience across all Government of Alberta digital products. When paired with an effective content strategy, it enhances accessibility and makes content easy to navigate, enabling citizens to find information quickly.</h3>
        <GoADivider mt="2xl" mb="xl"></GoADivider>

        <div className="max-width-72ch">
          <h2 id="typefaces">Our fonts</h2>
          <ul>
            <li><strong>Acumin Pro SemiCondensed</strong>: This is the primary font used for all text across Government of Alberta web interfaces.</li>
            <li><strong>Roboto Mono</strong>: This font is for numbers in places where comparing numbers is important. It enhances readability and alignment when displaying numerical data, making it easier to compare figures accurately.</li>
          </ul>
          <h2 id="usingType">Using type</h2>
          <p>The size and style of our type can greatly influence how it's read and understood. These guidelines explain how we use typography in Government of Alberta digital products to ensure clear communication for all users.</p>
          
          <h3 id="text-styles">Text styles</h3>
          <GoASpacer vSpacing="xl"></GoASpacer>
          <GoAContainer accent="filled" padding="relaxed" width="full">
            <GoASpacer vSpacing="xl"></GoASpacer>
            <div style={{ maxWidth:"570px", width:"100%", margin:"0 auto", font: "var(--goa-typography-heading-xl)" }}>XLarge heading - Perspiciatis unde omnis iste natus error sit.</div>
            <GoASpacer vSpacing="xl"></GoASpacer>
            <div style={{ maxWidth:"570px", width:"100%", margin:"0 auto", font: "var(--goa-typography-heading-l)" }}>Large heading - Perspiciatis unde omnis iste natus error sit voluptatem accusantium</div>
            <GoASpacer vSpacing="xl"></GoASpacer>
            <div style={{ maxWidth:"570px", width:"100%", margin:"0 auto", font: "var(--goa-typography-heading-m)" }}>Medium heading - Perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium</div>
            <GoASpacer vSpacing="xl"></GoASpacer>
            <div style={{ maxWidth:"570px", width:"100%", margin:"0 auto", font: "var(--goa-typography-heading-s)" }}>Small heading - Perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium.</div>
            <GoASpacer vSpacing="xl"></GoASpacer>
            <div style={{ maxWidth:"570px", width:"100%", margin:"0 auto", font: "var(--goa-typography-heading-xs)" }}>XSmall heading - Perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium</div>
            <GoASpacer vSpacing="xl"></GoASpacer>
            <div style={{ maxWidth:"570px", width:"100%", margin:"0 auto", font: "var(--goa-typography-body-l)" }}>Large text - Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</div>
            <GoASpacer vSpacing="xl"></GoASpacer>
            <div style={{ maxWidth:"570px", width:"100%", margin:"0 auto", font: "var(--goa-typography-body-m)" }}>Medium text - Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</div>
            <GoASpacer vSpacing="xl"></GoASpacer>
            <div style={{ maxWidth:"570px", width:"100%", margin:"0 auto", font: "var(--goa-typography-body-s)" }}>Small text - Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</div>
            <GoASpacer vSpacing="xl"></GoASpacer>
            <div style={{ maxWidth:"570px", width:"100%", margin:"0 auto", font: "var(--goa-typography-body-xs)" }}>XSmall text - Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</div>
            <GoASpacer vSpacing="xl"></GoASpacer>
            <div style={{ maxWidth:"570px", width:"100%", margin:"0 auto", font: "var(--goa-typography-number-l)" }}>Large number text - 12345678910 1111 2222 3333 4444 5555 6666 7777 8888 9999 0000</div>
            <GoASpacer vSpacing="xl"></GoASpacer>
            <div style={{ maxWidth:"570px", width:"100%", margin:"0 auto", font: "var(--goa-typography-number-m)" }}>Medium number text - 12345678910 1111 2222 3333 4444 5555 6666 7777 8888 9999 0000</div>
            <GoASpacer vSpacing="xl"></GoASpacer>
            <div style={{ maxWidth:"570px", width:"100%", margin:"0 auto", font: "var(--goa-typography-number-s)" }}>Small number text - 12345678910 1111 2222 3333 4444 5555 6666 7777 8888 9999 0000</div>
            <GoASpacer vSpacing="xl"></GoASpacer>
          </GoAContainer>

          <p>There are <Link to="/design-tokens/typography">different text styles</Link> available for headings and paragraphs:</p>

          <ul>
            <li><strong>Headings</strong>
              <ul>
                <li>5 sizes of headings (XLarge to XSmall) are available to organize content</li>
              </ul>
            </li>
            <li><strong>Paragraphs</strong>
              <ul>
                <li><strong>Large text</strong>: Use as a lead or introductory paragraph at the top of a page.</li>
                <li><strong>Body text</strong>: For main content and descriptive paragraphs. The default size is 18px for both large and small screens.</li>
                <li><strong>Small text</strong>: Used sparingly, typically in tables or compact areas at 16px.</li>
                <li><strong>XSmall text</strong>: Micro text is for less important content that does not require immediate attention, such as “terms and conditions.”</li>
              </ul>
            </li>
            <li><strong>Links</strong>
              <ul>
                <li>We offer three text sizes for links based on your design needs and context.</li>
                <li>Links are styled with underlined text in interactive-default blue, for better accessibility and usability.</li>
              </ul>
            </li>
          </ul>

          <h3 id="alignment">Alignment</h3>
          <p>All text, including headings, body text, links, and buttons, should be left-aligned for consistency.</p>

          <h4>Number alignment</h4>
          <ul>
              <li><strong>Right alignment</strong>: Use right alignment for numbers in tables dealing with statistical data or financial figures with the same number of decimal places. This makes it easier to compare values.</li>
              <li><strong>Left alignment</strong>: Keep non-comparable values, like phone numbers, left-aligned.</li>
          </ul>

          <h3 id="capitalization">Capitalization</h3>
          <p>Use sentence case for all headings, body text, links, and buttons. </p>

          <h3 id="decoration">Decoration</h3>
          <p>Stick to defined text styles with their respective font weights. Avoid underlining text unless it is a link.</p>
          
          <h3 id="lineLength">Line length</h3>
          <p>For better readability, aim for 45 to 72 characters per line.</p>
          <p>When content is translated, line lengths can change based on the language. Design text containers to adjust dynamically for different text lengths.</p>

          <h2 id="whyVisualHierarchyMatters">Why visual hierarchy matters</h2>
          <p>Visual hierarchy in text design is important because it: </p>
          <ul>
            <li>Shapes how readers see the content.</li>
            <li>Makes text easier to read.</li>
            <li>Shows which parts of the content are most important.</li>
          </ul>

          <h3 id="designingVisualHierarchy">Designing for visual hierarchy</h3>
          <p>When designing content, consider these key principles for creating effective visual hierarchy: </p>
          <ol>
            <li><strong>Structure content strategically</strong>
              <ul>
                <li>Use different heading sizes (XLarge to XSmall) to show content importance.</li>
                <li>Create a logical flow from the most to least important information.</li>
                <li>Ensure headings follow a consistent H1 to H5 order for accessibility.</li>
              </ul>
            </li>
            <li><strong>Use emphasis techniques</strong>
              <ul>
                <li>Vary font size, weight, and style to draw attention to key elements.</li>
                <li>Highlight critical actions or important information.</li>
                <li>Create clear distinctions between different content levels.</li>
              </ul>
            </li>
            <li><strong>Align typography with content purpose</strong>
              <ul>
                <li>Match text style to the message's intended meaning.</li>
                <li>Use font variations that support the content's emotional or informational tone.</li>
                <li>Ensure the typography reinforces the content's core message.</li>
              </ul>
            </li>
            <li><strong>Prioritize readability</strong>
              <ul>
                <li>Use at least 18px font size for body text.</li>
                <li>Ensure sufficient contrast between text and background.</li>
                <li>Design for readability across different devices and screen sizes.</li>
              </ul>
            </li>
          </ol>
        </div>  
      </ComponentContent>
  );
}
