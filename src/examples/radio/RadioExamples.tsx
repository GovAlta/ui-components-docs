import {
  GoARadioGroup,
  GoARadioItem,
  GoAFormItem,
} from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import "./radio-examples.css";

const noop = () => { };

export default function RadioExamples () {
  return (
    <>      
      <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>
      <h3 id="component-example-description">Radio items with description</h3>
      <Sandbox skipRender>
        {/*Angular*/}
        <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
              <goa-form-item label="How do you want to sign in?">
              <goa-radio-group name="selectOne" value="1" (_change)="onChange($event)">
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
        {/*React*/}
        <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
              <GoAFormItem label="How do you want to sign in?">
                <GoARadioGroup name="selectOne" value="1" onChange={onChange}>
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
        <GoAFormItem label="How do you want to sign in?">
          <GoARadioGroup name="selectOne" value="1" onChange={noop}>
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
      </Sandbox>

      <h3 id="component-example-yes-no">Yes or no question horizontally</h3>
      <Sandbox skipRender>
         {/*Angular*/}
         <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
              <goa-form-item label="Have you changed your name?" helptext="This includes changing your last name or spelling your name differently">
                <goa-radio-group name="selectOne" orientation="horizontal" (_change)="onChange($event)">
                  <goa-radio-item
                      value="1"
                      label="Yes"
                      mb="none"
                      />
                  <goa-radio-item
                      value="2"
                      label="No"
                      mb="none"
                      />
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
            <GoAFormItem label="Have you changed your name?" helpText="This includes changing your last name or spelling your name differently">
              <GoARadioGroup name="selectOne" orientation="horizontal" onChange={onChange}>
                <GoARadioItem
                    value="1"
                    label="Yes"
                    mb="none"
                    />
                <GoARadioItem
                    value="2"
                    label="No"
                      mb="none"
                    />
              </GoARadioGroup>
            </GoAFormItem>  
            `}
        />
        <GoAFormItem label="Have you changed your name?" helpText="This includes changing your last name or spelling your name differently">
          <GoARadioGroup name="selectOne" orientation="horizontal">
            <GoARadioItem
                value="1"
                label="Yes"
                mb="none"
                />
            <GoARadioItem
                value="2"
                label="No"
                mb="none"
                />
          </GoARadioGroup>
        </GoAFormItem>        
      </Sandbox>
    </>
  );
}