import {
  GoAAppFooter,
  GoAAppFooterMetaSection,
  GoAAppFooterNavSection,
} from "@abgov/react-components";
import { Link } from "react-router-dom";

export const AppFooter = () => {
  return (
    <GoAAppFooter maxContentWidth="1440px">
      <GoAAppFooterNavSection heading="Resources" maxColumnCount={2}>
        <Link to="/get-started">Get started</Link>
        <Link to="/patterns">Patterns and templates</Link>
        <Link to="/components">Components</Link>
        <Link to="/design-tokens">Styles</Link>
        <Link to="/ux-writing">UX writing</Link>
        <Link to="/contribute">Contribute</Link>
      </GoAAppFooterNavSection>
      <GoAAppFooterNavSection heading="Get support">
        <Link to="/submit-an-issue">Submit an issue</Link>
        <Link to="/support">#design-system-support</Link>
        <Link to="/drop-in-hours">Drop in hours</Link>
      </GoAAppFooterNavSection>
      <GoAAppFooterMetaSection>
        <Link to="/contribute-design-system">
          Contribute to the design system
        </Link>
        <Link to="/leave-feedback">Leave feedback</Link>
        <Link to="/release-notes">Release notes</Link>
      </GoAAppFooterMetaSection>
    </GoAAppFooter>
  );
};
