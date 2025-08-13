import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import MultipleActionsinATable from "@examples/multiple-actions-in-a-table.tsx";
import RemoveAFilter from "@examples/require-user-action-before-continuing.tsx";
import CompactButtonGroup from "@examples/compact-button-group.tsx";

export const ButtonGroupExamples = () => {

  return <>
    {/*Button Group Example 1*/}
    <SandboxHeader
      exampleTitle="Multiple actions in a table">
    </SandboxHeader>
    <MultipleActionsinATable />

    {/*Button Group example 2*/}
    <SandboxHeader
      exampleTitle="Show multiple options in a modal">
    </SandboxHeader>
    <RemoveAFilter />
    
    {/*Button Group example 3*/}
    <SandboxHeader
      exampleTitle="Compact button group">
    </SandboxHeader>
    <CompactButtonGroup />

  </>;
};
