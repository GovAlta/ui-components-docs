import { GoabSideMenu, GoabSideMenuHeading } from "@abgov/react-components";
import { Link, Outlet } from "react-router-dom";
import "./foundations.css";
import { SupportInfo } from "@components/support-info/SupportInfo.tsx";

export default function GetStartedLayout() {
  return (
    <div className="content foundations-content">
      <section className="side-menu">
        <GoabSideMenu>
          <GoabSideMenuHeading>Foundations</GoabSideMenuHeading>
          <Link to="">Design at GoA</Link>
          <Link to="accessibility">Accessibility</Link>
          <Link to="brand-guidelines">Brand guidelines</Link>
          <GoabSideMenuHeading>Style Guide</GoabSideMenuHeading>
          <Link to="color">Color</Link>
          <Link to="iconography">Iconography</Link>
          <Link to="photography">Photography</Link>
          <Link to="logo">Logo</Link>
          <Link to="typography">Typography</Link>
          <Link to="layout">Layout</Link>
        </GoabSideMenu>
      </section>

      <main className="main">
        <Outlet />
        <SupportInfo />
      </main>
    </div>
  );
}