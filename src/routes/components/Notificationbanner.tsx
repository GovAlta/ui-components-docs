import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoABadge,
  GoANotification,
  GoATab,
  GoATabs,
  NotificationType,
} from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { ExamplesEmpty } from "@components/examples-empty/ExamplesEmpty.tsx";
import { DesignEmpty } from "@components/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/accessibility-empty/AccessibilityEmpty.tsx";

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
            <ExamplesEmpty/>
          </GoATab>

          <GoATab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoATab>

          <GoATab heading="Accessibility">
            <AccessibilityEmpty figmaLink={FIGMA_LINK} />
          </GoATab>

        </GoATabs>
      </ComponentContent>
    </>
  );
}