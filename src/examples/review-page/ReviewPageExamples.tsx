import { Sandbox } from "@components/sandbox";
import {
  GoABlock,
  GoAButton,
  GoAButtonGroup,
  GoATable
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import "./review-page-example.css";

export function ReviewPageExamples() {

  return (
    <div className="review-page-example">
      <h3 id="component-example-1">Review page</h3>
      <Sandbox fullWidth>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            .page-header h2 {
              margin-top: 0;
              margin-bottom: 0;
            }
            .page-header h2 + h3 {
              margin-top: var(--goa-space-l);
              color: var(--goa-color-text-secondary);
            }
          `}
        />
        <GoABlock direction="column" gap="none">
          <div className="page-header">
            <h2>Review your answers</h2>
            <h3>Your situation</h3>
          </div>
          <GoATable mt="l">
            <tr>
              <td><strong>What was your (the applicant's) relationship to the deceased?</strong></td>
              <td>Other</td>
              <td>
                <GoAButton type="tertiary">Change</GoAButton>
              </td>
            </tr>
            <tr>
              <td><strong>My relationship to the deceased was</strong></td>
              <td>Manager</td>
              <td>
                <GoAButton type="tertiary">Change</GoAButton>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Was the deceased part of a household that was receiving Assured Income for the
                  Severely Handicapped (AISH) or Income Support?</strong>
              </td>
              <td>Lorem ipsum dolor sit amet consectetur.</td>
              <td>
                <GoAButton type="tertiary">Change</GoAButton>
              </td>
            </tr>
            <tr>
              <td><strong>Was the deceased a minor?</strong></td>
              <td>Lorem ipsum dolor sit amet consectetur.</td>
              <td>
                <GoAButton type="tertiary">Change</GoAButton>
              </td>
            </tr>
            <tr>
              <td><strong>What was the deceased's marital status at time of death?</strong></td>
              <td>Lorem ipsum dolor sit amet consectetur.</td>
              <td>
                <GoAButton type="tertiary">Change</GoAButton>
              </td>
            </tr>
            <tr>
              <td><strong>Did the deceased have any dependents?</strong></td>
              <td>Lorem ipsum dolor sit amet consectetur.</td>
              <td>
                <GoAButton type="tertiary">Change</GoAButton>
              </td>
            </tr>
            <tr>
              <td><strong>Was the deceased a sponsored immigrant?</strong></td>
              <td>Lorem ipsum dolor sit amet consectetur.</td>
              <td>
                <GoAButton type="tertiary">Change</GoAButton>
              </td>
            </tr>
          </GoATable>
          <GoAButtonGroup alignment="start" mt="2xl">
            <GoAButton type="primary">Confirm and continue</GoAButton>
            <GoAButton type="tertiary">Back to dashboard</GoAButton>
          </GoAButtonGroup>
        </GoABlock>
      </Sandbox>
    </div>
  );
}
