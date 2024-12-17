import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentBinding, Sandbox, DesignTokensLanguageContext } from "@components/sandbox";
import { getCssVarValue } from "../../utils/styling";
import { useState, useContext } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

import {
  GoAIcon,
  GoABadge,
  GoABlock,
  GoAButtonGroup,
  GoAContainer,
  GoAIconButton,
  GoATab,
  GoATabs,
  GoATooltip,
  GoATooltipProps,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";

// == Page props ==

const componentName = "Tooltip";
const description = "A small popover that displays more information about an item.";
const relatedComponents = [
  { link: "/components/details", name: "Details" },
  { link: "/components/form-item", name: "Helper text" },
  { link: "/components/icon-button", name: "Icon button" },
  { link: "/components/popover", name: "Popover" }
];
type ComponentPropsType = GoATooltipProps;
type CastingType = {
  content: string;
  [key: string]: unknown;
};

export default function TEMPLATE_Page() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    content: "Tooltip",
  });

  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Content",
      type: "string",
      name: "content",
      value: "Tooltip",
    },
    {
      label: "Position",
      type: "radio",
      name: "position",
      options: ["top", "bottom", "left", "right"],
      value: "",
    },
    {
      label: "Horizontal alignment",
      type: "radio",
      name: "hAlign",
      options: ["left", "center", "right"],
      value: "",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "content",
      type: "string",
      description: "The content of the tooltip",
    },
    {
      name: "position",
      type: "top | bottom | left | right",
      description: "Position wrt the child element",
      defaultValue: "top",
    },
    {
      name: "hAlign",
      type: "left | center | right",
      description: "Horizontal alignment to the child element",
      defaultValue: "center",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as CastingType);
  }

  const [isCopied, setIsCopied] = useState(false);
  const lang = useContext(DesignTokensLanguageContext);

  function copyCode() {
    let codeToCopy = lang === "css" ? `--$goa-color-interactive-default` : `$$goa-color-interactive-default`;
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    });
  }

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={Category.FEEDBACK_AND_ALERTS}
        description={description}
        relatedComponents={relatedComponents}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoATabs>
          <GoATab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={componentBindings} onChange={onSandboxChange}>
              <GoATooltip {...componentProps}>
                <GoAIcon type="information-circle" />
              </GoATooltip>
            </Sandbox>
            <ComponentProperties properties={componentProperties} />
            
            <h2 id="component-examples" className="hidden" aria-hidden="true">
              Examples
            </h2>
        
            <h3 id="component-example-date-when-shortened">Use a tooltip to show a full date when shortened</h3>
            <Sandbox skipRender fullWidth>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-container type="non-interactive" accent="thick">
                    <div slot="title">
                      Joan Smith
                      <goa-tooltip content="Nov 23, 2023 at 10:35 am">
                        <span style={{ color:"var(--goa-color-text-secondary)", font: "var(--goa-typography-body-xs)" }} >4 hours ago</span>
                      </goa-tooltip>
                    </div>
                    <p>Hover on the time it was added to see the full date and time.</p>
                  </goa-container>     
                `}
              />
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoAContainer
                    type="non-interactive"
                    accent="thick"
                    heading={<span> Joan Smith <GoATooltip content="Nov 23, 2023 at 10:35 am"> <span style={{ color:"var(--goa-color-text-secondary)", font: "var(--goa-typography-body-xs)" }} >4 hours ago</span> </GoATooltip> </span>}>
                    <p>Hover on the time it was added to see the full date and time.</p>
                  </GoAContainer>
                `}
              />
              <GoAContainer
                type="non-interactive"
                accent="thick"
                heading={
                <span>
                  Joan Smith
                  <GoATooltip content="Nov 23, 2023 at 10:35 am">
                    <span style={{ color:"var(--goa-color-text-secondary)", font: "var(--goa-typography-body-xs)" }} >4 hours ago</span>
                  </GoATooltip>
                </span>}>
                <p>Hover on the time it was added to see the full date and time.</p>
              </GoAContainer>
            </Sandbox>
            
            <h3 id="component-example-label-icon-only">Show a label on an icon only button</h3>
            <Sandbox fullWidth>
              <GoAButtonGroup alignment="center">
                  <GoATooltip content="Edit">
                    <GoAIconButton icon="pencil" ariaLabel="Pencil icon"/>
                  </GoATooltip>
                  <GoATooltip content="Alerts">
                    <GoAIconButton icon="notifications" ariaLabel="Alert icon"/>
                  </GoATooltip>
                  <GoATooltip content="Settings">
                    <GoAIconButton icon="settings" ariaLabel="Settings icon"/>
                  </GoATooltip>
              </GoAButtonGroup>
            </Sandbox>

            <h3 id="component-example-copy-clipboard">Click to copy something to your clipboard</h3>
            <Sandbox allow={['div', 'pre', 'a']} skipRender>
              <CodeSnippet
                lang="css"
                allowCopy={true}
                code={`
                  .token-block {
                    background-color: var(--goa-color-interactive-default);
                    height: 22px;
                    width: 24px;
                    border-radius: var(--goa-border-radius-m);
                  }

                  .goa-token-snippet > a > span {
                    margin-top: 5px;
                    margin-left: 10px;
                  }
                `}
              />
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  const [isCopied, setIsCopied] = useState(false);
                  const lang = useContext(DesignTokensLanguageContext);

                  function copyCode() {
                    let codeToCopy = lang === "css" ? "--$goa-color-interactive-default" : "$$goa-color-interactive-default";
                    navigator.clipboard.writeText(codeToCopy).then(() => {
                      setIsCopied(true);
                      setTimeout(() => setIsCopied(false), 1000);
                    });
                  }
                `}
              />
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoABlock alignment="center">
                    <div className="token-block"/>
                    <div className="goa-token-snippet">
                      <a onClick={copyCode}>
                        <u>$goa-color-interactive-default</u>
                        <span>
                          <GoAIcon type="copy" />
                        </span>
                      </a>
                      <span
                        className="goa-tooltip"
                        style={isCopied ? { visibility: "visible" } : { visibility: "hidden" }}
                      >
                        Copied
                      </span>
                    </div>
                  </GoABlock>
                `}
              />
              <GoABlock alignment="center">
                <div
                  className="token-block"
                  style={{
                    backgroundColor: getCssVarValue(`--goa-color-interactive-default`),
                    height: '22px',
                    width: '24px',
                    borderRadius: getCssVarValue('--goa-border-radius-m')
                  }}
                />
                <div className="goa-token-snippet">
                    <a onClick={copyCode}>
                      <u>$goa-color-interactive-default</u>
                      <span style={{ marginTop: "5px", marginLeft: "10px" }}>
                        <GoAIcon type="copy" />
                      </span>
                    </a>
                  <span
                    className="copy-feedback"
                    style={isCopied ? { visibility: "visible" } : { visibility: "hidden" }}
                  >
                    Copied
                  </span>
                </div>
              </GoABlock>
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
      </ComponentContent>
    </>
  );
}
