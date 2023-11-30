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
  GoARadioGroup,
  GoARadioItem,
  GoATab,
  GoATabs,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export default function RadioPage() {
  const [radioProps, setRadioProps] = useState({
    name: "item",
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
    setRadioProps(props as { name: string; [key: string]: unknown });
    setRadioBindings(bindings);
  }

  const noop = () => {};

  return (
    <>
      <ComponentHeader
        name="Radio"
        category={Category.INPUTS_AND_ACTIONS}
        description="Allow users to select one option from a set."
      />
      <GoATabs>
        <GoATab heading="Code examples">
          {/*Radio sandbox*/}
          <Sandbox properties={radioBindings} onChange={onSandboxChange} flags={["reactive"]}>
            <CodeSnippet
              lang="typescript"
              tags="angular"
              allowCopy={true}
              code={`
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

            <GoAFormItem label="Input label">
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
