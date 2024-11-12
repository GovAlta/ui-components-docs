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
  GoabFormItem, GoabButtonGroup, GoabButton,
} from "@abgov/react-components";
import { useSandboxFormItem } from "@hooks/useSandboxFormItem.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabDatePickerOnChangeDetail } from "@abgov/ui-components-common";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

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
    {
      name: "mt,mr,mb,ml",
      type: "Spacing (none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl)",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
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

        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{ display: "none" }}>Component</h2>
            <Sandbox
              properties={componentBindings}
              formItemProperties={formItemBindings}
              onChange={onSandboxChange}
              onChangeFormItemBindings={onFormItemChange}
              flags={version === "old" ? ["reactive"] : ["reactive", "template-driven"]}>

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
                      this.item = event.value;
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

            <h2 id="component-examples" className="hidden" aria-hidden="true">
              Examples
            </h2>

            <h3 id="component-example-1">Reset example</h3>
            <Sandbox fullWidth skipRender onChange={onSandboxChange} flags={version === "old" ? ["reactive"]: undefined}>
              {/*React*/}
              {version === "old" && <CodeSnippet
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
              />}

              {version === "new" && <CodeSnippet
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
                        <GoabFormItem label="Date Picker">
                          <GoabDatePicker
                            name="item"
                            value={date}
                            onChange={(e: GoabDatePickerOnChangeDetail) => setNewDate(e.value as Date)}
                            mb="xl"></GoabDatePicker>
                        </GoabFormItem>

                        <GoabButtonGroup mt={"xs"} alignment={"start"}>
                          <GoabButton onClick={setValue} mr="l">
                            Set Value
                          </GoabButton>
                          <GoabButton onClick={clearValue}>Clear Value</GoabButton>
                        </GoabButtonGroup>
                      </>
                    );
                  }
              `}
              />}

              {/*Angular*/}

              {version === "old" && <CodeSnippet
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
              />}

              {version === "old" && <CodeSnippet
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
              />}

              {version === "old" && <CodeSnippet
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
              />}
              {version === "old" && <CodeSnippet
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
              />}

              {/*New version*/}
              {version === "new" && <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  export class DatePickerComponent {
                    item: Date|undefined = new Date();
                    onChange(event: GoabDatePickerOnChangeDetail) {
                      console.log(event.value);
                      this.item = event.value as Date;
                    }
                    setValue() {
                      this.item = new Date();
                    }
                    clearValue() {
                      this.item = undefined;
                    }
                  }
                `}
              />}

              {version === "new" && <CodeSnippet
                lang="html"
                tags="angular"
                allowCopy={true}
                code={`
                  <goab-form-item label="Item">
                    <goab-date-picker (onChange)="onChange($event)" name="item" [value]="item"></goab-date-picker>
                  </goab-form-item>

                  <goab-button-group alignment="start" mt="xs">
                    <goab-button (onClick)="setValue()" mr="l">Set Value</goab-button>
                    <goab-button (onClick)="clearValue()">Clear Value</goab-button>
                  </goab-button-group>
                `}
              />}

              <GoabFormItem label="Date Picker">
                <GoabDatePicker
                  name="item"
                  value={date}
                  onChange={(e: GoabDatePickerOnChangeDetail) => setNewDate(e.value as Date)}
                  mb="xl"></GoabDatePicker>
              </GoabFormItem>

              <GoabButtonGroup mt={"xs"} alignment={"start"}>
                <GoabButton onClick={setValue} mr="l">
                  Set Value
                </GoabButton>
                <GoabButton onClick={clearValue}>Clear Value</GoabButton>
              </GoabButtonGroup>
            </Sandbox>

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
