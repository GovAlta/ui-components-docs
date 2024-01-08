import { GoASideMenu, GoASideMenuGroup, GoASideMenuHeading } from "@abgov/react-components";
import { Link, Outlet } from "react-router-dom";
import { SupportInfo } from "@components/support-info/SupportInfo.tsx";
import TOC from '@components/table-of-contents/TOC';
import { useTOC } from '@hooks/useTOC';

export default function GetStartedLayout() {
  const { tocItems } = useTOC();
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
          <Link to="roadmap">Roadmap</Link>
        </GoASideMenu>
      </section>

      <main className="main">
        <Outlet />
        <SupportInfo />
      </main>
      <nav className="toc">
        <TOC items={tocItems}/>
      </nav>
    </div>
  );
}
