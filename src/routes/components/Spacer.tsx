import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoABlock, GoASpacer, GoATab, GoATabs, GoACallout, } from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { CSSProperties, useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";

// == Page props ==
const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=27301-303446";
const componentName = "Spacer";
const category = Category.UTILITIES;
const description = "Negative area between the components and the interface.";
const relatedComponents = [
  { link: "/components/block", name: "Block" },
  { link: "/components/divider", name: "Divider" },
  { link: "/components/grid", name: "Grid" },
  { link: "/patterns", name: "Layout" },
];

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
            {/* Spacer Sandbox */}
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={hSpacerBindings} onChange={onHSandboxChange}>
              <GoABlock gap="none">
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

            <Sandbox properties={vSpacerBindings} onChange={onVSandboxChange}>
              <GoABlock direction="column" gap="none">
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

            {/* Spacer Properties */}
            <ComponentProperties properties={componentProperties} />
          </GoATab>

          {/* Since there are 0 examples, the "Examples" tab is omitted */}

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