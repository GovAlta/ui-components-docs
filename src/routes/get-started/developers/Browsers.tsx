import { GoACheckbox, GoAContainer, GoATable } from "@abgov/react-components";

export const DeveloperBrowsers: React.FC = () => {
  return (
    <>
      <h1>Developers</h1>
      <h2>Supported browsers</h2>
      <h3>
        The design system components are tested and supported on the following
        browsers and devices:
      </h3>
      <GoATable width="600px">
        <thead>
          <tr>
            <th>Browser</th>
            <th>Windows</th>
            <th>Mac OS</th>
            <th>Android</th>
            <th>iOS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Chrome</td>
            <td>
              <GoACheckbox checked name="browser" />
            </td>
            <td>
              <GoACheckbox checked name="browser" />
            </td>
            <td>
              <GoACheckbox checked name="browser" />
            </td>
            <td>
              <GoACheckbox checked name="browser" />
            </td>
          </tr>
          <tr>
            <td>Microsoft Edge</td>
            <td>
              <GoACheckbox checked name="browser" />
            </td>
            <td>
              <GoACheckbox checked name="browser" />
            </td>
            <td>
              <GoACheckbox checked={false} name="browser" />
            </td>
            <td>
              <GoACheckbox checked={false} name="browser" />
            </td>
          </tr>
          <tr>
            <td>Mozilla Firefox</td>
            <td>
              <GoACheckbox checked name="browser" />
            </td>
            <td>
              <GoACheckbox checked name="browser" />
            </td>
            <td>
              <GoACheckbox checked name="browser" />
            </td>
            <td>
              <GoACheckbox checked={false} name="browser" />
            </td>
          </tr>
          <tr>
            <td>Apple Safari</td>
            <td>
              <GoACheckbox checked name="browser" />
            </td>
            <td>N/A</td>
            <td>
              <GoACheckbox checked name="browser" />
            </td>
            <td>N/A</td>
          </tr>
        </tbody>
      </GoATable>
      <GoAContainer type="non-interactive">
        <h3>Browser version support</h3>
        The design system components support the two latest stable versions of
        each browser. Latest version and Latest version -1
      </GoAContainer>
      <GoAContainer type="non-interactive">
        <h3>Representative Mobile OS use in testing</h3>
        <strong>Android OS:</strong> 10 
        <strong>iOS: </strong> 15+
      </GoAContainer>
    </>
  );
};

export default DeveloperBrowsers;
