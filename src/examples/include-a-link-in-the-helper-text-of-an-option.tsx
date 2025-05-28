import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabFormItem, GoabRadioGroup, GoabRadioItem } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const IncludeALinkInTheHelperTextOfAnOption = () => {
  const {version} = useContext(LanguageVersionContext);
  const noop = () => {}
  return (
    <Sandbox fullWidth skipRender>
      {/* =========== Angular =============== */}
      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
              <goa-form-item label="Select one option">
              <goa-radio-group name="selectOne" value="1" (_change)="onChange($event)">
                <goa-radio-item value="1" label="Option one">
                  <span slot="description">Help text with a <a href="#">link</a>.</span>
                </goa-radio-item>
                <goa-radio-item value="2" label="Option two" />
                <goa-radio-item value="3" label="Option three" />
              </goa-radio-group>
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
              export class ExampleComponent {
                form!: FormGroup;

                public constructor(private fb: FormBuilder) {
                  this.form = this.fb.group({
                    selectOne: ["1"]
                  });
                }
              }
            `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
              <goab-form-item label="Select one option" [formGroup]="form">
                <goab-radio-group name="selectOne"  formControlName="selectOne">
                  <goab-radio-item value="1" label="Option one" [description]="optionOneDescription">
                    <ng-template #optionOneDescription>
                      Help text with a <a href="#">link</a>.
                    </ng-template>
                  </goab-radio-item>
                  <goab-radio-item value="2" label="Option two"></goab-radio-item>
                  <goab-radio-item value="3" label="Option three"></goab-radio-item>
                </goab-radio-group>
              </goab-form-item>
            `}
        />
      )}

      {/* ============== React ================== */}
      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <GoAFormItem label="Select one option">
              <GoARadioGroup name="selectOne" value="1" onChange={onChange}>
                <GoARadioItem
                    value="1"
                    label="Option one"
                    description={<span>Help text with a <a href="#">link</a>.</span>}
                    />
                <GoARadioItem value="2" label="Option two" />
                <GoARadioItem value="3" label="Option three" />
              </GoARadioGroup>
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
            <GoabFormItem label="Select one option">
              <GoabRadioGroup name="selectOne" value="1" onChange={onChange}>
                <GoabRadioItem
                    value="1"
                    label="Option one"
                    description={<span>Help text with a <a href="#">link</a>.</span>}
                    />
                <GoabRadioItem value="2" label="Option two" />
                <GoabRadioItem value="3" label="Option three" />
              </GoabRadioGroup>
            </GoabFormItem> 
            `}
        />
      )}

      <GoabFormItem label="Select one option">
        <GoabRadioGroup name="selectOne" value="1" onChange={noop}>
          <GoabRadioItem
            value="1"
            label="Option one"
            description={
              <span>
                  Help text with a <a href="#">link</a>.
                </span>
            }
          />
          <GoabRadioItem value="2" label="Option two" />
          <GoabRadioItem value="3" label="Option three" />
        </GoabRadioGroup>
      </GoabFormItem>
    </Sandbox>
  )
}

export default IncludeALinkInTheHelperTextOfAnOption;
