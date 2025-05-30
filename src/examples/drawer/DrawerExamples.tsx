import { AddAndEditLotsOfFilters } from "@examples/add-and-edit-lots-of-filters.tsx";
import { AddARecordUsingADrawer } from "@examples/add-a-record-using-a-drawer.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const DrawerExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Add and edit lots of filters">
      </SandboxHeader>
      <AddAndEditLotsOfFilters />

      <SandboxHeader
        exampleTitle="Add record">
      </SandboxHeader>
      <AddARecordUsingADrawer />
    </>
  );
};
