import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoABadge,
  GoAFormItem,
  GoARadioGroup,
  GoARadioGroupProps,
  GoARadioItem,
  GoATab,
  GoATabs,
  GoACallout,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import RadioExamples from "@examples/radio/RadioExamples.tsx";

// == Page props ==
const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=102-26";
const componentName = "Radio";
const category = Category.INPUTS_AND_ACTIONS;
const description = "Allow users to select one option from a set.";
const relatedComponents = [
  { link: "/components/checkbox", name: "Checkbox" },
  { link: "/components/dropdown", name: "Dropdown" },
  { link: "/components/form-item", name: "Form item" },
];

type ComponentPropsType = GoARadioGroupProps;
type CastingType = {
  name: string;
  value: string;
  [key: string]: unknown;
  onChange: (name: string, value: string) => void;
};

export default function RadioPage() {
  const [radioProps, setRadioProps] = useState<ComponentPropsType>({
    name: "item",
    value: "",
    onChange: () => { },
  });
  const [radioBindings, setRadioBindings] = useState<ComponentBinding[]>([
    {
      label: "Orientation",
      type: "list",
      options: ["", "horizontal", "vertical"],
      value: "",
      name: "orientation",
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
      label: "ARIA Label",
      name: "ariaLabel",
      type: "string",
      value: "",
    },
  ]);
  const { formItemBindings, formItemProps, onFormItemChange } = useSandboxFormItem({ label: "Basic" });

  const radioGroupProperties: ComponentProperty[] = [
    {
      name: "name",
      type: "string",
      required: true,
      description: "Identifier for the radio group. Should be unique.",
    },
    {
      name: "value",
      type: "string",
      description: "The value binding.",
    },
    {
      name: "orientation",
      type: "horizontal|vertical",
      description: "Orientation of the radio items.",
      defaultValue: "vertical",
    },
    {
      name: "error",
      type: "boolean",
      defaultValue: "false",
      description: "Set the component to an error state.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Set the component to disabled. Use [attr.disabled] with [formControl].",
    },
    {
      name: "ariaLabel",
      lang: "react",
      description:
        "Defines how the text will be translated for the screen reader.",
      type: "string",
    },
    {
      name: "arialabel",
      lang: "angular",
      description:
        "Defines how the text will be translated for the screen reader.",
      type: "string",
    },
    {
      name: "arialabelledby",
      lang: "angular",
      description:
        "Refers to the element that contains the label of the radio group.",
      type: "string",
    },
    {
      name: "ariaLabelledBy",
      lang: "react",
      description:
        "Refers to the element that contains the label of the radio group.",
      type: "string",
    },
    {
      name: "onChange",
      lang: "react",
      type: "(name: string, value: string) => void",
      required: true,
      description: "Callback function when radio value is changed.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  const radioItemProperties: ComponentProperty[] = [
    {
      name: "value",
      type: "string",
      required: true,
      description: "Value of the item that will be returned when selected.",
    },
    {
      name: "label",
      type: "string",
      description: "Text shown beside the radio.",
    },
    {
      name: "description",
      type: "string | slot",
      description: "Additional content shown below the label.",
      lang: "angular",
    },
    {
      name: "description",
      type: "string | ReactNode",
      description: "Additional content shown below the label.",
      lang: "react",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the radio.",
      lang: "react",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Sets the maximum width of the radio.",
      lang: "angular",
    },
    {
      name: "arialabel",
      lang: "angular",
      type: "string",
      description: "Defines how the radio item will be translated for the screen reader.",
    },
    {
      name: "ariaLabel",
      lang: "react",
      type: "string",
      description: "Defines how the radio item will be translated for the screen reader.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setRadioProps(props as CastingType);
    setRadioBindings(bindings);
  }

  const noop = () => { };

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
            {/* Radio Sandbox */}
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox
              properties={radioBindings}
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
              export class MyComponent {
                onChange(e: Event) {
                  // handle change
                  console.log("onChange", (e as CustomEvent).detail.name, (e as CustomEvent).detail.value);
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
              import { FormControl } from "@angular/forms";
              export class MyComponent {
               itemFormCtrl = new FormControl("1");
              }
            `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
              function onChange(name: string, value: string) {
                console.log("onChange", name, value);
              }
            `}
              />

              <GoAFormItem {...formItemProps}>
                <GoARadioGroup {...radioProps} name="item" value="1" onChange={noop}>
                  <GoARadioItem value="1" label="Label 1"></GoARadioItem>
                  <GoARadioItem value="2" label="Label 2"></GoARadioItem>
                  <GoARadioItem value="3" label="Label 3"></GoARadioItem>
                </GoARadioGroup>
              </GoAFormItem>
            </Sandbox>

            {/* Radio Group properties */}
            <ComponentProperties heading="Radio group properties" properties={radioGroupProperties} />
            {/* Radio Item properties */}
            <ComponentProperties heading="Radio Item properties" properties={radioItemProperties} />
          </GoATab>
            <GoATab
              heading={
                <>
                  Examples
                  <GoABadge type="information" content="2" />
                </>
              }
            >
            <RadioExamples />
          </GoATab>

          <GoATab heading="Design">

          <GoACallout
              heading="Design documentation in Figma"
              type="important"
              size="medium"
              maxWidth="540px"
            >
              Detailed design documentation for this component can be found on the associated{" "}
              <a href={FIGMA_LINK} target="_blank" rel="noreferrer">
                component page
              </a>{" "}
              in the Component library in Figma.
            </GoACallout>
          </GoATab>

          <GoATab heading="Accessibility">
            <GoACallout
              heading="Accessibility documentation in Figma"
              type="important"
              size="medium"
              maxWidth="550px"
            >
              Detailed accessibility documentation for this component can be found on the associated{" "}
              <a href={FIGMA_LINK} target="_blank" rel="noreferrer">
                component page
              </a>{" "}
              in the Component library in Figma.
            </GoACallout>
          </GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}