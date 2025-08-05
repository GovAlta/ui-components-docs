import { ShowMultipleActionsInACompactTable } from "@examples/show-multiple-actions-in-a-compact-table.tsx";
import { RequireUserActionBeforeContinuing } from "@examples/require-user-action-before-continuing.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const IconButtonExamples = () => {
  return (
    <>
      <SandboxHeader
          exampleTitle="Basic modal with close"
          figmaExample={"https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=26318-184965&t=Mgdr0KBlqhEz1RXF-4"}>
        </SandboxHeader>
      <RequireUserActionBeforeContinuing />

      <SandboxHeader
        exampleTitle="Show multiple actions in a compact table"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6309-127620&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <ShowMultipleActionsInACompactTable />
    </>
  );
};
