import {
  GoAButton,
  GoADetails,
  GoATab,
  GoATabs
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import QuestionPageExamples from "@examples/question-page/QuestionPageExamples.tsx";
import css from "./patterns.module.css";

export default function QuestionPage() {
  return (
    <>
      <h1>Question pages</h1>
      <h3>
        This is the starting point for a citizen to begin your form from within your service or from
        Alberta.ca.
      </h3>
      <ComponentContent
        contentClassName="question-page"
        tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code examples">
            <QuestionPageExamples />
          </GoATab>

          <GoATab heading="Design guidelines">
            <figure className={css.imageContainer}>
              <img
                alt="question page overview image"
                src="/images/patterns/form-pattern_question-page.png"
              />
            </figure>
            <h2 id="toc-1">Form structure</h2>
            <div className={css.descriptionWithList}>
              <p>
                Start by splitting the form across multiple pages with each page containing just one
                idea, for example:
              </p>
              <ul>
                <li>one piece of information you’re telling a user</li>
                <li>one decision they have to make</li>
                <li>one question they have to answer</li>
              </ul>
            </div>

            <div className={css.descriptionWithList}>
              <h4>Helps users to:</h4>
              <ul>
                <li>Understand what you’re asking them to do</li>
                <li>Focus on the specific question and its answer</li>
                <li>Find their way through an unfamiliar process</li>
                <li>Use the service on a mobile device</li>
                <li>Recover easily from form errors</li>
                <li>Navigate with assistive technologies</li>
              </ul>
            </div>

            <div className={css.descriptionWithList}>
              <h4>Helps the service to:</h4>
              <ul>
                <li>Handle branching questions and loops</li>
                <li>Save a user’s answers automatically as they go</li>
                <li>Capture analytics about each question</li>
                <li>Manage potential complexity on a page</li>
              </ul>
            </div>

            <GoADetails heading="What are the main benefits of starting with one idea per page?">
              <p>
                <strong>Focus:</strong> Asking one question at a time helps users focus on the task
                at hand. This is especially beneficial for complex forms or surveys, where multiple
                fields can easily overwhelm or confuse the user. The user's attention is undivided,
                leading to higher quality responses and fewer errors.
              </p>
              <p>
                <strong>Efficiency:</strong> Due to the improved focus of the task at hand,
                completion time for forms can be lowered when measured against traditional long form
                patterns.
              </p>
              <p>
                <strong>Progression:</strong> This approach gives users a sense of progression and
                accomplishment as they navigate through the form, which can motivate them to
                complete the form. It allows for a linear progression model, which can be less
                intimidating and less overwhelming than seeing a full page of empty fields at once.
              </p>
              <p>
                <strong>Reduce Cognitive Load:</strong> By reducing the amount of information
                presented at once, this design pattern can help minimize cognitive load. The
                cognitive load theory suggests that our working memory capacity is limited, and if
                too much information is presented at once, it can lead to confusion and mistakes.
              </p>
              <p>
                <strong>Adaptive: </strong> allows for adaptive questioning. The answer to one
                question can determine the next question asked. This isn't always possible when all
                questions are presented at once. This can help make the form shorter and more
                relevant for the user, increasing completion rates and user satisfaction.
              </p>
              <p>
                <strong>Data Quality:</strong> With all the user's attention on one question, they
                are more likely to provide accurate and thoughtful answers. This can help to improve
                the quality of data gathered.
              </p>
              <p>
                <strong>Mobile Friendly:</strong> As mobile usage continues to grow, one question at
                a time approach makes it easier for users to fill out the form on smaller screens.
                Long forms can be particularly daunting on mobile devices, so breaking it up into
                smaller, manageable pieces can improve user experience.
              </p>
              <p>
                <strong>Error Handling:</strong>
                If a user makes an error on a form, it is easier and faster to provide feedback on
                that specific question, leading to an overall smoother and less frustrating user
                experience.
              </p>
            </GoADetails>

            <h2 id="toc-2">Asking the right question</h2>
            <GoAButton type="tertiary" mt="l">
              View more common questions
            </GoAButton>

            <h2 id="toc-3">Using progress indicators</h2>
            <p>
              Start by testing your form without a progress indicator to see if it’s simple enough
              that users do not need one.
            </p>
            <p>
              Try improving the order, type or number of questions before adding a progress
              indicator. If people still have difficulty, try adding a simple step or question
              indicator.
            </p>
            <p>
              Only include the total number of questions if you can do so reliably. As the user
              moves through the form, make sure the indicator updates to tell them which question
              they are on and the total number remaining.
            </p>

            <figure className={css.imageContainer}>
              <img
                alt="Example of a simple progress indicator in a form image"
                src="/images/patterns/question-page-progress-indicator.png"
              />
              <figcaption>Example of a simple progress indicator in a form</figcaption>
            </figure>

            <GoADetails heading="Why should I avoid progress indicators on forms?" mt="l">
              <p>
                <strong>Anxiety:</strong> If the form is lengthy, showing a slow-moving progress bar
                can induce anxiety and may deter the user from completing the form. Users could feel
                overwhelmed by the perceived time investment and the number of questions yet to
                come.
              </p>
              <p>
                <strong>False perception:</strong> Progress bars often represent completion in a
                linear fashion, but not all form questions take an equal amount of time or effort to
                complete. A user might spend more time on an earlier question and then speed through
                subsequent ones. This can lead to an inaccurate perception of progress, causing user
                frustration.
              </p>
              <p>
                <strong>Distraction:</strong> In a one-question-at-a-time format, the primary goal
                is to keep the user focused on one piece of information or one task. Having a
                progress indicator may create an unnecessary distraction, dividing the user's
                attention.
              </p>
              <p>
                <strong>Speed over accuracy:</strong> A progress indicator can lead users to rush
                through the form to see the progress bar move faster, thus sacrificing the quality
                of their responses.
              </p>
              <p>
                <strong>Doesn’t work with branching logic:</strong> It's challenging to provide an
                accurate progress indicator in a non-linear form where the next question depends on
                the answer to the current question. The total number of questions will change
                dynamically.
              </p>
              <p>
                <strong>Additional development and testing time:</strong> that progress indicators
                and form steppers introduce.
              </p>
            </GoADetails>
          </GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}
