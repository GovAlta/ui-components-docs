import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabBadge, GoabButton, GoabTable } from "@abgov/react-components";
import { GoabBadgeType } from "@abgov/ui-components-common";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useContext } from "react";

export const ShowStatusInATable = () => {
  const noop = () => {};
  const {version} = useContext(LanguageVersionContext);
  const badgeValues = [
    {
      key: 1,
      type: "important",
      content: "Pending",
    },
    {
      key: 2,
      type: "emergency",
      content: "Failed",
    },
    {
      key: 3,
      type: "success",
      content: "Complete",
    },
    {
      key: 4,
      type: "information",
      content: "In progress",
    },
    {
      key: 5,
      type: "midtone",
      content: "Closed",
    },
    {
      key: 6,
      type: "success",
      content: "Complete",
    },
  ];
  return (
    <Sandbox fullWidth skipRender>
      {/*Angular code*/}
      {version === "old" && <CodeSnippet
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
      />}
      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
                  badgeValues: {type: GoabBadgeType, content: string}[] = [
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
                  
                  onClick() {
                        console.log("clicked");
                  } 
                `}
      />}

      {version === "old" && <CodeSnippet
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
      />}
      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
                <goab-table width="100%">
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
                      <goab-badge [type]="badge.type" [content]="badge.content" />
                    </td>
                    <td>Lorem ipsum dolor sit amet consectetur.</td>
                    <td class="goa-table-number-column">1234567890</td>
                    <td>
                      <goab-button type="tertiary" (onClick)="onClick()">Assign</goab-button>
                    </td>
                  </tr>
                </tbody>
                </goab-table>
              `}
      />}

      {/*React code*/}
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

      {version === "old" && <CodeSnippet
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
      />}
      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
                    <GoabTable width="100%">
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
                                        <GoabBadge type={badge.type as GoabBadgeType} content={badge.content} />
                                    </td>
                                    <td>
                                        Lorem ipsum dolor sit amet consectetur
                                    </td>
                                    <td className="goa-table-number-column">
                                        1234567890
                                    </td>
                                    <td>
                                        <GoabButton size="compact" type="tertiary" onClick={onClick}>
                                            Assign
                                        </GoabButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </GoabTable>
                `}
      />}

      <GoabTable width="100%">
        <thead>
        <tr>
          <th>Status</th>
          <th>Name</th>
          <th className="goa-table-number-header">File number</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {badgeValues.map(badge => (
          <tr key={badge.key}>
            <td>
              <GoabBadge type={badge.type as GoabBadgeType} content={badge.content} />
            </td>
            <td>Lorem ipsum dolor sit amet consectetur</td>
            <td className="goa-table-number-column">1234567890</td>
            <td>
              <GoabButton size={"compact"} type="tertiary" onClick={noop}>
                Assign
              </GoabButton>
            </td>
          </tr>
        ))}
        </tbody>
      </GoabTable>
    </Sandbox>
  )
}

export default ShowStatusInATable;
