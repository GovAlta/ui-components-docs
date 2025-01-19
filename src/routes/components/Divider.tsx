import { useState } from "react";
import { ComponentBinding } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoADivider, GoATab, GoATabs, GoACallout } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import Sandbox from "@components/sandbox/Sandbox.tsx";
import "./AllComponents.css";

// == Page props ==

const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=46-115";
const componentName = "Divider";
const category = Category.UTILITIES;
const relatedComponents = [
  { link: "/components/container", name: "Container" },
];
const description =
  "Indicate a separation of layout, or to distinguish large chunks of information on a page.";
type ComponentPropsType = Record<string, unknown>;

export default function DividerPage() {
  const [dividerProps, setDividerProps] = useState<ComponentPropsType>({});
  const [dividerBindings, setDividerBindings] = useState<ComponentBinding[]>([
    {
      label: "Top Margin",
      type: "list",
      name: "mt",
      options: ["none", "3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
      value: "none",
    },
    {
      label: "Bottom Margin",
      type: "list",
      name: "mb",
      options: ["none", "3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
      value: "none",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
    {
      name: "testId",
      type: "string",
      lang: "react",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "testid",
      type: "string",
      lang: "angular",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
  ];

  function onSandboxChange(utilityBindings: ComponentBinding[], props: Record<string, unknown>) {
    setDividerBindings(utilityBindings);
    setDividerProps(props);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        githubLink={componentName}
        figmaLink={FIGMA_LINK}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoATabs>
          <GoATab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>Playground</h2>
            <Sandbox properties={dividerBindings} onChange={onSandboxChange} fullWidth>
              <GoADivider {...dividerProps} />
            </Sandbox>

            {/* Component properties table */}
            <ComponentProperties properties={componentProperties} />
          </GoATab>

          {/* No Examples Tab since there are no examples */}

          <GoATab heading="Design">
            <GoACallout
              heading="Design documentation in Figma"
              type="important"
              size="medium"
              maxWidth="540px"
            >
              Detailed design documentation for this component can be found on the associated{" "}
              <a href={FIGMA_LINK} target="_blank" rel="noreferrer">
                component page
              </a>{" "}
              in the Component library in Figma.
            </GoACallout>
          </GoATab>

        </GoATabs>
      </ComponentContent>
    </>
  );
}