import { useState } from "react";
import { GoABadge, GoACheckbox, GoACheckboxProps, GoAFormItem, GoATab, GoATabs } from "@abgov/react-components";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import CheckboxExamples from "@examples/checkbox/CheckboxExamples.tsx";

// == Page props ==
const componentName = "Checkbox";
const description = "Let the user select one or more options.";
const category = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  { link: "/components/dropdown", name: "Dropdown" },
  { link: "/components/form-item", name: "Form item" },
  { link: "/components/radio", name: "Radio" }
];
type ComponentPropsType = GoACheckboxProps;
type CastingType = {
  name: string;
  checked: boolean;
  [key: string]: unknown;
};
export default function CheckboxPage() {
  const [checkboxProps, setCheckboxProps] = useState<ComponentPropsType>({
    name: "item",
    checked: false,
    text: "Item",
    value: "",
  });
  const [checkboxBindings, setCheckboxBindings] = useState<ComponentBinding[]>([
    { label: "Text", type: "string", name: "text", value: "Item" },
    { label: "Description", type: "string", name: "description", value: "" },
    { label: "Disabled", type: "boolean", name: "disabled", value: false },
    { label: "Error", type: "boolean", name: "error", value: false },
    { label: "ARIA label", type: "string", name: "ariaLabel", value: "" },
  ]);
  const { formItemBindings, formItemProps, onFormItemChange } = useSandboxFormItem({
    label: "Basic",
  });

  const componentProperties: ComponentProperty[] = [
    {
      name: "name",
      type: "string",
      description: "Unique name to identify the checkbox.",
      required: true,
    },
    {
      name: "checked",
      type: "boolean",
      description: "Marks the checkbox item as selected.",
      required: true,
    },
    {
      name: "text",
      type: "string",
      description: "Label shown beside the checkbox.",
    },
    {
      name: "value",
      type: "string",
      description: "The value binding.",
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
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Disable this control. It will not receive focus or events. Use [attr.disabled] with [formControl].",
    },
    {
      name: "error",
      type: "boolean",
      defaultValue: "false",
      description: "Shows an error on the checkbox item.",
    },
    {
      name: "ariaLabel",
      type: "string",
      description:
        "Defines how the text will be translated for the screen reader. If not specified it will fall back to the name.",
      lang: "react",
    },
    {
      name: "arialabel",
      type: "string",
      description:
        "Defines how the text will be translated for the screen reader. If not specified it will fall back to the name.",
      lang: "angular",
    },
    {
      name: "onChange",
      type: "(name: string, checked: boolean, value: string) => void",
      description: "Callback function when checkbox value is changed.",
      lang: "react"
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
  ];
  const noop = () => { };

  function onChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    const missingProps = {
      name: "item",
      checked: false,
      value: ""
    };
    const updatedProps = { ...missingProps, ...props };

    setCheckboxBindings(bindings);
    setCheckboxProps(updatedProps as CastingType);
  }

  return (
    <>
      <ComponentHeader name={componentName} category={category} description={description} relatedComponents={relatedComponents} />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoATabs>
          <GoATab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox
              properties={checkboxBindings}
              formItemProperties={formItemBindings}
              onChange={onChange}
              onChangeFormItemBindings={onFormItemChange}
              flags={["reactive"]}>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  export class SomeOtherComponent {
                    checked = false;
                    onChange(event: Event) {
                      const {name, checked, value} = (event as CustomEvent).detail;
                      // or this.checked = !this.checked;
                    }
                  }
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags={["angular", "reactive"]}
                allowCopy={true}
                code={`
                  import { FormControl } from "@angular/forms";
                  export class SomeOtherComponent {
                    itemFormCtrl = new FormControl();
                  }
                `}
              />
              <GoAFormItem {...formItemProps}>
                <GoACheckbox {...checkboxProps} onChange={noop} />
              </GoAFormItem>
            </Sandbox>

            <ComponentProperties properties={componentProperties} />
            <CheckboxExamples />
          </GoATab>

          <GoATab
            heading={
              <>
                Design guidelines
                <GoABadge type="information" content="In progress" />
              </>
            }></GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}
