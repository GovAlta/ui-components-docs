import {
  GoabTab,
  GoabTabs
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import css from "./patterns.module.css";
import { ResultPageExamples } from "@examples/result-page/ResultPageExamples";

export default function ResultPage() {
  return (
    <>
      <h1>Result page</h1>
      <h3>
        Let users know that they’ve completed a form, application, or task and tell them what to do next.
      </h3>
      <ComponentContent
        contentClassName="question-page"
        tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            <ResultPageExamples/>
          </GoabTab>

          <GoabTab heading="Design guidelines">
            <h2 id="overview" className="hidden">Overview</h2>
            <figure className={css.imageContainer}>
              <img
                alt="result page overview image"
                src="/images/patterns/form-pattern_results-page.png"
              />
            </figure>

            <h2 id="toc-1">When to use a results page</h2>
            <p>Use a results page when a user has submitted a form, application, or task, and there is a result to show them. </p>

            <h2 id="toc-2">What content to include</h2>
            <ul>
              <li>details of what happens next, and when</li>
              <li>a reference number (if applicable)</li>
              <li>a link to save a record of the confirmation, for examples as a PDF</li>
              <li>link to give feedback</li>
              <li>contact details for the service</li>
              <li>links to information or services that users are likely to need next</li>
            </ul>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
