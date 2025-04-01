import { Link } from "react-router-dom";
import {
  GoabBadge, GoabButton, GoabCallout,
  GoabDrawer,
  GoabDrawerProps,
  GoabTab,
  GoabTabs
} from "@abgov/react-components";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { ANGULAR_VERSIONS, REACT_VERSIONS } from "@components/version-language-switcher/version-language-constants.ts";
import { useContext, useState } from "react";
import { TestIdProperty } from "@components/component-properties/common-properties.ts";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { DrawerExamples } from "@examples/drawer/DrawerExamples.tsx";

// == Page props ==

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
      type: "GoabDrawerSize (ex: 300px)",
      description: "The size of the drawer.",
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
        category={category}
        description={description}
        relatedComponents={relatedComponents}
      />

      {version === "old" && (
        <GoabCallout type="important">Only available in {language == "angular" ? ANGULAR_VERSIONS.NEW.label : REACT_VERSIONS.NEW.label}. <Link to="/get-started/developers/update">View upgrade guide</Link> </GoabCallout>
      )}

      {version === "new" && (<ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>

            <Sandbox properties={drawerBindings} onChange={SandboxOnChange}>
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
                <p>This is a drawer. It is a panel that slides in from the edge of the screen to provide users access to secondary content and actions without leaving the current page.</p>
              
              </GoabDrawer>
            </Sandbox>

            <ComponentProperties
              properties={componentProperties}
            />
            <DrawerExamples/>
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }>
            <p>Coming Soon</p>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>)
      }
    </>
  );
}
