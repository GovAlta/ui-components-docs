import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabButton,
  GoabFormStep,
  GoabFormStepper,
  GoabPages,
  GoabSkeleton,
  GoabSpacer
} from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const FormStepperControlledNavigationExample = () => {
  const {version} = useContext(LanguageVersionContext);

  const [controlledStep, setControlledStep] = useState(1);

  function setControlledPage(page: number) {
    if (page < 1 || page > 4) return;
    setControlledStep(page);
  }

  return (
    <>
      <p>
        The user needs to partially or completely finish a step to be able to move forward to
        the next step. In this case:</p>
        <ul>
          <li>A step that is “Not started” will not be clickable.</li>
          <li>A user cannot use the stepper to navigate to another page.</li>
          <li>
            Clicking the Active step when you are on that step will do nothing. (no page
            refresh).
          </li>
        </ul>
      <p>To use the controlled type you must set a step value ≥ 1</p>

      <Sandbox fullWidth skipRender allow={["div"]} variableNames={["step"]}>
        {/*Must skipRender because we must illustrate the Prev and Next button click logic which cannot be rendered by sandbox*/}
        {/*Angular code*/}
        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                export class SomeComponent {
                  step = 1;  // set to first step
                  updateStep(event: Event) {
                    this.step = (event as CustomEvent).detail.step;
                  }
                  setPage(page: number) {
                    if (page < 1 || page > 4) return;
                    this.step = page
                  }
                }
              `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                export class SomeComponent {
                  step = 1;  // set to first step
                  updateStep(event: GoabFormStepperOnChangeDetail) {
                    this.step = event.step;
                  }
                  setPage(page: number) {
                    if (page < 1 || page > 4) return;
                    this.step = page
                  }
                }
              `}
        />}

        {version === "old" && <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
                <goa-form-stepper ml="s" mr="s" [step]="step" (_change)="updateStep($event)">
                  <goa-form-step text="Personal details"></goa-form-step>
                  <goa-form-step text="Employment history"></goa-form-step>
                  <goa-form-step text="References"></goa-form-step>
                  <goa-form-step text="Review"></goa-form-step>
                </goa-form-stepper>
                <goa-pages [current]="step">
                  <div><!-- Page 1 content --></div>
                  <div><!-- Page 2 content --></div>
                  <div><!-- Page 3 content --></div>
                  <div><!-- Page 4 content --></div>
                </goa-pages>
                <div style="display: flex; justify-content: space-between">
                  <goa-button (_click)="setPage(step-1)" type="secondary">Previous</goa-button>
                  <goa-button (_click)="setPage(step+1)" type="primary">Next</goa-button>
                </div>
              `}
        />}

        {version === "new" && <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
                <goab-form-stepper ml="s" mr="s" [step]="step" (onChange)="updateStep($event)">
                  <goab-form-step text="Personal details"></goab-form-step>
                  <goab-form-step text="Employment history"></goab-form-step>
                  <goab-form-step text="References"></goab-form-step>
                  <goab-form-step text="Review"></goab-form-step>
                </goab-form-stepper>
                <goab-pages [current]="step">
                  <div><!-- Page 1 content --></div>
                  <div><!-- Page 2 content --></div>
                  <div><!-- Page 3 content --></div>
                  <div><!-- Page 4 content --></div>
                </goab-pages>
                <div style="display: flex; justify-content: space-between">
                  <goab-button (onClick)="setPage(step-1)" type="secondary">Previous</goab-button>
                  <goab-button (onClick)="setPage(step+1)" type="primary">Next</goab-button>
                </div>
              `}
        />}

        {/*React code*/}
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                const [step, setStep] = useState<number>(1); // set to first step
                function setPage(page: number) {
                  if (page < 1 || page > 4) return;
                  setStep(page);
                }
              `}
        />
        {version === "old" && <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`   <GoAFormStepper step={step} onChange={(step) => setStep(step)}>
                      <GoAFormStep text="Personal details" />
                      <GoAFormStep text="Employment history" />
                      <GoAFormStep text="References" />
                      <GoAFormStep text="Review" />
                    </GoAFormStepper>
                    <GoAPages current={step} mb="3xl">
                      <div><!-- Page 1 content --></div>
                      <div><!-- Page 2 content --></div>
                      <div><!-- Page 3 content --></div>
                      <div><!-- Page 4 content --></div>
                    </GoAPages>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <GoAButton type="secondary" onClick={() => setPage(step - 1)}>Previous</GoAButton>
                      <GoAButton type="primary" onClick={() => setPage(step + 1)}>Next</GoAButton>
                    </div>
              `}
        />}

        {version === "new" && <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
           <GoabFormStepper step={step} onChange={(event) =>  setStep(event.step)}>
                <GoabFormStep text="Personal details" />
                <GoabFormStep text="Employment history" />
                <GoabFormStep text="References" />
                <GoabFormStep text="Review" />
            </GoabFormStepper>
            <GoabPages current={step} mb="3xl" mt="xl" mr="xl" ml="xl">
                <div>
                    {/*Page 1 content*/}
                </div>
                <div>{/* Page 2 content */}</div>
                <div>{/* Page 3 content */}</div>
                <div>{/* Page 4 content */}</div>
            </GoabPages>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <GoabButton type="secondary" onClick={() => setPage(step - 1)}>Previous</GoabButton>
                <GoabButton type="primary" onClick={() => setPage(step + 1)}>Next</GoabButton>
            </div>
              `}
        />}

        <GoabFormStepper step={controlledStep} onChange={(event) => setControlledStep(event.step)}>
          <GoabFormStep text="Personal details" />
          <GoabFormStep text="Employment history" />
          <GoabFormStep text="References" />
          <GoabFormStep text="Review" />
        </GoabFormStepper>
        <GoabPages current={controlledStep} mb="3xl" mt="xl" mr="xl" ml="xl">
          <div>
            <GoabSkeleton type="article" />
          </div>
          <div>
            <GoabSkeleton type="header" size={'2'} />
            <GoabSkeleton type="text" />
            <GoabSkeleton type="header" size={'2'} />
            <GoabSkeleton type="text" />
          </div>
          <div>
            <GoabSkeleton type="text" />
            <GoabSpacer vSpacing="m" />
            <GoabSkeleton type="text" />
          </div>
          <div>
            <GoabSkeleton type="header" size={'2'} />
            <GoabSkeleton type="text" />
            <GoabSpacer vSpacing="m" />
            <GoabSkeleton type="text" />
          </div>
        </GoabPages>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <GoabButton type="secondary" onClick={() => setControlledPage(controlledStep - 1)}>
            Previous
          </GoabButton>
          <GoabButton type="primary" onClick={() => setControlledPage(controlledStep + 1)}>
            Next
          </GoabButton>
        </div>
      </Sandbox>
    </>
  )
}
