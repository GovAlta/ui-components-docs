import { GoAAppHeader, GoAMicrositeHeader } from "@abgov/react-components";
import { Link } from "react-router-dom";

export const AppHeader = () => {
  return (
    <>
      <GoAMicrositeHeader
        type={"alpha"}
        feedbackUrl="https://github.com/GovAlta/ui-components/discussions"
        maxContentWidth="1440px"
      />
      <GoAAppHeader heading="Design system" maxContentWidth="1440px">
        <Link to="/get-started">Get started</Link>
        <Link to="/patterns">Patterns and templates</Link>
        <Link to="/components">Components</Link>
        <Link to="/design-tokens">Styles</Link>
        <Link to="/content">Content</Link>
        <Link to="/support">Support</Link>
        <Link
          to="https://github.com/GovAlta/ui-components/issues/new/choose"
          target="_blank"
        >
          Report a bug
        </Link>
      </GoAAppHeader>
    </>
  );
};
