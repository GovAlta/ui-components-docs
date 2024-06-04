import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoABadge,
  GoAButton,
  GoAButtonGroup,
  GoADropdown,
  GoADropdownItem,
  GoAFormItem,
  GoAModal,
  GoAModalProps,
  GoATab,
  GoATabs,
} from "@abgov/react-components";
import { ComponentBinding, LanguageContext, Sandbox } from "@components/sandbox";
import { useContext, useEffect, useState } from "react";
import { GoAModal as MockModal } from "@components/mock-modal/Modal";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { resetScrollbars } from "../../utils/styling";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useNavigate } from "react-router-dom";

// == Page props ==

const componentName = "Modal";
const description =
  "An overlay that appears in front of all other content, and requires a user to take an action before continuing.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/button-group", name: "Button group" },
  { link: "/components/callout", name: "Callout" },
];
type ComponentPropsType = Omit<GoAModalProps, "open"> & { closable?: boolean };
type CastingType = {
  // add any required props here
  [key: string]: unknown;
};

export default function TEMPLATE_Page() {
  const language = useContext(LanguageContext);
  const navigate = useNavigate();
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    heading: "Are you sure you want to exit your application?",
    role: "alertdialog",
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
      label: "Role",
      type: "list",
      name: "role",
      options: ["", "dialog", "alertdialog"],
      value: "alertdialog",
      helpText: "Select an ARIA role to determine what is announced by the screen reader.",
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

  const componentProperties: ComponentProperty[] = [
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
      name: "role",
      type: "dialog | alertdialog",
      description:
        "'dialog' will announce header and the 1st input element, and requires at least one interactive element. 'alert-dialog' will read the entire contents of the modal. If the modal does not include any interactive elements, use the 'alertdialog' role.",
      defaultValue: "dialog",
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

  function isClosableChecked(bindings: ComponentBinding[]): boolean {
    const closable = bindings.find(b => b.name == "closable");
    return closable?.value === true ? true : false;
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

  function noop() {}

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code examples">
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>
            <Sandbox properties={componentBindings} onChange={onSandboxChange}>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  export class SomeOtherComponent {
                    open = false;
                    onClick(event: Event) {
                      this.open = true;
                    }

                    onClose(event: Event) {
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
                   
                   function onClose() {
                    setOpen(false);
                   }
                `}
              />

              <GoAButton onClick={() => setOpen(true)}>Show Modal</GoAButton>

              {!isClosableChecked(componentBindings) && (
                <GoAModal {...componentProps} open={open}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati id
                  molestiae, natus dicta, eaque qui iusto similique, libero explicabo eligendi eius
                  laboriosam! Repellendus ducimus officia asperiores. Eos, eius numquam.
                  <GoAButtonGroup alignment="end">
                    <GoAButton type="tertiary" onClick={() => setOpen(false)}>
                      Cancel
                    </GoAButton>
                    <GoAButton type="primary" onClick={() => setOpen(false)}>
                      Exit
                    </GoAButton>
                  </GoAButtonGroup>
                </GoAModal>
              )}

              {isClosableChecked(componentBindings) && (
                <GoAModal {...componentProps} open={open} onClose={onClose}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati id
                  molestiae, natus dicta, eaque qui iusto similique, libero explicabo eligendi eius
                  laboriosam! Repellendus ducimus officia asperiores. Eos, eius numquam.
                </GoAModal>
              )}
            </Sandbox>

            <ComponentProperties properties={componentProperties} />
            <h2 id="component-examples" className="hidden" aria-hidden="true">
              Examples
            </h2>

            <h3 id="component-example-basic">Basic Modal</h3>
            <Sandbox skipRender>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  export class SomeOtherComponent {
                    open = false;
                    onOpen() {
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
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-button (_click)="onOpen();">Open</goa-button>
                  <goa-modal [open]="open"
                    (_close)="onClose()" heading="Heading">
                      <p>Content</p>
                    <div slot="actions">
                      <goa-button-group alignment="end">
                        <goa-button type="secondary" (_click)="onClose()">Secondary</goa-button>
                        <goa-button type="primary" (_click)="onClose()">Primary</goa-button>
                      </goa-button-group>
                    </div>
                  </goa-modal>
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  const [open, setOpen] = useState(false);
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoAButton onClick={() => setOpen(true)}>Open</GoAButton>
                  <GoAModal
                    heading="Heading"
                    open={open}
                    onClose={() => setOpen(false)}
                    actions={
                      <GoAButtonGroup alignment="end">
                        <GoAButton type="secondary" onClick={() => setOpen(false)}>
                          Secondary
                        </GoAButton>
                        <GoAButton type="primary" onClick={() => setOpen(false)}>
                          Primary
                        </GoAButton>
                      </GoAButtonGroup>
                    }
                  >
                    <p>Content</p>
                  </GoAModal>
                `}
              />

              <MockModal heading="Heading">
                <p>Content</p>

                <GoAButtonGroup alignment="end" mt="l">
                  <GoAButton type="secondary" onClick={noop}>
                    Secondary
                  </GoAButton>
                  <GoAButton type="primary" onClick={noop}>
                    Primary
                  </GoAButton>
                </GoAButtonGroup>
              </MockModal>
            </Sandbox>

            <h3 id="component-example-destructive">Confirm a destructive action</h3>
            <Sandbox skipRender>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  export class SomeOtherComponent {
                    open = false;
                    onOpen() {
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
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-button (_click)="onOpen();">Open</goa-button>
                  <goa-modal [open]="open" role="alertdialog"
                    (_close)="onClose()" heading="Are you sure you want to withdraw this assessment?">
                      <p>This action cannot be undone.</p>
                    <div slot="actions">
                      <goa-button-group alignment="end">
                        <goa-button type="secondary" (_click)="onClose()">Cancel</goa-button>
                        <goa-button type="primary" variant="destructive" (_click)="onClose()">Withdraw assessment</goa-button>
                      </goa-button-group>
                    </div>
                  </goa-modal>
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  const [open, setOpen] = useState(false);
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoAButton onClick={() => setOpen(true)}>Open</GoAButton>
                  <GoAModal
                    heading="Are you sure you want to withdraw this assessment?"
                    open={open}
                    role="alertdialog"
                    onClose={() => setOpen(false)}
                    actions={
                      <GoAButtonGroup alignment="end">
                        <GoAButton type="secondary" onClick={() => setOpen(false)}>
                          Cancel
                        </GoAButton>
                        <GoAButton type="primary" variant="destructive" onClick={() => setOpen(false)}>
                           Withdraw assessment
                        </GoAButton>
                      </GoAButtonGroup>
                    }
                  >
                    <p>This action cannot be undone.</p>
                  </GoAModal>
                `}
              />

              <MockModal heading="Are you sure you want to withdraw this assessment?">
                <p>This action cannot be undone.</p>

                <GoAButtonGroup alignment="end" mt="l">
                  <GoAButton type="secondary" onClick={noop}>
                    Cancel
                  </GoAButton>
                  <GoAButton type="primary" variant="destructive" onClick={noop}>
                    Withdraw assessment
                  </GoAButton>
                </GoAButtonGroup>
              </MockModal>
            </Sandbox>

            <h3 id="component-example-warning">Warning callout modal</h3>
            <Sandbox skipRender>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  export class SomeOtherComponent {
                    open = false;
                    onOpen() {
                      this.open = true;
                    }
                    onClose() {
                      this.open = false;
                    }
                    onClick(event: Event) {
                      console.log("clicked", event);
                      this.open = false;
                    }
                  }
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-button (_click)="onOpen();">Open</goa-button>
                  <goa-modal [open]="open" role="alertdialog" calloutvariant="information"
                    (_close)="onClose()" heading="Complete submission prior to 1PM">
                      <p>You’ve selected to adjourn a matter that is required to appear today. This Calgary court location does not accept adjournment requests past 1PM MST. Please submit your adjournment request as soon as possible.</p>
                    <div slot="actions">
                      <goa-button-group alignment="end" mt="l">
                        <goa-button type="primary" (_click)="onClick($event)">
                          I understand
                        </goa-button>
                      </goa-button-group>
                    </div>
                  </goa-modal>
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  const [open, setOpen] = useState(false);
                  function onClick(event: Event) {
                      console.log("clicked", event);
                      setOpen(false);
                  }
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoAButton onClick={() => setOpen(true)}>Open</GoAButton>
                  <GoAModal
                    heading="Complete submission prior to 1PM"
                    open={open}
                    calloutVariant="information"
                    role="alertdialog"
                    onClose={() => setOpen(false)}
                    actions={
                      <GoAButtonGroup alignment="end" mt="l">
                        <GoAButton type="primary" onClick={onClick}>I understand</GoAButton>
                      </GoAButtonGroup>
                    }
                  >
                    <p>You’ve selected to adjourn a matter that is required to appear today. This Calgary court location does not accept adjournment requests past 1PM MST. Please submit your adjournment request as soon as possible.</p>
                  </GoAModal>
                `}
              />

              <MockModal heading="Complete submission prior to 1PM" calloutVariant="information">
                <p>
                  You’ve selected to adjourn a matter that is required to appear today. This Calgary
                  court location does not accept adjournment requests past 1PM MST. Please submit
                  your adjournment request as soon as possible.
                </p>

                <GoAButtonGroup alignment="end" mt="l">
                  <GoAButton type="primary" onClick={noop}>
                    I understand
                  </GoAButton>
                </GoAButtonGroup>
              </MockModal>
            </Sandbox>

            <h3 id="component-example-with-input">Modal with input</h3>
            <Sandbox skipRender>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  export class SomeOtherComponent {
                    open = false;
                    onOpen() {
                      this.open = true;
                    }
                    onClose() {
                      this.open = false;
                    }
                    
                    onChange($event) {
                      console.log($event);
                    }
                  }
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-button (_click)="onOpen();">Open</goa-button>
                  <goa-modal [open]="open"
                    (_close)="onClose()" heading="Why was this adjusted?">
                      <goa-form-item label="Reason for adjustment">
                        <goa-dropdown (_change)="onChange($event)">
                          <goa-dropdown-item value="Correction"></goa-dropdown-item>
                          <goa-dropdown-item value="Late submission"></goa-dropdown-item>
                          <goa-dropdown-item value="It's Friday 🎉"></goa-dropdown-item>
                        </goa-dropdown>
                      </goa-form-item>
                    <div slot="actions">
                      <goa-button-group alignment="end" mt="l">
                        <goa-button type="secondary" (_click)="onClose()">
                          Cancel
                        </goa-button>
                        <goa-button type="primary" (_click)="onClose()">
                          Choose
                        </goa-button>
                      </goa-button-group>
                    </div>
                  </goa-modal>
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  const [open, setOpen] = useState(false);
                  
                  onChange(event: Event) {
                    console.log("onChange", e);
                  }
                  
                  onClick(event: Event) {
                    console.log("onClick", e);
                  }
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoAButton onClick={() => setOpen(true)}>Open</GoAButton>
                  <GoAModal
                    heading="Why was this adjusted?"
                    open={open}
                    onClose={() => setOpen(false)}
                    actions={
                      <GoAButtonGroup alignment="end">
                        <GoAButton type="secondary" onClick={onClick}>
                          Cancel
                        </GoAButton>
                        <GoAButton type="primary" onClick={onClick}>
                          Choose
                        </GoAButton>
                      </GoAButtonGroup>
                    }
                  >
                    <GoAFormItem label="Reason for adjustment">
                      <GoADropdown onChange={onChange}>
                        <GoADropdownItem value="Correction"></GoADropdownItem>
                        <GoADropdownItem value="Late submission"></GoADropdownItem>
                        <GoADropdownItem value="It's Friday 🎉"></GoADropdownItem>
                      </GoADropdown>
                    </GoAFormItem>
                  </GoAModal>
                `}
              />
              <MockModal heading="Why was this adjusted?">
                <GoAFormItem label="Reason for adjustment">
                  <GoADropdown onChange={noop}>
                    <GoADropdownItem value="Correction" />
                    <GoADropdownItem value="Late submission" />
                    <GoADropdownItem value="It's Friday 🎉" />
                  </GoADropdown>
                </GoAFormItem>

                <GoAButtonGroup alignment="end" mt="l">
                  <GoAButton type="secondary" onClick={noop}>
                    Cancel
                  </GoAButton>
                  <GoAButton type="primary" onClick={noop}>
                    Choose
                  </GoAButton>
                </GoAButtonGroup>
              </MockModal>
            </Sandbox>

            <h3 id="component-example-route-change">Route changes</h3>
            <Sandbox skipRender>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  export class SomeOtherComponent {
                    open = false;
                    onOpen() {
                      this.open = true;
                    }
                    onClose() {
                      this.open = false;
                    }
                    onChangeRoute() {
                      this.open = false;
                      setTimeout(() => this.router.navigate(["/components"]), 0)
                    }
                  }
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-button (_click)="onOpen();">Open</goa-button>
                  <goa-modal [open]="open" role="alertdialog" heading="Are you sure you want to change route?">
                    <div slot="actions">
                      <goa-button-group alignment="end">
                        <goa-button type="secondary" (_click)="onClose()">Cancel</goa-button>
                        <goa-button type="primary" (_click)="onChangeRoute()">Change route</goa-button>
                      </goa-button-group>
                    </div>
                  </goa-modal>
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  const [open, setOpen] = useState(false);
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoAButton onClick={() => setOpen(true)}>Open</GoAButton>
                  <GoAModal
                    heading="Are you sure you want to change route?"
                    open={open}
                    role="alertdialog"
                    onClose={() => setOpen(false)}
                    actions={
                      <GoAButtonGroup alignment="end">
                        <GoAButton type="secondary" onClick={() => setOpen(false)}>
                          Cancel
                        </GoAButton>
                        <GoAButton
                          size="medium"
                          onClick={() => {
                            setOpen(false);
                            // setTimeout will allow any modal transitions to be run
                            // setTimeout(() => navigate("/some-path"), 300) }
                            navigate("/components")
                        }}>Change route</GoAButton>
                      </GoAButtonGroup>
                    }
                  ></GoAModal>
                `}
              />
              <MockModal heading="Are you sure you want to change route?">
                <GoAButtonGroup alignment="end" mt="l">
                  <GoAButton type="secondary" onClick={noop}>
                    Cancel
                  </GoAButton>
                  <GoAButton
                    type="primary"
                    onClick={() => {
                      navigate("/components");
                    }}>
                    Change route
                  </GoAButton>
                </GoAButtonGroup>
              </MockModal>
            </Sandbox>
          </GoATab>

          <GoATab
            heading={
              <>
                Design guidelines
                <GoABadge type="information" content="In progress" />
              </>
            }></GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}
