import SortDataInATable from "@examples/sort-data-in-a-table.tsx";
import ZebraStripesInATable from "@examples/zebra-stripes-in-a-table.tsx";
import FilterDataInATable from "@examples/filter-data-in-a-table.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import './tables-page-examples.css';

export const TablesExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Table with filters"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=7104-1626357&t=WrSJODVw0mryQrrA-4">
      </SandboxHeader>
      <FilterDataInATable />

      <SandboxHeader
        exampleTitle="Table with zebra stripes"
        figmaExample="">
      </SandboxHeader>
      <ZebraStripesInATable />

      <SandboxHeader
        exampleTitle="Table with sortable columns"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6312-97462&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <SortDataInATable />
    </>
  );
};
