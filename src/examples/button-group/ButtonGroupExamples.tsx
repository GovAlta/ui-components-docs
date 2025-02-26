import {
    GoABadge,
    GoABadgeType,
    GoABlock,
    GoAButton,
    GoAButtonGroup,
    GoADropdown,
    GoADropdownItem,
    GoAModal,
    GoAPagination,
    GoAPaginationProps,
    GoATable,
    GoASpacer,
  } from "@abgov/react-components";
  import { ComponentBinding, Sandbox } from "@components/sandbox";
  import { useEffect, useState } from "react";
  import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
  
  type ComponentPropsType = Omit<GoAPaginationProps, "pageNumber" | "onChange">;
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
    badgeType: string;
    status: string;
    name: string;
    text: string;
    number: number;
  }
  
  export default function ButtonGroupExamples() {
  
    const [paginationProps, setPaginationProps] =
      useState<ComponentPropsType>({
        itemCount: 15,
        perPageCount: 10,
      });
  
    const [paginationBindings, setPaginationBindings] = useState<
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
        value: 10,
      },
      {
        label: "Items per page count",
        type: "number",
        name: "perPageCount",
        value: 10,
      },
    ]);
    function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setPaginationProps(props as CastingType);
    setPaginationBindings(bindings);
    }

    const [basicModalOpen, setBasicModalOpen] = useState<boolean>();
    const [users, setUsers] = useState<User[]>([]);
    const [pageUsers, setPageUsers] = useState<User[]>([]);
    const [page, setPage] = useState<number>(1);
    const totalUsers =
    (paginationBindings.find(binding => binding.name === "itemCount")?.value as number) || 10;
    let perPageUsers: number =
    (paginationBindings.find(binding => binding.name === "perPageCount")?.value as number) || 10;
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
    
    // @ts-ignore
    function handlePerPageChange(name: string, values: string | string[]): void {
    const newPerPageCount = Array.isArray(values) ? parseInt(values[0]) : parseInt(values);

    // Update paginationProps
    setPaginationProps(prevProps => ({
    ...prevProps,
    perPageCount: newPerPageCount,
    }));

    // Update paginationBindings
    setPaginationBindings(prevBindings =>
    prevBindings.map(binding =>
        binding.name === "perPageCount"
        ? ({ ...binding, value: newPerPageCount.toString() } as ComponentBinding)
        : binding
    )
    );
}
  
    return (
      <>
        <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
        </h2>

        <h3 id="component-example-1">Multiple actions in a table</h3>

        <Sandbox
        fullWidth
        skipRender
        onChange={onSandboxChange}>

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

                interface User {
                    badgeType: string;
                    status: string;
                    name: string;
                    text: string;
                    number: number;
                }

                export default function Pagination() {
                const [users, setUsers] = useState<User[]>([]);
                const [pageUsers, setPageUsers] = useState<User[]>([]);
                const [page, setPage] = useState<number>(1);
                const [perPage, setPerPage] = useState<number>(10);

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
                    }, [totalUsers]);

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
                        onChange={handlePerPageChange}
                        value={paginationProps.perPageCount?.toString()}
                        width="8ch">
                        {[10, 20, 30].map(value => (
                        <GoADropdownItem
                            key={value}
                            value={value.toString()}
                            label={value.toString()}
                        />
                        ))}
                    </GoADropdown>
                    <span style={{ width: "75px" }}>per page</span>
                    </GoABlock>
                    <GoASpacer hSpacing={"fill"} />

                    <GoAPagination
                    itemCount={users.length}
                    pageNumber={page}
                    onChange={changePage}
                    variant="links-only"
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

                interface User {
                    type: string;
                    content: string;
                    name: string;
                    text: string;
                    number: number;
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
                        this.users = [
                            {
                                type: "success",
                                content: "Approved",
                                name:"1",
                                text: "Ralph Edwards",
                                number: 1234567890,
                            },
                            {
                                type: "emergency",
                                content: "Denied",
                                name:"2",
                                text: "Devon Lane",
                                number: 1234567890,
                            },
                            {
                                type: "success",
                                content: "Approved",
                                name:"3",
                                text: "Marvin McKinney",
                                number: 1234567890,
                            },
                            {
                                type: "midtone",
                                content: "In progress",
                                name:"4",
                                text: "Albert Flores",
                                number: 1234567890,
                            },
                            {
                                type: "midtone",
                                content: "In progress",
                                name:"5",
                                text: "Ronald Richards",
                                number: 1234567890,
                            },
                            {
                                type: "success",
                                content: "Approved",
                                name:"6",
                                text: "Diane Russell",
                                number: 1234567890,
                            },
                            {
                                type: "success",
                                content: "Approved",
                                name:"7",
                                text: "Raoul Emmerich",
                                number: 1234567890,
                            },
                            {
                                type: "emergency",
                                content: "Denied",
                                name:"8",
                                text: "Delilah Farrell",
                                number: 1234567890,
                            },
                            {
                                type: "success",
                                content: "Approved",
                                name:"9",
                                text: "Brock Sipes",
                                number: 1234567890,
                            },
                            {
                                type: "midtone",
                                content: "In progress",
                                name:"10",
                                text: "Aylin Hansen",
                                number: 1234567890,
                            },
                            {
                                type: "midtone",
                                content: "In progress",
                                name:"11",
                                text: "Eldora Waters",
                                number: 1234567890,
                            },
                            {
                                type: "emergency",
                                content: "Denied",
                                name:"12",
                                text: "Guillermo Kohler",
                                number: 1234567890,
                            },
                            {
                                type: "emergency",
                                content: "Denied",
                                name:"13",
                                text: "Ryley Medhurst",
                                number: 1234567890,
                            },
                            {
                                type: "emergency",
                                content: "Denied",
                                name:"14",
                                text: "Craig Russel",
                                number: 1234567890,
                            },
                            {
                                type: "success",
                                content: "Approved",
                                name:"15",
                                text: "Scot	Hayes",
                                number: 1234567890,
                            },
                            {
                                type: "success",
                                content: "Approved",
                                name:"16",
                                text: "Albert Flores",
                                number: 1234567890,
                            },
                            {
                                type: "success",
                                content: "Approved",
                                name:"17",
                                text: "Amiya Langosh",
                                number: 1234567890,
                            },
                            {
                                type: "midtone",
                                content: "In progress",
                                name:"18",
                                text: "Demetrius Cormier",
                                number: 1234567890,
                            },
                        ];
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
                            <th>Status</th>
                            <th>Name</th>
                            <th>File number</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let user of pageUsers; index as i">
                            <td><goa-badge [type]="user.type" [content]="user.content" /></td>
                            <td>{{user.text}}</td>
                            <td className="goa-table-number-column">{{user.number}}</td>
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
                    onChange={handlePerPageChange}
                    value={paginationProps.toString()}
                    width="8ch">
                    {[10, 20, 30].map(value => (
                    <GoADropdownItem
                        key={value}
                        value={value.toString()}
                        label={value.toString()}
                    />
                    ))}
                </GoADropdown>
                <span style={{ width: "75px" }}>per page</span>
                </GoABlock>
                <GoASpacer hSpacing={"fill"} />

                <GoAPagination
                itemCount={users.length}
                pageNumber={page}
                onChange={changePage}
                variant="links-only"
                />
            </GoABlock>
        </Sandbox>

        <h3 id="component-example-2">Show multiple options in a modal</h3>

        <Sandbox 
        skipRender 
        onChange={onSandboxChange}>

            <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
                export class SomeOtherComponent {
                    open = false;
                    onClick(event: Event) {
                        this.open = !this.open;
                    }
                }
            `}
            />
            
            <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
                <goa-button (_click)="onClick($event)">
                    Open modal
                </goa-button>
                <goa-modal heading="Heading" role="alertdialog" [open]="open">
                    <p>Content</p>
                    <goa-button-group alignment="end" mt="xl">
                        <goa-button type="secondary" (_click)="onClick($event)">
                            Secondary
                        </goa-button>
                        <goa-button type="primary" (_click)="onClick($event)">
                            Primary
                        </goa-button>
                    </goa-button-group>
                </goa-modal>
            `}
            />

            <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
                const [open, setOpen] = useState(false);
                function onClick() {
                    setOpen(!open);
                }
            `}
            />
            
            <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
                <GoAButton onClick={onClick}>Open modal</GoAButton>
                <GoAModal
                    heading="Heading"
                    role="dialog"
                    open={open}
                    onClose={onClick}
                    actions={
                    <GoAButtonGroup alignment="end">
                        <GoAButton type="secondary" onClick={onClick}>
                        Secondary
                        </GoAButton>
                        <GoAButton type="primary" onClick={onClick}>
                        Primary
                        </GoAButton>
                    </GoAButtonGroup>
                    }>
                    <p>Content</p>
                </GoAModal>
            `}
            />

            <GoAButton onClick={() => setBasicModalOpen(true)}>Open modal</GoAButton>
            <GoAModal
                heading="Heading"
                role="dialog"
                open={basicModalOpen}
                onClose={() => setBasicModalOpen(false)}
                actions={
                <GoAButtonGroup alignment="end">
                    <GoAButton type="secondary" onClick={() => setBasicModalOpen(false)}>
                    Secondary
                    </GoAButton>
                    <GoAButton type="primary" onClick={() => setBasicModalOpen(false)}>
                    Primary
                    </GoAButton>
                </GoAButtonGroup>
                }>
                <p>Content</p>
            </GoAModal>
        </Sandbox>

        <h3 id="component-example-3">Compact button group</h3>

        <Sandbox
        fullWidth
        onChange={onSandboxChange}>
            <GoAButtonGroup alignment="center">
                <GoAButton size="compact" type="primary">
                    Button
                </GoAButton>
                <GoAButton size="compact" type="secondary">
                    Button
                </GoAButton>
                <GoAButton size="compact" type="tertiary">
                    Button
                </GoAButton>
            </GoAButtonGroup>
        </Sandbox>
    </>
    );
  }
  