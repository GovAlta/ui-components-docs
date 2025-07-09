import {
  FormStepperWithControlledNavigation
} from "@examples/form-stepper-with-controlled-navigation.tsx";
import { SetTheStatusOfStepOnAFormStepper } from "@examples/set-the-status-of-step-on-a-form-stepper.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const FormStepperExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Controlled Navigation"
        figmaExample="">
      </SandboxHeader>
      <FormStepperWithControlledNavigation />

      <SandboxHeader
        exampleTitle="Step status"
        figmaExample="">
      </SandboxHeader>
      <SetTheStatusOfStepOnAFormStepper />
    </>
  )
}
