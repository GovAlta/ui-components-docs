import { GoASideMenu, GoASideMenuHeading } from "@abgov/react-components";
import { Link, Outlet } from "react-router-dom";
import { SupportInfo } from "@components/support-info/SupportInfo.tsx";

export default function GetStartedLayout() {
  return (
    <div className="content">
      <section className="side-menu">
        <GoASideMenu>
          <GoASideMenuHeading>Foundations</GoASideMenuHeading>
          <Link to="">Design at GoA</Link>
          <Link to="accessibility">Accessibility</Link>
          <GoASideMenuHeading>Style Guide</GoASideMenuHeading>
          <Link to="color">Color</Link>
          <Link to="iconography">Iconography</Link>
          <Link to="images">Photography</Link>
          <Link to="logo">Logo</Link>
          <Link to="typography">Typography</Link>
          <Link to="layout">Layout</Link>
        </GoASideMenu>
      </section>

      <main className="main">
        <Outlet />
        <SupportInfo />
      </main>
    </div>
  );
}
