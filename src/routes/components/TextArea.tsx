import { useContext, useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoabBadge, GoabFormItem, GoabTab, GoabTabs, GoabTextarea } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabTextAreaOnChangeDetail } from "@abgov/ui-components-common";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import {
  LegacyMarginProperty,
  MarginProperty,
  TestIdProperty,
} from "@components/component-properties/common-properties.ts";
import { TextAreaExamples } from "@examples/textarea/TextAreaExamples.tsx";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

// == Page props ==

const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=133-186";
const componentName = "Text area";
const description = "A multi-line field where users can input and edit text.";
const category = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  { link: "/components/form-item", name: "Form item" },
  { link: "/components/input", name: "Input" },
];

type CastingType = {
  name: string;
  value: string;
  onChange: (event: GoabTextAreaOnChangeDetail) => void;
  [key: string]: unknown;
};

export default function TextAreaPage() {
  const { version } = useContext(LanguageVersionContext);
  const [componentProps, setComponentProps] = useState<CastingType>({
    name: "item",
    value: "",
    onChange: () => {},
  });
  const [textAreaBindings, setTextAreaBindings] = useState<ComponentBinding[]>([
    {
      label: "Rows",
      name: "rows",
      type: "number",
    },
    {
      label: "Placeholder",
      type: "string",
      name: "placeholder",
      value: "",
    },
    {
      label: "Disabled",
      name: "disabled",
      type: "boolean",
      value: false,
    },
    {
      label: "Error",
      name: "error",
      type: "boolean",
      value: false,
    },
    {
      label: "ARIA label",
      name: "ariaLabel",
      type: "string",
      value: "",
    },
    {
      label: "Count by",
      name: "countBy",
      type: "dropdown",
      options: ["", "character", "word"],
      value: "",
    },
    {
      label: "Max count",
      name: "maxCount",
      type: "number",
    },
    {
      name: "value",
      type: "string",
      value: "",
      dynamic: true,
      hidden: true,
      label: "Value",
    },
  ]);
  const { formItemBindings, formItemProps, onFormItemChange } = useSandboxFormItem({
    label: "Basic",
  });

  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "name",
      lang: "angular",
      type: "string",
      required: true,
      description: "Name of the input value that is received in the _change event",
    },
    {
      name: "name",
      lang: "react",
      type: "string",
      required: true,
      description: "Name of the input value that is received in the onChange event",
    },
    {
      name: "value",
      lang: "react",
      type: "string",
      required: true,
      description: "Bound to value",
    },
    {
      name: "value",
      lang: "angular",
      type: "string",
      description: "Bound to value",
    },
    {
      name: "placeholder",
      type: "string",
      description: "Text displayed within the input when no value is set.",
    },
    {
      name: "rows",
      type: "number",
      description: "Set the number of rows",
      defaultValue: "3",
    },
    {
      name: "width",
      type: "string",
      description: "Width of the text area",
      defaultValue: "60ch",
    },
    {
      name: "error",
      type: "boolean",
      description: "Sets the input to an error state",
      defaultValue: "false",
    },
    {
      name: "readonly",
      lang: "angular",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the input to a read only state.",
    },
    {
      name: "readOnly",
      lang: "react",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the input to a read only state.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the input to a disabled state. Use [attr.disabled] with [formControl]",
    },
    {
      name: "ariaLabel",
      lang: "react",
      type: "string",
      description:
        "Defines how the text will be translated for the screen reader. If not specified it will fall back to the name.",
    },
    {
      name: "arialabel",
      lang: "angular",
      type: "string",
      description:
        "Defines how the text will be translated for the screen reader. If not specified it will fall back to the name.",
    },
    {
      name: "onChange",
      lang: "react",
      type: "(name: string, value: string[] | string | null) => void",
      required: true,
      description: "Callback function when textarea value is changed",
    },
    {
      name: "countby",
      lang: "angular",
      type: "character | word",
      required: false,
      description:
        "Counting interval for characters or words, specifying whether to count every character or word.",
    },
    {
      name: "maxcount",
      lang: "angular",
      type: "number",
      required: false,
      description: "Maximum number of characters or words allowed",
    },
    {
      name: "countBy",
      lang: "react",
      type: "character | word",
      required: false,
      description:
        "Counting interval for characters or words, specifying whether to count every character or word.",
    },
    {
      name: "maxCount",
      lang: "react",
      type: "number",
      required: false,
      description: "Maximum number of characters or words allowed",
    },
    {
      name: "onKeyPress",
      lang: "react",
      type: "(name: string, value: string | Date | number) => void",
      required: false,
      description: "Function invoked when a key is pressed",
    },
    {
      name: "_keyPress",
      lang: "angular",
      type: "() => void",
      required: false,
      description: "Function invoked when a key is pressed",
    },
    LegacyMarginProperty,
  ];
  const componentProperties: ComponentProperty[] = [
    {
      name: "name",
      type: "string",
      description: "Name of the input value that is received in the _change event",
    },
    {
      name: "value",
      type: "string",
      description: "Bound to value",
    },
    {
      name: "autoComplete",
      type: "string",
      description: "Specifies the autocomplete attribute for the textarea input.",
    },
    {
      name: "placeholder",
      type: "string",
      description: "Text displayed within the input when no value is set.",
    },
    {
      name: "id",
      type: "string",
      description: "Set the id of the textarea",
    },
    {
      name: "rows",
      type: "number",
      description: "Set the number of rows",
      defaultValue: "3",
    },
    {
      name: "width",
      type: "string",
      description: "Width of the text area",
      defaultValue: "60ch",
    },
    {
      name: "error",
      type: "boolean",
      description: "Sets the input to an error state",
      defaultValue: "false",
    },
    {
      name: "readOnly",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the input to a read only state.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the input to a disabled state. Use [attr.disabled] with [formControl]",
    },
    {
      name: "ariaLabel",
      type: "string",
      description:
        "Defines how the text will be translated for the screen reader. If not specified it will fall back to the name.",
    },
    {
      name: "countBy",
      type: "GoabTextAreaCountBy (character | word)",
      description:
        "Counting interval for characters or words, specifying whether to count every character or word.",
    },
    {
      name: "maxCount",
      type: "number",
      description: "Maximum number of characters or words allowed",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Maximum width of the text area",
    },
    TestIdProperty,
    {
      name: "onChange",
      type: "(event: GoabTextAreaOnChangeDetail) => void",
      description: "Callback function when textarea value is changed",
    },
    {
      name: "onKeyPress",
      type: "(event: GoabTextAreaOnKeyPressDetail) => void",
      description: "Function invoked when a key is pressed",
    },
    MarginProperty,
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setTextAreaBindings(bindings);
    setComponentProps(props as CastingType);
  }

  const noop = () => {};

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Text area"
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox
              properties={textAreaBindings}
              formItemProperties={formItemBindings}
              onChange={onSandboxChange}
              onChangeFormItemBindings={onFormItemChange}
              flags={version === "old" ? ["reactive"] : ["event", "reactive", "template-driven"]}
              allow={["form"]}
              fullWidth>
              {/*Angular code*/}
              {version === "old" && (
                <>
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
                </>
              )}

              {version === "new" && (
                <CodeSnippet
                  lang="typescript"
                  tags={["angular", "reactive"]}
                  allowCopy={true}
                  code={`
                // reactive code
                export class TextareaReactiveSandboxComponent {
                  form!: FormGroup;
                  constructor(private fb: FormBuilder) {
                    this.form = this.fb.group({
                      item: '',
                    });
                  }
                }
              `}
                />
              )}

              {version === "old" && (
                <CodeSnippet
                  lang="typescript"
                  tags="angular"
                  allowCopy={true}
                  code={`
                // non-reactive code
                export class SomeComponent {
                  value: string = "";
                  onChange(event: Event) {
                    // handle change
                    console.log((event as CustomEvent).detail.value);
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
                // non-reactive code
                export class SomeComponent {
                  value = '';
                  textareaOnChange(event: GoabTextAreaOnChangeDetail) {
                    // handle change
                    this.value = event.value;
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
                // non-reactive code
                export class SomeComponent {
                   item = "";
                   textareaOnChange(event: GoabTextAreaOnChangeDetail) {
                    // handle change
                    this.item = event.value;
                   }
                }
              `}
                />
              )}

              {/*React code*/}
              {version === "old" && (
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                const [value, setValue] = useState<string>("");
              
                function onChange(name: string, value: string) {
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
              
                function textareaOnChange(event: GoabTextAreaOnChangeDetail) {
                  setValue(event.value);
                }
            `}
                />
              )}
              <form>
                <GoabFormItem {...formItemProps}>
                  <GoabTextarea
                    {...componentProps}
                    width="60ch"
                    name="item"
                    value=""
                    onChange={noop}
                  />
                </GoabFormItem>
              </form>
            </Sandbox>

            <ComponentProperties
              properties={componentProperties}
              oldProperties={oldComponentProperties}
            />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="2" />
              </>
            }>
            <TextAreaExamples />
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
