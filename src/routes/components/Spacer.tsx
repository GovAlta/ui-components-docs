import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoABlock, GoASpacer, GoATab, GoATabs } from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

export default function SpacerPage() {
  const [spacerProps, setSpacerProps] = useState({});
  const [spacerBindings, setSpacerBindings] = useState<ComponentBinding[]>([
    {
      label: "Horizontal Spacing",
      type: "list",
      name: "hSpacing",
      options: ["", "fill", "none", "3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
      defaultValue: "none",
      value: "",
    },
    {
      label: "Vertical Spacing",
      type: "list",
      name: "vSpacing",
      options: ["", "none", "3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
      defaultValue: "none",
      value: "",
    },
  ]);
  const componentProperties: ComponentProperty[] = [
    {
      name: "hSpacing",
      type: "fill | none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Horizontal spacing",
      lang: "react",
      defaultValue: "none",
    },
    {
      name: "hspacing",
      type: "fill | none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Horizontal spacing",
      lang: "angular",
      defaultValue: "none",
    },
    {
      name: "vspacing",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Vertical spacing",
      lang: "angular",
      defaultValue: "none",
    },
    {
      name: "vSpacing",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Vertical spacing",
      lang: "react",
      defaultValue: "none",
    },
  ];

  function onSandboxChange(spacerBindings: ComponentBinding[], props: Record<string, unknown>) {
    setSpacerBindings(spacerBindings);
    setSpacerProps(props);
  }

  return (
    <>
      <ComponentHeader
        name="Spacer"
        category={Category.UTILITIES}
        description="Navigate area between the components and the interface."
      />

      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox properties={spacerBindings} onChange={onSandboxChange} fullWidth>
            <GoABlock>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "rgba(0, 150, 255, 0.2)",
                  whiteSpace: "nowrap",
                }}
              >
                Item 1
              </div>
              <GoASpacer {...spacerProps} />
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "rgba(0, 150, 255, 0.2)",
                  whiteSpace: "nowrap",
                }}
              >
                Item 1
              </div>
              <GoASpacer {...spacerProps} />
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "rgba(0, 150, 255, 0.2)",
                  whiteSpace: "nowrap",
                }}
              >
                Item 1
              </div>
            </GoABlock>
          </Sandbox>

          {/*Spacer table properties*/}
          <ComponentProperties properties={componentProperties} />
        </GoATab>
      </GoATabs>
    </>
  );
}
