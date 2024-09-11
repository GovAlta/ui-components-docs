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
import { useVersion } from "@contexts/VersionContext.tsx";

// == Page props ==
const componentName = "Accordion";
const description = "Let users show and hide sections of related content on a page.";
const category = Category.CONTENT_AND_LAYOUT;
const relatedComponents = [
  { link: "/components/details", name: "Details" },
  { link: "/components/tabs", name: "Tabs" },
];

type ComponentPropsType = GoabAccordionProps;
type CastingType = {
  heading: string;
  headingSize: GoabAccordionHeadingSize;
  children: React.ReactNode;
  [key: string]: unknown;
};

export default function AccordionPage() {
  const version = useVersion();
  const [accordionProps, setAccordionProps] = useState<ComponentPropsType>({
    heading: "Heading",
    headingSize: "medium",
    children: <></>,
  });

  const [accordionBindings, setAccordionBindings] = useState<ComponentBinding[]>([
    {
      label: "Heading",
      type: "string",
      name: "heading",
      value: "Accordion heading",
    },
    {
      label: "Heading Size",
      type: "radio",
      name: "headingSize",
      options: ["small", "medium"],
      value: "medium",
    },
    {
      label: "Secondary Text",
      type: "string",
      name: "secondaryText",
      requirement: "optional",
      value: "",
    },
    {
      label: "Open",
      type: "boolean",
      name: "open",
      value: false,
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
    }
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
      name: "testId",
      type: "string",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setAccordionBindings(bindings);
    setAccordionProps(props as CastingType);
  }

  return (
    <div className="accordion-page">
      <ComponentHeader
        name={`${componentName} - ${version}`}
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
            <Sandbox properties={accordionBindings} onChange={onSandboxChange} fullWidth>
              <GoabAccordion {...accordionProps}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi
              </GoabAccordion>
            </Sandbox>
            <ComponentProperties properties={version?.length ? oldComponentProperties : componentProperties} />
            <AccordionExamples />
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
    </div>
  );
}
