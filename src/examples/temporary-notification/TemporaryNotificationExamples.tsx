import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { ShowANotification } from "@examples/show-a-notification.tsx";
import { ShowAUserProgress } from "@examples/show-a-user-progress.tsx";
import { ShowAUserProgressWhenTheTimeIsUnknown } from "@examples/show-a-user-progress-when-the-time-is-unknown.tsx";
import { ShowANotificationWithAnAction } from "@examples/show-a-notification-with-an-action.tsx";

export const TemporaryNotificationExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Show a notification"
        figmaExample="">
      </SandboxHeader>
      <ShowANotification />

      <SandboxHeader
        exampleTitle="Show a notification with an action"
        figmaExample="">
      </SandboxHeader>
      <ShowANotificationWithAnAction />

      <SandboxHeader
        exampleTitle="Show a user progress"
        figmaExample="">
      </SandboxHeader>
      <ShowAUserProgress />

      <SandboxHeader
        exampleTitle="Show a user progress when the time is unknown"
        figmaExample="">
      </SandboxHeader>
      <ShowAUserProgressWhenTheTimeIsUnknown />
    </>
  );
};

export default TemporaryNotificationExamples;
