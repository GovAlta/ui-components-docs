import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoABadge,
  GoAFormItem,
  GoARadioGroup, GoARadioGroupProps,
  GoARadioItem,
  GoATab,
  GoATabs
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";

// == Page props ==
const componentName = "Radio";
const description = "Allow users to select one option from a set.";
const category = Category.INPUTS_AND_ACTIONS;
type ComponentPropsType = GoARadioGroupProps;
type CastingType = {
  name: string;
  value: string;
  [key: string]: unknown;
  onChange: (name: string, value: string) => void;
}

export default function RadioPage() {
  const [radioProps, setRadioProps] = useState<ComponentPropsType>({
    name: "item",
    value: "",
    onChange: () => {},
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
  const {formItemBindings, formItemProps, onFormItemChange } = useSandboxFormItem({label: "Basic"});

  const radioGroupProperties: ComponentProperty[] = [
    {
      name: "name",
      type: "string",
      required: true,
      description: "Must match the name assigned to the children",
    },
    {
      name: "value",
      type: "string",
      description: "The value binding",
    },
    {
      name: "orientation",
      type: "horizontal|vertical",
      description: "Orientation of the radio items",
      defaultValue: "vertical",
    },
    {
      name: "error",
      type: "boolean",
      defaultValue: "false",
      description: "Set the component to an error state",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Set the component to disabled. Use [attr.disabled] with [formControl]",
    },
    {
      name: "ariaLabel",
      lang: "react",
      description:
        "Defines how the text will be translated for the screen reader. If not specified it will fall back to the name.",
      type: "string",
    },
    {
      name: "arialabel",
      lang: "angular",
      description:
        "Defines how the text will be translated for the screen reader. If not specified it will fall back to the name.",
      type: "string",
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
      description: "Tetx to show to the user",
    },
    {
      name: "description",
      type: "string",
      description: "Additional text to the bottom of the label",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setRadioProps(props as CastingType);
    setRadioBindings(bindings);
  }

  const noop = () => {};

  return (
    <>
      <ComponentHeader name={componentName} description={description} category={category} />

      <GoATabs>
        <GoATab heading="Code examples">
          {/*Radio sandbox*/}
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
              const [item, setItem] = useState("1");
              function onChange(name: string, value: string) {
                setItem(value);
              }
            `}
            />

            <GoAFormItem {...formItemProps}>
              <GoARadioGroup {...radioProps} value="1" onChange={noop}>
                <GoARadioItem value="1" label="Label"></GoARadioItem>
                <GoARadioItem value="2" label="Label"></GoARadioItem>
                <GoARadioItem value="3" label="Label"></GoARadioItem>
              </GoARadioGroup>
            </GoAFormItem>
          </Sandbox>

          {/*Radio Group properties*/}
          <ComponentProperties heading="Radio group properties" properties={radioGroupProperties} />
          {/*Radio Item properties*/}
          <ComponentProperties heading="Radio Item properties" properties={radioItemProperties} />
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
