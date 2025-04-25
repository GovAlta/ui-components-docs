import { useContext, useEffect, useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import {
  GoabBadge,
  GoabButton,
  GoabTab,
  GoabTable,
  GoabTableSortHeader,
  GoabTabs,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabTableProps } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabTableOnSortDetail } from "@abgov/ui-components-common";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { TableWithGlobalFiltersExample } from "@examples/filter-chip/TableWithGlobalFiltersExample.tsx";
import { omit } from "lodash";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

type ComponentPropsType = Omit<GoabTableProps, "onSort"> & {
  onSort?: (sortBy: string, sortDir: number) => void;
};

export default function TablePage() {
  const { version } = useContext(LanguageVersionContext);
  const [tableProps, setTableProps] = useState<ComponentPropsType>({
    width: "100%",
  });
  const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=3785-18038";
  const [tableBindings, setTableBindings] = useState<ComponentBinding[]>([
    {
      label: "Width",
      type: "string",
      name: "width",
      value: "100%",
    },
    {
      label: "Variant",
      type: "list",
      name: "variant",
      options: ["", "normal", "relaxed"],
      defaultValue: "normal",
      value: "",
    },
  ]);

  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "width",
      type: "string",
      description: "Width of the table. By default it will fit the enclosed content.",
    },
    {
      name: "variant",
      type: "normal | relaxed",
      description: "A relaxed variant of the table with more vertical padding for the cells",
      defaultValue: "normal",
    },
    {
      name: "_sort",
      lang: "angular",
      type: "CustomEvent({detail: {sortBy: string: sortDir: number}})",
      description: "Sort event fired when a GoATableSortHeader component is used.",
    },
    {
      name: "onSort",
      lang: "react",
      type: "(sortBy: string, sortDir: number) => void",
      description: "Sort event fired when a GoATableSortHeader component is used.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  const componentProperties: ComponentProperty[] = [
    {
      name: "width",
      type: "string",
      description: "Width of the table. By default it will fit the enclosed content.",
    },
    {
      name: "variant",
      type: "GoabTableVariant (normal | relaxed)",
      description: "A relaxed variant of the table with more vertical padding for the cells",
      defaultValue: "normal",
    },
    {
      name: "onSort",
      type: "(event: GoabTableOnSortDetail) => void",
      description: "Sort event fired when a GoATableSortHeader component is used.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "Spacing (none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl)",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
    {
      name: "testId",
      type: "string",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
  ];

  function onSandboxChange(tableBindings: ComponentBinding[], props: Record<string, unknown>) {
    setTableBindings(tableBindings);
    setTableProps(props as ComponentPropsType);
  }

  // For table demo -- needs to do sort functionality
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const _users: User[] = [
      {
        firstName: "Christian",
        lastName: "Batz",
        age: 18,
      },
      {
        firstName: "Brain",
        lastName: "Wisozk",
        age: 19,
      },
      {
        firstName: "Neha",
        lastName: "Jones",
        age: 23,
      },
      {
        firstName: "Tristin",
        lastName: "Buckridge",
        age: 31,
      },
    ];
    setUsers(_users);
  }, []);

  function sortData(event: GoabTableOnSortDetail) {
    const _users = [...users];
    _users.sort((a: any, b: any) => {
      return (a[event.sortBy] > b[event.sortBy] ? 1 : -1) * event.sortDir;
    });
    setUsers(_users);
  }

  return (
    <>
      <ComponentHeader
        name="Table"
        category={Category.CONTENT_AND_LAYOUT}
        description="A set of structured data that is easy for a user to scan, examine, and compare."
        relatedComponents={[
          { link: "/components/button", name: "Button" },
          { link: "/components/dropdown", name: "Dropdown" },
          { link: "/components/filter-chip", name: "Filter chip" },
          { link: "/components/pagination", name: "Pagination" },
          { link: "/components/tabs", name: "Tabs" },
        ]}
        githubLink="Table"
        figmaLink={FIGMA_LINK}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>Playground</h2>
            <Sandbox properties={tableBindings} onChange={onSandboxChange} fullWidth>
              <GoabTable
                {...omit(tableProps, "onSort")}
                onSort={(detail: GoabTableOnSortDetail) => {
                  if (tableProps.onSort) {
                    tableProps.onSort(detail.sortBy, detail.sortDir);
                  }
                }}>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Text</th>
                    <th>Number</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <GoabBadge type="information" content="Badge text" />
                    </td>
                    <td>Lorem ipsum</td>
                    <td>1234567890</td>
                    <td>
                      <GoabButton type="tertiary">Action</GoabButton>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <GoabBadge type="information" content="Badge text" />
                    </td>
                    <td>Lorem ipsum</td>
                    <td>1234567890</td>
                    <td>
                      <GoabButton type="tertiary">Action</GoabButton>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <GoabBadge type="information" content="Badge text" />
                    </td>
                    <td>Lorem ipsum</td>
                    <td>1234567890</td>
                    <td>
                      <GoabButton type="tertiary">Action</GoabButton>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <GoabBadge type="information" content="Badge text" />
                    </td>
                    <td>Lorem ipsum</td>
                    <td>1234567890</td>
                    <td>
                      <GoabButton type="tertiary">Action</GoabButton>
                    </td>
                  </tr>
                </tbody>
              </GoabTable>
            </Sandbox>

            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />
          </GoabTab>
            <GoabTab
              heading={
                <>
                  Examples
                  <GoabBadge type="information" content="2" />
                </>
              }
            >


              <SandboxHeader
                exampleTitle="Sortable columns"
                figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59357-207598&t=Zhk6rgZlHuDDA1M3-4">
              </SandboxHeader>
              <Sandbox fullWidth>
                <GoabTable onSort={sortData} width="100%">
                  <thead>
                    <tr>
                      <th>
                        <GoabTableSortHeader name="firstName">First name</GoabTableSortHeader>
                      </th>
                      <th>
                        <GoabTableSortHeader name="lastName">Last name</GoabTableSortHeader>
                      </th>
                      <th>
                        <GoabTableSortHeader name="age" direction="asc">
                          Age
                        </GoabTableSortHeader>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.firstName}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </GoabTable>

              </Sandbox>
            {/*React code*/}
            {version === "old" && (
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
              interface User {
                firstName: string;
                lastName: string;
                age: number;
              }
              const [users, setUsers] = useState<User[]>([]);
              
              useEffect(() => {
                const _users: User[] = [
                  {
                    firstName: "Christian",
                    lastName: "Batz",
                    age: 18
                  },
                  {
                    firstName: "Brain",
                    lastName: "Wisozk",
                    age: 19
                  },
                  {
                    firstName: "Neha",
                    lastName: "Jones",
                    age: 23
                  },
                  {
                    firstName: "Tristin",
                    lastName: "Buckridge",
                    age: 31
                  }
                ];
                setUsers(_users);
              }, []);
              
              function sortData(sortBy: string, sortDir: number) {
                const _users = [...users];
                _users.sort((a: any, b: any) => {
                  return (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir;
                });
                setUsers(_users);
              }
              
              return (
                <GoATable onSort={sortData} width="100%">
                  <thead>
                    <tr>
                      <th>
                        <GoATableSortHeader name="firstName">First name</GoATableSortHeader>
                      </th>
                      <th>
                        <GoATableSortHeader name="lastName">Last name</GoATableSortHeader>
                      </th>
                      <th>
                        <GoATableSortHeader name="age" direction="asc">Age</GoATableSortHeader>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {users.map(user =>
                    <tr key={user.firstName}>
                     <td>{user.firstName}</td>
                     <td>{user.lastName}</td>
                     <td>{user.age}</td>
                    </tr>
                  )}
                  </tbody>
                </GoATable>
              )
           `}
              />
            )}

            {version === "new" && (
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
              interface User {
                firstName: string;
                lastName: string;
                age: number;
              }
              const [users, setUsers] = useState<User[]>([]);
              
              useEffect(() => {
                const _users: User[] = [
                  {
                    firstName: "Christian",
                    lastName: "Batz",
                    age: 18
                  },
                  {
                    firstName: "Brain",
                    lastName: "Wisozk",
                    age: 19
                  },
                  {
                    firstName: "Neha",
                    lastName: "Jones",
                    age: 23
                  },
                  {
                    firstName: "Tristin",
                    lastName: "Buckridge",
                    age: 31
                  }
                ];
                setUsers(_users);
              }, []);
              
              function sortData(event: GoabTableOnSortDetail) {
                const _users = [...users];
                _users.sort((a: any, b: any) => {
                  return (a[event.sortBy] > b[event.sortBy] ? 1 : -1) * event.sortDir;
                });
                setUsers(_users);
              }
              
              return (
                <GoabTable onSort={sortData} width="100%">
                  <thead>
                    <tr>
                      <th>
                        <GoabTableSortHeader name="firstName">First name</GoabTableSortHeader>
                      </th>
                      <th>
                        <GoabTableSortHeader name="lastName">Last name</GoabTableSortHeader>
                      </th>
                      <th>
                        <GoabTableSortHeader name="age" direction="asc">Age</GoabTableSortHeader>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {users.map(user =>
                    <tr key={user.firstName}>
                     <td>{user.firstName}</td>
                     <td>{user.lastName}</td>
                     <td>{user.age}</td>
                    </tr>
                  )}
                  </tbody>
                </GoabTable>
              )
           `}
              />
            )}

            {/*Angular code*/}
            {version === "old" && (
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
              interface User {
                firstName: string;
                lastName: string;
                age: number;
              }
              
              export class TableComponent() {
                users: User[] = [];
                
                constructor() {
                  this.users = [
                    {
                      firstName: "Christian",
                      lastName: "Batz",
                      age: 18
                    },
                    {
                      firstName: "Brain",
                      lastName: "Wisozk",
                      age: 19
                    },
                    {
                      firstName: "Neha",
                      lastName: "Jones",
                      age: 23
                    },
                    {
                      firstName: "Tristin",
                      lastName: "Buckridge",
                      age: 31
                    }
                  ];                
                }
                
                handleSort(event: any) {
                  const {sortBy, sortDir} = event.detail;
                  this.users.sort(
                    (a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir
                  );
                }
              }
              `}
              />
            )}

            {version === "old" && (
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                <goa-table width="100%" mb="xl" (_sort)="handleSort($event)">
                  <thead>
                    <tr>
                      <th><goa-table-sort-header name="firstName">First name and really long header</goa-table-sort-header></th>
                      <th><goa-table-sort-header name="lastName">Last name</goa-table-sort-header></th>
                      <th><goa-table-sort-header name="age" direction="asc">Age</goa-table-sort-header></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let user of users; index as i">
                      <td>{{ user.firstName }}</td>
                      <td>{{ user.lastName }}</td>
                      <td>{{ user.age }}</td>
                    </tr>
                  </tbody>
                </goa-table>
              `}
              />
            )}

            {version === "new" && (
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
              interface User {
                firstName: string;
                lastName: string;
                age: number;
              }
              
              export class TableComponent() {
                users: User[] = [];
                
                constructor() {
                  this.users = [
                    {
                      firstName: "Christian",
                      lastName: "Batz",
                      age: 18
                    },
                    {
                      firstName: "Brain",
                      lastName: "Wisozk",
                      age: 19
                    },
                    {
                      firstName: "Neha",
                      lastName: "Jones",
                      age: 23
                    },
                    {
                      firstName: "Tristin",
                      lastName: "Buckridge",
                      age: 31
                    }
                  ];                
                }
                
                handleSort(event: GoabTableOnSortDetail) {
                  const { sortBy, sortDir } = event;
                  this.users.sort(
                    (a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir
                  );
                }
              }
              `}
              />
            )}

            {version === "new" && (
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                <goab-table width="100%" mb="xl" (onSort)="handleSort($event)">
                  <thead>
                    <tr>
                      <th><goab-table-sort-header name="firstName">First name and really long header</goab-table-sort-header></th>
                      <th><goab-table-sort-header name="lastName">Last name</goab-table-sort-header></th>
                      <th><goab-table-sort-header name="age" direction="asc">Age</goab-table-sort-header></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let user of users; index as i">
                      <td>{{ user.firstName }}</td>
                      <td>{{ user.lastName }}</td>
                      <td>{{ user.age }}</td>
                    </tr>
                  </tbody>
                </goab-table>
              `}
              />
            )}

              <SandboxHeader
                exampleTitle="Number column"
                figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=59357-222010&t=Zhk6rgZlHuDDA1M3-4">
              </SandboxHeader>
            <Sandbox fullWidth>
              <GoabTable width="100%">
                <thead>
                  <tr>
                    <th>Col 1</th>
                    <th>Col 2</th>
                    <th className="goa-table-number-header">Number Column</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Item 1</td>
                    <td>Item 2</td>
                    <td className="goa-table-number-column">54</td>
                  </tr>
                  <tr>
                    <td>Item 1</td>
                    <td>Item 2</td>
                    <td className="goa-table-number-column">4567</td>
                  </tr>
                </tbody>
              </GoabTable>
            </Sandbox>

						<h3 id="component-filter-table-data-example">Filter data in a table</h3>
            <TableWithGlobalFiltersExample />
          </GoabTab>

          <GoabTab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>
          <GoabTab heading="Accessibility">
            <AccessibilityEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>

        </GoabTabs>
      </ComponentContent>
    </>
  );
}
