import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoABadge, GoAButton, GoAButtonGroup, GoATab, GoATabs } from "@abgov/react-components";
import { GoAButtonGroupAlignment } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import ButtonGroupExamples from "@examples/button-group/ButtonGroupExamples";


export default function ButtonGroupPage() {
  const [buttonGroupProps, setButtonGroupProps] = useState({
    alignment: "center" as GoAButtonGroupAlignment,
  });

  const [buttonGroupBindings, setButtonGroupBindings] = useState<ComponentBinding[]>([
    {
      label: "Alignment",
      type: "list",
      name: "alignment",
      options: ["start", "end", "center"],
      value: "center",
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
      description: "Positions the button group in the page layout.",
      required: true,
    },
    {
      name: "gap",
      type: "relaxed | compact",
      description: "Sets the spacing between buttons in the button group.",
      defaultValue: "relaxed",
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

  const noop = () => { };

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setButtonGroupBindings(bindings);
    setButtonGroupProps(props as { alignment: GoAButtonGroupAlignment;[key: string]: unknown });
  }

  return (
    <>
      <ComponentHeader
        name="Button Group"
        category={Category.INPUTS_AND_ACTIONS}
        description={
          "Display multiple related actions stacked or in a horizontal row to help with arrangement and spacing."
        }
        relatedComponents={[
          { link: "/components/button", name: "Button" },
          /* 
          { link: "/components/icon-button", name: "Icon button" },
          { link: "/components/link", name: "Link" }, 
          */
        ]}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoATabs>
          <GoATab heading="Code examples">
            {/*Button Group Sandbox*/}
            <h2 id="component" style={{display: "none"}}>Component</h2>
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
            

            <ButtonGroupExamples/>
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
