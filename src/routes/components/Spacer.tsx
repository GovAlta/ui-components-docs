import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoabBlock, GoabSpacer, GoabTab, GoabTabs } from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { CSSProperties, useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";

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
        description="Negative area between the components and the interface."
        relatedComponents={[
          { link: "/components/block", name: "Block" },
          { link: "/components/divider", name: "Divider" },
          { link: "/components/grid", name: "Grid" },
          { link: "/patterns", name: "Layout" },
        ]}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={hSpacerBindings} onChange={onHSandboxChange}>
              <GoabBlock gap="none">
                <div style={styles}>
                  Item 1
                </div>
                <GoabSpacer {...hSpacerProps} />
                <div style={styles}>
                  Item 1
                </div>
                <GoabSpacer {...hSpacerProps} />
                <div style={styles}>
                  Item 1
                </div>
              </GoabBlock>
            </Sandbox>

            <Sandbox properties={vSpacerBindings} onChange={onVSandboxChange}>
              <GoabBlock direction="column" gap="none">
                <div style={styles}>
                  Item 1
                </div>
                <GoabSpacer {...vSpacerProps} />
                <div style={styles}>
                  Item 1
                </div>
                <GoabSpacer {...vSpacerProps} />
                <div style={styles}>
                  Item 1
                </div>
              </GoabBlock>
            </Sandbox>

            <ComponentProperties properties={componentProperties} />
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
