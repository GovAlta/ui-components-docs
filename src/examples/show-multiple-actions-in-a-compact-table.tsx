import { GoabBadge, GoabBlock, GoabIconButton, GoabTable } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";

export const ShowMultipleActionsInACompactTable = () => {
  return (
    <>
      <Sandbox fullWidth>
        <GoabTable width="100%">
          <thead>
            <tr>
              <th>Status</th>
              <th>Name</th>
              <th style={{ textAlign: "right" }}>Id Number</th>
              <th>Edit | Flag | Send</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <GoabBadge type="information" content="In progress"></GoabBadge>
              </td>
              <td>Darlene Robertson</td>
              <td className="goa-table-number-column">45904</td>
              <td>
                <GoabBlock>
                  <GoabIconButton size="small" icon="pencil" ariaLabel="Edit"></GoabIconButton>
                  <GoabIconButton size="small" icon="flag" ariaLabel="Flag"></GoabIconButton>
                  <GoabIconButton size="small" icon="mail" ariaLabel="Send"></GoabIconButton>
                </GoabBlock>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <GoabBadge type="dark" content="Inactive"></GoabBadge>
              </td>
              <td>Floyd Miles</td>
              <td className="goa-table-number-column">47838</td>
              <td>
                <GoabBlock>
                  <GoabIconButton size="small" icon="pencil" ariaLabel="Edit"></GoabIconButton>
                  <GoabIconButton size="small" icon="flag" ariaLabel="Flag"></GoabIconButton>
                  <GoabIconButton size="small" icon="mail" ariaLabel="Send"></GoabIconButton>
                </GoabBlock>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <GoabBadge type="success" content="Active"></GoabBadge>
              </td>
              <td>Kathryn Murphy</td>
              <td className="goa-table-number-column">34343</td>
              <td>
                <GoabBlock>
                  <GoabIconButton size="small" icon="pencil" ariaLabel="Edit"></GoabIconButton>
                  <GoabIconButton size="small" icon="flag" ariaLabel="Flag"></GoabIconButton>
                  <GoabIconButton size="small" icon="mail" ariaLabel="Send"></GoabIconButton>
                </GoabBlock>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <GoabBadge type="important" content="Recent"></GoabBadge>
              </td>
              <td>Annette Black</td>
              <td className="goa-table-number-column">89897</td>
              <td>
                <GoabBlock>
                  <GoabIconButton size="small" icon="pencil" ariaLabel="Edit"></GoabIconButton>
                  <GoabIconButton size="small" icon="flag" ariaLabel="Flag"></GoabIconButton>
                  <GoabIconButton size="small" icon="mail" ariaLabel="Send"></GoabIconButton>
                </GoabBlock>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <GoabBadge type="success" content="Active"></GoabBadge>
              </td>
              <td>Esther Howard</td>
              <td className="goa-table-number-column">12323</td>
              <td>
                <GoabBlock>
                  <GoabIconButton size="small" icon="pencil" ariaLabel="Edit"></GoabIconButton>
                  <GoabIconButton size="small" icon="flag" ariaLabel="Flag"></GoabIconButton>
                  <GoabIconButton size="small" icon="mail" ariaLabel="Send"></GoabIconButton>
                </GoabBlock>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <GoabBadge type="success" content="Active"></GoabBadge>
              </td>
              <td>Jane Cooper</td>
              <td className="goa-table-number-column">56565</td>
              <td>
                <GoabBlock>
                  <GoabIconButton size="small" icon="pencil" ariaLabel="Edit"></GoabIconButton>
                  <GoabIconButton size="small" icon="flag" ariaLabel="Flag"></GoabIconButton>
                  <GoabIconButton size="small" icon="mail" ariaLabel="Send"></GoabIconButton>
                </GoabBlock>
              </td>
              <td></td>
            </tr>
          </tbody>
        </GoabTable>
      </Sandbox>
    </>
  );
};

export default ShowMultipleActionsInACompactTable;
