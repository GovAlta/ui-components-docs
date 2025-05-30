import {
  GoabTab,
  GoabTabs,
  GoabText
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";
import css from "@routes/examples/patterns.module.css";
import QuestionPageExamples from "@examples/question-page/QuestionPageExamples.tsx";


export function QuestionPage() {
  return (
    <>
      <ComponentContent
        contentClassName="question-page"
        tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code">
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
              <GoabText size="body-m" mt="l" mb="l">
                Start by splitting the form across multiple pages with each page containing just one
                idea, for example:
              </GoabText>
              <ul>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">one piece of information you’re telling a user</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">one decision they have to make</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">one question they have to answer</GoabText>
                </li>
              </ul>
            </div>

            <div className={css.descriptionWithList}>
              <h4>Helps users to:</h4>
              <ul>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">understand what you’re asking them to do</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">focus on the specific question and its answer</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">find their way through an unfamiliar process</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">use the service on a mobile device</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">recover easily from errors</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">navigate with assistive technologies</GoabText>
                </li>
              </ul>
            </div>

            <div className={css.descriptionWithList}>
              <h4>Helps the service to:</h4>
              <ul>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">handle branching questions and loops</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">save a user’s answers automatically as they go</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">capture analytics about each question</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">manage potential complexity on a page</GoabText>
                </li>
              </ul>
            </div>

            <h3>What are the main benefits of starting with one idea per page?</h3>
            <GoabText size="body-m" mt="l" mb="l">
              <strong>Focus:</strong> Asking one question at a time helps users focus on the task at
              hand. This is especially beneficial for complex forms or surveys, where multiple
              fields can easily overwhelm or confuse the user. The user's attention is undivided,
              leading to higher quality responses and fewer errors.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              <strong>Efficiency:</strong> Due to the improved focus of the task at hand, completion
              time for forms can be lowered when measured against traditional long form patterns.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              <strong>Progression:</strong> This approach gives users a sense of progression and
              accomplishment as they navigate through the form, which can motivate them to complete
              the form. It allows for a linear progression model, which can be less intimidating and
              less overwhelming than seeing a full page of empty fields at once.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              <strong>Reduce Cognitive Load:</strong> By reducing the amount of information
              presented at once, this design pattern can help minimize cognitive load. The cognitive
              load theory suggests that our working memory capacity is limited, and if too much
              information is presented at once, it can lead to confusion and mistakes.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              <strong>Adaptive: </strong> allows for adaptive questioning. The answer to one
              question can determine the next question asked. This isn't always possible when all
              questions are presented at once. This can help make the form shorter and more relevant
              for the user, increasing completion rates and user satisfaction.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              <strong>Data Quality:</strong> With all the user's attention on one question, they are
              more likely to provide accurate and thoughtful answers. This can help to improve the
              quality of data gathered.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              <strong>Mobile Friendly:</strong> As mobile usage continues to grow, one question at a
              time approach makes it easier for users to fill out the form on smaller screens. Long
              forms can be particularly daunting on mobile devices, so breaking it up into smaller,
              manageable pieces can improve user experience.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              <strong>Error Handling:</strong>
              If a user makes an error on a form, it is easier and faster to provide feedback on
              that specific question, leading to an overall smoother and less frustrating user
              experience.
            </GoabText>

            <h2 id="toc-3">Using progress indicators</h2>
            <GoabText size="body-m" mt="l" mb="l">
              Start by testing your form without a progress indicator to see if it’s simple enough
              that users do not need one.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              Try improving the order, type or number of questions before adding a progress
              indicator. If people still have difficulty, try adding a simple step or question
              indicator.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              Only include the total number of questions if you can do so reliably. As the user
              moves through the form, make sure the indicator updates to tell them which question
              they are on and the total number remaining.
            </GoabText>

            <figure className={css.imageContainer}>
              <img
                alt="Example of a simple progress indicator in a form image"
                src="/images/patterns/question-page-progress-indicator.png"
              />
              <figcaption>Example of a simple progress indicator in a form</figcaption>
            </figure>

            <h3>Why should I avoid progress indicators on forms?</h3>
            <GoabText size="body-m" mt="l" mb="l">
              <strong>Induce anxiety:</strong> If the form is lengthy, showing a slow-moving
              progress bar can induce anxiety and may deter the user from completing the form. Users
              could feel overwhelmed by the perceived time investment and the number of questions
              yet to come.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              <strong>False perception:</strong> Progress bars often represent completion in a
              linear fashion, but not all form questions take an equal amount of time or effort to
              complete. A user might spend more time on an earlier question and then speed through
              subsequent ones. This can lead to an inaccurate perception of progress, causing user
              frustration.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              <strong>Distraction:</strong> In an adaptive questioning scenario where the next
              question depends on the answer to the current question, it's challenging to provide an
              accurate progress indicator as the total number of questions can change dynamically.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              <strong>Speed over accuracy:</strong> A progress indicator can lead users to rush
              through the form to see the progress bar move faster, thus sacrificing the quality of
              their responses.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              <strong>Cannot use branching form logic:</strong> It's challenging to provide an
              accurate progress indicator in a non-linear form where the next question depends on
              the answer to the current question. The total number of questions will change
              dynamically.
            </GoabText>
            <GoabText size="body-m" mt="l" mb="l">
              <strong>Additional development and testing time:</strong> that progress indicators and
              form steppers introduce.
            </GoabText>

            <h2 id="toc-4">When to use a form stepper</h2>
            <div className={css.descriptionWithList}>
              <GoabText size="body-m" mt="l" mb="l">A form stepper is a type of visual step/progress indicator in a
                form. </GoabText>
              <GoabText size="body-m" mt="l" mb="l">
                Start with a one thing per page approach, and consider using a form stepper when all
                of the following is true:
              </GoabText>
              <ul>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">your form can be broken into logical groups or steps that is
                    helpful to constantly communicate to the user</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">your form is always linear, and a user cannot skip
                    questions</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">it is valuable to indicate to the user where they are in the
                    process at all times ongoing</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">it is valuable to indicate to the user how many steps are
                    remaining, and you can do so reliably</GoabText>
                </li>
                <li>
                  <GoabText size="body-m" mt="none" mb="xs">the form is not dynamic, where the number of questions
                    remaining can change depending on the response</GoabText>
                </li>
              </ul>
            </div>

            <GoabText size="body-m" mt="l" mb="l">
              Make it clear which tasks a user has completed and which they still need to complete.
            </GoabText>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}

export default QuestionPage;
