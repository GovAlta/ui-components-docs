import { Sandbox } from "@components/sandbox";
import { GoabBadge, GoabCallout, GoabTable } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export function TaskListPageExamples() {
  return (

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
        <GoabCallout
          type="important"
          size="medium"
          heading="Application incomplete"
          mb="2xl"
          mt="xl"
          maxWidth={"360px"}>
          You have completed 1 of 3 sections.
        </GoabCallout>
      </div>

      <h3>1. Before you start</h3>
      <GoabTable width="100%" mb="2xl" mt="l">
        <tbody>
        <tr>
          <td>
            <a href="#">Reads terms of use</a>
          </td>
          <td className="goa-table-number-column">
            <GoabBadge type="success" content="Completed" ariaLabel="completed"></GoabBadge>
          </td>
        </tr>
        </tbody>
      </GoabTable>

      <h3>2. Prepare application</h3>
      <GoabTable width="100%" mb="2xl" mt="l">
        <tbody>
        <tr>
          <td>
            <a href="#">Your contact details</a>
          </td>
          <td className="goa-table-number-column">
            <GoabBadge
              type="information"
              content="Not started"
              ariaLabel="not started"></GoabBadge>
          </td>
        </tr>
        <tr>
          <td>
            <a href="#">Your family</a>
          </td>
          <td className="goa-table-number-column">
            <GoabBadge
              type="information"
              content="Not started"
              ariaLabel="not started"></GoabBadge>
          </td>
        </tr>
        <tr>
          <td>
            <a href="#">Verify your identity</a>
          </td>
          <td className="goa-table-number-column">
            <GoabBadge
              type="information"
              content="Not started"
              ariaLabel="not started"></GoabBadge>
          </td>
        </tr>
        </tbody>
      </GoabTable>

      <h3>3. Schedule service</h3>
      <p className="small">
        You need to complete the previous section before you can start this task.
      </p>
      <GoabTable width="100%" mt="l" mb="3xl">
        <tbody>
        <tr>
          <td>Receive email confirmation</td>
          <td className="goa-table-number-column">
            <GoabBadge
              type="light"
              content="Cannot start yet"
              ariaLabel="cannot start yet"></GoabBadge>
          </td>
        </tr>
        <tr>
          <td>Pay service fee</td>
          <td className="goa-table-number-column">
            <GoabBadge
              type="light"
              content="Cannot start yet"
              ariaLabel="cannot start yet"></GoabBadge>
          </td>
        </tr>
        </tbody>
      </GoabTable>
    </Sandbox>
  );
}