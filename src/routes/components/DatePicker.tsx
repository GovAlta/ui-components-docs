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
  GoAButton,
  GoAButtonGroup,
} from "@abgov/react-components";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { SandboxHeader } from "@components/sandbox/sandboxHeader.tsx";

// == Page props ==

const componentName = "Date picker";
const category = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  // { link: "/content/date-format", name: "Date format" },
  { link: "/components/form-item", name: "Form item" },
];
const description =
  "Lets users select a date through a calendar without the need to manually type it in a field.";
type ComponentPropsType = GoADatePickerProps;
type CastingType = {
  [key: string]: unknown;
  onChange: (name: string, value: Date | undefined) => void;
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

  const componentProperties: ComponentProperty[] = [
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
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
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
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as CastingType);
  }

  const noop = () => {};

  const [date, setDate] = useState<Date | undefined>();

  const setNewDate = (value: Date | undefined) => {
    setDate(value);
  };

  function setValue() {
    const d = new Date();
    d.setDate(d.getDate() - 7);

    setDate(d);
  }

  function clearValue() {
    setDate(undefined);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code examples">
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>
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
                  itemFormCtrl = new FormControl(new Date());
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
                <GoADatePicker {...componentProps} name="item" value={new Date()} onChange={noop} />
              </GoAFormItem>
            </Sandbox>
            <ComponentProperties properties={componentProperties} />

            <h2 id="component-examples" className="hidden" aria-hidden="true">
              Examples
            </h2>

            <SandboxHeader
              exampleTitle="Reset example">
            </SandboxHeader>
            <Sandbox fullWidth skipRender onChange={onSandboxChange} flags={["reactive"]}>
              <CodeSnippet
                tags="react"
                lang="typescript"
                allowCopy={true}
                code={`
                  export function Datepicker() {
                    const [date, setDate] = useState<Date | undefined>();

                    const setNewDate = (value: Date | undefined) => {
                      setDate(value);
                    };

                    function setValue() {
                      const d = new Date();
                      d.setDate(d.getDate() - 7);

                      setDate(d);
                    }

                    function clearValue() {
                      setDate(undefined);
                    }

                    return (
                      <>
                        <GoAFormItem label="Item">
                          <GoADatePicker
                            name="item"
                            value={date}
                            onChange={(_, value) => setNewDate(value)}
                            mb="xl"
                          ></GoADatePicker>
                        </GoAFormItem>
                        
                        <GoAButtonGroup mt={"xs"} alignment={"start"}>
                          <GoAButton onClick={setValue} mr="l">Set Value</GoAButton>
                          <GoAButton onClick={clearValue}>Clear Value</GoAButton>
                        </GoAButtonGroup>
                      </>
                    );
                  }
              `}
              />

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  export class DatePickerComponent {
                    item = "";
                    onChange(event: Event) {
                      const value = (event as CustomEvent).detail.value;
                      this.item = value;
                    }

                    setValue() {
                      const today = new Date().toDateString();
                      this.item = today;
                    }

                    clearValue() {
                      this.item = "";
                    }
                  }
                `}
              />
              <CodeSnippet
                lang="html"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-form-item label="Item">
                    <goa-date-picker (_change)="onChange($event)" name="item" [value]="item"></goa-date-picker>
                  </goa-form-item>

                  <goa-button-group alignment="start" mt="xs">
                    <goa-button (_click)="setValue()" mr="l">Set Value</goa-button>
                    <goa-button (_click)="clearValue()">Clear Value</goa-button>
                  </goa-button-group>
                `}
              />

              <CodeSnippet
                tags={["angular", "reactive"]}
                lang="typescript"
                allowCopy={true}
                code={`
                  export class DatePickerComponent {
                    dateCtrl = new FormControl();

                    setValue() {
                      const d = new Date();
                      d.setDate(d.getDate() - 7);
                      this.dateCtrl.patchValue(d);
                      console.log("setValue called: ", this.dateCtrl.value);
                    }

                    clearValue() {
                      this.dateCtrl.reset();
                      console.log("reset called: ", this.dateCtrl.value);
                    }
                  }
              `}
              />
              <CodeSnippet
                tags={["angular", "reactive"]}
                lang="typescript"
                allowCopy={true}
                code={`
                  <goa-form-item label="Input Label" helptext="Helper text" mb="3xl">
                    <goa-date-picker [formControl]="dateCtrl" [value]="dateCtrl.value" ngDefaultControl />
                  </goa-form-item>
                  
                  <goa-button-group alignment="start" mt="xs">
                    <goa-button (_click)="setValue()" mr="l">Set Value</goa-button>
                    <goa-button (_click)="clearValue()">Clear Value</goa-button>
                  </goa-button-group>
              `}
              />

              <GoAFormItem label="Date Picker">
                <GoADatePicker
                  name="item"
                  value={date}
                  onChange={(_, value) => setNewDate(value)}
                  mb="xl"></GoADatePicker>
              </GoAFormItem>

              <GoAButtonGroup mt={"xs"} alignment={"start"}>
                <GoAButton onClick={setValue} mr="l">
                  Set Value
                </GoAButton>
                <GoAButton onClick={clearValue}>Clear Value</GoAButton>
              </GoAButtonGroup>
            </Sandbox>
          </GoATab>

          <GoATab
            heading={
              <>
                Design guidelines
                <GoABadge type="information" content="In progress" />
              </>
            }></GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}
