import {GoASideMenu, GoASideMenuHeading} from "@abgov/react-components";
import {SupportInfo} from "@components/support-info/SupportInfo.tsx";
import {Link, Outlet, useLocation} from "react-router-dom";
import "./support.css";
import TOC from '@components/table-of-contents/TOC';
import { useTOC } from '@hooks/useTOC';

export default function SupportLayout() {
  const location = useLocation();
  const { tocItems } = useTOC();
  return (
    <div className="content">
      <section className="side-menu">
        <GoASideMenu>
          <GoASideMenuHeading>Support</GoASideMenuHeading>
          <Link to="">Overview</Link>
          <Link to="contribute">Contribute</Link>
          <Link to="drop-in-hours">Drop-in hours</Link>
          <Link to="release-notes">Release notes</Link>
        </GoASideMenu>
      </section>

      <main className="main">
        <Outlet />
        <SupportInfo hidden={location.pathname === "/support"}/>
      </main>
      <nav className="toc">
        <TOC items={tocItems}/>
      </nav>
    </div>
  );
}
