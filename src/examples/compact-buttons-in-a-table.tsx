import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabButton,
  GoabButtonGroup,
  GoabPagination,
  GoabTable
} from "@abgov/react-components";
import { useContext, useEffect, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { faker } from "@faker-js/faker";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}
export const CompactButtonsInATable = () => {
  const { version } = useContext(LanguageVersionContext);
  const [users, setUsers] = useState<User[]>([]);
  const [pageUsers, setPageUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(10);
  const noop = () => {};

  useEffect(() => {
    const _users = [];
    for (let i = 1; i <= 100; i++) {
      _users.push({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName()
      });
    }
    setUsers(_users);
    setPageUsers(_users.slice(0, perPage));
  }, [perPage]);

  function changePage(newPage: number) {
    const offset = (newPage - 1) * perPage;
    const _users = users.slice(offset, offset + perPage);
    setPage(newPage);
    setPageUsers(_users);
  }

  return (
    <>

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
                  const [perPage] = useState<number>(10);

                  useEffect(() => {
                    const _users = [];
                    for (let i = 1; i <= 100; i++) {
                      _users.push({
                        id: faker.datatype.uuid(),
                        firstName: faker.name.firstName(),
                        lastName: faker.name.lastName()
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
                  const [perPage] = useState<number>(10);

                  useEffect(() => {
                    const _users = [];
                    for (let i = 1; i <= 100; i++) {
                      _users.push({
                        id: faker.string.uuid(),
                        firstName: faker.person.firstName(),
                        lastName: faker.person.lastName()
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
                    <th className="goa-table-number-header">Number</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {pageUsers.map(u => (
                  <tr key={u.id}>
                    <td>{u.firstName}</td>
                    <td>{u.lastName}</td>
                    <td className="goa-table-number-column">12345667</td>
                    <td>
                      <GoAButtonGroup alignment="center">
                        <GoAButton type="tertiary" size="compact" onClick={onClick}>
                          View
                        </GoAButton>
                      </GoAButtonGroup>
                    </td>
                  </tr>
                ))}
                </tbody>
              </GoATable>

              <GoAPagination
                itemCount={users.length}
                perPageCount={perPage}
                pageNumber={page}
                onChange={event => changePage(event.page)}
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
                      <th className="goa-table-number-header">Number</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {pageUsers.map(u => (
                    <tr key={u.id}>
                      <td>{u.firstName}</td>
                      <td>{u.lastName}</td>
                      <td className="goa-table-number-column">12345667</td>
                      <td>
                        <GoabButtonGroup alignment="center">
                          <GoabButton type="tertiary" size="compact" onClick={onClick}>
                            View
                          </GoabButton>
                        </GoabButtonGroup>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </GoabTable>

                <GoabPagination
                  itemCount={users.length}
                  perPageCount={perPage}
                  pageNumber={page}
                  onChange={event => changePage(event.page)}
                />
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

                  onClick() {
                    console.log('clicked');
                  }

                  constructor() {
                    this.pageUsers = this.prepareUsers().slice(0, this.perPage);
                  }

                  prepareUsers() {
                    for (let i = 0; i < this.total; i++) {
                      this.users.push({
                        id: faker.datatype.uuid(),
                        firstName: faker.name.firstName(),
                        lastName: faker.name.lastName()
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

                  onClick() {
                    console.log('clicked');
                  }

                  constructor() {
                    this.pageUsers = this.prepareUsers().slice(0, this.perPage);
                  }

                  prepareUsers() {
                    for (let i = 0; i < this.total; i++) {
                      this.users.push({
                        id: faker.string.uuid(),
                        firstName: faker.person.firstName(),
                        lastName: faker.person.lastName()
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
                    <th class="goa-table-number-header">Number</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  @for (user of pageUsers; track $index) {
                    <tr>
                      <td>{{ user.firstName }}</td>
                      <td>{{ user.lastName }}</td>
                      <td class="goa-table-number-column">12345667</td>
                      <td>
                      <goa-button-group alignment="center">
                        <goa-button type="tertiary" size="compact" (_click)="onClick($event)">
                          View
                        </goa-button>
                      </goa-button-group>
                    </td>
                    </tr>
                  }
                </tbody>
              </goa-table>

              <goa-pagination
                [itemCount]="users.length"
                [perPageCount]="perPage"
                [pageNumber]="page"
                (onChange)="handlePageChange($event)"
              ></goa-pagination>
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
                    <th class="goa-table-number-header">Number</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  @for (user of pageUsers; track $index) {
                    <tr>
                      <td>{{ user.firstName }}</td>
                      <td>{{ user.lastName }}</td>
                      <td class="goa-table-number-column">12345667</td>
                      <td>
                      <goab-button-group alignment="center">
                        <goab-button type="tertiary" size="compact" (onClick)="onClick()">
                          View
                        </goab-button>
                      </goab-button-group>
                    </td>
                    </tr>
                  }
                </tbody>
              </goab-table>

              <goab-pagination
                [itemCount]="users.length"
                [perPageCount]="perPage"
                [pageNumber]="page"
                (onChange)="handlePageChange($event)"
              ></goab-pagination>
              `}
          />
        )}

        <GoabTable width="100%" mb="xl">
          <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th className="goa-table-number-header">Number</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {pageUsers.map(u => (
            <tr key={u.id}>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td className="goa-table-number-column">12345667</td>
              <td>
                <GoabButtonGroup alignment="center">
                  <GoabButton type="tertiary" size="compact" onClick={noop}>
                    View
                  </GoabButton>
                </GoabButtonGroup>
              </td>
            </tr>
          ))}
          </tbody>
        </GoabTable>

        <GoabPagination
          itemCount={users.length}
          perPageCount={perPage}
          pageNumber={page}
          onChange={event => changePage(event.page)}
        />
      </Sandbox>
    </>
  );
}

export default CompactButtonsInATable;