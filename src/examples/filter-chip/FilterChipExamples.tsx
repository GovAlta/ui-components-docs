import { TableWithGlobalFiltersExample } from "@examples/filter-chip/TableWithGlobalFiltersExample.tsx";
import { FilterChipDeleteEventExample } from "@examples/filter-chip/FilterChipDeleteEventExample.tsx";
import { FilterChipInteractiveExample } from "@examples/filter-chip/FilterChipInteractiveExample.tsx";
import { FilterChipTypedChipExample } from "@examples/filter-chip/FilterChipTypedChipExample.tsx";

export const FilterChipExamples = () => {
  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>
      <h3 id="component-example-delete">Delete Event</h3>
      <FilterChipDeleteEventExample />

      <h3 id="component-interactive">Interactive Example</h3>
      <FilterChipInteractiveExample />

      <h3 id="component-typed">Typed Chips Example</h3>
      <FilterChipTypedChipExample/>

      <h3 id="component-table-with-global-filters-example">Table with Global Filters</h3>
      <TableWithGlobalFiltersExample />
    </>
  )
}
