import { useEffect, useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoABlock,
  GoATab,
  GoATabs,
  GoACallout,
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";


const componentName = "Block";

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
  const componentProperties: ComponentProperty[] = [
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
        name={componentName}
        category={Category.UTILITIES}
        description="Used when grouping components into a block with consistent space between."
        relatedComponents={[
          { link: "/components/divider", name: "Divider" },
          { link: "/components/Grid", name: "Grid" },
          { link: "/patterns", name: "Layout" },
          { link: "/component/spacer", name: "Spacer" },
        ]}
        githubLink={componentName}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoATabs>
          <GoATab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>Playground</h2>
            <Sandbox properties={blockBindings} onChange={onSandboxChange} fullWidth={sandboxFullWidth}>
              <GoABlock {...blockProps}>
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
                  }}>
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
              </GoABlock>
            </Sandbox>
            <ComponentProperties properties={componentProperties} />
          </GoATab>

          <GoATab heading="Design">
            <GoACallout heading="Using Block in design" type="important" size="medium" maxWidth="540px">
              The block component is accomplished in design by using{" "}
              <a href="https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties" target="_blank" rel="noreferrer">
                auto layout
              </a>{" "}
              in Figma, our design tool.
            </GoACallout>
          </GoATab>

        </GoATabs>
      </ComponentContent>
    </>
  );
}