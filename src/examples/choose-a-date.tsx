import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabBlock, GoabButton, GoabDatePicker, GoabFormItem } from "@abgov/react-components";
import { GoabDatePickerOnChangeDetail } from "@abgov/ui-components-common";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const TodayDatePickerField = () => {
  const {version} = useContext(LanguageVersionContext);
  const [date, setDate] = useState<Date | undefined>();

  const setNewDate = (value: Date | undefined) => {
    setDate(value);
  };

  function setToday() {
    const d = new Date();
    d.setDate(d.getDate());

    setDate(d);
  }

  return (
      <Sandbox skipRender flags={version === "old" ? ["reactive"] : ["event"]}>
        {/*React*/}
        {version === "old" && <CodeSnippet
          tags="react"
          lang="typescript"
          allowCopy={true}
          code={`
                    const [date, setDate] = useState<Date | undefined>();

                    const setNewDate = (value: Date | undefined) => {
                        setDate(value);
                    };

                    function setToday() {
                        const d = new Date();
                        d.setDate(d.getDate());

                        setDate(d);
                    }
              `}
        />}

        {version === "old" && <CodeSnippet
          tags="react"
          lang="typescript"
          allowCopy={true}
          code={`
                <GoABlock gap="s" alignment="end">
                    <GoAFormItem label="Select a date">
                        <GoADatePicker
                            name="item"
                            value={date}
                            onChange={(_, value) => setNewDate(value)}
                        ></GoADatePicker>
                    </GoAFormItem>
                    <GoAButton type="tertiary" onClick={setToday} mr="l">
                        Today
                    </GoAButton>
                </GoABlock>
            `}
        />}

        {version === "new" && <CodeSnippet
          tags="react"
          lang="typescript"
          allowCopy={true}
          code={`
                const [date, setDate] = useState<Date | undefined>();

                const setNewDate = (value: Date | undefined) => {
                    setDate(value);
                };

                function setToday() {
                    const d = new Date();
                    d.setDate(d.getDate());

                    setDate(d);
                }
            `}
        />}

         {version === "new" && <CodeSnippet
          tags="react"
          lang="typescript"
          allowCopy={true}
          code={`
                <GoabBlock gap="s" alignment="end">
                    <GoabFormItem label="Select a date">
                        <GoabDatePicker
                            name="item"
                            value={date}
                            onChange={(_, value) => setNewDate(value)}
                        ></GoabDatePicker>
                    </GoabFormItem>
                    <GoabButton type="tertiary" onClick={setToday} mr="l">
                        Today
                    </GoabButton>
                </GoabBlock>
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

                    setToday() {
                      const d = new Date();
                      this.item = (d.getDate()).toDateString();
                    }
                  }
                `}
        />}

        {version === "old" && <CodeSnippet
            lang="html"
            tags="angular"
            allowCopy={true}
            code={`
                <goa-block gap="s" alignment="end">
                    <goa-form-item label="Select a date">
                        <goa-date-picker (_change)="onChange($event)" name="item" [value]="item"></goa-date-picker>
                    </goa-form-item>
                    <goa-button type="tertiary" (onClick)="setToday()" mr="l">
                        Today
                    </goa-button>
                </goa-block>
            `}
        />}

        {version === "old" && <CodeSnippet
            tags={["angular", "reactive"]}
            lang="typescript"
            allowCopy={true}
            code={`
                export class DatePickerComponent {
                    dateCtrl = new FormControl();

                    setToday() {
                        const d = new Date();
                        d.setDate(d.getDate());
                        this.dateCtrl.patchValue(d);
                        console.log("setValue called: ", this.dateCtrl.value);
                    }
                }
            `}
        />}
        {version === "old" && <CodeSnippet
            tags={["angular", "reactive"]}
            lang="typescript"
            allowCopy={true}
            code={`
                <goa-block gap="s" alignment="end">
                    <goa-form-item label="Select a date">
                        <goa-date-picker [formControl]="dateCtrl" [value]="dateCtrl.value" ngDefaultControl />
                    </goa-form-item>
                    <goa-button type="tertiary" (onClick)="setToday()" mr="l">
                        Today
                    </goa-button>
                </goa-block>
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
                    setToday() {
                      const d = new Date();
                      this.item = (d.getDate()).toDateString();
                    }
                  }
                `}
        />}

        {version === "new" && <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
                <goab-block gap="s" alignment="end">
                    <goab-form-item label="Select a date">
                        <goab-date-picker
                            name="item"
                            [value]="item"
                            (onChange)="onChange($event)"></goab-date-picker>
                        </goab-form-item>
                    <goab-button type="tertiary" (onClick)="setToday()" mr="l">
                        Today
                    </goab-button>
                </goab-block>
            `}
        />}
        <GoabBlock gap="s" alignment="end">
            <GoabFormItem label="Select a date">
            <GoabDatePicker
                name="item"
                value={date}
                onChange={(e: GoabDatePickerOnChangeDetail) => setNewDate(e.value as Date)}></GoabDatePicker>
            </GoabFormItem>
            <GoabButton type="tertiary" onClick={setToday} mr="l">
                Today
            </GoabButton>
        </GoabBlock>

      </Sandbox>
  )
}

export default TodayDatePickerField;
