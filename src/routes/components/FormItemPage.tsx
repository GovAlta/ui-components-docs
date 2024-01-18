import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoABadge, GoAFormItem, GoAInput, GoATab, GoATabs } from "@abgov/react-components";

export default function FormItemPage() {
  const [formItemProps, setFormItemProps] = useState({
    label: "First name",
  });
  const [formItemBindings, setFormItemBindings] = useState<ComponentBinding[]>([
    {
      label: "Label",
      type: "string",
      value: "First name",
      name: "label",
    },
    {
      label: "Label Size",
      type: "list",
      options: ["", "regular", "large"],
      value: "",
      defaultValue: "regular",
      name: "labelSize",
    },
    {
      label: "Help Text",
      name: "helpText",
      type: "string",
      value: "",
    },
    {
      label: "Error",
      type: "string",
      name: "error",
      value: "",
    },
    {
      label: "Requirement",
      type: "list",
      name: "requirement",
      options: ["", "optional", "required"],
      value: "",
    },
  ]);
  const componentProps: ComponentProperty[] = [
    {
      name: "label",
      type: "string",
      description: "Creates a label for a form item",
    },
    {
      name: "labelSize",
      lang: "react",
      type: "regular | large",
      defaultValue: "regular",
      description: "Set a regular or large label size",
    },
    {
      name: "labelsize",
      lang: "angular",
      type: "regular | large",
      defaultValue: "regular",
      description: "Set a regular or large label size",
    },
    {
      name: "helpText",
      type: "string",
      lang: "react",
      description: "Help text displayed under the form field to provide additional explanation.",
    },
    {
      name: "helptext",
      type: "string",
      lang: "angular",
      description: "Help text displayed under the form field to provide additional explanation.",
    },
    {
      name: "error",
      type: "string",
      description:
        "Error text displayed under the form field. Leave blank to indicate valid field.",
    },
    {
      name: "requirement",
      type: "optional | required",
      description: "Marks the field with optional/required label",
    },
    {
      name: "id",
      type: "string",
      description:
        "The id of the label, necessary for field's aria-labelledby attribute for the screen reader.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setFormItemBindings(bindings);
    setFormItemProps(props as { label: string; [key: string]: unknown });
  }

  const noop = () => {};

  return (
    <>
      <ComponentHeader
        name="Form Item"
        category={Category.INPUTS_AND_ACTIONS}
        description="Wraps an input control with a text label, requirement label, helper text, and error text."
        relatedComponents={[
        { link: "/components/checkbox", name: "Checkbox" },
        { link: "/components/dropdown", name: "Dropdown" },
        { link: "/components/Radio", name: "Radio" },
        { link: "/components/text-area", name: "Text area" },
        { link: "/components/text-field", name: "Text field" },
        ]}
      />

      <GoATabs>
        <GoATab heading="Code examples">
          {/*Form Item Sandbox*/}
          <Sandbox properties={formItemBindings} onChange={onSandboxChange} flags={["reactive"]}>
            <GoAFormItem {...formItemProps}>
              <GoAInput onChange={noop} value="" name="firstName" />
            </GoAFormItem>
          </Sandbox>
          {/*Form Item Properties Table*/}
          <ComponentProperties properties={componentProps} />
        </GoATab>
        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }
        >
          <p>Coming Soon</p>
        </GoATab>
      </GoATabs>
    </>
  );
}
