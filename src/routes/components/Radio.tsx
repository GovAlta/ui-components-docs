import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoabBadge,
  GoabFormItem,
  GoabRadioGroup, GoabRadioGroupProps,
  GoabRadioItem,
  GoabTab,
  GoabTabs
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import RadioExamples from "@examples/radio/RadioExamples.tsx";
import { GoabRadioGroupOnChangeDetail } from "@abgov/ui-components-common";

// == Page props ==
const componentName = "Radio";
const description = "Allow users to select one option from a set.";
const category = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  { link: "/components/checkbox", name: "Checkbox" },
  { link: "/components/dropdown", name: "Dropdown" },
  { link: "/components/form-item", name: "Form item" }
];
type ComponentPropsType = GoabRadioGroupProps;
type CastingType = {
  name: string;
  value: string;
  [key: string]: unknown;
  onChange: (_: GoabRadioGroupOnChangeDetail) => void;
}

export default function RadioPage() {
  const [radioProps, setRadioProps] = useState<ComponentPropsType>({
    name: "item",
    value: "",
    onChange: (_: GoabRadioGroupOnChangeDetail) => { },
  });
  const [radioBindings, setRadioBindings] = useState<ComponentBinding[]>([
    {
      label: "Orientation",
      type: "list",
      options: ["", "horizontal", "vertical"],
      value: "",
      name: "orientation",
    },
    {
      label: "Disabled",
      name: "disabled",
      type: "boolean",
      value: false,
    },
    {
      label: "Error",
      name: "error",
      type: "boolean",
      value: false,
    },
    {
      label: "ARIA Label",
      name: "ariaLabel",
      type: "string",
      value: "",
    },
  ]);
  const { formItemBindings, formItemProps, onFormItemChange } = useSandboxFormItem({ label: "Basic" });

  const radioGroupProperties: ComponentProperty[] = [
    {
      name: "name",
      type: "string",
      required: true,
      description: "Identifier for the radio group. Should be unique.",
    },
    {
      name: "value",
      type: "string",
      description: "The value binding.",
    },
    {
      name: "orientation",
      type: "horizontal|vertical",
      description: "Orientation of the radio items.",
      defaultValue: "vertical",
    },
    {
      name: "error",
      type: "boolean",
      defaultValue: "false",
      description: "Set the component to an error state.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Set the component to disabled. Use [attr.disabled] with [formControl].",
    },
    {
      name: "ariaLabel",
      lang: "react",
      description:
        "Defines how the text will be translated for the screen reader.",
      type: "string",
    },
    {
      name: "arialabel",
      lang: "angular",
      description:
        "Defines how the text will be translated for the screen reader.",
      type: "string",
    },
    {
      name: "arialabelledby",
      lang: "angular",
      description:
        "Refers to the element that contains the label of the radio group.",
      type: "string",
    },
    {
      name: "ariaLabelledBy",
      lang: "react",
      description:
        "Refers to the element that contains the label of the radio group.",
      type: "string",
    },
    {
      name: "onChange",
      lang: "react",
      type: "(name: string, value: string) => void",
      required: true,
      description: "Callback function when radio value is changed.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];
  const radioItemProperties: ComponentProperty[] = [
    {
      name: "value",
      type: "string",
      required: true,
      description: "Value of the item that will be returned when selected.",
    },
    {
      name: "label",
      type: "string",
      description: "Text shown beside the radio.",
    },
    {
      name: "description",
      type: "string | slot",
      description: "Additional content shown below the label.",
      lang: "angular",
    },
    {
      name: "description",
      type: "string | ReactNode",
      description: "Additional content shown below the label.",
      lang: "react",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the radio.",
      lang: "react",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Sets the maximum width of the radio.",
      lang: "angular",
    },
    {
      name: "arialabel",
      lang: "angular",
      type: "string",
      description: "Defines how the radio item will be translated for the screen reader.",
    },
    {
      name: "ariaLabel",
      lang: "react",
      type: "string",
      description: "Defines how the radio item will be translated for the screen reader.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setRadioProps(props as CastingType);
    setRadioBindings(bindings);
  }

  const noop = () => { };

  return (
    <>
      <ComponentHeader name={componentName} description={description} category={category} relatedComponents={relatedComponents} />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs>
          <GoabTab heading="Code examples">
            {/*Radio sandbox*/}
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox
              properties={radioBindings}
              formItemProperties={formItemBindings}
              onChange={onSandboxChange}
              onChangeFormItemBindings={onFormItemChange}
              flags={["reactive"]}>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
              // non-reactive code
              export class MyComponent {
                onChange(e: Event) {
                  // handle change
                  console.log("onChange", (e as CustomEvent).detail.name, (e as CustomEvent).detail.value);
                }
              }
            `}
              />
              <CodeSnippet
                lang="typescript"
                tags={["angular", "reactive"]}
                allowCopy={true}
                code={`
              // reactive code
              import { FormControl } from "@angular/forms";
              export class MyComponent {
               itemFormCtrl = new FormControl("1");
              }
            `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
              function onChange(name: string, value: string) {
                console.log("onChange", name, value);
              }
            `}
              />

              <GoabFormItem {...formItemProps}>
                <GoabRadioGroup {...radioProps} name="item" value="1" onChange={noop}>
                  <GoabRadioItem value="1" label="Label 1"></GoabRadioItem>
                  <GoabRadioItem value="2" label="Label 2"></GoabRadioItem>
                  <GoabRadioItem value="3" label="Label 3"></GoabRadioItem>
                </GoabRadioGroup>
              </GoabFormItem>
            </Sandbox>

            {/*Radio Group properties*/}
            <ComponentProperties heading="Radio group properties" properties={radioGroupProperties} />
            {/*Radio Item properties*/}
            <ComponentProperties heading="Radio Item properties" properties={radioItemProperties} />
            <RadioExamples />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }
          ></GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
