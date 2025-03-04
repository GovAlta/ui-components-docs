import { GoARadioGroup, GoARadioItem, GoAFormItem } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { SandboxHeader } from "@components/sandbox/sandboxHeader.tsx";

const noop = () => { };

export default function RadioExamples () {
  return (
    <>      
      <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>
      <SandboxHeader
        exampleTitle="Include a link in the helper text of an option"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59357-26020&t=Mb3UBXNCM9iwb3lq-4">
      </SandboxHeader>
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
        <GoAFormItem label="Select one option">
          <GoARadioGroup name="selectOne" value="1" onChange={noop}>
            <GoARadioItem
                value="1"
                label="Option one"
                description={<span>Help text with a <a href="#">link</a>.</span>}
                />
            <GoARadioItem value="2" label="Option two" />
            <GoARadioItem value="3" label="Option three" />
          </GoARadioGroup>
        </GoAFormItem>        
      </Sandbox>

      <SandboxHeader
        exampleTitle="Max width on long radio items"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59357-75707&t=Mb3UBXNCM9iwb3lq-4">
      </SandboxHeader>
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
                  label="Lorem ipsum dolor sit amet consectetur. Et pulvinar neque netus pellentesque enim ornare tortor eget nam. At eu aliquam rutrum lacus quam nibh."
                  maxwidth="656px"
                />
                <goa-radio-item value="2" label="Lorem ipsum dolor sit amet consectetur. Laoreet scelerisque faucibus nec praesent adipiscing at. Tincidunt ridiculus enim non mauris sem elit turpis. Sapien dictum elementum donec aliquet in malesuada auctor." maxwidth="656px" />
                <goa-radio-item value="3" label="Lorem ipsum dolor sit amet consectetur. Libero vitae nisl dapibus amet nibh blandit dictum posuere. Felis non faucibus libero tristique egestas ultrices massa netus molestie." maxwidth="656px" />
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
                    label="Lorem ipsum dolor sit amet consectetur. Et pulvinar neque netus pellentesque enim ornare tortor eget nam. At eu aliquam rutrum lacus quam nibh."
                    maxWidth="656px"
                    />
                <GoARadioItem value="2" label="Lorem ipsum dolor sit amet consectetur. Laoreet scelerisque faucibus nec praesent adipiscing at. Tincidunt ridiculus enim non mauris sem elit turpis. Sapien dictum elementum donec aliquet in malesuada auctor." maxWidth="656px" />
                <GoARadioItem value="3" label="Lorem ipsum dolor sit amet consectetur. Libero vitae nisl dapibus amet nibh blandit dictum posuere. Felis non faucibus libero tristique egestas ultrices massa netus molestie." maxWidth="656px" />
              </GoARadioGroup>
            </GoAFormItem> 
            `}
        />
        <GoAFormItem label="Select one option">
          <GoARadioGroup name="selectOne" value="1" onChange={noop}>
            <GoARadioItem
                value="1"
                label="Lorem ipsum dolor sit amet consectetur. Et pulvinar neque netus pellentesque enim ornare tortor eget nam. At eu aliquam rutrum lacus quam nibh."
                maxWidth="656px"
                />
            <GoARadioItem value="2" label="Lorem ipsum dolor sit amet consectetur. Laoreet scelerisque faucibus nec praesent adipiscing at. Tincidunt ridiculus enim non mauris sem elit turpis. Sapien dictum elementum donec aliquet in malesuada auctor." maxWidth="656px" />
            <GoARadioItem value="3" label="Lorem ipsum dolor sit amet consectetur. Libero vitae nisl dapibus amet nibh blandit dictum posuere. Felis non faucibus libero tristique egestas ultrices massa netus molestie." maxWidth="656px" />
          </GoARadioGroup>
        </GoAFormItem>        
      </Sandbox>
    </>
  );
}