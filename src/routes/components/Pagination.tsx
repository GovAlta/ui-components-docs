import {
  GoabBadge,
  GoabPagination,
  GoabPaginationProps,
  GoabTab,
  GoabTable,
  GoabTabs,
  GoabBlock,
  GoabSpacer,
  GoabDropdown,
  GoabDropdownItem,
} from "@abgov/react-components";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabDropdownOnChangeDetail } from "@abgov/ui-components-common";

type ComponentPropsType = Omit<GoabPaginationProps, "pageNumber" | "onChange">;
type CastingType = {
  itemCount: number;
  [key: string]: unknown;
};

export function propsToString(
  props: Record<string, string | number>,
  lang: "angular" | "react"
): string {
  if (lang === "angular") {
    return Object.entries(props)
      .map(e => `${e[0].toLowerCase()}="${e[1]}"`)
      .join(" ");
  }
  return Object.entries(props)
    .map(e => `${e[0]}="${e[1]}"`)
    .join(" ");
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

const componentName = "Pagination";
const description = "Help users navigation between multiple pages or screens as part of a set.";
const componentCategory = Category.STRUCTURE_AND_NAVIGATION;
const relatedComponents = [{ link: "/components/table", name: "Table" }];

export default function PaginationPage() {
  const [paginationProps, setPaginationProps] = useState<ComponentPropsType>({
    itemCount: 30,
    perPageCount: 10,
  });

  const [paginationPropsCustomExample, setpaginationPropsCustomExample] =
    useState<ComponentPropsType>({
      itemCount: 30,
      perPageCount: 10,
    });

  const [paginationBindings, setPaginationBindings] = useState<ComponentBinding[]>([
    {
      label: "Variant",
      type: "dropdown",
      name: "variant",
      options: ["", "all", "links-only"],
      value: "",
    },
    {
      label: "Total item count",
      type: "number",
      name: "itemCount",
      value: 30,
    },
    {
      label: "Items per page count",
      type: "number",
      name: "perPageCount",
      value: 10,
    },
  ]);

  const [paginationBindingsCustomExample, setPaginationBindingsCustomExample] = useState<
    ComponentBinding[]
  >([
    {
      label: "Variant",
      type: "dropdown",
      name: "variant",
      options: ["", "all", "links-only"],
      value: "",
    },
    {
      label: "Total item count",
      type: "number",
      name: "itemCount",
      value: 30,
    },
    {
      label: "Items per page count",
      type: "number",
      name: "perPageCount",
      value: 10,
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "pageNumber",
      type: "number",
      required: true,
      description: "The current page being viewed (non-zero based)",
    },
    {
      name: "itemCount",
      type: "number",
      required: true,
      description: "Total number of data items within all pages",
    },
    {
      name: "perPageCount",
      type: "number",
      required: false,
      defaultValue: "10",
      description: "Number of data items shown per page",
    },
    {
      name: "variant",
      type: "all | links-only",
      required: false,
      defaultValue: "all",
      description: "Controls which nav controls are visible",
    },
    {
      name: "onChange",
      lang: "react",
      type: "(page: number) => void",
      description: "Callback function for page change events.",
    },
    {
      name: "_change",
      lang: "angular",
      type: "(e: { detail: { page: number }}) => void",
      description: "Callback function for page change events.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setPaginationProps(props as CastingType);
    setPaginationBindings(bindings);
  }

  const [users, setUsers] = useState<User[]>([]);
  const [pageUsers, setPageUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const totalUsers =
    (paginationBindings.find(binding => binding.name === "itemCount")?.value as number) || 30;
  let perPageUsers: number =
    (paginationBindings.find(binding => binding.name === "perPageCount")?.value as number) || 10;
  useEffect(() => {
    const _users = [];
    for (let i = 1; i < totalUsers + 1; i++) {
      _users.push({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 60 }),
      });
    }
    setUsers(_users);
    setPageUsers(_users.slice(0, perPageUsers));
  }, [totalUsers]);

  useEffect(() => {
    // Back to 1st page when 'perPageCount' changes
    setPage(1);
    setPageUsers(users.slice(0, perPageUsers));
  }, [paginationProps.perPageCount, users]);

  function changePage(newPage: number) {
    if (typeof perPageUsers !== "number") {
      perPageUsers = Number(perPageUsers);
    }

    const offset = (newPage - 1) * perPageUsers;
    const _users = users.slice(offset, offset + perPageUsers);
    setPage(newPage);
    setPageUsers(_users);
  }

  // Custom Example Setup - Show X per page
  const [usersCustomExample, setUsersCustomExample] = useState<User[]>([]);
  const [pageUsersCustomExample, setPageUsersCustomExample] = useState<User[]>([]);
  const [pageCustomExample, setPageCustomExample] = useState<number>(1);
  const totalUsersCustomExample =
    (paginationBindingsCustomExample.find(binding => binding.name === "itemCount")
      ?.value as number) || 30;
  let perPageUsersCustomExample: number =
    (paginationBindingsCustomExample.find(binding => binding.name === "perPageCount")
      ?.value as number) || 10;

  useEffect(() => {
    const _users = [];
    for (let i = 1; i < totalUsersCustomExample + 1; i++) {
      _users.push({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 60 }),
      });
    }
    setUsersCustomExample(_users);
    setPageUsersCustomExample(_users.slice(0, perPageUsersCustomExample));
  }, [totalUsersCustomExample]);

  useEffect(() => {
    // Back to 1st page when 'perPageCount' changes
    setPageCustomExample(1);
    setPageUsersCustomExample(users.slice(0, perPageUsersCustomExample));
  }, [paginationPropsCustomExample.perPageCount, usersCustomExample]);

  function changePageCustomExample(newPageCustomExample: number) {
    if (typeof perPageUsersCustomExample !== "number") {
      perPageUsersCustomExample = Number(perPageUsersCustomExample);
    }

    const offset = (newPageCustomExample - 1) * perPageUsersCustomExample;
    const _users = users.slice(offset, offset + perPageUsersCustomExample);
    setPageCustomExample(newPageCustomExample);
    setPageUsersCustomExample(_users);
  }

  function onSandboxChangeCustomExample(
    bindings: ComponentBinding[],
    props: Record<string, unknown>
  ) {
    setpaginationPropsCustomExample(props as CastingType);
    setPaginationBindingsCustomExample(bindings);
  }

  // @ts-ignore
  function handlePerPageChangeCustomExample(event: GoabDropdownOnChangeDetail): void {
    const newPerPageCount = parseInt(event.value || '1');

    // Update paginationProps
    setpaginationPropsCustomExample(prevProps => ({
      ...prevProps,
      perPageCount: newPerPageCount,
    }));

    // Update paginationBindings
    setPaginationBindingsCustomExample(prevBindings =>
      prevBindings.map(binding =>
        binding.name === "perPageCount"
          ? ({ ...binding, value: newPerPageCount.toString() } as ComponentBinding)
          : binding
      )
    );
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={componentCategory}
        description={description}
        relatedComponents={relatedComponents}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>
            <Sandbox
              properties={paginationBindings}
              onChange={onSandboxChange}
              fullWidth
              skipRender>
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                import { faker } from "@faker-js/faker";
                interface User {
                  id: string;
                  firstName: string;
                  lastName: string;
                  age: number;
                }

                // table data
                const [users, setUsers ] = useState([]);

                // subset of data shown per page
                const [pageUsers, setPageUsers] = useState([]);

                // page number
                const [page, setPage] = useState(1);
                useEffect(() => {
                  const _users = []
                  for (let i = 0; i < 100; i++) {
                    _users.push({
                      id: faker.datatype.uuid(),
                      firstName: faker.name.firstName(),
                      lastName: faker.name.lastName(),
                      age: faker.datatype.number({min: 18, max: 60}),
                    });
                  }

                  // init data set
                  setUsers(_users)
                  
                  // save current page
                  setPageUsers(_users.slice(0, 10))
                }, [])
                function changePage(newPage) {
                  const offset = (newPage - 1) * 10;
                  const _users = users.slice(offset, offset + 10)
                  setPage(newPage);
                  setPageUsers(_users)
                }
        `}
              />
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoATable width="100%" mb="xl">
                    <thead>
                      <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pageUsers.map(u => (
                        <tr key={u.id}>
                          <td>{u.firstName}</td>
                          <td>{u.lastName}</td>
                          <td>{u.age}</td>
                        </tr>
                      ))}
                    </tbody>
                  </GoATable>
                  <GoAPagination ${propsToString(
                    paginationProps as unknown as Record<string, string | number>,
                    "react"
                  )} 
                    pageNumber={page} 
                    onChange={changePage}
                  />
              `}
              />

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                import { faker } from "@faker-js/faker";
                interface User {
                  id: string;
                  firstName: string;
                  lastName: string;
                  age: number;
                }
                @Component({
                  selector: "abgov-paginate",
                  templateUrl: "./paginate.html",
                })
                export class PaginateComponent {
                  users: User[] = [];
                  pageUsers: User[] = []
                  page: number = 1;
                  perPage: number = 10;
                  handlePageChange(event: Event) {
                    const e = event as CustomEvent
                    this.page = e.detail.page;
                    const offset = (this.page - 1) * this.perPage;
                    this.pageUsers = this.users.slice(offset, offset + this.perPage)
                  }
                  constructor() {
                    for (let i = 0; i < 100; i++) {
                      this.users.push({
                        id: faker.datatype.uuid(),
                        firstName: faker.name.firstName(),
                        lastName: faker.name.lastName(),
                        age: faker.datatype.number({min: 18, max: 60}),
                      });
                    }
                    this.pageUsers = this.users.slice(0, this.perPage)
                  }
                }
              `}
              />
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                <goa-table width="100%" mb="xl">
                  <thead>
                    <tr>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let user of pageUsers; index as i">
                      <td>{{ user.firstName }}</td>
                      <td>{{ user.lastName }}</td>
                      <td>{{ user.age }}</td>
                    </tr>
                  </tbody>
                </goa-table>
                <goa-pagination [itemcount]="users.length" perpagecount="10" [pagenumber]="page" (_change)="handlePageChange($event)"></goa-pagination>
              `}
              />
              <GoabTable width="100%" mb="xl">
                <thead>
                  <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {pageUsers.map(u => (
                    <tr key={u.id}>
                      <td>{u.firstName}</td>
                      <td>{u.lastName}</td>
                      <td>{u.age}</td>
                    </tr>
                  ))}
                </tbody>
              </GoabTable>

              <GoabPagination {...paginationProps} pageNumber={page} onChange={(event) => changePage(event.page)} />
            </Sandbox>

            {/*Component properties table*/}
            <ComponentProperties properties={componentProperties} />

            <h2 id="component-examples" className="hidden" aria-hidden="true">
              Examples
            </h2>

            <h3 id="component-example-1">Show X per page</h3>

            <Sandbox
              flags={["reactive"]}
              fullWidth
              skipRender
              onChange={onSandboxChangeCustomExample}>
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                import {
                  GoAPagination,
                  GoATable,
                  GoABlock,
                  GoADropdown,
                  GoADropdownItem,
                  GoASpacer,
                } from "@abgov/react-components";
                import { useEffect, useState } from "react";
                import { faker } from "@faker-js/faker";

                interface User {
                  id: string;
                  firstName: string;
                  lastName: string;
                  age: number;
                }

                export default function Pagination() {
                  const [users, setUsers] = useState<User[]>([]);
                  const [pageUsers, setPageUsers] = useState<User[]>([]);
                  const [page, setPage] = useState<number>(1);
                  const [perPage, setPerPage] = useState<number>(10);

                  useEffect(() => {
                    const _users = [];
                    for (let i = 1; i <= 100; i++) {
                      _users.push({
                        id: faker.datatype.uuid(),
                        firstName: faker.name.firstName(),
                        lastName: faker.name.lastName(),
                        age: faker.datatype.number({ min: 18, max: 60 }),
                      });
                    }
                    setUsers(_users);
                    setPageUsers(_users.slice(0, perPage));
                  }, [perPage]);

                  function changePage(newPage: number) {
                    const offset = (newPage - 1) * 10;
                    const _users = users.slice(offset, offset + perPage);
                    setPage(newPage);
                    setPageUsers(_users);
                  }

                  function handlePerPageCountChangeEvent(name: string, value: string | string[]) {
                    const perPageValue = Array.isArray(value) ? parseInt(value[0]) : parseInt(value);
                    setPage(1);
                    setPerPage(perPageValue);
                    const _users = users.slice(0, perPageValue);
                    setPageUsers(_users);
                  }
        `}
              />
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoATable width="100%" mb="xl">
                    <thead>
                      <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pageUsers.map((u) => (
                        <tr key={u.id}>
                          <td>{u.firstName}</td>
                          <td>{u.lastName}</td>
                          <td>{u.age}</td>
                        </tr>
                      ))}
                    </tbody>
                  </GoATable>

                  <GoABlock alignment="center">
                    <GoABlock mb="m" alignment="center">
                      Show
                      <GoADropdown
                        onChange={handlePerPageCountChangeEvent}
                        value={perPage.toString()}
                        width="8ch"
                      >
                        <GoADropdownItem value="10" label="10"></GoADropdownItem>
                        <GoADropdownItem value="20" label="20"></GoADropdownItem>
                        <GoADropdownItem value="30" label="30"></GoADropdownItem>
                      </GoADropdown>
                      <span style={{width: "50px"}}>of {users.length}</span>
                    </GoABlock>

                    <GoASpacer hSpacing="fill"></GoASpacer>

                    <GoAPagination
                      itemCount={users.length}
                      perPageCount={perPage}
                      pageNumber={page}
                      onChange={changePage}
                    />
                  </GoABlock>
              `}
              />

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                import { Component } from "@angular/core";
                import { faker } from "@faker-js/faker";

                interface User {
                  id: string;
                  firstName: string;
                  lastName: string;
                  age: number;
                }

                @Component({
                  selector: "abgov-paginate",
                  templateUrl: "./paginate.html",
                })
                export class PaginateComponent {
                  users: User[] = [];
                  pageUsers: User[] = [];
                  page = 1;
                  perPage = 10;
                  total = 100;

                  handlePageChange(event: Event) {
                    const e = event as CustomEvent;
                    this.page = e.detail.page;

                    if (typeof this.perPage !== "number") {
                      this.perPage = Number(this.perPage);
                    }

                    const offset: number = (this.page - 1) * this.perPage;
                    this.pageUsers = this.users.slice(offset, offset + this.perPage);
                  }

                  handlePerPageCountChangeEvent(event: Event) {
                    const e = event as CustomEvent;
                    this.page = 1;
                    this.perPage = e.detail.value;

                    if (typeof this.perPage !== "number") {
                      this.perPage = Number(this.perPage);
                    }

                    this.pageUsers = this.users.slice(0, this.perPage);
                  }

                  constructor() {
                    this.pageUsers = this.prepareUsers().slice(0, this.perPage);
                  }

                  prepareUsers() {
                    for (let i = 0; i < this.total; i++) {
                      this.users.push({
                        id: faker.datatype.uuid(),
                        firstName: faker.name.firstName(),
                        lastName: faker.name.lastName(),
                        age: faker.datatype.number({ min: 18, max: 60 }),
                      });
                    }

                    return this.users;
                  }
                }
              `}
              />
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                <goa-table width="100%" mb="xl">
                  <thead>
                  <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Age</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr *ngFor="let user of pageUsers; index as i">
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.age }}</td>
                  </tr>
                  </tbody>
                </goa-table>

                <goa-block alignment="center">
                  <goa-block mb="m" alignment="center">
                  Show
                  <goa-dropdown
                    (_change)="handlePerPageCountChangeEvent($event)"
                    value="10"
                    width="8ch"
                  >
                    <goa-dropdown-item value="10" label="10"></goa-dropdown-item>
                    <goa-dropdown-item value="20" label="20"></goa-dropdown-item>
                    <goa-dropdown-item value="30" label="30"></goa-dropdown-item>
                    <goa-dropdown-item value="40" label="40"></goa-dropdown-item>
                    <goa-dropdown-item value="50" label="50"></goa-dropdown-item>
                    <goa-dropdown-item value="60" label="60"></goa-dropdown-item>
                    <goa-dropdown-item value="70" label="70"></goa-dropdown-item>
                    <goa-dropdown-item value="80" label="80"></goa-dropdown-item>
                    <goa-dropdown-item value="90" label="90"></goa-dropdown-item>
                    <goa-dropdown-item value="100" label="100"></goa-dropdown-item>

                  </goa-dropdown>
                  <span style="width: 50px">of {{ this.users.length }}</span
                  >
                  </goa-block>

                  <goa-spacer hspacing="fill"></goa-spacer>

                  <goa-pagination
                    [itemcount]="users.length"
                    [perpagecount]="perPage"
                    [pagenumber]="page"
                  (_change)="handlePageChange($event)"
                  >
                  </goa-pagination>

                </goa-block>
              `}
              />

              <GoabTable width="100%" mb="xl">
                <thead>
                  <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {pageUsersCustomExample.map(u => (
                    <tr key={u.id}>
                      <td>{u.firstName}</td>
                      <td>{u.lastName}</td>
                      <td>{u.age}</td>
                    </tr>
                  ))}
                </tbody>
              </GoabTable>

              <GoabBlock alignment="center">
                <GoabBlock mb="m" alignment="center">
                  Show
                  <GoabDropdown
                    onChange={handlePerPageChangeCustomExample}
                    value={paginationPropsCustomExample.perPageCount?.toString()}
                    width="8ch">
                    {[10, 20, 30].map(value => (
                      <GoabDropdownItem
                        key={value}
                        value={value.toString()}
                        label={value.toString()}
                      />
                    ))}
                  </GoabDropdown>
                  <span style={{ width: "75px" }}>per page</span>
                </GoabBlock>
                <GoabSpacer hSpacing={"fill"} />

                <GoabPagination
                  {...paginationPropsCustomExample}
                  pageNumber={pageCustomExample}
                  onChange={(event) => changePageCustomExample(event.page)}
                />
              </GoabBlock>
            </Sandbox>
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }>
            <p>Coming Soon</p>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
