import { GoASideMenu, GoASideMenuHeading } from "@abgov/react-components";
import { Link, Outlet } from "react-router-dom";
import "./content.css";
import { SupportInfo } from "@components/support-info/SupportInfo";
import TOC from '@components/table-of-contents/TOC';
import { useTOC } from '@hooks/useTOC';

export default function ContentLayout() {
  const { tocItems } = useTOC();
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
      <nav className="toc">
        <TOC items={tocItems}/>
      </nav>
    </div>
  );
}
