import { GoabButton } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox } from "@components/sandbox";
import { TemporaryNotification } from "@abgov/ui-components-common";

export const TemporaryNotificationProgressExample = () => {

  const showProgressNotification = () => {
    // Directly show progress type with initial value
    const uuid = TemporaryNotification.show("Downloading...", {
      type: "progress",
      duration: 0 // Don't auto-dismiss
    });

    // Set initial progress
    TemporaryNotification.setProgress(uuid, 0);

    // Simulate download progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      TemporaryNotification.setProgress(uuid, progress);

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          TemporaryNotification.show("Download complete!", {
            type: "success",
            duration: 2000,
            cancelUUID: uuid
          });
        }, 300);
      }
    }, 200);
  };

  return (
    <Sandbox skipRender>
      <GoabButton onClick={showProgressNotification}>
        Download file
      </GoabButton>

      <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
import { TemporaryNotification } from "@abgov/angular-components";

showProgressNotification() {
  // Show progress notification
  const uuid = TemporaryNotification.show("Downloading...", {
    type: "progress",
    duration: 0 // Don't auto-dismiss
  });

  // Set initial progress
  TemporaryNotification.setProgress(uuid, 0);

  // Simulate download progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += 5;
    TemporaryNotification.setProgress(uuid, progress);

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        TemporaryNotification.show("Download complete!", {
          type: "success",
          duration: 2000,
          cancelUUID: uuid
        });
      }, 300);
    }
  }, 200);
}
        `}
      />

      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
import { TemporaryNotification } from "@abgov/react-components";

const showProgressNotification = () => {
  // Show progress notification
  const uuid = TemporaryNotification.show("Downloading...", {
    type: "progress",
    duration: 0 // Don't auto-dismiss
  });

  // Set initial progress
  TemporaryNotification.setProgress(uuid, 0);

  // Simulate download progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += 5;
    TemporaryNotification.setProgress(uuid, progress);

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        TemporaryNotification.show("Download complete!", {
          type: "success",
          duration: 2000,
          cancelUUID: uuid
        });
      }, 300);
    }
  }, 200);
};
        `}
      />
    </Sandbox>
  );
};
