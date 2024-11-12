import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoabBadge,
  GoabTab,
  GoabTabs,
  GoabCallout,
  GoabCalloutProps
} from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";

import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabCalloutType } from "@abgov/ui-components-common";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

// == Page props ==

const componentName = "Callout";
const description = "Communicate important information through a strong visual emphasis.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/Notification-banner", name: "Notification banner" },
];
type ComponentPropsType = GoabCalloutProps;
type CastingType = {
  type: GoabCalloutType;
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

  const oldComponentProperties: ComponentProperty[] = [
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

  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "GoabCalloutType (success | important | information | emergency | event)",
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
      type: "GoabCalloutSize (medium | large)",
      defaultValue: "large",
      description:
        "The medium callout has reduced padding and type size to adjust for a compact area and smaller viewport width when a smaller size is required.",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the callout.",
    },
    {
      name: "ariaLive",
      type: "GoabCalloutAriaLive (off | polite | assertive)",
      description: "Indicates how assistive technology should handle updates to the live region.",
      defaultValue: "off",
    },
    {
      name: "iconTheme",
      type: "GoabCalloutIconTheme (outline | filled)",
      description: "Indicates how assistive technology should handle updates to the live region.",
      defaultValue: "off",
    },
    {
      name: "testId",
      type: "string",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "Spacing (none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl)",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
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
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>
            <Sandbox properties={componentBindings} onChange={onSandboxChange}>
              <GoabCallout {...componentProps}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </GoabCallout>
            </Sandbox>
            <ComponentProperties properties={componentProperties} />

            <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>

            <h3 id="component-example-confirm-application-submitted">Confirm that an application was submitted</h3>
            <Sandbox fullWidth allow={['h2', 'h3', 'p']} skipRender>

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                      <h2>You have completed the application</h2>

                      <goa-callout type="success">
                        <span slot="heading">Your application was successful</span>
                        <p>You will receive a copy of the confirmation to the email person&#64;email.com</p>
                        <p>Confirmation number: <strong>1234ABC</strong></p>
                      </goa-callout>

                      <h3>Go back to the dashboard, or direct your user somewhere else useful.</h3>
                      <p>
                        Other information about what was just completed, other tertiary information, and/or contact information.
                        Phone: <a href="tel:7801234567">780 123 4567</a>
                        Email: <a href="mailto:information&#64;gov.ab.ca">information&#64;gov.ab.ca</a>
                      </p>

                      <goa-button-group alignment="start">
                        <goa-button type="primary">Go to application</goa-button>
                        <goa-button type="secondary">Back to dashboard</goa-button>
                      </goa-button-group>
                    `}
              />
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                    <h2>You have completed the application</h2>

                    <GoACallout type="success" heading="Your application was successful">
                      <p>You will receive a copy of the confirmation to the email person@email.com</p>
                      <p>Confirmation number: <strong>1234ABC</strong></p>
                    </GoACallout>

                    <h3>Go back to the dashboard, or direct your user somewhere else useful.</h3>
                    <p>
                      Other information about what was just completed, other tertiary information, and/or contact information.
                      Phone: <a href="tel:7801234567">780 123 4567</a>
                      Email: <a href="mailto:information@gov.ab.ca">information@gov.ab.ca</a>
                    </p>

                    <GoAButtonGroup alignment="start">
                      <GoAButton type="primary">Go to application</GoAButton>
                      <GoAButton type="secondary">Back to dashboard</GoAButton>
                    </GoAButtonGroup>
                  `}
              />
              <h2 style={{ marginTop: 0 }}>You have completed the application</h2>
              <GoACallout type="success" heading="Your application was successful">
                <p>You will receive a copy of the confirmation to the email person@email.com</p>
                <p style={{ marginBottom: 0 }}>Confirmation number: <strong>1234ABC</strong></p>
              </GoACallout>
              <h3>Go back to the dashboard, or direct your user somewhere else useful.</h3>
              <p>
                Other information about what was just completed, other tertiary information, and/or contact information.<br/>
                Phone: <a href="#">780 123 4567</a><br/>
                Email: <a href="#">information@gov.ab.ca</a>
              </p>
              <GoASpacer vSpacing="l"></GoASpacer>
              <GoAButtonGroup alignment="start">
                <GoAButton type="primary">Go to application</GoAButton>
                <GoAButton type="secondary">Back to dashboard</GoAButton>
              </GoAButtonGroup>
            </Sandbox>
          </GoATab>
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }></GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
