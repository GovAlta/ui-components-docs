import {
  GoabBadge,
  GoabFormStepper,
  GoabPages,
  GoabTab,
  GoabTabs,
  GoabContainer,
  GoabFormStep,
  GoabFormStepperProps,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { useContext, useState } from "react";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import {
  LegacyMarginProperty,
  LegacyTestIdProperties,
  MarginProperty,
  TestIdProperty,
} from "@components/component-properties/common-properties.ts";
import { FormStepperExamples } from "@examples/form-stepper/FormStepperExamples.tsx";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=1014-6629";
const componentName = "Form Stepper";
const description = "Provides a visual representation of a form through a series of steps.";
const componentCategory = Category.STRUCTURE_AND_NAVIGATION;
const relatedComponents = [{ link: "/components/form-item", name: "Form item" }];
type ComponentPropsType = GoabFormStepperProps;

export default function FormStepperPage() {
  const { version } = useContext(LanguageVersionContext);
  const [formStepProps] = useState<ComponentPropsType>();

  const oldComponentProperties: ComponentProperty[] = [
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
    ...LegacyTestIdProperties,
    LegacyMarginProperty,
  ];
  const componentProperties: ComponentProperty[] = [
    {
      name: "step",
      type: "number",
      description:
        "The current step state value. Leaving it blank will allow any step to be accessed.",
    },
    {
      name: "onChange",
      type: "(event: GoabFormStepperOnChangeDetail) => void",
      description: "Event fired on page change.",
    },
    TestIdProperty,
    MarginProperty,
  ];

  const oldFormStepProperties: ComponentProperty[] = [
    {
      name: "text",
      type: "string",
      required: true,
      description: "Text naming or briefly describing the step.",
    },
    {
      name: "status",
      type: "complete | incomplete | not-started",
      description: "The status of the step.",
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
      type: "GoabFormStepStatus (complete | incomplete | not-started)",
      description: "The status of the step.",
    },
  ];

  const [step, setStep] = useState(-1);

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={componentCategory}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Form Stepper"
      />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            {/*Must use Container because Form Stepper cannot be rendered correctly inside sandbox*/}
            <GoabContainer mt="m" mb="none">
              <div style={{ padding: "40px" }}>
                <GoabFormStepper
                  testId="foo"
                  onChange={event => setStep(+event.step)}
                  {...formStepProps}>
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

            {/*Angular code*/}
            {version === "old" && (
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
            )}
            {version === "new" && (
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                    export class SomeComponent {
                    step = -1;

                    onChange(event: GoabFormStepperOnChangeDetail) {
                      console.log("onChange event ", event);
                      this.step = event.step;
                    }
                  }`}
              />
            )}

            {version === "old" && (
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
            )}

            {version === "new" && (
              <CodeSnippet
                lang="html"
                tags="angular"
                allowCopy={true}
                code={`
                    <goab-form-stepper testId="foo" [step]="step" (onChange)="onChange($event)">
                      <goab-form-step text="Personal details"></goab-form-step>
                      <goab-form-step text="Employment history"></goab-form-step>
                      <goab-form-step text="References"></goab-form-step>
                      <goab-form-step text="Review"></goab-form-step>
                    </goab-form-stepper>
                    <goab-pages [current]="step" mb="3xl">
                      <div>Page 1 content</div>
                      <div>Page 2 content</div>
                      <div>Page 3 content</div>
                      <div>Page 4 content</div>
                    </goab-pages>
              `}
              />
            )}

            {/*React code*/}
            <CodeSnippet
              lang="typescript"
              tags="react"
              allowCopy={true}
              code={`
                    const [step, setStep] = useState<number>(-1);
                  `}
            />
            {version === "old" && (
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
            )}

            {version === "new" && (
              <CodeSnippet
                lang="html"
                tags="react"
                allowCopy={true}
                code={`
                    <GoabFormStepper testId="foo" onChange={(event) => setStep(+event.step)}>
                      <GoabFormStep text="Personal details"></GoabFormStep>
                      <GoabFormStep text="Employment history"></GoabFormStep>
                      <GoabFormStep text="References"></GoabFormStep>
                      <GoabFormStep text="Review"></GoabFormStep>
                    </GoabFormStepper>
                    <GoabPages current={step} mb="3xl">
                      <div>Page 1 content</div>
                      <div>Page 2 content</div>
                      <div>Page 3 content</div>
                      <div>Page 4 content</div>
                    </GoabPages>
                  `}
              />
            )}

            <ComponentProperties
              heading="Stepper Properties"
              properties={componentProperties}
              oldProperties={oldComponentProperties}
            />
            <ComponentProperties
              heading="Step Properties"
              properties={formStepProperties}
              oldProperties={oldFormStepProperties}
            />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="2" />
              </>
            }>
            <FormStepperExamples />
          </GoabTab>

          <GoabTab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>

          <GoabTab heading="Accessibility">
            <AccessibilityEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
