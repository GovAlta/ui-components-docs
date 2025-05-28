import { SlottedHelperTextInAFormItem } from "@examples/slotted-helper-text-in-a-form-item.tsx";
import { SlottedErrorTextInAFormItem } from "@examples/slotted-error-text-in-a-form-item.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const FormItemExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Slotted helper text in a form item"
        figmaExample="">
      </SandboxHeader>
      <SlottedHelperTextInAFormItem />

      <SandboxHeader
        exampleTitle="Slotted error text in a form item"
        figmaExample="">
      </SandboxHeader>
      <SlottedErrorTextInAFormItem />
    </>
  )
}
