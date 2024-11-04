import { Sandbox } from "@components/sandbox";
import {
  GoabBlock,
  GoabButton,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabInput,
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
        <GoabFormItem label="Street Address">
          <GoabInput name="address" type="text" value="" onChange={noop} width="100%" />
        </GoabFormItem>
        <GoabFormItem label="Suite or unit #">
          <GoabInput name="suite" type="text" value="" onChange={noop} width="100%" />
        </GoabFormItem>
        <GoabFormItem label="City/town">
          <GoabInput name="city" type="text" value="" onChange={noop} width="100%" />
        </GoabFormItem>

        <GoabBlock direction={"row"}>
          <GoabFormItem label="Provice/territory">
            <GoabDropdown onChange={noop} name="province" value="alberta">
              <GoabDropdownItem label="Alberta" value="alberta" />
              <GoabDropdownItem label="BC" value="bc" />
              <GoabDropdownItem label="Manitoba" value="manitoba" />
              <GoabDropdownItem label="New Brunswick" value="new-brunswick" />
              <GoabDropdownItem label="Newfoundland and Labrador" value="newfoundland" />
              <GoabDropdownItem label="Nova Scotia" value="nova-scotia" />
              <GoabDropdownItem label="Ontario" value="ontario" />
              <GoabDropdownItem label="Prince Edward Island" value="prince-edward-island" />
              <GoabDropdownItem label="Quebec" value="quebec" />
              <GoabDropdownItem label="Saskatchewan" value="saskatchewan" />
            </GoabDropdown>
          </GoabFormItem>

          <GoabFormItem label="Postal Code">
            <GoabInput name="postalCode" type="text" value="" onChange={noop} width="100%" />
          </GoabFormItem>
        </GoabBlock>
      </Sandbox>

      <h3 id="component-example-ask-user-for-birthday">Ask a user for their birthday</h3>
      <Sandbox flags={["reactive"]}>
        <GoabFormItem
          label="When is your birthday?"
          labelSize="large"
          helpText={"For example, 27 November 2004"}>
          <GoabBlock gap="m" direction="row">
            <GoabFormItem label="Day">
              <GoabInput
                onChange={noop}
                value=""
                name="day"
                width="6ch"
              />
            </GoabFormItem>
            <GoabFormItem label="Month">
            <GoabDropdown onChange={noop} name="month" value="">
              <GoabDropdownItem label="January" value="January" />
              <GoabDropdownItem label="February" value="February" />
              <GoabDropdownItem label="March" value="March" />
              <GoabDropdownItem label="April" value="April" />
              <GoabDropdownItem label="May" value="May" />
              <GoabDropdownItem label="June" value="June" />
              <GoabDropdownItem label="July" value="July" />
              <GoabDropdownItem label="August" value="August" />
              <GoabDropdownItem label="September" value="September" />
              <GoabDropdownItem label="October" value="October" />
              <GoabDropdownItem label="November" value="November" />
              <GoabDropdownItem label="December" value="December" />
            </GoabDropdown>
            </GoabFormItem>
            <GoabFormItem label="Year">
              <GoabInput
                onChange={noop}
                value=""
                name="year"
                width="10ch"
              />
            </GoabFormItem>
          </GoabBlock>
        </GoabFormItem>
      </Sandbox>

      <h3 id="component-example-search">Search</h3>
      <Sandbox flags={["reactive"]}>
        <GoabBlock gap="xs" direction="row">
          <GoabInput type="search" name="search" value="" onChange={noop} leadingIcon="search" />
          <GoabButton type="primary" onClick={noop}>
            Search
          </GoabButton>
        </GoabBlock>
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

      <h3 id="component-example-registration-number">
        Ask a user for their indian registration number
      </h3>
      <Sandbox flags={["reactive"]}>
        <GoabFormItem label="Indian registration number" labelSize="large">
          <GoabBlock gap="m" direction="row">
            <GoabFormItem label="Band #" helpText="3 digits">
              <GoabInput
                onChange={noop}
                value=""
                name="bandNo"
                width="88px"
              />
            </GoabFormItem>
            <GoabFormItem label="Family" helpText="Up to 5 digits">
              <GoabInput
                onChange={noop}
                value=""
                name="family"
                width="105px"
              />
            </GoabFormItem>
            <GoabFormItem label="Position" helpText="2 digits">
              <GoabInput
                onChange={noop}
                value=""
                name="position"
                width="71px"
              />
            </GoabFormItem>
          </GoabBlock>
        </GoabFormItem>
      </Sandbox>
    </>
  );
}
