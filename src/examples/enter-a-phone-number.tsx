import { GoabFormItem, GoabInput } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const EnterAPhoneNumber = () => {
  const {version} = useContext(LanguageVersionContext);
  const noop = () => {}
  return (
    <Sandbox flags={["reactive"]} allow={["form"]} skipRenderOnly={"react"}>

      {/*Angular code*/}

      {version === "old" && (
        <CodeSnippet
            lang="typescript"
            tags={["angular", "reactive"]}
            allowCopy={true}
            code={`
                export class ExampleComponent {
                    phoneNumberGroup = new FormGroup({
                        phoneNumberFormCtrl: new FormControl(""),
                    });
                }
            `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags={["angular", "reactive"]}
          allowCopy={true}
          code={`
                  export class ExampleComponent {
                    form!: FormGroup;
                    constructor(private fb: FormBuilder) {
                      this.form = this.fb.group({
                        phoneNumber: [''],
                      });
                    }
                  }
        `}
        />
      )}

      {/*React code*/}
      
      {version === "old" && (
        <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
                const [phoneNumber, setPhoneNumber] = useState<string>("");
                function onChangePhoneNumber(event: GoabInputOnChangeDetail) {
                    setPhoneNumber(event.value);
                }
            `}
        />
      )}

      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <GoAFormItem label="Phone number">
                <GoAInput type="tel" onChange={onChangePhoneNumber} value={phoneNumber} name="phoneNumber" leadingContent="+1"></GoAInput>
            </GoAFormItem>
        `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
                const [phoneNumber, setPhoneNumber] = useState<string>("");
                function onChangePhoneNumber(event: GoabInputOnChangeDetail) {
                    setPhoneNumber(event.value);
                }
            `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
            <GoabFormItem label="Phone number">
                <GoabInput type="tel" onChange={onChangePhoneNumber} value={phoneNumber} name="phoneNumber" leadingContent="+1"></GoabInput>
            </GoabFormItem>
        `}
        />
      )}

      <form>
        <GoabFormItem label="Phone number">
            <GoabInput type="tel" onChange={noop} value="" name="phoneNumber" leadingContent="+1"></GoabInput>
        </GoabFormItem>
      </form>
    </Sandbox>
  );
}

export default EnterAPhoneNumber;
