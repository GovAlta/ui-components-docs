import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabFormItem, GoabInput } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const AskAUserForDollarAmounts = () => {
  const {version} = useContext(LanguageVersionContext);

  const noop = () => {}
  return (
    <Sandbox flags={["reactive"]} skipRender>
      {/*Angular Code Snippet - need for leadingContent slot*/}
      {version === "old" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
                  export class ExampleComponent {
                    tuitionAmount: number|undefined;
                    suppliesAmount: number|undefined;
                    othersAmount: number|undefined;

                    onChangeTuitionAmount(event: Event) {
                      this.tuitionAmount = (event as CustomEvent).detail.value as number;
                    }
                    onChangeSuppliesAmount(event: Event) {
                      this.suppliesAmount = (event as CustomEvent).detail.value as number;
                    }
                    onChangeOthersAmount(event: Event) {
                      this.othersAmount = (event as CustomEvent).detail.value as number;
                    }
                  }
                `}
      />}
      {version === "old" && <CodeSnippet
        lang="html"
        tags="angular"
        allowCopy={true}
        code={`
                  <goa-form-item label="Tuition">
                    <goa-input (_change)="onChangeTuitionAmount($event)" value="" name="tuition" mb="xl">
                      <div slot="leadingContent">$</div>
                    </goa-input>
                  </goa-form-item>
                  <goa-form-item label="Books/Supplies/Instruments">
                    <goa-input (_change)="onChangeSuppliesAmount($event)" value="" name="book" mb="xl">
                      <div slot="leadingContent">$</div>
                    </goa-input>
                  </goa-form-item>
                  <goa-form-item label="Other costs">
                    <goa-input (_change)="onChangeOthersAmount($event)" value="" name="others">
                      <div slot="leadingContent">$</div>
                    </goa-input>
                  </goa-form-item>
                `}
      />}

      {/*Reactive FormControl Angular Code Snippet*/}
       <CodeSnippet
        lang="typescript"
        tags={["angular", "reactive"]}
        allowCopy={true}
        code={`
                  export class ExampleComponent {
                    costFormGroup = new FormGroup({
                      tuitionFeeAmount: new FormControl(""),
                      suppliesAmount: new FormControl(""),
                      othersAmount: new FormControl(""),
                    });
                  }  
                `}
      />

      {version === "old" && <CodeSnippet
        lang="html"
        tags={["angular", "reactive"]}
        allowCopy={true}
        code={`
                <form [formGroup]="costFormGroup">
                  <goa-form-item label="Tuition">
                    <goa-input goaValue name="tuition" formControlName="tuitionFeeAmount">
                      <div slot="leadingContent">$</div>
                    </goa-input>
                  </goa-form-item>
                  <goa-form-item label="Books/Supplies/Instruments">
                    <goa-input goaValue name="book" formControlName="suppliesAmount">
                     <div slot="leadingContent">$</div>
                    </goa-input>
                  </goa-form-item>
                    <goa-form-item label="Other costs">
                      <goa-input goaValue name="others" formControlName="othersAmount">
                        <div slot="leadingContent">$</div>
                      </goa-input>
                  </goa-form-item>                
                </form>
                `}
      />}

      {version === "new" && <CodeSnippet
        lang="html"
        tags={["angular", "reactive"]}
        allowCopy={true}
        code={`
                <form [formGroup]="costFormGroup">
                  <goab-form-item label="Tuition">
                    <goab-input name="tuition" formControlName="tuitionFeeAmount">
                      <div slot="leadingContent">$</div>
                    </goab-input>
                  </goab-form-item>
                  <goab-form-item label="Books/Supplies/Instruments">
                    <goab-input name="book" formControlName="suppliesAmount">
                     <div slot="leadingContent">$</div>
                    </goab-input>
                  </goab-form-item>
                    <goab-form-item label="Other costs">
                      <goab-input  name="others" formControlName="othersAmount">
                        <div slot="leadingContent">$</div>
                      </goab-input>
                  </goab-form-item>                
                </form>
                `}
      />}

      {/*React Code Snippet - need for leadingContent slot*/}
      {version === "old" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
                  const [tuitionAmount, setTuitionAmount] = useState<string>("");
                  const [suppliesAmount, setSuppliesAmount] = useState<string>("");
                  const [othersAmount, setOthersAmount] = useState<string>("");
                  function onChangeTuitionAmount(_name: string, value: string) {
                    setTuitionAmount(value);
                  }
                  function onChangeSuppliesAmount(_name: string, value: string) {
                    setSuppliesAmount(value);
                  }
                  function onChangeOthersAmount(_name: string, value: string) {
                    setOthersAmount(value);
                  }
                `}
      />}

      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
                  const [tuitionAmount, setTuitionAmount] = useState<string>("");
                  const [suppliesAmount, setSuppliesAmount] = useState<string>("");
                  const [othersAmount, setOthersAmount] = useState<string>("");
                  function onChangeTuitionAmount(event: GoabInputOnChangeDetail) {
                    setTuitionAmount(event.value);
                  }
                  function onChangeSuppliesAmount(event: GoabInputOnChangeDetail) {
                    setSuppliesAmount(event.value);
                  }
                  function onChangeOthersAmount(event: GoabInputOnChangeDetail) {
                    setOthersAmount(event.value);
                  }
                `}
      />}

      {version === "old" && <CodeSnippet
        lang="html"
        tags="react"
        allowCopy={true}
        code={`
                  <GoAFormItem label="Tuition">
                    <GoAInput onChange={onChangeTuitionAmount} value={tuitionAmount} name="tuitionAmount" leadingContent="$"></GoAInput>
                  </GoAFormItem>
                  <GoAFormItem label="Books/Supplies/Instruments">
                    <GoAInput onChange={onChangeSuppliesAmount} value={suppliesAmount} name="suppliesAmount" leadingContent="$"></GoAInput>
                  </GoAFormItem>
                  <GoAFormItem label="Other costs">
                    <GoAInput onChange={onChangeOthersAmount} value={othersAmount} name="others" leadingContent="$"></GoAInput>
                  </GoAFormItem>
                `}
      />}

      {version === "new" && <CodeSnippet
        lang="html"
        tags="react"
        allowCopy={true}
        code={`
                  <GoabFormItem label="Tuition">
                    <GoabInput onChange={onChangeTuitionAmount} value={tuitionAmount} name="tuitionAmount" leadingContent="$"></GoabInput>
                  </GoabFormItem>
                  <GoabFormItem label="Books/Supplies/Instruments">
                    <GoabInput onChange={onChangeSuppliesAmount} value={suppliesAmount} name="suppliesAmount" leadingContent="$"></GoabInput>
                  </GoabFormItem>
                  <GoabFormItem label="Other costs">
                    <GoabInput onChange={onChangeOthersAmount} value={othersAmount} name="others" leadingContent="$"></GoabInput>
                  </GoabFormItem>
                `}
      />}

      <GoabFormItem label="Tuition">
        <GoabInput onChange={noop} value="" name="tuitionAmount" leadingContent="$" mb="xl" />
      </GoabFormItem>
      <GoabFormItem label="Supplies">
        <GoabInput onChange={noop} value="" name="suppliesAmount" leadingContent="$" mb="xl" />
      </GoabFormItem>
      <GoabFormItem label="Other costs">
        <GoabInput onChange={noop} value="" name="othersAmount" leadingContent="$" />
      </GoabFormItem>
    </Sandbox>

  )
}

export default AskAUserForDollarAmounts;
