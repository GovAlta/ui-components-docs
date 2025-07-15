import {
  GoabAccordion,
  GoabAccordionProps,
  GoabBadge,
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { useState } from "react";
import AccordionExamples from "@examples/accordion/AccordionExamples.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabAccordionHeadingSize } from "@abgov/ui-components-common";
import {
  LegacyMarginProperty,
  LegacyTestIdProperties,
  MarginProperty,
  TestIdProperty,
} from "@components/component-properties/common-properties.ts";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

// == Page props ==
const componentName = "Accordion";
const description = "Let users show and hide sections of related content on a page.";
const category = Category.CONTENT_AND_LAYOUT;
const relatedComponents = [
  { link: "/components/details", name: "Details" },
  { link: "/components/tabs", name: "Tabs" },
];
const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=15931-553576";

type ComponentPropsType = GoabAccordionProps;
type CastingType = {
  heading: string;
  headingSize: GoabAccordionHeadingSize;
  children: React.ReactNode;
  [key: string]: unknown;
};

export default function AccordionPage() {
  const [accordionProps, setAccordionProps] = useState<ComponentPropsType>({
    heading: "Accordion",
    headingSize: "medium",
    children: <></>,
  });

  const [accordionBindings, setAccordionBindings] = useState<ComponentBinding[]>([
    {
      label: "Heading Size",
      type: "radio",
      name: "headingSize",
      options: ["small", "medium"],
      value: "medium",
    },
    {
      label: "Heading",
      type: "string",
      name: "heading",
      value: "Accordion heading",
    },
    {
      label: "Secondary Text",
      type: "string",
      name: "secondaryText",
      requirement: "optional",
      value: "",
    },
    {
      label: "Max Width",
      type: "string",
      name: "maxWidth",
      requirement: "optional",
      value: "",
    },
    {
      label: "Open",
      type: "boolean",
      name: "open",
      value: false,
    },
  ]);

  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "string",
      required: true,
      description: "Sets the heading text.",
    },
    {
      name: "secondaryText",
      type: "string",
      lang: "react",
      description: "Sets secondary text.",
    },
    {
      name: "secondarytext",
      type: "string",
      lang: "angular",
      description: "Sets secondary text.",
    },
    {
      name: "open",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the state of the accordion container open or closed.",
    },
    {
      name: "headingSize",
      type: "small | medium",
      defaultValue: "small",
      lang: "react",
      description: "Sets the heading size of the accordion container heading.",
    },
    {
      name: "headingsize",
      type: "small | medium",
      defaultValue: "small",
      lang: "angular",
      description: "Sets the heading size of the accordion container heading.",
    },
    {
      name: "headingContent",
      type: "ReactNode",
      lang: "react",
      description: "Add components to the accordion container heading such as badges.",
    },
    {
      name: "headingcontent",
      type: "slot",
      lang: "angular",
      description: "Add components to the accordion container heading such as badges.",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the accordion.",
      lang: "react",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Sets the maximum width of the accordion.",
      lang: "angular",
    },
    {
      name: "_change",
      lang: "angular",
      type: "CustomEvent",
      description: "Callback function when accordion heading is clicked.",
    },
    {
      name: "onChange",
      lang: "react",
      type: "(open: boolean) => void",
      description: "Callback function when accordion heading is clicked.",
    },
    ...LegacyTestIdProperties,
    LegacyMarginProperty,
  ];

  const componentProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "string",
      required: true,
      description: "Sets the heading text.",
    },
    {
      name: "secondaryText",
      type: "string",
      description: "Sets secondary text.",
    },
    {
      name: "open",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the state of the accordion container open or closed.",
    },
    {
      name: "headingSize",
      type: "GoabAccordionHeadingSize (small | medium)",
      defaultValue: "small",
      description: "Sets the heading size of the accordion container heading.",
    },
    {
      name: "headingContent",
      type: "ReactNode",
      lang: "react",
      description: "Add components to the accordion container heading such as badges.",
    },
    {
      name: "headingContent",
      type: "TemplateRef<any>",
      lang: "angular",
      description: "Add components to the accordion container heading such as badges.",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the accordion.",
    },
    {
      name: "onChange",
      type: "(open: boolean) => void",
      description: "Callback function when accordion heading is clicked.",
    },
    TestIdProperty,
    MarginProperty,
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setAccordionBindings(bindings);
    setAccordionProps(props as CastingType);
  }

  return (
    <div className="accordion-page">
      <ComponentHeader
        name={`${componentName}`}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        githubLink="Accordion"
        figmaLink={FIGMA_LINK}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={accordionBindings} onChange={onSandboxChange} fullWidth>
              <GoabAccordion {...accordionProps}>
                This is the content in an accordion item. This content can be anything that you want
                including rich text, components, and more.
              </GoabAccordion>
            </Sandbox>
            <ComponentProperties
              properties={componentProperties}
              oldProperties={oldComponentProperties}
            />
          </GoabTab>
          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="2" />
              </>
            }
          >
            <AccordionExamples />
          </GoabTab>
          <GoabTab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>
          <GoabTab heading="Accessibility">
            <AccessibilityEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </div>
  );
}
