import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabBlock, GoabIconButton, GoabTooltip } from "@abgov/react-components";
import { getCssVarValue } from "src/utils/styling.ts";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const TooltipClickCopyToClipboardExample = () => {
  const {version} = useContext(LanguageVersionContext);
  const [isCopied, setIsCopied] = useState(false);

  function copyCode() {
    const codeToCopy = "$goa-color-interactive-default";
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    });
  }

  return (
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
  )
}
