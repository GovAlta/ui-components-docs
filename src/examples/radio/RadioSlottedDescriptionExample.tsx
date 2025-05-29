import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabFormItem, GoabRadioGroup, GoabRadioItem } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const RadioSlottedDescriptionExample = () => {
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
            <goa-form-item label="How do you want to sign in?">
              <goa-radio-group name="selectOne" (_change)="onChange($event)">
                <goa-radio-item value="1" label="Sign in as a business">
                  <span slot="description">Use the account associated with the business</span>
                </goa-radio-item>
                <goa-radio-item value="2" label="Sign in as an individual">
                  <span slot="description">If you don't have a Alberta.ca login, you can create one</span>
                </goa-radio-item>
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
              <goab-form-item label="How do you want to sign in?" [formGroup]="form">
                <goab-radio-group name="selectOne"  formControlName="selectOne">
                  <goab-radio-item value="1" label="Sign in as a business" [description]="optionOneDescription">
                    <ng-template #optionOneDescription>
                      Use the account associated with the business
                    </ng-template>
                  </goab-radio-item>
                  <goab-radio-item value="2" label="Sign in as an individual" [description]="optionTwoDescription">
                    <ng-template #optionTwoDescription>
                      If you don't have a Alberta.ca login, you can create one
                    </ng-template>
                  </goab-radio-item>
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
            <GoAFormItem label="How do you want to sign in?">
              <GoARadioGroup name="selectOne" onChange={onChange}>
                <GoARadioItem
                  value="1"
                  label="Sign in as a business"
                  description="Use the account associated with the business"
                />
                <GoARadioItem
                  value="2"
                  label="Sign in as an individual"
                  description="If you don't have a Alberta.ca login, you can create one"
                />
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
            <GoabFormItem label="How do you want to sign in?">
              <GoabRadioGroup name="selectOne" onChange={onChange}>
                <GoabRadioItem
                  value="1"
                  label="Sign in as a business"
                  description="Use the account associated with the business"
                />
                <GoabRadioItem
                  value="2"
                  label="Sign in as an individual"
                  description="If you don't have a Alberta.ca login, you can create one"
                />
              </GoabRadioGroup>
            </GoabFormItem> 
            `}
        />
      )}

      <GoabFormItem label="How do you want to sign in?">
        <GoabRadioGroup name="selectOne" onChange={noop}>
          <GoabRadioItem
            value="1"
            label="Sign in as a business"
            description="Use the account associated with the business"
          />
          <GoabRadioItem
            value="2"
            label="Sign in as an individual"
            description="If you don't have a Alberta.ca login, you can create one"
          />
        </GoabRadioGroup>
      </GoabFormItem>
    </Sandbox>
  )
}