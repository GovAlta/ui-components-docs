import {
  GoAAccordion,
  GoAAccordionProps,
  GoABadge,
  GoAButton,
  GoATab,
  GoATabs,
} from "@abgov/react-components";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { useState } from "react";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

// == Page props ==
const componentName = "Accordion";
const description =
  "Accordion containers enable multiple content sections to be displayed in a limited space and collapsed or expanded by the user. You can create hierarchy of information by hiding secondary content inside collapsed expand containers.";
const category = Category.CONTENT_AND_LAYOUT;
type ComponentPropsType = GoAAccordionProps;
type CastingType = {
  heading: string;
  children: React.ReactNode;
  [key: string]: unknown;
};
export default function AccordionPage() {
  const [accordionProps, setAccordionProps] = useState<ComponentPropsType>({
    heading: "Heading",
    children: <></>,
  });

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
    setAccordionProps(props as CastingType);
  }

  return (
    <div className="accordion-page">
      <ComponentHeader name={componentName} category={category} description={description} />

      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox properties={accordionBindings} onChange={onSandboxChange} fullWidth>
            <GoAAccordion {...accordionProps}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi
            </GoAAccordion>
          </Sandbox>

          <h4>Accordion Group</h4>
          <Sandbox
            skipRender
            fullWidth>
            <CodeSnippet
              lang="typescript"
              tags="angular"
              allowCopy={true}
              code={`
                export class SomeOtherComponent {
                  open = false;
                  onClick() {
                    this.open = !this.open;
                  }
                }
              `}
            />

            <CodeSnippet
              lang="typescript"
              tags="angular"
              allowCopy={true}
              code={`
                <goa-button type="tertiary" mb="xl" (_click)="onClick()">
                  Toggle Accordion Group
                </goa-button>
                
                <goa-accordion heading="Heading" [open]="open">
                  Content 1
                </goa-accordion>
                <goa-accordion heading="Heading" [open]="open">
                  <goa-badge type="success" content="Success" slot="headingcontent"></goa-badge>
                   Content 2
                </goa-accordion>
                <goa-accordion heading="Heading" [open]="open">
                  Content 3
                </goa-accordion>
              `}
            />

            <CodeSnippet
              lang="typescript"
              tags="react"
              allowCopy={true}
              code={`
                const [open, setOpen] = useState<boolean>(false);
                const onClick = () => setOpen(!open);
                const headingContent = (<GoABadge type="success" content="Success" />);
              `}
            />

            <CodeSnippet
              lang="typescript"
              tags="react"
              allowCopy={true}
              code={`
                <GoAButton type="tertiary" mb="xl" onClick={onClick}>Toggle Accordion Group</GoAButton>
                <GoAAccordion open={open} heading="Heading">Content 1</GoAAccordion>
                <GoAAccordion open={open} heading="Heading" headingContent={headingContent}>Content 2</GoAAccordion>
                <GoAAccordion open={open} heading="Heading">Content 3</GoAAccordion>
              `}
            />

            <GoAButton type="tertiary" mb="xl" onClick={() => setOpen(!open)}>
              Toggle Accordion Group
            </GoAButton>
            <GoAAccordion open={open} heading="Heading">
              Content 1
            </GoAAccordion>
            <GoAAccordion
              open={open}
              heading="Heading"
              headingContent={<GoABadge type="success" content="Success" />}>
              Content 2
            </GoAAccordion>
            <GoAAccordion open={open} heading="Heading">
              Content 3
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
          }></GoATab>
      </GoATabs>
    </div>
  );
}
