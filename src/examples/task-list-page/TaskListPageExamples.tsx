import { Sandbox } from "@components/sandbox";
import { GoABadge, GoACallout, GoATable } from "@abgov/react-components";
import "./task-list-page-example.css";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export function TaskListPageExamples() {
  return (
    <div className="task-list-page-example">
      <div className="component-example-header">
        <h3 id="component-example-1">Task list page</h3>
        <a href="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4107&mode=design" target="_blank" rel="noreferrer">
          View in Figma
        </a>
      </div>

      <Sandbox fullWidth allow={["h2", "h3", "p", "div"]}>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            p.small {
              margin-left: var(--goa-space-xl);
              margin-top: var(--goa-space-2xs);
              font-size: var(--goa-typography-body-s);
              color: var(--goa-color-text-secondary);
            }
            div.warning {
              width: 22rem;
            }
          `}
        />
        <h2>Apply for a service</h2>
        <div className="warning">
          <GoACallout
            type="important"
            size="medium"
            heading="Application incomplete"
            mb="2xl"
            mt="xl">
            You have completed 1 of 3 sections.
          </GoACallout>
        </div>

        <h3>1. Before you start</h3>
        <GoATable width="100%" mb="2xl" mt="l">
          <tbody>
            <tr>
              <td>
                <a href="#">Reads terms of use</a>
              </td>
              <td className="goa-table-number-column">
                <GoABadge type="success" content="Completed" ariaLabel="completed"></GoABadge>
              </td>
            </tr>
          </tbody>
        </GoATable>

        <h3>2. Prepare application</h3>
        <GoATable width="100%" mb="2xl" mt="l">
          <tbody>
            <tr>
              <td>
                <a href="#">Your contact details</a>
              </td>
              <td className="goa-table-number-column">
                <GoABadge
                  type="information"
                  content="Not started"
                  ariaLabel="not started"></GoABadge>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Your family</a>
              </td>
              <td className="goa-table-number-column">
                <GoABadge
                  type="information"
                  content="Not started"
                  ariaLabel="not started"></GoABadge>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Verify your identity</a>
              </td>
              <td className="goa-table-number-column">
                <GoABadge
                  type="information"
                  content="Not started"
                  ariaLabel="not started"></GoABadge>
              </td>
            </tr>
          </tbody>
        </GoATable>

        <h3>3. Schedule service</h3>
        <p className="small text-secondary">
          You need to complete the previous section before you can start this task.
        </p>
        <GoATable width="100%" mt="l" mb="3xl">
          <tbody>
            <tr>
              <td>Receive email confirmation</td>
              <td className="goa-table-number-column">
                <GoABadge
                  type="light"
                  content="Cannot start yet"
                  ariaLabel="cannot start yet"></GoABadge>
              </td>
            </tr>
            <tr>
              <td>Pay service fee</td>
              <td className="goa-table-number-column">
                <GoABadge
                  type="light"
                  content="Cannot start yet"
                  ariaLabel="cannot start yet"></GoABadge>
              </td>
            </tr>
          </tbody>
        </GoATable>
      </Sandbox>
    </div>
  );
}
