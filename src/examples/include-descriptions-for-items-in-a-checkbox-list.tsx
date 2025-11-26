import { GoabFormItem, GoabCheckbox } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export default function IncludeDescriptionsForIndividualInputOptions() {
  const {version} = useContext(LanguageVersionContext);
  const noop = () => {
  };

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
              <goa-checkbox text="Sign in as a business" (_change)="onChange($event)">
                <span slot="description">Use the account associated with the business</span>
              </goa-checkbox>
              <goa-checkbox text="Sign in as an individual" (_change)="onChange($event)>
                <span slot="description">If you don't have a Alberta.ca login, you can create one</span>
              </goa-checkbox>
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
                    checkboxOne: [""],
                    checkboxTwo: [""]
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
                <goab-checkbox text="Sign in as a business" [description]="optionOneDescription" formControlName="checkboxOne">
                  <ng-template #optionOneDescription>
                    Use the account associated with the business
                  </ng-template>
                </goab-checkbox>
                <goab-checkbox text="Sign in as an individual" [description]="optionTwoDescription" formControlName="checkboxTwo">
                  <ng-template #optionTwoDescription>
                    If you don't have a Alberta.ca login, you can create one
                  </ng-template>
                </goab-checkbox>
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
              <GoACheckbox
                name="checkboxOne"
                value="1"
                text="Sign in as a business"
                description="Use the account associated with the business"
                onChange={onChange}
              />
              <GoACheckbox
                name="checkboxTwo"
                value="2"
                text="Sign in as an individual"
                description="If you don't have a Alberta.ca login, you can create one"
                onChange={onChange}
              />
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
              <GoabCheckbox
                name="checkboxOne"
                value="1"
                text="Sign in as a business"
                description="Use the account associated with the business"
                onChange={onChange}
              />
              <GoabCheckbox
                name="checkboxTwo
                value="2"
                text="Sign in as an individual"
                description="If you don't have a Alberta.ca login, you can create one"
                onChange={onChange}
              />
            </GoabFormItem> 
            `}
        />
      )}

      <GoabFormItem label="How do you want to sign in?">
        <GoabCheckbox
          name="checkboxOne"
          value="1"
          text="Sign in as a business"
          description="Use the account associated with the business"
          onChange={noop}
        />
        <GoabCheckbox
          name="checkboxTwo"
          value="2"
          text="Sign in as an individual"
          description="If you don't have a Alberta.ca login, you can create one"
          onChange={noop}
        />
      </GoabFormItem>
    </Sandbox>
  )
}

