import {
  GoABadge,
  GoAHeaderProps,
  GoAMicrositeHeader,
  GoAServiceLevel,
  GoATab,
  GoATabs,
} from "@abgov/react-components";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
const componentName = "Microsite header";
const description =
  "Communicate what stage the service is at, connect to <a href='https://www.alberta.ca' target='_blank'>Alberta.ca</a>, and gather feedback on your service.";
const componentCategory = Category.STRUCTURE_AND_NAVIGATION;
const relatedComponents = [{ link: "/components/header", name: "Header" }];
type ComponentPropsType = GoAHeaderProps;
type CastingType = {
  // add any required props here
  type: GoAServiceLevel;
  [key: string]: unknown;
};
export default function MicrositeHeaderPage() {
  const [micrositeHeaderProps, setMicrositeHeaderProps] = useState<ComponentPropsType>({
    type: "alpha" as GoAServiceLevel,
  });
  const [micrositeHeaderBindings, setMicrositeHeaderBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "dropdown",
      name: "type",
      options: ["alpha", "beta", "live"],
      value: "alpha",
    },
    {
      label: "Version",
      type: "string",
      name: "version",
      value: "",
    },
    {
      label: "Feedback url",
      type: "string",
      name: "feedbackUrl",
      value: "",
    },
    {
      label: "Max content width",
      type: "string",
      name: "maxContentWidth",
      value: "",
    },
    {
      label: "Feedback url target",
      type: "dropdown",
      name: "feedbackUrlTarget",
      options: ["blank", "self"],
      value: "blank",
    },
    {
      label: "Header url target",
      type: "dropdown",
      name: "headerUrlTarget",
      options: ["blank", "self"],
      value: "blank",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "alpha | beta | live",
      required: true,
    },
    {
      name: "version",
      type: "string",
    },
    {
      name: "feedbackUrl",
      type: "string",
      lang: "react",
      description: "Url to feedback page that will be displayed when provided.",
    },
    {
      name: "feedbackurl",
      type: "string",
      lang: "angular",
      description: "Url to feedback page that will be displayed when provided.",
    },
    {
      name: "maxContentWidth",
      type: "string",
      lang: "react",
      description: "Maximum width of the content area",
      defaultValue: "100%",
    },
    {
      name: "maxcontentwidth",
      type: "string",
      lang: "angular",
      description: "Maximum width of the content area",
      defaultValue: "100%",
    },
    {
      name: "feedbackUrlTarget",
      type: "self | blank",
      lang: "react",
      description: "For internal feedback urls sets target='_self'",
      defaultValue: "blank",
    },
    {
      name: "feedbackurltarget",
      type: "self | blank",
      lang: "angular",
      description: "For internal feedback urls sets target='_self'",
      defaultValue: "blank",
    },
    {
      name: "headerUrlTarget",
      type: "self | blank",
      lang: "react",
      description: "For internal header urls sets target='_self'",
      defaultValue: "blank",
    },
    {
      name: "headerurltarget",
      type: "self | blank",
      lang: "angular",
      description: "For internal header urls sets target='_self'",
      defaultValue: "blank",
    },
    {
      name: "hasfeedbackhandler",
      type: "boolean",
      lang: "angular",
      defaultValue: "false",
      description:
        "Set to true to handle the feedback click via _feedbackClick custom event handler.",
    },
    {
      name: "_feedbackclick",
      lang: "angular",
      type: "CustomEvent",
      description: "Function invoked when feedback link is clicked.",
    },
    {
      name: "onFeedbackClick",
      lang: "react",
      type: "() => void",
      description: "Function invoked when feedback link is clicked.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setMicrositeHeaderProps(props as CastingType);
    setMicrositeHeaderBindings(bindings);
  }

  const onClick = () => {
    console.log("Feedback clicked");
    alert("Thank you for your feedback!");
  };

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={componentCategory}
        description={description}
        relatedComponents={relatedComponents}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code examples">
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>
            <Sandbox properties={micrositeHeaderBindings} onChange={onSandboxChange} fullWidth>
              <GoAMicrositeHeader {...micrositeHeaderProps} />
            </Sandbox>

            {/*Component properties table*/}
            <ComponentProperties properties={componentProperties} />

            <h3 id="component-feedbackclick">Custom click event handler (for feedback)</h3>
            <Sandbox skipRender fullWidth>
              <GoAMicrositeHeader type="alpha" onFeedbackClick={onClick} />

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  @Component({
                    selector: "abgov-microsite-header",
                    templateUrl: "./microsite-header.component.html",
                  })
                  export class MicrositeHeaderComponent {
                    constructor() {}

                    handleFeedbackClick(event: Event) {
                      console.log("Feedback clicked");
                      alert("Thank you for your feedback!");
                    }
                  }
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-microsite-header
                    type="alpha"
                    [hasfeedbackhandler]="true"
                    (_feedbackClick)="handleFeedbackClick($event)"
                  ></goa-microsite-header>
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  export default function MicrositeHeader() {
                    function onClick() {
                      console.log("Feedback clicked");
                      alert("Thank you for your feedback!");
                    }

                    return (
                      <>
                        <GoAMicrositeHeader
                          type="alpha"
                          onFeedbackClick={() => onClick()}
                        />
                      </>
                    );
                  }
                `}
              />
            </Sandbox>
          </GoATab>

          <GoATab
            heading={
              <>
                Design guidelines
                <GoABadge type="information" content="In progress" />
              </>
            }>
            <p>Coming Soon</p>
          </GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}
