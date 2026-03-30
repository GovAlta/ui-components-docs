import { useEffect, useState } from "react";
import { GoabButton, GoabPushDrawer, GoabTable } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export function PushDrawerExampleWithDivs() {
  const [open, setOpen] = useState(false);
  const [props, setProps] = useState({});

  useEffect(() => {
    if (open) {
      setProps({ open: true });
    } else {
      setProps({});
    }
    console.log("Open state changed:", open, props);
  }, [open]);

  const closePushDrawer = () => {
    console.log("closePushDrawer called");
    setOpen(false);
  };

  return (
    <>
      <h3 id="example-1">Example 1</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          minHeight: "550px",
        }}>
        <div
          style={{
            flex: "1 1 0%",
            overflow: "hidden",
            border: "var(--goa-border-width-s) solid var(--goa-color-greyscale-200)",
          }}
          test-id="container">
          <h1>Pushed In Content</h1>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <p>This Content Gets Pushed</p>
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <GoabButton onClick={() => setOpen(!open)}>
              {open ? "Close Drawer" : "Open Drawer"}
            </GoabButton>
          </div>
          <GoabTable width="100%">
            <thead>
              <tr>
                <th>First</th>
                <th>Last</th>
                <th className="goa-table-number-header">Number Column</th>
              </tr>
            </thead>
            <tbody>
              <tr key="row-1">
                <td>John</td>
                <td>Doe</td>
                <td className="goa-table-number-column">1234</td>
              </tr>
              <tr key="row-2">
                <td>Jane</td>
                <td>Roe</td>
                <td className="goa-table-number-column">2345</td>
              </tr>
              <tr key="row-3">
                <td>Don</td>
                <td>Joe</td>
                <td className="goa-table-number-column">3456</td>
              </tr>
              <tr key="row-4">
                <td>Ron</td>
                <td>Toe</td>
                <td className="goa-table-number-column">4567</td>
              </tr>
            </tbody>
          </GoabTable>
        </div>
        <GoabPushDrawer
          testid="drawer"
          heading="Push Drawer"
          width="300px"
          onClose={() => {
            console.log("Drawer onClose triggered");
            setOpen(false);
          }}
          actions={<GoabButton onClick={closePushDrawer}>Close</GoabButton>}
          {...props}>
          <div>
            <h1>Drawer</h1>
            <p>This is drawer content. It pushes the main content to the side, out of its way.</p>
          </div>
        </GoabPushDrawer>
      </div>
      <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
<goab-page-block width="100%">
  <div style="display: flex; flex-direction: row; min-height: 550px">
    <div
      style="flex: 1 1 0%; overflow: hidden; border: var(--goa-border-width-s) solid var(--goa-color-greyscale-200)"
      test-id="container"
    >
      <h1>Pushed In Content</h1>
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <h2>This Content Gets Pushed</h2>
      </div>
      <p>Some might call it a shove.</p>
      <goab-table width="100%">
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th className="goa-table-number-header">Number Column</th>
          </tr>
        </thead>
        <tbody>
          <tr key="row-1">
            <td>John</td>
            <td>Doe</td>
            <td className="goa-table-number-column">1234</td>
          </tr>
          <tr key="row-2">
            <td>Jane</td>
            <td>Roe</td>
            <td className="goa-table-number-column">2345</td>
          </tr>
          <tr key="row-3">
            <td>Don</td>
            <td>Joe</td>
            <td className="goa-table-number-column">3456</td>
          </tr>
          <tr key="row-4">
            <td>Ron</td>
            <td>Toe</td>
            <td className="goa-table-number-column">4567</td>
          </tr>
        </tbody>
      </goab-table>
    </div>
    <goab-push-drawer
      testid="drawer"
      [open]="true"
      heading="Push Drawer"
      [width]="'300px'"
      [actions]="drawerActions"
      (onClose)="closePushDrawer()"
    >
      <div>
        <h1>Drawer</h1>
        <p>
          This is drawer content. It pushes the main content to the side, out of its way.
        </p>
      </div>
    </goab-push-drawer>
  </div>
</goab-page-block>

<ng-template #drawerActions>
  <goab-button (click)="closePushDrawer()">Close</goab-button>
</ng-template>
                `}
      />
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
<div
  style={{
    display: "flex",
    flexDirection: "row",
    minHeight: "550px",
  }}>
  <div
    style={{
      flex: "1 1 0%",
      overflow: "hidden",
      border: "var(--goa-border-width-s) solid var(--goa-color-greyscale-200)",
    }}
    test-id="container">
    <h1>Pushed In Content</h1>
    <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
      <h2>This Content Gets Pushed</h2>
    </div>
    <p>Some might call it a shove.</p>
    <GoabTable width="100%">
      <thead>
        <tr>
          <th>First</th>
          <th>Last</th>
          <th className="goa-table-number-header">Number Column</th>
        </tr>
      </thead>
      <tbody>
        <tr key="row-1">
          <td>John</td>
          <td>Doe</td>
          <td className="goa-table-number-column">1234</td>
        </tr>
        <tr key="row-2">
          <td>Jane</td>
          <td>Roe</td>
          <td className="goa-table-number-column">2345</td>
        </tr>
        <tr key="row-3">
          <td>Don</td>
          <td>Joe</td>
          <td className="goa-table-number-column">3456</td>
        </tr>
        <tr key="row-4">
          <td>Ron</td>
          <td>Toe</td>
          <td className="goa-table-number-column">4567</td>
        </tr>
      </tbody>
    </GoabTable>
  </div>
  <GoabPushDrawer
    testid="drawer"
    open={true}
    heading="Push Drawer"
    width="300px"
    onClose={() => {}}
    actions={<GoabButton>Close</GoabButton>}>
    <div>
      <h1>Drawer</h1>
      <p>
        This is drawer content. It pushes the main content to the side, out of its way.
      </p>
    </div>
  </GoabPushDrawer>
</div>
          `}
      />
    </>
  );
}
