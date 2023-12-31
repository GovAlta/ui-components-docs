import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoABadge, GoAButton, GoAPopover, GoATab, GoATabs } from "@abgov/react-components";

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
        description="Display additional information for an object in a compact way and without leaving the page."
      />

      <GoATabs>
        <GoATab heading="Code examples">
          {/*Popover sandbox*/}
          <Sandbox properties={popoverBindings} onChange={onSandboxChange}>
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
    </>
  );
}
