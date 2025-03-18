import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabBlock,
  GoabDropdown,
  GoabDropdownItem,
  GoabPagination,
  GoabSpacer,
  GoabTable,
} from "@abgov/react-components";
import { useContext, useEffect, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { GoabDropdownOnChangeDetail } from "@abgov/ui-components-common";
import { faker } from "@faker-js/faker";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

export const PaginationExamples = () => {
  const { version } = useContext(LanguageVersionContext);
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

  function handlePerPageCountChangeEvent(event: GoabDropdownOnChangeDetail) {
    const perPageValue = parseInt(event.value || "1");
    setPage(1);
    setPerPage(perPageValue);
    const _users = users.slice(0, perPageValue);
    setPageUsers(_users);
  }

  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>

      <h3 id="component-example-1">Show X per page</h3>
      <Sandbox fullWidth skipRender>
        {/*============= React code ==============*/}
        {version === "old" && (
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
        )}

        {version === "new" && (
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

                export default function Pagination() {
                  const [users, setUsers] = useState<User[]>([]);
                  const [pageUsers, setPageUsers] = useState<User[]>([]);
                  const [page, setPage] = useState<number>(1);
                  const [perPage, setPerPage] = useState<number>(10);

                  useEffect(() => {
                    const _users = [];
                    for (let i = 1; i <= 100; i++) {
                      _users.push({
                        id: faker.string.uuid(),
                        firstName: faker.person.firstName(),
                        lastName: faker.person.lastName(),
                        age: faker.number.int({ min: 18, max: 60 }),
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

                  function handlePerPageCountChangeEvent(event: GoabDropdownOnChangeDetail) {
                    const perPageValue = parseInt(event.value || '1');
                    setPage(1);
                    setPerPage(perPageValue);
                    const _users = users.slice(0, perPageValue);
                    setPageUsers(_users);
                  }
              `}
          />
        )}

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
                        width="9ch"
                      >
                        <GoADropdownItem value="10" label="10"></GoADropdownItem>
                        <GoADropdownItem value="20" label="20"></GoADropdownItem>
                        <GoADropdownItem value="30" label="30"></GoADropdownItem>
                      </GoADropdown>
                      <span style={{width: "75px"}}>of {users.length}</span>
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
                      {pageUsers.map((u) => (
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
                        onChange={handlePerPageCountChangeEvent}
                        value={perPage.toString()}
                        width="9ch"
                      >
                        <GoabDropdownItem value="10" label="10"></GoabDropdownItem>
                        <GoabDropdownItem value="20" label="20"></GoabDropdownItem>
                        <GoabDropdownItem value="30" label="30"></GoabDropdownItem>
                      </GoabDropdown>
                      <span style={{width: "75px"}}>of {users.length}</span>
                    </GoabBlock>

                    <GoabSpacer hSpacing="fill"></GoabSpacer>

                    <GoabPagination
                      itemCount={users.length}
                      perPageCount={perPage}
                      pageNumber={page}
                      onChange={event => changePage(event.page)}
                    />
                  </GoabBlock>
              `}
          />
        )}

        {/*================ Angular code ==================*/}
        {version === "old" && (
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
        )}

        {version === "new" && (
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
                  pageUsers: User[] = [];
                  page = 1;
                  perPage = 10;
                  total = 100;

                  handlePageChange(event: GoabPaginationOnChangeDetail) {
                    this.page = event.page;

                    const offset: number = (this.page - 1) * this.perPage;
                    this.pageUsers = this.users.slice(offset, offset + this.perPage);
                  }

                  handlePerPageCountChangeEvent(event: GoabDropdownOnChangeDetail) {
                    this.page = 1;
                    this.perPage = Number(event.value);

                    this.pageUsers = this.users.slice(0, this.perPage);
                  }

                  constructor() {
                    this.pageUsers = this.prepareUsers().slice(0, this.perPage);
                  }

                  prepareUsers() {
                    for (let i = 0; i < this.total; i++) {
                      this.users.push({
                        id: faker.string.uuid(),
                        firstName: faker.person.firstName(),
                        lastName: faker.person.lastName(),
                        age: faker.number.int({ min: 18, max: 60 }),
                      });
                    }

                    return this.users;
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
                    width="9ch"
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
        )}

        {version === "new" && (
          <CodeSnippet
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

                <goab-block alignment="center">
                  <goab-block mb="m" alignment="center">
                  Show
                  <goab-dropdown
                    (onChange)="handlePerPageCountChangeEvent($event)"
                    value="10"
                    width="9ch"
                  >
                    <goab-dropdown-item value="10" label="10"></goab-dropdown-item>
                    <goab-dropdown-item value="20" label="20"></goab-dropdown-item>
                    <goab-dropdown-item value="30" label="30"></goab-dropdown-item>
                    <goab-dropdown-item value="40" label="40"></goab-dropdown-item>
                    <goab-dropdown-item value="50" label="50"></goab-dropdown-item>
                    <goab-dropdown-item value="60" label="60"></goab-dropdown-item>
                    <goab-dropdown-item value="70" label="70"></goab-dropdown-item>
                    <goab-dropdown-item value="80" label="80"></goab-dropdown-item>
                    <goab-dropdown-item value="90" label="90"></goab-dropdown-item>
                    <goab-dropdown-item value="100" label="100"></goab-dropdown-item>
                  </goab-dropdown>
                    <span style="width: 50px">of {{ this.users.length }}</span
                >
              </goab-block>

              <goab-spacer hSpacing="fill"></goab-spacer>

              <goab-pagination
                [itemCount]="users.length"
                [perPageCount]="perPage"
                [pageNumber]="page"
                (onChange)="handlePageChange($event)"
              ></goab-pagination>

            </goab-block>
              `}
          />
        )}

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

        <GoabBlock alignment="center">
          <GoabBlock mb="m" alignment="center">
            Show
            <GoabDropdown
              onChange={handlePerPageCountChangeEvent}
              value={perPage.toString()}
              width="9ch">
              {[10, 20, 30].map(value => (
                <GoabDropdownItem key={value} value={value.toString()} label={value.toString()} />
              ))}
            </GoabDropdown>
            <span style={{ width: "75px" }}>per page</span>
          </GoabBlock>
          <GoabSpacer hSpacing={"fill"} />

          <GoabPagination
            itemCount={users.length}
            perPageCount={perPage}
            pageNumber={page}
            onChange={event => changePage(event.page)}
          />
        </GoabBlock>
      </Sandbox>
    </>
  );
};
