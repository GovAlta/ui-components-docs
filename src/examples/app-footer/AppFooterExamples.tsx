import { AppFooterShowQuickLinkExample } from "@examples/app-footer/AppFooterShowQuickLinkExample.tsx";
import { AppFooterShowNavigationItemsExample } from "@examples/app-footer/AppFooterShowNavigationItemsExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const AppFooterExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Show quick links"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59337-150473&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <AppFooterShowQuickLinkExample />

      <SandboxHeader
        exampleTitle="Show links to navigation items"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59340-67128&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <AppFooterShowNavigationItemsExample/>
    </>
  )
}
