import { AppFooterShowQuickLinkExample } from "@examples/app-footer/AppFooterShowQuickLinkExample.tsx";
import { AppFooterShowNavigationItemsExample } from "@examples/app-footer/AppFooterShowNavigationItemsExample.tsx";

export const AppFooterExamples = () => {
  return (
    <>
      <h3 id="component-example-footer-meta">Show quick links</h3>
      <AppFooterShowQuickLinkExample />

      <h3 id="component-example-footer-secondary-nav">
        Show links to navigation items
      </h3>
      <AppFooterShowNavigationItemsExample/>
    </>
  )
}
