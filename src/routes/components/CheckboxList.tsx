import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoabBadge,
  GoabCheckboxList,
  GoabCheckbox,
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { useState, useContext } from "react";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";
import { ExamplesEmpty } from "@components/empty-states/examples-empty/ExamplesEmpty.tsx";
import {
  MarginProperty,
  TestIdProperty,
} from "@components/component-properties/common-properties.ts";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { OldComponentBanner } from "@components/old-component-banner/OldComponentBanner.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";

// Page metadata
const componentName = "Checkbox list";
const description = "A multiple selection input.";
const category = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  { link: "/components/checkbox", name: "Checkbox" },
  { link: "/components/radio", name: "Radio" },
  { link: "/components/dropdown", name: "Dropdown" },
  { link: "/components/form-item", name: "Form item" },
];
const FIGMA_LINK = ""; // Provide Figma link when available

export default function CheckboxListPage() {
  const { version, language } = useContext(LanguageVersionContext);

  // Internal selection state managed by individual checkboxes only for demo; list is uncontrolled here
  const [bindings, setBindings] = useState<ComponentBinding[]>([
    { label: "Name", type: "string", name: "name", value: "transport" },
    { label: "Disabled", type: "boolean", name: "disabled", value: false },
    { label: "Error", type: "boolean", name: "error", value: false },
    { label: "Max Width", type: "string", name: "maxWidth", value: "" },
  ]);

  function onSandboxChange(updatedBindings: ComponentBinding[]) {
    setBindings(updatedBindings);
    // value is controlled externally; props.value is not used directly here
  }

  const componentProperties: ComponentProperty[] = [
    {
      name: "name",
      type: "string",
      required: true,
      description: "Unique name to identify the list group.",
    },
    { name: "value", type: "string[]", description: "Array of selected checkbox item values." },
    { name: "disabled", type: "boolean", description: "Disables the entire checkbox list." },
    { name: "error", type: "boolean", description: "Shows an error state for the list." },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the list container.",
    },
    {
      name: "onChange",
      type: "(detail: GoabCheckboxListOnChangeDetail) => void",
      description: "Callback when any checkbox selection changes.",
    },
    TestIdProperty,
    MarginProperty,
  ];

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Checkbox list"
      />

      {version === "old" && (
        <OldComponentBanner componentName={componentName} language={language} />
      )}

      {version === "new" && (
        <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
          <GoabTabs initialTab={1}>
            <GoabTab heading="Code playground">
              <h2 id="component" style={{ display: "none" }}>
                Playground
              </h2>
              <Sandbox
                skipRender
                properties={bindings}
                onChange={onSandboxChange}
                flags={["reactive", "template-driven"]}>
                {/* ================================================================== */}
                {/* REACT SECTION */}
                {/* ================================================================== */}
                {version === "new" && (
                  <CodeSnippet
                    lang="typescript"
                    tags="react"
                    allowCopy={true}
                    code={`
                          const [basicSelection, setBasicSelection] = useState<string[]>([]);

                          function checkboxListOnChange(details: GoabCheckboxListOnChangeDetail) {
                            console.log(details);
                            setBasicSelection(details.value); 
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
                    <GoabCheckboxList 
                      name="basic"
                      value={basicSelection}
                      onChange={(e) => checkboxListOnChange(e)}
                    >
                      <GoabCheckbox name="car" text="Car" value="Car" />
                      <GoabCheckbox name="bike" text="Bike" value="Bike" />
                      <GoabCheckbox name="bus" text="Bus" value="Bus" />
                    </GoabCheckboxList>
                  `}
                  />
                )}
                {/* ================================================================== */}

                {/* ================================================================== */}
                {/* ANGULAR SECTION (Template) */}
                {/* ================================================================== */}
                {version === "new" && (
                  <CodeSnippet
                    lang="typescript"
                    tags={["angular", "template-driven"]}
                    allowCopy={true}
                    code={`
                      export class SomeComponent {
                        basicSelection: string[] = [];

                        checkboxListOnChange(event: GoabCheckboxListOnChangeDetail) {
                          console.log(event);
                          this.basicSelection = event.value;
                        }
                      }
                    `}
                  />
                )}

                {version === "new" && (
                  <CodeSnippet
                    lang="html"
                    tags={["angular", "template-driven"]}
                    allowCopy={true}
                    code={`
                    <goab-checkbox-list 
                      name="basic"
                      [value]="basicSelection"
                      (onChange)="checkboxListOnChange($event)"
                    >
                      <goab-checkbox name="car" text="Car" value="Car" ></goab-checkbox>
                      <goab-checkbox name="bike" text="Bike" value="Bike" ></goab-checkbox>
                      <goab-checkbox name="bus" text="Bus" value="Bus" ></goab-checkbox>
                    </goab-checkbox-list>
                  `}
                  />
                )}
                {/* ================================================================== */}

                {/* ================================================================== */}
                {/* ANGULAR SECTION (Reactive) */}
                {/* ================================================================== */}
                {version === "new" && (
                  <CodeSnippet
                    lang="typescript"
                    tags={["angular", "reactive"]}
                    allowCopy={true}
                    code={`
                      export class SomeComponent {
                        form!: FormGroup;
                        
                        constructor(private fb: FormBuilder) {
                          this.form = this.fb.group({
                            transportation: this.fb.control<string[] | null>([]),
                          });
                        }
                      }
                    `}
                  />
                )}

                {version === "new" && (
                  <CodeSnippet
                    lang="html"
                    tags={["angular", "reactive"]}
                    allowCopy={true}
                    code={`
                      <form [formGroup]="form">
                        <goab-checkbox-list name="basic" formControlName="transportation">
                          <goab-checkbox name="car" text="Car" value="Car" ></goab-checkbox>
                          <goab-checkbox name="bike" text="Bike" value="Bike" ></goab-checkbox>
                          <goab-checkbox name="bus" text="Bus" value="Bus" ></goab-checkbox>
                        </goab-checkbox-list>
                      </form>
                  `}
                  />
                )}
                {/* ================================================================== */}

                <GoabCheckboxList
                  name={bindings.find(b => b.name === "name")?.value as string}
                  disabled={bindings.find(b => b.name === "disabled")?.value as boolean}
                  error={bindings.find(b => b.name === "error")?.value as boolean}
                  maxWidth={
                    (bindings.find(b => b.name === "maxWidth")?.value as string) || undefined
                  }>
                  <GoabCheckbox name="car" text="Car" value="car" />
                  <GoabCheckbox name="bike" text="Bike" value="bike" />
                  <GoabCheckbox name="bus" text="Bus" value="bus" />
                </GoabCheckboxList>
              </Sandbox>
              <ComponentProperties properties={componentProperties} />
            </GoabTab>
            <GoabTab
              heading={
                <>
                  <>Examples</>
                  <GoabBadge type="information" content="0" />
                </>
              }>
              <ExamplesEmpty />
            </GoabTab>
            <GoabTab heading="Design">
              <DesignEmpty figmaLink={FIGMA_LINK} />
            </GoabTab>
            <GoabTab heading="Accessibility">
              <AccessibilityEmpty figmaLink={FIGMA_LINK} />
            </GoabTab>
          </GoabTabs>
        </ComponentContent>
      )}
    </>
  );
}
