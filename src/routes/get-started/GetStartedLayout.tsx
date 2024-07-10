import { GoASideMenu, GoASideMenuGroup, GoASideMenuHeading } from "@abgov/react-components";
import { Link, Outlet } from "react-router-dom";
import { SupportInfo } from "@components/support-info/SupportInfo.tsx";

export default function GetStartedLayout() {
  return (
    <div className="content">
      <section className="side-menu">
        <GoASideMenu>
          <GoASideMenuHeading>Get Started</GoASideMenuHeading>
          <Link to="">Overview</Link>
          <Link to="designers">UX Designers</Link>
          <GoASideMenuGroup heading="Developers">
            <Link to="developers">Overview</Link>
            <Link to="developers/setup">Setup</Link>
            <Link to="developers/vscode">VS Code</Link>
            <Link to="developers/technologies">Technologies</Link>
            <Link to="developers/browsers">Supported Browsers</Link>
          </GoASideMenuGroup>
          <Link to="qa-testing">QA testing</Link>
          <Link to="accessibility">Accessibility</Link>
          <Link to="roadmap">Roadmap</Link>
          <Link to="user-experience-guidelines">User experience guidelines</Link>
        </GoASideMenu>
      </section>

      <main className="main">
        <Outlet />
        <SupportInfo />
      </main>
    </div>
  );
}
