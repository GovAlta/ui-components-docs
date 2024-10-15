import { GoABlock, GoADivider, GoAFormItem, GoAGrid, GoASideMenu } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function FoundationsLayoutPage() {
  return (
    
      <ComponentContent>
        <h1>Layout</h1>
        <h3>We use the layout as a structural template to support consistency across our services. By defining visual grids, spacing, and sections, we create intuitive services for our users.</h3>
        <GoADivider mt="3xl" mb="3xl"></GoADivider>
        <h3>The spacing scale</h3>
        <p>The Design System uses a spacing scale with a 16px base value to be used within layout spacing and spacing within components. See spacing for more information.</p>

        <h2>Breakpoints</h2>
        <p>Default breakpoint sizing for different viewport widths are as follows:</p>
      </ComponentContent>
  );
}
