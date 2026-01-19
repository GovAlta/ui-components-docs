import { useState, useEffect } from "react";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabBadge,
  GoabBlock,
  GoabCheckbox,
  GoabContainer,
  GoabDataGrid,
  GoabMenuAction,
  GoabMenuButton,
} from "@abgov/react-components";
import { GoabBadgeType } from "@abgov/ui-components-common";

type User = {
  id: string;
  name: string;
  status: string;
  updated: string;
  email: string;
  program: string;
  programId: string;
  serviceAccess: string;
};

export function LayoutModeWithCards() {
  const [isGridReady, setIsGridReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsGridReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const users: User[] = [
    {
      id: "1",
      name: "Mike Zwei",
      status: "Removed",
      updated: "Jun 30, 2022 at 2:30 PM",
      email: "mike.zwei@gmail.com",
      program: "Wee Wild Ones Curry",
      programId: "74528567",
      serviceAccess: "Claims Adjustments",
    },
    {
      id: "2",
      name: "Emma Stroman",
      status: "To be removed",
      updated: "Nov 28, 2021 at 1:30 PM",
      email: "emma.stroman@gmail.com",
      program: "Fort McMurray",
      programId: "74522643",
      serviceAccess: "Claims Adjustments",
    },
  ];

  const getStatusBadgeType = (status: string): GoabBadgeType => {
    switch (status) {
      case "Removed":
        return "success";
      case "To be removed":
        return "emergency";
      default:
        return "information";
    }
  };

  return (
    <>
      {isGridReady && (
      <GoabContainer mt="none" mb="none">
        <GoabDataGrid keyboardNav="layout">
          {users.map(user => (
            <GoabContainer key={user.id} mt="m" data-grid="row">
              <GoabBlock direction="row" gap="m" alignment="start">
                <GoabCheckbox data-grid="cell-0" name={`user-${user.id}`} />

                <GoabBlock direction="column" gap="m" alignment="start">
                  <GoabBlock direction="row" gap="s" alignment="center">
                    <strong data-grid="cell-1">{user.name}</strong>
                    <GoabBadge
                      data-grid="cell-2"
                      type={getStatusBadgeType(user.status)}
                      content={user.status}
                    />
                  </GoabBlock>

                  <GoabBlock direction="row" gap="xl" alignment="start">
                    <GoabBlock direction="column" gap="xs" data-grid="cell-4">
                      <strong>Updated</strong>
                      <span>{user.updated}</span>
                    </GoabBlock>
                    <GoabBlock direction="column" gap="xs" data-grid="cell-5">
                      <strong>Email</strong>
                      <span>{user.email}</span>
                    </GoabBlock>
                    <GoabBlock direction="column" gap="xs" data-grid="cell-6">
                      <strong>Program</strong>
                      <span>{user.program}</span>
                    </GoabBlock>
                  </GoabBlock>

                  <GoabBlock direction="row" gap="xl" alignment="start">
                    <GoabBlock direction="column" gap="xs" data-grid="cell-7">
                      <strong>Program ID</strong>
                      <span>{user.programId}</span>
                    </GoabBlock>
                    <GoabBlock direction="column" gap="xs" data-grid="cell-8">
                      <strong>Service access</strong>
                      <span>{user.serviceAccess}</span>
                    </GoabBlock>
                  </GoabBlock>
                </GoabBlock>

                <GoabMenuButton data-grid="cell-3" text="Actions" type="tertiary">
                  <GoabMenuAction action="open" text="Open" />
                  <GoabMenuAction action="delete" text="Delete" />
                </GoabMenuButton>
              </GoabBlock>
            </GoabContainer>
          ))}
        </GoabDataGrid>
      </GoabContainer>
      )}

      <Sandbox fullWidth skipRender skipRenderDom>
        {/* Angular Code */}
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
          export class ExampleComponent {
            users = [
              {
                id: "1",
                name: "Mike Zwei",
                status: "Removed",
                updated: "Jun 30, 2022 at 2:30 PM",
                email: "mike.zwei@gmail.com",
                program: "Wee Wild Ones Curry",
                programId: "74528567",
                serviceAccess: "Claims Adjustments",
              },
              {
                id: "2",
                name: "Emma Stroman",
                status: "To be removed",
                updated: "Nov 28, 2021 at 1:30 PM",
                email: "emma.stroman@gmail.com",
                program: "Fort McMurray",
                programId: "74522643",
                serviceAccess: "Claims Adjustments",
              },
            ];

            getStatusBadgeType(status: string): GoabBadgeType {
              switch (status) {
                case "Removed":
                  return "success";
                case "To be removed":
                  return "emergency";
                default:
                  return "information";
              }
            }

            handleMenuAction(userId: string, event: GoabMenuButtonOnActionDetail) {
              if (event.action === "open") {
                console.log("Open user:", userId);
              } else if (event.action === "delete") {
                console.log("Delete user:", userId);
              }
            }
          }`}
        />

        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
          <goab-data-grid keyboardNav="layout">
            @for (user of users; track user.id) {
              <goab-container mt="m" data-grid="row">
                <goab-block direction="row" gap="m" alignment="start">
                  <goab-checkbox data-grid="cell-0" [name]="'user-' + user.id"></goab-checkbox>

                  <goab-block direction="column" gap="m" alignment="start" style="flex: 1">
                    <goab-block direction="row" gap="s" alignment="center">
                      <strong data-grid="cell-1">{{ user.name }}</strong>
                      <goab-block data-grid="cell-2">
                        <goab-badge
                          [type]="getStatusBadgeType(user.status)"
                          [content]="user.status">
                        </goab-badge>
                      </goab-block>
                    </goab-block>

                    <goab-block direction="row" gap="xl" alignment="start">
                      <goab-block direction="column" gap="xs" data-grid="cell-4">
                        <strong>Updated</strong>
                        <span>{{ user.updated }}</span>
                      </goab-block>
                      <goab-block direction="column" gap="xs" data-grid="cell-5">
                        <strong>Email</strong>
                        <span>{{ user.email }}</span>
                      </goab-block>
                      <goab-block direction="column" gap="xs" data-grid="cell-6">
                        <strong>Program</strong>
                        <span>{{ user.program }}</span>
                      </goab-block>
                    </goab-block>

                    <goab-block direction="row" gap="xl" alignment="start">
                      <goab-block direction="column" gap="xs" data-grid="cell-7">
                        <strong>Program ID</strong>
                        <span>{{ user.programId }}</span>
                      </goab-block>
                      <goab-block direction="column" gap="xs" data-grid="cell-8">
                        <strong>Service access</strong>
                        <span>{{ user.serviceAccess }}</span>
                      </goab-block>
                    </goab-block>
                  </goab-block>

                  <goab-menu-button data-grid="cell-3" text="Actions" type="tertiary" (onAction)="handleMenuAction(user.id, $event)">
                    <goab-menu-action action="open" text="Open"></goab-menu-action>
                    <goab-menu-action action="delete" text="Delete"></goab-menu-action>
                  </goab-menu-button>
                </goab-block>
              </goab-container>
            }
          </goab-data-grid>`}
        />

        {/* React Code */}
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
          type User = {
            id: string;
            name: string;
            status: string;
            updated: string;
            email: string;
            program: string;
            programId: string;
            serviceAccess: string;
          };

          const users: User[] = [
            {
              id: "1",
              name: "Mike Zwei",
              status: "Removed",
              updated: "Jun 30, 2022 at 2:30 PM",
              email: "mike.zwei@gmail.com",
              program: "Wee Wild Ones Curry",
              programId: "74528567",
              serviceAccess: "Claims Adjustments",
            },
            {
              id: "2",
              name: "Emma Stroman",
              status: "To be removed",
              updated: "Nov 28, 2021 at 1:30 PM",
              email: "emma.stroman@gmail.com",
              program: "Fort McMurray",
              programId: "74522643",
              serviceAccess: "Claims Adjustments",
            },
          ];

          const getStatusBadgeType = (status: string): GoabBadgeType => {
            switch (status) {
              case "Removed":
                return "success";
              case "To be removed":
                return "emergency";
              default:
                return "information";
            }
          };

          const handleMenuAction = (userId: string, event: GoabMenuButtonOnActionDetail) => {
            if (event.action === "open") {
              console.log("Open user:", userId);
            } else if (event.action === "delete") {
              console.log("Delete user:", userId);
            }
          };`}
        />

        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
          <GoabDataGrid keyboardNav="layout">
            {users.map((user) => (
              <GoabContainer key={user.id} mt="m" data-grid="row">
                <GoabBlock direction="row" gap="m" alignment="start">
                  <GoabCheckbox data-grid="cell-0" name={\`user-\${user.id}\`} />

                  <GoabBlock direction="column" gap="m" alignment="start">
                    <GoabBlock direction="row" gap="s" alignment="center">
                      <strong data-grid="cell-1">{user.name}</strong>
                      <GoabBadge
                        data-grid="cell-2"
                        type={getStatusBadgeType(user.status)}
                        content={user.status}
                      />
                    </GoabBlock>

                    <GoabBlock direction="row" gap="xl" alignment="start">
                      <GoabBlock direction="column" gap="xs" data-grid="cell-4">
                        <strong>Updated</strong>
                        <span>{user.updated}</span>
                      </GoabBlock>
                      <GoabBlock direction="column" gap="xs" data-grid="cell-5">
                        <strong>Email</strong>
                        <span>{user.email}</span>
                      </GoabBlock>
                      <GoabBlock direction="column" gap="xs" data-grid="cell-6">
                        <strong>Program</strong>
                        <span>{user.program}</span>
                      </GoabBlock>
                    </GoabBlock>

                    <GoabBlock direction="row" gap="xl" alignment="start">
                      <GoabBlock direction="column" gap="xs" data-grid="cell-7">
                        <strong>Program ID</strong>
                        <span>{user.programId}</span>
                      </GoabBlock>
                      <GoabBlock direction="column" gap="xs" data-grid="cell-8">
                        <strong>Service access</strong>
                        <span>{user.serviceAccess}</span>
                      </GoabBlock>
                    </GoabBlock>
                  </GoabBlock>

                  <GoabMenuButton data-grid="cell-3" text="Actions" type="tertiary" onAction={(e) => handleMenuAction(user.id, e)}>
                    <GoabMenuAction action="open" text="Open" />
                    <GoabMenuAction action="delete" text="Delete" />
                  </GoabMenuButton>
                </GoabBlock>
              </GoabContainer>
            ))}
          </GoabDataGrid>`}
        />
      </Sandbox>
    </>
  );
}

export default LayoutModeWithCards;
