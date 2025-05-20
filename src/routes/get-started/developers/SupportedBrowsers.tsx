import { GoabCheckbox, GoabContainer, GoabTable } from "@abgov/react-components";
import { GoabText } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function SupportedBrowsersPage() {
  return (
    <ComponentContent>
      <GoabText size="heading-m" mt="xl" mb={"xs"}>Developers</GoabText>
      <GoabText size="heading-xl" mb="m">Supported browsers</GoabText>
      <GoabText size="body-l" mb="2xl"> The design system components are tested on the following browsers and devices:
      </GoabText>

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
        <GoabContainer type="non-interactive" mt="2xl" width={"content"}>
          <GoabText size="heading-m" mb="m">
            Representative mobile OS used in testing
          </GoabText>
          <GoabText size="body-m">
            <strong>Android OS:</strong> 10+
          </GoabText>
          <GoabText size="body-m">
            <strong>iOS: </strong> 15+
          </GoabText>
        </GoabContainer>
      </div>
    </ComponentContent>
  );
}
