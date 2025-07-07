import {
  GoabAppFooter,
  GoabAppFooterMetaSection,
  GoabAppFooterNavSection,
  GoabAppHeader,
  GoabMicrositeHeader,
  GoabOneColumnLayout
} from "@abgov/react-components";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import "./root.css";

import {
  MAX_CONTENT_WIDTH,
} from "../global-constants.ts";


import VersionUpdateNotification from "@components/version-language-switcher/VersionUpdateNotification";
import { HelpButton } from "@components/version-language-switcher/HelpButton";
import {
  VersionLanguageSwitcher
} from "@components/version-language-switcher/VersionLanguageSwitcher";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext";
import { useContext } from "react";
import SiteWideNotification from "@components/version-language-switcher/SiteWideNotification";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Root() {
  const { version } = useContext(LanguageVersionContext);
  const location = useLocation();
  const showNotification =
    location.pathname.startsWith("/components") || location.pathname.startsWith("/examples");
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
            version={
              <>
                <VersionLanguageSwitcher />
                <HelpButton />
              </>
            } />
          <GoabAppHeader heading="Design system" maxContentWidth={MAX_CONTENT_WIDTH} url={"/"}
                         fullMenuBreakpoint={996}>
            <Link to="/get-started">Get started</Link>
            <Link to="/foundations">Foundations</Link>
            <Link to="/examples">Examples</Link>
            <Link to="/components">Components</Link>
            <Link to="/design-tokens">Tokens</Link>
            <Link to="/get-started/support" className="interactive">Get support</Link>
          </GoabAppHeader>
          {showNotification && <VersionUpdateNotification version={version} />}
          <SiteWideNotification />
          <Outlet />
        </section>

        <section slot="footer">
          <GoabAppFooter url="/" maxContentWidth={MAX_CONTENT_WIDTH}>
            <GoabAppFooterNavSection heading="Resources" maxColumnCount={2}>
              <Link to="/get-started">Get started</Link>
              <Link to="/foundations">Foundations</Link>
              <Link to="/examples">Examples</Link>
              <Link to="/components">Components</Link>
              <Link to="/design-tokens">Design tokens</Link>
            </GoabAppFooterNavSection>
            <GoabAppFooterNavSection heading="Get support">
              <Link to="/get-started/support/report-bug" target="_blank">Submit an issue</Link>
              <Link to="https://goa-dio.slack.com/archives/C02PLLT9HQ9">#design-system-support</Link>
            </GoabAppFooterNavSection>
            <GoabAppFooterMetaSection>
              <Link to="get-started/contribute">Contribute to the design system</Link>
              <Link to="/get-started/roadmap">Roadmap</Link>
              <Link to="https://github.com/GovAlta/ui-components/releases">Release notes</Link>
            </GoabAppFooterMetaSection>
          </GoabAppFooter>
        </section>
      </GoabOneColumnLayout>
    </div>
  );
}
