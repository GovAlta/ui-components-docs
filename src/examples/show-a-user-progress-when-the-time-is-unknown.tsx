import { GoabButton } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox } from "@components/sandbox";
import { TemporaryNotification } from "@abgov/ui-components-common";

export const ShowAUserProgressWhenTheTimeIsUnknown = () => {

  const sendApi = (isCancelledRef: { current: boolean; timeoutId?: number }) => {
    return new Promise((_resolve, reject) => {
      // Simulate search failure after random time (3-6 seconds)
      const searchTime = Math.random() * 3000 + 3000;
      const timeoutId = setTimeout(() => {
        if (isCancelledRef.current) {
          reject("cancelled");
        } else {
          reject("error");
        }
      }, searchTime);

      // Store timeout ID for potential cancellation
      isCancelledRef.timeoutId = timeoutId as unknown as number;
    });
  };

  const search = () => {
    const isCancelledRef: { current: boolean; timeoutId?: number } = { current: false };

    const uuid = TemporaryNotification.show("Searching case management system...", {
      type: "indeterminate",
      actionText: "Cancel",
      action: () => {
        isCancelledRef.current = true;
        if (isCancelledRef.timeoutId) {
          clearTimeout(isCancelledRef.timeoutId);
        }
        TemporaryNotification.dismiss(uuid);
      }
    });

    sendApi(isCancelledRef).then(() => {
      // This won't be called since sendApi always rejects
    }).catch((error) => {
      if (error !== "cancelled") {
        TemporaryNotification.show("Could not connect to case history", {
          type: "failure",
          duration: "medium",
          cancelUUID: uuid
        });
      }
    });
  };

  return (
    <Sandbox skipRender>
      <GoabButton type="secondary" leadingIcon="search" onClick={search}>
        Search case history
      </GoabButton>

      <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
          import { TemporaryNotification } from "@abgov/ui-components-common";

          export class ExampleComponent {
            async searchCMS(): Promise<Error | undefined> {
              // perform your API call here
            }

            async search() {
              const uuid = TemporaryNotification.show("Searching case management system...", {
                type: "indeterminate",
                actionText: "Cancel",
                action: () => {
                  TemporaryNotification.dismiss(uuid);
                },
              });

              const err = await this.searchCMS();
              if (err) {
                TemporaryNotification.show("Could not connect to case history", { 
                  type: "failure", 
                  duration: "medium", 
                  cancelUUID: uuid 
                });
              } else {
                TemporaryNotification.show("Search complete - 47 records found", {
                  type: "success",
                  duration: "medium",
                  actionText: "View",
                  action: () => {
                    console.log("View search results clicked!");
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

          const searchCMS = async (): Promise<Error | undefined> => {
            // perform your API call here
          };

          const search = async () => {
            const uuid = TemporaryNotification.show("Searching case management system...", {
              type: "indeterminate",
              actionText: "Cancel",
              action: () => {
                TemporaryNotification.dismiss(uuid);
              },
            });

            const err = await searchCMS();
            if (err) {
              TemporaryNotification.show("Could not connect to case history", { 
                type: "failure",
                duration: "medium", 
                cancelUUID: uuid 
              });
            } else {
              TemporaryNotification.show("Search complete - 47 records found", {
                type: "success",
                duration: "medium",
                actionText: "View",
                action: () => {
                  console.log("View search results clicked!");
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
            <GoabButton type="secondary" leadingIcon="search" onClick={search}>
              Search case history
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

          <goab-button type="secondary" leadingIcon="search" (onClick)="search()">
            Search case history
          </goab-button>
        `}
      />
    </Sandbox>
  );
};

export default ShowAUserProgressWhenTheTimeIsUnknown;
