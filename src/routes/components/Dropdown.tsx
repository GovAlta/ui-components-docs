import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoABadge,
  GoADetails,
  GoAFormItem,
  GoABlock,
  GoARadioGroup,
  GoARadioItem,
  GoATab,
  GoATabs,
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { DesignEmpty } from "@components/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/accessibility-empty/AccessibilityEmpty.tsx";

const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=105-42";
const componentName = "Dropdown";
const category = Category.CONTENT_AND_LAYOUT;
const relatedComponents = [
  { link: "/components/accordion", name: "Accordion" },
  { link: "/components/form-item", name: "Form item" },
];
const description = "Let users reveal more detailed information when they need it.";

type ComponentPropsType = {
  heading: string;
  maxWidth?: string;
};


export default function DropdownPage() {
  const [dropdownProps, setDropdownProps] = useState<ComponentPropsType>({
    heading: "Dropdown Heading",
  });
  const [dropdownBindings, setDropdownBindings] = useState<ComponentBinding[]>([
    {
      label: "Heading",
      type: "string",
      name: "heading",
      value: "Dropdown Heading",
    },
    {
      label: "Max Width",
      type: "string",
      name: "maxWidth",
      requirement: "optional",
      value: "",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "string",
      required: true,
      description: "The title heading",
    },
    {
      name: "open",
      type: "boolean",
      description: "Controls if dropdown is expanded or not",
      defaultValue: "false",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Sets the maximum width of the dropdown.",
      lang: "react",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Sets the maximum width of the dropdown.",
      lang: "angular",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setDropdownProps(props as { heading: string; [key: string]: unknown });
    setDropdownBindings(bindings);
  }

  const noop = () => { };

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        githubLink={componentName}
        figmaLink={FIGMA_LINK}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>Playground</h2>
            <Sandbox properties={dropdownBindings} onChange={onSandboxChange} fullWidth>
              <GoADetails {...dropdownProps}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lacinia metus, sed
                sodales lectus. Aliquam sed volutpat velit. Sed in lacus ut dui placerat accumsan
                malesuada quis erat. Aenean mi diam, rhoncus vitae justo eu, venenatis maximus nunc.
                In vel est commodo, porttitor sem vel, tincidunt ipsum. In hac habitasse platea
                dictumst. Mauris varius mollis dui. Aenean ut dui eu arcu rutrum auctor. Curabitur
                cursus velit vel libero sollicitudin tincidunt. Proin tincidunt, enim et ultrices
                rhoncus, nibh leo imperdiet sapien, sed porttitor ipsum nulla non massa. Nulla
                facilisi.
              </GoADetails>
            </Sandbox>

            {/* Component properties table */}
            <ComponentProperties properties={componentProperties} />
          </GoATab>

          <GoATab heading={<>Examples<GoABadge type="information" content="2" /></>}>

            <h3 id="component-example-basic-dropdown">
              Basic Dropdown Example
            </h3>
            <Sandbox fullWidth>
              <GoAFormItem label="Select an option">
                <GoARadioGroup name="option" onChange={noop}>
                  <GoARadioItem label="Option 1" value="1" name="option" />
                  <GoARadioItem label="Option 2" value="2" name="option" />
                  <GoARadioItem label="Option 3" value="3" name="option" />
                </GoARadioGroup>
              </GoAFormItem>

              <GoADetails heading="More Information about Options" mt="l">
                <p>
                  Selecting an option allows you to proceed with your choice. Please ensure you select the appropriate option based on your requirements.
                </p>
              </GoADetails>
            </Sandbox>

            <h3 id="component-example-dropdown-with-additional-info">
              Dropdown with Additional Information
            </h3>
            <Sandbox fullWidth>
              <GoAFormItem label="Choose a category" helpText="Select the category that best fits your needs.">
                <GoARadioGroup name="category" onChange={noop}>
                  <GoARadioItem label="Category A" value="A" name="category" />
                  <GoARadioItem label="Category B" value="B" name="category" />
                  <GoARadioItem label="Category C" value="C" name="category" />
                </GoARadioGroup>
              </GoAFormItem>

              <GoADetails heading="Why is this important?" mt="l">
                <GoABlock gap="m" mt="m">
                  <div>
                    <strong>Category A:</strong>
                    <ul className="goa-unordered-list">
                      <li>Feature A1</li>
                      <li>Feature A2</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Category B:</strong>
                    <ul className="goa-unordered-list">
                      <li>Feature B1</li>
                      <li>Feature B2</li>
                    </ul>
                  </div>
                </GoABlock>
              </GoADetails>
            </Sandbox>
          </GoATab>

          <GoATab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoATab>

          <GoATab heading="Accessibility">
            <AccessibilityEmpty figmaLink={FIGMA_LINK} />
          </GoATab>

        </GoATabs>
      </ComponentContent>
    </>
  );
}