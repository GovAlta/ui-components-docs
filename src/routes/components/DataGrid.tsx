import { useState, useContext, useEffect } from "react";
import {
  GoabBadge,
  GoabBlock,
  GoabCheckbox,
  GoabContainer,
  GoabDataGrid,
  GoabDataGridProps,
  GoabMenuAction,
  GoabMenuButton,
  GoabTab,
  GoabTable,
  GoabTableSortHeader,
  GoabTabs,
  GoabText,
} from "@abgov/react-components";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { OldComponentBanner } from "@components/old-component-banner/OldComponentBanner.tsx";
import { DataGridExamples } from "@examples/data-grid/DataGridExamples.tsx";

// == Page props ==

const componentName = "Data grid";
const description =
  "A wrapper component that adds keyboard navigation and accessibility features to tables and layout grids. It implements the WAI-ARIA grid pattern for navigating through cells using arrow keys.";
const category = Category.CONTENT_AND_LAYOUT;
const relatedComponents = [{ link: "/components/table", name: "Table" }];
const FIGMA_LINK =
  "https://www.figma.com/design/pMvlCYzvrNw63lD5D6JpKA/Component---Data-Card-and-Data-Table?node-id=3632-932585&m=dev";
const ACCESSIBILITY_FIGMA_LINK =
  "https://www.figma.com/design/pMvlCYzvrNw63lD5D6JpKA/Component---Data-Card-and-Data-Table?node-id=2735-80003&m=dev";

type User = {
  id: string;
  name: string;
  status: string;
  email: string;
};

type ComponentPropsType = GoabDataGridProps;

