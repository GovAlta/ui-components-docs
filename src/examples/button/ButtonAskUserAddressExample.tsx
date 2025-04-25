import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabBlock,
  GoabButton,
  GoabButtonGroup,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabInput, GoabText
} from "@abgov/react-components";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useContext } from "react";

export const ButtonAskUserAddressExample = () => {
  const {version} = useContext(LanguageVersionContext);
  const noop = () => {}
  return (
    <Sandbox flags={version === "new" ? ["reactive", "template-driven"] : ["reactive"]}>
      {/*Reactive FormControl Angular Code Snippet*/}
      {version === "new" && <CodeSnippet
        lang="typescript"
        tags={["angular"]}
        allowCopy={true}
        code={`
          export class ExampleComponent {
            inputOnChange(event: GoabInputOnChangeDetail) {}we
            dropdownOnChange(event: GoabDropdownOnChangeDetail) {}
            onClick() {
            // do nothing.
            }
          }
        `}
      />}

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
                    onClick() {
                      // do nothing.
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
                     
                     inputOnChange(event: GoabInputOnChangeDetail) {}
                     dropdownOnChange(event: GoabDropdownOnChangeDetail) {}
                     onClick() {
                      // do nothing.
                      }
                  }  
                `}
      />

      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
                  function onClick() {
                    // do nothing.
                  }
                  function inputOnChange(event: GoabInputOnChangeDetail) {}
                  function dropdownOnChange(event: GoabDropdownOnChangeDetail) {}
                `}
      />}

      <GoabText size={"heading-l"} mb={"xl"}>What is your address?</GoabText>
      <GoabBlock gap="xl" direction="column">
          <GoabFormItem label="Street Address">
            <GoabInput name="address" type="text" value="" onChange={noop} width="100%" />
          </GoabFormItem>
          <GoabFormItem label="Suite or unit #">
            <GoabInput name="suite" type="text" value="" onChange={noop} width="100%" />
          </GoabFormItem>
        <GoabFormItem label="City or town">
            <GoabInput name="city" type="text" value="" onChange={noop} width="100%" />
          </GoabFormItem>

        <GoabBlock direction={"row"} gap="xl">
          <GoabFormItem label="Provice or territory">
              <GoabDropdown onChange={noop} name="province" value="alberta">
                <GoabDropdownItem label="Alberta" value="alberta" />
                <GoabDropdownItem label="British Columbia" value="bc" />
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
              <GoabInput name="postalCode" type="text" value="" onChange={noop} width="7ch" />
            </GoabFormItem>
          </GoabBlock>
      </GoabBlock>

      <GoabButtonGroup alignment="start" mt="2xl">
        <GoabButton type="primary" onClick={noop}>
          Save and continue
        </GoabButton>
        <GoabButton type="secondary" onClick={noop}>
          Cancel
        </GoabButton>
      </GoabButtonGroup>
    </Sandbox>
  );
};
