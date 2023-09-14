import {
  GoACheckbox,
  GoAContainer,
  GoASpacer,
  GoATable,
} from "@abgov/react-components";
import "./Developers.css";

export const DevelopersBrowsers: React.FC = () => {
  return (
    <div className="developers-browsers-page">
      <h1>Developers</h1>
      <h2>Supported browsers</h2>
      <h3>
        The design system components are tested and supported on the following
        browsers and devices:
      </h3>

      <GoATable width="564px">
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
              <div className="checkbox-container">
                <GoACheckbox checked name="browser" disabled={true} />
              </div>
            </td>
            <td>
              <div className="checkbox-container">
                <GoACheckbox checked name="browser" disabled={true} />
              </div>
            </td>
            <td>
              <div className="checkbox-container">
                <GoACheckbox checked name="browser" disabled={true} />
              </div>
            </td>
            <td>
              <div className="checkbox-container">
                <GoACheckbox checked name="browser" disabled={true} />
              </div>
            </td>
          </tr>
          <tr>
            <td>Microsoft Edge</td>
            <td>
              <div className="checkbox-container">
                <GoACheckbox checked name="browser" disabled={true} />
              </div>
            </td>
            <td>
              <div className="checkbox-container">
                <GoACheckbox checked name="browser" disabled={true} />
              </div>
            </td>
            <td>
              <div className="checkbox-container">
                <GoACheckbox checked={false} name="browser" disabled={true} />
              </div>
            </td>
            <td>
              <div className="checkbox-container">
                <GoACheckbox checked={false} name="browser" disabled={true} />
              </div>
            </td>
          </tr>
          <tr>
            <td>Mozilla Firefox</td>
            <td>
              <div className="checkbox-container">
                <GoACheckbox checked name="browser" disabled={true} />
              </div>
            </td>
            <td>
              <div className="checkbox-container">
                <GoACheckbox checked name="browser" disabled={true} />
              </div>
            </td>
            <td>
              <div className="checkbox-container">
                <GoACheckbox checked name="browser" disabled={true} />
              </div>
            </td>
            <td>
              <div className="checkbox-container">
                <GoACheckbox checked={false} name="browser" disabled={true} />
              </div>
            </td>
          </tr>
          <tr>
            <td>Apple Safari</td>
            <td>
              <div className="checkbox-container">
                <p>N/A</p>
              </div>
            </td>
            <td>
              <div className="checkbox-container">
                <GoACheckbox checked name="browser" disabled={true} />
              </div>
            </td>
            <td>
              <div className="checkbox-container">
                <p>N/A</p>
              </div>
            </td>
            <td>
              <div className="checkbox-container">
                <GoACheckbox checked name="browser" disabled={true} />
              </div>
            </td>
          </tr>
        </tbody>
      </GoATable>

      <GoASpacer vSpacing="2xl" />
      <GoAContainer type="non-interactive">
        <h3>Browser version support</h3>
        The design system components support the two latest stable versions of
        each browser. Latest version and Latest version -1
      </GoAContainer>
      <GoASpacer vSpacing="2xs" />
      <GoAContainer type="non-interactive">
        <h3>Representative mobile OS used in testing</h3>
        <p>
          <strong>Android OS:</strong> 10+
        </p>
        <p>
          <strong>iOS: </strong> 15+
        </p>
      </GoAContainer>
    </div>
  );
};

export default DevelopersBrowsers;
