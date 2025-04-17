import { AppHeaderWithNavigationExample } from "@examples/app-header/AppHeaderWithNavigationExample.tsx";
import { AppHeaderWithMenuClickEventExample } from "@examples/app-header/AppHeaderWithMenuClickEventExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const AppHeaderExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Header with navigation"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59342-88128&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <AppHeaderWithNavigationExample/>

      <SandboxHeader
        exampleTitle="Header with menu click event"
        figmaExample="">
      </SandboxHeader>
      <AppHeaderWithMenuClickEventExample/>
    </>
  );
};
