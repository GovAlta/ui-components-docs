import { GoADivider, GoABlock, GoATable } from "@abgov/react-components";
import { Link } from "react-router-dom";
import { getCssVarValue } from "../../utils/styling";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function FoundationsTypographyPage() {
  return (
      <ComponentContent>
        <h1>Typography</h1>
         <GoADivider mt="2xl" mb="2xl"></GoADivider>

        <h2>Importance of visual hierarchy</h2>
        <p>Defining a visual hierarchy in text design is essential for shaping the visual narrative, enhancing legibility, and conveying the importance of content by arranging it at different levels.</p>
        <ul>
          <li><strong>Visual hierarchy</strong>: Our typography scale helps in creating a clear structure by distinguishing different levels of information, guiding users through the content based on importance and flow.</li>
          <li><strong>Emphasis</strong>: Using font variations like size, weight and style, we can draw attention to key elements or actions and prioritize certain information over others.</li>
          <li><strong>Purpose</strong>: Our typeface supports the message by aligning the text's style with the intended meaning of the content.</li>
          <li><strong>Legibility</strong>: Ensuring that the text is easy to read across all devices and context is crucial, and our typography plays a key role by optimizing font size, spacing, and contrast.</li>
        </ul>

        <h2>Typefaces</h2>
        <h3>Acumin Pro SemiCondensed</h3>
        <p>We use the <a href="https://fonts.adobe.com/fonts/acumin" target="_blank">Acumin Pro SemiCondensed</a> typeface for all the web interfaces in the Government of Alberta (GoA). Follow our <Link to="/get-started/developers/setup">setup guide</Link>, and the necessary fonts are automatically included.</p>

        <h3>Roboto</h3>
        <p>We use the open-sourced monospaced typeface, <a href="https://fonts.google.com/specimen/Roboto+Mono?subset=cyrillic-ext&selection.family=Alegreya+Sans+SC:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900|Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900|Arimo:ital,wght@0,400;0,700;1,400;1,700|Arsenal:ital,wght@0,400;0,700;1,400;1,700|Comfortaa|Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700|Cousine:ital,wght@0,400;0,700;1,400;1,700|Cuprum|Didact+Gothic|Fira+Mono:wght@400;500;700|Fira+Sans+Condensed|Fira+Sans+Extra+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&preview.text=te&preview.text_type=custom" target="_blank">Roboto Mono</a> for numbers in places where comparing numbers is important. This enhances readability and alignment when displaying numerical data, making it easier to compare figures accurately.</p>
        
        <h2>Text styles</h2>
        <GoABlock mt="xl" mb="xl">
          <div style={{ font: "var(--goa-typography-heading-xl)" }}>XLarge heading - Perspiciatis unde omnis iste natus error sit.</div>
          <div style={{ font: "var(--goa-typography-heading-l)" }}>Large heading - Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</div>
          <div style={{ font: "var(--goa-typography-heading-m)" }}>Medium heading - Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
          <div style={{ font: "var(--goa-typography-heading-s)" }}>Small heading - Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
          <div style={{ font: "var(--goa-typography-heading-xs)" }}>XSmall heading - Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunto.</div>
          <div style={{ font: "var(--goa-typography-body-l)" }}>Large text - Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</div>
           <div style={{ font: "var(--goa-typography-body-m)" }}>Medium text - Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</div>
           <div style={{ font: "var(--goa-typography-body-s)" }}>Small text - Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</div>
           <div style={{ font: "var(--goa-typography-body-xs)" }}>XSmall text - Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</div>
           <div style={{ font: "var(--goa-typography-number-l)" }}>Large number text - 12345678910 1111 2222 3333 4444 5555 6666 7777 8888 9999 0000</div>
           <div style={{ font: "var(--goa-typography-number-m)" }}>Medium number text - 12345678910 1111 2222 3333 4444 5555 6666 7777 8888 9999 0000</div>
           <div style={{ font: "var(--goa-typography-number-s)" }}>Small number text - 12345678910 1111 2222 3333 4444 5555 6666 7777 8888 9999 0000</div>
        </GoABlock>

        <h3>Headings</h3>
        <p>We use headings consistently throughout a digital service to create a clear content structure and predictable pattern for the users.</p>
        <p>You can organize the content on a page using XLarge Heading, Large Heading, Medium Heading, Small Heading and XSmall Heading to provide a logical order and depth making the content easy to skim and understand. We follow sentence case for all headings. We follow sentence case for all headings.</p>
        <p>We highly recommend assigning the HTML heading tags for accessibility. The first heading on any page should be assigned an H1 tag irrespective of the typestyle it follows. Ensure to use heading tags from H2 to H5 in a numerical order to further optimize the page content for accessibility and SEO purposes.</p>

        <h3>Paragraphs</h3>
        <h4>Large text</h4>
        <p>Large text can be used as a lead or introductory paragraph at the top of a page to summarize the content. This often follows Heading 1.</p>

        <h4>Body text</h4>
        <p>Body text is used for the main content and descriptive paragraphs on a page. The default paragraph text size is 18px for both large and small screens.</p>
        
        <h4>Small text</h4>
        <p>Use small text as sparingly as needed. Small text can be used in compact tables and containers. Our small text size is 16px.</p>
        <p>We recommend using 18px for most of your body copy text for better legibility and readability.</p>
        
        <h4>XSmall text</h4>
        <p>XSmall text is used for the less important content on a page that does not require immediate attention. Micro text is often used to display text like “terms and conditions”, “FOIP statements”, etc.</p>
        
        <h3>Links</h3>
        <p>We have 3 text sizes for links to choose from depending on the need and context in your design.</p>
        <p>Our link styles include underlined text with the interactive-default color blue for better accessibility and usability.</p>

        <h2>Formatting</h2>
        
        <h3>Alignment</h3>
        <p>We keep all our text left aligned which includes all the headings, body text, links and buttons.</p>
        <h4>Using right alignment for numbers</h4>
        <p>We recommend using the right alignment for numbers in tables that deal with statistical data, financial figures or units of measurements with the same number of decimal places. This makes it easy to compare the data when values are vertically aligned.</p>
        <h4>Using left alignment for numbers</h4>
        <p>Information like phone numbers in a table can be kept left aligned as it is not a comparable value.</p>

        <h3>Capitalization</h3>
        <p>We use sentence case for all headings, body text, links and buttons.</p>
        
        <h3>Decoration</h3>
        <p>We recommended using the defined text styles which include their respective font weights. Text should not be underlined unless it is a link.</p>

        <h2>Specifications</h2>
        <GoATable width="100%" variant="relaxed">
          <thead>
            <tr>
              <th>Figma type style</th>
              <th>Type family</th>
              <th>Weight</th>
              <th>Font size</th>
              <th>Line height</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div style={{ font: "var(--goa-typography-heading-xl)" }}>XLarge heading</div></td>
              <td>Acumin Pro SemiCondensed</td>
              <td>Bold</td>
              <td>48px | 3rem</td>
              <td>56px | 3.5rem</td>
            </tr>
            <tr>
              <td><div style={{ font: "var(--goa-typography-heading-l)" }}>Large heading</div></td>
              <td>Acumin Pro SemiCondensed</td>
              <td>Regular</td>
              <td>36px | 2.25rem</td>
              <td>44px | 2.75rem</td>
            </tr>
            <tr>
              <td><div style={{ font: "var(--goa-typography-heading-m)" }}>Medium heading</div></td>
              <td>Acumin Pro SemiCondensed</td>
              <td>Regular</td>
              <td>24px | 1.5rem</td>
              <td>32px | 2rem</td>
            </tr>
            <tr>
              <td><div style={{ font: "var(--goa-typography-heading-s)" }}>Small heading</div></td>
              <td>Acumin Pro SemiCondensed</td>
              <td>Bold</td>
              <td>18px | 1.125rem</td>
              <td>28px | 1.75rem</td>
            </tr>
            <tr>
              <td><div style={{ font: "var(--goa-typography-heading-xs)" }}>XSmall heading</div></td>
              <td>Acumin Pro SemiCondensed</td>
              <td>Bold</td>
              <td>16px | 1rem</td>
              <td>24px | 1.5rem</td>
            </tr>
            <tr>
              <td><div style={{ font: "var(--goa-typography-body-l)" }}>Large text</div></td>
              <td>Acumin Pro SemiCondensed</td>
              <td>Regular</td>
              <td>24px | 1.5rem</td>
              <td>32px | 2rem</td>
            </tr>
            <tr>
              <td><div style={{ font: "var(--goa-typography-body-m)" }}>Medium text</div></td>
              <td>Acumin Pro SemiCondensed</td>
              <td>Regular</td>
              <td>18px | 1.125rem</td>
              <td>28px | 1.75rem</td>
            </tr>
            <tr>
              <td><div style={{ font: "var(--goa-typography-body-s)" }}>Small text</div></td>
              <td>Acumin Pro SemiCondensed</td>
              <td>Regular</td>
              <td>16px | 1rem</td>
              <td>24px | 1.5rem</td>
            </tr>
            <tr>
              <td><div style={{ font: "var(--goa-typography-body-xs)" }}>XSmall text</div></td>
              <td>Acumin Pro SemiCondensed</td>
              <td>Regular</td>
              <td>14px | 0.875rem</td>
              <td>20px | 1.25rem</td>
            </tr>
            <tr>
              <td><div style={{ font: "var(--goa-typography-number-m)" }}>Medium number</div></td>
              <td>Roboto Mono</td>
              <td>Regular</td>
              <td>18px | 1.125rem</td>
              <td>28px | 1.75rem</td>
            </tr>
          </tbody>
        </GoATable>
        
        <h3>Size</h3>
        <p>Our available text sizes range from 14px to 48px, giving you sufficient type scales to work with as per your requirement. </p>
        
        <h3>Weight</h3>
        <p>Our text style includes bold and regular font weight for <a href="https://fonts.adobe.com/fonts/acumin" target="_blank">Acumin Pro SemiCondensed</a> that is defined with each of our text styles.</p>
        <p>The typeface for numbers, <a href="https://fonts.google.com/specimen/Roboto+Mono?subset=cyrillic-ext&selection.family=Alegreya+Sans+SC:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900|Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900|Arimo:ital,wght@0,400;0,700;1,400;1,700|Arsenal:ital,wght@0,400;0,700;1,400;1,700|Comfortaa|Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700|Cousine:ital,wght@0,400;0,700;1,400;1,700|Cuprum|Didact+Gothic|Fira+Mono:wght@400;500;700|Fira+Sans+Condensed|Fira+Sans+Extra+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&preview.text=te&preview.text_type=custom" target="_blank">Roboto Mono</a> is set to regular for all the text styles for numbers.</p>

        <h3>Letter spacing</h3>
        <p>The default letter spacing in our typeface ensures adequate breathing room between each character, preventing a crowded appearance while enhancing both legibility and readability.</p>
        <p>As a result, we maintain a letter spacing setting of "0" for all variations of our typeface.</p>

        <h3>Line length</h3>
        <p>It is recommended to have between 45 to 72 characters in a single line for better readability.</p>
        <p>When content is translated, the line length can become longer or shorter depending on the language. And so, it is important to design text containers that can respond dynamically to accommodate varying lengths of text.</p>
        
        <h3>Line height</h3>
        <p>The line height of our text styles is set between 1.4 to 1.6 times of the font size. The font size and line height for each text style are defined keeping in mind a good visual balance that offers readability with a strong hierarchy.</p>
        
        <h3>Paragraph spacing</h3>
        <p>Use 16px paragraph spacing for body text to ensure readability between paragraphs of content.</p>
        
        <h2>Alternate heading styles</h2>
        <p>For greater flexibility within the type scale, Large headings and Medium headings can be bolded to create more emphasis and additional hierarchy as needed.</p>
        <GoATable width="100%" variant="relaxed">
          <thead>
            <tr>
              <th>Figma type style</th>
              <th>Font size</th>
              <th>Line height</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div style={{ font: "var(--goa-typography-heading-l)", fontWeight: "var(--goa-font-weight-bold)" }}>Heading 2</div></td>
              <td>36px | 2.25rem</td>
              <td>44px | 2.75rem</td>
              <td>Bold</td>
            </tr>
            <tr>
              <td><div style={{ font: "var(--goa-typography-heading-m)", fontWeight: "var(--goa-font-weight-bold)" }}>Heading 3</div></td>
              <td>24px | 1.5rem</td>
              <td>32px | 2rem</td>
              <td>Bold</td>
            </tr
          </tbody>
        </GoATable>
        
        <h2>Best practices</h2>
        <h3>Accessibility</h3>
        <ul>
          <li>Use a font size of at least 16px-18px for most of the text on your interface, especially long-form content like paragraphs to make the content more accessible to users including those with low vision. Use text size less than 16px sparingly only for content that is less important and very brief, like UI controls, microcopy text, etc.</li>
          <li>Maintain a logical order for headings on a page from H1 to H5. Always begin the page with an H1 heading at the top of the content hierarchy. This ensures that content is optimized for SEO and screen readers.</li>
          <li>Do not deviate from the defined text styles and <Link to="/design-tokens/typography">design tokens</Link> as the colors are set to follow a recommended contrast ratio of 4.5:1 between the foreground and background and ensure better readability for our users.</li>
        </ul>

        <h3>Style</h3>
        <ul>
          <li>Use left alignment for all the text including headings, body text, links, and text within tables.</li>
          <li>Wrap text to multiple lines when the width of the area is fixed to ensure that the user can see the full text. Avoid truncating the text as it may lose context and present information in a misleading way. Alternative approaches like progressive disclosure, accordions, or other relevant components or patterns can be used to prevent text truncation.</li>
        </ul>
      </ComponentContent>
  );
}
