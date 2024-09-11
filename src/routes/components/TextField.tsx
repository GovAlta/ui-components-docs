import { useState } from "react";
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
  GoabTabs
} from "@abgov/react-components";
import ICONS from "./icons.json";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import TextFieldExamples from "@examples/text-field/TextFieldExamples";
import { GoabInputOnChangeDetail } from "@abgov/ui-components-common";

// == Page props ==
const componentName = "Input";
const description = "A single-line field where users can input and edit text.";
const category = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  { link: "/components/form-item", name: "Form item" },
  { link: "/components/text-area", name: "Text area" }
];
type ComponentPropsType = GoabInputProps;
type CastingType = {
  name: string;
  value: string;
  [key: string]: unknown;
  onChange: (event: GoabInputOnChangeDetail) => void;
};

export default function TextFieldPage() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    name: "item",
    value: "",
    width: "20ch",
    onChange: () => { },
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
    {
      label: "Value",
      type: "string",
      name: "value",
      value: "",
      hidden: true,
      dynamic: true,
    }
  ]);
  const { formItemBindings, formItemProps, onFormItemChange } = useSandboxFormItem({ label: "Basic" });
  const componentProperties: ComponentProperty[] = [
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
        "Controls whether and how text input is automatically capitalized as it is entered/edited by the user.",
      defaultValue: "off",
    },
    {
      name: "autocapitalize",
      lang: "angular",
      type: "on | off | none | sentences | words | characters",
      description:
        "Controls whether and how text input is automatically capitalized as it is entered/edited by the user.",
      defaultValue: "off",
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

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as CastingType);
  }

  // For sandbox demo function
  const noop = () => { };
  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs>
          <GoabTab heading="Code examples">
            {/*Input sandbox*/}
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox
              properties={componentBindings}
              formItemProperties={formItemBindings}
              onChange={onSandboxChange}
              onChangeFormItemBindings={onFormItemChange}
              flags={["reactive"]}>
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

              <GoabFormItem {...formItemProps}>
                <GoabInput {...componentProps} name="item" value="" onChange={noop}/>
              </GoabFormItem>
            </Sandbox>

            {/*Input component properties table*/}
            <ComponentProperties properties={componentProperties} />
            {/*Examples*/}
            <TextFieldExamples/>
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
