import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoAButton, GoAButtonGroup, GoATab, GoATabs } from "@abgov/react-components";
import { Alignment } from "@abgov/react-components/common/styling";

export default function ButtonGroupPage() {
  const [buttonGroupProps, setButtonGroupProps] = useState({
    alignment: "start" as Alignment,
  });
  const [buttonGroupBindings, setButtonGroupBindings] = useState<ComponentBinding[]>([
    {
      label: "Alignment",
      type: "list",
      name: "alignment",
      options: ["start", "end", "center"],
      value: "start",
    },
    {
      label: "Gap",
      type: "list",
      name: "gap",
      options: ["", "relaxed", "compact"],
      value: "",
      defaultValue: "relaxed",
    },
  ]);
  const componentProperties: ComponentProperty[] = [
    {
      name: "alignment",
      type: "start | end | center",
      description: "Positions the button group in the page layout",
      required: true,
    },
    {
      name: "gap",
      type: "relaxed | compact",
      description: "Define the spacing between buttons in the button group",
      defaultValue: "relaxed",
    },
  ];

  const noop = () => {};

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setButtonGroupBindings(bindings);
    setButtonGroupProps(props as { alignment: Alignment; [key: string]: unknown });
  }

  return (
    <>
      <ComponentHeader
        name="Button Group"
        category={Category.INPUTS_AND_ACTIONS}
        description={
          "Display multiple related actions stacked or in a horizontal row to help with arrangement and spacing."
        }
      />

      <GoATabs>
        <GoATab heading="Code examples">
          {/*Button Group Sandbox*/}
          <Sandbox properties={buttonGroupBindings} onChange={onSandboxChange} fullWidth>
            <GoAButtonGroup {...buttonGroupProps}>
              <GoAButton type="primary" onClick={noop}>
                Button
              </GoAButton>
              <GoAButton type="secondary" onClick={noop}>
                Button
              </GoAButton>
              <GoAButton type="tertiary" onClick={noop}>
                Button
              </GoAButton>
            </GoAButtonGroup>
          </Sandbox>

          <ComponentProperties properties={componentProperties} />
        </GoATab>
      </GoATabs>
    </>
  );
}
