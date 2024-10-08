import {GoASideMenu, GoASpacer} from "@abgov/react-components";
import {SupportInfo} from "@components/support-info/SupportInfo.tsx";
import {Link, Outlet, useLocation} from "react-router-dom";
import "./support.css";

export default function SupportLayout() {
  const location = useLocation();
  return (
    <div className="content">
      <section className="side-menu">
        <GoASideMenu>
          <GoASpacer vSpacing="m"></GoASpacer>
          <Link to="">Overview</Link>
          <Link to="drop-in-hours">Drop-in hours</Link>
          <Link to="release-notes">Release notes</Link>
        </GoASideMenu>
      </section>

      <main className="main">
        <Outlet />
        <SupportInfo hidden={location.pathname === "/support"}/>
      </main>
    </div>
  );
}
