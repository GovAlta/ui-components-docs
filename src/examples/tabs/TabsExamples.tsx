import { ShowDifferentViewsOfDataInATable } from "@examples/show-different-views-of-data-in-a-table.tsx";
import { SetASpecificTabToBeActive } from "@examples/set-a-specific-tab-to-be-active.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const TabsExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Show different views of data in a table"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6311-135722&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <ShowDifferentViewsOfDataInATable />

      <SandboxHeader
        exampleTitle="Set a specific tab to be active"
        figmaExample="">
      </SandboxHeader>
      <SetASpecificTabToBeActive />
    </>

  )
}
