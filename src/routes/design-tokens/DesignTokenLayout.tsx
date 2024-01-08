import {
  GoADropdown,
  GoADropdownItem,
  GoASideMenu,
  GoASideMenuHeading,
} from "@abgov/react-components";
import { Link, Outlet } from "react-router-dom";
import { SupportInfo } from "@components/support-info/SupportInfo";
import { useEffect, useState } from "react";
import { DesignTokensLanguageContext } from "@components/sandbox";
import "./DesignToken.css";
import TOC from '@components/table-of-contents/TOC';
import { useTOC } from '@hooks/useTOC';


export function DesignTokenLayout() {
  const [tokenLanguage, setLanguage] = useState("");
  const { tocItems } = useTOC();

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
    <>
    <DesignTokensLanguageContext.Provider value={tokenLanguage}>
      <div className="content design-tokens">
        <section className="side-menu">
          <GoASideMenu>
            <GoASideMenuHeading>Styles</GoASideMenuHeading>

            <GoADropdown
              value={tokenLanguage}
              mb="m"
              ml="m"
              mr="m"
              mt="m"
              onChange={designTokenLanguageChange}
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
        
        <main className="main">
          <Outlet />
          <SupportInfo />
        </main>
        <nav className="toc">
          <TOC items={tocItems}/>
      </nav>
      </div>
    </DesignTokensLanguageContext.Provider>
    </>
  );
}

export default DesignTokenLayout;
