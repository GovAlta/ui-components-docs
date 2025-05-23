import "./modal-examples.css";
import { ModalBasicExample } from "@examples/modal/ModalBasicExample.tsx";
import { ModalConfirmDestructiveActionExample } from "@examples/modal/ModalConfirmDestructiveActionExample.tsx";
import { ModalWarnUserDeadlineExample } from "@examples/modal/ModalWarnUserDeadlineExample.tsx";
import { ModalConfirmRecordChangeExample } from "@examples/modal/ModalConfirmRecordChangeExample.tsx";
import { ModalRouteChangeExample } from "@examples/modal/ModalRouteChangeExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import AddAnotherItemInAModal from "@examples/add-another-item-in-a-modal.tsx";

export default function ModalExamples() {
  return (
    <>

        <SandboxHeader
          exampleTitle="Basic Modal">
        </SandboxHeader>
      <ModalBasicExample/>

        <SandboxHeader
          exampleTitle="Confirm a destructive action"
          figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-43038&t=X0IQW5flDDaj8Vyg-4">
        </SandboxHeader>
      <ModalConfirmDestructiveActionExample/>

        <SandboxHeader
          exampleTitle="Warn a user of a deadline"
          figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-43225&t=X0IQW5flDDaj8Vyg-4">
        </SandboxHeader>
      <ModalWarnUserDeadlineExample/>

        <SandboxHeader
          exampleTitle="Confirm a change"
          figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-44272&t=X0IQW5flDDaj8Vyg-4">
        </SandboxHeader>
      <ModalConfirmRecordChangeExample/>

        <SandboxHeader
          exampleTitle="Add another item"
          figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6307-50217&t=X0IQW5flDDaj8Vyg-4">
        </SandboxHeader>
      <AddAnotherItemInAModal />

        <SandboxHeader
          exampleTitle="Route changes"
          figmaExample="">
        </SandboxHeader>
      <ModalRouteChangeExample/>
    </>
  );
}
