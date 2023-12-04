import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoABlock, GoASpacer, GoATab, GoATabs } from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { CSSProperties, useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

export default function SpacerPage() {
  const [hSpacerProps, setHSpacerProps] = useState({});
  const [hSpacerBindings, setHSpacerBindings] = useState<ComponentBinding[]>([
    {
      label: "Horizontal Spacing",
      type: "list",
      name: "hSpacing",
      options: ["", "fill", "none", "3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
      defaultValue: "none",
      value: "",
    },
  ]);

  const [vSpacerProps, setVSpacerProps] = useState({});
  const [vSpacerBindings, setVSpacerBindings] = useState<ComponentBinding[]>([
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

  function onHSandboxChange(spacerBindings: ComponentBinding[], props: Record<string, unknown>) {
    setHSpacerBindings(spacerBindings);
    setHSpacerProps(props);
  }

  function onVSandboxChange(spacerBindings: ComponentBinding[], props: Record<string, unknown>) {
    setVSpacerBindings(spacerBindings);
    setVSpacerProps(props);
  }

  const styles: CSSProperties = {
    padding: "1rem",
    backgroundColor: "rgba(0, 150, 255, 0.2)",
    whiteSpace: "nowrap",
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
          <Sandbox properties={hSpacerBindings} onChange={onHSandboxChange} fullWidth allow={["h4"]}>
            <GoABlock>
              <div style={styles}>
                Item 1
              </div>
              <GoASpacer {...hSpacerProps} />
              <div style={styles}>
                Item 1
              </div>
              <GoASpacer {...hSpacerProps} />
              <div style={styles}>
                Item 1
              </div>
            </GoABlock>
          </Sandbox>

          <Sandbox properties={vSpacerBindings} onChange={onVSandboxChange} fullWidth allow={["h4"]}>
            <GoABlock direction="column">
              <div style={styles}>
                Item 1
              </div>
              <GoASpacer {...vSpacerProps} />
              <div style={styles}>
                Item 1
              </div>
              <GoASpacer {...vSpacerProps} />
              <div style={styles}>
                Item 1
              </div>
            </GoABlock>
          </Sandbox>

          <ComponentProperties properties={componentProperties} />
        </GoATab>
      </GoATabs>
    </>
  );
}
