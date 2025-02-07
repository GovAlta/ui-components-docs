import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { getCssVarValue } from "../../utils/styling";
import { useContext, useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

import {
  GoabIcon,
  GoabBadge,
  GoabTab,
  GoabTabs,
  GoabTooltip,
  GoabIconButton,
  GoabBlock,
  GoabTooltipProps, GoabContainer, GoabButtonGroup
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

// == Page props ==

const componentName = "Tooltip";
const description = "A small popover that displays more information about an item.";
const relatedComponents = [
  { link: "/components/details", name: "Details" },
  { link: "/components/form-item", name: "Helper text" },
  { link: "/components/icon-button", name: "Icon button" },
  { link: "/components/popover", name: "Popover" }
];
type ComponentPropsType = GoabTooltipProps;
type CastingType = {
  content: string;
  [key: string]: unknown;
};

export default function TooltipPage() {
  const {version} = useContext(LanguageVersionContext);
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

  const oldComponentProperties: ComponentProperty[] = [
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
  const componentProperties: ComponentProperty[] = [
    {
      name: "content",
      type: "string",
      description: "The content of the tooltip",
    },
    {
      name: "position",
      type: "GoabTooltipPosition (top | bottom | left | right)",
      description: "Position wrt the child element",
      defaultValue: "top",
    },
    {
      name: "hAlign",
      type: "GoabTooltipHorizontalAlignment (left | center | right)",
      description: "Horizontal alignment to the child element",
      defaultValue: "center",
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

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as CastingType);
  }

  const [isCopied, setIsCopied] = useState(false);

  function copyCode() {
    const codeToCopy = "$goa-color-interactive-default";
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

        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={componentBindings} onChange={onSandboxChange}>
              <GoabTooltip {...componentProps}>
                <GoabIcon type="information-circle" />
              </GoabTooltip>
            </Sandbox>
            <ComponentProperties properties={componentProperties} oldProperties={oldComponentProperties} />

            <h2 id="component-examples" className="hidden" aria-hidden="true">
              Examples
            </h2>

            <h3 id="component-example-date-when-shortened">Use a tooltip to show a full date when shortened</h3>
            <Sandbox skipRender fullWidth>
              {/*Angular code*/}
              {version === "old" && <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-container type="non-interactive" accent="thick">
                    <div slot="title">
                      Joan Smith
                      <goa-tooltip content="Nov 23, 2023 at 10:35 am">
                        <span style="color:var(--goa-color-text-secondary); font: var(--goa-typography-body-xs);">4 hours ago</span>
                      </goa-tooltip>
                    </div>
                    <p>Hover on the time it was added to see the full date and time.</p>
                  </goa-container>     
                `}
              />}
              {version === "new" && <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goab-container type="non-interactive" accent="thick" [title]="containerTitle">
                    <ng-template #containerTitle>
                      Joan Smith
                      <goa-tooltip content="Nov 23, 2023 at 10:35 am">
                        <span style="color:var(--goa-color-text-secondary); font: var(--goa-typography-body-xs);">4 hours ago</span>
                      </goa-tooltip>
                    </ng-template>
                    <p>Hover on the time it was added to see the full date and time.</p>
                  </goab-container>     
                `}
              />}

              {/*React code*/}
              {version === "old" && <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoAContainer
                    type="non-interactive"
                    accent="thick"
                    heading={
                      <span>
                        Joan Smith 
                        <GoATooltip content="Nov 23, 2023 at 10:35 am">
                          <span style={{
                            color:"var(--goa-color-text-secondary)",
                            font: "var(--goa-typography-body-xs)" }}>
                            4 hours ago
                          </span>
                        </GoATooltip>
                      </span>
                    }>
                    <p>Hover on the time it was added to see the full date and time.</p>
                  </GoAContainer>
                `}
              />}
              {version === "new" && <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoabContainer
                    type="non-interactive"
                    accent="thick"
                    heading={
                      <span>
                        Joan Smith 
                        <GoabTooltip content="Nov 23, 2023 at 10:35 am">
                          <span style={{
                            color:"var(--goa-color-text-secondary)",
                            font: "var(--goa-typography-body-xs)" }}>
                            4 hours ago
                          </span>
                        </GoabTooltip>
                      </span>
                    }>
                    <p>Hover on the time it was added to see the full date and time.</p>
                  </GoabContainer>
                `}
              />}

              <GoabContainer
                type="non-interactive"
                accent="thick"
                heading={
                <span>
                  Joan Smith
                  <GoabTooltip content="Nov 23, 2023 at 10:35 am">
                    <span style={{ color:"var(--goa-color-text-secondary)", font: "var(--goa-typography-body-xs)" }} >4 hours ago</span>
                  </GoabTooltip>
                </span>}>
                <p>Hover on the time it was added to see the full date and time.</p>
              </GoabContainer>
            </Sandbox>

            <h3 id="component-example-label-icon-only">Show a label on an icon only button</h3>
            <Sandbox fullWidth>
              <GoabButtonGroup alignment="center">
                  <GoabTooltip content="Edit">
                    <GoabIconButton icon="pencil" ariaLabel="Pencil icon"/>
                  </GoabTooltip>
                  <GoabTooltip content="Alerts">
                    <GoabIconButton icon="notifications" ariaLabel="Alert icon"/>
                  </GoabTooltip>
                  <GoabTooltip content="Settings">
                    <GoabIconButton icon="settings" ariaLabel="Settings icon"/>
                  </GoabTooltip>
              </GoabButtonGroup>
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
                `}
              />
              {/*Angular code*/}
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  isCopied = false;

                  copyCode() {
                    const codeToCopy = "$goa-color-interactive-default";
                    navigator.clipboard.writeText(codeToCopy).then(() => {
                      this.isCopied = true;
                      setTimeout(() => this.isCopied = false, 1000);
                    });
                  }
                `}
              />
              {version === "old" && <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-block alignment="center">
                    <div class="token-block"></div>
                    <a (_click)="copyCode()">
                      <u>$goa-color-interactive-default</u>
                    </a>
                    <goa-tooltip [content]="isCopied ? 'Copied' : 'Copy?'" position="top">
                      <goa-icon-button icon="copy" (_click)="copyCode()" mt="2xs" />
                    </goa-tooltip>
                  </goa-block>
                `}
              />}
              {version === "new" && <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goab-block alignment="center">
                    <div class="token-block"></div>
                    <a (click)="copyCode()">
                      <u>$goa-color-interactive-default</u>
                    </a>
                    <goab-tooltip [content]="isCopied ? 'Copied' : 'Copy?'" position="top">
                      <goab-icon-button icon="copy" (onClick)="copyCode()" mt="2xs" />
                    </goab-tooltip>
                  </goab-block>
                `}
              />}

              {/*React code*/}
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  const [isCopied, setIsCopied] = useState(false);

                  function copyCode() {
                    const codeToCopy = "$goa-color-interactive-default";
                    navigator.clipboard.writeText(codeToCopy).then(() => {
                      setIsCopied(true);
                      setTimeout(() => setIsCopied(false), 1000);
                    });
                  }
                `}
              />
              {version === "old" && <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoABlock alignment="center">
                    <div className="token-block"/>
                    <a onClick={copyCode}>
                      <u>$goa-color-interactive-default</u>
                    </a>
                    <GoATooltip content={isCopied ? "Copied" : "Copy?"} position="top">
                      <GoAIconButton icon="copy" onClick={copyCode} mt="2xs" />
                    </GoATooltip>
                  </GoABlock>
                `}
              />}
              {version === "new" && <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoabBlock alignment="center">
                    <div className="token-block"/>
                    <a onClick={copyCode}>
                      <u>$goa-color-interactive-default</u>
                    </a>
                    <GoabTooltip content={isCopied ? "Copied" : "Copy?"} position="top">
                      <GoabIconButton icon="copy" onClick={copyCode} mt="2xs" />
                    </GoabTooltip>
                  </GoabBlock>
                `}
              />}
              <GoabBlock alignment="center">
                <div
                  className="token-block"
                  style={{
                    backgroundColor: getCssVarValue(`--goa-color-interactive-default`),
                    height: '22px',
                    width: '24px',
                    borderRadius: getCssVarValue('--goa-border-radius-m')
                  }}
                />
                <a onClick={copyCode}>
                  <u>$goa-color-interactive-default</u>
                </a>
                <GoabTooltip content={isCopied ? `Copied` : `Copy?`} position="top">
                  <GoabIconButton icon="copy" onClick={copyCode} mt="2xs" />
                </GoabTooltip>
              </GoabBlock>
            </Sandbox>
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }
          ></GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
