import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

import {
  GoABadge,
  GoATab,
  GoATabs,
  GoADatePickerProps,
  GoADatePicker,
  GoAFormItem,
} from "@abgov/react-components";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

// == Page props ==

const componentName = "Date picker";
const category = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  // { link: "/content/date-format", name: "Date format" },
  { link: "/components/form-item", name: "Form item" }
];
const description =
  "A date picker lets users select a date through a calendar without the need to manually type it in a field.";
type ComponentPropsType = GoADatePickerProps;
type CastingType = {
  [key: string]: unknown;
  onChange: (name: string, value: Date) => void;
};

export default function DatePickerPage() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    onChange: () => {},
  });

  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Min",
      type: "date",
      name: "min",
    },
    {
      label: "Max",
      type: "date",
      name: "max",
    },
  ]);
  const { formItemBindings, formItemProps, onFormItemChange } = useSandboxFormItem({
    label: "Item",
  });

  const componentProperties: ComponentProperty[] = [
    {
      name: "name",
      type: "string",
      description: "Name of the date field",
    },
    {
      name: "value",
      type: "string",
      description: "Value of the calendar date",
    },
    {
      name: "min",
      type: "string",
      defaultValue: "5 year previous",
      description: "Minimum date value allowed",
    },
    {
      name: "max",
      type: "string",
      defaultValue: "5 years forward",
      description: "Maximum date value allowed",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as CastingType);
  }

  return (
    <>
      <ComponentHeader name={componentName} category={category} description={description} relatedComponents={relatedComponents}/>

      <GoATabs>
        <GoATab heading="Code examples">
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
                export class MyComponent {
                  const item = new Date();
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
                import { FormControl } from "@angular/forms";
                export class MyComponent {
                  reactiveFormCtrl = new FormControl(new Date());
                }  
              `}
            />

            <CodeSnippet
              lang="typescript"
              tags="react"
              allowCopy={true}
              code={`
                function onChange(name: string, value: Date) {
                  setValue(value);
                }
              `}
            />
            <GoAFormItem {...formItemProps}>
              <GoADatePicker {...componentProps} name="item" value={new Date()} />
            </GoAFormItem>
          </Sandbox>
          <ComponentProperties properties={componentProperties} />
        </GoATab>

        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }></GoATab>
      </GoATabs>
    </>
  );
}
