import { FilterChipDeleteEventExample } from "@examples/filter-chip/FilterChipDeleteEventExample.tsx";
import { FilterChipInteractiveExample } from "@examples/filter-chip/FilterChipInteractiveExample.tsx";
import { FilterChipTypedChipExample } from "@examples/filter-chip/FilterChipTypedChipExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const FilterChipExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Remove a filter"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59337-131907&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <FilterChipDeleteEventExample />

      <SandboxHeader
        exampleTitle="Interactive Example"
        figmaExample="">
      </SandboxHeader>
      <FilterChipInteractiveExample />

      <SandboxHeader
        exampleTitle="Type to create a new filter chip"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59337-138121&t=Zhk6rgZlHuDDA1M3-4">
      </SandboxHeader>
      <FilterChipTypedChipExample/>
    </>
  )
}
