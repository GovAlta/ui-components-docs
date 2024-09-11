import { GoabCheckbox, GoabContainer, GoabTable } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function SupportedBrowsersPage() {
  return (
    <ComponentContent>
      <h1>Developers</h1>
      <h2>Supported browsers</h2>
      <h3 className="introduction">
        The design system components are tested on the following browsers and devices:
      </h3>

      <GoabTable width="564px">
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
              <GoabCheckbox checked name="browser" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="browser" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="browser" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="browser" disabled={true} />
            </td>
          </tr>
          <tr>
            <td>Microsoft Edge</td>
            <td>
              <GoabCheckbox checked name="browser" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="browser" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked={false} name="browser" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked={false} name="browser" disabled={true} />
            </td>
          </tr>
          <tr>
            <td>Mozilla Firefox</td>
            <td>
              <GoabCheckbox checked name="browser" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="browser" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked name="browser" disabled={true} />
            </td>
            <td>
              <GoabCheckbox checked={false} name="browser" disabled={true} />
            </td>
          </tr>
          <tr>
            <td>Apple Safari</td>
            <td>N/A</td>
            <td>
              <GoabCheckbox checked name="browser" disabled={true} />
            </td>
            <td>N/A</td>
            <td>
              <GoabCheckbox checked name="browser" disabled={true} />
            </td>
          </tr>
        </tbody>
      </GoabTable>

      <div className="max-width-72ch">
        <GoabContainer type="non-interactive" mt="2xl">
          <h3>Representative mobile OS used in testing</h3>
          <p>
            <strong>Android OS:</strong> 10+
          </p>
          <p>
            <strong>iOS: </strong> 15+
          </p>
        </GoabContainer>
      </div>
    </ComponentContent>
  );
}
