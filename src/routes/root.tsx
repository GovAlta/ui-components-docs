import {
  GoabAppFooter,
  GoabAppFooterMetaSection,
  GoabAppFooterNavSection,
  GoabAppHeader,
  GoabMicrositeHeader,
  GoabOneColumnLayout
} from "@abgov/react-components";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./root.css";

import { useLocation } from "react-router-dom";
import {
  MAX_CONTENT_WIDTH,
} from "../global-constants.ts";
import { VersionLanguageSwitcher } from "@components/version-language-switcher/VersionLanguageSwitcher.tsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Root() {

  const [visible, setVisibility] = useState<boolean>(false);


  useEffect(() => {
    setTimeout(() => {
      setVisibility(true);
    }, 50);
  });

  return (
    <div className="app" style={{ opacity: visible ? "1" : "0" }}>
      <ScrollToTop />
      <GoabOneColumnLayout>
        <section className="header" slot="header">
          <GoabMicrositeHeader
            type={"live"}
            feedbackUrl="https://forms.microsoft.com/r/8Zp7zSJS6W"
            maxContentWidth={MAX_CONTENT_WIDTH}
            version={<VersionLanguageSwitcher/>}
          />
          <GoabAppHeader heading="Design system" maxContentWidth={MAX_CONTENT_WIDTH} url={"/"} fullMenuBreakpoint={1140}>
            <Link to="/get-started">Get started</Link>
            <Link to="/patterns">Patterns</Link>
            <Link to="/components">Components</Link>
            <Link to="/design-tokens">Styles</Link>
            <Link to="/content/capitalization">Content</Link>
            <Link to="/get-started/support">Support</Link>
          </GoabAppHeader>
        </section>

        <Outlet />

        <section slot="footer">
          <GoabAppFooter maxContentWidth={MAX_CONTENT_WIDTH}>
            <GoabAppFooterNavSection heading="Resources" maxColumnCount={2}>
              <Link to="/get-started">Get started</Link>
              <Link to="/patterns">Patterns</Link>
              <Link to="/components">Components</Link>
              <Link to="/design-tokens">Styles</Link>
              <Link to="/content/capitalization">Content</Link>
            </GoabAppFooterNavSection>
            <GoabAppFooterNavSection heading="Get support">
              <Link to="https://design.alberta.ca/get-started/support/report-bug" target="_blank">Submit an issue</Link>
              <Link to="https://goa-dio.slack.com/archives/C02PLLT9HQ9">#design-system-support</Link>
            </GoabAppFooterNavSection>
            <GoabAppFooterMetaSection>
              <Link to="support/contribute">Contribute to the design system</Link>
              <Link to="https://forms.microsoft.com/pages/responsepage.aspx?id=Bhy1K5uvxUKL9Tw7exCFCy-G9FVGUGFMnXc6L30n_ANUM0dTOFg4UU01VVY2QzJPT0k1Qzg2RUJMUy4u" target="_blank">Give feedback</Link>
              <Link to="/support/release-notes">Release notes</Link>
            </GoabAppFooterMetaSection>
          </GoabAppFooter>
        </section>
      </GoabOneColumnLayout>
    </div>
  );
}
