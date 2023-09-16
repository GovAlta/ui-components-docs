import { GoASideMenu, GoASideMenuGroup, GoASideMenuHeading } from "@abgov/react-components";
import { Link, Outlet } from "react-router-dom";
import { ContactSupport } from "@components/contact-support/ContactSupport";
import './get-started.css';

const GetStarted: React.FC = () => {
  return (
    <>
      <section className="side-menu">
        <GoASideMenu>
          <GoASideMenuHeading>Get Started</GoASideMenuHeading>
          <Link to="">Overview</Link>
          <GoASideMenuGroup heading="UX Designers">
            <Link to="designers">Overview</Link>
          </GoASideMenuGroup>
          <GoASideMenuGroup heading="Developers">
            <Link to="developers">Overview</Link>
            <Link to="developers/setup">Setup</Link>
            <Link to="developers/vscode">VS Code</Link>
            <Link to="developers/technologies">Technologies</Link>
            <Link to="developers/browsers">Supported Browsers</Link>
          </GoASideMenuGroup>
          <GoASideMenuGroup heading="QA Testing">
            <Link to="qa-testing">Overview</Link>
          </GoASideMenuGroup>
          <Link to="roadmap">Roadmap</Link>
          <Link to="service-principles">Service principles</Link>
        </GoASideMenu>
      </section>

      <main className="main">
        <Outlet />

        <ContactSupport />
      </main>
    </>
  );
};

export default GetStarted;
