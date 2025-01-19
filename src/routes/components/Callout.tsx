import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoABadge,
  GoATab,
  GoATabs,
  GoACallout,
  GoACalloutProps,
  GoACalloutType,
} from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import { ComponentProperties, ComponentProperty } from "@components/component-properties/ComponentProperties.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";

const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=434-14122";
const componentName = "Callout";
const description = "Communicate important information through a strong visual emphasis.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/notification-banner", name: "Notification banner" },
];
type ComponentPropsType = GoACalloutProps;
type CastingType = {
  type: GoACalloutType;
  [key: string]: unknown;
};

export default function CalloutPage() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    type: "information",
  });

  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: ["success", "important", "information", "emergency", "event"],
      value: "information",
    },
    {
      label: "Heading",
      type: "string",
      name: "heading",
      value: "",
    },
    {
      label: "Size",
      type: "list",
      name: "size",
      options: ["", "medium", "large"],
      value: "",
    },
    {
      label: "Max Width",
      type: "string",
      name: "maxWidth",
      requirement: "optional",
      value: "",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: ["success", "important", "information", "emergency", "event"],
      description: "Define the context and colour of the callout",
      required: true,
    },
    {
      name: "heading",
      type: "string",
      description: "Callout heading text",
    },
    {
      name: "size",
      type: ["medium", "large"],
      defaultValue: "large",
      description:
        "The medium callout has reduced padding and type size to adjust for a compact area and smaller viewport width when a smaller size is required.",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the callout.",
      lang: "react",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Sets the maximum width of the callout.",
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
    {
      name: "arialive",
      lang: "angular",
      type: ["off", "polite", "assertive"],
      description: "Indicates how assistive technology should handle updates to the live region.",
      defaultValue: "off",
    },
    {
      name: "ariaLive",
      lang: "react",
      type: ["off", "polite", "assertive"],
      description: "Indicates how assistive technology should handle updates to the live region.",
      defaultValue: "off",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as CastingType);
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
            <h2 id="component" style={{ display: "none" }}>Playground</h2>
            <Sandbox properties={componentBindings} onChange={onSandboxChange}>
              <GoACallout {...componentProps}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </GoACallout>
            </Sandbox>
            <ComponentProperties properties={componentProperties} />
          </GoATab>
          <GoATab heading={<>Examples<GoABadge type="information" content="0" /></>}>
            <GoACallout heading="We are currently working on design examples for this component" type="important" size="medium" maxWidth="540px">
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