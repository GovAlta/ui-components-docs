import { Sandbox } from "@components/sandbox";
import {
  GoABlock,
  GoAButton,
  GoADropdown,
  GoADropdownItem,
  GoAFormItem,
  GoAInput,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export default function TextFieldExamples() {
  const noop = () => {};
  return (
    <>
      {/*Examples*/}
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>

      <h3 id="component-example-ask-user-for-an-address">Ask a user for an address </h3>
      <Sandbox flags={["reactive"]}>
        <GoAFormItem label="Street Address">
          <GoAInput name="address" type="text" value="" onChange={noop} width="100%" />
        </GoAFormItem>
        <GoAFormItem label="Suite or unit #">
          <GoAInput name="suite" type="text" value="" onChange={noop} width="100%" />
        </GoAFormItem>
        <GoAFormItem label="City/town">
          <GoAInput name="city" type="text" value="" onChange={noop} width="100%" />
        </GoAFormItem>

        <GoABlock direction={"row"}>
          <GoAFormItem label="Provice/territory">
            <GoADropdown onChange={noop} name="province" value="alberta">
              <GoADropdownItem label="Alberta" value="alberta" />
              <GoADropdownItem label="BC" value="bc" />
              <GoADropdownItem label="Manitoba" value="manitoba" />
              <GoADropdownItem label="New Brunswick" value="new-brunswick" />
              <GoADropdownItem label="Newfoundland and Labrador" value="newfoundland" />
              <GoADropdownItem label="Nova Scotia" value="nova-scotia" />
              <GoADropdownItem label="Ontario" value="ontario" />
              <GoADropdownItem label="Prince Edward Island" value="prince-edward-island" />
              <GoADropdownItem label="Quebec" value="quebec" />
              <GoADropdownItem label="Saskatchewan" value="saskatchewan" />
            </GoADropdown>
          </GoAFormItem>

          <GoAFormItem label="Postal Code">
            <GoAInput name="postalCode" type="text" value="" onChange={noop} width="100%" />
          </GoAFormItem>
        </GoABlock>
      </Sandbox>

      <h3 id="component-example-ask-user-for-birthday">Ask a user for their birthday</h3>
      <Sandbox flags={["reactive"]}>
        <GoAFormItem
          label="When is your birthday?"
          labelSize="large"
          helpText={"For example, 27 11 2007"}>
          <GoABlock gap="m" direction="row">
            <GoAFormItem label="Day">
              <GoAInput
                onChange={noop}
                value=""
                name="bandNo"
                type="number"
                width="60px"
                min={1}
                max={31}
              />
            </GoAFormItem>
            <GoAFormItem label="Month">
              <GoAInput
                onChange={noop}
                value=""
                name="family"
                type="number"
                width="60px"
                min={1}
                max={12}
              />
            </GoAFormItem>
            <GoAFormItem label="Year">
              <GoAInput
                onChange={noop}
                value=""
                name="position"
                type="number"
                width="88px"
                min={1900}
                max={2023}
              />
            </GoAFormItem>
          </GoABlock>
        </GoAFormItem>
      </Sandbox>

      <h3 id="component-example-search">Search</h3>
      <Sandbox flags={["reactive"]}>
        <GoABlock gap="m" direction="row">
          <GoAInput type="search" name="search" value="" onChange={noop} leadingIcon="search" />
          <GoAButton type="primary" onClick={noop}>
            Search
          </GoAButton>
        </GoABlock>
      </Sandbox>

      <h3 id="component-example-ask-for-costs">Ask a user for dollar amounts or costs</h3>
      <Sandbox flags={["reactive"]} skipRender>
        {/*Angular Code Snippet - need for leadingContent slot*/}
        <CodeSnippet
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
        />
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
                  <goa-form-item label="Tuition">
                    <goa-input (_change)="onChangeTuitionAmount($event)" value="" name="tuition" leadingcontent="$">
                      <div slot="leadingContent">$</div>
                    </goa-input>
                  </goa-form-item>
                  <goa-form-item label="Books/Supplies/Instruments">
                    <goa-input (_change)="onChangeSuppliesAmount($event)" value="" name="book" leadingcontent="$">
                      <div slot="leadingContent">$</div>
                    </goa-input>
                  </goa-form-item>
                  <goa-form-item label="Other costs">
                    <goa-input (_change)="onChangeOthersAmount($event)" value="" name="others" leadingcontent="$">
                      <div slot="leadingContent">$</div>
                    </goa-input>
                  </goa-form-item>
                `}
        />

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
        <CodeSnippet
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
        />

        {/*React Code Snippet - need for leadingContent slot*/}
        <CodeSnippet
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
        />
        <CodeSnippet
          lang="typescript"
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
        />

        <GoAFormItem label="Tuition">
          <GoAInput onChange={noop} value="" name="tuitionAmount" leadingContent="$" />
        </GoAFormItem>
        <GoAFormItem label="Books/Supplies/Instruments">
          <GoAInput onChange={noop} value="" name="suppliesAmount" leadingContent="$" />
        </GoAFormItem>
        <GoAFormItem label="Other costs">
          <GoAInput onChange={noop} value="" name="othersAmount" leadingContent="$" />
        </GoAFormItem>
      </Sandbox>

      <h3 id="component-example-registration-number">
        Ask a user for their indian registration number
      </h3>
      <Sandbox flags={["reactive"]}>
        <GoAFormItem label="Indian registration number" labelSize="large">
          <GoABlock gap="m" direction="row">
            <GoAFormItem label="Band #" helpText="3 digits">
              <GoAInput
                onChange={noop}
                value=""
                name="bandNo"
                min={1}
                max={999}
                type="number"
                width="88px"
              />
            </GoAFormItem>
            <GoAFormItem label="Family" helpText="Up to 5 digits">
              <GoAInput
                onChange={noop}
                value=""
                name="family"
                min={1}
                max={99999}
                type="number"
                width="105px"
              />
            </GoAFormItem>
            <GoAFormItem label="Position" helpText="2 digits">
              <GoAInput
                onChange={noop}
                value=""
                name="position"
                min={1}
                max={99}
                type="number"
                width="71px"
              />
            </GoAFormItem>
          </GoABlock>
        </GoAFormItem>
      </Sandbox>
    </>
  );
}
