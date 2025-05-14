import {
  GoabBadge,
  GoabPagination,
  GoabPaginationProps,
  GoabTab,
  GoabTable,
  GoabTabs,
} from "@abgov/react-components";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { faker } from "@faker-js/faker";
import { useContext, useEffect, useState } from "react";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import {
  LegacyMarginProperty,
  MarginProperty,
  TestIdProperty
} from "@components/component-properties/common-properties.ts";
import { PaginationExamples } from "@examples/pagination/PaginationExamples.tsx";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=622-13964";

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
    .map((e) => {
      return typeof e[1] === 'number' ? `${e[0]}={${e[1]}}` : `${e[0]}="${e[1]}"`
    })
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
  const {version} = useContext(LanguageVersionContext);
  const [paginationProps, setPaginationProps] = useState<ComponentPropsType>({
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


  const oldComponentProperties: ComponentProperty[] = [
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
    LegacyMarginProperty,
  ];
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
      type: "GoabPaginationVariant (all | links-only)",
      required: false,
      defaultValue: "all",
      description: "Controls which nav controls are visible",
    },
    {
      name: "onChange",
      type: "(event: GoabPaginationOnChangeDetail) => void",
      description: "Callback function for page change events.",
    },
    MarginProperty,
    TestIdProperty,
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
    const offset = (newPage - 1) * perPageUsers;
    const _users = users.slice(offset, offset + perPageUsers);
    setPage(newPage);
    setPageUsers(_users);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={componentCategory}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Pagination"
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox
              properties={paginationBindings}
              onChange={onSandboxChange}
              fullWidth
              skipRender>

              {/*========React code =========*/}
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
                const [users, setUsers ] = useState<User[]>([]);

                // subset of data shown per page
                const [pageUsers, setPageUsers] = useState<User[]>([]);

                // page number
                const [page, setPage] = useState<number>(1);
                useEffect(() => {
                  const _users = []
                   for (let i = 0; i < 100; i++) {
                    _users.push({
                      id: faker.string.uuid(),
                      firstName: faker.person.firstName(),
                      lastName: faker.person.lastName(),
                      age: faker.number.int({ min: 18, max: 60 }),
                    });
                  }

                  // init data set
                  setUsers(_users)
                  
                  // save current page
                  setPageUsers(_users.slice(0, 10))
                }, [])
                function changePage(newPage: number) {
                  const offset = (newPage - 1) * 10;
                  const _users = users.slice(offset, offset + 10)
                  setPage(newPage);
                  setPageUsers(_users)
                }
        `}
              />

              {version === "old" && (
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
              )}

              {version === "new" && (
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
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
                  <GoabPagination ${propsToString(
                    paginationProps as unknown as Record<string, string | number>,
                    "react"
                  )} 
                    pageNumber={page} 
                    onChange={event => changePage(event.page)}
                  />
              `}
                />
              )}

              {/*===========Angular code=============*/}
              {version === "old" && <CodeSnippet
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
              />}

              {version === "new" && <CodeSnippet
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
                  page = 1;
                  perPage = 10;
                  handlePageChange(event: GoabPaginationOnChangeDetail) {
                    this.page = event.page;
                    const offset = (this.page - 1) * this.perPage;
                    this.pageUsers = this.users.slice(offset, offset + this.perPage);
                  }
                  constructor() {
                    for (let i = 0; i < 100; i++) {
                      this.users.push({
                        id: faker.string.uuid(),
                        firstName: faker.person.firstName(),
                        lastName: faker.person.lastName(),
                        age: faker.number.int({ min: 18, max: 60 }),
                      });
                    }
                    this.pageUsers = this.users.slice(0, this.perPage)
                  }
                }
              `}
              />}

              {version === "old" && <CodeSnippet
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
              />}

              {version === "new" && <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goab-table width="100%" mb="xl">
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
                  </goab-table>
                  <goab-pagination [itemCount]="users.length" [perPageCount]="10" [pageNumber]="page"
                                    (onChange)="handlePageChange($event)"></goab-pagination>
              `}
              />}

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

              <GoabPagination
                {...paginationProps}
                pageNumber={page}
                onChange={event => changePage(event.page)}
              />
            </Sandbox>

            {/*Component properties table*/}
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />


          </GoabTab>
          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="1" />
              </>
            }
          >
            <PaginationExamples />
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
