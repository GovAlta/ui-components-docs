import {
  GoAAccordion,
  GoAAccordionProps,
  GoABadge,
  GoATab,
  GoATabs
} from "@abgov/react-components";
import {
  ComponentProperties,
  ComponentProperty
} from "@components/component-properties/ComponentProperties";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { useState } from "react";
import AccordionExamples from "@examples/accordion/AccordionExamples.tsx";
import { GoAHeadingSize } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { DesignEmpty } from "@components/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/accessibility-empty/AccessibilityEmpty.tsx";

const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=15931-553576;";

// == Page props ==
const componentName = "Accordion";
const description = "Let users show and hide sections of related content on a page.";
const category = Category.CONTENT_AND_LAYOUT;
const relatedComponents = [
  { link: "/components/details", name: "Details" },
  { link: "/components/tabs", name: "Tabs" }
];

type ComponentPropsType = GoAAccordionProps;
type CastingType = {
  heading: string;
  headingSize: GoAHeadingSize;
  children: React.ReactNode;
  [key: string]: unknown;
};

export default function AccordionPage() {
  const [accordionProps, setAccordionProps] = useState<ComponentPropsType>({
    heading: "Accordion",
    headingSize: "medium",
    children: <></>
  });

  const [accordionBindings, setAccordionBindings] = useState<ComponentBinding[]>([
    {
      label: "Heading Size",
      type: "radio",
      name: "headingSize",
      options: ["small", "medium"],
      value: "medium"
    },
    {
      label: "Heading",
      type: "string",
      name: "heading",
      value: "Accordion"
    },
    {
      label: "Secondary Text",
      type: "string",
      name: "secondaryText",
      requirement: "optional",
      value: ""
    },
    {
      label: "Max Width",
      type: "string",
      name: "maxWidth",
      requirement: "optional",
      value: ""
    },
    {
      label: "Open",
      type: "boolean",
      name: "open",
      value: false
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "string",
      required: true,
      description: "Sets the heading text."
    },
    {
      name: "secondaryText",
      type: "string",
      lang: "react",
      description: "Sets secondary text."
    },
    {
      name: "secondarytext",
      type: "string",
      lang: "angular",
      description: "Sets secondary text."
    },
    {
      name: "open",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the state of the accordion container open or closed."
    },
    {
      name: "headingSize",
      type: "small | medium",
      defaultValue: "small",
      lang: "react",
      description: "Sets the heading size of the accordion container heading."
    },
    {
      name: "headingsize",
      type: "small | medium",
      defaultValue: "small",
      lang: "angular",
      description: "Sets the heading size of the accordion container heading."
    },
    {
      name: "headingContent",
      type: "ReactNode",
      lang: "react",
      description: "Add components to the accordion container heading such as badges."
    },
    {
      name: "headingcontent",
      type: "slot",
      lang: "angular",
      description: "Add components to the accordion container heading such as badges."
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the accordion.",
      lang: "react"
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Sets the maximum width of the accordion.",
      lang: "angular"
    },
    {
      name: "testId",
      type: "string",
      lang: "react",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests."
    },
    {
      name: "testid",
      type: "string",
      lang: "angular",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests."
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component."
    },
    {
      name: "_change",
      lang: "angular",
      type: "CustomEvent",
      description: "Callback function when accordion heading is clicked."
    },
    {
      name: "onChange",
      lang: "react",
      type: "(open: boolean) => void",
      description: "Callback function when accordion heading is clicked."
    }
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setAccordionBindings(bindings);
    setAccordionProps(props as CastingType);
  }

  return (
    <div className="accordion-page">
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        githubLink="Accordion"
        figmaLink={FIGMA_LINK}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>Playground</h2>
            <Sandbox properties={accordionBindings} onChange={onSandboxChange} fullWidth>
              <GoAAccordion {...accordionProps}>
                This is the content in an accordion item. This content can be anything that you want including rich
                text, components, and more.
              </GoAAccordion>
            </Sandbox>
            <ComponentProperties properties={componentProperties} />

          </GoATab>
          <GoATab
            heading={<>
              Examples
              <GoABadge type="information" content="2" />
            </>}
          >
            <AccordionExamples />
          </GoATab>

          <GoATab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoATab>
          <GoATab heading="Accessibility">
            <AccessibilityEmpty figmaLink={FIGMA_LINK} />
          </GoATab>

        </GoATabs>
      </ComponentContent>
    </div>
  );
}
