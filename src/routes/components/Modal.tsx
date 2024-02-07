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
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import { GoAModal as MockModal } from "@components/mock-modal/Modal";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { resetScrollbars } from "../../utils/styling";

// == Page props ==

const componentName = "Modal";
const description = "An overlay that appears in front of all other content, and requires a user to take an action before continuing.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/button-group", name: "Button group" },
  { link: "/components/callout", name: "Callout" }
];
type ComponentPropsType = Omit<GoAModalProps, "open">;
type CastingType = {
  // add any required props here
  [key: string]: unknown;
};

export default function TEMPLATE_Page() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    heading: "Heading",
  });

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
      value: "Heading",
    },
    {
      label: "Max width",
      type: "string",
      name: "maxWidth",
      width: "16ch",
      value: "",
    },
    {
      label: "Transition",
      type: "list",
      name: "transition",
      options: ["", "fast", "slow", "none"],
      value: "",
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
    },
    {
      name: "transition",
      type: "fast | slow | none",
      description: "How modal transition onto screen",
      defaultValue: "none",
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

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as CastingType);
  }

  const [open, setOpen] = useState<boolean>(false);

  function onClose() {
    setOpen(false)
    // reset body styles after closing the modal, sandbox renders multiple times that not trigger modal component no-scroll destroy effects
    resetScrollbars();
  }

  function noop() {}

  return (
    <>
      <ComponentHeader name={componentName} category={category} description={description} relatedComponents={relatedComponents}/>

      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox properties={componentBindings} onChange={onSandboxChange}>
            <GoAButton onClick={() => setOpen(true)}>Show Modal</GoAButton>
            <GoAModal {...componentProps} open={open} onClose={onClose}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati id
              molestiae, natus dicta, eaque qui iusto similique, libero explicabo eligendi eius
              laboriosam! Repellendus ducimus officia asperiores. Eos, eius numquam.
            </GoAModal>
          </Sandbox>

          <ComponentProperties properties={componentProperties} />
          <h2 id="examples" className="hidden" aria-hidden="true">Examples</h2>
          
          <h3 id="example-basic">Basic Modal</h3>
          <Sandbox flags={["reactive"]}>
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

          <h3 id="example-destructive">Confirm a destructive action</h3>
          <Sandbox flags={["reactive"]}>
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

          <h3 id="example-warning">Warning callout modal</h3>
          <Sandbox flags={["reactive"]}>
            <MockModal heading="Complete submission prior to 1PM" variant="information">
              <p>
                You’ve selected to adjourn a matter that is required to appear today. This Calgary court location does not accept adjournment requests past 1PM MST. Please submit your adjournment request as soon as possible.
              </p>

              <GoAButtonGroup alignment="end" mt="l">
                <GoAButton type="primary" onClick={noop}>
                  I understand
                </GoAButton>
              </GoAButtonGroup>
            </MockModal>
          </Sandbox>

          <h3 id="example-with-input">Modal with input</h3>
          <Sandbox flags={["reactive"]}>
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
        </GoATab>

        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }
        ></GoATab>
      </GoATabs>
    </>
  );
}
