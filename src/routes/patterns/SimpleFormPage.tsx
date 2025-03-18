import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabDetails } from "@abgov/react-components";
import css from "./patterns.module.css";
import { Link } from "react-router-dom";

export default function SimpleFormPage() {
  return (
    <ComponentContent contentClassName="simple-form-page" tocCssQuery={":is(h2[id], h3[id])"}>
      <h1>Public form</h1>
      <h3>
        Design forms that help Albertan citizens understand the task, focus on the question and its
        answer, and complete the form.
      </h3>
      <GoabDetails mt="xl" heading={"Who are the primary users for the simple form pattern?"}>
        <p>
          <strong>Primary users:</strong> citizens, public, external
          <br />
          You are designing a public service for citizens. It should be designed to be as simple and
          intuitive as possible, while ensuring citizens can make complete and informed decisions
          for themselves using the service.
          <br />
          There is an emphasis on an accessible experience with a low cognitive load for users who
          use the service infrequently.
        </p>
      </GoabDetails>

      <h2 id="toc-1">Form structure</h2>
      <p>
        Use the public form structure focused on content, and asking the right questions to your user
        to keep the interaction as simple as possible.
      </p>

      <h3 id="toc-1-1">Start with one idea per page</h3>
      <div className={css.descriptionWithList}>
        <h4>
          Split the form across multiple pages with each page containing just one idea, for example:
        </h4>
        <ul>
          <li>one decision they have to make</li>
          <li>one question they have to answer</li>
          <li>one piece of information you're telling a user</li>
        </ul>
      </div>

      <div className={css.descriptionWithList}>
        <h4>Starting with one thing per page helps users to:</h4>
        <ul>
          <li>understand what you're asking them to do</li>
          <li>focus on specific questions and its answer</li>
          <li>find their way through an unfamiliar process</li>
          <li>use the service on a mobile device</li>
          <li>recover easily from form errors</li>
        </ul>
      </div>

      <div className={css.descriptionWithList}>
        <h4>It also helps the service:</h4>
        <ul>
          <li>handle branching questions and loops</li>
          <li>design for mobile use</li>
          <li>save a user’s answers automatically as they go</li>
          <li>capture analytics about each question</li>
        </ul>
      </div>

      <h3 id="toc-1-2">Combine questions when helpful</h3>
      <p>
        Asking a question doesn’t necessarily mean you should use one form field. For example,
        asking a user for their address is best captured all on the same page with multiple fields.
      </p>

      <h2 id="toc-2">Accessibility</h2>
      <div className={css.descriptionWithList}>
        <h3>
          Structuring your form with one idea per page simplifies the experience, and makes your
          form more accessible.
        </h3>
        <ol>
          <li>
            <strong>Reduced cognitive load:</strong> Presenting only one idea at a time reduces
            cognitive load on the user. This is particularly beneficial for users with cognitive
            impairments, who might find it difficult to process and respond to multiple questions at
            once.
          </li>
          <li>
            <strong>Improved navigation for a screen reader:</strong> This simplified approach
            efficiently guides the user through the form based on each answer and makes it easier to
            navigate with screen readers or other assistive technology.
          </li>
          <li>
            <strong>Better error handling:</strong> With smaller sets of questions validated at a
            time errors can be identified and addressed in context. This makes it less confusing and
            less overwhelming for users, particularly those with cognitive impairments and those
            using assistive technologies.
          </li>
          <li>
            <strong>Progressive disclosure:</strong> One idea per page allows the user to focus on
            the current task and move through more information slowly. This can be especially
            beneficial to users who are easily distracted or overwhelmed by too much information.
          </li>
        </ol>
      </div>

      <h2 id="toc-3">Adding complexity</h2>
      <p>
        Start by making sure that the content and questions you are asking the user are as simple as possible.
      </p>

      <div className={css.descriptionWithList}>
        <h4>As the complexity of your form grows, consider:</h4>
        <ul>
          <li>adding simple progress indicators to communicate progress</li>
          <li>breaking the form into sections on a task list page</li>
        </ul>
      </div>

      <h2 id="toc-4">Form stepper</h2>
      <p>
        Avoid using traditional horizontal form steppers for every form. Research has shown that
        horizontal form steppers shown on every page can distract and confuse some users, take up
        too much space, and make it hard to handle branching and conditional sections of a form.
      </p>
      <div className={css.descriptionWithList}>
        <h4>As the complexity of your form grows, consider: </h4>
        <ul>
          <li>adding simple text progress indicators to communicate progress</li>
          <li>follow the one idea per page approach, and break the form into sections as needed using a task list page</li>
        </ul>
      </div>

      <h2 id="toc-5">Pages</h2>
      <figure className={css.imageContainer}>
        <img
          alt="public form pages overview image"
          src="/images/patterns/form-pattern_overview.png"
        />
      </figure>

      <div className={css.linkWithDescription}>
        <h3>
          <Link to="/patterns/start-page">1. Start page</Link>
        </h3>
        <p>
          This is the starting point for a citizen to begin your form from within your service or
          from Alberta.ca.
        </p>
      </div>

      <div className={css.linkWithDescription}>
        <h3>
          <Link to="/patterns/task-list-page">2. Task list page (optional)</Link>
        </h3>
        <p>
          Outline the entire process for the user and help them through the process by breaking down
          an experience into individual tasks.
        </p>
      </div>

      <div className={css.linkWithDescription}>
        <h3>
          <Link to="/patterns/question-page">3. Question pages</Link>
        </h3>
        <p>Ask a user a question or a small set of related questions. </p>
      </div>

      <div className={css.linkWithDescription}>
        <h3>
          <Link to="/patterns/review-page">4. Review page</Link>
        </h3>
        <p>Let users check answers before submitting information to a service.</p>
      </div>

      <div className={css.linkWithDescription}>
        <h3>
          <Link to="/patterns/result-page">5. Results page</Link>
        </h3>
        <p>
          Let users know that they’ve completed a form, application, or task and tell them what to
          do next.
        </p>
      </div>
    </ComponentContent>
  );
}
