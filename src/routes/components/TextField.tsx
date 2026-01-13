import { useContext, useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoabBadge,
  GoabFormItem,
  GoabInput,
  GoabInputProps,
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";
import ICONS from "./icons.json";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import TextFieldExamples from "@examples/text-field/TextFieldExamples";
import { GoabInputOnChangeDetail } from "@abgov/ui-components-common";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import {
  LegacyMarginProperty,
  LegacyTestIdProperties,
  MarginProperty,
  TestIdProperty,
} from "@components/component-properties/common-properties.ts";
import { omit } from "lodash";

const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=33054-34641";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

// == Page props ==
const componentName = "Input";
const description = "A single-line field where users can input and edit text.";
const category = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  { link: "/components/form-item", name: "Form item" },
  { link: "/components/text-area", name: "Text area" },
];

type ComponentPropsType = Omit<GoabInputProps, "onChange"> & {
  onChange?: (event: GoabInputOnChangeDetail) => void;
};

export default function TextFieldPage() {
  const { version } = useContext(LanguageVersionContext);
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    name: "item",
    value: "",
    width: "20ch",
  });
  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: [
        "",
        "text",
        "number",
        "password",
        "email",
        "search",
        "tel",
        "date",
        "datetime-local",
        "time",
        "url",
        "week",
      ],
      value: "",
      defaultValue: "text",
    },
    {
      label: "Placeholder",
      type: "string",
      name: "placeholder",
      value: "",
    },
    {
      label: "Leading Icon",
      type: "combobox",
      name: "leadingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
    {
      label: "Trailing Icon",
      type: "combobox",
      name: "trailingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
    {
      label: "Width",
      type: "string",
      name: "width",
      value: "20ch",
    },
    {
      label: "Max length",
      type: "number",
      name: "maxLength",
    },
    {
      label: "Text Align",
      type: "list",
      name: "textAlign",
      options: ["", "left", "right"],
      value: "",
      defaultValue: "left",
    },
    {
      label: "Disabled",
      type: "boolean",
      name: "disabled",
      value: false,
    },
    {
      label: "Error",
      type: "boolean",
      name: "error",
      value: false,
    },
    {
      label: "ARIA label",
      type: "string",
      value: "",
      name: "ariaLabel",
    },
    ...(version === "new" ? [{
      label: "Trailing icon ARIA label",
      type: "string" as const,
      value: "",
      name: "trailingIconAriaLabel",
    }] : []),
    {
      label: "Value",
      type: "string",
      name: "value",
      value: "",
      hidden: true,
      dynamic: true,
    },
  ]);
  const { formItemBindings, formItemProps, onFormItemChange } = useSandboxFormItem({
    label: "Basic",
  });
  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "text | number | password | email | search | tel | date | datetime-local | time | url | week",
      defaultValue: "text",
      description: "Sets the type of the input field.",
    },
    {
      name: "name",
      lang: "react",
      type: "string",
      required: true,
      description: "Name of input value that is received in the _change event.",
    },
    {
      name: "name",
      lang: "angular",
      type: "string",
      description: "Name of input value that is received in the _change event.",
    },
    {
      name: "value",
      lang: "react",
      type: "string",
      required: true,
      description: "Bound to value.",
    },
    {
      name: "value",
      lang: "angular",
      type: "string",
      description: "Bound to value.",
    },
    {
      name: "placeholder",
      type: "string",
      description: "Text displayed within the input when no value is set.",
    },
    {
      name: "leadingIcon",
      lang: "react",
      type: "GoAIconType",
      description: "Icon shown to the left of the text.",
    },
    {
      name: "leadingicon",
      lang: "angular",
      type: "GoAIconType",
      description: "Icon shown to the left of the text.",
    },
    {
      name: "trailingIcon",
      lang: "react",
      type: "GoAIconType",
      description: "Icon shown to the right of the text.",
    },
    {
      name: "trailingicon",
      lang: "angular",
      type: "GoAIconType",
      description: "Icon shown to the right of the text.",
    },

    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Disables this input. The input will not receive focus or events. Use [attr.disabled] with [formControl].",
    },
    {
      name: "handleTrailingIconClick",
      type: "boolean",
      defaultValue: "false",
      description:
        "Flag that will result in an icon button component being rendered instead of an icon.",
      lang: "react",
    },
    {
      name: "handletrailingiconclick",
      type: "boolean",
      defaultValue: "false",
      description:
        "Flag that will result in an icon button component being rendered instead of an icon.",
      lang: "angular",
    },
    {
      name: "focused",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the cursor focus to the input.",
    },
    {
      name: "readOnly",
      lang: "react",
      type: "boolean",
      description: "Makes the input readonly.",
      defaultValue: "false",
    },
    {
      name: "readonly",
      lang: "angular",
      type: "boolean",
      description: "Makes the input readonly.",
      defaultValue: "false",
    },
    {
      name: "error",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the input to an error state.",
    },
    {
      name: "width",
      type: "string",
      defaultValue: "30ch",
      description: "Sets the width of the text input area.",
    },
    {
      name: "min",
      type: "string|date",
      description:
        "A string value that supports any number, or an ISO 8601 format if using the date or datetime type.",
    },
    {
      name: "max",
      type: "string|date",
      description:
        "A string value that supports any number, or an ISO 8601 format if using the date or datetime type.",
    },
    {
      name: "step",
      type: "number",
      description: "How much a number or date should changed by.",
    },
    {
      name: "arialabel",
      type: "string",
      description:
        "Defines how the input will be translated for the screen reader. If not specified it will fall back to the name. If both arialabel and arialabelledby are specified, arialabelledby will be used.",
      lang: "angular",
    },
    {
      name: "ariaLabel",
      type: "string",
      description:
        "Defines how the input will be translated for the screen reader. If not specified it will fall back to the name. If both arialabel and arialabelledby are specified, arialabelledby will be used.",
      lang: "react",
    },
    {
      name: "arialabelledby",
      type: "string",
      description:
        "The aria-labelledby attribute identifies the element (or elements) that labels the dropdown it is applied to. Normally it is the id of the label.",
      lang: "angular",
    },
    {
      name: "ariaLabelledBy",
      type: "string",
      description:
        "The aria-labelledby attribute identifies the element (or elements) that labels the dropdown it is applied to. Normally it is the id of the label.",
      lang: "react",
    },
    {
      name: "maxlength",
      type: "number",
      description:
        "Defines the maximum number of characters (as UTF-16 code units) the user can enter into the input.",
      lang: "angular",
    },
    {
      name: "maxLength",
      type: "number",
      description:
        "Defines the maximum number of characters (as UTF-16 code units) the user can enter into the input.",
      lang: "react",
    },
    {
      name: "autoCapitalize",
      lang: "react",
      type: "on | off | none | sentences | words | characters",
      description:
        "Controls whether and how text input is automatically capitalized as it is entered/edited by the user. This only works on mobile devices.",
      defaultValue: "off",
    },
    {
      name: "autocapitalize",
      lang: "angular",
      type: "on | off | none | sentences | words | characters",
      description:
        "Controls whether and how text input is automatically capitalized as it is entered/edited by the user. This only works on mobile devices.",
      defaultValue: "off",
    },
    {
      name: "textAlign",
      lang: "react",
      type: "GoAInputTextAlign (left | right)",
      description: "Sets the text alignment within the input field.",
      defaultValue: "left",
    },
    {
      name: "textalign",
      lang: "angular",
      type: "left | right",
      description: "Sets the text alignment within the input field.",
      defaultValue: "left",
    },
    {
      name: "_trailingIconClick",
      lang: "angular",
      type: "CustomEvent",
      description: "onclick function invoked when trailing icon is clicked.",
    },
    {
      name: "onTrailingIconClick",
      lang: "react",
      type: "() => void",
      description: "onclick function invoked when trailing icon is clicked.",
    },
    {
      name: "leadingContent",
      lang: "angular",
      type: "slot",
      description: "Sets the content to the left of the input field.",
    },
    {
      name: "leadingContent",
      lang: "react",
      type: "ReactNode",
      description: "Sets the content to the left of the input field.",
    },
    {
      name: "trailingContent",
      lang: "angular",
      type: "slot",
      description: "Sets the content to the right of the input field.",
    },
    {
      name: "trailingContent",
      lang: "react",
      type: "ReactNode",
      description: "Sets the content to the right of the input field.",
    },
    {
      name: "onChange",
      lang: "react",
      type: "(name: string, value: string[] | string | null) => void",
      required: true,
      description: "Callback function when input value is changed.",
    },
    {
      name: "_focus",
      lang: "angular",
      type: "() => void",
      description: "Function invoked when an element receives focus.",
    },
    {
      name: "onFocus",
      lang: "react",
      type: "(name: string, value: string | Date | number) => void",
      description: "Function invoked when an element receives focus.",
    },
    {
      name: "_blur",
      lang: "angular",
      type: "() => void",
      description: "Function invoked when an element loses focus.",
    },
    {
      name: "onBlur",
      lang: "react",
      type: "(name: string, value: string | Date | number) => void",
      description: "Function invoked when an element loses focus.",
    },
    {
      name: "_keyPress",
      lang: "angular",
      type: "() => void",
      description: "Function invoked when a key is pressed",
    },
    {
      name: "onKeyPress",
      lang: "react",
      type: "(name: string, value: string | Date | number) => void",
      description: "Function invoked when a key is pressed",
    },
    ...LegacyTestIdProperties,
    LegacyMarginProperty,
  ];
  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "GoabInputType (text | number | password | email | search | tel | date | datetime-local | time | url | week)",
      defaultValue: "text",
      description: "Sets the type of the input field.",
    },
    {
      name: "name",
      type: "string",
      required: true,
      description: "Name of input value that is received in the onChange event.",
    },
    {
      name: "autoComplete",
      type: "string",
      description: "Specifies the autocomplete attribute for the input field.",
    },
    {
      name: "value",
      type: "string||null",
      defaultValue: "''",
      description: "Bound to value.",
    },
    {
      name: "placeholder",
      type: "string",
      description: "Text displayed within the input when no value is set.",
    },
    {
      name: "leadingIcon",
      type: "GoabIconType",
      description: "Icon shown to the left of the text.",
    },
    {
      name: "trailingIcon",
      type: "GoabIconType",
      description: "Icon shown to the right of the text.",
    },
    {
      name: "trailingIconAriaLabel",
      type: "string",
      description: "Aria label for the trailing icon. Use only when the trailing icon is interactive.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Disables this input. The input will not receive focus or events. Use [attr.disabled] with [formControl].",
    },
    {
      name: "focused",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the cursor focus to the input.",
    },
    {
      name: "readOnly",
      type: "boolean",
      description: "Makes the input readonly.",
      defaultValue: "false",
    },
    {
      name: "error",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the input to an error state.",
    },
    {
      name: "width",
      type: "string",
      defaultValue: "30ch",
      description: "Sets the width of the text input area.",
    },
    {
      name: "min",
      type: "string",
      description:
        "A string value that supports any number, or an ISO 8601 format if using the date or datetime type.",
    },
    {
      name: "max",
      type: "string",
      description:
        "A string value that supports any number, or an ISO 8601 format if using the date or datetime type.",
    },
    {
      name: "step",
      type: "number",
      description: "How much a number or date should changed by.",
    },
    {
      name: "ariaLabel",
      type: "string",
      description:
        "Defines how the input will be translated for the screen reader. If not specified it will fall back to the name. If both arialabel and arialabelledby are specified, arialabelledby will be used.",
    },
    {
      name: "ariaLabelledBy",
      type: "string",
      description:
        "The aria-labelledby attribute identifies the element (or elements) that labels the dropdown it is applied to. Normally it is the id of the label.",
    },
    {
      name: "maxlength",
      type: "number",
      description:
        "Defines the maximum number of characters (as UTF-16 code units) the user can enter into the input.",
    },
    {
      name: "maxLength",
      type: "number",
      description:
        "Defines the maximum number of characters (as UTF-16 code units) the user can enter into the input.",
    },
    {
      name: "autoCapitalize",
      type: "GoabInputAutoCapitalize (on | off | none | sentences | words | characters)",
      description:
        "Controls whether and how text input is automatically capitalized as it is entered/edited by the user. This only works on mobile devices.",
      defaultValue: "off",
    },
    {
      name: "textAlign",
      type: "GoabInputTextAlign (left | right)",
      description: "Sets the text alignment within the input field.",
      defaultValue: "left",
    },
    {
      name: "onTrailingIconClick",
      type: "() => void",
      description: "onClick function invoked when trailing icon is clicked.",
    },
    {
      name: "leadingContent",
      lang: "angular",
      type: "slot",
      description: "Sets the content to the left of the input field.",
    },
    {
      name: "leadingContent",
      lang: "react",
      type: "ReactNode",
      description: "Sets the content to the left of the input field.",
    },
    {
      name: "trailingContent",
      lang: "angular",
      type: "slot",
      description: "Sets the content to the right of the input field.",
    },
    {
      name: "trailingContent",
      lang: "react",
      type: "ReactNode",
      description: "Sets the content to the right of the input field.",
    },
    {
      name: "onChange",
      type: "(event: GoabInputOnChangeDetail) => void",
      required: true,
      description: "Callback function when input value is changed.",
    },
    {
      name: "onFocus",
      type: "(event: GoabInputOnFocusDetail) => void",
      description: "Function invoked when an element receives focus.",
    },
    {
      name: "onBlur",
      type: "(event: GoabInputOnBlurDetail) => void",
      description: "Function invoked when an element loses focus.",
    },
    {
      name: "onKeyPress",
      type: "(event: GoabInputOnKeyPressDetail) => void",
      description: "Function invoked when a key is pressed",
    },
    TestIdProperty,
    MarginProperty,
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: ComponentPropsType) {
    setComponentBindings(bindings);
    setComponentProps(props);
  }

  // For sandbox demo function
  const noop = () => {};

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Input"
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            {/*Input sandbox*/}
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox<ComponentPropsType>
              properties={componentBindings}
              formItemProperties={formItemBindings}
              onChange={onSandboxChange}
              onChangeFormItemBindings={onFormItemChange}
              allow={["form"]}
              flags={version === "old" ? ["reactive"] : ["event", "reactive", "template-driven"]}>
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
                  value = "";
                  inputOnChange(event: GoabInputOnChangeDetail) {
                    // handle change
                    console.log(event.value);
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
                import {FormsModule} from "@angular/forms";
                export class SomeComponent {
                  item = "";
                  inputOnChange(event: GoabInputOnChangeDetail) {
                    this.item = event.value;
                  }
                }
              `}
                />
              )}

              {version === "old" && (
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                const [value, setValue] = useState<string>("");
              
                onChange(name: string, value: string) {
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
              
                function inputOnChange(event: GoabInputOnChangeDetail) {
                  setValue(event.value);
                }
              `}
                />
              )}
              <form>
                <GoabFormItem {...formItemProps}>
                  <GoabInput
                    {...omit(componentProps, ["onFocus", "onBlur", "onKeyPress"])}
                    name="item"
                    value=""
                    onChange={noop}
                  />
                </GoabFormItem>
              </form>
            </Sandbox>

            {/*Input component properties table*/}
            <ComponentProperties
              properties={componentProperties}
              oldProperties={oldComponentProperties}
            />
            {/*Examples*/}
          </GoabTab>

          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="7" />
              </>
            }>
            <TextFieldExamples />
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
