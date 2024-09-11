import { useContext, useEffect, useState } from "react";
import { ComponentBinding, LanguageContext, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import {
  GoabBadge,
  GoabButton,
  GoabContainer,
  GoabTab,
  GoabTable,
  GoabTableSortHeader,
  GoabTabs,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabTableProps } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabTableOnSortDetail } from "@abgov/ui-components-common";

interface User {
  firstName: string;
  lastName: string;
  age: number;
}
type ComponentPropsType = GoabTableProps;
type CastingType = {
  width: string;
  [key: string]: unknown;
}
export default function TablePage() {
  const [tableProps, setTableProps] = useState<ComponentPropsType>({
    width: "100%"
  });
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

  const componentProperties: ComponentProperty[] = [
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

  function onSandboxChange(tableBindings: ComponentBinding[], props: Record<string, unknown>) {
    setTableBindings(tableBindings);
    setTableProps(props as CastingType);
  }

  // For table demo -- needs to do sort functionality
  const language = useContext(LanguageContext);
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
          { link: "/components/pagination", name: "Pagination" },
          { link: "/components/tabs", name: "Tabs" },
        ]}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs>
          <GoabTab heading="Code examples">
            <Sandbox properties={tableBindings} onChange={onSandboxChange} fullWidth>
              <GoabTable {...tableProps}>
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

            <ComponentProperties properties={componentProperties} />
            <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>

            <h3 id="component-example-sortable-columns">Sortable columns</h3>
            <GoabContainer mt="m" mb="none">
              <div style={{ padding: "40px" }}>
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
              </div>
            </GoabContainer>
            {language === "react" && (
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
                <GoATable onSort={sortData}>
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

            {language === "angular" && (
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

            {language === "angular" && (
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

            <h3 id="component-example-number-column">Number column</h3>
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
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }></GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
