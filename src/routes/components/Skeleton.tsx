import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoabSkeleton,
  GoabTab,
  GoabTabs,
  GoabSkeletonProps,
  GoabBlock,
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabSkeletonType } from "@abgov/ui-components-common";
import {
  LegacyMarginProperty,
  MarginProperty,
  TestIdProperty,
} from "@components/component-properties/common-properties.ts";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { AccessibilityEmpty } from "@components/empty-states/accessibility-empty/AccessibilityEmpty.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

// == Page props ==
const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=27301-303445";
const componentName = "Skeleton loader";
const description =
  "Provide visual feedback to users while loading a content heavy page or page element.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [{ link: "/components/progress-indicator", name: "Progress indicator" }];
type ComponentPropsType = GoabSkeletonProps;
type CastingType = {
  type: GoabSkeletonType;
  [key: string]: unknown;
};

export default function SkeletonPage() {
  const [skeletonProps, setSkeletonProps] = useState<ComponentPropsType>({
    type: "text" as GoabSkeletonType,
  });
  const [skeletonBindings, setSkeletonBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: [
        "image",
        "text",
        "title",
        "text-small",
        "avatar",
        "header",
        "paragraph",
        "thumbnail",
        "card",
        "profile",
      ],
      value: "text",
    },
    {
      label: "Size",
      name: "size",
      type: "list",
      options: ["", "1", "2", "3", "4"],
      value: "",
      defaultValue: "1",
    },
    {
      label: "Line Count (Only in card)",
      name: "lineCount",
      type: "number",
      value: 3,
    },
    {
      label: "Max Width",
      name: "maxWidth",
      type: "string",
      value: "",
    },
  ]);
  const oldComponentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "image | text | title | text-small | avatar | header | paragraph | thumbnail | card | profile",
      required: true,
      description: "re-set skeleton shapes to represent your content",
    },
    {
      name: "size",
      type: "1 | 2 | 3 | 4",
      description: "Size can affect either the height, width or both for different skeleton types.",
      defaultValue: "1",
    },
    {
      name: "linecount",
      type: "number",
      description:
        "Used within components that contain multiple lines. Currently only used in card skeleton type",
      defaultValue: "3",
      lang: "angular",
    },
    {
      name: "maxwidth",
      type: "string",
      description: "Set component maximum width. Currently only used in card skeleton type",
      defaultValue: "320px",
      lang: "angular",
    },
    LegacyMarginProperty,
    {
      name: "lineCount",
      type: "number",
      description:
        "Used within components that contain multiple lines. Currently only used in card skeleton type",
      defaultValue: "3",
      lang: "react",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Set component maximum width. Currently only used in card skeleton type",
      defaultValue: "320px",
      lang: "react",
    },
  ];
  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "GoabSkeletonType (image | text | title | text-small | avatar | header | paragraph | thumbnail | card | profile)",
      required: true,
      description: "re-set skeleton shapes to represent your content",
    },
    {
      name: "size",
      type: "GoabSkeletonSize (1 | 2 | 3 | 4)",
      description: "Size can affect either the height, width or both for different skeleton types.",
      defaultValue: "1",
    },
    {
      name: "lineCount",
      type: "number",
      description:
        "Used within components that contain multiple lines. Currently only used in card skeleton type",
      defaultValue: "3",
    },
    {
      name: "maxWidth",
      type: "string",
      description: "Set component maximum width. Currently only used in card skeleton type",
      defaultValue: "300px",
    },
    TestIdProperty,
    MarginProperty,
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>): void {
    setSkeletonBindings(bindings);
    setSkeletonProps(props as CastingType);
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
        figmaLink={FIGMA_LINK}
        githubLink="Skeleton loader"
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab heading="Code playground">
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={skeletonBindings} onChange={onSandboxChange} fullWidth>
              <GoabSkeleton {...skeletonProps} />
            </Sandbox>
            <ComponentProperties
              properties={componentProperties}
              oldProperties={oldComponentProperties}
            />
          </GoabTab>

          <GoabTab heading="All">
            <SandboxHeader exampleTitle="Card"></SandboxHeader>
            <GoabBlock gap="l" mb="xl" direction="column">
              <GoabSkeleton type="card" size="1" maxWidth="360px"></GoabSkeleton>
              <GoabSkeleton type="card" size="2"></GoabSkeleton>
              <GoabSkeleton type="card" size="3"></GoabSkeleton>
              <GoabSkeleton type="card" size="4"></GoabSkeleton>
            </GoabBlock>

            <SandboxHeader exampleTitle="Image"></SandboxHeader>
            <GoabBlock gap="l" mb="xl" direction="column">
              <GoabSkeleton type="image" size="1"></GoabSkeleton>
              <GoabSkeleton type="image" size="2"></GoabSkeleton>
              <GoabSkeleton type="image" size="3"></GoabSkeleton>
              <GoabSkeleton type="image" size="4"></GoabSkeleton>
            </GoabBlock>

            <SandboxHeader exampleTitle="Text"></SandboxHeader>
            <GoabBlock gap="l" mb="xl" direction="column">
              <GoabSkeleton type="text" size="1"></GoabSkeleton>
              <GoabSkeleton type="text" size="2"></GoabSkeleton>
              <GoabSkeleton type="text" size="3"></GoabSkeleton>
              <GoabSkeleton type="text" size="4"></GoabSkeleton>
            </GoabBlock>

            <SandboxHeader exampleTitle="Small text"></SandboxHeader>
            <GoabBlock gap="l" mb="xl" direction="column">
              <GoabSkeleton type="text-small" size="1"></GoabSkeleton>
              <GoabSkeleton type="text-small" size="2"></GoabSkeleton>
              <GoabSkeleton type="text-small" size="3"></GoabSkeleton>
              <GoabSkeleton type="text-small" size="4"></GoabSkeleton>
            </GoabBlock>

            <SandboxHeader exampleTitle="Title"></SandboxHeader>
            <GoabBlock gap="l" mb="xl" direction="column">
              <GoabSkeleton type="title" size="1"></GoabSkeleton>
              <GoabSkeleton type="title" size="2"></GoabSkeleton>
              <GoabSkeleton type="title" size="3"></GoabSkeleton>
              <GoabSkeleton type="title" size="4"></GoabSkeleton>
            </GoabBlock>

            <SandboxHeader exampleTitle="Header"></SandboxHeader>
            <GoabBlock gap="l" mb="xl" direction="column">
              <GoabSkeleton type="header" size="1"></GoabSkeleton>
              <GoabSkeleton type="header" size="2"></GoabSkeleton>
              <GoabSkeleton type="header" size="3"></GoabSkeleton>
              <GoabSkeleton type="header" size="4"></GoabSkeleton>
            </GoabBlock>

            <SandboxHeader exampleTitle="Paragraph"></SandboxHeader>
            <GoabBlock gap="l" mb="xl" direction="column">
              <GoabSkeleton type="paragraph" size="1"></GoabSkeleton>
              <GoabSkeleton type="paragraph" size="2"></GoabSkeleton>
              <GoabSkeleton type="paragraph" size="3"></GoabSkeleton>
              <GoabSkeleton type="paragraph" size="4"></GoabSkeleton>
            </GoabBlock>

            <SandboxHeader exampleTitle="Thumbnail"></SandboxHeader>
            <GoabBlock gap="l" mb="xl" direction="column">
              <GoabSkeleton type="thumbnail" size="1"></GoabSkeleton>
              <GoabSkeleton type="thumbnail" size="2"></GoabSkeleton>
              <GoabSkeleton type="thumbnail" size="3"></GoabSkeleton>
              <GoabSkeleton type="thumbnail" size="4"></GoabSkeleton>
            </GoabBlock>

            <SandboxHeader exampleTitle="Avatar"></SandboxHeader>
            <GoabBlock gap="l" mb="xl" direction="column">
              <GoabSkeleton type="avatar" size="1"></GoabSkeleton>
              <GoabSkeleton type="avatar" size="2"></GoabSkeleton>
              <GoabSkeleton type="avatar" size="3"></GoabSkeleton>
              <GoabSkeleton type="avatar" size="4"></GoabSkeleton>
            </GoabBlock>

            <SandboxHeader exampleTitle="Profile"></SandboxHeader>
            <GoabBlock gap="l" mb="xl" direction="column">
              <GoabSkeleton type="profile" size="1"></GoabSkeleton>
              <GoabSkeleton type="profile" size="2"></GoabSkeleton>
              <GoabSkeleton type="profile" size="3"></GoabSkeleton>
              <GoabSkeleton type="profile" size="4"></GoabSkeleton>
            </GoabBlock>
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
