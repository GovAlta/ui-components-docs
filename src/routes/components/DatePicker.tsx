import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useContext, useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

import {
  GoabBadge,
  GoabTab,
  GoabTabs,
  GoabDatePickerProps,
  GoabDatePicker,
  GoabFormItem,
} from "@abgov/react-components";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabDatePickerOnChangeDetail } from "@abgov/ui-components-common";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { LegacyMarginProperty, MarginProperty } from "@components/component-properties/common-properties.ts";
import { DatePickerExamples } from "@examples/date-picker/DatePickerExamples.tsx";

// == Page props ==

const componentName = "Date picker";
const category = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  // { link: "/content/date-format", name: "Date format" },
  { link: "/components/form-item", name: "Form item" },
];
const description =
  "Lets users select a date through a calendar without the need to manually type it in a field.";
type ComponentPropsType = GoabDatePickerProps;
type CastingType = {
  [key: string]: unknown;
  onChange: (event: GoabDatePickerOnChangeDetail)=> void;
};

export default function DatePickerPage() {
  const {version} = useContext(LanguageVersionContext);
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
    {
      label: "Error",
      type: "boolean",
      name: "error",
      value: false,
    },
    {
      label: "Disabled",
      type: "boolean",
      name: "disabled",
      value: false,
    },
  ]);
  const { formItemBindings, formItemProps, onFormItemChange } = useSandboxFormItem({
    label: "Item",
  });

  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "name",
      type: "string",
      description: "Name of the date field.",
    },
    {
      name: "value",
      type: "string | undefined",
      description: "Value of the calendar date.",
    },
    {
      name: "error",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the input to an error state.",
    },
    {
      name: "min",
      type: "string",
      defaultValue: "5 year previous",
      description: "Minimum date value allowed.",
    },
    {
      name: "max",
      type: "string",
      defaultValue: "5 years forward",
      description: "Maximum date value allowed.",
    },
    LegacyMarginProperty,
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables the date picker.",
    },
    {
      name: "relative",
      type: "boolean",
      description: "Set to true if a parent element has a css position of relative.",
      defaultValue: "false",
    },
  ];

  const componentProperties: ComponentProperty[] = [
    {
      name: "name",
      type: "string",
      description: "Name of the date field.",
    },
    {
      name: "value",
      type: "Date | string | null | undefined",
      description: "Value of the calendar date.",
    },
    {
      name: "min",
      type: "Date | string",
      defaultValue: "5 year previous",
      description: "Minimum date value allowed.",
    },
    {
      name: "max",
      type: "Date | string",
      defaultValue: "5 years forward",
      description: "Maximum date value allowed.",
    },
    {
      name: "error",
      type: "boolean",
      defaultValue: "false",
      description: "Sets the input to an error state.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables the date picker.",
    },
    {
      name: "relative",
      type: "boolean",
      description: "Set to true if a parent element has a css position of relative.",
      defaultValue: "false",
    },
    MarginProperty,
    {
      name: "onChange",
      type: "(event: GoabDatePickerOnChangeDetail) => void",
      description: "Function to call when the date changes.",
    }
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
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
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{ display: "none" }}>Component</h2>
            <Sandbox
              properties={componentBindings}
              formItemProperties={formItemBindings}
              onChange={onSandboxChange}
              onChangeFormItemBindings={onFormItemChange}
              flags={version === "old" ? ["reactive"] : ["reactive", "template-driven", "event"]}>

              {/*Angular*/}
              {version === "old" && <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                // non-reactive code
                export class MyComponent {
                  item = new Date();
                  onChange(event: Event) {
                  // handle change
                    console.log((event as CustomEvent).detail.value);
                  }
                }  
              `}
              />}

              {version === "new" && <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                // non-reactive code
                export class MyComponent {
                  item = new Date();
                  dateOnChange(event: GoabDatePickerOnChangeDetail) {
                  // handle change
                    console.log(event.value);
                  }
                }  
              `}
              />}

              {version === "old" && <CodeSnippet
                lang="typescript"
                tags={["angular", "reactive"]}
                allowCopy={true}
                code={`
                // reactive code
                import { FormControl } from "@angular/forms";
                export class MyComponent {
                  itemFormCtrl = new FormControl(new Date());
                }  
              `}
              />}

              {version === "new" && <CodeSnippet
                lang="typescript"
                tags={["angular", "reactive"]}
                allowCopy={true}
                code={`
                // reactive code
                import { FormControl } from "@angular/forms";
                export class MyComponent {
                   form!: FormGroup;
                   constructor(private fb: FormBuilder) {
                    this.form = this.fb.group({
                      item: [new Date()],
                    })
                  }
                }
              `}
              />}

              {version === "new" && <CodeSnippet
                lang="typescript"
                tags={["angular", "template-driven"]}
                allowCopy={true}
                code={`
                  export class MyComponent {
                   item = new Date();
                   dateOnChange(event: GoabDatePickerOnChangeDetail) {
                      // handle change
                      console.log(event.value);
                      this.item = event.value as Date;
                   }
                  }
                }
              `}
              />}

              {/*React*/}
              {version === "old" && <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                function onChange(name: string, value: Date) {
                  console.log(name, value);
                }
              `}
              />}

              {version === "new" && <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                function onChange(event: GoabDatePickerOnChangeDetail) {
                  console.log(event.value);
                }
              `}
              />}

              <GoabFormItem {...formItemProps}>
                <GoabDatePicker {...componentProps} name="item" value={new Date()} onChange={noop} />
              </GoabFormItem>
            </Sandbox>
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />

            <DatePickerExamples/>

          </GoabTab>


          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }></GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
