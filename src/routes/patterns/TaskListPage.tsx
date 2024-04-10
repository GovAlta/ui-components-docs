import {
  GoAAppFooter,
  GoAAppHeader, GoABadge,
  GoACallout,
  GoAMicrositeHeader,
  GoAOneColumnLayout,
  GoAPageBlock,
  GoATab, GoATable,
  GoATabs
} from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import Browser from "@components/browser/Browser";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function TaskListPage() {
  return (
    <>
      <h1>Task list page</h1>
      <h3>
        This is the starting point for a citizen to begin your form from within your service or from
        Alberta.ca.
      </h3>
      <ComponentContent
        contentClassName="task-list-page"
        tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code examples">
            <h3 id="task-list-page">Task list page</h3>
            <Sandbox fullWidth allow={["Browser"]}>
              <Browser ignore>
                <GoAOneColumnLayout>
                  <section slot="header">
                    <GoAMicrositeHeader type="alpha" version="UAT" />
                    <GoAAppHeader url="/" heading="Design System">
                      <a href="/login">Sign in</a>
                    </GoAAppHeader>
                  </section>
                  <GoAPageBlock width="704px">
                    <h1>Apply for foundational learning assistance</h1>
                    <h3>
                      1-3 sentence overview gravida amet habitant quam semper rhoncus vitae
                      vulputate eu.
                    </h3>
                    <GoACallout type="important" size="medium" heading="Application incomplete" mb="3xl">
                      You have completed 0 of 3 sections.
                    </GoACallout>

                    <h3>1. Prepare application</h3>
                    <div className="container-example-1">
                      <GoATable width="100%" mb="2xl">
                        <tbody>
                          <tr>
                            <td>
                              <a href="#">Your situation</a>
                            </td>
                            <td className="align-right">
                              <GoABadge
                                type="success"
                                content="Completed"
                                ariaLabel="completed"></GoABadge>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Experience</a>
                            </td>
                            <td className="align-right">
                              <GoABadge
                                type="dark"
                                content="Inprogress"
                                ariaLabel="in progress"></GoABadge>
                            </td>
                          </tr>
                        </tbody>
                      </GoATable>
                    </div>
                    <h3>2. Apply</h3>
                    <div className="container-example-1">
                      <GoATable width="100%" mt="l" mb="2xl">
                        <tbody className="striped">
                          <tr>
                            <td>
                              <a href="#">Topic</a>
                            </td>
                            <td className="align-right">
                              <GoABadge
                                type="information"
                                content="Not started"
                                ariaLabel="not started"></GoABadge>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Topic</a>
                            </td>
                            <td className="align-right">
                              <GoABadge
                                type="information"
                                content="Not started"
                                ariaLabel="not started"></GoABadge>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Topic</a>
                            </td>
                            <td className="align-right">
                              <GoABadge
                                type="information"
                                content="Not started"
                                ariaLabel="not started"></GoABadge>
                            </td>
                          </tr>
                        </tbody>
                      </GoATable>
                    </div>

                    <h3>3. Enroll</h3>
                    <div className="container-example-1">
                      <GoATable width="100%" mt="l" mb="3xl">
                        <tbody className="striped">
                          <tr>
                            <td>Topic</td>
                            <td className="align-right">
                              <GoABadge
                                type="midtone"
                                content="Cannot start yet"
                                ariaLabel="cannot start yet"></GoABadge>
                            </td>
                          </tr>
                          <tr>
                            <td>Topic</td>
                            <td className="align-right">
                              <GoABadge
                                type="midtone"
                                content="Cannot start yet"
                                ariaLabel="cannot start yet"></GoABadge>
                            </td>
                          </tr>
                        </tbody>
                      </GoATable>
                    </div>
                  </GoAPageBlock>
                  <section slot="footer">
                    <GoAAppFooter />
                  </section>
                </GoAOneColumnLayout>
              </Browser>
            </Sandbox>
          </GoATab>

          <GoATab heading="Design guidelines">
            <div className="image-container">
              <h2 id="overview" className="hidden">
                Overview
              </h2>
              <img
                alt="task list page overview image"
                src="/images/patterns/form-pattern_task-list-page.png"
              />
            </div>
            <h2 id="when-to-use" className="second-heading">
              When to use a task list page
            </h2>
            <p>
              Use a task list page to provide a structure for multiple steps in a service. Show a task list page when a citizen begins a service, and when they return to the service.
            </p>

            <h2 id="how-to" style={{ marginTop: "64px" }}>
              How to define a task
            </h2>
            <p>
              The size and complexity of a task is determined by the service and content. A task can be defined as small as a single action, such as: “sign a document”, or “upload a file”, or can be as big as an entire section of a form with multiple question pages and a review page.
            </p>
            <p>
              Use tasks to break down the steps in a service in an understandable way.
            </p>

            <h2 id="show-status" style={{ marginTop: "64px", marginBottom: "24px" }}>
              Show status of tasks
            </h2>
            <p>
              Make it clear which tasks a user has completed and which they still need to complete.
            </p>
            <div className="image-container" style={{ marginTop: "24px" }}>
              <img
                alt="show status of tasks image"
                src="/images/patterns/task-list-status.png"
              />
            </div>

            <h3 style={{ marginBottom: "16px" }}>
              Suggested statuses
            </h3>
            <p>
              Completed (success), In progress (dark grey), Not started (information), Cannot start yet (light grey)
            </p>
            <p>
              Include a summary above the task list to say how many tasks have been completed. This also makes it clearer to the user that there are still tasks left to complete.
            </p>
            <GoACallout type="important" size="medium" heading="Application incomplete" mb="3xl">
              You have completed 0 of 3 sections.
            </GoACallout>

            <h3>How is a task list different than a stepper?</h3>

            <h4 className="with-list">Stepper:</h4>
            <ul>
              <li>a visual navigation within a form</li>
              <li>shown at the top of every page in a form</li>
              <li>scope: sections of a form</li>
            </ul>

            <h4 className="with-list">Task list:</h4>
            <ul>
              <li>can be used to outline more than just sections of a form</li>
              <li>not shown on every page</li>
            </ul>

            <h3>Completing tasks in order</h3>
            <p>
              When possible, allow users to complete tasks in any order. This will help them plan their time and complete sections as and when they can.
            </p>

            <h2 id="anatomy">Anatomy</h2>
            <div className="image-container">
              <img alt="status page anatomy image" src="/images/patterns/task-list-page-anatomy.png" />
            </div>
            <ol>
              <li>Page tile: <a href="#">heading-large</a></li>
              <li>Status of completed sections: <a href="#">goa-callout</a></li>
              <li>Section: <a href="#">task-list-section</a></li>
              <li>Section heading: <a href="#">heading-medium</a></li>
              <li>Task: <a href="#">goa-table</a></li>
            </ol>
          </GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}
