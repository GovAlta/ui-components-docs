import { DrawerFiltersExample } from "@examples/drawer/DrawerFiltersExample.tsx";
import { DrawerAddRecordExample } from "@examples/drawer/DrawerAddRecordExample.tsx";

export const DrawerExamples = () => {
  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>
      <h3 id="component-example-filters">Filters</h3>
      <DrawerFiltersExample />

      <h3 id="component-example-add-record">Add record</h3>
      <DrawerAddRecordExample/>
    </>
  );
};
