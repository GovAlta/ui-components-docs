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
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";

// == Page props ==

const componentName = "Notification Banner";
const description = "Display important page level information or notifications.";
const category = Category.FEEDBACK_AND_ALERTS;
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
      <ComponentHeader name={componentName} category={category} description={description} relatedComponents={relatedComponents} />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoATabs>
          <GoATab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={componentBindings} onChange={onSandboxChange} fullWidth={true}>
              <GoANotification {...componentProps}>Notification banner message</GoANotification>
            </Sandbox>
            <ComponentProperties properties={componentProperties} />
            
            <h2 id="component-examples" className="hidden" aria-hidden="true">
              Examples
            </h2>
            <h3 id="component-example-1">Show X per page</h3>

            <Sandbox fullWidth skipRender>
              
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoANotification type="important">
                    Our system will be under maintenance from Thursday, September 15, 2022 at 10 pm to Friday, September 16, 2022 at 10 am. If you have questions or concerns, contact us at <a href="mailto:cidos-support@gov.ab.ca">cidos-support@gov.ab.ca</a>.
                  </GoANotification>
                `}
              />
              
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-notification type="important">
                    Our system will be under maintenance from Thursday, September 15, 2022 at 10 pm to Friday, September 16, 2022 at 10 am. If you have questions or concerns, contact us at <a href="mailto:cidos-support&#64;gov.ab.ca">cidos-support&#64;gov.ab.ca</a>.
                  </goa-notification>
                `}
              />
              <GoANotification type="important">
                Our system will be under maintenance from Thursday, September 15, 2022 at 10 pm to Friday, September 16, 2022 at 10 am. If you have questions or concerns, contact us at <a href="mailto:cidos-support@gov.ab.ca">cidos-support@gov.ab.ca</a>.
              </GoANotification>
            </Sandbox>
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
      </ComponentContent>
    </>
  );
}
