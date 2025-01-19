import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoABadge,
  GoANotification,
  GoATab,
  GoATabs,
  NotificationType,
  GoACallout,
} from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";

// == Page props ==
const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=622-12949";
const componentName = "Notification banner";
const category = Category.FEEDBACK_AND_ALERTS;
const description = "Display important page level information or notifications.";
const relatedComponents = [
  { link: "/components/callout", name: "Callout" },
];

type ComponentPropsType = {
  type: NotificationType;
  content?: string;
  [key: string]: unknown;
};

export default function NotificationBannerPage() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    type: "information",
  });

  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "radio",
      name: "type",
      options: ["information", "important", "emergency", "event"],
      value: "information",
    },
    {
      label: "Aria live",
      type: "radio",
      name: "ariaLive",
      options: ["polite", "assertive", "off"],
      value: "",
    },
    {
      label: "Max content width",
      type: "string",
      name: "maxContentWidth",
      value: "",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "success | important | information | emergency",
      description: "Define the context and colour of the badge",
    },
    {
      name: "maxcontentwidth",
      type: "string",
      lang: "angular",
      description: "Maximum width of the content area",
    },
    {
      name: "maxContentWidth",
      type: "string",
      lang: "react",
      description: "Maximum width of the content area",
    },
    {
      name: "arialive",
      type: "string",
      description: "Indicates how assistive technology should handle updates to the live region",
      lang: "angular",
      defaultValue: "polite",
    },
    {
      name: "ariaLive",
      type: "string",
      description: "Indicates how assistive technology should handle updates to the live region",
      lang: "react",
      defaultValue: "polite",
    },
    {
      name: "_dismiss",
      type: "CustomEvent",
      description: "Dispatched when notification banner is closed.",
      lang: "angular",
    },
    {
      name: "onDismiss",
      type: "() => void",
      description: "Dispatched when notification banner is closed.",
      lang: "react",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as ComponentPropsType);
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
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={componentBindings} onChange={onSandboxChange} fullWidth>
              <GoANotification {...componentProps}>Notification banner message</GoANotification>
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

          <GoATab heading="Accessibility">

          <GoACallout
              heading="Accessibility documentation in Figma"
              type="important"
              size="medium"
              maxWidth="550px"
            >
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