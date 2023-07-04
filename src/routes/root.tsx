import { GoAAppFooter, GoAAppHeader, GoAMicrositeHeader, GoAOneColumnLayout } from "@abgov/react-components";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./root.css"

import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Root() {

  const [visible, setVisibility] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setVisibility(true)    
    }, 50) 
  })
  
  return (
    <div className="app" style={{opacity: visible ? "1" : "0"}}>
      <ScrollToTop />
      <GoAOneColumnLayout>
        <section slot="header">
          <GoAMicrositeHeader type={"alpha"} feedbackUrl="https://github.com/GovAlta/ui-components/discussions" maxContentWidth="1500px" />
          <GoAAppHeader heading="Design system" maxContentWidth="1500px">
            <Link to="/get-started">Get started</Link>
            <Link to="/guidelines">Guidelines</Link>
            <Link to="/design-tokens">Design Tokens</Link>
            <Link to="/components">Components</Link>
            <Link to="/patterns">Patterns</Link>
            <Link to="/serivce-toolkit" className="interactive">Service toolkit</Link>
          </GoAAppHeader>
        </section>

        <section className="content">
          <Outlet />
        </section>

        <section slot="footer">
          <GoAAppFooter maxContentWidth="1500px" />
        </section>

      </GoAOneColumnLayout>
    </div>
  );
}