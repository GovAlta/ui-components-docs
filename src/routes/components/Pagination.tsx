import {
  GoABadge,
  GoAPagination,
  GoAPaginationProps,
  GoATab,
  GoATable,
  GoATabs,
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
import { propsToString } from "@components/sandbox/BaseSerializer";


const componentName = "Pagination";
const description = "Help users navigation between multiple pages or screens as part of a set.";
const componentCategory = Category.STRUCTURE_AND_NAVIGATION;
const relatedComponents = [
  { link: "/components/table", name: "Table" },
];

type ComponentPropsType = Omit<GoAPaginationProps, "pageNumber" | "onChange">;
type CastingType = {
  // add any required props here
  itemCount: number;
  [key: string]: unknown;
};

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

export default function PaginationPage() {
  const [paginationProps, setPaginationProps] = useState<ComponentPropsType>({
    itemCount: 10,
    perPageCount: 5,
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
      value: 10,
    },
    {
      label: "Items per page count",
      type: "number",
      name: "perPageCount",
      value: 5,
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
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setPaginationProps(props as CastingType);
    setPaginationBindings(bindings);
  }

  const [users, setUsers] = useState<User[]>([]);
  const [pageUsers, setPageUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const totalUsers =
    (paginationBindings.find(binding => binding.name === "itemCount")?.value as number) || 10;
  const perPageUsers =
    (paginationBindings.find(binding => binding.name === "perPageCount")?.value as number) || 5;

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
      />

      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox properties={paginationBindings} onChange={onSandboxChange} fullWidth skipRender>
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
                  <GoAPagination ${propsToString(paginationProps as Record<string, any>, "react")} 
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

            <GoAPagination {...paginationProps} pageNumber={page} onChange={changePage} />
          </Sandbox>

          {/*Component properties table*/}
          <ComponentProperties properties={componentProperties} />
        </GoATab>

        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }>
          <p>Coming Soon</p>
        </GoATab>
      </GoATabs>
    </>
  );
}
