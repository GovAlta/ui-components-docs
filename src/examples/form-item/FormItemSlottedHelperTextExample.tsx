import { Sandbox } from "@components/sandbox";
import { GoabFormItem, GoabInput } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const FormItemSlottedHelperTextExample = () => {
  const { version } = useContext(LanguageVersionContext);
  const noop = () => {};
  const reactNode = (
    <>
      <i>This is </i> slotted <b> help text</b>.
    </>
  );

  return (
    // Must skip render because we use slotted that isn't supported by sandbox
    <Sandbox skipRender>
      {/*React*/}
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
                        <GoAFormItem label="First name"
                               helpText={<><i>This is </i> slotted <b>help text</b>.</>}>
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
                               helpText={<><i>This is </i> slotted <b>help text</b>.</>}>
                          <GoabInput onChange={onChange} value={value} name="item"></GoabInput>
                        </GoabFormItem>
                      `}
        />
      )}

      {/*Angular*/}
      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  <goa-form-item label="First name">
                    <goa-input goaValue name="item" [formControl]="itemFormCtrl" [value]="itemFormCtrl.value"></goa-input>

                    <div slot="helptext">
                      <span>This is </span>
                      <i>slotted </i>
                      <b>help text</b>.
                    </div>

                  </goa-form-item>
                  `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  <goab-form-item label="First name" [formGroup]="form">
                    <goab-input name="item" formControlName="item"></goab-input>
                    <goab-form-item-slot slot="helptext">
                      <span>This is </span>
                      <i>slotted </i>
                      <b>help text</b>.
                    </goab-form-item-slot>
                  </goab-form-item>
                `}
        />
      )}

      <GoabFormItem label="First name" helpText={reactNode}>
        <GoabInput onChange={noop} value="" name="item" />
      </GoabFormItem>
    </Sandbox>
  );
};
