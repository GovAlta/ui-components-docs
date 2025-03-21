import { GoABadge, GoABadgeType, GoABlock, GoAContainer, GoAButton, GoATable } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox } from "@components/sandbox";

const noop = () => {};
const badgeValues = [
    {
        key: 1,
        type: "important",
        content: "Pending"
    },
    {
        key: 2,
        type: "emergency",
        content: "Failed"
    },
    {
        key: 3,
        type: "success",
        content: "Complete"
    },
    {
        key: 4,
        type: "information",
        content: "In progress"
    },
    {
        key: 5,
        type: "midtone",
        content: "Closed"
    },
    {
        key: 6,
        type: "success",
        content: "Complete"
    }
]

export default function CheckboxExamples () {
    return (
        <> 
        {/* Examples*/}

        <h3 id="component-example-show-status-table">Show status in a table</h3>
        <Sandbox fullWidth skipRender>
            <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                    onClick($event: Event) {
                        console.log("clicked");
                    } 

                    badgeValues = [
                        {
                            type: "important",
                            content: "Pending",
                        },
                        {
                            type: "emergency",
                            content: "Failed",
                        },
                        {
                            type: "success",
                            content: "Complete",
                        },
                        {
                            type: "information",
                            content: "In progress",
                        },
                        {
                            type: "midtone",
                            content: "Closed",
                        },
                        {
                            type: "success",
                            content: "Complete",
                        },
                    ];
                `}
            />

            <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                    <goa-table width="100%">
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Name</th>
                                <th class="goa-table-number-header">File number</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr *ngFor="let badge of badgeValues">
                                <td>
                                    <goa-badge [type]="badge.type" [content]="badge.content" />
                                </td>
                                <td>Lorem ipsum dolor sit amet consectetur.</td>
                                <td class="goa-table-number-column">1234567890</td>
                                <td>
                                    <goa-button type="tertiary" (_click)="onClick($event)">Assign</goa-button>
                                </td>
                            </tr>
                        </tbody>
                    <goa-table>
                `}
            />
            
            <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                    function onClick() {
                        console.log("clicked");
                    }

                    const badgeValues = [
                        {
                            key: 1,
                            type: "important",
                            content: "Pending"
                        },
                        {
                            key: 2,
                            type: "emergency",
                            content: "Failed"
                        },
                        {
                            key: 3,
                            type: "success",
                            content: "Complete"
                        },
                        {
                            key: 4,
                            type: "information",
                            content: "In progress"
                        },
                        {
                            key: 5,
                            type: "midtone",
                            content: "Closed"
                        },
                        {
                            key: 6,
                            type: "success",
                            content: "Complete"
                        }
                    ]
                `}
            />

            <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                    <GoATable width="100%">
                        <thead>
                        <tr>
                            <th>Status</th>
                            <th>Name</th>
                            <th className="goa-table-number-header">File number</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {badgeValues.map((badge) => (
                                <tr key={badge.key}>
                                    <td>
                                        <GoABadge type={badge.type as GoABadgeType} content={badge.content} />
                                    </td>
                                    <td>
                                        Lorem ipsum dolor sit amet consectetur
                                    </td>
                                    <td className="goa-table-number-column">
                                        1234567890
                                    </td>
                                    <td>
                                        <GoAButton type="tertiary" onClick={onClick}}>
                                            Assign
                                        </GoAButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </GoATable>
                `}
            />
            <GoATable width="100%">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Name</th>
                    <th className="goa-table-number-header">File number</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                    {badgeValues.map((badge) => (
                        <tr key={badge.key}>
                            <td>
                                <GoABadge type={badge.type as GoABadgeType} content={badge.content} />
                            </td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                            </td>
                            <td className="goa-table-number-column">
                                1234567890
                            </td>
                            <td>
                                <GoAButton type="tertiary" onClick={noop}>
                                    Assign
                                </GoAButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </GoATable>
        </Sandbox>

        <h3 id="component-example-multiple-tags-together">Show multiple tags together</h3>
        <Sandbox>
            <GoABlock>
                <GoABadge type="information" content="In progress"/>
                <GoABadge type="important" content="Priority"/>
                <GoABadge type="emergency" content="Past deadline"/>
            </GoABlock>
        </Sandbox>

        <h3 id="component-example-show-status-card">Show a status on a card</h3>
        <Sandbox fullWidth skipRender>
            
            <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                <goa-container type="non-interactive" accent="thick">
                    <div slot="title">Heading</div>
                    <div slot="actions">
                        <goa-badge type="important" content="Priority"></goa-badge>
                    </div>
                    Content
                </goa-container>     
                `}
            />

            <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                    <GoAContainer
                        type="non-interactive"
                        accent="thick"
                        heading="Heading"
                        actions={<GoABadge type="important" content="Priority"/>}>
                        Content
                    </GoAContainer>
                 `}
            />

          <GoAContainer
            type="non-interactive"
            accent="thick"
            heading="Heading"
            actions={<GoABadge type="important" content="Priority"/>}>
            Content
          </GoAContainer>
        </Sandbox>
        </>
    )
}