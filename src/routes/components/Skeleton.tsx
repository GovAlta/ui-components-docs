import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoASkeleton, GoATab, GoATabs, GoASkeletonProps, SkeletonType, GoACallout, GoAText, GoABlock,  } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import "./AllComponents.css";

// == Page props ==
const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=27301-303445";
const componentName = "Skeleton loading";
const category = Category.CONTENT_AND_LAYOUT;
const description =
  "Provide visual feedback to users while loading a content heavy page or page element.";
const relatedComponents = [
  { link: "/components/progress-indicator", name: "Progress indicator" },
];

type ComponentPropsType = GoASkeletonProps;
type CastingType = {
  type: SkeletonType;
  [key: string]: unknown;
};

export default function SkeletonPage() {
  const [skeletonProps, setSkeletonProps] = useState<ComponentPropsType>(
    { type: "text" as SkeletonType }
  );
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
  const componentProperties: ComponentProperty[] = [
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
        githubLink={componentName}
        figmaLink={FIGMA_LINK}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoATabs>
          <GoATab heading="Code playground">
            {/* Skeleton Sandbox */}
            <h2 id="component" style={{ display: "none" }}>
              Playground
            </h2>
            <Sandbox properties={skeletonBindings} onChange={onSandboxChange} fullWidth>
              <GoASkeleton {...skeletonProps} />
            </Sandbox>

            {/* Skeleton Properties */}
            <ComponentProperties properties={componentProperties} />
          </GoATab>

          {/* Since there are 0 examples, the "Examples" tab is omitted */}

          <GoATab heading="Examples">

            <GoABlock gap="xl" mb="xl" direction="column">
              <GoAText size="heading-s" mt="none" mb="m">
                Image
              </GoAText>
              <GoASkeleton type="image" size={1}></GoASkeleton>
              <GoASkeleton type="image" size={2}></GoASkeleton>
              <GoASkeleton type="image" size={3}></GoASkeleton>
              <GoASkeleton type="image" size={4}></GoASkeleton>

              <GoAText size="heading-s" mt="3xl" mb="m">
                Text
              </GoAText>
              <GoASkeleton type="text" size={1}></GoASkeleton>
              <GoASkeleton type="text" size={2}></GoASkeleton>
              <GoASkeleton type="text" size={3}></GoASkeleton>
              <GoASkeleton type="text" size={4}></GoASkeleton>

              <GoAText size="heading-s" mt="3xl" mb="m">
                Title
              </GoAText>
              <GoASkeleton type="title" size={1}></GoASkeleton>
              <GoASkeleton type="title" size={2}></GoASkeleton>
              <GoASkeleton type="title" size={3}></GoASkeleton>
              <GoASkeleton type="title" size={4}></GoASkeleton>

              <GoAText size="heading-s" mt="3xl" mb="m">
                Text-small
              </GoAText>
              <GoASkeleton type="text-small" size={1}></GoASkeleton>
              <GoASkeleton type="text-small" size={2}></GoASkeleton>
              <GoASkeleton type="text-small" size={3}></GoASkeleton>
              <GoASkeleton type="text-small" size={4}></GoASkeleton>

              <GoAText size="heading-s" mt="3xl" mb="m">
                Avatar
              </GoAText>
              <GoASkeleton type="avatar" size={1}></GoASkeleton>
              <GoASkeleton type="avatar" size={2}></GoASkeleton>
              <GoASkeleton type="avatar" size={3}></GoASkeleton>
              <GoASkeleton type="avatar" size={4}></GoASkeleton>

              <GoAText size="heading-s" mt="3xl" mb="m">
                Header
              </GoAText>
              <GoASkeleton type="header" size={1}></GoASkeleton>
              <GoASkeleton type="header" size={2}></GoASkeleton>
              <GoASkeleton type="header" size={3}></GoASkeleton>
              <GoASkeleton type="header" size={4}></GoASkeleton>

              <GoAText size="heading-s" mt="3xl" mb="m">
                Paragraph
              </GoAText>
              <GoASkeleton type="paragraph" size={1}></GoASkeleton>
              <GoASkeleton type="paragraph" size={2}></GoASkeleton>
              <GoASkeleton type="paragraph" size={3}></GoASkeleton>
              <GoASkeleton type="paragraph" size={4}></GoASkeleton>

              <GoAText size="heading-s" mt="3xl" mb="m">
                Thumbnail
              </GoAText>
              <GoASkeleton type="thumbnail" size={1}></GoASkeleton>
              <GoASkeleton type="thumbnail" size={2}></GoASkeleton>
              <GoASkeleton type="thumbnail" size={3}></GoASkeleton>
              <GoASkeleton type="thumbnail" size={4}></GoASkeleton>

              <GoAText size="heading-s" mt="3xl" mb="m">
                Card
              </GoAText>
              <GoASkeleton type="card" size={1} maxWidth="360px"></GoASkeleton>
              <GoASkeleton type="card" size={2}></GoASkeleton>
              <GoASkeleton type="card" size={3}></GoASkeleton>
              <GoASkeleton type="card" size={4}></GoASkeleton>

              <GoAText size="heading-s" mt="3xl" mb="m">
                Profile
              </GoAText>
              <GoASkeleton type="profile" size={1}></GoASkeleton>
              <GoASkeleton type="profile" size={2}></GoASkeleton>
              <GoASkeleton type="profile" size={3}></GoASkeleton>
              <GoASkeleton type="profile" size={4}></GoASkeleton>
            </GoABlock>
          </GoATab>

          <GoATab heading="Design">
            <GoACallout
              heading="Design documentation in Figma"
              type="important"
              size="medium"
              maxWidth="540px"
            >
              Detailed design documentation for this component can be found on the associated{" "}
              <a href={FIGMA_LINK} target="_blank" rel="noreferrer">
                component page
              </a>{" "}
              in the Component library in Figma.
            </GoACallout>
          </GoATab>


        </GoATabs>
      </ComponentContent>
    </>
  );
}