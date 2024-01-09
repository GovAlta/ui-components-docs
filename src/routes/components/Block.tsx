import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoABadge, GoABlock, GoATab, GoATabs } from "@abgov/react-components";

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
      options: ["", "center", "start", "end"],
      value: "",
      defaultValue: "start",
    },
  ]);
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
      type: "center | start | end",
      description: "Primary axis alignment",
      defaultValue: "start",
    },
  ];

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
        { link: "/components/Grid", name: "Grid" },
        { link: "/patterns", name: "Layout" },
        { link: "/component/spacer", name: "Spacer" },
      ]}
      />

      <GoATabs>
        <GoATab heading="Code examples">
          {/*Block sandbox*/}
          <Sandbox properties={blockBindings} onChange={onSandboxChange} fullWidth>
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
          {/*Block table properties*/}
          <ComponentProperties properties={componentProperties} />
        </GoATab>

        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }
        ></GoATab>
      </GoATabs>
    </>
  );
}
