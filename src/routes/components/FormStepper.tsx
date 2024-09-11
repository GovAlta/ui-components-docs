import {
  GoabBadge,
  GoabButton,
  GoabFormStepper,
  GoabFormStepperProps,
  GoabPages,
  GoabSkeleton,
  GoabSpacer,
  GoabTab,
  GoabTabs,
  GoabContainer,
  GoabFormStep,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { LanguageContext, Sandbox } from "@components/sandbox";
import { useContext, useState } from "react";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabFormStepStatus } from "@abgov/ui-components-common";

const componentName = "Form Stepper";
const description = "Provides a visual representation of a form through a series of steps.";
const componentCategory = Category.STRUCTURE_AND_NAVIGATION;
const relatedComponents = [{ link: "/components/form-item", name: "Form item" }];
type ComponentPropsType = GoabFormStepperProps;


export default function FormStepperPage() {
  const language = useContext(LanguageContext);
  const [formStepProps] = useState<ComponentPropsType>();

  const componentProperties: ComponentProperty[] = [
    {
      name: "step",
      type: "number",
      description:
        "The current step state value. Leaving it blank will allow any step to be accessed.",
    },
    {
      name: "onChange",
      lang: "react",
      type: "(step: number) => void",
      description: "Event fired on page change.",
    },
    {
      name: "_change",
      lang: "angular",
      type: "CustomEvent({detail: {step: number}})",
      description: "Event fired on page change..",
    },
    {
      name: "testId",
      type: "string",
      lang: "react",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "testid",
      type: "string",
      lang: "angular",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  const formStepProperties: ComponentProperty[] = [
    {
      name: "text",
      type: "string",
      required: true,
      description: "Text naming or briefly describing the step.",
    },
    {
      name: "status",
      type: "complete | incomplete",
      description: "The status of the step.",
    },
  ];

  const [step, setStep] = useState(-1);
  const [controlledStep, setControlledStep] = useState(1);

  function setControlledPage(page: number) {
    if (page < 1 || page > 4) return;
    setControlledStep(page);
  }

  const [statusStep, setStatusStep] = useState(-1);
  const status: GoabFormStepStatus[] = ["complete", "complete", "incomplete", "incomplete"];

  function setStatusPage(page: number) {
    if (page < 1 || page > 4) return;
    setStatusStep(page);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={componentCategory}
        description={description}
        relatedComponents={relatedComponents}
      />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>
            <GoabContainer mt="m" mb="none">
              <div style={{ padding: "40px" }}>
                <GoabFormStepper testId="foo" onChange={(event) => setStep(+event.step)} {...formStepProps}>
                  <GoabFormStep text="Personal details" />
                  <GoabFormStep text="Employment history" />
                  <GoabFormStep text="References" />
                  <GoabFormStep text="Review" />
                </GoabFormStepper>
                <GoabPages current={step} mb="3xl">
                  <div>Page 1 content</div>
                  <div>Page 2 content</div>
                  <div>Page 3 content</div>
                  <div>Page 4 content</div>
                </GoabPages>
              </div>
            </GoabContainer>
            {language === "angular" && (
              <>
                <CodeSnippet
                  lang="typescript"
                  tags="angular"
                  allowCopy={true}
                  code={`
                    export class SomeComponent {
                    step = -1;
                    
                    onChange(event: Event) {
                      this.step = (event as CustomEvent).detail.step;
                    }
                  }`}
                />
                <CodeSnippet
                  lang="html"
                  tags="angular"
                  allowCopy={true}
                  code={`
                    <goa-form-stepper testid="foo" [step]="step" (_change)="onChange($event)">
                      <goa-form-step text="Personal details"></goa-form-step>
                      <goa-form-step text="Employment history"></goa-form-step>
                      <goa-form-step text="References"></goa-form-step>
                      <goa-form-step text="Review"></goa-form-step>
                    </goa-form-stepper>
                    <goa-pages [current]="step" mb="3xl">
                      <div>Page 1 content</div>
                      <div>Page 2 content</div>
                      <div>Page 3 content</div>
                      <div>Page 4 content</div>
                    </goa-pages>
                  `}
                />
              </>
            )}
            {language === "react" && (
              <>
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                    const [step, setStep] = useState<number>(-1);
                  `}
                />
                <CodeSnippet
                  lang="html"
                  tags="react"
                  allowCopy={true}
                  code={`
                    <GoAFormStepper testId="foo" onChange={setStep}>
                      <GoAFormStep text="Personal details"></GoAFormStep>
                      <GoAFormStep text="Employment history"></GoAFormStep>
                      <GoAFormStep text="References"></GoAFormStep>
                      <GoAFormStep text="Review"></GoAFormStep>
                    </GoAFormStepper>
                    <GoAPages current={step} mb="3xl">
                      <div>Page 1 content</div>
                      <div>Page 2 content</div>
                      <div>Page 3 content</div>
                      <div>Page 4 content</div>
                    </GoAPages>
                  `}
                />
              </>
            )}
            {/*Component properties table*/}
            <ComponentProperties heading="Stepper Properties" properties={componentProperties} />
            <ComponentProperties heading="Step Properties" properties={formStepProperties} />

            {/* Examples*/}
            <h2 id="component-examples" className="hidden" aria-hidden="true">
              Examples
            </h2>
            {/*Example 1*/}
            <h3 id="component-example-controlled-navigation">Controlled Navigation</h3>
            <p>
              The user needs to partially or completely finish a step to be able to move forward to
              the next step. In this case:
              <ul>
                <li>A step that is “Not started” will not be clickable.</li>
                <li>A user cannot use the stepper to navigate to another page.</li>
                <li>
                  Clicking the Active step when you are on that step will do nothing. (no page
                  refresh).
                </li>
              </ul>
              To use the controlled type you must set a step value ≥ 1
            </p>
            <Sandbox fullWidth skipRender allow={["div"]}>
              <CodeSnippet
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
              />
              <CodeSnippet
                lang="typescript"
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
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                const [step, setStep] = useState(1); // set to first step
                function setPage(page) {
                  if (page < 1 || page > 4) return;
                  setStep(page);
                }
                return (
                  <>
                    <GoAFormStepper step={step} onChange={(step) => setStep(step)}>
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
                  </>
                ) 
              `}
              />

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

            {/*Example 2*/}
            <h3 id="component-example-step-status">Step status</h3>
            The status of each step can be configured to either “complete” or “incomplete” using the
            status property.

            <Sandbox fullWidth skipRender allow={["div"]}>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                export class SomeComponent {
                  step = -1;
                  // controlled by the user based on form completion
                  status = ["complete", "complete", "incomplete", "incomplete"]
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
              <CodeSnippet
                lang="typescript"
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
                        "incomplete"
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

              <GoabFormStepper step={statusStep} onChange={(event) => setStatusStep(+event.step)}>
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
                <GoabButton type="secondary" onClick={() => setStatusPage(statusStep - 1)}>
                  Previous
                </GoabButton>
                <GoabButton type="primary" onClick={() => setStatusPage(statusStep + 1)}>
                  Next
                </GoabButton>
              </div>
            </Sandbox>
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }>
            <p>Coming Soon</p>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
