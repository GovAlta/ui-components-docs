import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoACallout, GoAContainer, GoATab, GoATabs, GoAText } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext } from "react";
import { LanguageContext } from "@components/sandbox";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { DesignEmpty } from "@components/design-empty/DesignEmpty.tsx";

export default function ListPage() {
  const language = useContext(LanguageContext);

  const FIGMA_LINK =
    "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=27301-303450";
  const description = "Organize information into brief and clear groups.";
  const componentName = "List";
  const category = Category.INPUTS_AND_ACTIONS;


  return (

    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        githubLink={componentName}
        figmaLink={FIGMA_LINK}
      />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Examples">

            <GoACallout
              type="information"
              size="medium"
              maxWidth="550px"
            >
              The list is not a GoA component, it can be used through CSS.
            </GoACallout>
            <h3 id="component-example-ordered-list" style={{ display: "none" }}>Ordered list</h3>
            <GoAText size="heading-m" mt="xl" mb="l" as="h3"> Ordered list </GoAText>

            {/*We don't use sandbox because it isn't starting with "GoA" components*/}
            <GoAContainer>
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
            </GoAContainer>

            {language === "react" && (
              <CodeSnippet
                lang="typescript"
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
            )}

            {language === "angular" && (
              <CodeSnippet
                lang="typescript"
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
            )}
            {/* Examples*/}

            <h3 id="component-example-unordered-list">Unordered list</h3>
            <GoAContainer mt="m">
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
            </GoAContainer>

            {language === "react" && (
              <CodeSnippet
                lang="typescript"
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
            )}

            {language === "angular" && (
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
            )}
          </GoATab>

          <GoATab heading="Design">
            <DesignEmpty figmaLink={FIGMA_LINK} />
          </GoATab>

        </GoATabs>
      </ComponentContent>
    </>
  );
}
