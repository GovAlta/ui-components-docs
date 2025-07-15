import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabButton, GoabButtonGroup, GoabDatePicker, GoabFormItem } from "@abgov/react-components";
import { GoabDatePickerOnChangeDetail } from "@abgov/ui-components-common";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const DatePickerResetExample = () => {
  const { version } = useContext(LanguageVersionContext);
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
    <Sandbox fullWidth skipRender flags={version === "old" ? ["reactive"] : ["event"]}>
      {/*React*/}
      {version === "old" && (
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
      )}

      {version === "new" && (
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
        />
      )}

      {/*Angular*/}

      {version === "old" && (
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
                      const d = new Date();
                      this.item = (d.getDate() - 7).toDateString();
                    }

                    clearValue() {
                      this.item = "";
                    }
                  }
                `}
        />
      )}

      {version === "old" && (
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
      )}

      {version === "old" && (
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
      )}
      {version === "old" && (
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
      )}

      {/*New version*/}
      {version === "new" && (
        <CodeSnippet
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
                      const d = new Date();
                      this.item = (d.getDate() - 7).toDateString();
                    }
                    clearValue() {
                      this.item = undefined;
                    }
                  }
                `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
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
        />
      )}

      <GoabFormItem label="Date Picker">
        <GoabDatePicker
          name="item"
          value={date}
          onChange={(e: GoabDatePickerOnChangeDetail) => setNewDate(e.value as Date)}
          mb="xl"
        ></GoabDatePicker>
      </GoabFormItem>

      <GoabButtonGroup mt={"xs"} alignment={"start"}>
        <GoabButton onClick={setValue} mr="l">
          Set Value
        </GoabButton>
        <GoabButton onClick={clearValue}>Clear Value</GoabButton>
      </GoabButtonGroup>
    </Sandbox>
  );
};
