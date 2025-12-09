import { GoabSideMenu, GoabSideMenuGroup, GoabSpacer } from "@abgov/react-components";
import { Link, Outlet } from "react-router-dom";
import { SupportInfo } from "@components/support-info/SupportInfo.tsx";

export default function GetStartedLayout() {
  return (
    <div className="content">
      <section className="side-menu">
        <GoabSideMenu>
          <GoabSpacer vSpacing="m"></GoabSpacer>
          <Link to="">Start with the design system</Link>
          <GoabSideMenuGroup heading="Designers">
            <Link to="designers">Overview</Link>
            <Link to="user-experience-guidelines">User experience guidelines</Link>
          </GoabSideMenuGroup>
          <GoabSideMenuGroup heading="Developers">
            <Link to="developers">Overview</Link>
            <Link to="developers/setup">Setup</Link>
            <Link to="developers/bug">Verify a bug</Link>
            <Link to="developers/technologies">Technologies </Link>
            <Link to="developers/browsers">Supported Browsers</Link>
            <Link to="developers/update">Version update guide</Link>
          </GoabSideMenuGroup>
          <Link to="qa-testing">QA testing</Link>
          <Link to="automated-accessibility">Automated accessibility</Link>
          <Link to="component-lifecycle">Component lifecycle</Link>
          <Link to="contribute">Contribute</Link>
          <Link to="roadmap">Roadmap</Link>
          <Link to="lts-policy">Long Term Support (LTS)</Link>
          <Link to="support">Get support</Link>

        </GoabSideMenu>
      </section>

      <main className="main">
        <Outlet />
        <SupportInfo />
      </main>
    </div>
  );
}
