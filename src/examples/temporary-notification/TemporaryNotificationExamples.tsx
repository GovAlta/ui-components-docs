import { TemporaryNotificationQueueExample } from "@examples/temporary-notification/TemporaryNotificationQueueExample.tsx";
import { TemporaryNotificationProgressExample } from "@examples/temporary-notification/TemporaryNotificationProgressExample.tsx";
import { TemporaryNotificationIndeterminateProgressExample } from "@examples/temporary-notification/TemporaryNotificationIndeterminateProgressExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { GoabTemporaryNotificationCtrl } from "@abgov/react-components";

export const TemporaryNotificationExamples = () => {
  return (
    <>
      <GoabTemporaryNotificationCtrl verticalPosition="bottom" horizontalPosition="center" />
      <SandboxHeader
        exampleTitle="Queue notifications"
      />
      <TemporaryNotificationQueueExample />

      <SandboxHeader
        exampleTitle="Progress notifications"
      />
      <TemporaryNotificationProgressExample />

      <SandboxHeader
        exampleTitle="Indeterminate to progress notifications"
      />
      <TemporaryNotificationIndeterminateProgressExample />
    </>
  );
};
