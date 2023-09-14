import { useEffect, useState } from "react";

import "./root.css";

import { Outlet, useLocation } from "react-router-dom";

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
      setVisibility(true);
    }, 50);
  });

  return (
    <div className="app" style={{ opacity: visible ? "1" : "0" }}>
      <ScrollToTop />
      <Outlet />
    </div>
  );
}
