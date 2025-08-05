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
              <td>Item 1</td>
              <td>Item 2</td>
              <td className="goa-table-number-column">54</td>
            </tr>
            <tr>
              <td>Item 1</td>
              <td>Item 2</td>
              <td className="goa-table-number-column">4567</td>
            </tr>
          </tbody>
        </GoabTable>
      </Sandbox>
    </>
  );
};

export default DisplayNumbersInATableSoTheyCanBeScannedEasily;
