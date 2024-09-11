import { GoabBlock, GoabDropdown, GoabDropdownItem, GoabSideMenu, GoabSideMenuHeading, GoabSpacer } from "@abgov/react-components";
import {Link, Outlet} from "react-router-dom";
import {SupportInfo} from "@components/support-info/SupportInfo.tsx";
import {useEffect, useState} from "react";
import { LanguageContext } from "@components/sandbox";
import { GoabDropdownOnChangeDetail } from "@abgov/ui-components-common";

export default function PatternsLayout() {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const lang = localStorage.getItem("goa-docs-lang") || "react";
    setLanguage(lang);
  }, []);

  function onLanguageChange(onChangeDetail: GoabDropdownOnChangeDetail) {
    const lang = Array.isArray(onChangeDetail.value) ? onChangeDetail.value[0] : onChangeDetail.value;
    setLanguage(lang);
    localStorage.setItem("goa-docs-lang", lang);
  }

  return (
    <LanguageContext.Provider value={language}>
      <div className="content">
        <section className="side-menu">
          <GoabSideMenu>
          <GoabSpacer vSpacing="m"></GoabSpacer>
            <Link to="">All</Link>
            <Link to="simple-form">Simple form</Link>
            <GoabSpacer vSpacing="m"></GoabSpacer>
            <GoabSideMenuHeading>Pages</GoabSideMenuHeading>
            <GoabBlock direction="column" mt="s" mb="s" ml="l" mr="l">
              <GoabDropdown value={language} onChange={onLanguageChange}>
                <GoabDropdownItem label="React" value="react" />
                <GoabDropdownItem label="Angular" value="angular" />
              </GoabDropdown>
            </GoabBlock>
            <Link to="layout">Basic page layout</Link>
            <Link to="start-page">Start page</Link>
            <Link to="task-list-page">Task list page</Link>
            <Link to="question-page">Question pages</Link>
            <Link to="review-page">Review page</Link>
            <Link to="result-page">Results page</Link>
          </GoabSideMenu>
        </section>
        <main className="main">
          <Outlet />
          <SupportInfo />
        </main>
      </div>
    </LanguageContext.Provider>
  );
}
