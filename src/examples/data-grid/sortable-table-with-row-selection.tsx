import { useState } from "react";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabBadge,
  GoabCheckbox,
  GoabContainer,
  GoabDataGrid,
  GoabTable,
  GoabTableSortHeader,
  GoabMenuButton,
  GoabMenuAction,
} from "@abgov/react-components";
import { GoabTableOnSortDetail } from "@abgov/ui-components-common";

type Application = {
  id: string;
  applicant: string;
  dateSubmitted: string;
  status: string;
  amount: string;
};

export function SortableTableWithRowSelection() {
  const initialApplications: Application[] = [
    { id: "APP-001", applicant: "John Doe", dateSubmitted: "2024-01-15", status: "Approved", amount: "$5,000" },
    { id: "APP-002", applicant: "Jane Smith", dateSubmitted: "2024-01-18", status: "Pending", amount: "$3,500" },
    { id: "APP-003", applicant: "Bob Wilson", dateSubmitted: "2024-01-20", status: "In Review", amount: "$7,200" },
    { id: "APP-004", applicant: "Alice Brown", dateSubmitted: "2024-01-22", status: "Approved", amount: "$4,800" },
    { id: "APP-005", applicant: "Charlie Davis", dateSubmitted: "2024-01-25", status: "Denied", amount: "$2,500" },
  ];

  const getStatusBadgeType = (status: string): "success" | "important" | "information" | "emergency" => {
    switch (status) {
      case "Approved":
        return "success";
      case "Pending":
        return "important";
      case "In Review":
        return "information";
      case "Denied":
        return "emergency";
      default:
        return "information";
    }
  };

  const [applications, setApplications] = useState<Application[]>(initialApplications);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isSelectedAll, setIsSelectedAll] = useState(false);

  const isSelected = (id: string): boolean => selectedIds.includes(id);

  const toggleSelection = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectAll = (checked: boolean) => {
    setIsSelectedAll(checked);
    if (checked) {
      setSelectedIds(applications.map((app) => app.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSort = (event: GoabTableOnSortDetail) => {
    const { sortBy, sortDir } = event;
    const sorted = [...applications].sort((a: any, b: any) =>
      (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir
    );
    setApplications(sorted);
  };

  return (
    <>
      <GoabContainer mt="none" mb="none">
        <GoabDataGrid keyboardNav="table">
          <GoabTable width="100%" onSort={handleSort}>
            <thead>
              <tr data-grid="row">
                <th data-grid="cell" style={{ paddingBottom: 0 }}>
                  <GoabCheckbox
                    name="selectAll"
                    mt="2xs"
                    checked={isSelectedAll}
                    onChange={(e) => selectAll(e.checked)}
                  />
                </th>
                <th data-grid="cell">
                  <GoabTableSortHeader name="id">ID</GoabTableSortHeader>
                </th>
                <th data-grid="cell">
                  <GoabTableSortHeader name="applicant">Applicant</GoabTableSortHeader>
                </th>
                <th data-grid="cell">
                  <GoabTableSortHeader name="dateSubmitted">Date Submitted</GoabTableSortHeader>
                </th>
                <th data-grid="cell">Status</th>
                <th data-grid="cell">Amount</th>
                <th data-grid="cell">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} data-grid="row">
                  <td data-grid="cell">
                    <GoabCheckbox
                      name={`app-${app.id}`}
                      checked={isSelected(app.id)}
                      onChange={() => toggleSelection(app.id)}
                    />
                  </td>
                  <td data-grid="cell">{app.id}</td>
                  <td data-grid="cell">{app.applicant}</td>
                  <td data-grid="cell">{app.dateSubmitted}</td>
                  <td data-grid="cell">
                    <GoabBadge type={getStatusBadgeType(app.status)} content={app.status} />
                  </td>
                  <td data-grid="cell">{app.amount}</td>
                  <td data-grid="cell">
                    <GoabMenuButton text="Actions" type="tertiary">
                      <GoabMenuAction action="view" text="View details" />
                      <GoabMenuAction action="edit" text="Edit" />
                    </GoabMenuButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </GoabTable>
        </GoabDataGrid>
      </GoabContainer>

      <Sandbox fullWidth skipRender skipRenderDom>
        {/* Angular Code */}
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
          export class ExampleComponent {
            applications = [
              { id: "APP-001", applicant: "John Doe", dateSubmitted: "2024-01-15", status: "Approved", amount: "$5,000" },
              { id: "APP-002", applicant: "Jane Smith", dateSubmitted: "2024-01-18", status: "Pending", amount: "$3,500" },
              { id: "APP-003", applicant: "Bob Wilson", dateSubmitted: "2024-01-20", status: "In Review", amount: "$7,200" },
            ];

            selectedIds: string[] = [];
            isSelectedAll = false;

            isSelected(id: string): boolean {
              return this.selectedIds.includes(id);
            }

            toggleSelection(id: string) {
              if (this.selectedIds.includes(id)) {
                this.selectedIds = this.selectedIds.filter(selectedId => selectedId !== id);
              } else {
                this.selectedIds = [...this.selectedIds, id];
              }
            }

            selectAll(checked: boolean) {
              this.isSelectedAll = checked;
              this.selectedIds = checked ? this.applications.map(app => app.id) : [];
            }

            handleSort(event: GoabTableOnSortDetail) {
              const { sortBy, sortDir } = event;
              this.applications = [...this.applications].sort((a: any, b: any) =>
                (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir
              );
            }

            getStatusBadgeType(status: string): GoabBadgeType {
              const types: Record<string, GoabBadgeType> = {
                "Approved": "success",
                "Pending": "important",
                "In Review": "information",
                "Denied": "emergency"
              };
              return types[status] || "information";
            }
          }`}
        />

        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
          <goab-data-grid keyboardNav="table">
            <goab-table width="100%" (onSort)="handleSort($event)">
              <thead>
                <tr data-grid="row">
                  <th data-grid="cell" style="padding-bottom: 0">
                    <goab-checkbox
                      name="selectAll"
                      [checked]="isSelectedAll"
                      (onChange)="selectAll($event.checked)" />
                  </th>
                  <th data-grid="cell">
                    <goab-table-sort-header name="id">ID</goab-table-sort-header>
                  </th>
                  <th data-grid="cell">
                    <goab-table-sort-header name="applicant">Applicant</goab-table-sort-header>
                  </th>
                  <th data-grid="cell">
                    <goab-table-sort-header name="dateSubmitted">Date Submitted</goab-table-sort-header>
                  </th>
                  <th data-grid="cell">Status</th>
                  <th data-grid="cell">Amount</th>
                  <th data-grid="cell">Actions</th>
                </tr>
              </thead>
              <tbody>
                @for (app of applications; track app.id) {
                  <tr data-grid="row">
                    <td data-grid="cell">
                      <goab-checkbox
                        [name]="'app-' + app.id"
                        [checked]="isSelected(app.id)"
                        (onChange)="toggleSelection(app.id)" />
                    </td>
                    <td data-grid="cell">{{ app.id }}</td>
                    <td data-grid="cell">{{ app.applicant }}</td>
                    <td data-grid="cell">{{ app.dateSubmitted }}</td>
                    <td data-grid="cell">
                      <goab-badge [type]="getStatusBadgeType(app.status)" [content]="app.status" />
                    </td>
                    <td data-grid="cell">{{ app.amount }}</td>
                    <td data-grid="cell">
                      <goab-menu-button text="Actions" type="tertiary">
                        <goab-menu-action action="view" text="View details" />
                        <goab-menu-action action="edit" text="Edit" />
                      </goab-menu-button>
                    </td>
                  </tr>
                }
              </tbody>
            </goab-table>
          </goab-data-grid>`}
        />

        {/* React Code */}
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
          const [applications, setApplications] = useState([
            { id: "APP-001", applicant: "John Doe", dateSubmitted: "2024-01-15", status: "Approved", amount: "$5,000" },
            { id: "APP-002", applicant: "Jane Smith", dateSubmitted: "2024-01-18", status: "Pending", amount: "$3,500" },
            { id: "APP-003", applicant: "Bob Wilson", dateSubmitted: "2024-01-20", status: "In Review", amount: "$7,200" },
          ]);

          const [selectedIds, setSelectedIds] = useState<string[]>([]);
          const [isSelectedAll, setIsSelectedAll] = useState(false);

          const isSelected = (id: string): boolean => selectedIds.includes(id);

          const toggleSelection = (id: string) => {
            if (selectedIds.includes(id)) {
              setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
            } else {
              setSelectedIds([...selectedIds, id]);
            }
          };

          const selectAll = (checked: boolean) => {
            setIsSelectedAll(checked);
            setSelectedIds(checked ? applications.map((app) => app.id) : []);
          };

          const handleSort = (event: GoabTableOnSortDetail) => {
            const { sortBy, sortDir } = event;
            const sorted = [...applications].sort((a: any, b: any) =>
              (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir
            );
            setApplications(sorted);
          };

          const getStatusBadgeType = (status: string) => {
            const types: Record<string, "success" | "important" | "information" | "emergency"> = {
              "Approved": "success",
              "Pending": "important",
              "In Review": "information",
              "Denied": "emergency"
            };
            return types[status] || "information";
          };`}
        />

        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
          <GoabDataGrid keyboardNav="table">
            <GoabTable width="100%" onSort={handleSort}>
              <thead>
                <tr data-grid="row">
                  <th data-grid="cell" style={{ paddingBottom: 0 }}>
                    <GoabCheckbox
                      name="selectAll"
                      checked={isSelectedAll}
                      onChange={(e) => selectAll(e.checked)}
                    />
                  </th>
                  <th data-grid="cell">
                    <GoabTableSortHeader name="id">ID</GoabTableSortHeader>
                  </th>
                  <th data-grid="cell">
                    <GoabTableSortHeader name="applicant">Applicant</GoabTableSortHeader>
                  </th>
                  <th data-grid="cell">
                    <GoabTableSortHeader name="dateSubmitted">Date Submitted</GoabTableSortHeader>
                  </th>
                  <th data-grid="cell">Status</th>
                  <th data-grid="cell">Amount</th>
                  <th data-grid="cell">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} data-grid="row">
                    <td data-grid="cell">
                      <GoabCheckbox
                        name={\`app-\${app.id}\`}
                        checked={isSelected(app.id)}
                        onChange={() => toggleSelection(app.id)}
                      />
                    </td>
                    <td data-grid="cell">{app.id}</td>
                    <td data-grid="cell">{app.applicant}</td>
                    <td data-grid="cell">{app.dateSubmitted}</td>
                    <td data-grid="cell">
                      <GoabBadge type={getStatusBadgeType(app.status)} content={app.status} />
                    </td>
                    <td data-grid="cell">{app.amount}</td>
                    <td data-grid="cell">
                      <GoabMenuButton text="Actions" type="tertiary">
                        <GoabMenuAction action="view" text="View details" />
                        <GoabMenuAction action="edit" text="Edit" />
                      </GoabMenuButton>
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

export default SortableTableWithRowSelection;
