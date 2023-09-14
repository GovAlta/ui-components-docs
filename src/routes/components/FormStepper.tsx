import { useState } from "react";
import { GoAFormStepper, GoAFormStep, GoAPages } from "@abgov/react-components";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";

export default function DropdownPage() {

  const [formStepProps, setFormStepProps] = useState({});
  const [formStepperBindings, setFormStepperBindings] = useState<ComponentBinding[]>([
  ]);

  function onChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setFormStepperBindings(bindings)
    setFormStepProps(props)
  }

  const [step, setStep] = useState(-1);

  return (
    <>
      <h1>Form Stepper</h1>
      <p>
        Form steppers provide a visual representation of a user's journey through a series of steps.
      </p>
      <Sandbox
        properties={formStepperBindings}
        fullWidth={true}
        onChange={onChange}
      >
        <CodeSnippet lang="typescript" tags="angular" allowCopy={true} code={`
          export class SomeComponent {
            step = -1;
            updateStep(event: Event) {
              this.step = (event as CustomEvent).detail.step;
            }
          }
        `} />

        <CodeSnippet lang="typescript" tags="react" allowCopy={true} code={`
          const [step, setStep] = useState(-1); 
        `} />

        <GoAFormStepper testId="foo" onChange={(step) => setStep(step)} {...formStepProps}>
          <GoAFormStep text="Personal details" />
          <GoAFormStep text="Employment history" />
          <GoAFormStep text="References" />
          <GoAFormStep text="Review" />
        </GoAFormStepper>
        <GoAPages current={step} mb="3xl">
          <div>Page 1 content</div>
          <div>Page 2 content</div>
          <div>Page 3 content</div>
          <div>Page 4 content</div>
        </GoAPages>
      </Sandbox>
    </>
  )

}


