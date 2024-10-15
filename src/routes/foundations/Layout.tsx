import { GoADivider, GoATable } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function FoundationsLayoutPage() {
  return (
    
      <ComponentContent>
        <h1>Layout</h1>
        <h3>We use the layout as a structural template to support consistency across our services. By defining visual grids, spacing, and sections, we create intuitive services for our users.</h3>
        <GoADivider mt="3xl" mb="2"></GoADivider>
        <h3>The spacing scale</h3>
        <p>The Design System uses a spacing scale with a 16px base value to be used within layout spacing and spacing within components. See spacing for more information.</p>

        <GoADivider mt="2" mb="2"></GoADivider>
        <h2>Breakpoints</h2>
        <p>Default breakpoint sizing for different viewport widths are as follows:</p>
        <GoATable width="100%">
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
                <624px
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
                >1024px
              </td>
              <td>
                64px
              </td>
            </tr>
          </tbody>
        </GoATable>
        
        <GoADivider mt="2" mb="2"></GoADivider>
        <h2>Margins</h2>
        <h3>Default margin</h3>
        <p>Margins provide a visual buffer between a view’s content and any content outside of the view’s bounds. These inset values create a space between the edges of the view’s bounds rectangle and the content inside the view.</p>
          
      </ComponentContent>
  );
}
