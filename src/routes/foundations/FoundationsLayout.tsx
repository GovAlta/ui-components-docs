import { GoabSideMenu, GoabSideMenuGroup, GoabSpacer } from "@abgov/react-components";
import { Link, Outlet } from "react-router-dom";
import "./foundations.css";
import { SupportInfo } from "@components/support-info/SupportInfo.tsx";

export default function GetStartedLayout() {
  return (
    <div className="content foundations-content">
      <section className="side-menu">
        <GoabSideMenu>
          <GoabSpacer vSpacing="m"></GoabSpacer>
          <Link to="">Design at GoA</Link>
          <Link to="accessibility">Accessibility</Link>
          <Link to="brand-guidelines">Brand guidelines</Link>
          <GoabSideMenuGroup heading="Style guide">
          <Link to="color">Color</Link>
          <Link to="iconography">Iconography</Link>
          <Link to="photography">Photography</Link>
          <Link to="logo">Logo</Link>
          <Link to="typography">Typography</Link>
          <Link to="layout">Layout</Link>
          </GoabSideMenuGroup>
          <GoabSideMenuGroup heading="Content guidelines">
            <Link to="capitalization">Capitalization</Link>
            <Link to="date-format">Date format</Link>
            <Link to="error-messages">Error messages</Link>
            <Link to="helper-text">Helper text</Link>
          </GoabSideMenuGroup>
        </GoabSideMenu>
      </section>

      <main className="main">
        <Outlet />
        <SupportInfo />
      </main>
    </div>
  );
}