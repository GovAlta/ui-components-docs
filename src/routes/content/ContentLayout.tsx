import { GoASideMenu, GoASideMenuHeading } from "@abgov/react-components";
import { Link, Outlet } from "react-router-dom";
import "./content.css";
import { SupportInfo } from "@components/support-info/SupportInfo";

export default function ContentLayout() {
  return (
    <div className="content">
      <section className="side-menu">
        <GoASideMenu>
          <GoASideMenuHeading>Content</GoASideMenuHeading>
          <Link to="capitalization">Capitalization</Link>
          <Link to="date-format">Date format</Link>
          <Link to="error-messages">Error messages</Link>
          <Link to="helper-text">Helper text</Link>
        </GoASideMenu>
      </section>

      <main className="main">
        <Outlet />
        <SupportInfo />
      </main>
    </div>
  );
}
