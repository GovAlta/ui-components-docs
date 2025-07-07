import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabButton,
  GoabFormStep,
  GoabFormStepper,
  GoabPages,
  GoabSkeleton,
  GoabSpacer
} from "@abgov/react-components";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { GoabFormStepStatus } from "@abgov/ui-components-common";

export const SetTheStatusOfStepOnAFormStepper = () => {
  const { version } = useContext(LanguageVersionContext);
  const [statusStep, setStatusStep] = useState(-1);
  const status: GoabFormStepStatus[] = ["complete", "incomplete", "not-started"];

  function setStatusPage(page: number) {
    if (page < 1 || page > 4) return;
    setStatusStep(page);
  }
  return (
    <>
      <Sandbox
        fullWidth
        skipRender
        allow={["div"]}
        note={
          "The status of each step can be configured to \"complete\", \"incomplete\" or \"not-started\" using the status property."
        }>
        {/*Angular code*/}
        {version === "old" && (
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
                export class SomeComponent {
                  step = -1;
                  // controlled by the user based on form completion
                  status = ["complete", "complete", "incomplete", "not-started"]
                  updateStep(event: Event) {
                    this.step = (event as CustomEvent).detail.step;
                  }
                  setPage(page: number) {
                    if (page < 1 || page > 4) return;
                    this.step = page
                  }
                }
              `}
          />
        )}
        {version === "new" && (
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
                export class SomeComponent {
                  step = -1;
                  // controlled by the user based on form completion
                  status: GoabFormStepStatus[] = ["complete", "complete", "incomplete", "not-started"]
                  updateStep(event: GoabFormStepperOnChangeDetail) {
                    this.step = event.step;
                  }
                  setPage(page: number) {
                    if (page < 1 || page > 4) return;
                    this.step = page
                  }
                }
              `}
          />
        )}
        {version === "old" && (
          <CodeSnippet
            lang="html"
            tags="angular"
            allowCopy={true}
            code={`
                <goa-form-stepper ml="s" mr="s" [step]="step" (_change)="updateStep($event)">
                  <goa-form-step text="Personal details" [status]="status[0]"></goa-form-step>
                  <goa-form-step text="Employment history" [status]="status[1]"></goa-form-step>
                  <goa-form-step text="References" [status]="status[2]"></goa-form-step>
                  <goa-form-step text="Review" [status]="status[3]"></goa-form-step>
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
          />
        )}
        {version === "new" && (
          <CodeSnippet
            lang="html"
            tags="angular"
            allowCopy={true}
            code={`
                <goab-form-stepper ml="s" mr="s" [step]="step" (onChange)="updateStep($event)">
                  <goab-form-step text="Personal details" [status]="status[0]"></goab-form-step>
                  <goab-form-step text="Employment history" [status]="status[1]"></goab-form-step>
                  <goab-form-step text="References" [status]="status[2]"></goab-form-step>
                  <goab-form-step text="Review" [status]="status[3]"></goab-form-step>
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
          />
        )}

        {version === "old" && (
          <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
                const [step, setStep] = useState<number>(-1);
                // controlled by the user based on form completion
                const [status, setStatus] = useState<GoAFormStepStatusType[]>([
                        "complete",
                        "complete",
                        "incomplete",
                        "not-started"
                    ])
                function setPage(page) {
                  if (page < 1 || page > 4) return;
                  setStep(page);
                }
                return (
                  <>
                    <GoAFormStepper step={step} onChange={(step) => setStep(step)}>
                      <GoAFormStep text="Personal details" status={status[0]} />
                      <GoAFormStep text="Employment history" status={status[1]} />
                      <GoAFormStep text="References" status={status[2]} />
                      <GoAFormStep text="Review" status={status[3]} />
                    </GoAFormStepper>
                    <GoAPages current={step} mb="xl">
                      <div><!-- Page 1 content --></div>
                      <div><!-- Page 2 content --></div>
                      <div><!-- Page 3 content --></div>
                      <div><!-- Page 4 content --></div>
                    </GoAPages>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <GoAButton type="secondary" onClick={() => setPage(step - 1)}>Previous</GoAButton>
                      <GoAButton type="primary" onClick={() => setPage(step + 1)}>Next</GoAButton>
                    </div>
                  </>
                )
              `}
          />
        )}

        {version === "new" && (
          <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
                const [step, setStep] = useState<number>(-1);
                // controlled by the user based on form completion
                const status: GoabFormStepStatus[] = [
                  "complete",
                  "complete",
                  "incomplete",
                  "not-started"
                ]
                function setPage(page: number) {
                  if (page < 1 || page > 4) return;
                  setStep(page);
                }
              `}
          />
        )}

        {version === "new" && (
          <CodeSnippet
            lang="html"
            tags="react"
            allowCopy={true}
            code={`
                <GoabFormStepper step={step} onChange={(event) => setStep(event.step)}>
                  <GoabFormStep text="Personal details" status={status[0]} />
                  <GoabFormStep text="Employment history" status={status[1]} />
                  <GoabFormStep text="References" status={status[2]} />
                  <GoabFormStep text="Review" status={status[3]} />
                </GoabFormStepper>
                <GoabPages current={step} mb="3xl" mt="xl" mr="xl" ml="xl">
                  <div>{/*Page 1 content*/}</div>
                  <div>{/*Page 2 content*/}</div>
                  <div>{/*Page 3 content*/}</div>
                  <div>{/*Page 4 content*/}</div>
                </GoabPages>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <GoabButton type="secondary" onClick={() => setPage(step - 1)}>Previous</GoabButton>
                  <GoabButton type="primary" onClick={() => setPage(step + 1)}>Next</GoabButton>
                </div>
              `}
          />
        )}

        <GoabFormStepper step={statusStep} onChange={event => setStatusStep(+event.step)}>
          <GoabFormStep text="Personal details" status={status[0]} />
          <GoabFormStep text="Employment history" status={status[1]} />
          <GoabFormStep text="References" status={status[2]} />
          <GoabFormStep text="Review" status={status[3]} />
        </GoabFormStepper>
        <GoabPages current={statusStep} mb="3xl" mt="xl" mr="xl" ml="xl">
          <div>
            <GoabSkeleton type="article" />
          </div>
          <div>
            <GoabSkeleton type="header" size={"2"} />
            <GoabSkeleton type="text" />
            <GoabSkeleton type="header" size={"2"} />
            <GoabSkeleton type="text" />
          </div>
          <div>
            <GoabSkeleton type="text" />
            <GoabSpacer vSpacing="m" />
            <GoabSkeleton type="text" />
          </div>
          <div>
            <GoabSkeleton type="header" size={"2"} />
            <GoabSkeleton type="text" />
            <GoabSpacer vSpacing="m" />
            <GoabSkeleton type="text" />
          </div>
        </GoabPages>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <GoabButton type="secondary" onClick={() => setStatusPage(statusStep - 1)}>
            Previous
          </GoabButton>
          <GoabButton type="primary" onClick={() => setStatusPage(statusStep + 1)}>
            Next
          </GoabButton>
        </div>
      </Sandbox>
    </>
  );
};

export default SetTheStatusOfStepOnAFormStepper;