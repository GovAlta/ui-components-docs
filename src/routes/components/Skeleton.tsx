import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoabBadge,
  GoabSkeleton,
  GoabTab,
  GoabTabs,
  GoabSkeletonProps,
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabSkeletonType } from "@abgov/ui-components-common";

// == Page props ==
const componentName = "Skeleton loading";
const description =
  "Provide visual feedback to users while loading a content heavy page or page element.";
const category = Category.CONTENT_AND_LAYOUT;
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
    {

      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
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
    {
      name: "testId",
      type: "string",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {

      name: "mt,mr,mb,ml",
      type: "Spacing (none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl)",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
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
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            {/*Skeleton Sandbox*/}
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>
            <Sandbox properties={skeletonBindings} onChange={onSandboxChange} fullWidth>
              <GoabSkeleton {...skeletonProps} />
            </Sandbox>

            {/*Skeleton Properties*/}
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }></GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
