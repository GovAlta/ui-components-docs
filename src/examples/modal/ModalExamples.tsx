import "./modal-examples.css";
import { ModalBasicExample } from "@examples/modal/ModalBasicExample.tsx";
import { ModalConfirmDestructiveActionExample } from "@examples/modal/ModalConfirmDestructiveActionExample.tsx";
import { ModalWarnUserDeadlineExample } from "@examples/modal/ModalWarnUserDeadlineExample.tsx";
import { ModalConfirmRecordChangeExample } from "@examples/modal/ModalConfirmRecordChangeExample.tsx";
import { ModalAddAnotherItemExample } from "@examples/modal/ModalAddAnotherItemExample.tsx";
import { ModalRouteChangeExample } from "@examples/modal/ModalRouteChangeExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export default function ModalExamples() {
  return (
    <>

        <SandboxHeader
          exampleTitle="Basic Modal"
          figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59354-104688&t=Zhk6rgZlHuDDA1M3-4">
        </SandboxHeader>
      <ModalBasicExample/>

        <SandboxHeader
          exampleTitle="Confirm a destructive action"
          figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=48478-52391&t=Zhk6rgZlHuDDA1M3-4">
        </SandboxHeader>
      <ModalConfirmDestructiveActionExample/>

        <SandboxHeader
          exampleTitle="Warn a user of a deadline"
          figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=48478-52380&t=Zhk6rgZlHuDDA1M3-4">
        </SandboxHeader>
      <ModalWarnUserDeadlineExample/>

        <SandboxHeader
          exampleTitle="Confirm a change"
          figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=48478-52402&t=Zhk6rgZlHuDDA1M3-4">
        </SandboxHeader>
      <ModalConfirmRecordChangeExample/>

        <SandboxHeader
          exampleTitle="Add another item"
          figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=48478-52413&t=Zhk6rgZlHuDDA1M3-4">
        </SandboxHeader>
      <ModalAddAnotherItemExample/>

        <SandboxHeader
          exampleTitle="Route changes"
          figmaExample="">
        </SandboxHeader>
      <ModalRouteChangeExample/>
    </>
  );
}
