import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoabBadge, GoabContainer, GoabTab, GoabTabs } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { DesignEmpty } from "@components/empty-states/design-empty/DesignEmpty.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

const FIGMA_LINK = "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=27301-303450";

export default function ListPage() {
  return (
    <>
      <ComponentHeader
        name="List"
        category={Category.CONTENT_AND_LAYOUT}
        description="Organize information into brief and clear groups."
        githubLink="List"
        figmaLink={FIGMA_LINK}
        relatedComponents={[
          { link: "/components/details", name: "Details" },
        ]}      />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs initialTab={1}>
          <GoabTab
            heading={
              <>
                Examples
                <GoabBadge type="information" content="2" />
              </>
            }
          >
            <SandboxHeader
              exampleTitle="Ordered list">
            </SandboxHeader>
            <GoabContainer mt="none" mb="none">
              <ol className="goa-ordered-list">
                <li>
                  An ordered item
                  <ul>
                    <li>An unordered item</li>
                    <li>
                      A longer item that wraps to a second line
                      <ul>
                        <li>An item on a 3rd level</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  An ordered item
                  <ul>
                    <li>
                      An unordered item
                      <ul>
                        <li>An item on a third level</li>
                        <li>
                          A second item on a 3rd level
                          <ul>
                            <li>An item on a 4th level</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </GoabContainer>

            <CodeSnippet
              lang="html"
              tags="react"
              allowCopy={true}
              code={`
              <ol className="goa-ordered-list">
              <li>
                An ordered item
                <ul>
                  <li>An unordered item</li>
                  <li>
                    A longer item that wraps to a second line
                    <ul>
                      <li>An item on a 3rd level</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                An ordered item
                <ul>
                  <li>
                    An unordered item
                    <ul>
                      <li>An item on a third level</li>
                      <li>
                        A second item on a 3rd level
                        <ul>
                          <li>An item on a 4th level</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
            `}
            />
            <CodeSnippet
              lang="html"
              tags="angular"
              allowCopy={true}
              code={`
              <ol class="goa-ordered-list">
              <li>
                An ordered item
                <ul>
                  <li>An unordered item</li>
                  <li>
                    A longer item that wraps to a second line
                    <ul>
                      <li>An item on a 3rd level</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                An ordered item
                <ul>
                  <li>
                    An unordered item
                    <ul>
                      <li>An item on a third level</li>
                      <li>
                        A second item on a 3rd level
                        <ul>
                          <li>An item on a 4th level</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
            `}
            />

            <SandboxHeader
              exampleTitle="Unordered list">
            </SandboxHeader>
            <GoabContainer mt="none" mb="none">
              <ul className="goa-unordered-list">
                <li>Milk</li>
                <li>
                  Cheese
                  <ul className="goa-unordered-list">
                    <li>Blue cheese</li>
                    <li>Feta</li>
                  </ul>
                </li>
              </ul>
            </GoabContainer>

            <CodeSnippet
              lang="html"
              tags="react"
              allowCopy={true}
              code={`
              <ul className="goa-unordered-list">
                <li>Milk</li>
                <li>
                  Cheese
                  <ul className="goa-unordered-list">
                    <li>Blue cheese</li>
                    <li>Feta</li>
                  </ul>
                </li>
              </ul>
            `}
            />

            <CodeSnippet
              lang="typescript"
              tags="angular"
              allowCopy={true}
              code={`
              <ul class="goa-unordered-list">
                <li>Milk</li>
                <li>
                  Cheese
                  <ul class="goa-unordered-list">
                    <li>Blue cheese</li>
                    <li>Feta</li>
                  </ul>
                </li>
              </ul>
            `}
            />
          </GoabTab>

          <GoabTab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoabTab>

        </GoabTabs>
      </ComponentContent>
    </>
  );
}
