import { GoACheckbox, GoAFormItem } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export default function CheckboxExamples () {
  return (
    <>      
      <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>
      <h3 id="component-example-expand-collapse-form">Use a link in the checkbox description</h3>
      <Sandbox skipRender>
        {/*Angular*/}
        <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
              <goa-form-item label="How would you like to be contacted?">
                <goa-checkbox checked="false" name="email" text="Email">
                  <span slot="description">This some helper text with a <a href="#">link</a>.</span>
                </goa-checkbox>
                <goa-checkbox checked="false" name="phone" text="Phone">
                  <span slot="description">This is some helper text.</span>
                </goa-checkbox>
                <goa-checkbox checked="false" name="textMessage" text="Text message">
                  <span slot="description">This is some helper text.</span>
                </goa-checkbox>
              </goa-form-item>
            `}
        />
        {/*React*/}
        <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
            <GoAFormItem label="How would you like to be contacted?">
              <GoACheckbox 
                checked={false}
                name="email"
                text="Email"
                description={<span>This some helper text with a <a href="#">link</a>.</span>}
                />
              <GoACheckbox
                checked={false}
                name="phone"
                text="Phone"
                description="This is some helper text"
                />
              <GoACheckbox
                checked={false}
                name="textMessage"
                text="Text message"
                description="This is some helper text"
                />
            </GoAFormItem>
            `}
        />
        <GoAFormItem label="How would you like to be contacted?">
          <GoACheckbox 
            mt="s"
            checked={false}
            name="email"
            text="Email"
            description={<span>This some helper text with a <a href="#">link</a>.</span>}
            />
          <GoACheckbox
            checked={false}
            name="phone"
            text="Phone"
            description="This is some helper text"
            />
          <GoACheckbox
            checked={false}
            name="textMessage"
            text="Text message"
            description="This is some helper text"
            />
        </GoAFormItem>
      </Sandbox>

      <h3 id="component-example-select-one-all-any-none">Select one, any, all, or no options from a list</h3>
      <Sandbox skipRender>
        {/*Angular*/}
        <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
              <goa-form-item label="How would you like to be contacted?" helptext="Choose all that apply">
                <goa-checkbox checked="false" name="email" text="Email"/>
                <goa-checkbox checked="false" name="phone" text="Phone"/>
                <goa-checkbox checked="false" name="textMessage" text="Text message"/>
              </goa-form-item>
            `}
        />
        {/*React*/}
        <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
            <GoAFormItem label="How would you like to be contacted?" helpText="Choose all that apply">
              <GoACheckbox 
                checked={false}
                name="email"
                text="Email"
                />
              <GoACheckbox
                checked={false}
                name="phone"
                text="Phone"
                />
              <GoACheckbox
                checked={false}
                name="textMessage"
                text="Text message"
                />
            </GoAFormItem>
            `}
        />
        <GoAFormItem label="How would you like to be contacted?" helpText="Choose all that apply">
          <GoACheckbox 
            mt="s"
            checked={false}
            name="email"
            text="Email"
            />
          <GoACheckbox
            checked={false}
            name="phone"
            text="Phone"
            />
          <GoACheckbox
            checked={false}
            name="textMessage"
            text="Text message"
            mb="none"
            />
        </GoAFormItem>
      </Sandbox>

    </>
  );
}