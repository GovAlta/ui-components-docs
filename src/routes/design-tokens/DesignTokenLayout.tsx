import {
  GoADropdown,
  GoADropdownItem,
  GoASideMenu,
  GoASideMenuHeading,
  GoATwoColumnLayout,
} from "@abgov/react-components";
import { Link, Outlet } from "react-router-dom";
import { SupportInfo } from "@components/support-info/SupportInfo";
import { useEffect, useState } from "react";
import { DesignTokensLanguageContext } from "@components/sandbox";
import "./DesignToken.css";
import { AppHeader } from "@components/app-header/AppHeader.tsx";
import { AppFooter } from "@components/app-footer/AppFooter.tsx";

export function DesignTokenLayout() {
  const [tokenLanguage, setLanguage] = useState("");

  useEffect(() => {
    const lang = localStorage.getItem("goa-docs-design-tokens-lang");
    setLanguage(lang || "scss");
  }, []);

  function designTokenLanguageChange(_name: string, value: string[] | string) {
    const lang = Array.isArray(value) ? value[0] : value;
    setLanguage(lang);
    localStorage.setItem("goa-docs-design-tokens-lang", lang);
  }

  return (
    <DesignTokensLanguageContext.Provider value={tokenLanguage}>
      <GoATwoColumnLayout
        maxContentWidth="1500px"
        navColumnWidth="224px"
        header={<AppHeader />}
        footer={<AppFooter />}
        nav={
          <section className="side-menu">
            <GoASideMenu>
              <GoASideMenuHeading>Styles</GoASideMenuHeading>

              <GoADropdown
                value={tokenLanguage}
                onChange={designTokenLanguageChange}
                relative={true}
              >
                <GoADropdownItem label="SCSS" value="scss" />
                <GoADropdownItem label="CSS" value="css" />
              </GoADropdown>

              <Link to="">Overview</Link>
              <Link to="border-radius">Border Radius</Link>
              <Link to="border-width">Border Width</Link>
              <Link to="color">Color</Link>
              <Link to="icon-size">Icon Size</Link>
              <Link to="opacity">Opacity</Link>
              <Link to="shadow">Shadow</Link>
              <Link to="spacing">Spacing</Link>
              <Link to="typography">Typography</Link>
            </GoASideMenu>
          </section>
        }
      >
        <main className="main design-tokens">
          <Outlet />
          <SupportInfo />
        </main>
      </GoATwoColumnLayout>
    </DesignTokensLanguageContext.Provider>
  );
}

export default DesignTokenLayout;
