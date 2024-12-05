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
          <GoAInput name="address" type="text" value="" onChange={noop} width="100%" mb="xl" />
        </GoAFormItem>
        <GoAFormItem label="Suite or unit #">
          <GoAInput name="suite" type="text" value="" onChange={noop} width="100%" mb="xl" />
        </GoAFormItem>
        <GoAFormItem label="City/town">
          <GoAInput name="city" type="text" value="" onChange={noop} width="100%" mb="xl"  />
        </GoAFormItem>

        <GoABlock direction="row" gap="l">
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
            <GoAInput name="postalCode" type="text" value="" onChange={noop} width="14ch" />
          </GoAFormItem>
        </GoABlock>
      </Sandbox>

      <h3 id="component-example-ask-user-for-birthday">Ask a user for their birthday</h3>
      <Sandbox flags={["reactive"]}>
        <GoAFormItem
          label="What is your date of birth?"
          labelSize="large"
          helpText={"For example, 27 November 2004"}>
          <GoABlock gap="m" direction="row">
            <GoAFormItem label="Day">
              <GoAInput
                onChange={noop}
                value=""
                name="day"
                width="6ch"
              />
            </GoAFormItem>
            <GoAFormItem label="Month">
            <GoADropdown onChange={noop} name="month" value="">
              <GoADropdownItem label="January" value="January" />
              <GoADropdownItem label="February" value="February" />
              <GoADropdownItem label="March" value="March" />
              <GoADropdownItem label="April" value="April" />
              <GoADropdownItem label="May" value="May" />
              <GoADropdownItem label="June" value="June" />
              <GoADropdownItem label="July" value="July" />
              <GoADropdownItem label="August" value="August" />
              <GoADropdownItem label="September" value="September" />
              <GoADropdownItem label="October" value="October" />
              <GoADropdownItem label="November" value="November" />
              <GoADropdownItem label="December" value="December" />
            </GoADropdown>
            </GoAFormItem>
            <GoAFormItem label="Year">
              <GoAInput
                onChange={noop}
                value=""
                name="year"
                width="10ch"
              />
            </GoAFormItem>
          </GoABlock>
        </GoAFormItem>
      </Sandbox>

      <h3 id="component-example-search">Search</h3>
      <Sandbox flags={["reactive"]}>
        <GoABlock gap="xs" direction="row">
          <GoAInput type="search" name="search" value="" onChange={noop} leadingIcon="search" />
          <GoAButton type="primary" onClick={noop}>
            Search
          </GoAButton>
        </GoABlock>
      </Sandbox>

      <h3 id="component-example-enter-phone-number">
        Enter a phone number
      </h3>
      <Sandbox flags={["reactive"]} skipRender>
        
        {/*Angular Code Snippet - need for leadingContent slot*/}
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  export class ExampleComponent {
                    phoneNumber: number|undefined;

                    onChangePhoneNumber(event: Event) {
                      this.phoneNumber = (event as CustomEvent).detail.value as number;
                    }
                  }
                `}
        />
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
                  <goa-form-item label="Phone number">
                    <goa-input (_change)="onChangePhoneNumber($event)" value="" name="phoneNumber" type="tel" mb="xl">
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
                    phoneNumberForm = new FormGroup({
                      phoneNumber: new FormControl(""),
                    });
                  }  
                `}
        />
        <CodeSnippet
          lang="html"
          tags={["angular", "reactive"]}
          allowCopy={true}
          code={`
                <form [formGroup]="phoneNumberForm">
                  <goa-form-item label="Phone number">
                      <goa-input goaValue name="phoneNumber" formControlName="phoneNumber" type="tel">
                        <div slot="leadingContent">+1</div>
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
                  const [phoneNumber, setPhoneNumber] = useState<string>("");
                  function onChangePhoneNumber(_name: string, value: string) {
                    setPhoneNumber(value);
                  }
                `}
        />
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                  <GoAFormItem label="Phone number">
                    <GoAInput onChange={onChangePhoneNumber} value={phoneNumber} name="phoneNumber" type="tel" leadingContent="+1"></GoAInput>
                  </GoAFormItem>
                `}
        />
        <GoAFormItem label="Phone number">
          <GoAInput
            onChange={noop}
            value=""
            type="tel"
            name="phoneNumber"
            leadingContent="+1"
          />
        </GoAFormItem>
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

        <GoAFormItem label="Tuition">
          <GoAInput onChange={noop} value="" name="tuitionAmount" leadingContent="$" mb="xl" />
        </GoAFormItem>
        <GoAFormItem label="Supplies">
          <GoAInput onChange={noop} value="" name="suppliesAmount" leadingContent="$" mb="xl" />
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
                width="88px"
              />
            </GoAFormItem>
            <GoAFormItem label="Family" helpText="Up to 5 digits">
              <GoAInput
                onChange={noop}
                value=""
                name="family"
                width="105px"
              />
            </GoAFormItem>
            <GoAFormItem label="Position" helpText="2 digits">
              <GoAInput
                onChange={noop}
                value=""
                name="position"
                width="71px"
              />
            </GoAFormItem>
          </GoABlock>
        </GoAFormItem>
      </Sandbox>

      <h3 id="component-example-ask-user-for-bank-details">
        Ask a user for bank details
      </h3>
      <Sandbox flags={["reactive"]} 
      fullWidth>
        <GoAFormItem label="Bank account details" labelSize="large">
          <GoABlock gap="m" direction="column">
            <GoAFormItem label="Name on account">
              <GoAInput
                onChange={noop}
                value=""
                name="bank-details"
                width="100%"
              />
            </GoAFormItem>
            <GoAFormItem label="Account number">
              <GoAInput
                onChange={noop}
                value=""
                name="acount-number"
              />
            </GoAFormItem>
            <GoAFormItem label="Bank number" helpText="Must be between 6 and 8 digits long">
              <GoAInput
                onChange={noop}
                maxLength={8}
                type={"text"}
                value=""
                name="bank-number"
              />
            </GoAFormItem>
          </GoABlock>
        </GoAFormItem>
      </Sandbox>
    </>
  );
}
