import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoabBadge,
  GoabFilterChip,
  GoabFilterChipProps,
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import {
  LegacyTestIdProperties,
  MarginProperty,
  TestIdProperty,
} from "@components/component-properties/common-properties.ts";
import { FilterChipExamples } from "@examples/filter-chip/FilterChipExamples.tsx";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";

// Page props
const componentName = "Filter Chip";
const description = "Allow the user to filter content.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/badge", name: "Badge" },
  { link: "/components/popover", name: "Popover" },
  { link: "/components/input", name: "Input" },
  { link: "/components/table", name: "Table" },
];
const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=911-5909";
type ComponentPropsType = GoabFilterChipProps;

export default function FilterChipPage() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    content: "Chip text",
  });
  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Error",
      type: "boolean",
      name: "error",
      value: false,
    },
    {
      label: "Content",
      type: "string",
      name: "content",
      value: "Chip text",
    },
  ]);

  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "error",
      type: "boolean",
      description: "Shows an error state.",
    },

    {
      name: "content",
      type: "string",
      required: true,
      description: "Text label of the chip.",
    },
    {
      name: "_click",
      type: "CustomEvent",
      description: "Callback when deletable and delete icon is clicked.",
      lang: "angular",
    },
    {
      name: "onClick",
      type: "() = void",
      description: "Callback when deletable and delete icon is clicked.",
      lang: "react",
    },
    ...LegacyTestIdProperties,
  ];
  const componentProperties: ComponentProperty[] = [
    {
      name: "error",
      type: "boolean",
      description: "Shows an error state.",
    },

    {
      name: "content",
      type: "string",
      required: true,
      description: "Text label of the chip.",
    },
    {
      name: "onClick",
      type: "() = void",
      description: "Callback when deletable and delete icon is clicked.",
    },
    TestIdProperty,
    MarginProperty,
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: ComponentPropsType) {
    setComponentBindings(bindings);
    setComponentProps(props);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Filter Chip"
      />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>Playground</h2>
            <Sandbox<ComponentPropsType> properties={componentBindings} onChange={onSandboxChange}>
              <GoabFilterChip {...componentProps} />
            </Sandbox>
            <ComponentProperties
              properties={componentProperties}
              oldProperties={oldComponentProperties}
            />

          </GoabTab>

          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="3" />
              </>
            }
          >
            <FilterChipExamples />
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
