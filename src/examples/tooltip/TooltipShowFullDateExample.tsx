import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabContainer, GoabTooltip } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const TooltipShowFullDateExample = () => {
  const {version} = useContext(LanguageVersionContext);
  return (
    <Sandbox skipRender fullWidth>
      {/*SkipRender because we need to display a slot that sandbox doesn't support*/}

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
                      <goab-tooltip content="Nov 23, 2023 at 10:35 am">
                        <span style="color:var(--goa-color-text-secondary); font: var(--goa-typography-body-xs);">4 hours ago</span>
                      </goab-tooltip>
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
  )
}
