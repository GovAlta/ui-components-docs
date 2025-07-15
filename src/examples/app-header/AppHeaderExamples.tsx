import { AppHeaderWithNavigationExample } from "@examples/app-header/AppHeaderWithNavigationExample.tsx";
import { AppHeaderWithMenuClickEventExample } from "@examples/app-header/AppHeaderWithMenuClickEventExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const AppHeaderExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Header with navigation"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6309-90004&t=X0IQW5flDDaj8Vyg-4"
      ></SandboxHeader>
      <AppHeaderWithNavigationExample />

      <SandboxHeader exampleTitle="Header with menu click event" figmaExample=""></SandboxHeader>
      <AppHeaderWithMenuClickEventExample />
    </>
  );
};
