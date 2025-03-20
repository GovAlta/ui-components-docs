import {
  GoabCallout,
  GoabTab,
  GoabTabs
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { TaskListPageExamples } from "@examples/task-list-page/TaskListPageExamples";
import css from "./patterns.module.css";
import { Link } from "react-router-dom";

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
        <GoabTabs>
          <GoabTab heading="Code examples">
            <TaskListPageExamples />
          </GoabTab>

          <GoabTab heading="Design guidelines">
            <figure className={css.imageContainer}>
              <h2 id="overview" className="hidden">
                Overview
              </h2>
              <img
                alt="task list page overview image"
                src="/images/patterns/form-pattern_task-list-page.png"
              />
            </figure>

            <h2 id="toc-1">When to use a task list page</h2>
            <p>Use a task list page to provide a structure for multiple steps in a service. Show a task list page when a citizen begins a service, and when they return to the service.</p>
            <p>When using a task list, group related actions into tasks and show the status of the tasks.</p>

            <h2 id="toc-2">How to define a task</h2>
            <p>The size and complexity of a task is determined by the service and content. A task can be defined as small as a single action, such as: “sign a document”, or “upload a file”, or can be as big as an entire section of a form with multiple question pages and a review page.</p>
            <p>Use tasks to break down the steps in a service in an understandable way.</p>

            <h2 id="toc-2">Show status of tasks</h2>
            <p>
              Make it clear which tasks a user has completed and which they still need to complete.
            </p>

            <figure className={css.imageContainer}>
              <img alt="show status of tasks image" src="/images/patterns/task-list-status.png" />
            </figure>

            <h3>Suggested statuses</h3>
            <p>
              Completed (success), In progress (dark grey), Not started (information), Cannot start yet (light grey)
            </p>
            <p>
              Include a summary above the task list to say how many tasks have been completed. This also makes it clearer to the user that there are still tasks left to complete.
            </p>

            <div style={{maxWidth: "22rem", marginTop: "0.5rem"}}>
              <GoabCallout type="important" size="medium" heading="Application incomplete" mb="3xl">
                You have completed 0 of 3 sections.
              </GoabCallout>
            </div>


            <h3>How is a task list different than a stepper?</h3>
            <div className={css.descriptionWithList}>
              <h4>Stepper:</h4>
              <ul>
                <li>a visual navigation within a form</li>
                <li>shown at the top of every page in a form</li>
                <li>scope: sections of a form</li>
              </ul>
            </div>
            <div className={css.descriptionWithList}>
              <h4>Task list:</h4>
              <ul>
                <li>can be used to outline more than just sections of a form</li>
                <li>not shown on every page</li>
              </ul>
            </div>

            <h3>Completing tasks in order</h3>
            <p>
              When possible, allow users to complete tasks in any order. This will help them plan
              their time and complete sections as and when they can.
            </p>

            <h2 id="toc-3">Anatomy</h2>
            <figure className={css.imageContainer}>
              <img
                alt="status page anatomy image"
                src="/images/patterns/task-list-page-anatomy.png"
              />
            </figure>
            <ol>
              <li>
                Page tile: <Link to="/design-tokens/typography">heading-large</Link>
              </li>
              <li>
                Status of completed sections: <Link to="/components/callout">goa-callout</Link>
              </li>
              <li>
                Section: task-list-section
              </li>
              <li>
                Section heading: <Link to="/design-tokens/typography">heading-medium</Link>
              </li>
              <li>
                Task: <Link to="/components/table">goa-table</Link>
              </li>
            </ol>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
