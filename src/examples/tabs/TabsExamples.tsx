import { TabsDifferentViewsTableExample } from "@examples/tabs/TabsDifferentViewsTableExample.tsx";
import { TabsSetSpecificTabActiveExample } from "@examples/tabs/TabsSetSpecificTabActiveExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const TabsExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Show different views of data in a table"
        figmaExample="">
      </SandboxHeader>
      <TabsDifferentViewsTableExample />

      <SandboxHeader
        exampleTitle="Set a specific tab to be active"
        figmaExample="">
      </SandboxHeader>
      <TabsSetSpecificTabActiveExample/>
    </>

  )
}
