import { AppFooterShowQuickLinkExample } from "@examples/app-footer/AppFooterShowQuickLinkExample.tsx";
import { AppFooterShowNavigationItemsExample } from "@examples/app-footer/AppFooterShowNavigationItemsExample.tsx";

export const AppFooterExamples = () => {
  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>
      <h3 id="component-example-footer-meta">Show quick links</h3>
      <AppFooterShowQuickLinkExample />

      <h3 id="component-example-footer-secondary-nav">
        Show links to navigation items
      </h3>
      <AppFooterShowNavigationItemsExample/>
    </>
  )
}
