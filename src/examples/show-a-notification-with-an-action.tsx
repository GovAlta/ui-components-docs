import { GoabButton } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox } from "@components/sandbox";
import { TemporaryNotification } from "@abgov/ui-components-common";

export const ShowANotificationWithAnAction = () => {
  const comment = () => {
    const uuid = TemporaryNotification.show(
      "Edna Mode commented on your assigned case.",
      {
        actionText: "View",
        action: () => {
          TemporaryNotification.dismiss(uuid);
        },
      }
    );
  };

  return (
    <Sandbox skipRender>
      <GoabButton onClick={comment}>Comment</GoabButton>

      <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
          import { TemporaryNotification } from "@abgov/ui-components-common";

          export class ExampleComponent {
            comment() {
              const uuid = TemporaryNotification.show(
                "Edna Mode commented on your assigned case.",
                {
                  actionText: "View",
                  action: () => {
                    TemporaryNotification.dismiss(uuid);
                  },
                }
              );
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

          const comment = () => {
            const uuid = TemporaryNotification.show(
              "Edna Mode commented on your assigned case.",
              {
                actionText: "View",
                action: () => {
                  TemporaryNotification.dismiss(uuid);
                },
              }
            );
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
            <GoabButton onClick={comment}>Comment</GoabButton>
          </>
        `}
      />

      <CodeSnippet
        lang="html"
        tags="angular"
        allowCopy={true}
        code={`
          <goab-temporary-notification-ctrl/>

          <goab-button (onClick)="comment()">Comment</goab-button>
        `}
      />
    </Sandbox>
  );
};

export default ShowANotificationWithAnAction;
