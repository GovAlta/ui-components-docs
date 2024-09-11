import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabFormItem, GoabRadioGroup, GoabRadioItem } from "@abgov/react-components";

const noop = () => { };

export default function RadioExamples () {
  return (
    <>      
      <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>
      <h3 id="component-example-use-tags-in-description">Use tags in the description</h3>
      <Sandbox fullWidth skipRender>
        {/*Angular*/}
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
        {/*React*/}
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
        <GoabFormItem label="Select one option">
          <GoabRadioGroup name="selectOne" value="1" onChange={noop}>
            <GoabRadioItem
                value="1"
                label="Option one"
                description={<span>Help text with a <a href="#">link</a>.</span>}
                />
            <GoabRadioItem value="2" label="Option two" />
            <GoabRadioItem value="3" label="Option three" />
          </GoabRadioGroup>
        </GoabFormItem>
      </Sandbox>
      <h3 id="component-example-max-width">Radio item with max width</h3>
      <Sandbox fullWidth skipRender>
         {/*Angular*/}
         <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
              <goa-form-item label="Select one option">
              <goa-radio-group name="selectOne" value="1" (_change)="onChange($event)">
                <goa-radio-item
                  value="1"
                  label="Option one which has a very long label with lots of text"
                  maxwidth="300px"
                />
                <goa-radio-item value="2" label="Option two" />
                <goa-radio-item value="3" label="Option three" />
              </goa-radio-group>
            </goa-form-item>     
            `}
        />
        {/*React*/}
        <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
            <GoAFormItem label="Select one option">
              <GoARadioGroup name="selectOne" value="1" onChange={onChange}>
                <GoARadioItem
                    value="1"
                    label="Option one which has a very long label with lots of text"
                    maxWidth="300px"
                    />
                <GoARadioItem value="2" label="Option two" />
                <GoARadioItem value="3" label="Option three" />
              </GoARadioGroup>
            </GoAFormItem> 
            `}
        />
        <GoabFormItem label="Select one option">
          <GoabRadioGroup name="selectOne" value="1" onChange={noop}>
            <GoabRadioItem
                value="1"
                label="Option one which has a very long label with lots of text"
                maxWidth="300px"
                />
            <GoabRadioItem value="2" label="Option two" />
            <GoabRadioItem value="3" label="Option three" />
          </GoabRadioGroup>
        </GoabFormItem>
      </Sandbox>
    </>
  );
}
