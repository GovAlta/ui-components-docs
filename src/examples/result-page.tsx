import {
  GoabTab,
  GoabTabs,
  GoabText
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";
import css from "@routes/examples/patterns.module.css";
import { ResultPageExamples } from "@examples/result-page/ResultPageExamples.tsx";

export function ResultPage() {
  return (
    <>
      <ComponentContent
        contentClassName="question-page"
        tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code examples">
            <ResultPageExamples />
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
            <GoabText size="body-m" mt="l" mb="l">
              Use a results page when a user has submitted a form, application, or task, and there is a result to show
              them.
            </GoabText>

            <h2 id="toc-2">What content to include</h2>
            <ul>
              <li>
                <GoabText size="body-m" mt="none" mb="xs">details of what happens next, and when</GoabText>
              </li>
              <li>
                <GoabText size="body-m" mt="none" mb="xs">a reference number (if applicable)</GoabText>
              </li>
              <li>
                <GoabText size="body-m" mt="none" mb="xs">a link to save a record of the confirmation, for examples as a
                  PDF</GoabText>
              </li>
              <li>
                <GoabText size="body-m" mt="none" mb="xs">link to give feedback</GoabText>
              </li>
              <li>
                <GoabText size="body-m" mt="none" mb="xs">contact details for the service</GoabText>
              </li>
              <li>
                <GoabText size="body-m" mt="none" mb="xs">links to information or services that users are likely to need
                  next</GoabText>
              </li>
            </ul>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}

export default ResultPage;
