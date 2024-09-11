import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { GoabBadge, GoabContainer, GoabTab, GoabTabs } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext } from "react";
import { LanguageContext } from "@components/sandbox";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function ListPage() {
  const language = useContext(LanguageContext);

  return (
    <>
      <ComponentHeader
        name="List"
        category={Category.CONTENT_AND_LAYOUT}
        description="Organize information into brief and clear groups."
      />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            {/*We don't use sandbox because it isn't starting with "GoA" components*/}
            <GoabContainer>
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

            <h2 id="component-examples" className="hidden" aria-hidden="true">
              Examples
            </h2>

            <h3 id="component-example-unordered-list">Unordered list</h3>
            <GoabContainer mt="m">
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
          </GoabTab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }>
            <p>Coming Soon</p>
          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
