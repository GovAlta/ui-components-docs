import SortDataInATable from "@examples/sort-data-in-a-table.tsx";
import DisplayNumbersInATableSoTheyCanBeScannedEasily from "@examples/display-numbers-in-a-table-so-they-can-be-scanned-easily.tsx";
import FilterDataInATable from "@examples/filter-data-in-a-table.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const TablesExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Sort data in a table"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6312-97462&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <SortDataInATable />

      <SandboxHeader
        exampleTitle="Display numbers in a table so they can be scanned easily"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6312-97673&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <DisplayNumbersInATableSoTheyCanBeScannedEasily />

      <SandboxHeader
        exampleTitle="Filter data in a table"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=7104-1626357&t=WrSJODVw0mryQrrA-4">
      </SandboxHeader>
      <FilterDataInATable />
    </>
  );
};
