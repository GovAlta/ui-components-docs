import {
  GoabBlock,
  GoabDropdown,
  GoabDropdownItem,
  GoabSideMenu,
} from "@abgov/react-components";
import { Link, Outlet } from "react-router-dom";
import { SupportInfo } from "@components/support-info/SupportInfo";
import { useEffect, useState } from "react";
import { DesignTokensLanguageContext } from "@components/sandbox";
import "./DesignToken.css";
import { GoabDropdownOnChangeDetail } from "@abgov/ui-components-common";

export function DesignTokenLayout() {
  const [tokenLanguage, setLanguage] = useState("");

  useEffect(() => {
    const lang = localStorage.getItem("goa-docs-design-tokens-lang");
    setLanguage(lang || "scss");
  }, []);

  function designTokenLanguageChange(event: GoabDropdownOnChangeDetail) {
    const lang = event.value || "react6";
    setLanguage(lang);
    localStorage.setItem("goa-docs-design-tokens-lang", lang);
  }

  return (
    <>
      <DesignTokensLanguageContext.Provider value={tokenLanguage}>
        <div className="content design-tokens">
          <section className="side-menu">
            <GoabSideMenu>
              <GoabBlock direction="column" mt="s" mb="s" ml="l" mr="l">
                <GoabDropdown value={tokenLanguage} onChange={designTokenLanguageChange}>
                  <GoabDropdownItem label="SCSS" value="scss" />
                  <GoabDropdownItem label="CSS" value="css" />
                </GoabDropdown>
              </GoabBlock>

              <Link to="">All</Link>
              <Link to="border-radius">Border Radius</Link>
              <Link to="border-width">Border Width</Link>
              <Link to="color">Color</Link>
              <Link to="icon-size">Icon Size</Link>
              <Link to="opacity">Opacity</Link>
              <Link to="shadow">Shadow</Link>
              <Link to="spacing">Spacing</Link>
              <Link to="typography">Typography</Link>
            </GoabSideMenu>
          </section>

          <main className="main">
            <Outlet />
            <SupportInfo />
          </main>
        </div>
      </DesignTokensLanguageContext.Provider>
    </>
  );
}

export default DesignTokenLayout;
