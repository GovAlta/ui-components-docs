import {
  GoabCallout,
  GoabTab,
  GoabTabs,
  GoabText
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";
import css from "@routes/examples/patterns.module.css";
import { Link } from "react-router-dom";
import { TaskListPageExamples } from "@examples/task-list-page/TaskListPageExamples.tsx";

export function TaskListPage() {
  return (
    <>
      <ComponentContent
        contentClassName="task-list-page"
        tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
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
            <GoabText size="body-m" mt="l" mb="l">
              Use a task list page to provide a structure for multiple steps in a service. Show a task list page when a
              citizen begins a service, and when they return to the service.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              When using a task list, group related actions into tasks and show the status of the tasks.
            </GoabText>

            <h2 id="toc-2">How to define a task</h2>
            <GoabText size="body-m" mt="l" mb="l">
              The size and complexity of a task is determined by the service and content. A task can be defined as
              small as a single action, such as: “sign a document”, or “upload a file”, or can be as big as an entire
              section of a form with multiple question pages and a review page.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              Use tasks to break down the steps in a service in an understandable way.
            </GoabText>

            <h2 id="toc-2">Show status of tasks</h2>
            <GoabText size="body-m" mt="l" mb="l">
              Make it clear which tasks a user has completed and which they still need to complete.
            </GoabText>

            <figure className={css.imageContainer}>
              <img alt="show status of tasks image" src="/images/patterns/task-list-status.png" />
            </figure>

            <h3>Suggested statuses</h3>
            <GoabText size="body-m" mt="l" mb="l">
              Completed (success), In progress (dark grey), Not started (information), Cannot start yet (light grey)
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              Include a summary above the task list to say how many tasks have been completed. This also makes it
              clearer to the user that there are still tasks left to complete.
            </GoabText>

            <div style={{ maxWidth: "22rem", marginTop: "0.5rem" }}>
              <GoabCallout type="important" size="medium" heading="Application incomplete" mb="3xl">
                You have completed 0 of 3 sections.
              </GoabCallout>
            </div>

            <h3>How is a task list different than a stepper?</h3>
            <div className={css.descriptionWithList}>
              <h4>Stepper:</h4>
              <ul>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">a visual navigation within a form</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">shown at the top of every page in a form</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">scope: sections of a form</GoabText>
                </li>
              </ul>
            </div>
            <div className={css.descriptionWithList}>
              <h4>Task list:</h4>
              <ul>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">can be used to outline more than just sections of a
                    form</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">not shown on every page</GoabText>
                </li>
              </ul>
            </div>

            <h3>Completing tasks in order</h3>
            <GoabText size="body-m" mt="l" mb="l">
              When possible, allow users to complete tasks in any order. This will help them plan
              their time and complete sections as and when they can.
            </GoabText>

            <h2 id="toc-3">Anatomy</h2>
            <figure className={css.imageContainer}>
              <img
                alt="status page anatomy image"
                src="/images/patterns/task-list-page-anatomy.png"
              />
            </figure>
            <ol>
              <li>
                <GoabText size="body-m" mt="none" mb="xs">
                  Page tile: <Link to="/design-tokens/typography">heading-large</Link>
                </GoabText>
              </li>
              <li>
                <GoabText size="body-m" mt="none" mb="xs">
                  Status of completed sections: <Link to="/components/callout">goa-callout</Link>
                </GoabText>
              </li>
              <li>
                <GoabText size="body-m" mt="none" mb="xs">
                  Section: task-list-section
                </GoabText>
              </li>
              <li>
                <GoabText size="body-m" mt="none" mb="xs">
                  Section heading: <Link to="/design-tokens/typography">heading-medium</Link>
                </GoabText>
              </li>
              <li>
                <GoabText size="body-m" mt="none" mb="xs">
                  Task: <Link to="/components/table">goa-table</Link>
                </GoabText>
              </li>
            </ol>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}

export default TaskListPage;
