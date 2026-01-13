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
import {
  LegacyMarginProperty,
  LegacyTestIdProperties, MarginProperty,
  TestIdProperty
} from "@components/component-properties/common-properties.ts";
import { CalloutExamples } from "@examples/callout/CalloutExamples.tsx";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

// == Page props ==

const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=434-14122";
const componentName = "Callout";
const description = "Communicate important information through a strong visual emphasis.";
const category = Category.CONTENT_AND_LAYOUT;
const relatedComponents = [
  { link: "/components/notification-banner", name: "Notification banner" },
];
type ComponentPropsType = GoabCalloutProps;

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

  function onSandboxChange(bindings: ComponentBinding[], props: ComponentPropsType) {
    setComponentBindings(bindings);
    setComponentProps(props);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        githubLink="Callout"
        figmaLink={FIGMA_LINK}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox<ComponentPropsType> properties={componentBindings} onChange={onSandboxChange}>
              <GoabCallout {...componentProps}>
                Callout important information for the user.
              </GoabCallout>
            </Sandbox>
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />
          </GoabTab>

          <GoabTab
            heading={<>
              Examples
              <GoabBadge type="information" content="1" />
            </>}
          >
          <CalloutExamples />
          </GoabTab>

          <GoabTab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>

          <GoabTab heading="Accessibility">
            <AccessibilityEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
