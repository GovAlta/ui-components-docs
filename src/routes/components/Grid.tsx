import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import { GoabContainer, GoabGrid, GoabTab, GoabTabs, GoabText } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";

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
  const oldComponentProperties: ComponentProperty[] = [
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
  const componentProperties: ComponentProperty[] = [
    {
      name: "gap",
      type: "Spacing (none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl)",
      description: "Gap between child items",
      defaultValue: "m",
    },
    {
      name: "minChildWidth",
      type: "string",
      description: "Minimum width of the child elements",
      required: true,
    },
    {
      name: "testId",
      type: "string",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "Spacing (none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl)",
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
        name="Grid"
        category={Category.UTILITIES}
        description="Arrange a number of components into a responsive grid pattern."
        relatedComponents={[
          { link: "/components/block", name: "Block" },
          { link: "/components/divider", name: "Divider" },
          { link: "/examples/layout", name: "Layout" },
          { link: "/components/spacer", name: "Spacer" },
        ]}
        githubLink="Grid"
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            {/*Grid sandbox*/}
            <Sandbox properties={gridBindings} onChange={onSandboxChange} fullWidth>
              <GoabGrid {...gridProps}>
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
              </GoabGrid>
            </Sandbox>
            {/*Grid component properties*/}
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />
          </GoabTab>

          <GoabTab heading="Design">
            <GoabContainer type="non-interactive" accent="filled" padding="relaxed" width="content">
              <GoabText size="body-m" mt="none" mb="none">
                To use grid in design, set Figma's built-in{" "}
                <a href="https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties"
                   target="_blank" rel="noreferrer">
                  auto layout
                </a>{" "}
                to <i>wrap</i>. This will create a responsive grid pattern that can respond to different screen
                sizes, similar to the Grid component in code.
              </GoabText>
            </GoabContainer>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
