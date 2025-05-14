import {
  GoabBadge,
  GoabButton,
  GoabContainer,
  GoabDrawer,
  GoabDrawerProps,
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useContext, useState } from "react";
import { TestIdProperty } from "@components/component-properties/common-properties.ts";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { DrawerExamples } from "@examples/drawer/DrawerExamples.tsx";
import { OldComponentBanner } from "@components/old-component-banner/OldComponentBanner.tsx";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

// == Page props ==

const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=61514-308154";
const ACCESSIBILITY_FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=61514-308154";
const componentName = "Drawer";
const description =
  "A panel that slides in from the side of the screen to display additional content or actions without navigating away from the current view.";
const category = Category.STRUCTURE_AND_NAVIGATION;
const relatedComponents = [
  { link: "/components/modal", name: "Modal" }
];

type ComponentPropsType = Omit<GoabDrawerProps, "open">;

export const DrawerPage = () => {
  const {version, language} = useContext(LanguageVersionContext);
  const [open, setOpen] = useState(false);

  const [drawerProps, setDrawerProps] = useState<ComponentPropsType>({
    heading: "Drawer heading",
    position: "right",
    onClose: () => {},
    children: null
  });

  const [drawerBindings, setDrawerBindings] = useState<ComponentBinding[]>([
    {
      label: "Position",
      type: "dropdown",
      name: "position",
      options: ["left", "right", "bottom"],
      value: "right"
    },
    {
      label: "Heading",
      type: "string",
      name: "heading",
      value: "Drawer heading",
    },
    {
      label: "Max Size",
      helpText: "Sets max height on bottom position, sets width on left and right position",
      type: "string",
      name: "maxSize",
      value: "",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "open",
      type: "boolean",
      description: "Whether the drawer is open.",
      required: true,
    },
    {
      name: "position",
      type: "GoabDrawerPosition (right|left|bottom)",
      description: "The position of the drawer.",
      required: true,
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
      name: "maxSize",
      type: "GoabDrawerSize (px|rem|ch|vh|vw) (ex: 300px)",
      description: "Sets max height on bottom position, sets width on left and right position",
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
    {
      name: "onClose",
      type: "() => void",
      description: "Callback function to handle the close event.",
    },
    TestIdProperty
  ];

  function SandboxOnChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setDrawerBindings(bindings);
    setDrawerProps({
      ...drawerProps,
      ...props
    } as ComponentPropsType);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        figmaLink={FIGMA_LINK}
        githubLink={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
      />

      {version === "old" && <OldComponentBanner componentName={componentName} language={language}/>}

      {version === "new" && (
        <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
          <GoabTabs initialTab={1}>
            <GoabTab heading="Code playground">
              <h2 id="component" style={{ display: "none" }}>
                Component
              </h2>
              {/*Don't use a Sandbox because the animation slowing displaying the drawer isn't working if it is inside sandbox*/}
              <GoabContainer mt="none" mb="none">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <GoabButton onClick={() => setOpen(true)}>Open Drawer</GoabButton>
                </div>
                <GoabDrawer {...drawerProps} open={open} onClose={() => setOpen(false)}>
                  <p>
                    This is a drawer. It is a panel that slides in from the edge of the screen to
                    provide users access to secondary content and actions without leaving the
                    current page.
                  </p>
                </GoabDrawer>
              </GoabContainer>
              <Sandbox properties={drawerBindings} onChange={SandboxOnChange} skipRenderDom={true} variableNames={["open"]}>
                <CodeSnippet
                  lang="typescript"
                  tags="angular"
                  allowCopy={true}
                  code={`
                  export class SomeOtherComponent {
                    open = false;
                    onClick() {
                      this.open = true;
                    }
                    onClose() {
                      this.open = false;
                    }
                  }
                `}
                />

                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                  const [open, setOpen] = useState(false);
                   function onClick() {
                    setOpen(true);
                   }
                   function drawerOnClose() {
                    setOpen(false);
                   }
                `}
                />

                <GoabButton onClick={() => setOpen(true)}>Open Drawer</GoabButton>
                <GoabDrawer {...drawerProps} open={open} onClose={() => setOpen(false)}>
                  <p>
                    This is a drawer. It is a panel that slides in from the edge of the screen to
                    provide users access to secondary content and actions without leaving the
                    current page.
                  </p>
                </GoabDrawer>
              </Sandbox>


              <ComponentProperties properties={componentProperties} />

            </GoabTab>
            <GoabTab heading={
              <>Examples <GoabBadge type={"information"} content={"2"} /></>
            }>
              <DrawerExamples />
            </GoabTab>

            <GoabTab heading="Design">
              <DesignEmpty figmaLink={FIGMA_LINK} />
            </GoabTab>

            <GoabTab heading="Accessibility">
              <AccessibilityEmpty figmaLink={ACCESSIBILITY_FIGMA_LINK} />
            </GoabTab>
          </GoabTabs>
        </ComponentContent>
      )}
    </>
  );
}
