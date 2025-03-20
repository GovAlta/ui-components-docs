import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox } from "@components/sandbox";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { GoabButtonGroup, GoabButton, GoabFormItem, GoabInput } from "@abgov/react-components";


export const ButtonDisabledWithRequiredFieldExample = () => {
  const { version } = useContext(LanguageVersionContext);
  const noop = () => {}
  return (
    <Sandbox flags={version === "new" ? ["reactive", "template-driven"] : ["reactive"]} allow={["form"]}>
      {/*Reactive FormControl Angular Code Snippet*/}

      {version === "new" && <CodeSnippet
        lang="typescript"
        tags={["angular"]}
        allowCopy={true}
        code={`
                  export class ExampleComponent {
                     inputOnChange(event: GoabInputOnChangeDetail) {}
                     onClick() {
                      // do nothing.
                     }
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
                        input: [''],
                      });
                    }
                    onClick() {
                      // do nothing.
                    }
                  }  
                `}
      />}

      {/*Template driven Angular Code Snippet*/}
      <CodeSnippet
        lang="typescript"
        tags={["angular", "template-driven"]}
        allowCopy={true}
        code={`
                  export class ExampleComponent {
                     input = '';
                     inputOnChange(event: GoabInputOnChangeDetail) {
                      this.input = event.value;
                     }
                     onClick() {
                      // do nothing.
                     }
                  }
                `}
      />

      {/*React*/}
      {version === "new" && <CodeSnippet
        lang="typescript"
        tags={"react"}
        allowCopy={true}
        code={`
                 function onClick() {
                  // do nothing.
                 }
                 function inputOnChange(event: GoabInputOnChangeDetail) {}
                `}
      />}
      {version === "old" && <CodeSnippet
        lang="typescript"
        tags={"react"}
        allowCopy={true}
        code={`
                 function onClick() {
                  // do nothing.
                 }
                 onChange(name: string, value: string) {}
                `}
      />}

      <form>
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
      </form>
    </Sandbox>
);
};
