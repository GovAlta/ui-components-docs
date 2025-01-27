import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import "./review-page-example.css";
import { GoabButton, GoabButtonGroup, GoabTable } from "@abgov/react-components";

export function ReviewPageExamples() {

  return (
    <div className="review-page-example">
      <div className="component-example-header">
        <h3 id="component-example-1">Review page</h3>
        <a
          href="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4109&mode=design"
          target="_blank"
          rel="noreferrer">
          View in Figma
        </a>
      </div>
      <Sandbox fullWidth allow={["h2", "h3"]}>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            h2.section-title {
              margin-top: 0;
              margin-bottom: 0;
            }
            h2.section-title + h3 {
              margin-top: var(--goa-space-l);
              color: var(--goa-color-text-secondary);
            }
          `}
        />
        <h2 className="section-title">Review your answers</h2>
        <h3>Your situation</h3>
        <GoabTable mt="l">
          <tbody>
            <tr>
              <td>
                <strong>What was your (the applicant's) relationship to the deceased?</strong>
              </td>
              <td>Other</td>
              <td>
                <GoabButton type="tertiary">Change</GoabButton>
              </td>
            </tr>
            <tr>
              <td>
                <strong>My relationship to the deceased was</strong>
              </td>
              <td>Manager</td>
              <td>
                <GoabButton type="tertiary">Change</GoabButton>
              </td>
            </tr>
            <tr>
              <td>
                <strong>
                  Was the deceased part of a household that was receiving Assured Income for the
                  Severely Handicapped (AISH) or Income Support?
                </strong>
              </td>
              <td>No</td>
              <td>
                <GoabButton type="tertiary">Change</GoabButton>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Was the deceased a minor?</strong>
              </td>
              <td>No</td>
              <td>
                <GoabButton type="tertiary">Change</GoabButton>
              </td>
            </tr>
            <tr>
              <td>
                <strong>What was the deceased's marital status at time of death?</strong>
              </td>
              <td>Married</td>
              <td>
                <GoabButton type="tertiary">Change</GoabButton>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Did the deceased have any dependents?</strong>
              </td>
              <td>No</td>
              <td>
                <GoabButton type="tertiary">Change</GoabButton>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Was the deceased a sponsored immigrant?</strong>
              </td>
              <td>Yes</td>
              <td>
                <GoabButton type="tertiary">Change</GoabButton>
              </td>
            </tr>
          </tbody>
        </GoabTable>
        <GoabButtonGroup alignment="start" mt="2xl">
          <GoabButton type="primary">Confirm and continue</GoabButton>
          <GoabButton type="tertiary">Back to application overview</GoabButton>
        </GoabButtonGroup>
      </Sandbox>
    </div>
  );
}
