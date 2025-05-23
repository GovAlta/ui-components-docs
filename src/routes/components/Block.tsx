import { useEffect, useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoabBlock, GoabContainer, GoabTab, GoabTabs, GoabText } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function BlockPage() {
  const [blockProps, setBlockProps] = useState({});
  const [blockBindings, setBlockBindings] = useState<ComponentBinding[]>([
    {
      label: "Gap",
      type: "list",
      name: "gap",
      options: ["", "none", "3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
      value: "",
      defaultValue: "m",
    },
    {
      label: "Direction",
      type: "list",
      name: "direction",
      options: ["", "row", "column"],
      value: "",
      defaultValue: "row",
    },
    {
      label: "Alignment",
      type: "list",
      name: "alignment",
      options: ["", "center", "start", "end", "normal"],
      value: "",
      defaultValue: "start",
    },
  ]);
  const [sandboxFullWidth, setSandboxFullWidth] = useState<boolean>(false);
  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "gap",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Spacing between items",
      defaultValue: "m",
    },
    {
      name: "direction",
      type: "row | column",
      description: "Stacking direction of child components",
      defaultValue: "row",
    },
    {
      name: "alignment",
      type: "center | start | end | normal",
      description: "Primary axis alignment",
      defaultValue: "normal",
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
      description: "Spacing between items",
      defaultValue: "m",
    },
    {
      name: "direction",
      type: "GoabBlockDirection (row | column)",
      description: "Stacking direction of child components",
      defaultValue: "row",
    },
    {
      name: "alignment",
      type: "GoabBlockAlignment (center | start | end | normal) is",
      description: "Primary axis alignment",
      defaultValue: "normal",
    },
    {
      name: "mt,mr,mb,ml",
      type: "Spacing (none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl)",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];


  useEffect(() => {
    const direction = blockBindings.find(binding => binding.name === "direction");
    setSandboxFullWidth(direction?.value === "column");
  }, [blockBindings]);

  function onSandboxChange(blockBindings: ComponentBinding[], props: Record<string, unknown>) {
    setBlockBindings(blockBindings);
    setBlockProps(props);
  }

  return (
    <>
      <ComponentHeader
        name="Block"
        category={Category.UTILITIES}
        description="Used when grouping components into a block with consistent space between."
        relatedComponents={[
          { link: "/components/divider", name: "Divider" },
          { link: "/components/grid", name: "Grid" },
          { link: "/examples/layout", name: "Layout" },
          { link: "/components/spacer", name: "Spacer" },
        ]}
        githubLink="Block"
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>Playground</h2>
            <Sandbox properties={blockBindings} onChange={onSandboxChange} fullWidth={sandboxFullWidth}>
              <GoabBlock {...blockProps}>
                <div
                  style={{
                    padding: "1rem",
                    backgroundColor: "rgba(0, 150, 255, 0.2)",
                    whiteSpace: "nowrap",
                    width: "5rem",
                  }}
                >
                  Item 1
                </div>
                <div
                  style={{
                    padding: "1rem",
                    backgroundColor: "rgba(0, 150, 255, 0.2)",
                    whiteSpace: "nowrap",
                    width: "5rem",
                  }}
                >
                  <div>Item 2</div>
                  <div>Item 2</div>
                </div>
                <div
                  style={{
                    padding: "1rem",
                    backgroundColor: "rgba(0, 150, 255, 0.2)",
                    whiteSpace: "nowrap",
                    width: "5rem",
                  }}
                >
                  Item 3
                </div>
              </GoabBlock>
            </Sandbox>
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />
          </GoabTab>

          <GoabTab heading="Design">
            <GoabContainer type="non-interactive" accent="filled" padding="relaxed" width="content">
              <GoabText size="body-m" mt="none" mb="none">
                To use Block in design, use Figma's built-in{" "}
                <a href="https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties"
                   target="_blank" rel="noreferrer">
                  auto layout
                </a>.{" "} This will group multiple things with consistent spacing between them, similar to the Block
                component in code.
              </GoabText>
            </GoabContainer>
          </GoabTab>

        </GoabTabs>
      </ComponentContent>
    </>
  );
}
