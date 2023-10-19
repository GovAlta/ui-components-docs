import { GoACallout, GoADropdown, GoADropdownItem, GoASideMenu, GoASideMenuGroup } from "@abgov/react-components";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LanguageContext } from "@components/sandbox";

export function Components() {

  const [language, setLanguage] = useState("");

  useEffect(() => {
    const lang = localStorage.getItem("goa-docs-lang") || "react";
    setLanguage(lang)
  }, [])

  function onLanguageChange(_name: string, value: string[] | string) {
    const lang = Array.isArray(value) ? value[0] : value;
    setLanguage(lang);
    localStorage.setItem("goa-docs-lang", lang);
  }

  return (
    <LanguageContext.Provider value={language}>
      <section className="side-menu">
        <GoADropdown value={language} onChange={onLanguageChange} mb="m">
          <GoADropdownItem label="React" value="react" />
          <GoADropdownItem label="Angular" value="angular" />
        </GoADropdown>

        <GoASideMenu>
          <Link to="">All Components</Link>
          <GoASideMenuGroup heading="Components">
            <Link to="dropdown">Dropdown</Link>
            <Link to="button">Button</Link>
            <Link to="form-stepper">Form Stepper</Link>
            <Link to="checkbox">Checkbox</Link>
          </GoASideMenuGroup>

          <GoASideMenuGroup heading="Layouts">
          </GoASideMenuGroup>

          <GoASideMenuGroup heading="Utilities">
          </GoASideMenuGroup>
        </GoASideMenu>
      </section>

      <main className="main">
        <Outlet />

        <GoACallout type="information" mt="2xl">
          <a href="#">View installation instructions</a>
        </GoACallout>
      </main>
    </LanguageContext.Provider>
  )
}

export default Components;
