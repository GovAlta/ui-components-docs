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
import {
  LegacyMarginProperty,
  LegacyTestIdProperties, MarginProperty,
  TestIdProperty
} from "@components/component-properties/common-properties.ts";
import { CalloutExamples } from "@examples/callout/CalloutExamples.tsx";

// == Page props ==

const componentName = "Callout";
const description = "Communicate important information through a strong visual emphasis.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/notification-banner", name: "Notification banner" },
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
    ...LegacyTestIdProperties,
    LegacyMarginProperty,
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
    TestIdProperty,
    MarginProperty,
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
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />

            <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>
            <CalloutExamples/>

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
