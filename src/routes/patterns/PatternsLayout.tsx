import { GoabSideMenu, GoabSideMenuHeading, GoabSpacer } from "@abgov/react-components";
import {Link, Outlet} from "react-router-dom";
import {SupportInfo} from "@components/support-info/SupportInfo.tsx";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useContext } from "react";
import { getVersionedUrlPath } from "@components/version-language-switcher/version-language-constants.ts";

export default function PatternsLayout() {
  const {language, version} = useContext(LanguageVersionContext);
  const prefixUrl = getVersionedUrlPath(version, language);

  const getUrl = (path: string) => {
    return prefixUrl.length > 0 ? `${prefixUrl}/${path}`: path;
  }

  return (
    <div className="content">
      <section className="side-menu">
        <GoabSideMenu>
          <GoabSpacer vSpacing="m"></GoabSpacer>
          <Link to="">All</Link>
          <Link to="simple-form">Simple form</Link>
          <GoabSpacer vSpacing="m"></GoabSpacer>
          <GoabSideMenuHeading>Pages</GoabSideMenuHeading>
          <Link to={getUrl('layout')}>Basic page layout</Link>
          <Link to={getUrl('start-page')}>Start page</Link>
          <Link to={getUrl('task-list-page')}>Task list page</Link>
          <Link to={getUrl('question-page')}>Question pages</Link>
          <Link to={getUrl('review-page')}>Review page</Link>
          <Link to={getUrl('result-page')}>Results page</Link>
        </GoabSideMenu>
      </section>
      <main className="main">
        <Outlet />
        <SupportInfo />
      </main>
    </div>
  );
}
