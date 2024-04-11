import { Sandbox } from "@components/sandbox";
import { GoABadge, GoACallout, GoATable } from "@abgov/react-components";
import "./task-list-page-example.css";

export function TaskListPageExamples() {
  return (
    <div className="task-list-page-example">
      <h3 id="component-example-1">Task list page</h3>
      <Sandbox fullWidth allow={["h2", "h3"]}>
        <h2>Apply for foundational learning assistance</h2>
        <GoACallout
          type="important"
          size="medium"
          heading="Application incomplete"
          mb="2xl"
          mt="xl">
          You have completed 0 of 3 sections.
        </GoACallout>

        <h3>1. Prepare application</h3>
        <GoATable width="100%" mb="2xl" mt="l">
          <tbody>
            <tr>
              <td>
                <a href="#">Your situation</a>
              </td>
              <td className="goa-table-number-column">
                <GoABadge type="success" content="Completed" ariaLabel="completed"></GoABadge>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Experience</a>
              </td>
              <td className="goa-table-number-column">
                <GoABadge type="dark" content="Inprogress" ariaLabel="in progress"></GoABadge>
              </td>
            </tr>
          </tbody>
        </GoATable>

        <h3>2. Apply</h3>
        <GoATable width="100%" mb="2xl" mt="l">
          <tbody>
            <tr>
              <td><a href="#">Topic</a></td>
              <td className="goa-table-number-column">
                <GoABadge type="information" content="Not started" ariaLabel="not started"></GoABadge>
              </td>
            </tr>
            <tr>
              <td><a href="#">Topic</a></td>
              <td className="goa-table-number-column">
                <GoABadge type="information" content="Not started" ariaLabel="not started"></GoABadge>
              </td>
            </tr>
            <tr>
              <td><a href="#">Topic</a></td>
              <td className="goa-table-number-column">
                <GoABadge type="information" content="Not started" ariaLabel="not started"></GoABadge>
              </td>
            </tr>
          </tbody>
        </GoATable>

        <h3>3. Enroll</h3>
        <GoATable width="100%" mt="l" mb="3xl">
          <tbody>
          <tr>
            <td>Topic</td>
            <td className="goa-table-number-column">
              <GoABadge type="midtone" content="Cannot start yet" ariaLabel="cannot start yet"></GoABadge>
            </td>
          </tr>
          <tr>
            <td>Topic</td>
            <td className="goa-table-number-column">
              <GoABadge type="midtone" content="Cannot start yet" ariaLabel="cannot start yet"></GoABadge>
            </td>
          </tr>
          </tbody>
        </GoATable>
      </Sandbox>
    </div>
  );
}
