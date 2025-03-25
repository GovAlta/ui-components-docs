import { useState } from "react";
import {
  GoabBadge,
  GoabButton,
  GoabTab,
  GoabTabs
} from "@abgov/react-components";
import buttonTokens from "@abgov/design-tokens/data/component-design-tokens/button-design-tokens.json";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import ICONS from "@routes/components/icons.json";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { ComponentTokenTable } from "@components/component-token-table/ComponentTokenTable";
import { useComponentTokens } from "@hooks/useComponentTokens.ts";

export default function ButtonPage() {
  const [buttonProps, setButtonProps] = useState({});
  const [buttonBindings, setButtonBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: ["primary", "submit", "secondary", "tertiary", "start"],
      value: "",
      defaultValue: "primary",
    },
    {
      label: "Size",
      type: "list",
      name: "size",
      options: ["", "normal", "compact"],
      value: "",
    },
    {
      label: "Variant",
      type: "list",
      name: "variant",
      options: ["", "normal", "destructive"],
      value: "",
    },
    {
      label: "Leading icon",
      type: "combobox",
      name: "leadingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
    {
      label: "Trailing Icon",
      type: "combobox",
      name: "trailingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
    {label: "Width", type: "string", name: "width", value: ""},
    { label: "Disabled", type: "boolean", name: "disabled", value: false },
  ]);
  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "primary | submit | secondary | tertiary | start",
      description: "Sets the type of button.",
      defaultValue: "primary",
    },
    {
      name: "size",
      type: "normal | compact",
      defaultValue: "normal",
      description: "Sets the size of button.",
    },
    {
      name: "variant",
      type: "normal | destructive",
      defaultValue: "normal",
      description: "Styles the button to show a destructive action.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables the button.",
    },
    {
      name: "leadingIcon",
      type: "GoAIconType",
      lang: "react",
      description: "Shows an icon to the left of the text.",
    },
    {
      name: "leadingicon",
      type: "GoAIconType",
      lang: "angular",
      description: "Shows an icon to the left of the text.",
    },
    {
      name: "trailingIcon",
      type: "GoAIconType",
      lang: "react",
      description: "Shows an icon to the right of the text.",
    },
    {
      name: "trailingicon",
      type: "GoAIconType",
      lang: "angular",
      description: "Shows an icon to the right of the text.",
    },
    {
      name: "width",
      type: "string",
      description: "Sets the width of the button.",
    },
    {
      name: "_click",
      lang: "angular",
      type: "CustomEvent",
      description: "Callback function when button is clicked.",
    },
    {
      name: "onClick",
      lang: "react",
      type: "(e: any) => void",
      description: "Callback function when button is clicked.",
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

  //custom order of categories
  const buttonCategoryOrder = [
    "Primary button tokens",
    "Secondary button tokens",
    "Tertiary button tokens",
    "Size & spacing tokens",
    "Typography tokens",
    "Icons tokens",
    "State tokens",
    "Other tokens"
  ];

  const { tokensList, orderedCategories } = useComponentTokens(
    buttonTokens,
    buttonCategoryOrder
  );

  function SandboxOnChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setButtonBindings(bindings);
    setButtonProps(props);
  }
  return (
    <>
      <ComponentHeader
        name="Button"
        category={Category.INPUTS_AND_ACTIONS}
        description="Carry out an important action or to navigate to another page."
        relatedComponents={[
          { link: "/components/buttonGroup", name: "Button group" },
          { link: "/components/icon-button", name: "Icon button" },
        ]}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code playground">
            {/*Button Sandbox*/}
            <h2 id="component" style={{display: "none"}}>Playground</h2>
            <Sandbox properties={buttonBindings} onChange={SandboxOnChange}>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  export class SomeOtherComponent {
                    onClick(event: Event) {
                      console.log('clicked ', event);
                    }
                  }
                `}
              />
              <GoabButton {...buttonProps} onClick={noop}>
                Primary Button
              </GoabButton>
            </Sandbox>

            {/*Button Table Properties*/}
            <ComponentProperties properties={componentProperties} />

              <ComponentTokenTable
                tokensList={tokensList}
                orderedCategories={orderedCategories}
              />
          </GoabTab>

          <GoabTab heading={<>Examples<GoabBadge type="information" content="3" /></>}>

          </GoabTab>

          <GoabTab heading="Design">

          </GoabTab>

          <GoabTab heading="Accessibility">

          </GoabTab>

        </GoabTabs>
      </ComponentContent>
    </>
  );
}
