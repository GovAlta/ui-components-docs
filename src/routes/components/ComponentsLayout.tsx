import {
  GoADropdown,
  GoADropdownItem,
  GoASideMenu,
  GoATwoColumnLayout,
} from "@abgov/react-components";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LanguageContext } from "@components/sandbox";
import { SupportInfo } from "@components/support-info/SupportInfo";
import { ImproveComponent } from "@components/improve-component/ImproveComponent";
import { AppHeader } from "@components/app-header/AppHeader.tsx";
import { AppFooter } from "@components/app-footer/AppFooter.tsx";

export function ComponentsLayout() {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const lang = localStorage.getItem("goa-docs-lang") || "react";
    setLanguage(lang);
  }, []);

  function onLanguageChange(_name: string, value: string[] | string) {
    const lang = Array.isArray(value) ? value[0] : value;
    setLanguage(lang);
    localStorage.setItem("goa-docs-lang", lang);
  }

  return (
    <LanguageContext.Provider value={language}>
      <GoATwoColumnLayout
        navColumnWidth="224px"
        maxContentWidth="1440px"
        header={<AppHeader />}
        footer={<AppFooter />}
        nav={
          <section className="side-menu">
            <GoADropdown
              value={language}
              onChange={onLanguageChange}
              mb="m"
              relative={true}
            >
              <GoADropdownItem label="React" value="react" />
              <GoADropdownItem label="Angular" value="angular" />
            </GoADropdown>

            <GoASideMenu>
              <Link to="">All</Link>
              <Link to="accordion">Accordion</Link>
              <Link to="badge">Badge</Link>
              <Link to="block">Block</Link>
              <Link to="button">Button</Link>
              <Link to="callout">Callout</Link>
              <Link to="checkbox">Checkbox</Link>
              <Link to="chip">Chip</Link>
              <Link to="combobox">Combobox</Link>
              <Link to="container">Container</Link>
              <Link to="details">Details</Link>
              <Link to="divider">Divider</Link>
              <Link to="dropdown">Dropdown</Link>
              <Link to="file-uploader">File uploader</Link>
              <Link to="footer">Footer</Link>
              <Link to="form-item">Form item</Link>
              <Link to="grid">Grid</Link>
              <Link to="hero-banner">Hero banner</Link>
              <Link to="icons">Icons</Link>
              <Link to="list">List</Link>
              <Link to="microsite-header">Microsite header</Link>
              <Link to="modal">Modal</Link>
              <Link to="notification-banner">Notification banner</Link>
              <Link to="pagination">Pagination</Link>
              <Link to="progress-indicator">Progress indicator</Link>
              <Link to="radio">Radio</Link>
              <Link to="skeleton-loader">Skeleton loader</Link>
              <Link to="snackbar">Snackbar</Link>
              <Link to="spacer">Spacer</Link>
              <Link to="site-header">Site header</Link>
              <Link to="stepper">Stepper</Link>
              <Link to="table">Table</Link>
              <Link to="text-area">Text area</Link>
              <Link to="text-field">Text field</Link>
              <Link to="tooltip">Tooltip</Link>
            </GoASideMenu>
          </section>
        }
      >
        <main className="main">
          <Outlet />
          <SupportInfo />
          <ImproveComponent />
        </main>
      </GoATwoColumnLayout>
    </LanguageContext.Provider>
  );
}

export default ComponentsLayout;
