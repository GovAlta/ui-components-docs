import { GoabCheckbox, GoabFormItem } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export default function CheckboxExamples () {
  return (
    <>      
      <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>
      <h3 id="component-example-expand-collapse-form">Use tags in the description</h3>
      <Sandbox fullWidth skipRender>
        {/*Angular*/}
        <CodeSnippet
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
        />
        {/*React*/}
        <CodeSnippet
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
        />
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
