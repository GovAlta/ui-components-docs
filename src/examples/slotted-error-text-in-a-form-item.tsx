import { Sandbox } from "@components/sandbox";
import { GoabFormItem, GoabInput } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const SlottedErrorTextInAFormItem = () => {
  const { version } = useContext(LanguageVersionContext);
  const errorReactNode: React.ReactNode = (
    <>
      <i>This is </i> slotted <b>error text</b>.
    </>
  );
  const noop = () => {};

  return (
    <Sandbox skipRender>
      <GoabFormItem label="First name" error={errorReactNode}>
        <GoabInput onChange={noop} value="" name="item" error={true} />
      </GoabFormItem>

      {/* *********** React code ************/}
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          const [value, setValue] = useState<string>("");
          const onChange = (event: GoabInputOnChangeDetail) => {
            setValue(event.value);
          }
        `}
      />
      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                  <GoAFormItem 
                    label="First name"
                    error={<><i>This is </i> slotted <b>error text</b>.</>}>
                    <GoAInput onChange={onChange} value={value} name="item"></GoAInput>
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
                  <GoabFormItem label="First name"
                                error={<><i>This is </i> slotted <b>error text</b>.</>}>
                    <GoabInput onChange={onChange} value={value} name="item"></GoabInput>
                  </GoabFormItem>
                  `}
        />
      )}

      {/* *********** Angular code ************/}
      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  <goa-form-item label="First name">
                  <goa-input goaValue name="item" [formControl]="itemFormCtrl" [value]="itemFormCtrl.value"></goa-input>

                    <div slot="error">
                      <span>This is </span>
                      <i>slotted </i>
                      <b>error text.</b>
                    </div>

                  </goa-form-item>
                  `}
        />
      )}

      <CodeSnippet
        lang="typescript"
        tags={["reactive", "angular"]}
        allowCopy={true}
        code={`
                // reactive code
                export class SomeComponent {
                  form!: FormGroup;
                  constructor(private fb: FormBuilder) {
                    this.form = this.fb.group({
                      item: [""]
                    });
                  }
                }
              `}
      />

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  <goab-form-item label="First name" [formGroup]="form">
                    <goab-input name="item" formControlName="item"></goab-input>
                    <goab-form-item-slot slot="error">
                      <span>This is </span>
                      <i>slotted </i>
                      <b>error text.</b>
                    </goab-form-item-slot>
                  </goab-form-item>
                `}
        />
      )}
    </Sandbox>
  );
};

export default SlottedErrorTextInAFormItem;