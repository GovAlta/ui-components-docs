import { Sandbox } from "@components/sandbox";
import { GoabBlock, GoabFormItem, GoabInput } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const AskAUserForAnIndianRegistrationNumber = () => {
  const {version} = useContext(LanguageVersionContext);
  const noop = () => {}

  return (
    <Sandbox flags={["reactive"]} skipRenderOnly={"react"}>
      {/*React code*/}
      {version === "old" && <CodeSnippet
        lang="html"
        tags="react"
        allowCopy={true}
        code={`
          <GoAFormItem label="Indian registration number" labelSize="large">
            <GoABlock gap="m" direction="row">
              <GoAFormItem label="Band #" helpText="3 digits">
                <GoAInput onChange={onChange} value="" name="bandNo" width="88px" maxLength={3}></GoAInput>
              </GoAFormItem>
              <GoAFormItem label="Family" helpText="Up to 5 digits">
                <GoAInput onChange={onChange} value="" name="family" width="105px" maxLength={5}></GoAInput>
              </GoAFormItem>
              <GoAFormItem label="Position" helpText="2 digits">
                <GoAInput onChange={onChange} value="" name="position" width="71px" maxLength={2}></GoAInput>
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
          const [bandNo, setBandNo] = useState<string>('');
          const [family, setFamily] = useState<string>('');
          const [position, setPosition] = useState<string>('');
        `}
      />}
      {version === "new" && <CodeSnippet
        lang="html"
        tags="react"
        allowCopy={true}
        code={`
        <GoabFormItem label="Indian registration number" labelSize="large">
          <GoabBlock gap="m" direction="row">
            <GoabFormItem label="Band #" helpText="3 digits">
              <GoabInput
                onChange={(event: GoabInputOnChangeDetail) =>
                  setBandNo(event.value)
                }
                value={bandNo}
                name="bandNo"
                width="88px"
                maxLength={3}
              ></GoabInput>
            </GoabFormItem>
            <GoabFormItem label="Family" helpText="Up to 5 digits">
              <GoabInput
                onChange={(event: GoabInputOnChangeDetail) =>
                  setFamily(event.value)
                }
                value={family}
                name="family"
                width="105px"
                maxLength={5}
              ></GoabInput>
            </GoabFormItem>
            <GoabFormItem label="Position" helpText="2 digits">
              <GoabInput
                onChange={(event: GoabInputOnChangeDetail) =>
                  setPosition(event.value)
                }
                value={position}
                name="position"
                width="71px"
                maxLength={2}
              ></GoabInput>
            </GoabFormItem>
          </GoabBlock>
        </GoabFormItem>
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
              bandNo: [''],
              family: [''],
              position: [''],
            });
          }
        }
        `}
      />}

      <GoabFormItem label="Indian registration number" labelSize="large">
        <GoabBlock gap="m" direction="row">
          <GoabFormItem label="Band #" helpText="3 digits">
            <GoabInput
              onChange={noop}
              value=""
              name="bandNo"
              width="88px"
              maxLength={3}
            />
          </GoabFormItem>
          <GoabFormItem label="Family" helpText="Up to 5 digits">
            <GoabInput
              onChange={noop}
              value=""
              name="family"
              width="105px"
              maxLength={5}
            />
          </GoabFormItem>
          <GoabFormItem label="Position" helpText="2 digits">
            <GoabInput
              onChange={noop}
              value=""
              name="position"
              width="71px"
              maxLength={2}
            />
          </GoabFormItem>
        </GoabBlock>
      </GoabFormItem>
    </Sandbox>
  )
}

export default AskAUserForAnIndianRegistrationNumber;
