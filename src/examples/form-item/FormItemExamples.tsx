import { FormItemSlottedHelperTextExample } from "@examples/form-item/FormItemSlottedHelperTextExample.tsx";
import { FormItemSlottedErrorTextExample } from "@examples/form-item/FormItemSlottedErrorTextExample.tsx";

export const FormItemExamples = () => {
  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>

      <h3 id="component-example-slotted-helper-text">Slotted Helper Text</h3>
      <FormItemSlottedHelperTextExample />

      <h3 id="component-example-slotted-error-text">Slotted Error Text</h3>
      <FormItemSlottedErrorTextExample />
    </>
  )
}
