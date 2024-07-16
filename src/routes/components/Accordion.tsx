import {
  GoAAccordion,
  GoAAccordionProps,
  GoABadge,
  GoATab,
  GoATabs
} from "@abgov/react-components";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { useState } from "react";
import AccordionExamples from "@examples/accordion/AccordionExamples.tsx";
import { GoAHeadingSize } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";

// == Page props ==
const componentName = "Accordion";
const description = "Let users show and hide sections of related content on a page.";
const category = Category.CONTENT_AND_LAYOUT;
const relatedComponents = [
  { link: "/components/details", name: "Details" },
  { link: "/components/tabs", name: "Tabs" },
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
    heading: "Heading",
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

    { label: "Open", type: "boolean", name: "open", value: false },
  ]);

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
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setAccordionBindings(bindings);
    setAccordionProps(props as CastingType);
  }

  return (
    <div className="accordion-page">
      <ComponentHeader name={componentName} category={category} description={description} relatedComponents={relatedComponents} />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={accordionBindings} onChange={onSandboxChange} fullWidth>
              <GoAAccordion {...accordionProps}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi
              </GoAAccordion>
            </Sandbox>
            <ComponentProperties properties={componentProperties} />
            <AccordionExamples />
          </GoATab>

          <GoATab
            heading={<>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>}
          >
            </GoATab>
        </GoATabs>
      </ComponentContent>
    </div>
  );
}
