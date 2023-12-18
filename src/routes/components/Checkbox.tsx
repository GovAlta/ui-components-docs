import { useState } from "react";
import { GoACheckbox, GoACheckboxProps } from "@abgov/react-components";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";

// == Page props ==
const componentName = "Checkbox";
const description = "Let the user select one ore more options";
const category = Category.INPUTS_AND_ACTIONS;
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

  const componentProperties: ComponentProperty[] = [
    {
      name: "name",
      type: "string",
      description: "Must match the name assigned to the children",
      required: true,
    },
    {
      name: "checked",
      type: "boolean",
      description: "Mark the checkbox item as selected",
      required: true,
    },
    {
      name: "text",
      type: "string",
      description: "Content to display as the label for the Checkbox",
    },
    {
      name: "value",
      type: "string",
      description: "The value binding to the checkbox",
    },
    {
      name: "description",
      type: "string",
      description: "Additional content added below the content text",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Disable this control. It will not receive focus or events. Use [attr.disabled] with [formControl]",
    },
    {
      name: "error",
      type: "boolean",
      defaultValue: "false",
      description: "Show an error on the checkbox item.",
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
  ];
  const noop = () => {};

  function onChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setCheckboxBindings(bindings);
    setCheckboxProps(props as CastingType);
  }

  return (
    <>
      <ComponentHeader name={componentName} category={category} description={description} />

      <Sandbox properties={checkboxBindings} onChange={onChange} flags={["reactive"]}>
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
        <GoACheckbox {...checkboxProps} onChange={noop} />
      </Sandbox>

      <ComponentProperties properties={componentProperties} />
    </>
  );
}
