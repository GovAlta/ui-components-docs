import { useState } from "react";
import {
  GoABlock,
  GoAButton,
  GoAButtonGroup,
  GoADropdown,
  GoADropdownItem,
  GoAFormItem,
  GoAInput,
  GoATab,
  GoATabs,
  GoAContainer,
  GoAGrid,
  GoADivider
} from "@abgov/react-components";
import { DoDont } from "@components/do-dont/DoDont";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { GoAModal } from "@components/mock-modal/Modal";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import ICONS from "@routes/components/icons.json";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function ButtonPage() {
  const [buttonProps, setButtonProps] = useState({});
  const [buttonBindings, setButtonBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: ["primary", "submit", "secondary", "tertiary", "start"],
      value: "",
      defaultValue: "primary",
    },
    {
      label: "Size",
      type: "list",
      name: "size",
      options: ["", "normal", "compact"],
      value: "",
    },
    {
      label: "Variant",
      type: "list",
      name: "variant",
      options: ["", "normal", "destructive"],
      value: "",
    },
    {
      label: "Leading icon",
      type: "combobox",
      name: "leadingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
    {
      label: "Trailing Icon",
      type: "combobox",
      name: "trailingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
    { label: "Disabled", type: "boolean", name: "disabled", value: false },
  ]);
  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "primary | submit | secondary | tertiary | start",
      description: "Define the type of button",
      defaultValue: "primary",
    },
    {
      name: "size",
      type: "normal | compact",
      defaultValue: "normal",
      description: "Set the size of button [to compact]",
    },
    {
      name: "variant",
      type: "normal | destructive",
      defaultValue: "normal",
      description: "Style this button to show a destructive action",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disable this button",
    },
    {
      name: "leadingIcon",
      type: "GoAIconType",
      lang: "react",
      description: "Show an icon to the left of the text",
    },
    {
      name: "leadingicon",
      type: "GoAIconType",
      lang: "angular",
      description: "Show an icon to the left of the text",
    },
    {
      name: "trailingIcon",
      type: "GoAIconType",
      lang: "react",
      description: "Show an icon to the right of the text",
    },
    {
      name: "trailingicon",
      type: "GoAIconType",
      lang: "angular",
      description: "Show an icon to the right of the text",
    },
    {
      name: "_click",
      lang: "angular",
      type: "CustomEvent",
      description: "Callback function when button is clicked",
    },
    {
      name: "onClick",
      lang: "react",
      type: "(e: any) => void",
      description: "Callback function when button is clicked",
    },
  ];
  const noop = () => { };
  const minGridWidth = "36ch";

  function SandboxOnChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setButtonBindings(bindings);
    setButtonProps(props);
  }
  return (
    <>
      <ComponentHeader
        name="Button"
        category={Category.INPUTS_AND_ACTIONS}
        description="Carry out an important action or to navigate to another page."
        relatedComponents={[
          { link: "/components/buttonGroup", name: "Button group" },
          { link: "/components/icon-button", name: "Icon button" },
        ]}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        
        <GoATabs>

          
  {/*Code Examples-----------------------------------------------------------------------*/}
          
          <GoATab heading="Examples">
            {/*Button Sandbox*/}
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={buttonBindings} onChange={SandboxOnChange}>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  export class SomeOtherComponent {
                    onClick(event: Event) {
                      console.log('clicked ', event);
                    }
                  }
                `}
              />
              <GoAButton {...buttonProps} onClick={noop}>
                Primary Button
              </GoAButton>
            </Sandbox>

            {/*Button Table Properties*/}
            <ComponentProperties properties={componentProperties} />

            {/*Button Examples*/}
            <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>


            {/*Button Example 1*/}
            <h3 id="component-example-ask-address">Ask a user for an address</h3>
            <Sandbox flags={["reactive"]}>
              
            <GoABlock gap="xl" direction="column">
              <GoAFormItem label="Street Address">
                <GoAInput name="address" type="text" value="" onChange={noop} width="100%" />
              </GoAFormItem>
              <GoAFormItem label="Suite or unit #">
                <GoAInput name="suite" type="text" value="" onChange={noop} width="100%" />
              </GoAFormItem>
              <GoAFormItem label="City/town">
                <GoAInput name="city" type="text" value="" onChange={noop} width="100%" />
              </GoAFormItem>

              <GoABlock direction={"row"}>
                <GoAFormItem label="Provice/territory">
                  <GoADropdown onChange={noop} name="province" value="alberta">
                    <GoADropdownItem label="Alberta" value="alberta" />
                    <GoADropdownItem label="BC" value="bc" />
                    <GoADropdownItem label="Manitoba" value="manitoba" />
                    <GoADropdownItem label="New Brunswick" value="new-brunswick" />
                    <GoADropdownItem label="Newfoundland and Labrador" value="newfoundland" />
                    <GoADropdownItem label="Nova Scotia" value="nova-scotia" />
                    <GoADropdownItem label="Ontario" value="ontario" />
                    <GoADropdownItem label="Prince Edward Island" value="prince-edward-island" />
                    <GoADropdownItem label="Quebec" value="quebec" />
                    <GoADropdownItem label="Saskatchewan" value="saskatchewan" />
                  </GoADropdown>
                </GoAFormItem>

                <GoAFormItem label="Postal Code">
                  <GoAInput name="postalCode" type="text" value="" onChange={noop} width="100%" />
                </GoAFormItem>
              </GoABlock>
              
             </GoABlock>
              
              <GoAButtonGroup alignment="start" mt="2xl">
                <GoAButton type="primary" onClick={noop}>
                  Submit and continue
                </GoAButton>
                <GoAButton type="secondary" onClick={noop}>
                  Cancel
                </GoAButton>
              </GoAButtonGroup>
            </Sandbox>

            {/*Button example 2*/}
            <h3 id="component-example-confirm-action">Confirm a destructive action</h3>
            <Sandbox flags={["reactive"]}>
              <GoAModal heading="Are you sure you want to delete this record?">
                <p>You cannot undo this action.</p>

                <GoAButtonGroup alignment="end" mt="l">
                  <GoAButton type="secondary" onClick={noop}>
                    Cancel
                  </GoAButton>
                  <GoAButton type="primary" variant="destructive" onClick={noop}>
                    Delete record
                  </GoAButton>
                </GoAButtonGroup>
              </GoAModal>
            </Sandbox>

            {/*Button example 3*/}
            <h3 id="component-example-disabled-button">Disabled button with a required field</h3>
            <Sandbox flags={["reactive"]}>
              <GoAFormItem label="Name" requirement="required">
                <GoAInput name="input" type="text" value="" onChange={noop} width="100%" />
              </GoAFormItem>

              <GoAButtonGroup alignment="start" mt="l">
                <GoAButton disabled={true} onClick={noop}>
                  Confirm
                </GoAButton>
                <GoAButton type="secondary" onClick={noop}>
                  Cancel
                </GoAButton>
              </GoAButtonGroup>
            </Sandbox>
          </GoATab>
 
          
  {/*Design guidelines-----------------------------------------------------------------------*/}
          
          <GoATab
            heading={
              <>Design guidelines</>
            }>
      <p>
        <a
          href="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=420-6810"
          target="_blank">
          View component in Figma
        </a>
      </p>
          <h2 id="types">Types</h2>
            <h3>There are 5 types of buttons: primary, secondary, tertiary, start, and destructive.</h3>
            
      <GoAContainer>
        <GoAButtonGroup alignment="start">
            <GoAButton type="primary" onClick={noop}>
              Primary
            </GoAButton>
            <GoAButton type="secondary" onClick={noop}>
              Secondary
            </GoAButton>
            <GoAButton type="tertiary" onClick={noop}>
              Tertiary
            </GoAButton>
              <GoAButton type="start" onClick={noop}>
              Get started
            </GoAButton>
              <GoAButton type="primary" variant="destructive" onClick={noop}>
              Destructive
            </GoAButton>
        </GoAButtonGroup>
      </GoAContainer>

      <div className="dodont-wrapper">
        <GoAGrid minChildWidth={minGridWidth} gap="2xl">
          <DoDont
            type="do"
            description="Use a primary button for the primary action on the page. For citizen 
            facing applications there should generally only be one primary button on a page.">
            <p>image</p>
          </DoDont>
          
          <DoDont type="dont" description="Don’t use two primary buttons.">
            <p>image</p>
          </DoDont>
        </GoAGrid>

      <GoAGrid minChildWidth={minGridWidth} gap="2xl" mt="2xl" mb="3xl">
        <DoDont
          type="do"
          description="Use a start button for the main call to action on your service’s 
          start page. This is the “front door” to your service on Alberta.ca.">
          <p>image</p>
        </DoDont>
      </GoAGrid>
      </div>
             
      <GoADivider mt="3xl" mb="3xl"></GoADivider>

      <h2 id="accessibility">Accessibility</h2>
        <h3>Users with visual impairment often use screen readers and other assistive 
          technology to help them navigate a service.</h3>
        <p>
        <a
          href="https://w3c.github.io/wcag/understanding/target-size-minimum.html"
          target="_blank">
          View more information on web accessibility from WCAG
        </a>
      </p>

             <div className="dodont-wrapper">
        <GoAGrid minChildWidth={minGridWidth} gap="2xl">
          <DoDont
            type="do"
            description="Use a primary button for the primary action on the page. For citizen 
            facing applications there should generally only be one primary button on a page.">
            <p>image</p>
          </DoDont>
          
          <DoDont type="dont" description="Don’t use two primary buttons.">
           <p>image</p> 
          </DoDont>
        </GoAGrid>
      </div>

      <GoADivider mt="3xl" mb="3xl"></GoADivider>

      <h2 id="contribution">Design contribution</h2>
      <GoAContainer type="non-interactive" accent="filled" padding="relaxed">
        <h3>
          <a
          href="https://www.figma.com/design/jDsIoiKh5ViZRWJdS0Dgtf/Component---Button?t=Ub6ZLMiI17pE4Rhe-1"
          target="_blank">
          Figma contribution file
        </a>
        </h3>
        <p>
          Propose changes, contribute new ideas, and see the research and iterations 
          that has gone into the current design.
        </p>
    </GoAContainer>

    <GoADivider mt="3xl" mb="xl"></GoADivider>
            
          </GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}
