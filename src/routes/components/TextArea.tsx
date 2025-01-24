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
  GoATextArea,
  GoATextAreaProps,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import "./AllComponents.css";
import { DesignEmpty } from "@components/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/accessibility-empty/AccessibilityEmpty.tsx";

// == Page props ==
const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=133-186";
const componentName = "Text area";
const category = Category.INPUTS_AND_ACTIONS;
const description = "A multi-line field where users can input and edit text.";
const relatedComponents = [
  { link: "/components/form-item", name: "Form item" },
  { link: "/components/input", name: "Input" },
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
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
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
        githubLink={componentName}
        figmaLink={FIGMA_LINK}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code playground">
            {/* Text Area Sandbox */}
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox
              properties={textAreaBindings}
              formItemProperties={formItemBindings}
              onChange={onSandboxChange}
              onChangeFormItemBindings={onFormItemChange}
              flags={["reactive"]}
              fullWidth
            >
              {/* Angular */}
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
                  value: string = "";
                  onChange(event: Event) {
                    // handle change
                    console.log((event as CustomEvent).detail.value);
                  }
                }
              `}
              />

              {/* React */}
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

              <GoAFormItem {...formItemProps}>
                <GoATextArea
                  {...componentProps}
                  width="60ch"
                  name="item"
                  value=""
                  onChange={noop}
                />
              </GoAFormItem>
            </Sandbox>

            {/* Text Area Properties */}
            <ComponentProperties properties={componentProperties} />
          </GoATab>

          {/* Examples Tab */}
          <GoATab
            heading={
              <>
                Examples<GoABadge type="information" content="1" />
              </>
            }
          >

            <h3 id="component-example-1">Ask a question and give more information</h3>
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
                  <GoATextArea name="program" value="Input text" onChange={noop} />
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

          <GoATab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoATab>

          <GoATab heading="Accessibility">
            <AccessibilityEmpty figmaLink={FIGMA_LINK} />
          </GoATab>

        </GoATabs>
      </ComponentContent>
    </>
  );
}