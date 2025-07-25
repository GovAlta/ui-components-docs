import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoabBadge,
  GoabButton,
  GoabButtonGroup,
  GoabModal,
  GoabModalProps,
  GoabTab,
  GoabTabs
} from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useContext, useEffect, useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { resetScrollbars } from "../../utils/styling";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import ModalExamples from "@examples/modal/ModalExamples.tsx";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { TestIdProperty } from "@components/component-properties/common-properties.ts";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

// == Page props ==

const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=622-13874";
const componentName = "Modal";
const description =
  "An overlay that appears in front of all other content, and requires a user to take an action before continuing.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/button-group", name: "Button group" },
  { link: "/components/callout", name: "Callout" },
];
type ComponentPropsType = Omit<GoabModalProps, "open"> & { closable?: boolean };
type CastingType = {
  // add any required props here
  [key: string]: unknown;
};

export default function ModalPage() {
  const {language} = useContext(LanguageVersionContext);
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    heading: "Are you sure you want to exit your application?",
  });

  useEffect(() => {
    if (language === "react" && "closable" in componentProps) {
      //Remove 'closable' property when language dropdown changed to React
      const { closable, ...updatedProps } = componentProps;
      setComponentProps(updatedProps as CastingType);
    }

    if (language === "angular" && isClosableChecked(componentBindings)) {
      //Include 'closable' property when language dropdown changed to Angular
      setComponentProps({ ...componentProps, closable: true });
    }
  }, [language]);

  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Variant",
      type: "dropdown",
      name: "calloutVariant",
      options: ["information", "important", "emergency", "success", "event"],
      value: "",
    },
    {
      label: "Heading",
      type: "string",
      name: "heading",
      width: "40ch",
      value: "Are you sure you want to exit your application?",
    },
    {
      label: "Max width",
      type: "string",
      name: "maxWidth",
      width: "16ch",
      value: "",
    },
    {
      label: "Closable",
      type: "boolean",
      name: "closable",
      value: false,
    },
    {
      label: "Open",
      type: "boolean",
      name: "open",
      value: false,
      hidden: true,
      dynamic: true,
    },
  ]);

  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "calloutvariant",
      type: "information | important | emergency | success | event",
      description:
        "Define the context and colour of the callout modal. It is required when type is set to callout.",
      lang: "angular",
    },
    {
      name: "calloutVariant",
      type: "information | important | emergency | success | event",
      description:
        "Define the context and colour of the callout modal. It is required when type is set to callout.",
      lang: "react",
    },
    {
      name: "heading",
      type: "string | slot",
      description: "Heading text within the modal",
      lang: "angular",
    },
    {
      name: "heading",
      type: "string | ReactNode",
      description: "Heading text within the modal",
      lang: "react",
    },
    {
      name: "open",
      type: "boolean",
      description: "Controls if modal is visible or not",
      defaultValue: "false",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Set the max allowed width of the modal",
      lang: "angular",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Set the max allowed width of the modal",
      lang: "react",
    },
    {
      name: "closable",
      type: "boolean",
      description: "Show close icon and allow clicking the background to close the modal",
      defaultValue: "false",
      lang: "angular",
    },
    {
      name: "_close",
      type: "CustomEvent",
      description: "",
      lang: "angular",
    },
    {
      name: "onClose",
      type: "() => void",
      description: "",
      lang: "react",
    },
    {
      name: "actions",
      type: "slot",
      description: "Buttons displayed in the bottom right of the modal instead of a close icon",
      lang: "angular",
    },
    {
      name: "actions",
      type: "ReactNode",
      description: "Buttons displayed in the bottom right of the modal instead of a close icon",
      lang: "react",
    },
  ];
  const componentProperties: ComponentProperty[] = [
    {
      name: "calloutVariant",
      type: "GoabModalCalloutVariant (information | important | emergency | success | event)",
      description:
        "Define the context and colour of the callout modal. It is required when type is set to callout.",
    },
    {
      name: "heading",
      type: "string | TemplateRef<any>",
      description: "Heading text within the modal",
      lang: "angular",
    },
    {
      name: "heading",
      type: "string | ReactNode",
      description: "Heading text within the modal",
      lang: "react",
    },
    {
      name: "open",
      type: "boolean",
      description: "Controls if modal is visible or not",
      defaultValue: "false",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Set the max allowed width of the modal",
    },
    {
      name: "closable",
      type: "boolean",
      description: "Show close icon and allow clicking the background to close the modal",
      defaultValue: "false",
    },
    TestIdProperty,
    {
      name: "onClose",
      type: "() => void",
      description: "",
    },
    {
      name: "actions",
      type: "TemplateRef<any>",
      description: "Buttons displayed in the bottom right of the modal instead of a close icon",
      lang: "angular",
    },
    {
      name: "actions",
      type: "ReactNode",
      description: "Buttons displayed in the bottom right of the modal instead of a close icon",
      lang: "react",
    },
  ];

  function isClosableChecked(bindings: ComponentBinding[]): boolean {
    const closable = bindings.find(b => b.name == "closable");
    // setClosableChecked(closable?.value === true);
    return closable?.value === true;
  }

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    if (isClosableChecked(bindings)) {
      if (language === "react" && "closable" in props) {
        delete props.closable;
      }

      if (language === "angular" && !("closable" in props)) {
        props["closable"] = true;
      }
    }
    setComponentBindings(bindings);
    setComponentProps(props as CastingType);
  }

  const [open, setOpen] = useState<boolean>(false);

  function onClose() {
    setOpen(false);
    // reset body styles after closing the modal, sandbox renders multiple times that not trigger modal component no-scroll destroy effects
    resetScrollbars();
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Modal"
      />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>Playground</h2>
            <Sandbox properties={componentBindings} onChange={onSandboxChange} allow={["p"]}>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  export class SomeOtherComponent {
                    open = false;
                    onClick() {
                      this.open = !this.open;
                    }
                  }
                `}
              />

              {isClosableChecked(componentBindings) && <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                    onClose() {
                      this.open = false;
                   } 
                `}
              />}

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  const [open, setOpen] = useState(false);
                   function onClick() {
                    setOpen(!open);
                   }
                `}
              />

              {isClosableChecked(componentBindings) && <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  function modalOnClose() {
                    setOpen(false);
                   } 
                `}
              />}

              <GoabButton onClick={() => setOpen(true)}>Show Modal</GoabButton>

              {!isClosableChecked(componentBindings) && (
                <GoabModal {...componentProps} open={open}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati id
                  molestiae, natus dicta, eaque qui iusto similique, libero explicabo eligendi eius
                    laboriosam! Repellendus ducimus officia asperiores. Eos, eius numquam.</p>
                  <GoabButtonGroup alignment="end" mt={"xl"}>
                    <GoabButton type="tertiary" onClick={() => setOpen(false)}>
                      Cancel
                    </GoabButton>
                    <GoabButton type="primary" onClick={() => setOpen(false)}>
                      Exit
                    </GoabButton>
                  </GoabButtonGroup>
                </GoabModal>
              )}

              {isClosableChecked(componentBindings) && (
                <GoabModal {...componentProps} open={open} onClose={onClose}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati id
                  molestiae, natus dicta, eaque qui iusto similique, libero explicabo eligendi eius
                    laboriosam! Repellendus ducimus officia asperiores. Eos, eius numquam.</p>
                </GoabModal>
              )}
            </Sandbox>
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="6" />
              </>
            }
          >
            <ModalExamples />
          </GoabTab>

          <GoabTab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>

          <GoabTab heading="Accessibility">
            <AccessibilityEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
