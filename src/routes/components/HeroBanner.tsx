import { useContext, useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoabButton,
  GoabHeroBanner,
  GoabHeroBannerActions,
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export default function HeroBannerPage() {
  const {version} = useContext(LanguageVersionContext);
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
  const oldComponentProperties: ComponentProperty[] = [
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
    {
      name: "actions",
      type: "slot",
      description: "Buttons displayed in the bottom left of the hero banner",
      lang: "angular",
    },
  ];
  const componentProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "string",
      description: "Main heading text",
    },
    {
      name: "backgroundUrl",
      type: "string",
      description: "Background image url",
    },
    {
      name: "minHeight",
      type: "string",
      description: "Sets the height of the Hero Banner",
      lang: "react",
      defaultValue: "600px",
    },
    {
      name: "maxContentWidth",
      type: "string",
      description: "Maximum width of the content area",
      defaultValue: "100%",
    },
    {
      name: "backgroundColor",
      type: "string",
      description: "Hero Banner background color when no background image is provided",
      defaultValue: "#f8f8f8",
    },
    {
      name: "textColor",
      type: "string",
      description: "Text color within the hero banner",
      defaultValue: "#333",
    },
    {
      name: "testId",
      type: "string",
      description: "Test ID for the component",
    },
    {
      name: "actions",
      type: "slot",
      description: "Buttons displayed in the bottom left of the hero banner",
      lang: "angular",
    },
  ];


  function onSandboxChange(heroBannerBindings: ComponentBinding[], props: Record<string, unknown>) {
    setHeroBannerBindings(heroBannerBindings);
    setHeroBannerProps(props as { heading: string; [key: string]: unknown });
  }

  function noop() {}

  return (
    <>
      <ComponentHeader
        name="Hero banner"
        category={Category.STRUCTURE_AND_NAVIGATION}
        description="A visual band of text, including a background colour or image and a call to action."
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            {/*Hero Banner Sandbox*/}
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>
            <Sandbox properties={heroBannerBindings} fullWidth={true} onChange={onSandboxChange}>
              <GoabHeroBanner {...heroBannerProps}>
                Resources are available to help Alberta entrepreneurs and small businesses start,
                grow and succeed.
              </GoabHeroBanner>
            </Sandbox>

            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />

            {/* Examples*/}
            <h2 id="component-examples" className="hidden" aria-hidden="true">
              Examples
            </h2>

            <h3 id="component-example-actions">Hero Banner with actions</h3>
            <Sandbox skipRender fullWidth>
              {version === "old" && <CodeSnippet
                lang="html"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-hero-banner heading="Supporting Businesses">
                    Resources are available to help Alberta entrepreneurs and small businesses start, grow and succeed.
                    <div slot="actions">
                      <goa-button type="start" (_click)="onClick($event)">Call to action</goa-button>
                    </div>
                  </goa-hero-banner>
                `}
              />}
              {version === "new" && <CodeSnippet
                lang="html"
                tags="angular"
                allowCopy={true}
                code={`
                  <goab-hero-banner heading="Supporting Businesses" [actions]="heroBannerActionTemplate">
                    Resources are available to help Alberta entrepreneurs and small businesses start, grow and succeed.
                    <ng-template #heroBannerActionTemplate>
                      <goab-button type="start" (onClick)="onClick()">Call to action</goab-button>
                    </ng-template>
                  </goab-hero-banner>
                `}
              />}

              {/*React code*/}
              {version === "old" && <CodeSnippet
                lang="html"
                tags="react"
                allowCopy={true}
                code={`
                  <GoAHeroBanner heading="Supporting Businesses">
                    Resources are available to help Alberta entrepreneurs and small businesses start, grow and succeed.
                    <GoAHeroBannerActions>
                      <GoAButton type="start" onClick={noop}>Call to action</GoAButton>
                    </GoAHeroBannerActions>
                  </GoAHeroBanner>
                `}
              />}
              {version === "new" && <CodeSnippet
                lang="html"
                tags="react"
                allowCopy={true}
                code={`
                  <GoabHeroBanner heading="Supporting Businesses">
                    Resources are available to help Alberta entrepreneurs and small businesses start, grow and succeed.
                    <GoabHeroBannerActions>
                      <GoabButton type="start" onClick={noop}>Call to action</GoabButton>
                    </GoabHeroBannerActions>
                  </GoabHeroBanner>
                `}
              />}

              <GoabHeroBanner heading="Supporting Businesses">
                Resources are available to help Alberta entrepreneurs and small businesses start,
                grow and succeed.
                <GoabHeroBannerActions>
                  <GoabButton type="start" onClick={noop}>
                    Call to action
                  </GoabButton>
                </GoabHeroBannerActions>
              </GoabHeroBanner>
            </Sandbox>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
