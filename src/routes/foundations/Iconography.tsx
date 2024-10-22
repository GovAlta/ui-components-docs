import { GoADivider, GoABlock, GoATable } from "@abgov/react-components";
import { DoDont } from "@components/do-dont/DoDont";
import { Link } from "react-router-dom";
import { getCssVarValue } from "../../utils/styling";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function IconographyPage() {
  return (
      <ComponentContent>
        <h1>Iconography</h1>
        <h3>Icons are simple and universal graphic symbols that communicate enhance both the aesthetic and functional aspects of our services. While they can be used with descriptors, they can also be self-expressive and convey meaning where words cannot.</h3>

         <GoADivider mt="xl" mb="xl"></GoADivider>

        <h2>Style</h2>
        <p>Our icon style is simple, rounded, featuring thin line strokes, or filled shapes. They are designed to scale proportionally, ensuring that they are integrated seamlessly into various interface sizes.</p>

        <h3>Categories</h3>
        <p>They are divided into three categories: Core, Extended and Logo icon set.</p>

        <h4>Core Icon Set</h4>
        <p>This is the main icon library in the design system, helping us maintain consistency with other teams.</p>

        <GoABlock mt="xl" mb="xl">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <p>img here</p>
              <p {{ font: getCssVarValue(`--goa-typography-body-xs`) }}>Alert and messaging</p>
            </div>
          </DoDont>
        </GoABlock>

        <GoABlock mt="xl" mb="xl">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <p>img here</p>
              <p {{ font: getCssVarValue(`--goa-typography-body-xs`) }}>Basic</p>
            </div>
          </DoDont>
        </GoABlock>
        
        <GoABlock mt="xl" mb="xl">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <p>img here</p>
              <p {{ font: getCssVarValue(`--goa-typography-body-xs`) }}>Direction</p>
            </div>
          </DoDont>
        </GoABlock>
        
        <GoABlock mt="xl" mb="xl">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <p>img here</p>
              <p {{ font: getCssVarValue(`--goa-typography-body-xs`) }}>Interactions</p>
            </div>
          </DoDont>
        </GoABlock>
      
        <GoABlock mt="xl" mb="xl">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <p>img here</p>
              <p {{ font: getCssVarValue(`--goa-typography-body-xs`) }}>Accounts</p>
            </div>
          </DoDont>
        </GoABlock>

        <p>Explore core icons set and their properties <a href="https://design.alberta.ca/components/icons#tab-0" target="_blank">here</a>.</p>

        <h4>Extended Icon Set</h4>
        <p>To avoid re-inventing the wheel, we utilize an open-source icon library, <a href="https://ionic.io/ionicons" target="_blank">Ionicons</a>. Use these icons when you need additional icons outside the core icon set.</p>

        <GoABlock mt="xl" mb="xl">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <p>img here</p>
            </div>
          </DoDont>
        </GoABlock>

        <h4>Logo Icons</h4>
        <p>These icons set contain popular logos and are kept in accordance with their respective logo usage guidelines.</p>

        <GoABlock mt="xl" mb="xl">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <p>img here</p>
            </div>
          </DoDont>
        </GoABlock>

        <h2>Icon Size</h2>
         <GoATable width="100%" variant="relaxed">
          <thead>
            <tr>
              <th>Example</th>
              <th>Icon size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>image here</td>
              <td>Small – used in compact spaces</td>
            </tr>
            <tr>
              <td>image here</td>
              <td>Medium - suitable for slightly larger spaces</td>
            </tr>
            <tr>
              <td>image here</td>
              <td>Large – suitable for dense spaces where an icon is required</td>
            </tr>
          </tbody>
        </GoATable>
        
        <p>You can access the design tokens for icon sizes <Link to="/design-tokens/icon-size">here</Link>.</p>
        
        <p>A good size range is usually between 16px to 24px. When icons are interactive, it’s best to make it 24 x 24 CSS pixels to meet <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html" target="_blank">WCAG guidelines</a>. This ensures icon sizes are perceivable to a wide range of users including those with disabilities.</p>

        <h2>Best Practices</h2>
        <ul>
          <li>Whenever possible, combine icons with text for clear communication</li>
          <li>When placing icons next to text elements, ensure they are vertically aligned to create visual balance</li>
          <li>Do not create icons that are overly complex</li>
          <li>Apply color to an icon using our <Link to="/design-tokens/color">design tokens</Link>. Ensure color combinations meet <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html" target="_blank">WCAG standards</a> of at least a 3:1 contrast ratio between foreground and background. </li>
        </ul>

        <h2>Creating Icons</h2>
        <p>Before creating an icon, check if it already exists in the icon library. If not, you can follow these steps:</p>
        <ul>
          <li>Consult the do's and don'ts section in best practices.</li>
          <li>Ensure the icon aligns to the style of our icon sets.</li>
          <li>Choose a clear and descriptive name.</li>
        </ul>
      </ComponentContent>
  );
}