export default function DataGridPage() {
  const { version, language } = useContext(LanguageVersionContext);
  const [dataGridProps, setDataGridProps] = useState<ComponentPropsType>({
    keyboardNav: "table",
  });

  const [isGridReady, setIsGridReady] = useState(false);
  useEffect(() => {
    // add small delay for all nested doms fully render
    const timer = setTimeout(() => setIsGridReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const initialUsers: User[] = [
    { id: "1", name: "Alice Johnson", status: "Active", email: "alice@example.com" },
    { id: "2", name: "Bob Smith", status: "Pending", email: "bob@example.com" },
    { id: "3", name: "Carol White", status: "Active", email: "carol@example.com" },
  ];

  const getStatusBadgeType = (status: string): "success" | "important" | "information" => {
    switch (status) {
      case "Active":
        return "success";
      case "Pending":
        return "important";
      default:
        return "information";
    }
  };

  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [isSelectedAll, setIsSelectedAll] = useState(false);

  const [layoutView, setLayoutView] = useState<"table" | "card">("table");

  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Layout View",
      type: "dropdown",
      name: "layoutView",
      options: ["table", "card"],
      value: "table",
    },
    {
      label: "Icon Position",
      type: "dropdown",
      name: "keyboardIconPosition",
      options: ["", "left", "right"],
      value: "",
      defaultValue: "left",
    },
    {
      label: "Icon Visibility",
      type: "dropdown",
      name: "keyboardIconVisibility",
      options: ["", "visible", "hidden"],
      value: "",
      defaultValue: "visible",
    },
  ]);

  const isSelected = (userId: string): boolean => {
    return selectedUsers.includes(userId);
  };

  const toggleSelection = (userId: string) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const selectAll = (checked: boolean) => {
    setIsSelectedAll(checked);
    if (checked) {
      setSelectedUsers(users.map(u => u.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSort = (event: { sortBy: string; sortDir: number }) => {
    const { sortBy, sortDir } = event;
    const sortedUsers = [...users].sort(
      (a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir
    );
    setUsers(sortedUsers);
  };

  const handleMenuAction = (userId: string, action: string) => {
    if (action === "view") {
      alert(`Viewing user ${userId}`);
    } else if (action === "delete") {
      setUsers(users.filter(u => u.id !== userId));
    }
  };

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    const newLayoutView = (props.layoutView as "table" | "card") || "table";
    setLayoutView(newLayoutView);
    const keyboardNav = newLayoutView === "card" ? "layout" : "table";
    const { layoutView: _, ...restProps } = props;
    setDataGridProps({ keyboardNav, ...restProps } as ComponentPropsType);
  }

  const componentProperties: ComponentProperty[] = [
    {
      name: "keyboardNav",
      type: "GoabDataGridKeyboardNav (table | layout)",
      required: true,
      description:
        "Defines the keyboard navigation mode. Use 'table' for traditional table structures where navigation stops at row boundaries. Use 'layout' for grid layouts where navigation wraps between rows.",
    },
    {
      name: "keyboardIconVisibility",
      type: "GoabDataGridIconVisibility (visible | hidden)",
      defaultValue: "visible",
      description:
        "Controls whether the keyboard navigation indicator icon is displayed when navigating with arrow keys.",
    },
    {
      name: "keyboardIconPosition",
      type: "GoabDataGridIconPosition (left | right)",
      defaultValue: "left",
      description: "Sets the position of the keyboard navigation indicator icon.",
    },
  ];

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
      />

      {version === "old" && (
        <OldComponentBanner componentName={componentName} language={language} />
      )}

      {version === "new" && (
        <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
          <GoabTabs initialTab={1}>
            <GoabTab heading="Code playground">
              <h2 id="component" style={{ display: "none" }}>
                Component
              </h2>

              {/* Don't render inside Sandbox because the table with interactive elements (arrow right left cannot focus on action button directly inside sandbox */}
              {isGridReady && layoutView === "table" && (
                <GoabContainer mt="none" mb="none">
                  <GoabDataGrid {...dataGridProps}>
                    <GoabTable width="100%" onSort={handleSort}>
                      <thead>
                        <tr data-grid="row">
                          <th style={{ paddingBottom: 0 }} data-grid="cell">
                            <GoabCheckbox
                              name="selectAll"
                              mt="2xs"
                              checked={isSelectedAll}
                              onChange={e => selectAll(e.checked)}
                            />
                          </th>
                          <th data-grid="cell">
                            <GoabTableSortHeader name="name">Name</GoabTableSortHeader>
                          </th>
                          <th data-grid="cell">
                            <GoabTableSortHeader name="status">Status</GoabTableSortHeader>
                          </th>
                          <th data-grid="cell">Email</th>
                          <th data-grid="cell">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map(user => (
                          <tr key={user.id} data-grid="row">
                            <td data-grid="cell">
                              <GoabCheckbox
                                name={`user${user.id}`}
                                checked={isSelected(user.id)}
                                onChange={() => toggleSelection(user.id)}
                              />
                            </td>
                            <td data-grid="cell">{user.name}</td>
                            <td data-grid="cell">
                              <GoabBadge
                                type={getStatusBadgeType(user.status)}
                                content={user.status}
                              />
                            </td>
                            <td data-grid="cell">{user.email}</td>
                            <td data-grid="cell">
                              <GoabMenuButton
                                text="Actions"
                                type="tertiary"
                                onAction={e => handleMenuAction(user.id, e.action)}
                              >
                                <GoabMenuAction action="view" text="View" />
                                <GoabMenuAction action="delete" text="Delete" />
                              </GoabMenuButton>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </GoabTable>
                  </GoabDataGrid>
                </GoabContainer>
              )}

              {/* Card view */}
              {isGridReady && layoutView === "card" && (
                <GoabContainer mt="none" mb="none">
                  <GoabDataGrid {...dataGridProps}>
                    {users.map(user => (
                      <GoabContainer key={user.id} mt="m" data-grid="row">
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                          <GoabCheckbox
                            data-grid="cell-0"
                            name={`user${user.id}`}
                            checked={isSelected(user.id)}
                            onChange={() => toggleSelection(user.id)}
                          />
                          <div style={{ flex: 1 }}>
                            <GoabBlock direction="row" gap="s" alignment="center">
                              <strong data-grid="cell-1">{user.name}</strong>
                              <GoabBadge
                                data-grid="cell-2"
                                type={getStatusBadgeType(user.status)}
                                content={user.status}
                              />
                            </GoabBlock>
                            <span
                              data-grid="cell-3"
                              style={{ color: "var(--goa-color-text-secondary)" }}
                            >
                              {user.email}
                            </span>
                          </div>
                          <GoabMenuButton
                            data-grid="cell-4"
                            text="Actions"
                            type="tertiary"
                            onAction={e => handleMenuAction(user.id, e.action)}
                          >
                            <GoabMenuAction action="view" text="View" />
                            <GoabMenuAction action="delete" text="Delete" />
                          </GoabMenuButton>
                        </div>
                      </GoabContainer>
                    ))}
                  </GoabDataGrid>
                </GoabContainer>
              )}

              <Sandbox
                properties={componentBindings}
                onChange={onSandboxChange}
                skipRender
                skipRenderDom
                fullWidth
              >
                <CodeSnippet
                  lang="typescript"
                  tags={["angular", "react"]}
                  allowCopy={true}
                  code={`
                  type User = {
                    id: string;
                    name: string;
                    status: string;
                    email: string;
                  };`}
                />

                {/* Angular - Table View */}
                {layoutView === "table" && (
                  <CodeSnippet
                    lang="typescript"
                    tags="angular"
                    allowCopy={true}
                    code={`
                    export class ExampleComponent {
                      users: User[] = [
                        { id: "1", name: "Alice Johnson", status: "Active", email: "alice@example.com" },
                        { id: "2", name: "Bob Smith", status: "Pending", email: "bob@example.com" },
                      ];
                      selectedUsers: string[] = [];
                      isSelectedAll = false;

                      getStatusBadgeType(status: string): GoabBadgeType {
                        const types: Record<string, GoabBadgeType> = {
                          "Active": "success",
                          "Pending": "important"
                        };
                        return types[status] || "information";
                      }

                      isSelected(userId: string): boolean {
                        return this.selectedUsers.includes(userId);
                      }

                      handleSort(event: GoabTableOnSortDetail) {
                        const { sortBy, sortDir } = event;
                        this.users.sort((a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir);
                      }

                      selectAll(event: GoabCheckboxOnChangeDetail) {
                        this.isSelectedAll = event.checked;
                        this.selectedUsers = event.checked ? this.users.map(u => u.id) : [];
                      }

                      toggleSelection(userId: string, event: GoabCheckboxOnChangeDetail) {
                        if (event.checked) {
                          this.selectedUsers.push(userId);
                        } else {
                          this.selectedUsers = this.selectedUsers.filter(id => id !== userId);
                        }
                      }

                      handleMenuAction(userId: string, event: GoabMenuButtonOnActionDetail) {
                        if (event.action === "view") {
                          console.log("View user:", userId);
                        } else if (event.action === "delete") {
                          this.users = this.users.filter(u => u.id !== userId);
                        }
                      }
                    }`}
                  />
                )}
                {layoutView === "table" && (
                  <CodeSnippet
                    lang="html"
                    tags="angular"
                    allowCopy={true}
                    code={`
                    <goab-data-grid keyboardNav="${dataGridProps.keyboardNav}"${
                      dataGridProps.keyboardIconPosition
                        ? ` keyboardIconPosition="${dataGridProps.keyboardIconPosition}"`
                        : ""
                    }${
                      dataGridProps.keyboardIconVisibility
                        ? ` keyboardIconVisibility="${dataGridProps.keyboardIconVisibility}"`
                        : ""
                    }>
                      <goab-table width="100%" (onSort)="handleSort($event)">
                        <thead>
                          <tr data-grid="row">
                            <th style="padding-bottom: 0" data-grid="cell">
                              <goab-checkbox
                                name="selectAll"
                                mt="2xs"
                                [checked]="isSelectedAll"
                                (onChange)="selectAll($event)">
                              </goab-checkbox>
                            </th>
                            <th data-grid="cell">
                              <goab-table-sort-header name="name">Name</goab-table-sort-header>
                            </th>
                            <th data-grid="cell">
                              <goab-table-sort-header name="status">Status</goab-table-sort-header>
                            </th>
                            <th data-grid="cell">Email</th>
                            <th data-grid="cell">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          @for (user of users; track user.id) {
                            <tr data-grid="row">
                              <td data-grid="cell">
                                <goab-checkbox
                                  [name]="'user' + user.id"
                                  [checked]="isSelected(user.id)"
                                  (onChange)="toggleSelection(user.id, $event)">
                                </goab-checkbox>
                              </td>
                              <td data-grid="cell">{{ user.name }}</td>
                              <td data-grid="cell">
                                <goab-badge [type]="getStatusBadgeType(user.status)" [content]="user.status"></goab-badge>
                              </td>
                              <td data-grid="cell">{{ user.email }}</td>
                              <td data-grid="cell">
                                <goab-menu-button text="Actions" type="tertiary" (onAction)="handleMenuAction(user.id, $event)">
                                  <goab-menu-action action="view" text="View"></goab-menu-action>
                                  <goab-menu-action action="delete" text="Delete"></goab-menu-action>
                                </goab-menu-button>
                              </td>
                            </tr>
                          }
                        </tbody>
                      </goab-table>
                    </goab-data-grid>`}
                  />
                )}

                {/* Angular - Card View */}
                {layoutView === "card" && (
                  <CodeSnippet
                    lang="typescript"
                    tags="angular"
                    allowCopy={true}
                    code={`
                    export class ExampleComponent {
                      users: User[] = [
                        { id: "1", name: "Alice Johnson", status: "Active", email: "alice@example.com" },
                        { id: "2", name: "Bob Smith", status: "Pending", email: "bob@example.com" },
                      ];
                      selectedUsers: string[] = [];

                      getStatusBadgeType(status: string): GoabBadgeType {
                        const types: Record<string, GoabBadgeType> = {
                          "Active": "success",
                          "Pending": "important"
                        };
                        return types[status] || "information";
                      }

                      isSelected(userId: string): boolean {
                        return this.selectedUsers.includes(userId);
                      }

                      toggleSelection(userId: string) {
                        if (this.selectedUsers.includes(userId)) {
                          this.selectedUsers = this.selectedUsers.filter(id => id !== userId);
                        } else {
                          this.selectedUsers = [...this.selectedUsers, userId];
                        }
                      }

                      handleMenuAction(userId: string, event: GoabMenuButtonOnActionDetail) {
                        if (event.action === "view") {
                          console.log("View user:", userId);
                        } else if (event.action === "delete") {
                          this.users = this.users.filter(u => u.id !== userId);
                        }
                      }
                    }`}
                  />
                )}
                {layoutView === "card" && (
                  <CodeSnippet
                    lang="html"
                    tags="angular"
                    allowCopy={true}
                    code={`
                    <goab-data-grid keyboardNav="${dataGridProps.keyboardNav}"${
                      dataGridProps.keyboardIconPosition
                        ? ` keyboardIconPosition="${dataGridProps.keyboardIconPosition}"`
                        : ""
                    }${
                      dataGridProps.keyboardIconVisibility
                        ? ` keyboardIconVisibility="${dataGridProps.keyboardIconVisibility}"`
                        : ""
                    }>
                      @for (user of users; track user.id) {
                        <goab-container mt="m" data-grid="row">
                          <div style="display: flex; align-items: center; gap: 1rem">
                            <goab-checkbox
                              data-grid="cell-0"
                              [name]="'user' + user.id"
                              [checked]="isSelected(user.id)"
                              (onChange)="toggleSelection(user.id)">
                            </goab-checkbox>
                            <div style="flex: 1">
                              <goab-block direction="row" gap="s" alignment="center">
                                <strong data-grid="cell-1">{{ user.name }}</strong>
                                <goab-badge
                                  data-grid="cell-2"
                                  [type]="getStatusBadgeType(user.status)"
                                  [content]="user.status">
                                </goab-badge>
                              </goab-block>
                              <span data-grid="cell-3" style="color: var(--goa-color-text-secondary)">
                                {{ user.email }}
                              </span>
                            </div>
                            <goab-menu-button
                              data-grid="cell-4"
                              text="Actions"
                              type="tertiary"
                              (onAction)="handleMenuAction(user.id, $event)">
                              <goab-menu-action action="view" text="View"></goab-menu-action>
                              <goab-menu-action action="delete" text="Delete"></goab-menu-action>
                            </goab-menu-button>
                          </div>
                        </goab-container>
                      }
                    </goab-data-grid>`}
                  />
                )}

                {/* React - Table View */}
                {layoutView === "table" && (
                  <CodeSnippet
                    lang="typescript"
                    tags="react"
                    allowCopy={true}
                    code={`
                    const [users, setUsers] = useState<User[]>([
                      { id: "1", name: "Alice Johnson", status: "Active", email: "alice@example.com" },
                      { id: "2", name: "Bob Smith", status: "Pending", email: "bob@example.com" },
                    ]);
                    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
                    const [isSelectedAll, setIsSelectedAll] = useState(false);

                    const getStatusBadgeType = (status: string): "success" | "important" | "information" => {
                      switch (status) {
                        case "Active":
                          return "success";
                        case "Pending":
                          return "important";
                        default:
                          return "information";
                      }
                    };

                    const isSelected = (userId: string): boolean => {
                      return selectedUsers.includes(userId);
                    };

                    const handleSort = (event: GoabTableOnSortDetail) => {
                      const { sortBy, sortDir } = event;
                      const sortedUsers = [...users].sort(
                        (a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir
                      );
                      setUsers(sortedUsers);
                    };

                    const selectAll = (event: GoabCheckboxOnChangeDetail) => {
                      setIsSelectedAll(event.checked);
                      setSelectedUsers(event.checked ? users.map(u => u.id) : []);
                    };

                    const toggleSelection = (userId: string, event: GoabCheckboxOnChangeDetail) => {
                      if (event.checked) {
                        setSelectedUsers([...selectedUsers, userId]);
                      } else {
                        setSelectedUsers(selectedUsers.filter(id => id !== userId));
                      }
                    };

                    const handleMenuAction = (userId: string, action: string) => {
                      if (action === "view") {
                        console.log("View user:", userId);
                      } else if (action === "delete") {
                        setUsers(users.filter(u => u.id !== userId));
                      }
                    };`}
                  />
                )}
                {layoutView === "table" && (
                  <CodeSnippet
                    lang="typescript"
                    tags="react"
                    allowCopy={true}
                    code={`
                    <GoabDataGrid keyboardNav="${dataGridProps.keyboardNav}"${
                      dataGridProps.keyboardIconPosition
                        ? ` keyboardIconPosition="${dataGridProps.keyboardIconPosition}"`
                        : ""
                    }${
                      dataGridProps.keyboardIconVisibility
                        ? ` keyboardIconVisibility="${dataGridProps.keyboardIconVisibility}"`
                        : ""
                    }>
                      <GoabTable width="100%" onSort={handleSort}>
                        <thead>
                          <tr data-grid="row">
                            <th style={{ paddingBottom: 0 }} data-grid="cell">
                              <GoabCheckbox
                                name="selectAll"
                                mt="2xs"
                                checked={isSelectedAll}
                                onChange={selectAll}
                              />
                            </th>
                            <th data-grid="cell">
                              <GoabTableSortHeader name="name">Name</GoabTableSortHeader>
                            </th>
                            <th data-grid="cell">
                              <GoabTableSortHeader name="status">Status</GoabTableSortHeader>
                            </th>
                            <th data-grid="cell">Email</th>
                            <th data-grid="cell">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user) => (
                            <tr key={user.id} data-grid="row">
                              <td data-grid="cell">
                                <GoabCheckbox
                                  name={\`user\${user.id}\`}
                                  checked={isSelected(user.id)}
                                  onChange={(e) => toggleSelection(user.id, e)}
                                />
                              </td>
                              <td data-grid="cell">{user.name}</td>
                              <td data-grid="cell">
                                <GoabBadge type={getStatusBadgeType(user.status)} content={user.status} />
                              </td>
                              <td data-grid="cell">{user.email}</td>
                              <td data-grid="cell">
                                <GoabMenuButton
                                  text="Actions"
                                  type="tertiary"
                                  onAction={(e) => handleMenuAction(user.id, e.action)}
                                >
                                  <GoabMenuAction action="view" text="View" />
                                  <GoabMenuAction action="delete" text="Delete" />
                                </GoabMenuButton>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </GoabTable>
                    </GoabDataGrid>`}
                  />
                )}

                {/* React - Card View */}
                {layoutView === "card" && (
                  <CodeSnippet
                    lang="typescript"
                    tags="react"
                    allowCopy={true}
                    code={`
                    const [users, setUsers] = useState<User[]>([
                      { id: "1", name: "Alice Johnson", status: "Active", email: "alice@example.com" },
                      { id: "2", name: "Bob Smith", status: "Pending", email: "bob@example.com" },
                    ]);
                    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

                    const getStatusBadgeType = (status: string): "success" | "important" | "information" => {
                      switch (status) {
                        case "Active":
                          return "success";
                        case "Pending":
                          return "important";
                        default:
                          return "information";
                      }
                    };

                    const isSelected = (userId: string): boolean => {
                      return selectedUsers.includes(userId);
                    };

                    const toggleSelection = (userId: string) => {
                      if (selectedUsers.includes(userId)) {
                        setSelectedUsers(selectedUsers.filter(id => id !== userId));
                      } else {
                        setSelectedUsers([...selectedUsers, userId]);
                      }
                    };

                    const handleMenuAction = (userId: string, action: string) => {
                      if (action === "view") {
                        console.log("View user:", userId);
                      } else if (action === "delete") {
                        setUsers(users.filter(u => u.id !== userId));
                      }
                    };`}
                  />
                )}
                {layoutView === "card" && (
                  <CodeSnippet
                    lang="typescript"
                    tags="react"
                    allowCopy={true}
                    code={`
                    <GoabDataGrid keyboardNav="${dataGridProps.keyboardNav}"${
                      dataGridProps.keyboardIconPosition
                        ? ` keyboardIconPosition="${dataGridProps.keyboardIconPosition}"`
                        : ""
                    }${
                      dataGridProps.keyboardIconVisibility
                        ? ` keyboardIconVisibility="${dataGridProps.keyboardIconVisibility}"`
                        : ""
                    }>
                      {users.map((user) => (
                        <GoabContainer key={user.id} mt="m" data-grid="row">
                          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <GoabCheckbox
                              data-grid="cell-0"
                              name={\`user\${user.id}\`}
                              checked={isSelected(user.id)}
                              onChange={() => toggleSelection(user.id)}
                            />
                            <div style={{ flex: 1 }}>
                              <GoabBlock direction="row" gap="s" alignment="center">
                                <strong data-grid="cell-1">{user.name}</strong>
                                <GoabBadge
                                  data-grid="cell-2"
                                  type={getStatusBadgeType(user.status)}
                                  content={user.status}
                                />
                              </GoabBlock>
                              <span data-grid="cell-3" style={{ color: "var(--goa-color-text-secondary)" }}>
                                {user.email}
                              </span>
                            </div>
                            <GoabMenuButton
                              data-grid="cell-4"
                              text="Actions"
                              type="tertiary"
                              onAction={(e) => handleMenuAction(user.id, e.action)}
                            >
                              <GoabMenuAction action="view" text="View" />
                              <GoabMenuAction action="delete" text="Delete" />
                            </GoabMenuButton>
                          </div>
                        </GoabContainer>
                      ))}
                    </GoabDataGrid>`}
                  />
                )}
              </Sandbox>

              <ComponentProperties properties={componentProperties} />

              <h3 id="data-attributes">Data attributes</h3>
              <GoabText size="body-m">
                The Data Grid component uses <code>data-grid</code> attributes to identify rows and
                cells for keyboard navigation.
              </GoabText>

              <GoabTable width="100%" mt="m" mb="xl">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Description</th>
                    <th>Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>data-grid="row"</code>
                    </td>
                    <td>Marks an element as a row in the grid</td>
                    <td>
                      Apply to <code>&lt;tr&gt;</code> elements or container elements representing
                      rows
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>data-grid="cell"</code>
                    </td>
                    <td>Marks an element as a cell in the grid</td>
                    <td>
                      Apply to <code>&lt;td&gt;</code>, <code>&lt;th&gt;</code>, or any element
                      representing a cell
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>data-grid="cell-N"</code>
                    </td>
                    <td>Marks a cell with explicit ordering (where N is a number)</td>
                    <td>
                      Use in layout mode to control cell order when HTML order differs from visual
                      order
                    </td>
                  </tr>
                </tbody>
              </GoabTable>

              <h3 id="keyboard-navigation">Keyboard navigation</h3>
              <GoabText size="body-m">
                The Data Grid implements the WAI-ARIA grid pattern for keyboard navigation:
              </GoabText>

              <GoabTable width="100%" mt="m" mb="xl">
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <kbd>Arrow Right</kbd>
                    </td>
                    <td>
                      Move focus one cell to the right. In table mode, stops at row end. In layout
                      mode, wraps to next row.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <kbd>Arrow Left</kbd>
                    </td>
                    <td>
                      Move focus one cell to the left. In table mode, stops at row start. In layout
                      mode, wraps to previous row.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <kbd>Arrow Down</kbd>
                    </td>
                    <td>Move focus one row down in the same column position.</td>
                  </tr>
                  <tr>
                    <td>
                      <kbd>Arrow Up</kbd>
                    </td>
                    <td>Move focus one row up in the same column position.</td>
                  </tr>
                  <tr>
                    <td>
                      <kbd>Home</kbd>
                    </td>
                    <td>Move focus to the first cell in the current row.</td>
                  </tr>
                  <tr>
                    <td>
                      <kbd>End</kbd>
                    </td>
                    <td>Move focus to the last cell in the current row.</td>
                  </tr>
                  <tr>
                    <td>
                      <kbd>Tab</kbd>
                    </td>
                    <td>
                      Move focus to the next interactive element within the current cell, or exit
                      the grid if at the last element.
                    </td>
                  </tr>
                </tbody>
              </GoabTable>
            </GoabTab>

            <GoabTab
              heading={
                <>
                  Examples
                  <GoabBadge type="information" content="3" />
                </>
              }
            >
              <DataGridExamples />
            </GoabTab>

            <GoabTab heading="Design">
              {FIGMA_LINK ? (
                <DesignEmpty figmaLink={FIGMA_LINK} />
              ) : (
                <GoabText size="body-m" mt="l">
                  Design guidelines for this component are coming soon.
                </GoabText>
              )}
            </GoabTab>

            <GoabTab heading="Accessibility">
              <AccessibilityEmpty figmaLink={ACCESSIBILITY_FIGMA_LINK} />
            </GoabTab>
          </GoabTabs>
        </ComponentContent>
      )}
    </>
  );
}
