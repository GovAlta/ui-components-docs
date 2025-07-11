import { GoabButton, GoabButtonGroup } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox } from "@components/sandbox";
import { TemporaryNotification } from "@abgov/ui-components-common";

export const TemporaryNotificationQueueExample = () => {

  const showMultipleNotifications = () => {
    TemporaryNotification.show("First notification", {
      type: "basic",
      duration: 2000
    });

    setTimeout(() => {
      TemporaryNotification.show("Second notification", {
        type: "success",
        duration: 2000
      });
    }, 2500);

    setTimeout(() => {
      TemporaryNotification.show("Third notification", {
        type: "failure",
        duration: 2000
      });
    }, 5000);
  };

  return (
    <Sandbox skipRender>
      <GoabButtonGroup alignment="start">
        <GoabButton onClick={showMultipleNotifications}>Show Multiple Notifications</GoabButton>
      </GoabButtonGroup>

      <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
import { TemporaryNotification } from "@abgov/angular-components";

showMultipleNotifications() {
  // First notification
  TemporaryNotification.show("First notification", {
    type: "basic",
    duration: 2000
  });

  // Second notification after 2.5 seconds
  setTimeout(() => {
    TemporaryNotification.show("Second notification", {
      type: "success",
      duration: 2000
    });
  }, 2500);

  // Third notification after 5 seconds
  setTimeout(() => {
    TemporaryNotification.show("Third notification", {
      type: "failure",
      duration: 2000
    });
  }, 5000);
}
        `}
      />

      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
import { TemporaryNotification } from "@abgov/react-components";

const showMultipleNotifications = () => {
  // First notification
  TemporaryNotification.show("First notification", {
    type: "basic",
    duration: 2000
  });

  // Second notification after 2.5 seconds
  setTimeout(() => {
    TemporaryNotification.show("Second notification", {
      type: "success",
      duration: 2000
    });
  }, 2500);

  // Third notification after 5 seconds
  setTimeout(() => {
    TemporaryNotification.show("Third notification", {
      type: "failure",
      duration: 2000
    });
  }, 5000);
};
        `}
      />
    </Sandbox>
  );
};
