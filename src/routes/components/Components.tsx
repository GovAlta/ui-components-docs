import { GoADropdown, GoADropdownItem, GoASideMenu } from "@abgov/react-components";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LanguageContext } from "@components/sandbox";
import { getCssVarValue } from "../../utils/styling";
import { SupportInfo } from "@components/support-info/SupportInfo.tsx";

export function Components() {
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
      <section className="side-menu">
        <GoADropdown value={language} onChange={onLanguageChange} mb="m" mt="m" mr="m" ml="m">
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
          <Link to="form-stepper">Stepper</Link>
          <Link to="table">Table</Link>
          <Link to="text-area">Text area</Link>
          <Link to="text-field">Text field</Link>
          <Link to="tooltip">Tooltip</Link>
        </GoASideMenu>
      </section>

      <main className="main">
        <Outlet />

        <SupportInfo />

        {/*Improve text*/}
        <div style={{ marginTop: getCssVarValue("--goa-space-2xl") }}>
          <h2>Help improve this component</h2>
          <p>To help make sure that this page is useful, relevant, and up to date, you can:</p>

          <ul style={{ marginLeft: "1.875rem" }}>
            <li>
              <a href="https://github.com/GovAlta/ui…ts/issues/new/choose">
                Propose a change or report a bug on Github
              </a>
              <span> - Read more about </span>
              <a href="https://goa-dio.atlassian.net/wiki/spaces/DIO/pages/2763096293/How+to+work+with+us">
                our contribution process
              </a>
            </li>
          </ul>
        </div>
      </main>
    </LanguageContext.Provider>
  );
}

export default Components;
