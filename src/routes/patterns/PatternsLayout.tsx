import { GoABlock, GoADropdown, GoADropdownItem, GoASideMenu, GoASideMenuHeading } from "@abgov/react-components";
import {Link, Outlet} from "react-router-dom";
import {SupportInfo} from "@components/support-info/SupportInfo.tsx";
import {useEffect, useState} from "react";
import { LanguageContext } from "@components/sandbox";

export default function PatternsLayout() {
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
      <div className="content">
        <section className="side-menu">
          <GoASideMenu>
            <GoASideMenuHeading>Patterns</GoASideMenuHeading>
            <Link to="">Overview</Link>
            <Link to="simple-form">Simple form</Link>
            <GoASideMenuHeading>Pages</GoASideMenuHeading>
            <GoABlock direction="column" mt="m" mb="m" ml="m" mr="m">
              <GoADropdown value={language} onChange={onLanguageChange}>
                <GoADropdownItem label="React" value="react" />
                <GoADropdownItem label="Angular" value="angular" />
              </GoADropdown>
            </GoABlock>
            <Link to="layout">Basic page layout</Link>
            <Link to="start-page">Start page</Link>
            <Link to="task-list-page">Task list page</Link>
            <Link to="question-page">Question pages</Link>
            <Link to="review-page">Review page</Link>
            <Link to="result-page">Results page</Link>
          </GoASideMenu>
        </section>
        <main className="main">
          <Outlet />
          <SupportInfo />
        </main>
      </div>
    </LanguageContext.Provider>
  );
}
