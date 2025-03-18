import {
  FormStepperControlledNavigationExample
} from "@examples/form-stepper/FormStepperControlledNavigationExample.tsx";
import { FormStepperStepStatusExample } from "@examples/form-stepper/FormStepperStepStatusExample.tsx";

export const FormStepperExamples = () => {
  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>
      <h3 id="component-example-controlled-navigation">Controlled Navigation</h3>
      <FormStepperControlledNavigationExample />

      <h3 id="component-example-step-status">Step status</h3>
      <FormStepperStepStatusExample/>
    </>
  )
}
