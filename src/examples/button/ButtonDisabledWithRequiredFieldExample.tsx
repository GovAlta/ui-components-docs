import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox } from "@components/sandbox";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { GoabButtonGroup, GoabButton, GoabFormItem, GoabInput } from "@abgov/react-components";
import { GoabInputOnChangeDetail } from "@abgov/ui-components-common";

export const ButtonDisabledWithRequiredFieldExample = () => {
  const { version } = useContext(LanguageVersionContext);
  const [disabled, setDisabled] = useState(true);
  function inputOnChange(event: GoabInputOnChangeDetail) {
      setDisabled(event.value === "");
    };
    
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
                     disabled = true;
                     inputOnChange(event: GoabInputOnChangeDetail) {
                      this.disabled = event.value === "";
                     }
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
                      setDisabled(event.value === "");
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
                const [disabled, setDisabled] = useState(true);
                 
                function onClick() {
                  // do nothing.
                 }
                 function inputOnChange(event: GoabInputOnChangeDetail) {
                  setDisabled(event.value === "");
                 }
                `}
      />}
      {version === "old" && <CodeSnippet
        lang="typescript"
        tags={"react"}
        allowCopy={true}
        code={`
                 const [disabled, setDisabled] = useState(true);

                 function onClick() {
                  // do nothing.
                 }
                 onChange(name: string, value: string) {
                  setDisabled(value === "");
                 }
                `}
      />}

      <form>
        <GoabFormItem label="Name" requirement="required">
          <GoabInput name="input" type="text" onChange={inputOnChange} width="100%" />
        </GoabFormItem>

        <GoabButtonGroup alignment="start" mt="l">
          <GoabButton disabled={disabled} onClick={noop}>
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
