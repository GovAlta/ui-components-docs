import { useContext, useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoabBadge, GoabFormItem, GoabInput, GoabTab, GoabTabs } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import {
  LegacyMarginProperty,
  LegacyTestIdProperties, MarginProperty,
  TestIdProperty
} from "@components/component-properties/common-properties.ts";
import { FormItemExamples } from "@examples/form-item/FormItemExamples.tsx";

export default function FormItemPage() {
  const {version} = useContext(LanguageVersionContext);
  const [formItemProps, setFormItemProps] = useState({
    label: "First name",
  });

  const [formItemBindings, setFormItemBindings] = useState<ComponentBinding[]>([
    {
      label: "Label",
      type: "string",
      value: "First name",
      name: "label",
    },
    {
      label: "Label Size",
      type: "list",
      options: ["", "regular", "large"],
      value: "",
      defaultValue: "regular",
      name: "labelSize",
    },
    {
      label: "Help Text",
      name: "helpText",
      type: "string",
      value: "",
    },
    {
      label: "Error",
      type: "string",
      name: "error",
      value: "",
    },
    {
      label: "Requirement",
      type: "list",
      name: "requirement",
      options: ["", "optional", "required"],
      value: "",
    },
    {
      label: "Value",
      type: "string",
      name: "value",
      value: "",
      hidden: true,
      dynamic: true,
    },
    {
      label: "Max Width",
      type: "string",
      name: "maxWidth",
      requirement: "optional",
      value: "",
    },
  ]);
  const oldComponentProps: ComponentProperty[] = [
    {
      name: "label",
      type: "string",
      description: "Creates a label for a form item.",
    },
    {
      name: "labelSize",
      lang: "react",
      type: "regular | large",
      defaultValue: "regular",
      description: "Sets a regular or large label size.",
    },
    {
      name: "labelsize",
      lang: "angular",
      type: "regular | large",
      defaultValue: "regular",
      description: "Sets a regular or large label size.",
    },
    {
      name: "helpText",
      type: "string | ReactNode",
      lang: "react",
      description: "Help text displayed under the form field to provide additional explanation.",
    },
    {
      name: "helptext",
      type: "string | slot",
      lang: "angular",
      description: "Help text displayed under the form field to provide additional explanation.",
    },
    {
      name: "error",
      type: "string | ReactNode",
      lang: "react",
      description: "Error text displayed under the form field. Leave blank to indicate valid field.",
    },
    {
      name: "error",
      type: "string | slot",
      lang: "angular",
      description: "Error text displayed under the form field. Leave blank to indicate valid field.",
    },
    {
      name: "requirement",
      type: "optional | required",
      description: "Marks the field with an optional or required label.",
    },
    {
      name: "id",
      type: "string",
      description:
        "The id of the label, necessary for field's aria-labelledby attribute for the screen reader.",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the form item.",
      lang: "react",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Sets the maximum width of the form item.",
      lang: "angular",
    },
    ...LegacyTestIdProperties,
    LegacyMarginProperty,
  ];
  const componentProps: ComponentProperty[] = [
    {
      name: "label",
      type: "string",
      description: "Creates a label for a form item.",
    },
    {
      name: "labelSize",
      type: "GoabFormItemLabelSize (regular | large)",
      defaultValue: "regular",
      description: "Sets a regular or large label size.",
    },
    {
      name: "helpText",
      type: "string | ReactNode",
      lang: "react",
      description: "Help text displayed under the form field to provide additional explanation.",
    },
    {
      name: "helpText",
      type: "string",
      lang: "angular",
      description: "Help text displayed under the form field to provide additional explanation.",
    },
    {
      name: "error",
      type: "string | ReactNode",
      lang: "react",
      description: "Error text displayed under the form field. Leave blank to indicate valid field.",
    },
    {
      name: "error",
      type: "string",
      lang: "angular",
      description: "Error text displayed under the form field. Leave blank to indicate valid field.",
    },
    {
      name: "requirement",
      type: "GoabFormItemRequirement (optional | required)",
      description: "Marks the field with an optional or required label.",
    },
    {
      name: "id",
      type: "string",
      description:
        "The id of the label, necessary for field's aria-labelledby attribute for the screen reader.",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the form item."
    },
    TestIdProperty,
    MarginProperty,
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setFormItemBindings(bindings);
    setFormItemProps(props as { label: string;[key: string]: unknown });
  }

  const noop = () => { };

  return (
    <>
      <ComponentHeader
        name="Form Item"
        category={Category.INPUTS_AND_ACTIONS}
        description="Wraps an input control with a text label, requirement label, helper text, and error text."
        relatedComponents={[
          { link: "/components/checkbox", name: "Checkbox" },
          { link: "/components/dropdown", name: "Dropdown" },
          { link: "/components/Radio", name: "Radio" },
          { link: "/components/text-area", name: "Text area" },
          { link: "/components/text-field", name: "Text field" },
        ]}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>
            <Sandbox
              properties={formItemBindings}
              onChange={onSandboxChange}
              flags={version === "old" ? ["reactive"] : ["reactive", "template-driven", "event"]}
              allow={["form"]}>
              {/* ************** Angular code snippets ****************/}

              {/*Old versions*/}
              {version === "old" && (
                <CodeSnippet
                  lang="typescript"
                  tags={["angular"]}
                  allowCopy={true}
                  code={`
                // non-reactive code
                export class SomeComponent {
                  value = "";
                  
                  onChange(event: Event) {
                    console.log("Event ", event);
                    console.log("Value ", (event.target as HTMLInputElement).value);
                  }
                }
              `}
                />
              )}

              {version === "old" && (
                <CodeSnippet
                  lang="typescript"
                  tags={["angular", "reactive"]}
                  allowCopy={true}
                  code={`
                // reactive code
                export class SomeComponent {
                  itemFormCtrl = new FormControl("");
                }
              `}
                />
              )}

              {/*New version*/}
              {version === "new" && (
                <CodeSnippet
                  lang="typescript"
                  tags={["angular"]}
                  allowCopy={true}
                  code={`
                // non-reactive code
                export class SomeComponent {
                  value = "";
                  
                 inputOnChange(event: GoabInputOnChangeDetail) {
                  this.value = event.value;
                  }
                }
              `}
                />
              )}

              {version === "new" && (
                <CodeSnippet
                  lang="typescript"
                  tags={["angular", "reactive"]}
                  allowCopy={true}
                  code={`
                // reactive code
                export class SomeComponent {
                  form!: FormGroup;
                  constructor(private fb: FormBuilder) {
                    this.form = this.fb.group({
                      item: [""]
                    });
                  }
                }
              `}
                />
              )}

              {version === "new" && (
                <CodeSnippet
                  lang="typescript"
                  tags={["angular", "template-driven"]}
                  allowCopy={true}
                  code={`
                //template-driven code
                export class SomeComponent {
                  item = "";
                  
                 inputOnChange(event: GoabInputOnChangeDetail) {
                  this.item = event.value;
                 }
                }
              `}
                />
              )}

              {/* ************** React code *****************/}

              {version === "old" && (
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                const [value, setValue] = useState<string>("");
              
                inputOnChange(name: string, value: string) {
                  setValue(value);
                }
              `}
                />
              )}

              {version === "new" && (
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                const [value, setValue] = useState<string>("");

                const inputOnChange = (event: GoabInputOnChangeDetail) => {
                  setValue(event.value);
                }
              `}
                />
              )}
              <form>
                <GoabFormItem {...formItemProps}>
                  <GoabInput onChange={noop} value="" name="item" />
                </GoabFormItem>
              </form>
            </Sandbox>

            <ComponentProperties properties={componentProps} oldProperties={oldComponentProps} />
            <FormItemExamples />
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
