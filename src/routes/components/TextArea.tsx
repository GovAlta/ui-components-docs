import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoABadge,
  GoAButton,
  GoAButtonGroup,
  GoAContainer,
  GoADetails,
  GoAFormItem,
  GoATab,
  GoATabs,
  GoATextarea,
  GoATextAreaProps,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";

// == Page props ==

const componentName = "Text area";
const description = "A multi-line field where users can input and edit text.";
const category = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  { link: "/components/form-item", name: "Form item" },
  { link: "/components/text-field", name: "Text field" }
];
type ComponentPropsType = GoATextAreaProps;
type CastingType = {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  [key: string]: unknown;
};

export default function TextAreaPage() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
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
      label: "Width",
      name: "width",
      type: "string",
      value: "60ch",
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
      label: "Show count",
      name: "showCount",
      type: "boolean",
      value: false,
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
  ]);
  const {formItemBindings, formItemProps, onFormItemChange} = useSandboxFormItem({label: "Basic"});
  const componentProperties: ComponentProperty[] = [
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
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setTextAreaBindings(bindings);
    setComponentProps(props as CastingType);
  }

  const noop = () => {};

  return (
    <>
      <ComponentHeader name={componentName} category={category} description={description} relatedComponents={relatedComponents}/>

      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox
            properties={textAreaBindings}
            formItemProperties={formItemBindings}
            onChange={onSandboxChange}
            onChangeFormItemBindings={onFormItemChange}
            flags={["reactive"]}
            fullWidth>
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
              tags="angular"
              allowCopy={true}
              code={`
                // non-reactive code
                export class SomeComponent {
                  onChange(event: Event) {
                    // handle change
                    console.log((event as CustomEvent).detail.value);
                  }
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

            <GoAFormItem {...formItemProps}>
              <GoATextarea {...componentProps} value="" onChange={noop} />
            </GoAFormItem>
          </Sandbox>

          <ComponentProperties properties={componentProperties} />

          {/*Examples*/}
          <h2 id="examples" className="hidden" aria-hidden="true">Examples</h2>
         
          <h3 id="example-1">Ask a question and give more information</h3>
          <Sandbox flags={["reactive"]} fullWidth>
            <GoAContainer>
              <GoAButton type="tertiary" leadingIcon="arrow-back" mb="m">
                Back
              </GoAButton>

              <h2>Description</h2>
              <p>
                List all components and include a description, including the number of hours for
                each.
              </p>

              <GoAFormItem
                label="Program outline"
                helpText="Remember to maintain clarity, accuracy, and coherence throughout the program outline.">
                <GoATextarea name="program" value="Input text" onChange={noop} />
              </GoAFormItem>

              <GoADetails heading="How to write a good outline">
                <p>
                  Break down your outline into easily digestible sections. This can help to ensure
                  that the document is well-organized and easy to navigate.
                </p>
              </GoADetails>

              <GoAButtonGroup alignment="start" mt="l">
                <GoAButton type="primary" onClick={noop}>
                  Continue
                </GoAButton>
              </GoAButtonGroup>
            </GoAContainer>
          </Sandbox>
        </GoATab>

        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }>
          <p>Coming Soon</p>
        </GoATab>
      </GoATabs>
    </>
  );
}
