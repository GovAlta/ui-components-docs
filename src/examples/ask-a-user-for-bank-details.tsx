import { Sandbox } from "@components/sandbox";
import { GoabBlock, GoabFormItem, GoabInput } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const AskAUserForBankDetails = () => {
  const {version} = useContext(LanguageVersionContext);
  const noop = () => {}

  return (
    <Sandbox fullWidth flags={["reactive"]} skipRenderOnly={"react"}>
      {/*React code*/}

      {version === "old" && <CodeSnippet
        lang="html"
        tags="react"
        allowCopy={true}
        code={`
            const [name, setName] = useState<string>('');
            const [account, setAccount] = useState<string>('');
            const [bank, setBank] = useState<string>('');
            function onChangeName(event: GoabInputOnChangeDetail) {
                setName(event.value);
            }
            function onChangeAccount(event: GoabInputOnChangeDetail) {
                setAccount(event.value);
            }
            function onChangeBank(event: GoabInputOnChangeDetail) {
                setBank(event.value);
            }
        `}
      />}

      {version === "old" && <CodeSnippet
        lang="html"
        tags="react"
        allowCopy={true}
        code={`
            <GoAFormItem label="Bank account details" labelSize="large">
                <GoABlock gap="m" direction="column">
                    <GoAFormItem label="Name on account">
                        <GoAInput
                            onChange={onChangeName}
                            value={name}
                            name="name"
                            width="100%"
                        />
                    </GoAFormItem>
                    <GoAFormItem label="Account number">
                        <GoAInput
                            onChange={onChangeAccount}
                            value={account}
                            name="account"
                            width="167px"
                        />
                    </GoAFormItem>
                    <GoAFormItem label="Bank number" helpText="Must be between 6 and 8 digits long">
                        <GoAInput
                            onChange={onChangeBank}
                            value={bank}
                            name="bank"
                            width="167px"
                            maxLength={8}
                        />
                    </GoAFormItem>
                </GoABlock>
            </GoAFormItem>
        `}
      />}

      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
            const [name, setName] = useState<string>('');
            const [account, setAccount] = useState<string>('');
            const [bank, setBank] = useState<string>('');
            function onChangeName(event: GoabInputOnChangeDetail) {
                setName(event.value);
            }
            function onChangeAccount(event: GoabInputOnChangeDetail) {
                setAccount(event.value);
            }
            function onChangeBank(event: GoabInputOnChangeDetail) {
                setBank(event.value);
            }
        `}
      />}
      {version === "new" && <CodeSnippet
        lang="html"
        tags="react"
        allowCopy={true}
        code={`
        <GoabFormItem label="Bank account details" labelSize="large">
            <GoabBlock gap="m" direction="column">
                <GoabFormItem label="Name on account">
                    <GoabInput
                        onChange={onChangeName}
                        value={name}
                        name="name"
                        width="100%"
                    />
                </GoabFormItem>
                <GoabFormItem label="Account number">
                    <GoabInput
                        onChange={onChangeAccount}
                        value={account}
                        name="account"
                        width="167px"
                    />
                </GoabFormItem>
                <GoabFormItem label="Bank number" helpText="Must be between 6 and 8 digits long">
                    <GoabInput
                        onChange={onChangeBank}
                        value={bank}
                        name="bank"
                        width="167px"
                        maxLength={8}
                    />
                </GoabFormItem>
            </GoabBlock>
        </GoabFormItem>
        `}
      />}

      {/*Angular code*/}

      {version === "old" && <CodeSnippet
        lang="typescript"
        tags={["angular", "reactive"]}
        allowCopy={true}
        code={`
            export class ExampleComponent {
                bankDetails = new FormGroup({
                    name: new FormControl(""),
                    account: new FormControl(""),
                    bank: new FormControl(""),
                });
            }
        `}
      />}

      {version === "new" && <CodeSnippet
        lang="typescript"
        tags={["angular", "reactive"]}
        allowCopy={true}
        code={`
            export class ExampleComponent {
                form!: FormGroup;
                constructor(private fb: FormBuilder) {
                    this.form = this.fb.group({
                        name: [''],
                        account: [''],
                        bank: [''],
                    });
                }
            }
        `}
      />}


      <GoabFormItem label="Bank account details" labelSize="large">
        <GoabBlock gap="m" direction="column">
          <GoabFormItem label="Name on account">
            <GoabInput
              onChange={noop}
              value=""
              name="name"
              width="100%"
            />
          </GoabFormItem>
          <GoabFormItem label="Account number">
            <GoabInput
              onChange={noop}
              value=""
              name="account"
              width="167px"
            />
          </GoabFormItem>
          <GoabFormItem label="Bank number" helpText="Must be between 6 and 8 digits long">
            <GoabInput
              onChange={noop}
              value=""
              name="bank"
              width="167px"
              maxLength={8}
            />
          </GoabFormItem>
        </GoabBlock>
      </GoabFormItem>
    </Sandbox>
  )
}

export default AskAUserForBankDetails;
