import { FormItemSlottedHelperTextExample } from "@examples/form-item/FormItemSlottedHelperTextExample.tsx";
import { FormItemSlottedErrorTextExample } from "@examples/form-item/FormItemSlottedErrorTextExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const FormItemExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Slotted Helper Text"
        figmaExample="">
      </SandboxHeader>
      <FormItemSlottedHelperTextExample />

      <SandboxHeader
        exampleTitle="Slotted Error Text"
        figmaExample="">
      </SandboxHeader>
      <FormItemSlottedErrorTextExample />
    </>
  )
}
