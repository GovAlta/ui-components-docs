import {
  GoabTab,
  GoabTabs
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import QuestionPageExamples from "@examples/question-page/QuestionPageExamples";
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
        <GoabTabs>
          <GoabTab heading="Code examples">
            <QuestionPageExamples />
          </GoabTab>

          <GoabTab heading="Design guidelines">
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
                <li>understand what you’re asking them to do</li>
                <li>focus on the specific question and its answer</li>
                <li>find their way through an unfamiliar process</li>
                <li>use the service on a mobile device</li>
                <li>recover easily from errors</li>
                <li>navigate with assistive technologies</li>
              </ul>
            </div>

            <div className={css.descriptionWithList}>
              <h4>Helps the service to:</h4>
              <ul>
                <li>handle branching questions and loops</li>
                <li>save a user’s answers automatically as they go</li>
                <li>capture analytics about each question</li>
                <li>manage potential complexity on a page</li>
              </ul>
            </div>

            <h3>What are the main benefits of starting with one idea per page?</h3>
            <p>
              <strong>Focus:</strong> Asking one question at a time helps users focus on the task at
              hand. This is especially beneficial for complex forms or surveys, where multiple
              fields can easily overwhelm or confuse the user. The user's attention is undivided,
              leading to higher quality responses and fewer errors.
            </p>
            <p>
              <strong>Efficiency:</strong> Due to the improved focus of the task at hand, completion
              time for forms can be lowered when measured against traditional long form patterns.
            </p>
            <p>
              <strong>Progression:</strong> This approach gives users a sense of progression and
              accomplishment as they navigate through the form, which can motivate them to complete
              the form. It allows for a linear progression model, which can be less intimidating and
              less overwhelming than seeing a full page of empty fields at once.
            </p>
            <p>
              <strong>Reduce Cognitive Load:</strong> By reducing the amount of information
              presented at once, this design pattern can help minimize cognitive load. The cognitive
              load theory suggests that our working memory capacity is limited, and if too much
              information is presented at once, it can lead to confusion and mistakes.
            </p>
            <p>
              <strong>Adaptive: </strong> allows for adaptive questioning. The answer to one
              question can determine the next question asked. This isn't always possible when all
              questions are presented at once. This can help make the form shorter and more relevant
              for the user, increasing completion rates and user satisfaction.
            </p>
            <p>
              <strong>Data Quality:</strong> With all the user's attention on one question, they are
              more likely to provide accurate and thoughtful answers. This can help to improve the
              quality of data gathered.
            </p>
            <p>
              <strong>Mobile Friendly:</strong> As mobile usage continues to grow, one question at a
              time approach makes it easier for users to fill out the form on smaller screens. Long
              forms can be particularly daunting on mobile devices, so breaking it up into smaller,
              manageable pieces can improve user experience.
            </p>
            <p>
              <strong>Error Handling:</strong>
              If a user makes an error on a form, it is easier and faster to provide feedback on
              that specific question, leading to an overall smoother and less frustrating user
              experience.
            </p>

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

            <h3>Why should I avoid progress indicators on forms?</h3>
            <p>
              <strong>Induce anxiety:</strong> If the form is lengthy, showing a slow-moving
              progress bar can induce anxiety and may deter the user from completing the form. Users
              could feel overwhelmed by the perceived time investment and the number of questions
              yet to come.
            </p>
            <p>
              <strong>False perception:</strong> Progress bars often represent completion in a
              linear fashion, but not all form questions take an equal amount of time or effort to
              complete. A user might spend more time on an earlier question and then speed through
              subsequent ones. This can lead to an inaccurate perception of progress, causing user
              frustration.
            </p>
            <p>
              <strong>Distraction:</strong> In an adaptive questioning scenario where the next
              question depends on the answer to the current question, it's challenging to provide an
              accurate progress indicator as the total number of questions can change dynamically.
            </p>
            <p>
              <strong>Speed over accuracy:</strong> A progress indicator can lead users to rush
              through the form to see the progress bar move faster, thus sacrificing the quality of
              their responses.
            </p>
            <p>
              <strong>Cannot use branching form logic:</strong> It's challenging to provide an
              accurate progress indicator in a non-linear form where the next question depends on
              the answer to the current question. The total number of questions will change
              dynamically.
            </p>
            <p>
              <strong>Additional development and testing time:</strong> that progress indicators and
              form steppers introduce.
            </p>

            <h2 id="toc-4">When to use a form stepper</h2>
            <div className={css.descriptionWithList}>
              <p>A form stepper is a type of visual step/progress indicator in a form. </p>
              <p>
                Start with a one thing per page approach, and consider using a form stepper when all
                of the following is true:
              </p>
              <ul>
                <li>
                  your form can be broken into logical groups or steps that is helpful to constantly
                  communicate to the user
                </li>
                <li>your form is always linear, and a user cannot skip questions</li>
                <li>
                  it is valuable to indicate to the user where they are in the process at all times
                  ongoing
                </li>
                <li>
                  it is valuable to indicate to the user how many steps are remaining, and you can
                  do so reliably
                </li>
                <li>
                  the form is not dynamic, where the number of questions remaining can change
                  depending on the response
                </li>
              </ul>
            </div>

            <p>
              Make it clear which tasks a user has completed and which they still need to complete.
            </p>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
