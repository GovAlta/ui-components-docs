import { GoabButton } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox } from "@components/sandbox";
import { TemporaryNotification } from "@abgov/ui-components-common";

export const ShowAUserProgress = () => {

  const sendApi = (progressCallback: (progress: number) => void, isCancelledRef: { current: boolean }) => {
    return new Promise((resolve, reject) => {
      let progress = 0;
      const interval = setInterval(() => {
        if (isCancelledRef.current) {
          clearInterval(interval);
          reject("cancelled");
          return;
        }
        
        progress += 5;
        progressCallback(progress);
        
        if (progress >= 100) {
          clearInterval(interval);
          resolve("success");
        }
      }, 200);
    });
  };

  const downloadReport = () => {
    const isCancelledRef = { current: false };

    const uuid = TemporaryNotification.show("Downloading report D-23459", {
      type: "progress",
      actionText: "Cancel",
      action: () => {
        isCancelledRef.current = true;
        TemporaryNotification.dismiss(uuid);
        console.log("Download cancelled");
      }
    });

    TemporaryNotification.setProgress(uuid, 0);

    const updateProgress = (progress: number) => {
      TemporaryNotification.setProgress(uuid, progress);
      
      if (progress >= 100) {
        setTimeout(() => {
          TemporaryNotification.show("Report downloaded", {
            type: "success",
            duration: "medium",
            actionText: "View",
            action: () => {
              console.log("View report clicked!");
            },
            cancelUUID: uuid
          });
        }, 300);
      }
    };

    sendApi(updateProgress, isCancelledRef)
      .catch(error => {
        if (error !== "cancelled") {
          TemporaryNotification.dismiss(uuid);
        }
      });
  };

  return (
    <Sandbox skipRender>
      <GoabButton type="tertiary" leadingIcon="download" onClick={downloadReport}>
        Download report
      </GoabButton>

      <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
          import { TemporaryNotification } from "@abgov/ui-components-common";

          export class ExampleComponent {
            async downloadReport(notificationUuid: string): Promise<Error | undefined> {
              // Perform your API call here with progress tracking
              // Update progress as download progresses (0-100): setProgress(notificationUuid, 20) means 20% complete
              TemporaryNotification.setProgress(notificationUuid, 25);
              // ... continue API work ...
              TemporaryNotification.setProgress(notificationUuid, 50);
              // ... continue API work ...
              TemporaryNotification.setProgress(notificationUuid, 75);
              // ... complete API work ...
              TemporaryNotification.setProgress(notificationUuid, 100);
            }

            async download() {
              const uuid = TemporaryNotification.show("Downloading report D-23459", {
                type: "progress",
                actionText: "Cancel",
                action: () => {
                  TemporaryNotification.dismiss(uuid);
                },
              });

              const err = await this.downloadReport(uuid);
              
              if (err) {
                TemporaryNotification.show("Download failed", { 
                  type: "error", 
                  duration: "medium", 
                  cancelUUID: uuid 
                });
              } else {
                TemporaryNotification.show("Report downloaded", {
                  type: "success",
                  duration: "medium",
                  actionText: "View",
                  action: () => {
                    console.log("View report clicked!");
                  },
                  cancelUUID: uuid,
                });
              }
            }
          }
        `}
      />

      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          import { TemporaryNotification } from "@abgov/ui-components-common";

          const downloadReportAPI = async (notificationUuid: string): Promise<Error | undefined> => {
            // Perform your API call here with progress tracking
            // Update progress as download progresses (0-100): setProgress(notificationUuid, 20) means 20% complete
            TemporaryNotification.setProgress(notificationUuid, 25);
            // ... continue API work ...
            TemporaryNotification.setProgress(notificationUuid, 50);
            // ... continue API work ...
            TemporaryNotification.setProgress(notificationUuid, 75);
            // ... complete API work ...
            TemporaryNotification.setProgress(notificationUuid, 100);
          };

          const downloadReport = async () => {
            const uuid = TemporaryNotification.show("Downloading report D-23459", {
              type: "progress",
              actionText: "Cancel",
              action: () => {
                TemporaryNotification.dismiss(uuid);
              },
            });

            const err = await downloadReportAPI(uuid);
            
            if (err) {
              TemporaryNotification.show("Download failed", { 
                type: "error", 
                duration: "medium", 
                cancelUUID: uuid 
              });
            } else {
              TemporaryNotification.show("Report downloaded", {
                type: "success",
                duration: "medium",
                actionText: "View",
                action: () => {
                  console.log("View report clicked!");
                },
                cancelUUID: uuid,
              });
            }
          };
        `}
      />

      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          <>
            <GoabTemporaryNotificationCtrl />
            <GoabButton type="tertiary" leadingIcon="download" onClick={downloadReport}>
              Download report
            </GoabButton>
          </>
        `}
      />

      <CodeSnippet
        lang="html"
        tags="angular"
        allowCopy={true}
        code={`
          <goab-temporary-notification-ctrl/>

          <goab-button type="tertiary" leadingIcon="download" (onClick)="downloadReport()">Download report</goab-button>
        `}
      />
    </Sandbox>
  );
};

export default ShowAUserProgress;
