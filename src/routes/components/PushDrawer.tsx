import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import {
  GoabContainer,
  GoabTab,
  GoabTabs,
  GoabPushDrawerProps,
  GoabPushDrawer,
  GoabButton,
  GoabTable,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

// == Page props ==

const componentName = "Push Drawer";
const description = "TODO: Add description here.";
// type ComponentPropsType = GoabPushDrawerProps;
// type CastingType = {
//   // add any required props here
//   [key: string]: unknown;
// };

export default function PushDrawerPage() {
  // const [open, setOpen] = useState(false);

  // const [componentProps, setComponentProps] = useState<ComponentPropsType>({
  //   open: open,
  //   heading: "Push Drawer heading",
  //   width: "492px",
  //   onClose: null,
  //   children: (
  //     <>
  //       <div style={{ height: "200px" }}>
  //         <h1>This is component children</h1>
  //         <p>More content inside the Push Drawer.</p>
  //       </div>
  //     </>
  //   ),
  // });

  // const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "open",
      type: "boolean",
      description: "Determines whether the drawer is open.",
      required: false,
    },
    {
      name: "heading",
      type: "string | ReactNode",
      description: "Heading of the drawer.",
      lang: "react",
    },
    {
      name: "heading",
      type: "string | TemplateRef",
      description: "Heading of the drawer.",
      lang: "angular",
    },
    {
      name: "width",
      type: "string",
      required: false,
      description: "Width of the drawer (e.g., '300px', '30%').",
    },
    {
      name: "actions",
      type: "ReactNode",
      description: "Actions to display in the drawer.",
      lang: "react",
    },
    {
      name: "actions",
      type: "TemplateRef",
      description: "Actions to display in the drawer.",
      lang: "angular",
    },
  ];

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={Category.FEEDBACK_AND_ALERTS}
        description={description}
      />

      <GoabTabs initialTab={0}>
        <GoabTab heading="Code examples">
          <ComponentProperties properties={componentProperties} />

          <h2 id="examples" className="hidden" aria-hidden="true">
            Examples
          </h2>

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
              testId="drawer"
              open={true}
              heading="Push Drawer"
              width="300px"
              onClose={() => {}}
              actions={<GoabButton>Close</GoabButton>}>
              <div key={`key=${Date.now()}`}>
                <h1>Drawer</h1>
                <p>
                  This is drawer content. It pushes the main content to the side, out of its way.
                </p>
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
      testId="drawer"
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
    testId="drawer"
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
        </GoabTab>

        <GoabTab heading={<>Design guidelines</>}></GoabTab>
      </GoabTabs>
    </>
  );
}
