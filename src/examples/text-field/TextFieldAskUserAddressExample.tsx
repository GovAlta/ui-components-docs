import { Sandbox } from "@components/sandbox";
import { GoabBlock, GoabDropdown, GoabDropdownItem, GoabFormItem, GoabInput } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const TextFieldAskUserAddressExample = () => {
  const {version} = useContext(LanguageVersionContext);
  const noop = () => {}
  return (
    <Sandbox flags={["reactive"]} allow={["form"]} skipRenderOnly={"react"}>
      {/*React code*/}
      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
            const [street, setStreet] = useState<string>('');
            const [suite, setSuite] = useState<string>('');
            const [city, setCity] = useState<string>('');
            const [province, setProvince] = useState<string | undefined>('alberta');
            const [postalCode, setPostalCode] = useState<string>('');
        `}
      />}

      {version === "new" && <CodeSnippet
        lang="html"
        tags="react"
        allowCopy={true}
        code={`
              <GoabFormItem label="Street Address">
                <GoabInput name="address" type="text" value={street} onChange={(event: GoabInputOnChangeDetail) => setStreet(event.value)} width="100%"></GoabInput>
              </GoabFormItem>
              <GoabFormItem label="Suite or unit #">
                <GoabInput name="suite" type="text" value={suite} onChange={(event: GoabInputOnChangeDetail) => setSuite(event.value)} width="100%"></GoabInput>
              </GoabFormItem>
              <GoabFormItem label="City/town">
                <GoabInput name="city" type="text" value={city} onChange={(event: GoabInputOnChangeDetail) => setCity(event.value)} width="100%"></GoabInput>
              </GoabFormItem>
              <GoabBlock direction="row">
                <GoabFormItem label="Provice/territory">
                  <GoabDropdown name="province" value={province} onChange={(event: GoabDropdownOnChangeDetail) => setProvince(event.value)}>
                    <GoabDropdownItem label="Alberta" value="alberta"></GoabDropdownItem>
                    <GoabDropdownItem label="BC" value="bc"></GoabDropdownItem>
                    <GoabDropdownItem label="Manitoba" value="manitoba"></GoabDropdownItem>
                    <GoabDropdownItem label="New Brunswick" value="new-brunswick"></GoabDropdownItem>
                    <GoabDropdownItem label="Newfoundland and Labrador" value="newfoundland"></GoabDropdownItem>
                    <GoabDropdownItem label="Nova Scotia" value="nova-scotia"></GoabDropdownItem>
                    <GoabDropdownItem label="Ontario" value="ontario"></GoabDropdownItem>
                    <GoabDropdownItem label="Prince Edward Island" value="prince-edward-island"></GoabDropdownItem>
                    <GoabDropdownItem label="Quebec" value="quebec"></GoabDropdownItem>
                    <GoabDropdownItem label="Saskatchewan" value="saskatchewan"></GoabDropdownItem>
                  </GoabDropdown>
                </GoabFormItem>
                <GoabFormItem label="Postal Code">
                  <GoabInput name="postalCode" type="text" width="100%" value={postalCode} onChange={(event: GoabInputOnChangeDetail) => setPostalCode(event.value)}></GoabInput>
                </GoabFormItem>
            </GoabBlock>
        `}
      />}

      {version === "old" && <CodeSnippet
        lang="html"
        tags="react"
        allowCopy={true}
        code={`
            <GoAFormItem label="Street Address">
              <GoAInput name="address" type="text" value="" onChange={onChange} width="100%"></GoAInput>
            </GoAFormItem>
            <GoAFormItem label="Suite or unit #">
              <GoAInput name="suite" type="text" value="" onChange={onChange} width="100%"></GoAInput>
            </GoAFormItem>
            <GoAFormItem label="City/town">
              <GoAInput name="city" type="text" value="" onChange={onChange} width="100%"></GoAInput>
            </GoAFormItem>
            <GoABlock direction="row">
              <GoAFormItem label="Provice/territory">
                <GoADropdown onChange={onChange} name="province" value="alberta">
                  <GoADropdownItem label="Alberta" value="alberta"></GoADropdownItem>
                  <GoADropdownItem label="BC" value="bc"></GoADropdownItem>
                  <GoADropdownItem label="Manitoba" value="manitoba"></GoADropdownItem>
                  <GoADropdownItem label="New Brunswick" value="new-brunswick"></GoADropdownItem>
                  <GoADropdownItem label="Newfoundland and Labrador" value="newfoundland"></GoADropdownItem>
                  <GoADropdownItem label="Nova Scotia" value="nova-scotia"></GoADropdownItem>
                  <GoADropdownItem label="Ontario" value="ontario"></GoADropdownItem>
                  <GoADropdownItem label="Prince Edward Island" value="prince-edward-island"></GoADropdownItem>
                  <GoADropdownItem label="Quebec" value="quebec"></GoADropdownItem>
                  <GoADropdownItem label="Saskatchewan" value="saskatchewan"></GoADropdownItem>
                </GoADropdown>
              </GoAFormItem>
              <GoAFormItem label="Postal Code">
                <GoAInput name="postalCode" type="text" value="" onChange={onChange} width="100%"></GoAInput>
              </GoAFormItem>
            </GoABlock>
        `}
      />}

      {/*Angular code*/}
      {version === "new" && <CodeSnippet
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
                  province: ['alberta'],
              });
            }
          }
        `}
      />}

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
    </Sandbox>
  )
}
