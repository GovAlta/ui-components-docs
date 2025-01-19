import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoABadge, GoAButton, GoAPopover, GoATab, GoATabs, GoACallout, } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { propsToString } from "@components/sandbox/BaseSerializer.ts";
import { ComponentContent } from "@components/component-content/ComponentContent";
import "./AllComponents.css";

// == Page props ==
const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=27301-302109";
const componentName = "Popover";
const category = Category.CONTENT_AND_LAYOUT;
const description = "A small overlay that opens on demand, used in other components.";
const relatedComponents = [
  { link: "/components/dropdown", name: "Dropdown" },
  { link: "/components/header", name: "Header" },
  { link: "/components/tooltip", name: "Tooltip" },
];

export default function PopoverPage() {
  const [popoverProps, setPopoverProps] = useState({});
  const [popoverBindings, setPopoverBindings] = useState<ComponentBinding[]>([
    {
      label: "Max Width",
      type: "string",
      name: "maxWidth",
      value: "",
    },
    {
      label: "Min Width",
      type: "string",
      name: "minWidth",
      value: "",
    },
    {
      label: "Position",
      type: "list",
      name: "position",
      options: ["", "above", "below", "auto"],
      value: "",
      defaultValue: "auto",
    },
    {
      label: "Padding",
      type: "boolean",
      name: "padded",
      value: true,
    },
  ]);
  const componentProperties: ComponentProperty[] = [
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the popover container.",
      defaultValue: "320px",
      lang: "react",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Sets the maximum width of the popover container.",
      defaultValue: "320px",
      lang: "angular",
    },
    {
      name: "minWidth",
      type: "string",
      description: "Sets the minimum width of the popover container.",
      lang: "react",
    },
    {
      name: "minwidth",
      type: "string",
      description: "Sets the minimum width of the popover container.",
      lang: "angular",
    },
    {
      name: "padded",
      type: "boolean",
      description: "Sets if the popover has padding.",
      defaultValue: "true",
    },
    {
      name: "position",
      type: "above | below | auto",
      description: "Provides control to where the popover content is positioned.",
      defaultValue: "auto",
    },
    {
      name: "target",
      type: "slot",
      description: "The target UI component to open the popover.",
      required: true,
      lang: "angular",
    },
    {
      name: "target",
      type: "ReactNode",
      description: "The target UI component to open the popover.",
      required: true,
      lang: "react",
    },
    {
      name: "relative",
      type: "boolean",
      description: "Set to true if a parent element has a css position of relative.",
      defaultValue: "false",
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
  ];

  function onSandboxChange(baseBinding: ComponentBinding[], props: Record<string, unknown>) {
    setPopoverBindings(baseBinding);
    setPopoverProps(props);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        githubLink={componentName}
        figmaLink={FIGMA_LINK}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoATabs>
          <GoATab heading="Code Playground">
            {/*Popover sandbox*/}
            <h2 id="component" style={{display: "none"}}>Playground</h2>
            <Sandbox properties={popoverBindings} skipRender onChange={onSandboxChange}>

              {/*Angular*/}
              <CodeSnippet
                lang="html"
                tags="angular"
                allowCopy={true}
                code={`
                <goa-popover ${propsToString(popoverProps, "angular")}>
                  <p>This is a popover</p>
                  It can be used for a number of different contexts.
                  <div slot="target">
                    <goa-button type="secondary" size="compact">Click me</goa-button>
                  </div>
                </goa-popover>
              `}
              />

              {/* React */}
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                const target = (
                  <GoAButton type="secondary" size="compact">
                    Click me
                  </GoAButton>
                );
              `}
              />
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                <GoAPopover target={target} ${propsToString(popoverProps, "react")}>
                  <p>This is a popover</p>
                  It can be used for a number of different contexts.
                </GoAPopover>
              `}
              />

              <GoAPopover
                {...popoverProps}
                target={
                  <GoAButton type="secondary" size="compact">
                    Click me
                  </GoAButton>
                }
              >
                <p>This is a popover</p>
                It can be used for a number of different contexts.
              </GoAPopover>
            </Sandbox>

            {/* Popover component properties table */}
            <ComponentProperties properties={componentProperties} />
          </GoATab>

            <GoATab
              heading={
                <>
                  Examples
                  <GoABadge type="information" content="0" />
                </>
              }
            >
              <GoACallout heading="We are currently collecting design examples for this component" type="important" size="medium" maxWidth="540px">
                {" "}
                <a href="https://design.alberta.ca/get-started/support#:~:text=Raise%20an%20issue-,Talk%20to%20us,-Slack" target="_blank" rel="noreferrer">
                  Talk to the design system team
                </a>{" "}
                to contribute examples from your service.
              </GoACallout>
            </GoATab>

          <GoATab heading="Design">

          <GoACallout
              heading="Design documentation in Figma"
              type="important"
              size="medium"
              maxWidth="540px"
            >
              Detailed design documentation for this component can be found on the associated{" "}
              <a href={FIGMA_LINK} target="_blank" rel="noreferrer">
                component page
              </a>{" "}
              in the Component library in Figma.
            </GoACallout>
          </GoATab>

          <GoATab heading="Accessibility">

          <GoACallout
              heading="Accessibility documentation in Figma"
              type="important"
              size="medium"
              maxWidth="550px"
            >
              Detailed accessibility documentation for this component can be found on the associated{" "}
              <a href={FIGMA_LINK} target="_blank" rel="noreferrer">
                component page
              </a>{" "}
              in the Component library in Figma.
            </GoACallout>
          </GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}