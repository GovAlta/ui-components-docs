import { GoADivider, GoATable, GoAContainer, GoASpacer } from "@abgov/react-components";
import { Link } from "react-router-dom";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function FoundationsLayoutPage() {
  return (
    
      <ComponentContent tocCssQuery="h2[id], h3[id]">
        <h1>Layout</h1>
        <h3>We use the layout as a structural template to support consistency across our products. By defining visual grids, spacing, and sections, we create intuitive products for our users.</h3>
        <GoADivider mt="2xl" mb="2xl"></GoADivider>
        <div className="max-width-72ch">
          <h3 id="spacing-scale">The spacing scale</h3>
          <p>The Design System uses a spacing scale with a 16px base value to be used within layout spacing and spacing within components. <Link to="/design-tokens/spacing">See spacing for more information</Link>.</p>

          <GoADivider mt="2xl" mb="2xl"></GoADivider>
          <h2 id="breakpoints">Breakpoints</h2>
          <p>Default breakpoint sizing for different viewport widths are as follows:</p>
          <GoASpacer vSpacing="l"></GoASpacer>
          <GoATable width="100%" variant="relaxed">
            <thead>
              <tr>
                <th>
                  Breakpoint
                </th>
                <th>
                  Viewport(px)
                </th>
                <th>
                  Margin
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Small screen (mobile)
                </td>
                <td>
                  &lt;624px
                </td>
                <td>
                  16px
                </td>
              </tr>
              <tr>
                <td>
                  Medium screen (tablet)
                </td>
                <td>
                  624-1024px
                </td>
                <td>
                  32px
                </td>
              </tr>
              <tr>
                <td>
                  Large screen (desktop)
                </td>
                <td>
                  &gt;1024px
                </td>
                <td>
                  64px
                </td>
              </tr>
            </tbody>
          </GoATable>
          <h2 id="margins">Margins</h2>
          <h3 id="default-margin">Default margin</h3>
          <p>Margins provide a visual buffer between a view's content and any content outside of the view's bounds. These inset values create a space between the edges of the view's bounds rectangle and the content inside the view.</p>

          <GoAContainer mt="m" mb="2xl">
              <div style={{ textAlign: "center" }}>
                <img src="/images/layout/default-margins.png" width="100%"></img>
              </div>
          </GoAContainer>
          
          <GoADivider mt="m" mb="2xl"></GoADivider>

          <h2 id="common-layouts">Common layouts</h2>
          <h3 id="basic-form-layout">Basic form layout</h3>
          <p>See <Link to="/patterns/simple-form">Public form pattern</Link> for more information</p>
          <p>The default layout for a form page uses a maximum page width of 960px. This ensures optimal line length (50-75 characters) and simplifies the content for the user. This layout is often used for public-facing forms.</p>
          
          <GoAContainer mt="m" mb="2xl">
              <div style={{ textAlign: "center" }}>
                <img src="/images/layout/basic-form-layout.jpg" width="100%"></img>
              </div>
          </GoAContainer>
          
          <h3 id="basic-form-template">Basic form layout example</h3>
          <p>This layout is recommended for public-facing forms where the content needs to be simple, accessible, and often broken down into simple one question pages.</p>
          
          <GoAContainer mt="m" mb="2xl">
              <div style={{ textAlign: "center" }}>
                <img src="/images/layout/basic-form-layout-example.jpg" width="100%"></img>
              </div>
          </GoAContainer>

          <GoADivider mt="m" mb="2xl"></GoADivider>
          
          <h3 id="side-nav-layout">Side navigation layout</h3>
          <p>A 2-column layout that has a fixed side navigation and a fluid content container.</p>
          
          <GoAContainer mt="m" mb="2xl">
              <div style={{ textAlign: "center" }}>
                <img src="/images/layout/side-nav-layout-example-1.jpg" width="100%"></img>
              </div>
          </GoAContainer>
          
          <p>When designing for large screens, consider a max content width to prevent the content from getting too wide.</p>
          <GoAContainer mt="m" mb="2xl">
              <div style={{ textAlign: "center" }}>
                <img src="/images/layout/side-nav-layout-example-2.jpg" width="100%"></img>
              </div>
          </GoAContainer>
          
          <h3 id="side-nav-example">Side navigation layout example</h3>
          <p>A 2-column layout is often used for internal applications, where there is a need for a side navigation.</p>
          
          <GoAContainer mt="m" mb="2xl">
              <div style={{ textAlign: "center" }}>
                <img src="/images/layout/side-navigation-layout-example-3.jpg" width="100%"></img>
              </div>
          </GoAContainer>
          
          <GoADivider mt="m" mb="2xl"></GoADivider>
          
          <h3 id="side-nav-side-bar">Side navigation and side bar layout</h3>
          <p>A 3-column layout that has a fixed side navigation as well as a second side panel on the right hand side. The third column is often used to show tertiary information, comments, or other documents alongside the main content area. Depending on your content, for large viewports it is recommended to use a max content width of 1176px on the main content area.</p>
          
          <GoAContainer mt="m" mb="2xl">
              <div style={{ textAlign: "center" }}>
                <img src="/images/layout/side-navigation-sidebar.jpg" width="100%"></img>
              </div>
          </GoAContainer>
          
        </div>
      </ComponentContent>
  );
}
