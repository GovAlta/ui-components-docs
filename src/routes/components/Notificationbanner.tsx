import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoabBadge,
  GoabNotification,
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabNotificationType } from "@abgov/ui-components-common";

// == Page props ==

const componentName = "Notification Banner";
const description = "Display important page level information or notifications.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/callout", name: "Callout" },
];
type ComponentPropsType = {
  type: GoabNotificationType;
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

  const oldComponentProperties: ComponentProperty[] = [
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
  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "GoabNotificationType(success | important | information | emergency)",
      description: "Define the context and colour of the badge",
      defaultValue: "information"
    },
    {
      name: "maxContentWidth",
      type: "string",
      description: "Maximum width of the content area",
    },
    {
      name: "ariaLive",
      type: "GoabAriaLiveType (polite | assertive | off)",
      description: "Indicates how assistive technology should handle updates to the live region",
      defaultValue: "polite",
    },
    {
      name: "onDismiss",
      type: "() => void",
      description: "Dispatched when notification banner is closed.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as ComponentPropsType);
  }

  return (
    <>
      <ComponentHeader name={componentName} category={category} description={description} relatedComponents={relatedComponents} />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={componentBindings} onChange={onSandboxChange} fullWidth={true}>
              <GoabNotification {...componentProps}>Notification banner message</GoabNotification>
            </Sandbox>
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties}/>
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }
          ></GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
