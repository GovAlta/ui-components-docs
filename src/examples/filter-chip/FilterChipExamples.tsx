import { FilterDataInATable } from "@examples/filter-data-in-a-table.tsx";
import { RemoveAFilter } from "@examples/remove-a-filter.tsx";
import { AddAFilterChip } from "@examples/add-a-filter-chip.tsx";
import { TypeToCreateANewFilter } from "@examples/type-to-create-a-new-filter.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const FilterChipExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Remove a filter"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6309-59262&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <RemoveAFilter />

      <SandboxHeader
        exampleTitle="Add a filter chip"
        figmaExample="">
      </SandboxHeader>
      <AddAFilterChip />


      <SandboxHeader
        exampleTitle="Type to create a new filter"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6308-51849&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>

      <TypeToCreateANewFilter />

      <SandboxHeader
        exampleTitle="Filter data in a table">
      </SandboxHeader>
      <FilterDataInATable />
    </>
  )
}
