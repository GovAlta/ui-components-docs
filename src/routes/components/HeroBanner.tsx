import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoAButton,
  GoAHeroBanner,
  GoAHeroBannerActions,
  GoATab,
  GoATabs,
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function HeroBannerPage() {
  const [heroBannerProps, setHeroBannerProps] = useState({
    heading: "Heading",
  });
  const [heroBannerBindings, setHeroBannerBindings] = useState<ComponentBinding[]>([
    {
      label: "Heading",
      type: "string",
      name: "heading",
      value: "Heading",
    },
    {
      label: "Background URL",
      type: "string",
      name: "backgroundUrl",
      value: "",
    },
    {
      label: "Min height",
      type: "string",
      name: "minHeight",
      value: "",
    },
    {
      label: "Max content width",
      type: "string",
      name: "maxContentWidth",
      value: "",
    },
    {
      label: "Background color",
      type: "string",
      name: "backgroundColor",
      value: "",
    },
    {
      label: "Text color",
      type: "string",
      name: "textColor",
      value: "",
    },
  ]);
  const componentProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "string",
      description: "Main heading text",
      required: true,
    },
    {
      name: "backgroundurl",
      type: "string",
      description: "Background image url",
      lang: "angular",
    },
    {
      name: "backgroundUrl",
      type: "string",
      description: "Background image url",
      lang: "react",
    },
    {
      name: "minheight",
      type: "string",
      description: "Set the height of the Hero Banner",
      lang: "angular",
      defaultValue: "600px",
    },
    {
      name: "minHeight",
      type: "string",
      description: "Sets the height of the Hero Banner",
      lang: "react",
      defaultValue: "600px",
    },
    {
      name: "maxcontentwidth",
      type: "string",
      description: "Maximum width of the content area",
      lang: "angular",
      defaultValue: "100%",
    },
    {
      name: "maxContentWidth",
      type: "string",
      description: "Maximum width of the content area",
      lang: "react",
      defaultValue: "100%",
    },
    {
      name: "backgroundcolor",
      type: "string",
      description: "Hero Banner background color when no background image is provided",
      lang: "angular",
      defaultValue: "#f8f8f8",
    },
    {
      name: "backgroundColor",
      type: "string",
      description: "Hero Banner background color when no background image is provided",
      lang: "react",
      defaultValue: "#f8f8f8",
    },
    {
      name: "textcolor",
      type: "string",
      description: "Text color within the hero banner",
      lang: "angular",
      defaultValue: "#333",
    },
    {
      name: "textColor",
      type: "string",
      description: "Text color within the hero banner",
      lang: "react",
      defaultValue: "#333",
    },
  ];

  function onSandboxChange(heroBannerBindings: ComponentBinding[], props: Record<string, unknown>) {
    setHeroBannerBindings(heroBannerBindings);
    setHeroBannerProps(props as { heading: string;[key: string]: unknown });
  }

  function noop() { }

  return (
    <>
      <ComponentHeader
        name="Hero banner"
        category={Category.STRUCTURE_AND_NAVIGATION}
        description="A visual band of text, including a background colour or image and a call to action."
      />

      <ComponentContent cssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoATabs>
          <GoATab heading="Code examples">
            {/*Hero Banner Sandbox*/}
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={heroBannerBindings} onChange={onSandboxChange}>
              <GoAHeroBanner {...heroBannerProps}>
                Resources are available to help Alberta entrepreneurs and small businesses start, grow
                and succeed.
                <GoAHeroBannerActions>
                  <GoAButton type="start" onClick={noop}>
                    Call to action
                  </GoAButton>
                </GoAHeroBannerActions>
              </GoAHeroBanner>
            </Sandbox>

            <ComponentProperties properties={componentProperties} />
          </GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}
