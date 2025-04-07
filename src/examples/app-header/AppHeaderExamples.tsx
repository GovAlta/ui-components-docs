import { AppHeaderWithNavigationExample } from "@examples/app-header/AppHeaderWithNavigationExample.tsx";
import { AppHeaderWithMenuClickEventExample } from "@examples/app-header/AppHeaderWithMenuClickEventExample.tsx";

export const AppHeaderExamples = () => {
  return (
    <>
      <h3 id="component-example-header-navigation">Header with navigation</h3>
      <AppHeaderWithNavigationExample/>

      <h3 id="component-example-with-menu-click">Header with menu click event</h3>
      <AppHeaderWithMenuClickEventExample/>
    </>
  );
};
