import { 
  GoabButton,
  GoabBadge,
  GoabTable 
} from "@abgov/react-components";
import type {
  GoabBadgeType,
} from "@abgov/ui-components-common";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const ZebraStripesInATable = () => {
  const filteredData = [
    {
      status: { type: "information" as GoabBadgeType, text: "In progress" },
      name: "Ivan Schmidt",
      id: "76954",
    },
    {
      status: { type: "success" as GoabBadgeType, text: "Completed" },
      name: "Luz Lakin",
      id: "53364",
    },
    {
      status: { type: "information" as GoabBadgeType, text: "In progress" },
      name: "Keith McGlynn",
      id: "41345",
    },
    {
      status: { type: "success" as GoabBadgeType, text: "Completed" },
      name: "Melody Frami",
      id: "56175",
    },
    {
      status: { type: "important" as GoabBadgeType, text: "Updated" },
      name: "Frederick Skiles",
      id: "70418",
    },
    {
      status: { type: "success" as GoabBadgeType, text: "Completed" },
      name: "Dana Pfannerstill",
      id: "06857",
    },
  ];

  return (
    <>
      <Sandbox fullWidth>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            .goa-table-zebra-stripes > tr:nth-child(even) {
                background-color: var(--goa-color-greyscale-50);
            }
          `}
        />
        <GoabTable width="100%">
          <thead>
            <tr>
              <th>Status</th>
              <th>Assigned to</th>
              <th className="goa-table-number-header">Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="goa-table-zebra-stripes">
           {filteredData.map((item) => (
              <tr key={item.id}>
                <td>
                  <GoabBadge type={item.status.type} content={item.status.text} />
                </td>
                <td>{item.name}</td>
                <td className="goa-table-number-column">{item.id}</td>
                <td>
                    <GoabButton type="tertiary">Action</GoabButton>
                </td>
              </tr>
          ))}
          </tbody>
        </GoabTable>
      </Sandbox>
    </>
  );
};

export default ZebraStripesInATable;
