import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoABadge, GoATab, GoATabs, GoABadgeType, GoABadgeProps, GoACallout } from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";

// == Page props ==
const componentName = "Badge";
const description =
  "Small labels which hold small amounts of information, system feedback, or states.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/chip", name: "Chip" },
  { link: "/components/Icons", name: "Icons" },
  { link: "/components/Table", name: "Table" }
];
const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=458-16984";


type ComponentPropsType = GoABadgeProps;
type CastingType = {
  // add any required props here
  type: GoABadgeType;
  content: string;
  [key: string]: unknown;
};

export default function BadgePage() {
  const [badgeProps, setBadgeProps] = useState<ComponentPropsType>({
    type: "information",
    content: "Information",
  });

  const [badgeBindings, setBadgeBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: ["success", "important", "information", "emergency", "dark", "midtone", "light"],
      value: "information",
    },
    {
      label: "Icon",
      type: "boolean",
      name: "icon",
      value: false,
    },
    {
      label: "Content",
      type: "string",
      name: "content",
      value: "Information",
    },
    {
      label: "AriaLabel",
      type: "string",
      name: "ariaLabel",
      value: "",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "success | important | information | emergency | dark | midtone | light",
      description: "Define the context and colour of the badge",
      required: true,
    },
    {
      name: "icon",
      type: "boolean",
      description: "Includes an icon in the badge.",
      defaultValue: "false",
    },
    {
      name: "content",
      type: "string",
      description: "Text label of the badge.",
    },
    {
      name: "ariaLabel",
      type: "string",
      description: "Accessible label.",
      lang: "react",
    },
    {
      name: "arialabel",
      type: "string",
      description: "Accessible label.",
      lang: "angular",
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
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  function onSandboxChange(badgeBindings: ComponentBinding[], props: Record<string, unknown>) {
    setBadgeBindings(badgeBindings);
    setBadgeProps(props as CastingType);
  }

  return (
    <>
      <ComponentHeader name={componentName}
                       category={category}
                       description={description}
                       relatedComponents={relatedComponents}
                       githubLink={componentName}
                       figmaLink={FIGMA_LINK}
      />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoATabs>
          <GoATab heading="Code playground">
            <h2 id="component" style={{display: "none"}}>Playground</h2>
            <Sandbox properties={badgeBindings} onChange={onSandboxChange}>
              <GoABadge {...badgeProps} />
            </Sandbox>
            <ComponentProperties properties={componentProperties} />
          </GoATab>

          <GoATab
            heading={
              <>
                Examples
                <GoABadge type="information" content="0" />
              </>
            }
          >
            <GoACallout heading="We are currently collecting design examples for this component" type="important" size="medium" maxWidth="540px">
              {" "}
              <a href="https://design.alberta.ca/get-started/support#:~:text=Raise%20an%20issue-,Talk%20to%20us,-Slack" target="_blank" rel="noreferrer">
                Talk to the design system team
              </a>{" "}
              to contribute examples from your service.
            </GoACallout>
          </GoATab>

          <GoATab heading="Design">
            <GoACallout heading="Design documentation in Figma" type="important" size="medium" maxWidth="540px">
              Detailed design documentation for this component can be found on the associated{" "}
              <a href={FIGMA_LINK} target="_blank" rel="noreferrer">
                component page
              </a>{" "}
              in the Component library in Figma.
            </GoACallout>
          </GoATab>
          <GoATab heading="Accessibility">
            <GoACallout heading="Accessibility documentation in Figma" type="important" size="medium" maxWidth="550px">
              Detailed accessibility documentation for this component can be found on the associated{" "}
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
