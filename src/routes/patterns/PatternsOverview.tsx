import { ComponentContent } from "@components/component-content/ComponentContent";
import css from "./patterns.module.css";
import { Link } from "react-router-dom";

export default function PatternsOverviewPage() {
  return (
    <ComponentContent>
      <h1>Patterns</h1>
      <h3>
        Common patterns and page templates to use as a starting point for a government service.
      </h3>
      <div className={css.descriptionWithList}>
        <h3>Patterns</h3>
        <ul>
          <li>
            <Link to="/patterns/simple-form">Simple form</Link>
          </li>
        </ul>
      </div>
      <div className={css.descriptionWithList}>
        <h3>Pages</h3>
        <ul>
          <li>
            <Link to="/patterns/start-page">Start page</Link>
          </li>
          <li>
            <Link to="/patterns/task-list-page">Task list page</Link>
          </li>
          <li>
            <Link to="/patterns/question-page">Question page</Link>
          </li>
          <li>
            <Link to="/patterns/review-page">Review page</Link>
          </li>
          <li>
            <Link to="/patterns/result-page">Results page</Link>
          </li>
        </ul>
      </div>
    </ComponentContent>
  );
}
