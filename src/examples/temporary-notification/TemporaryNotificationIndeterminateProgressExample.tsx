import { GoabButton } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox } from "@components/sandbox";
import { TemporaryNotification } from "@abgov/ui-components-common";

export const TemporaryNotificationIndeterminateProgressExample = () => {

  const showIndeterminateToProgress = () => {
    // Step 1: Show indeterminate progress
    const uuid = TemporaryNotification.show("Validating...", {
      type: "indeterminate",
      duration: 0 // Don't auto-dismiss
    });

    // Step 2: After 2 seconds, switch to progress type with actual progress
    setTimeout(() => {
      const progressUuid = TemporaryNotification.show("Uploading file...", {
        type: "progress",
        duration: 0,
        cancelUUID: uuid // Replace the indeterminate notification
      });

      // Start at 0% progress
      TemporaryNotification.setProgress(progressUuid, 0);

      // Simulate progress updates
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        TemporaryNotification.setProgress(progressUuid, progress);

        if (progress >= 100) {
          clearInterval(interval);
          // Show completion after reaching 100%
          setTimeout(() => {
            TemporaryNotification.show("Upload complete!", {
              type: "success",
              duration: 3000,
              cancelUUID: progressUuid
            });
          }, 500);
        }
      }, 400);
    }, 2000);
  };

  return (
    <Sandbox skipRender>
      <GoabButton onClick={showIndeterminateToProgress}>
        Uploading a file
      </GoabButton>

      <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
import { TemporaryNotification } from "@abgov/angular-components";

showIndeterminateToProgress() {
  // Show indeterminate progress
  const uuid = TemporaryNotification.show("Initializing...", {
    type: "indeterminate",
    duration: 0 // Don't auto-dismiss
  });

  // After 2 seconds, switch to determinate progress
  setTimeout(() => {
    const progressUuid = TemporaryNotification.show("Uploading file...", {
      type: "progress",
      duration: 0,
      cancelUUID: uuid // Replace the indeterminate notification
    });

    // Start at 0% progress
    TemporaryNotification.setProgress(progressUuid, 0);

    // Simulate progress updates
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      TemporaryNotification.setProgress(progressUuid, progress);

      if (progress >= 100) {
        clearInterval(interval);
        // Show completion
        setTimeout(() => {
          TemporaryNotification.show("Upload complete!", {
            type: "success",
            duration: 3000,
            cancelUUID: progressUuid
          });
        }, 500);
      }
    }, 400);
  }, 2000);
}
        `}
      />

      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
import { TemporaryNotification } from "@abgov/react-components";

const showIndeterminateToProgress = () => {
  // Show indeterminate progress
  const uuid = TemporaryNotification.show("Initializing...", {
    type: "indeterminate",
    duration: 0 // Don't auto-dismiss
  });

  // After 2 seconds, switch to determinate progress
  setTimeout(() => {
    const progressUuid = TemporaryNotification.show("Uploading file...", {
      type: "progress",
      duration: 0,
      cancelUUID: uuid // Replace the indeterminate notification
    });

    // Start at 0% progress
    TemporaryNotification.setProgress(progressUuid, 0);

    // Simulate progress updates
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      TemporaryNotification.setProgress(progressUuid, progress);

      if (progress >= 100) {
        clearInterval(interval);
        // Show completion
        setTimeout(() => {
          TemporaryNotification.show("Upload complete!", {
            type: "success",
            duration: 3000,
            cancelUUID: progressUuid
          });
        }, 500);
      }
    }, 400);
  }, 2000);
};
        `}
      />
    </Sandbox>
  );
};
