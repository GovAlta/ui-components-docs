import {
  GoabTab,
  GoabTabs
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import css from "./patterns.module.css";
import { ReviewPageExamples } from "@examples/review-page/ReviewPageExamples";

export default function ReviewPage() {
  return (
    <>
      <h1>Review page</h1>
      <h3>Let users check answers before submitting information to a service.</h3>
      <ComponentContent
        contentClassName="question-page"
        tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            <ReviewPageExamples />
          </GoabTab>

          <GoabTab heading="Design guidelines">
            <figure className={css.imageContainer}>
              <h2 id="overview" className="hidden">
                Overview
              </h2>
              <img
                alt="review page overview image"
                src="/images/patterns/form-pattern_review-page.png"
              />
            </figure>
            <h2 id="toc-1">When to use a review page</h2>
            <div className={css.descriptionWithList}>
              <p>Review and submit your answers at the end of a form or section.</p>
              <p>
                When designing a very large transaction with multiple sections, it may help to
                include a check answers pages at the end of each section.
              </p>
            </div>

            <h2 id="toc-2">Let users go back and change their answers</h2>
            <p>
              Provide a "change" link next to each section so that users can add or change the
              information they are submitting.
            </p>
            <p>
              If you have questions that are optional, let users know that they've skipped it
              without giving an answer by showing their response as "Not provided".
            </p>
            <p>
              Include the full question name again in the change button as "visually hidden" so that
              the screen reader reads out "change [question]" instead of just "change". This gives
              context to a user using assistive technologies while keeping the link simple for most
              users.
            </p>

            <figure className={css.imageContainer}>
              <img
                alt="let users go back and change their answer example image"
                src="/images/patterns/review-page-change-answers.png"
              />
            </figure>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
