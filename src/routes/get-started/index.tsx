import { GoACallout, GoASideMenu, GoASideMenuGroup, GoASideMenuHeading } from "@abgov/react-components";
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
            <Link to="designers/setup">Setup</Link>
            <Link to="designers/figma-libraries">Figma libraries</Link>
            <Link to="designers/fonts">Fonts</Link>
            <Link to="designers/ux-writing">UX Writing</Link>
          </GoASideMenuGroup>
          <GoASideMenuGroup heading="Developers">
            <Link to="developers">Overview</Link>
            <Link to="developers/setup">Setup</Link>
            <Link to="developers/vscode">VS Code</Link>
            <Link to="developers/technologies">Technologies</Link>
            <Link to="developers/browsers">Supported Browsers</Link>
          </GoASideMenuGroup>
          <Link to="qa-testing">QA Testing</Link>
          <Link to="accessibility">Accessibility</Link>
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
