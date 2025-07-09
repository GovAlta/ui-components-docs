import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabBadge, GoabContainer } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const ShowStatusOnACard = () => {
  const {version} = useContext(LanguageVersionContext);
  return (
    <Sandbox fullWidth skipRender>
      {/*Angular code*/}
      {version === "old" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
                <goa-container type="non-interactive" accent="thick">
                    <div slot="title">Heading</div>
                    <div slot="actions">
                        <goa-badge type="important" content="Priority"></goa-badge>
                    </div>
                    Content
                </goa-container>     
                `}
      />}
      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
               <goab-container type="non-interactive" accent="thick" [title]="title" [actions]="actions">
                <ng-template #title>Heading</ng-template>
                <ng-template #actions>
                  <goab-badge type="important" content="Priority"></goab-badge>
                </ng-template>
                  Content
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
                        heading="Heading"
                        actions={<GoABadge type="important" content="Priority"/>}>
                        Content
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
              heading="Heading"
              actions={<GoabBadge type="important" content="Priority" />}>
                Content
            </GoabContainer>
          `}
      />}

      <GoabContainer
        type="non-interactive"
        accent="thick"
        heading="Heading"
        actions={<GoabBadge type="important" content="Priority" />}>
        Content
      </GoabContainer>
    </Sandbox>
  )
}

export default ShowStatusOnACard;
