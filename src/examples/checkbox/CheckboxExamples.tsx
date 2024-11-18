import { GoabCheckbox, GoabFormItem } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export default function CheckboxExamples () {
  const {version} = useContext(LanguageVersionContext);
  return (
    <>      
      <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>
      <h3 id="component-example-expand-collapse-form">Use tags in the description</h3>
      <Sandbox fullWidth skipRender>
        {/*Angular*/}

        {version === "old" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
              <goa-form-item label="Select one or more options">
                <goa-checkbox checked="true" name="optionOne" text="Option one">
                  <span slot="description">Help text with a <a href="#">link</a>.</span>
                </goa-checkbox>
                <goa-checkbox checked="false" name="optionTwo" text="Option two" />
                <goa-checkbox checked="false" name="optionThree" text="Option three" />
              </goa-form-item>
            `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
              <goab-form-item label="Select one or more options">
                <goab-checkbox [checked]="true" name="optionOne" text="Option one" [description]="descriptionTemplate">
                  <ng-template #descriptionTemplate>
                    <span>Help text with a <a href="#">link</a>.</span>
                  </ng-template>
                </goab-checkbox>
                <goab-checkbox [checked]="false" name="optionTwo" text="Option two" />
                <goab-checkbox [checked]="false" name="optionThree" text="Option three" />
              </goab-form-item>
            `}
        />}
        {/*React*/}
        {version === "old" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
              <GoAFormItem label="Select one or more options">
                <GoACheckbox
                  checked={true}
                  name="optionOne"
                  text="Option one"
                  description={<span>Help text with a <a href="#">link</a>.</span>}
                  />
                <GoACheckbox checked={false} name="optionTwo" text="Option two" />
                <GoACheckbox checked={false} name="optionThree" text="Option three" />
              </GoAFormItem>
            `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
              <GoabFormItem label="Select one or more options">
                <GoabCheckbox
                  checked={true}
                  name="optionOne"
                  text="Option one"
                  description={<span>Help text with a <a href="#">link</a>.</span>}
                  />
                <GoabCheckbox checked={false} name="optionTwo" text="Option two" />
                <GoabCheckbox checked={false} name="optionThree" text="Option three" />
              </GoabFormItem>
            `}
        />}

        <GoabFormItem label="Select one or more options">
          <GoabCheckbox
            checked={true}
            name="optionOne"
            text="Option one"
            description={<span>Help text with a <a href="#">link</a>.</span>}
            />
          <GoabCheckbox checked={false} name="optionTwo" text="Option two" />
          <GoabCheckbox checked={false} name="optionThree" text="Option three" />
        </GoabFormItem>
      </Sandbox>
    </>
  );
}
