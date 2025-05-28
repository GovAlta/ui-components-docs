import { Sandbox } from "@components/sandbox";
import "./question-page/question-page-examples.css";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabButton,
  GoabFormItem,
  GoabRadioGroup,
  GoabRadioItem
} from "@abgov/react-components";

export default function QuestionPage() {
  return (
    <div className="question-page-example">

      <Sandbox fullWidth allow={["h2", "p", "a"]}>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            h2.section-title {
              margin-bottom: var(--goa-space-l);
            }
            
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
            
            a.back-link + h2 {
              margin-top: var(--goa-space-2xl);
            }
          `}
        />
        <a href="#" className="back-link">
          Back
        </a>
        <h2 className="section-title">Current school status</h2>
        <p>
          School can encompass foundational programs that help individuals gain basic skills for
          further learning and living, such as literacy and numeracy courses. It also includes
          skills and employment training programs, designed to equip you with specific skills for
          the job market.
        </p>
        <p>
          Post-secondary education, such as Bachelor's, Master's, or Doctoral degrees, and
          continuing education courses for professional or personal development, are also
          categorized under 'school'.
        </p>
        <p>Contact your provider if you’re concerned about your school status.</p>
        <GoabFormItem label="Are you currently in school?" mt="xl">
          <GoabRadioGroup name="school" ariaLabel="are you currently in school?" onChange={() => {
          }}>
            <GoabRadioItem value="yes" label="Yes"></GoabRadioItem>
            <GoabRadioItem value="no" label="No"></GoabRadioItem>
          </GoabRadioGroup>
        </GoabFormItem>
        <GoabButton type="submit" mt="2xl">
          Save and continue
        </GoabButton>
      </Sandbox>


    </div>
  );
}
