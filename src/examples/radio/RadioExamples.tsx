import {
  GoARadioGroup,
  GoARadioItem,
  GoAFormItem,
  GoAAppHeader,
  GoAMicrositeHeader,
  GoAPageBlock,
  GoAButton,
  GoASpacer,
  GoAAppFooter
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
      
      <h3 id="component-example-background-information">Show background information before a question</h3>
      <Sandbox fullWidth skipRender allow={["Browser", "h2", "p", "a"]}>
         {/*Angular*/}
         <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
            <a href="#" class="back-link">
              Back
            </a>
            <h2 class="section-title">Current school status</h2>
            <p>
              School can encompass foundational programs that help individuals gain basic skills for further learning and living, such as literacy and numeracy courses. It also includes skills and employment training programs, designed to equip you with specific skills for the job market.
            </p>
            <p>
              Post-secondary education, such as Bachelor's, Master's, or Doctoral degrees, and continuing education courses for professional or personal development, are also categorized under 'school'.
            </p>
            <p>
              Contact your provider if you're concerned about your school status.
            </p>
            <goa-form-item label="Have you changed your name?" helptext="This includes changing your last name or spelling your name differently">
              <goa-radio-group name="selectOne" orientation="horizontal" value="1">
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
            <goa-button type="submit" mt="2xl">
              Continue
            </goa-button>
            `}
        />
        {/*React*/}
        <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
            <a href="#" className="back-link">
              Back
            </a>
            <h2 className="section-title">Current school status</h2>
            <p>
              School can encompass foundational programs that help individuals gain basic skills for further learning and living, such as literacy and numeracy courses. It also includes skills and employment training programs, designed to equip you with specific skills for the job market.
            </p>
            <p>
              Post-secondary education, such as Bachelor's, Master's, or Doctoral degrees, and continuing education courses for professional or personal development, are also categorized under 'school'.
            </p>
            <p>
              Contact your provider if you're concerned about your school status.
            </p>
            <GoAFormItem label="Are you currently in school?" mt="xl">
              <GoARadioGroup name="school" ariaLabel="are you currently in school?">
                <GoARadioItem value="yes" label="Yes"></GoARadioItem>
                <GoARadioItem value="no" label="No"></GoARadioItem>
              </GoARadioGroup>
            </GoAFormItem>
            <GoAButton type="submit" mt="2xl">
              Continue
            </GoAButton>
            `}
        />
          <GoAMicrositeHeader type="live"></GoAMicrositeHeader>
          <GoAAppHeader url="/" heading="Employment outcomes survey"/>
          <GoAPageBlock width="704px">
            <GoASpacer vSpacing="xl"></GoASpacer>
            <a href="#" className="back-link">
              Back
            </a>
            <h2 className="section-title">Current school status</h2>
            <p>
              School can encompass foundational programs that help individuals gain basic skills for further learning and living, such as literacy and numeracy courses. It also includes skills and employment training programs, designed to equip you with specific skills for the job market.
            </p>
            <p>
              Post-secondary education, such as Bachelor's, Master's, or Doctoral degrees, and continuing education courses for professional or personal development, are also categorized under 'school'.
            </p>
            <p>Contact your provider if you're concerned about your school status.</p>
            <GoAFormItem label="Are you currently in school?" mt="xl">
              <GoARadioGroup name="school" ariaLabel="are you currently in school?" onChange={() => {}}>
                <GoARadioItem value="yes" label="Yes"></GoARadioItem>
                <GoARadioItem value="no" label="No"></GoARadioItem>
              </GoARadioGroup>
            </GoAFormItem>
            <GoAButton type="submit" mt="2xl">
              Continue
            </GoAButton>
            <GoASpacer vSpacing="2xl"></GoASpacer>
          </GoAPageBlock>
          <GoAAppFooter></GoAAppFooter>
      </Sandbox>
    </>
  );
}