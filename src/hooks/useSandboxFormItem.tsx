import { useState } from "react";
import { ComponentBinding } from "@components/sandbox";
import { GoabFormItemProps } from "@abgov/react-components";

export const useSandboxFormItem = (initialProps: GoabFormItemProps) => {
  const [formItemBindings, setFormItemBindings] = useState<ComponentBinding[]>(
    [
      {
        label: "Text label",
        type: "string",
        value: initialProps?.label || "",
        name: "label"
      },
      {
        label: "Requirement",
        type: "radio",
        name: "requirement",
        options: ["", "optional", "required"],
        value: ""
      },
      {
        label: "Label size",
        type: "radio",
        name: "labelSize",
        options: ["regular", "large"],
        value: "regular"
      },
      {
        label: "Helper text",
        type: "string",
        value: "",
        name: "helpText"
      },
      {
        label: "Error message",
        type: "string",
        value: "",
        name: "error"
      }
    ]
  );
  const [formItemProps, setFormItemProps] = useState(initialProps);

  function onFormItemChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setFormItemBindings(bindings);
    setFormItemProps(props);
  }

  return { formItemBindings, formItemProps, onFormItemChange };
};
