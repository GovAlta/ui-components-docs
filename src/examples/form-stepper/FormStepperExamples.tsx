import {
  FormStepperControlledNavigationExample
} from "@examples/form-stepper/FormStepperControlledNavigationExample.tsx";
import { FormStepperStepStatusExample } from "@examples/form-stepper/FormStepperStepStatusExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const FormStepperExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Controlled Navigation"
        figmaExample="">
      </SandboxHeader>
      <FormStepperControlledNavigationExample />

      <SandboxHeader
        exampleTitle="Step status"
        figmaExample="">
      </SandboxHeader>
      <FormStepperStepStatusExample/>
    </>
  )
}
