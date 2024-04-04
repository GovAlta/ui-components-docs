import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoABadge, GoAButton, GoAPopover, GoATab, GoATabs } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { propsToString } from "@components/sandbox/BaseSerializer.ts";
import { ComponentContent } from "@components/component-content/ComponentContent";

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
      description: "The maxwidth of the popover container",
      defaultValue: "320px",
      lang: "react",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "The maxwidth of the popover container",
      defaultValue: "320px",
      lang: "angular",
    },
    {
      name: "padded",
      type: "boolean",
      description: "Whether or not the popover should have padding",
      defaultValue: "true",
    },
    {
      name: "position",
      type: "above | below | auto",
      description: "Provides control to where the popover content is positioned",
      defaultValue: "auto",
    },
    {
      name: "target",
      type: "slot",
      description: "The target UI component to open the popover",
      required: true,
      lang: "angular",
    },
    {
      name: "target",
      type: "ReactNode",
      description: "The target UI component to open the popover",
      required: true,
      lang: "react",
    },
    {
      name: "relative",
      type: "boolean",
      description: "Set to true if a parent element has a css position of relative",
      defaultValue: "false",
    },
  ];

  function onSandboxChange(baseBinding: ComponentBinding[], props: Record<string, unknown>) {
    setPopoverBindings(baseBinding);
    setPopoverProps(props);
  }

  return (
    <>
      <ComponentHeader
        name="Popover"
        category={Category.CONTENT_AND_LAYOUT}
        description="A small overlay that opens on demand, used in other components."
        relatedComponents={[
          { link: "/components/dropdown", name: "Dropdown" },
          { link: "/components/header", name: "Header" },
          { link: "/components/tooltip", name: "Tooltip" },

        ]}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoATabs>
          <GoATab heading="Code examples">
            {/*Popover sandbox*/}
            <h2 id="component" style={{display: "none"}}>Component</h2>
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

              {/*React*/}
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

            {/*Popover table properties*/}
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
      </ComponentContent>
    </>
  );
}
