import { GoAAccordion, GoABadge, GoAButton, GoATab, GoATabs } from "@abgov/react-components";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { useState } from "react";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export default function AccordionPage() {
  const [accordionProps, setAccordionProps] = useState({ heading: "Heading" }); // Heading is mandatory
  const [accordionBindings, setAccordionBindings] = useState<ComponentBinding[]>([
    {
      label: "Heading",
      type: "string",
      name: "heading",
      value: "Heading",
    },
    {
      label: "Secondary Text",
      type: "string",
      name: "secondaryText",
      value: "",
    },
    {
      label: "Heading Size",
      type: "list",
      name: "headingSize",
      options: ["", "small", "medium"],
      value: "",
    },

    { label: "Open", type: "boolean", name: "open", value: false },
  ]);
  const componentProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "string",
      required: true,
      description: "Sets the heading text",
    },
    {
      name: "secondaryText",
      type: "string",
      lang: "react",
      description: "Sets secondary text",
    },
    {
      name: "secondarytext",
      type: "string",
      lang: "angular",
      description: "Sets secondary text",
    },
    {
      name: "open",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the state of the accordion container open or closed",
    },
    {
      name: "headingSize",
      type: "small | medium",
      defaultValue: "small",
      lang: "react",
      description: "Sets the heading size of the accordion container heading",
    },
    {
      name: "headingsize",
      type: "small | medium",
      defaultValue: "small",
      lang: "angular",
      description: "Sets the heading size of the accordion container heading",
    },
    {
      name: "headingContent",
      type: "ReactNode",
      lang: "react",
      description: "Add components to the accordion container heading such as badges",
    },
    {
      name: "headingcontent",
      type: "slot",
      lang: "angular",
      description: "Add components to the accordion container heading such as badges",
    },
  ];
  const [open, setOpen] = useState<boolean>(false); // for accordion group

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setAccordionBindings(bindings);
    setAccordionProps(props as { heading: string; [key: string]: unknown });
  }

  return (
    <div className="accordion-page">
      <ComponentHeader
        name="Accordion"
        category={Category.CONTENT_AND_LAYOUT}
        description="Accordion containers enable multiple content sections to be displayed in a
        limited space and collapsed or expanded by the user. You can create hierarchy of information
        by hiding secondary content inside collapsed expand containers."
      />

      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox properties={accordionBindings} onChange={onSandboxChange} fullWidth>
            <GoAAccordion {...accordionProps}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi
            </GoAAccordion>

            <GoAAccordion
              {...accordionProps}
              headingContent={<GoABadge type="success" content="Success" />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi
            </GoAAccordion>
          </Sandbox>

          <h4>Accordion Group</h4>
          <Sandbox
            note="The open prop on accordion component can be used to control a group of accordions."
            fullWidth
          >
            <CodeSnippet
              lang="typescript"
              tags="angular"
              allowCopy={true}
              code={`
                export class SomeOtherComponent {
                  open = "false";
                  onClick() {
                    this.open = this.open === "false" ? "true" : "false";
                  }
                }
              `}
            />

            <GoAButton type="tertiary" mb="xl" onClick={() => setOpen(!open)}>
              Toggle Accordion Group
            </GoAButton>
            <GoAAccordion open={open} heading="Heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi
            </GoAAccordion>
            <GoAAccordion open={open} heading="Heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi
            </GoAAccordion>
            <GoAAccordion open={open} heading="Heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi
            </GoAAccordion>
          </Sandbox>

          {/*Accordion Table Properties*/}
          <ComponentProperties properties={componentProperties} />
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
    </div>
  );
}
