import { GoabTable } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";

export const DisplayNumbersInATableSoTheyCanBeScannedEasily = () => {
  return (
    <>
      <Sandbox fullWidth>
        <GoabTable width="100%">
          <thead>
            <tr>
              <th>Col 1</th>
              <th>Col 2</th>
              <th className="goa-table-number-header">Number Column</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Christian</td>
              <td>Batz</td>
              <td className="goa-table-number-column">54356456</td>
            </tr>
            <tr>
              <td>Brian</td>
              <td>Wisozk</td>
              <td className="goa-table-number-column">23212321</td>
            </tr>
            <tr>
              <td>Neha</td>
              <td>Jones</td>
              <td className="goa-table-number-column">23197213</td>
            </tr>
            <tr>
              <td>Tristan</td>
              <td>Buckridge</td>
              <td className="goa-table-number-column">76312313</td>
            </tr>
          </tbody>
        </GoabTable>
      </Sandbox>
    </>
  );
};

export default DisplayNumbersInATableSoTheyCanBeScannedEasily;
