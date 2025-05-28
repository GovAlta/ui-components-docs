import { GoabSideMenu, GoabSideMenuGroup, GoabSpacer } from "@abgov/react-components";
import {Link, Outlet} from "react-router-dom";
import {SupportInfo} from "@components/support-info/SupportInfo.tsx";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useContext } from "react";
import { getVersionedUrlPath } from "@components/version-language-switcher/version-language-constants.ts";

export default function PatternsLayout() {
  const {language, version} = useContext(LanguageVersionContext);
  getVersionedUrlPath(version, language);

  return (
    <div className="content">
      <section className="side-menu">
        <GoabSideMenu>
          <GoabSpacer vSpacing="m"></GoabSpacer>
          <Link to="">All</Link>
          <GoabSideMenuGroup heading="Pages">
            <Link to="public-form">Start page</Link>
            <Link to="public-form">Task list page</Link>
            <Link to="public-form">Question page</Link>
            <Link to="public-form">Information page</Link>
            <Link to="public-form">Review page</Link>
            <Link to="public-form">Results page</Link>
          </GoabSideMenuGroup>
          <GoabSideMenuGroup heading="Tasks">
            <Link to="public-form">Task 1</Link>
            <Link to="public-form">Task 2</Link>
            <Link to="public-form">Task 3</Link>
          </GoabSideMenuGroup>
          <GoabSideMenuGroup heading="Interactions">
            <Link to="public-form">A</Link>
            <Link to="public-form">B</Link>
            <Link to="public-form">C</Link>
            <Link to="public-form">D</Link>
            <Link to="public-form">E</Link>
          </GoabSideMenuGroup>
          <GoabSideMenuGroup heading="How to">
            <Link to="public-form">Upgrade to the latest component version</Link>
            <Link to="public-form">Generate a review page from branch form questions</Link>
          </GoabSideMenuGroup>

        </GoabSideMenu>
      </section>
      <main className="main">
        <Outlet />
        <SupportInfo />
      </main>
    </div>
  );
}
