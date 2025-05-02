import { AppFooterShowQuickLinkExample } from "@examples/app-footer/AppFooterShowQuickLinkExample.tsx";
import { AppFooterShowNavigationItemsExample } from "@examples/app-footer/AppFooterShowNavigationItemsExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const AppFooterExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Show quick links"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6309-60928&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <AppFooterShowQuickLinkExample />

      <SandboxHeader
        exampleTitle="Show links to navigation items"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6309-65947&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <AppFooterShowNavigationItemsExample/>
    </>
  )
}
