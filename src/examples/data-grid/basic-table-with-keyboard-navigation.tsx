import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabBadge,
  GoabButton,
  GoabDataGrid,
  GoabTable,
} from "@abgov/react-components";

interface BasicTableWithKeyboardNavigationProps {
  isGridReady?: boolean;
}

export function BasicTableWithKeyboardNavigation({
  isGridReady = true,
}: BasicTableWithKeyboardNavigationProps) {

  const users = [
    { id: "1", name: "Alice Johnson", role: "Developer", status: "Active" },
    { id: "2", name: "Bob Smith", role: "Designer", status: "Active" },
    { id: "3", name: "Carol White", role: "Manager", status: "Away" },
    { id: "4", name: "David Brown", role: "Analyst", status: "Active" },
  ];

  return (
    <>
      {isGridReady && (
        <GoabDataGrid keyboardNav="table" keyboardIconPosition="right">
          <GoabTable width="100%">
            <thead>
              <tr data-grid="row">
                <th data-grid="cell">Name</th>
                <th data-grid="cell">Role</th>
                <th data-grid="cell">Status</th>
                <th data-grid="cell">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} data-grid="row">
                  <td data-grid="cell">{user.name}</td>
                  <td data-grid="cell">{user.role}</td>
                  <td data-grid="cell">
                    <GoabBadge
                      type={user.status === "Active" ? "success" : "information"}
                      content={user.status}
                    />
                  </td>
                  <td data-grid="cell">
                    <GoabButton type="tertiary" size="compact">View</GoabButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </GoabTable>
        </GoabDataGrid>
      )}

      <Sandbox fullWidth skipRender skipRenderDom>
        {/* Angular Code */}
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
          <goab-data-grid keyboardNav="table" keyboardIconPosition="right">
            <goab-table width="100%">
              <thead>
                <tr data-grid="row">
                  <th data-grid="cell">Name</th>
                  <th data-grid="cell">Role</th>
                  <th data-grid="cell">Status</th>
                  <th data-grid="cell">Actions</th>
                </tr>
              </thead>
              <tbody>
                @for (user of users; track user.id) {
                  <tr data-grid="row">
                    <td data-grid="cell">{{ user.name }}</td>
                    <td data-grid="cell">{{ user.role }}</td>
                    <td data-grid="cell">
                      <goab-badge
                        [type]="user.status === 'Active' ? 'success' : 'information'"
                        [content]="user.status" />
                    </td>
                    <td data-grid="cell">
                      <goab-button type="tertiary" size="compact">View</goab-button>
                    </td>
                  </tr>
                }
              </tbody>
            </goab-table>
          </goab-data-grid>`}
        />

        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
          export class ExampleComponent {
            users = [
              { id: "1", name: "Alice Johnson", role: "Developer", status: "Active" },
              { id: "2", name: "Bob Smith", role: "Designer", status: "Active" },
              { id: "3", name: "Carol White", role: "Manager", status: "Away" },
              { id: "4", name: "David Brown", role: "Analyst", status: "Active" },
            ];
          }`}
        />

        {/* React Code */}
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
          const users = [
            { id: "1", name: "Alice Johnson", role: "Developer", status: "Active" },
            { id: "2", name: "Bob Smith", role: "Designer", status: "Active" },
            { id: "3", name: "Carol White", role: "Manager", status: "Away" },
            { id: "4", name: "David Brown", role: "Analyst", status: "Active" },
          ];`}
        />

        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
          <GoabDataGrid keyboardNav="table" keyboardIconPosition="right">
            <GoabTable width="100%">
              <thead>
                <tr data-grid="row">
                  <th data-grid="cell">Name</th>
                  <th data-grid="cell">Role</th>
                  <th data-grid="cell">Status</th>
                  <th data-grid="cell">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} data-grid="row">
                    <td data-grid="cell">{user.name}</td>
                    <td data-grid="cell">{user.role}</td>
                    <td data-grid="cell">
                      <GoabBadge
                        type={user.status === "Active" ? "success" : "information"}
                        content={user.status}
                      />
                    </td>
                    <td data-grid="cell">
                      <GoabButton type="tertiary" size="compact">View</GoabButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </GoabTable>
          </GoabDataGrid>`}
        />
      </Sandbox>
    </>
  );
}

export default BasicTableWithKeyboardNavigation;
