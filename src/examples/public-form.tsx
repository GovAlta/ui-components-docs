import { ComponentContent } from "@components/component-content/ComponentContent.tsx";
import { GoabDetails, GoabGrid, GoabText } from "@abgov/react-components";
import css from "@routes/examples/patterns.module.css";
import { Link } from "react-router-dom";

export function PublicForm() {
  return (
    <ComponentContent tocCssQuery={":is(h2[id], h3[id])"}>
      <GoabDetails heading={"Who are the primary users for the public form pattern?"}>
        <GoabText size="body-m" mt="none" mb="none">
          <strong>Primary users:</strong> citizens, public, external
          <br /><br />
          You are designing a public service for citizens. It should be designed to be as simple and
          intuitive as possible, while ensuring citizens can make complete and informed decisions
          for themselves using the service.
          <br /><br />
          There is an emphasis on an accessible experience with a low cognitive load for users who
          use the service infrequently.
        </GoabText>
      </GoabDetails>
      <h2 id="toc-5">Pages</h2>
      <GoabGrid gap="2xl" minChildWidth="400px" mt={"xl"}>
        <figure className={css.imageContainer}>
          <img
            alt="public form pages overview image"
            src="/images/patterns/form-pattern_overview.png"
          />
        </figure>

        <div>
          <div className={css.linkWithDescription}>
            <GoabText size="heading-m" mt="none" mb="m">
              <Link to="/examples/start-page">1. Start page</Link>
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              This is the starting point for a citizen to begin your form from within your service or
              from Alberta.ca.
            </GoabText>
          </div>

          <div className={css.linkWithDescription}>
            <GoabText size="heading-m" mt="2xl" mb="m">
              <Link to="/examples/task-list-page">2. Task list page (optional)</Link>
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              Outline the entire process for the user and help them through the process by breaking down
              an experience into individual tasks.
            </GoabText>
          </div>

          <div className={css.linkWithDescription}>
            <GoabText size="heading-m" mt="2xl" mb="m">
              <Link to="/examples/question-page">3. Question pages</Link>
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">Ask a user a question or a small set of related questions. </GoabText>
          </div>

          <div className={css.linkWithDescription}>
            <GoabText size="heading-m" mt="2xl" mb="m">
              <Link to="/examples/review-page">4. Review page</Link>
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">Let users check answers before submitting information to a
              service.</GoabText>
          </div>

          <div className={css.linkWithDescription}>
            <GoabText size="heading-m" mt="2xl" mb="m">
              <Link to="/examples/result-page">5. Results page</Link>
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              Let users know that they’ve completed a form, application, or task and tell them what to
              do next.
            </GoabText>
          </div>
        </div>

      </GoabGrid>

      <h2 id="form-structure" className="hidden">
        Form structure
      </h2>
      <GoabText size="heading-l" mt="m" mb="l">
        Form structure
      </GoabText>

      <GoabText size="body-m" mt="l" mb="l">
        Use the public form structure focused on content, and asking the right questions to your user
        to keep the interaction as simple as possible.
      </GoabText>


      <h3 id="toc-1-1">Start with one idea per page</h3>
      <div className={css.descriptionWithList}>
        <GoabText size="heading-s" mt="xl" mb="s">
          Split the form across multiple pages with each page containing just one idea, for example:
        </GoabText>
        <ul>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">one decision they have to make</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">one question they have to answer</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">one piece of information you're telling a user</GoabText>
          </li>
        </ul>
      </div>

      <div className={css.descriptionWithList}>
        <GoabText size="heading-s" mt="xl" mb="s">Starting with one thing per page helps users to:</GoabText>
        <ul>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">understand what you're asking them to do</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">focus on specific questions and its answer</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">find their way through an unfamiliar process</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">use the service on a mobile device</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">recover easily from form errors</GoabText>
          </li>
        </ul>
      </div>

      <div className={css.descriptionWithList}>
        <GoabText size="heading-s" mt="xl" mb="s">It also helps the service:</GoabText>
        <ul>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">handle branching questions and loops</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">design for mobile use</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">save a user’s answers automatically as they go</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">capture analytics about each question</GoabText>
          </li>
        </ul>
      </div>

      <h3 id="toc-1-2">Combine questions when helpful</h3>
      <GoabText size="body-m" mt="l" mb="l">
        Asking a question doesn’t necessarily mean you should use one form field. For example,
        asking a user for their address is best captured all on the same page with multiple fields.
      </GoabText>

      <h2 id="toc-2">Accessibility</h2>
      <div className={css.descriptionWithList}>
        <GoabText size="heading-m" mt="l" mb="l">
          Structuring your form with one idea per page simplifies the experience, and makes your
          form more accessible.
        </GoabText>
        <ol>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">
              <strong>Reduced cognitive load:</strong> Presenting only one idea at a time reduces
              cognitive load on the user. This is particularly beneficial for users with cognitive
              impairments, who might find it difficult to process and respond to multiple questions at
              once.
            </GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">
              <strong>Improved navigation for a screen reader:</strong> This simplified approach
              efficiently guides the user through the form based on each answer and makes it easier to
              navigate with screen readers or other assistive technology.
            </GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">
              <strong>Better error handling:</strong> With smaller sets of questions validated at a
              time errors can be identified and addressed in context. This makes it less confusing and
              less overwhelming for users, particularly those with cognitive impairments and those
              using assistive technologies.
            </GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">
              <strong>Progressive disclosure:</strong> One idea per page allows the user to focus on
              the current task and move through more information slowly. This can be especially
              beneficial to users who are easily distracted or overwhelmed by too much information.
            </GoabText>
          </li>
        </ol>
      </div>

      <h2 id="toc-3">Adding complexity</h2>
      <GoabText size="body-m" mt="l" mb="l">
        Start by making sure that the content and questions you are asking the user are as simple as possible.
      </GoabText>

      <div className={css.descriptionWithList}>
        <GoabText size="heading-s" mt="xl" mb="s">As the complexity of your form grows, consider:</GoabText>
        <ul>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">adding simple progress indicators to communicate
              progress</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">breaking the form into sections on a task list page</GoabText>
          </li>
        </ul>
      </div>

      <h2 id="toc-4">Form stepper</h2>
      <GoabText size="body-m" mt="l" mb="l">
        Avoid using traditional horizontal form steppers for every form. Research has shown that
        horizontal form steppers shown on every page can distract and confuse some users, take up
        too much space, and make it hard to handle branching and conditional sections of a form.
      </GoabText>
      <div className={css.descriptionWithList}>
        <GoabText size="heading-s" mt="xl" mb="s">As the complexity of your form grows, consider: </GoabText>
        <ul>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">adding simple text progress indicators to communicate
              progress</GoabText>
          </li>
          <li>
            <GoabText size="body-m" mt="none" mb="xs">follow the one idea per page approach, and break the form into
              sections as needed using a task list page</GoabText>
          </li>
        </ul>
      </div>
    </ComponentContent>
  );
}

export default PublicForm;
