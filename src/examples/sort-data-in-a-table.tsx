import { useContext, useEffect, useState } from "react";
import { GoabTable, GoabTableSortHeader } from "@abgov/react-components";
import type { GoabTableOnSortDetail } from "@abgov/ui-components-common";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

export const SortDataInATable = () => {
  const { version } = useContext(LanguageVersionContext);

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
    // NOTE: sort functionality breaks when wrapped in Sandbox component
    // <Sandbox fullWidth>
    <>
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
          <GoATableSortHeader name="age" direction="asc">
            Age
          </GoATableSortHeader>
        </th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.firstName}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.age}</td>
        </tr>
      ))}
    </tbody>
  </GoATable>
);
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
      {users.map((user) => (
        <tr key={user.firstName}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.age}</td>
        </tr>
      ))}
    </tbody>
  </GoabTable>
);
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
      <th>
        <goa-table-sort-header name="firstName"
          >First name and really long header</goa-table-sort-header
        >
      </th>
      <th>
        <goa-table-sort-header name="lastName">Last name</goa-table-sort-header>
      </th>
      <th>
        <goa-table-sort-header name="age" direction="asc"
          >Age</goa-table-sort-header
        >
      </th>
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
    </>
  );
};

export default SortDataInATable;
