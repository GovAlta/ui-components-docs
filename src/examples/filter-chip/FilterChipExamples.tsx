import { TableWithGlobalFiltersExample } from "@examples/filter-chip/TableWithGlobalFiltersExample.tsx";
import { FilterChipDeleteEventExample } from "@examples/filter-chip/FilterChipDeleteEventExample.tsx";
import { FilterChipInteractiveExample } from "@examples/filter-chip/FilterChipInteractiveExample.tsx";
import { FilterChipTypedChipExample } from "@examples/filter-chip/FilterChipTypedChipExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const FilterChipExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Remove a filter"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6309-59262&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <FilterChipDeleteEventExample />

      <SandboxHeader
        exampleTitle="Interactive Example"
        figmaExample="">
      </SandboxHeader>
      <FilterChipInteractiveExample />


      <SandboxHeader
        exampleTitle="Type to create a new filter"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6308-51849&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>

      <FilterChipTypedChipExample/>

      <SandboxHeader
        exampleTitle="Filter data in a table">
      </SandboxHeader>
      <TableWithGlobalFiltersExample />
    </>
  )
}
