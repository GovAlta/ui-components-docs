import {
    GoabBadge,
    GoabBlock,
    GoabButton,
    GoabButtonGroup,
    GoabDropdown,
    GoabDropdownItem,
    GoabPagination,
    GoabTable,
    GoabSpacer,
} from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { GoabBadgeType } from "@abgov/ui-components-common";
import { useContext, useEffect, useState } from "react";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { GoabDropdownOnChangeDetail } from "@abgov/ui-components-common";

interface User {
    badgeType: string;
    status: string;
    name: string;
    text: string;
    number: number;
}

export default function MultipleActionsinATable() {
    const { version } = useContext(LanguageVersionContext);
    const [users, setUsers] = useState<User[]>([]);
    const [pageUsers, setPageUsers] = useState<User[]>([]);
    const [page, setPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(5);

    useEffect(() => { 
        const _users: User[] = [
          {
            badgeType: "success",
            status: "Approved",
            name:"1",
            text: "Ralph Edwards",
            number: 1234567890,
          },
          {
            badgeType: "emergency",
            status: "Denied",
            name:"2",
            text: "Devon Lane",
            number: 1234567890,
          },
          {
            badgeType: "success",
            status: "Approved",
            name:"3",
            text: "Marvin McKinney",
            number: 1234567890,
          },
          {
            badgeType: "midtone",
            status: "In progress",
            name:"4",
            text: "Albert Flores",
            number: 1234567890,
          },
          {
            badgeType: "midtone",
            status: "In progress",
            name:"5",
            text: "Ronald Richards",
            number: 1234567890,
          },
          {
            badgeType: "success",
            status: "Approved",
            name:"6",
            text: "Diane Russell",
            number: 1234567890,
          },
          {
            badgeType: "success",
            status: "Approved",
            name:"7",
            text: "Raoul Emmerich",
            number: 1234567890,
          },
          {
            badgeType: "emergency",
            status: "Denied",
            name:"8",
            text: "Delilah Farrell",
            number: 1234567890,
          },
          {
            badgeType: "success",
            status: "Approved",
            name:"9",
            text: "Brock Sipes",
            number: 1234567890,
          },
          {
            badgeType: "midtone",
            status: "In progress",
            name:"10",
            text: "Aylin Hansen",
            number: 1234567890,
          },
          {
            badgeType: "midtone",
            status: "In progress",
            name:"11",
            text: "Eldora Waters",
            number: 1234567890,
          },
          {
            badgeType: "emergency",
            status: "Denied",
            name:"12",
            text: "Guillermo Kohler",
            number: 1234567890,
          },
          {
            badgeType: "emergency",
            status: "Denied",
            name:"13",
            text: "Ryley Medhurst",
            number: 1234567890,
          },
          {
            badgeType: "emergency",
            status: "Denied",
            name:"14",
            text: "Craig Russel",
            number: 1234567890,
          },
          {
            badgeType: "success",
            status: "Approved",
            name:"15",
            text: "Scot	Hayes",
            number: 1234567890,
          },
          {
            badgeType: "success",
            status: "Approved",
            name:"16",
            text: "Albert Flores",
            number: 1234567890,
          },
          {
            badgeType: "success",
            status: "Approved",
            name:"17",
            text: "Amiya Langosh",
            number: 1234567890,
          },
          {
            badgeType: "midtone",
            status: "In progress",
            name:"18",
            text: "Demetrius Cormier",
            number: 1234567890,
          },
        ];
        setUsers(_users);
        setPageUsers(_users.slice(0, perPage));
    }, [perPage]);

    function changePage(newPage: number) {
        const offset = (newPage - 1) * (perPage);
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

    return (
      <>
        <Sandbox
        fullWidth
        skipRender>

            {version === "old" && (
                <CodeSnippet
                    lang="typescript"
                    tags="react"
                    allowCopy={true}
                    code={`
                        import {
                            GoABadge,
                            GoABlock,
                            GoAButton,
                            GoAButtonGroup,
                            GoADropdown,
                            GoADropdownItem,
                            GoAPagination,
                            GoATable,
                            GoASpacer,
                        } from "@abgov/react-components";

                        interface User {
                            badgeType: string;
                            status: string;
                            name: string;
                            text: string;
                            number: number;
                        }

                        const [users, setUsers] = useState<User[]>([]);
                        const [pageUsers, setPageUsers] = useState<User[]>([]);
                        const [page, setPage] = useState<number>(1);
                        const [perPage, setPerPage] = useState<number>(5);

                        useEffect(() => { 
                            const _users: User[] = [
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"1",
                                text: "Ralph Edwards",
                                number: 1234567890,
                            },
                            {
                                badgeType: "emergency",
                                status: "Denied",
                                name:"2",
                                text: "Devon Lane",
                                number: 1234567890,
                            },
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"3",
                                text: "Marvin McKinney",
                                number: 1234567890,
                            },
                            {
                                badgeType: "midtone",
                                status: "In progress",
                                name:"4",
                                text: "Albert Flores",
                                number: 1234567890,
                            },
                            {
                                badgeType: "midtone",
                                status: "In progress",
                                name:"5",
                                text: "Ronald Richards",
                                number: 1234567890,
                            },
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"6",
                                text: "Diane Russell",
                                number: 1234567890,
                            },
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"7",
                                text: "Raoul Emmerich",
                                number: 1234567890,
                            },
                            {
                                badgeType: "emergency",
                                status: "Denied",
                                name:"8",
                                text: "Delilah Farrell",
                                number: 1234567890,
                            },
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"9",
                                text: "Brock Sipes",
                                number: 1234567890,
                            },
                            {
                                badgeType: "midtone",
                                status: "In progress",
                                name:"10",
                                text: "Aylin Hansen",
                                number: 1234567890,
                            },
                            {
                                badgeType: "midtone",
                                status: "In progress",
                                name:"11",
                                text: "Eldora Waters",
                                number: 1234567890,
                            },
                            {
                                badgeType: "emergency",
                                status: "Denied",
                                name:"12",
                                text: "Guillermo Kohler",
                                number: 1234567890,
                            },
                            {
                                badgeType: "emergency",
                                status: "Denied",
                                name:"13",
                                text: "Ryley Medhurst",
                                number: 1234567890,
                            },
                            {
                                badgeType: "emergency",
                                status: "Denied",
                                name:"14",
                                text: "Craig Russel",
                                number: 1234567890,
                            },
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"15",
                                text: "Scot	Hayes",
                                number: 1234567890,
                            },
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"16",
                                text: "Albert Flores",
                                number: 1234567890,
                            },
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"17",
                                text: "Amiya Langosh",
                                number: 1234567890,
                            },
                            {
                                badgeType: "midtone",
                                status: "In progress",
                                name:"18",
                                text: "Demetrius Cormier",
                                number: 1234567890,
                            },
                            ];
                            setUsers(_users);
                            setPageUsers(_users.slice(0, perPage));
                        }, [perPage]);

                        function changePage(newPage: number) {
                            const offset = (newPage - 1) * (perPage);
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

            {version === "old" && (
                <CodeSnippet
                    lang="typescript"
                    tags="react"
                    allowCopy={true}
                    code={`
                        <GoATable width="100%" mb="xl">
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Name</th>
                                    <th>File number</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {pageUsers.map(user => (
                                <tr key={user.name}>
                                    <td><GoABadge type={user.badgeType as GoABadgeType} content={user.status}></GoABadge></td>
                                    <td>{user.text}</td>
                                    <td className="goa-table-number-column">{user.number}</td>
                                    <td>
                                        <GoAButtonGroup alignment="center">
                                            <GoAButton type="tertiary">
                                                Edit
                                            </GoAButton>
                                            <GoAButton type="tertiary">
                                                Test
                                            </GoAButton>
                                            <GoAButton type="tertiary">
                                                View
                                            </GoAButton>
                                        </GoAButtonGroup>
                                    </td>
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
                                    <GoADropdownItem value="5" label="5"></GoADropdownItem>
                                    <GoADropdownItem value="10" label="10"></GoADropdownItem>
                                    <GoADropdownItem value="15" label="15"></GoADropdownItem>
                                </GoADropdown>
                                <span style={{width: "75px"}}>of {users.length}</span>
                            </GoABlock>
                            <GoASpacer hSpacing={"fill"} />

                            <GoAPagination
                                itemCount={users.length}
                                perPageCount={perPage}
                                pageNumber={page}
                                onChange={event => changePage(event.page)}
                                variant="links-only"
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
                        import {
                            GoabBadge,
                            GoabBlock,
                            GoabButton,
                            GoabButtonGroup,
                            GoabDropdown,
                            GoabDropdownItem,
                            GoabPagination,
                            GoabTable,
                            GoabSpacer,
                        } from "@abgov/react-components";
                        import { GoabDropdownOnChangeDetail } from "@abgov/ui-components-common";

                        interface User {
                            badgeType: string;
                            status: string;
                            name: string;
                            text: string;
                            number: number;
                        }

                        const [users, setUsers] = useState<User[]>([]);
                        const [pageUsers, setPageUsers] = useState<User[]>([]);
                        const [page, setPage] = useState<number>(1);
                        const [perPage, setPerPage] = useState<number>(5);

                        useEffect(() => { 
                            const _users: User[] = [
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"1",
                                text: "Ralph Edwards",
                                number: 1234567890,
                            },
                            {
                                badgeType: "emergency",
                                status: "Denied",
                                name:"2",
                                text: "Devon Lane",
                                number: 1234567890,
                            },
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"3",
                                text: "Marvin McKinney",
                                number: 1234567890,
                            },
                            {
                                badgeType: "midtone",
                                status: "In progress",
                                name:"4",
                                text: "Albert Flores",
                                number: 1234567890,
                            },
                            {
                                badgeType: "midtone",
                                status: "In progress",
                                name:"5",
                                text: "Ronald Richards",
                                number: 1234567890,
                            },
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"6",
                                text: "Diane Russell",
                                number: 1234567890,
                            },
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"7",
                                text: "Raoul Emmerich",
                                number: 1234567890,
                            },
                            {
                                badgeType: "emergency",
                                status: "Denied",
                                name:"8",
                                text: "Delilah Farrell",
                                number: 1234567890,
                            },
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"9",
                                text: "Brock Sipes",
                                number: 1234567890,
                            },
                            {
                                badgeType: "midtone",
                                status: "In progress",
                                name:"10",
                                text: "Aylin Hansen",
                                number: 1234567890,
                            },
                            {
                                badgeType: "midtone",
                                status: "In progress",
                                name:"11",
                                text: "Eldora Waters",
                                number: 1234567890,
                            },
                            {
                                badgeType: "emergency",
                                status: "Denied",
                                name:"12",
                                text: "Guillermo Kohler",
                                number: 1234567890,
                            },
                            {
                                badgeType: "emergency",
                                status: "Denied",
                                name:"13",
                                text: "Ryley Medhurst",
                                number: 1234567890,
                            },
                            {
                                badgeType: "emergency",
                                status: "Denied",
                                name:"14",
                                text: "Craig Russel",
                                number: 1234567890,
                            },
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"15",
                                text: "Scot	Hayes",
                                number: 1234567890,
                            },
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"16",
                                text: "Albert Flores",
                                number: 1234567890,
                            },
                            {
                                badgeType: "success",
                                status: "Approved",
                                name:"17",
                                text: "Amiya Langosh",
                                number: 1234567890,
                            },
                            {
                                badgeType: "midtone",
                                status: "In progress",
                                name:"18",
                                text: "Demetrius Cormier",
                                number: 1234567890,
                            },
                            ];
                            setUsers(_users);
                            setPageUsers(_users.slice(0, perPage));
                        }, [perPage]);

                        function changePage(newPage: number) {
                            const offset = (newPage - 1) * (perPage);
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

            {version === "new" && (
                <CodeSnippet
                    lang="typescript"
                    tags="react"
                    allowCopy={true}
                    code={`
                        <GoabTable width="100%" mb="xl">
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Name</th>
                                    <th>File number</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {pageUsers.map(user => (
                                <tr key={user.name}>
                                    <td><GoabBadge type={user.badgeType as GoabBadgeType} content={user.status}></GoabBadge></td>
                                    <td>{user.text}</td>
                                    <td className="goab-table-number-column">{user.number}</td>
                                    <td>
                                        <GoabButtonGroup alignment="center">
                                            <GoabButton type="tertiary">
                                                Edit
                                            </GoabButton>
                                            <GoabButton type="tertiary">
                                                Test
                                            </GoabButton>
                                            <GoabButton type="tertiary">
                                                View
                                            </GoabButton>
                                        </GoabButtonGroup>
                                    </td>
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
                                    <GoabDropdownItem value="5" label="5"></GoabDropdownItem>
                                    <GoabDropdownItem value="10" label="10"></GoabDropdownItem>
                                    <GoabDropdownItem value="15" label="15"></GoabDropdownItem>
                                </GoabDropdown>
                                <span style={{width: "75px"}}>of {users.length}</span>
                            </GoabBlock>
                            <GoabSpacer hSpacing={"fill"} />

                            <GoabPagination
                                itemCount={users.length}
                                perPageCount={perPage}
                                pageNumber={page}
                                onChange={event => changePage(event.page)}
                                variant="links-only"
                            />
                        </GoabBlock>
                    `}
                />
            )}

            {version === "old" && (
                <CodeSnippet
                    lang="typescript"
                    tags="angular"
                    allowCopy={true}
                    code={`
                        import { Component } from "@angular/core";

                        @Component({
                            selector: "abgov-paginate",
                            templateUrl: "./paginate.html",
                        })
                            
                        users: User[] = [];
                        pageUsers: User[] = [];
                        page = 1;
                        perPage = 5;
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
                            this.users = [
                                {
                                    status: { type: "success", text: "Approved" },
                                    name:"1",
                                    text: "Ralph Edwards",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "emergency", text: "Denied" },
                                    name:"2",
                                    text: "Devon Lane",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "success", text: "Approved" },
                                    name:"3",
                                    text: "Marvin McKinney",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "midtone", text: "In progress" },
                                    name:"4",
                                    text: "Albert Flores",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "midtone", text: "In progress" },
                                    name:"5",
                                    text: "Ronald Richards",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "success", text: "Approved" },
                                    name:"6",
                                    text: "Diane Russell",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "success", text: "Approved" },
                                    name:"7",
                                    text: "Raoul Emmerich",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "emergency", text: "Denied" },
                                    name:"8",
                                    text: "Delilah Farrell",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "success", text: "Approved" },
                                    name:"9",
                                    text: "Brock Sipes",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "midtone", text: "In progress" },
                                    name:"10",
                                    text: "Aylin Hansen",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "midtone", text: "In progress" },
                                    name:"11",
                                    text: "Eldora Waters",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "emergency", text: "Denied" },
                                    name:"12",
                                    text: "Guillermo Kohler",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "emergency", text: "Denied" },
                                    name:"13",
                                    text: "Ryley Medhurst",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "emergency", text: "Denied" },
                                    name:"14",
                                    text: "Craig Russel",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "success", text: "Approved" },
                                    name:"15",
                                    text: "Scot	Hayes",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "success", text: "Approved" },
                                    name:"16",
                                    text: "Albert Flores",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "success", text: "Approved" },
                                    name:"17",
                                    text: "Amiya Langosh",
                                    number: 1234567890,
                                },
                                {
                                    status: { type: "midtone", text: "In progress" },
                                    name:"18",
                                    text: "Demetrius Cormier",
                                    number: 1234567890,
                                }
                            ];
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
                                    <th>Status</th>
                                    <th>Name</th>
                                    <th>File number</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {pageUsers.map(user => (
                                <tr *ngFor="let user of users; index as i">
                                    <td><goa-badge [type]="item.status.type" [content]="item.status.text"></goa-badge></td>
                                    <td>{{ user.text }}</td>
                                    <td className="goa-table-number-column">{{ user.number }}</td>
                                    <td>
                                        <goa-button-group alignment="center">
                                            <goa-button type="tertiary">
                                                Edit
                                            </goa-button>
                                            <goa-button type="tertiary">
                                                Test
                                            </goa-button>
                                            <goa-button type="tertiary">
                                                View
                                            </goa-button>
                                        </goa-button-group>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </goa-table>

                        <goa-block alignment="center">
                            <goa-block mb="m" alignment="center">
                                Show
                                <goa-dropdown
                                    (_change)="handlePerPageCountChangeEvent($event)"
                                    value={perPage.toString()}
                                    width="9ch"
                                >
                                    <goa-dropdown-item value="5" label="5"></goa-dropdown-item>
                                    <goa-dropdown-item value="10" label="10"></goa-dropdown-item>
                                    <goa-dropdown-item value="15" label="15"></goa-dropdown-item>
                                </goa-dropdown>
                                <span style={{width: "75px"}}>of {{ this.users.length }}</span>
                            </goa-block>
                            <goa-spacer hSpacing="fill" />

                            <goa-pagination
                                [itemcount]="users.length"
                                [perpagecount]="perPage"
                                [pagenumber]="page"
                                (_change)="handlePageChange($event)"
                                variant="links-only"
                            />
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
                    import { Component } from "@angular/core";

                    @Component({
                        selector: "abgov-paginate",
                        templateUrl: "./paginate.html",
                    })
                        
                    users: User[] = [];
                    pageUsers: User[] = [];
                    page = 1;
                    perPage = 5;
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
                        this.users = [
                            {
                                status: { type: "success", text: "Approved" },
                                name:"1",
                                text: "Ralph Edwards",
                                number: 1234567890,
                            },
                            {
                                status: { type: "emergency", text: "Denied" },
                                name:"2",
                                text: "Devon Lane",
                                number: 1234567890,
                            },
                            {
                                status: { type: "success", text: "Approved" },
                                name:"3",
                                text: "Marvin McKinney",
                                number: 1234567890,
                            },
                            {
                                status: { type: "midtone", text: "In progress" },
                                name:"4",
                                text: "Albert Flores",
                                number: 1234567890,
                            },
                            {
                                status: { type: "midtone", text: "In progress" },
                                name:"5",
                                text: "Ronald Richards",
                                number: 1234567890,
                            },
                            {
                                status: { type: "success", text: "Approved" },
                                name:"6",
                                text: "Diane Russell",
                                number: 1234567890,
                            },
                            {
                                status: { type: "success", text: "Approved" },
                                name:"7",
                                text: "Raoul Emmerich",
                                number: 1234567890,
                            },
                            {
                                status: { type: "emergency", text: "Denied" },
                                name:"8",
                                text: "Delilah Farrell",
                                number: 1234567890,
                            },
                            {
                                status: { type: "success", text: "Approved" },
                                name:"9",
                                text: "Brock Sipes",
                                number: 1234567890,
                            },
                            {
                                status: { type: "midtone", text: "In progress" },
                                name:"10",
                                text: "Aylin Hansen",
                                number: 1234567890,
                            },
                            {
                                status: { type: "midtone", text: "In progress" },
                                name:"11",
                                text: "Eldora Waters",
                                number: 1234567890,
                            },
                            {
                                status: { type: "emergency", text: "Denied" },
                                name:"12",
                                text: "Guillermo Kohler",
                                number: 1234567890,
                            },
                            {
                                status: { type: "emergency", text: "Denied" },
                                name:"13",
                                text: "Ryley Medhurst",
                                number: 1234567890,
                            },
                            {
                                status: { type: "emergency", text: "Denied" },
                                name:"14",
                                text: "Craig Russel",
                                number: 1234567890,
                            },
                            {
                                status: { type: "success", text: "Approved" },
                                name:"15",
                                text: "Scot	Hayes",
                                number: 1234567890,
                            },
                            {
                                status: { type: "success", text: "Approved" },
                                name:"16",
                                text: "Albert Flores",
                                number: 1234567890,
                            },
                            {
                                status: { type: "success", text: "Approved" },
                                name:"17",
                                text: "Amiya Langosh",
                                number: 1234567890,
                            },
                            {
                                status: { type: "midtone", text: "In progress" },
                                name:"18",
                                text: "Demetrius Cormier",
                                number: 1234567890,
                            }
                        ];
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
                        <goab-table width="100%" mb="xl">
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Name</th>
                                    <th>File number</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {pageUsers.map(user => (
                                <tr *ngFor="let user of users; index as i">
                                    <td><goab-badge [type]="item.status.type" [content]="item.status.text"></goab-badge></td>
                                    <td>{{ user.text }}</td>
                                    <td className="goab-table-number-column">{{ user.number }}</td>
                                    <td>
                                        <goab-button-group alignment="center">
                                            <goab-button type="tertiary">
                                                Edit
                                            </goab-button>
                                            <goab-button type="tertiary">
                                                Test
                                            </goab-button>
                                            <goab-button type="tertiary">
                                                View
                                            </goab-button>
                                        </goab-button-group>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </goab-table>

                        <goab-block alignment="center">
                            <goab-block mb="m" alignment="center">
                                Show
                                <goab-dropdown
                                    (onChange)="handlePerPageCountChangeEvent($event)"
                                    value={perPage.toString()}
                                    width="9ch"
                                >
                                    <goab-dropdown-item value="5" label="5"></goab-dropdown-item>
                                    <goab-dropdown-item value="10" label="10"></goab-dropdown-item>
                                    <goab-dropdown-item value="15" label="15"></goab-dropdown-item>
                                </goab-dropdown>
                                <span style={{width: "75px"}}>of {{ this.users.length }}</span>
                            </goab-block>
                            <goab-spacer hSpacing="fill" />

                            <goab-pagination
                                [itemcount]="users.length"
                                [perpagecount]="perPage"
                                [pagenumber]="page"
                                (onChange)="handlePageChange($event)"
                            />
                        </goab-block>
                    `}
                />
            )}



            <GoabTable width="100%" mb="xl">
                <thead>
                <tr>
                    <th>Status</th>
                    <th>Name</th>
                    <th>File number</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {pageUsers.map(user => (
                    <tr key={user.name}>
                        <td><GoabBadge type={user.badgeType as GoabBadgeType} content={user.status}></GoabBadge></td>
                        <td>{user.text}</td>
                        <td className="goab-table-number-column">{user.number}</td>
                        <td>
                            <GoabButtonGroup alignment="center">
                                <GoabButton type="tertiary">
                                    Edit
                                </GoabButton>
                                <GoabButton type="tertiary">
                                    Test
                                </GoabButton>
                                <GoabButton type="tertiary">
                                    View
                                </GoabButton>
                            </GoabButtonGroup>
                        </td>
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
                    <GoabDropdownItem value="5" label="5"></GoabDropdownItem>
                    <GoabDropdownItem value="10" label="10"></GoabDropdownItem>
                    <GoabDropdownItem value="15" label="15"></GoabDropdownItem>
                    </GoabDropdown>
                    <span style={{width: "75px"}}>of {users.length}</span>
                </GoabBlock>
                <GoabSpacer hSpacing={"fill"} />

                <GoabPagination
                itemCount={users.length}
                perPageCount={perPage}
                pageNumber={page}
                onChange={event => changePage(event.page)}
                variant="links-only"
                />
            </GoabBlock>
        </Sandbox>
    </>
    );
}
  