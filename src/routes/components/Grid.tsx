import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import {
  GoAGrid,
  GoATab,
  GoATabs,
  GoACallout,
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import "./AllComponents.css";

// == Page props ==


const componentName = "Grid";
const category = Category.UTILITIES;
const description = "Arrange a number of components into a responsive grid pattern.";
const relatedComponents = [
  { link: "/components/block", name: "Block" },
  { link: "/components/divider", name: "Divider" },
  { link: "/patterns", name: "Layout" },
  { link: "/components/spacer", name: "Spacer" },
];

export default function GridPage() {
  const [gridProps, setGridProps] = useState({
    minChildWidth: "320px",
  });
  const [gridBindings, setGridBindings] = useState<ComponentBinding[]>([
    {
      label: "Gap",
      type: "list",
      name: "gap",
      options: ["", "none", "3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
      value: "m",
    },
    {
      label: "Minimum width",
      type: "string",
      name: "minChildWidth",
      value: "320px",
    },
  ]);
  const componentProperties: ComponentProperty[] = [
    {
      name: "gap",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Gap between child items",
      defaultValue: "m",
    },
    {
      name: "minChildWidth",
      type: "string",
      description: "Minimum width of the child elements",
      required: true,
      lang: "react",
    },
    {
      name: "minchildwidth",
      type: "string",
      description: "Minimum width of the child elements",
      required: true,
      lang: "angular",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  function onSandboxChange(gridBindings: ComponentBinding[], props: Record<string, unknown>) {
    setGridBindings(gridBindings);
    setGridProps(props as { minChildWidth: string; gap: string;[key: string]: unknown });
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        githubLink={componentName}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoATabs>
          <GoATab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={gridBindings} onChange={onSandboxChange} fullWidth>
              <GoAGrid {...gridProps}>
                <div
                  style={{
                    padding: "1rem",
                    backgroundColor: "rgba(0, 150, 255, 0.2)",
                    whiteSpace: "nowrap",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    padding: "1rem",
                    backgroundColor: "rgba(0, 150, 255, 0.2)",
                    whiteSpace: "nowrap",
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    padding: "1rem",
                    backgroundColor: "rgba(0, 150, 255, 0.2)",
                    whiteSpace: "nowrap",
                  }}
                >
                  3
                </div>
                <div
                  style={{
                    padding: "1rem",
                    backgroundColor: "rgba(0, 150, 255, 0.2)",
                    whiteSpace: "nowrap",
                  }}
                >
                  4
                </div>
                <div
                  style={{
                    padding: "1rem",
                    backgroundColor: "rgba(0, 150, 255, 0.2)",
                    whiteSpace: "nowrap",
                  }}
                >
                  5
                </div>
              </GoAGrid>
            </Sandbox>
            {/*Grid component properties*/}
            <ComponentProperties properties={componentProperties} />
          </GoATab>

          {/* Since there are 0 examples, no "Examples" tab is included */}

          <GoATab heading="Design">
            <GoACallout heading="Using Grid in design" type="important" size="medium" maxWidth="540px">
              The grid component is accomplished in design by using{" "}
              <a href="https://www.figma.com/best-practices/everything-you-need-to-know-about-layout-grids/" target="_blank" rel="noreferrer">
                grids and guides in Figma
              </a>{" "}
              our design tool.
            </GoACallout>
          </GoATab>

        </GoATabs>
      </ComponentContent>
    </>
  );
}