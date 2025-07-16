import "./modal-examples.css";
import { RequireUserActionBeforeContinuing } from "@examples/require-user-action-before-continuing.tsx";
import { ConfirmADestructiveAction } from "@examples/confirm-a-destructive-action.tsx";
import { WarnAUserOfADeadline } from "@examples/warn-a-user-of-a-deadline.tsx";
import { ConfirmAChange } from "@examples/confirm-a-change.tsx";
import { ConfirmBeforeNavigatingAway } from "@examples/confirm-before-navigating-away.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { AddAnotherItemInAModal } from "@examples/add-another-item-in-a-modal.tsx";

export default function ModalExamples() {
  return (
    <>

        <SandboxHeader
          exampleTitle="Basic Modal"
          figmaExample={"https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=26318-184965&t=Mgdr0KBlqhEz1RXF-4"}>
        </SandboxHeader>
      <RequireUserActionBeforeContinuing />

        <SandboxHeader
          exampleTitle="Confirm a destructive action"
          figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-43038&t=X0IQW5flDDaj8Vyg-4">
        </SandboxHeader>
      <ConfirmADestructiveAction />

        <SandboxHeader
          exampleTitle="Warn a user of a deadline"
          figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-43225&t=X0IQW5flDDaj8Vyg-4">
        </SandboxHeader>
      <WarnAUserOfADeadline />

        <SandboxHeader
          exampleTitle="Confirm a change"
          figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-44272&t=X0IQW5flDDaj8Vyg-4">
        </SandboxHeader>
      <ConfirmAChange />

        <SandboxHeader
          exampleTitle="Add another item"
          figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-50217&t=X0IQW5flDDaj8Vyg-4">
        </SandboxHeader>
      <AddAnotherItemInAModal />

        <SandboxHeader
          exampleTitle="Route changes"
          figmaExample="">
        </SandboxHeader>
      <ConfirmBeforeNavigatingAway />
    </>
  );
}
