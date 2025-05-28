import { Sandbox } from "@components/sandbox";
import "./question-page/question-page-examples.css";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabButton,
  GoabFormItem,
  GoabInput
} from "@abgov/react-components";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useContext } from "react";

export default function QuestionPage() {
  const { version } = useContext(LanguageVersionContext);
  return (
    <div className="question-page-example">

      <Sandbox fullWidth allow={["h2", "h3", "a"]} skipRender>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            a.back-link::before {
              content: "";
              display: inline-block;
              width: 42px;
              height: 24px;
              vertical-align: middle;
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%230070C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }

            a.back-link:visited::before,
            a.back-link:hover::before {
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%23004f84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }
            
            a.back-link {
             margin-top: var(--goa-space-m);
            }
            
            h3.section-title {
              margin-bottom: 0;
              color: var(--goa-color-text-secondary);
            }
            
            a.back-link + h3 {
              margin-top: var(--goa-space-2xl);
            }
            
            h3.section-title + h2 {
              margin-top: var(--goa-space-xs);
            }
          `}
        />

        {/*Angular Code Snippet - need for leadingContent slot*/}

        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <a href="#" class="back-link">
              Back
            </a>
            <h3 class="section-title text-secondary">
              Step 1 of 5
            </h3>
            <h2>
              Personal information
            </h2>
            <goa-form-item label="What is your name?" mt="xl">
              <goa-input (_change)="onChange($event)" name="name" arialabel="what is your name?" width="50ch"></goa-input>
            </goa-form-item>
            <goa-form-item label="What is your phone number?" mt="xl">
              <goa-input (_change)="onChange($event)" name="phone-number" arialabel="what is your phone number?">
                <div slot="leadingContent">+1</div>
              </goa-input>
            </goa-form-item>
            <goa-form-item label="What is your home postal code?" mt="xl">
              <goa-input (_change)="onChange($event)" name="postal-code" width="14ch" arialabel="what is your home postal code"></goa-input>
            </goa-form-item>
            <goa-button type="submit" mt="2xl">
              Save and continue
            </goa-button>
          `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <a href="#" class="back-link">
              Back
            </a>
            <h3 class="section-title text-secondary">
              Step 1 of 5
            </h3>
            <h2>
              Personal information
            </h2>
            <goab-form-item label="What is your name?" mt="xl">
              <goab-input (onChange)="onChange($event)" name="name" ariaLabel="what is your name?" width="50ch"></goab-input>
            </goab-form-item>
            <goab-form-item label="What is your phone number?" mt="xl">
              <goab-input (onChange)="onChange($event)" name="phone-number" ariaLabel="what is your phone number?">
                <div slot="leadingContent">+1</div>
              </goab-input>
            </goab-form-item>
            <goab-form-item label="What is your home postal code?" mt="xl">
              <goab-input (onChange)="onChange($event)" name="postal-code" width="14ch" ariaLabel="what is your home postal code"></goab-input>
            </goab-form-item>
            <goab-button type="submit" mt="2xl">
              Save and continue
            </goab-button>
          `}
        />}

        {/*React Code Snippet - need for leadingContent slot*/}
        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <a href="#" className="back-link">
              Back
            </a>
            <h3 className="section-title text-secondary">Step 1 of 5</h3>
            <h2>Personal information</h2>
            <GoAFormItem label="What is your name?" mt="xl">
              <GoAInput onChange={() => {}} name="name" ariaLabel="what is your name?" width="50ch" />
            </GoAFormItem>
            <GoAFormItem label="What is your phone number?" mt="xl">
              <GoAInput
                onChange={() => {}}
                name="phone-number"
                ariaLabel="what is your phone number?"
                leadingContent="+1"
              />
            </GoAFormItem>
            <GoAFormItem label="What is your home postal code?" mt="xl">
              <GoAInput
              onChange={() => {}}
              name="postal-code"
              width="14ch"
              ariaLabel="what is your home postal code"></GoAInput>
            </GoAFormItem>
            <GoAButton type="submit" mt="2xl">
              Save and continue
            </GoAButton>
          `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <a href="#" className="back-link">
              Back
            </a>
            <h3 className="section-title text-secondary">Step 1 of 5</h3>
            <h2>Personal information</h2>
            <GoabFormItem label="What is your name?" mt="xl">
              <GoabInput onChange={() => {}} name="name" ariaLabel="what is your name?" width="50ch" />
            </GoabFormItem>
            <GoabFormItem label="What is your phone number?" mt="xl">
              <GoabInput
                onChange={() => {}}
                name="phone-number"
                ariaLabel="what is your phone number?"
                leadingContent="+1"
              />
            </GoabFormItem>
            <GoabFormItem label="What is your home postal code?" mt="xl">
              <GoabInput
              onChange={() => {}}
              name="postal-code"
              width="14ch"
              ariaLabel="what is your home postal code"></GoabInput>
            </GoabFormItem>
            <GoabButton type="submit" mt="2xl">
              Save and continue
            </GoabButton>
          `}
        />}

        <a href="#" className="back-link">
          Back
        </a>
        <h3 className="section-title text-secondary">Step 1 of 5</h3>
        <h2>Personal information</h2>

        <GoabFormItem label="What is your name?" mt="xl">
          <GoabInput onChange={() => {
          }} name="name" ariaLabel="what is your name?" width="50ch" />
        </GoabFormItem>
        <GoabFormItem label="What is your phone number?" mt="xl">
          <GoabInput
            onChange={() => {
            }}
            name="phone-number"
            ariaLabel="what is your phone number?"
            leadingContent="+1"
          />
        </GoabFormItem>
        <GoabFormItem label="What is your home postal code?" mt="xl">
          <GoabInput
            onChange={() => {
            }}
            name="postal-code"
            width="14ch"
            ariaLabel="what is your home postal code"></GoabInput>
        </GoabFormItem>
        <GoabButton type="submit" mt="2xl">
          Save and continue
        </GoabButton>
      </Sandbox>
    </div>
  );
}
