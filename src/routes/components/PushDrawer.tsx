import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import {
  GoabTab,
  GoabTabs,
  GoabBadge,
  GoabButton,
  GoabPushDrawer,
  GoabPushDrawerProps,
} from "@abgov/react-components";
import { useState } from "react";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { PushDrawerExampleWithDivs } from "@examples/push-drawer/push-divs.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

// == Page props ==

const componentName = "Push Drawer";
const description =
  "The push drawer expands and shifts the main content to the side. This allows users to interact with both the drawer and the main page simultaneously.";
type ComponentPropsType = Omit<GoabPushDrawerProps, "open" | "actions" | "children" | "onClose">;

export default function PushDrawerPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerProps, setDrawerProps] = useState<ComponentPropsType>({
    heading: "Drawer heading",
    width: "300px",
  });
  const [drawerBindings, setDrawerBindings] = useState<ComponentBinding[]>([
    {
      label: "Heading",
      type: "string",
      name: "heading",
      value: "Push Drawer",
    },
    {
      label: "Width",
      helpText: "Sets max width of the drawer",
      type: "string",
      name: "width",
      value: "300px",
    },
  ]);
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
      description: "Width of the drawer (e.g., '300px'). Note: percentage is not supported.",
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

  function SandboxOnChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setDrawerBindings(bindings);
    setDrawerProps({
      ...drawerProps,
      ...props,
    } as ComponentPropsType);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={Category.FEEDBACK_AND_ALERTS}
        description={description}
      />

      <ComponentContent>
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  flex: "1 1 0%",
                  height: "35vh",
                  overflow: "hidden",
                  border: "var(--goa-border-width-s) solid var(--goa-color-greyscale-200)",
                }}>
                <h3>Content that gets pushed when the drawer opens.</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <GoabButton onClick={() => setDrawerOpen(!drawerOpen)}>
                  {drawerOpen ? "Close Drawer" : "Open Drawer"}
                </GoabButton>
              </div>
              <GoabPushDrawer
                {...drawerProps}
                onClose={() => {
                  setDrawerOpen(false);
                }}
                actions={
                  <GoabButton type="secondary" onClick={() => setDrawerOpen(false)}>
                    Close
                  </GoabButton>
                }
                open={drawerOpen}>
                <div>
                  <h1>Drawer</h1>
                  <p>
                    This is drawer content. It pushes the main content to the side, out of its way.
                  </p>
                </div>
              </GoabPushDrawer>
            </div>

            <Sandbox
              properties={drawerBindings}
              onChange={SandboxOnChange}
              skipRenderDom={true}
              variableNames={["open"]}>
              <ComponentProperties properties={componentProperties} />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
<div style={{ display: "flex", flexDirection: "row" }}>
  <div
    style={{
      flex: "1 1 0%",
      height: "35vh",
      overflow: "hidden",
      border: "var(--goa-border-width-s) solid var(--goa-color-greyscale-200)",
    }}>
    <h3>Content that gets pushed when the drawer opens.</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    <GoabButton onClick={() => setDrawerOpen(!drawerOpen)}>
      {drawerOpen ? "Close Drawer" : "Open Drawer"}
    </GoabButton>
  </div>
  <GoabPushDrawer
    heading="${drawerProps.heading}"
    width="${drawerProps.width}"
    onClose={() => {
      setDrawerOpen(false);
    }}
    actions={
      <GoabButton type="secondary" onClick={() => setDrawerOpen(false)}>
        Close
      </GoabButton>
    }
    open={drawerOpen}>
    <div>
      <h1>Drawer</h1>
      <p>
        This is drawer content. It pushes the main content to the side, out of its way.
      </p>
    </div>
  </GoabPushDrawer>
</div>`}
              />
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
div style="display: flex; flex-direction: row; min-height: 80vh">
  <div style="flex: 1 1 0%; overflow: hidden; border: 1px solid green">
    <h3>Content that gets pushed when the drawer opens.</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    <goab-button (onClick)="toggleDrawer()">
      {{ drawerOpen ? "Close Drawer" : "Open Drawer" }}
    </goab-button>
  </div>
  <goab-push-drawer
    [open]="pushDrawerOpen"
    [heading]="${drawerProps.heading}"
    [width]="${drawerProps.width}"
    (onClose)="closePushDrawer()"
    [actions]="drawerActions"
  >
  <div>
    <h1>Drawer</h1>
    <p>
      This is drawer content. It pushes the main content to the side, out of its way.
    </p>
  </div>
    <goab-button (click)="closePushDrawer()">Close</goab-button>
  </goab-push-drawer>
  <ng-template #drawerActions>
    <goab-button (click)="closePushDrawer()">Close</goab-button>
  </ng-template>
</div>`}
              />
            </Sandbox>
          </GoabTab>
          <GoabTab
            heading={
              <>
                Examples <GoabBadge type={"information"} content={"1"} />
              </>
            }>
            <h2 id="examples" className="hidden" aria-hidden="true">
              Examples
            </h2>

            <PushDrawerExampleWithDivs />
          </GoabTab>

          <GoabTab heading={<>Design guidelines</>}></GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
