import { GoabSideMenu, GoabSpacer } from "@abgov/react-components";
import { Link, Outlet } from "react-router-dom";
import "../foundations/content.css";
import { SupportInfo } from "@components/support-info/SupportInfo";

export default function ContentLayout() {
  return (
    <div className="content">
      <section className="side-menu">
        <GoabSideMenu>
          <GoabSpacer vSpacing="m"></GoabSpacer>
          <Link to="capitalization">Capitalization</Link>
          <Link to="date-format">Date format</Link>
          <Link to="error-messages">Error messages</Link>
          <Link to="helper-text">Helper text</Link>
        </GoabSideMenu>
      </section>

      <main className="main">
        <Outlet />
        <SupportInfo />
      </main>
    </div>
  );
}
