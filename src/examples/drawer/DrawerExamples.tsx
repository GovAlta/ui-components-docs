import { DrawerFiltersExample } from "@examples/drawer/DrawerFiltersExample.tsx";
import { DrawerAddRecordExample } from "@examples/drawer/DrawerAddRecordExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const DrawerExamples = () => {
  return (
    <>
      <SandboxHeader exampleTitle="Filters"></SandboxHeader>
      <DrawerFiltersExample />

      <SandboxHeader exampleTitle="Add record"></SandboxHeader>
      <DrawerAddRecordExample />
    </>
  );
};
