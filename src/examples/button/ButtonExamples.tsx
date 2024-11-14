import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabBlock, GoabButton, GoabButtonGroup,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabInput
} from "@abgov/react-components";
import GoabModal from "@components/mock-modal/Modal.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const ButtonExamples = () => {
  const {version} = useContext(LanguageVersionContext);
  const noop = () => {};
  return <>
    <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>
    {/*Button Example 1*/}
    <h3 id="component-example-ask-address">Ask a user for an address</h3>
    <Sandbox flags={version === "new" ? ["reactive", "template-driven"] : ["reactive"]}>

      {/*Reactive FormControl Angular Code Snippet*/}
      <CodeSnippet
        lang="typescript"
        tags={["angular", "reactive"]}
        allowCopy={true}
        code={`
                  export class ExampleComponent {
                    form!: FormGroup;
                    constructor(private fb: FormBuilder) {
                      this.form = this.fb.group({
                        address: [''],
                        suite: [''],
                        city: [''],
                        province: [''],
                        postalCode: ['']
                      });
                    }
                  }  
                `}
      />

      {/*Template driven Angular Code Snippet*/}
      <CodeSnippet
        lang="typescript"
        tags={["angular", "template-driven"]}
        allowCopy={true}
        code={`
                  export class ExampleComponent {
                     address = '';
                     suite = '';
                     city = '';
                     province = '';
                     postalCode = '';
                  }  
                `}
      />

      <GoabBlock gap="xl" direction="column">
        <form>
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
        </form>
      </GoabBlock>

      <GoabButtonGroup alignment="start" mt="2xl">
        <GoabButton type="primary" onClick={noop}>
          Submit and continue
        </GoabButton>
        <GoabButton type="secondary" onClick={noop}>
          Cancel
        </GoabButton>
      </GoabButtonGroup>
    </Sandbox>

    {/*Button example 2*/}
    <h3 id="component-example-confirm-action">Confirm a destructive action</h3>
    <Sandbox>
      <GoabModal heading="Are you sure you want to delete this record?">
        <p>You cannot undo this action.</p>

        <GoabButtonGroup alignment="end" mt="l">
          <GoabButton type="secondary" onClick={noop}>
            Cancel
          </GoabButton>
          <GoabButton type="primary" variant="destructive" onClick={noop}>
            Delete record
          </GoabButton>
        </GoabButtonGroup>
      </GoabModal>
    </Sandbox>

    {/*Button example */}
    <h3 id="component-example-disabled-button">Disabled button with a required field</h3>
    <Sandbox flags={version === "new" ? ["reactive", "template-driven"] : ["reactive"]}>
      {/*Reactive FormControl Angular Code Snippet*/}
      <CodeSnippet
        lang="typescript"
        tags={["angular", "reactive"]}
        allowCopy={true}
        code={`
                  export class ExampleComponent {
                    form!: FormGroup;
                    constructor(private fb: FormBuilder) {
                      this.form = this.fb.group({
                        input: [''],
                      });
                    }
                  }  
                `}
      />

      {/*Template driven Angular Code Snippet*/}
      <CodeSnippet
        lang="typescript"
        tags={["angular", "template-driven"]}
        allowCopy={true}
        code={`
                  export class ExampleComponent {
                     input = '';
                  }  
                `}
      />

      <GoabFormItem label="Name" requirement="required">
        <GoabInput name="input" type="text" onChange={noop} width="100%" />
      </GoabFormItem>

      <GoabButtonGroup alignment="start" mt="l">
        <GoabButton disabled={true} onClick={noop}>
          Confirm
        </GoabButton>
        <GoabButton type="secondary" onClick={noop}>
          Cancel
        </GoabButton>
      </GoabButtonGroup>
    </Sandbox>
  </>;
};
