import { GoabBadge, GoabTab, GoabTabs } from "@abgov/react-components";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";

// == Page props ==
const componentName = "Tabs";
const description =
  "Let users navigate between related sections of content, displaying one section at a time.";
const category = Category.STRUCTURE_AND_NAVIGATION;
export default function TabsPage() {
  const componentProperties: ComponentProperty[] = [
    {
      name: "initialtab",
      type: "number",
      lang: "angular",
      defaultValue: "1",
      description: "Current active tab",
    },
    {
      name: "initialTab",
      type: "number",
      lang: "react",
      defaultValue: "1",
      description: "Current active tab",
    },
    {
      name: "_change",
      lang: "angular",
      type: "CustomEvent",
      description: "Callback function when tab is changed.",
    },
    {
      name: "onChange",
      lang: "react",
      type: "(tabIndex: number) => void",
      description: "Callback function when tab is changed.",
    },
  ];
  const tabProperties: ComponentProperty[] = [
    {
      name: "heading",
      type: "slot",
      description: "Add components to the tab heading such as badges",
    },
  ];
  const noop = () => {};
  const review = [0, 1, 2, 3];
  const complete = [0, 1];
  return (
    <>
      <ComponentHeader name={componentName} category={category} description={description} />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>
            <Sandbox fullWidth>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  
                  onChange(event: Event) {
                    const customEvent = event as CustomEvent;
                    const tabIndex = customEvent.detail.tab;
                    console.log('Tab changed to ', tabIndex);
                  } 
                `}
              />
              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  function onChange(tabIndex: number): void {
                    console.log('Tab changed to ', tabIndex);
                  }
                  `}
              />
              <GoabTabs onChange={noop}>
                <GoabTab heading="Tab Item 1">
                  Tab Item 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </GoabTab>
                <GoabTab heading="Tab Item 2">
                  Tab Item 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </GoabTab>
                <GoabTab heading="Tab Item 3">
                  Tab Item 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </GoabTab>
              </GoabTabs>
            </Sandbox>

            {/*GoATabs Table Properties*/}
            <ComponentProperties heading="GoATabs Properties" properties={componentProperties} />
            <ComponentProperties heading="GoATab Properties" properties={tabProperties} />
          </GoabTab>

            {/*Tabs Examples*/}
            <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>

            <h3 id="component-example-different-views-data-table">Show different views of data in a table</h3>
            <Sandbox fullWidth skipRender>

            <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-tabs>
                    <goa-tab>
                      <div slot="heading">All</div>
                      <goa-table width="100%">
                        <thead>
                          <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th class="goa-table-number-header">Number</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr *ngFor="let i of [0,1,2,3]">
                            <td>
                              <goa-badge type="important" content="Review pending" />
                            </td>
                            <td>Lorem ipsum</td>
                            <td class="goa-table-number-column">1234567890</td>
                            <td>
                              <goa-button type="tertiary">Action</goa-button>
                            </td>
                          </tr>
                          <tr *ngFor="let i of [0,1]">
                            <td>
                              <goa-badge type="information" content="Complete" />
                            </td>
                            <td>Lorem Ipsum</td>
                            <td class="goa-table-number-column">1234567890</td>
                            <td>
                              <goa-button type="tertiary">Action</goa-button>
                            </td>
                          </tr>
                        </tbody>
                      </goa-table>
                    </goa-tab>
                    <goa-tab>
                      <div slot="heading">Review pending<goa-badge type="important" content="4"></goa-badge></div>
                      <goa-table width="100%">
                        <thead>
                          <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th class="goa-table-number-header">Number</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr *ngFor="let i of [0,1,2,3]">
                            <td>
                              <goa-badge type="important" content="Review pending" />
                            </td>
                            <td>Lorem ipsum</td>
                            <td class="goa-table-number-column">1234567890</td>
                            <td>
                              <goa-button type="tertiary">Action</goa-button>
                            </td>
                          </tr>
                        </tbody>
                      </goa-table>
                    </goa-tab>
                    <goa-tab>
                      <div slot="heading">Complete<goa-badge type="information" content="338"></goa-badge></div>
                      <goa-table width="100%">
                        <thead>
                          <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th class="goa-table-number-header">Number</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr *ngFor="let i of [0,1]">
                            <td>
                              <goa-badge type="information" content="Complete" />
                            </td>
                            <td>Lorem Ipsum</td>
                            <td class="goa-table-number-column">1234567890</td>
                            <td>
                              <goa-button type="tertiary">Action</goa-button>
                            </td>
                          </tr>
                        </tbody>
                      </goa-table>
                    </goa-tab>
                  </goa-tabs>
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  const review = [0, 1, 2, 3];
                  const complete = [0, 1];
                  `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoATabs>
                    <GoATab heading="All">
                      <GoATable width="100%">
                        <thead>
                          <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th className="goa-table-number-header">Number</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {review.map((i) => (
                            <tr key={i}>
                              <td>
                                <GoABadge type="important" content="Review pending" />
                              </td>
                              <td>Lorem Ipsum</td>
                              <td className="goa-table-number-column">1234567890</td>
                              <td>
                                <GoAButton type="tertiary">Action</GoAButton>
                              </td>
                            </tr>
                          ))}
                          {complete.map((i) => (
                            <tr key={i}>
                              <td>
                                <GoABadge type="information" content="Complete" />
                              </td>
                              <td>Lorem Ipsum</td>
                              <td className="goa-table-number-column">1234567890</td>
                              <td>
                                <GoAButton type="tertiary">Action</GoAButton>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </GoATable>
                    </GoATab>
                    <GoATab heading={<>Review pending<GoABadge type="important" content="4"></GoABadge></>}>
                      <GoATable width="100%">
                        <thead>
                          <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th className="goa-table-number-header">Number</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {review.map((i) => (
                            <tr key={i}>
                              <td>
                                <GoABadge type="important" content="Review pending" />
                              </td>
                              <td>Lorem Ipsum</td>
                              <td className="goa-table-number-column">1234567890</td>
                              <td>
                                <GoAButton type="tertiary">Action</GoAButton>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </GoATable>
                    </GoATab>
                    <GoATab heading={<>Complete<GoABadge type="information" content="338"></GoABadge></>}>
                      <GoATable width="100%">
                        <thead>
                          <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th className="goa-table-number-header">Number</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {complete.map((i) => (
                            <tr key={i}>
                              <td>
                                <GoABadge type="information" content="Complete" />
                              </td>
                              <td>Lorem Ipsum</td>
                              <td className="goa-table-number-column">1234567890</td>
                              <td>
                                <GoAButton type="tertiary">Action</GoAButton>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </GoATable>
                    </GoATab>
                  </GoATabs>
                  `}
              />

              <GoATabs>
                <GoATab heading="All">
                  <GoATable width="100%">
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Text</th>
                        <th className="goa-table-number-header">Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {review.map((i) => (
                        <tr key={i}>
                          <td>
                            <GoABadge type="important" content="Review pending" />
                          </td>
                          <td>Lorem Ipsum</td>
                          <td className="goa-table-number-column">1234567890</td>
                          <td>
                            <GoAButton type="tertiary">Action</GoAButton>
                          </td>
                        </tr>
                      ))}
                      {complete.map((i) => (
                        <tr key={i}>
                          <td>
                            <GoABadge type="information" content="Complete" />
                          </td>
                          <td>Lorem Ipsum</td>
                          <td className="goa-table-number-column">1234567890</td>
                          <td>
                            <GoAButton type="tertiary">Action</GoAButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </GoATable>
                </GoATab>
                <GoATab heading={<>Review pending<GoABadge type="important" content="4"></GoABadge></>}>
                  <GoATable width="100%">
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Text</th>
                        <th className="goa-table-number-header">Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {review.map((i) => (
                        <tr key={i}>
                          <td>
                            <GoABadge type="important" content="Review pending" />
                          </td>
                          <td>Lorem Ipsum</td>
                          <td className="goa-table-number-column">1234567890</td>
                          <td>
                            <GoAButton type="tertiary">Action</GoAButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </GoATable>
                </GoATab>
                <GoATab heading={<>Complete<GoABadge type="information" content="338"></GoABadge></>}>
                  <GoATable width="100%">
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Text</th>
                        <th className="goa-table-number-header">Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {complete.map((i) => (
                        <tr key={i}>
                          <td>
                            <GoABadge type="information" content="Complete" />
                          </td>
                          <td>Lorem Ipsum</td>
                          <td className="goa-table-number-column">1234567890</td>
                          <td>
                            <GoAButton type="tertiary">Action</GoAButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </GoATable>
                </GoATab>
              </GoATabs>
            </Sandbox>

            <h3 id="component-example-set-specific-tab-active">Set a specific tab to be active</h3>
            <Sandbox fullWidth skipRender>
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-tabs initialTab={2}>
                    <goa-tab>
                      <div slot="heading">All</div>
                      <goa-table width="100%">
                        <thead>
                          <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th class="goa-table-number-header">Number</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr *ngFor="let i of [0,1,2,3]">
                            <td>
                              <goa-badge type="important" content="Review pending" />
                            </td>
                            <td>Lorem ipsum</td>
                            <td class="goa-table-number-column">1234567890</td>
                            <td>
                              <goa-button type="tertiary">Action</goa-button>
                            </td>
                          </tr>
                          <tr *ngFor="let i of [0,1]">
                            <td>
                              <goa-badge type="information" content="Complete" />
                            </td>
                            <td>Lorem Ipsum</td>
                            <td class="goa-table-number-column">1234567890</td>
                            <td>
                              <goa-button type="tertiary">Action</goa-button>
                            </td>
                          </tr>
                        </tbody>
                      </goa-table>
                    </goa-tab>
                    <goa-tab>
                      <div slot="heading">Review pending<goa-badge type="important" content="4"></goa-badge></div>
                      <goa-table width="100%">
                        <thead>
                          <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th class="goa-table-number-header">Number</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr *ngFor="let i of [0,1,2,3]">
                            <td>
                              <goa-badge type="important" content="Review pending" />
                            </td>
                            <td>Lorem ipsum</td>
                            <td class="goa-table-number-column">1234567890</td>
                            <td>
                              <goa-button type="tertiary">Action</goa-button>
                            </td>
                          </tr>
                        </tbody>
                      </goa-table>
                    </goa-tab>
                    <goa-tab>
                      <div slot="heading">Complete<goa-badge type="information" content="338"></goa-badge></div>
                      <goa-table width="100%">
                        <thead>
                          <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th class="goa-table-number-header">Number</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr *ngFor="let i of [0,1]">
                            <td>
                              <goa-badge type="information" content="Complete" />
                            </td>
                            <td>Lorem Ipsum</td>
                            <td class="goa-table-number-column">1234567890</td>
                            <td>
                              <goa-button type="tertiary">Action</goa-button>
                            </td>
                          </tr>
                        </tbody>
                      </goa-table>
                    </goa-tab>
                  </goa-tabs>
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  const review = [0, 1, 2, 3];
                  const complete = [0, 1];
                  `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoATabs initialTab={2}>
                    <GoATab heading="All">
                      <GoATable width="100%">
                        <thead>
                          <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th className="goa-table-number-header">Number</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {review.map((i) => (
                            <tr key={i}>
                              <td>
                                <GoABadge type="important" content="Review pending" />
                              </td>
                              <td>Lorem Ipsum</td>
                              <td className="goa-table-number-column">1234567890</td>
                              <td>
                                <GoAButton type="tertiary">Action</GoAButton>
                              </td>
                            </tr>
                          ))}
                          {complete.map((i) => (
                            <tr key={i}>
                              <td>
                                <GoABadge type="information" content="Complete" />
                              </td>
                              <td>Lorem Ipsum</td>
                              <td className="goa-table-number-column">1234567890</td>
                              <td>
                                <GoAButton type="tertiary">Action</GoAButton>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </GoATable>
                    </GoATab>
                    <GoATab heading={<>Review pending<GoABadge type="important" content="4"></GoABadge></>}>
                      <GoATable width="100%">
                        <thead>
                          <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th className="goa-table-number-header">Number</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {review.map((i) => (
                            <tr key={i}>
                              <td>
                                <GoABadge type="important" content="Review pending" />
                              </td>
                              <td>Lorem Ipsum</td>
                              <td className="goa-table-number-column">1234567890</td>
                              <td>
                                <GoAButton type="tertiary">Action</GoAButton>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </GoATable>
                    </GoATab>
                    <GoATab heading={<>Complete<GoABadge type="information" content="338"></GoABadge></>}>
                      <GoATable width="100%">
                        <thead>
                          <tr>
                            <th>Status</th>
                            <th>Text</th>
                            <th className="goa-table-number-header">Number</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {complete.map((i) => (
                            <tr key={i}>
                              <td>
                                <GoABadge type="information" content="Complete" />
                              </td>
                              <td>Lorem Ipsum</td>
                              <td className="goa-table-number-column">1234567890</td>
                              <td>
                                <GoAButton type="tertiary">Action</GoAButton>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </GoATable>
                    </GoATab>
                  </GoATabs>
                  `}
              />

              <GoATabs initialTab={2}>
                <GoATab heading="All">
                  <GoATable width="100%">
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Text</th>
                        <th className="goa-table-number-header">Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {review.map((i) => (
                        <tr key={i}>
                          <td>
                            <GoABadge type="important" content="Review pending" />
                          </td>
                          <td>Lorem Ipsum</td>
                          <td className="goa-table-number-column">1234567890</td>
                          <td>
                            <GoAButton type="tertiary">Action</GoAButton>
                          </td>
                        </tr>
                      ))}
                      {complete.map((i) => (
                        <tr key={i}>
                          <td>
                            <GoABadge type="information" content="Complete" />
                          </td>
                          <td>Lorem Ipsum</td>
                          <td className="goa-table-number-column">1234567890</td>
                          <td>
                            <GoAButton type="tertiary">Action</GoAButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </GoATable>
                </GoATab>
                <GoATab heading={<>Review pending<GoABadge type="important" content="4"></GoABadge></>}>
                  <GoATable width="100%">
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Text</th>
                        <th className="goa-table-number-header">Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {review.map((i) => (
                        <tr key={i}>
                          <td>
                            <GoABadge type="important" content="Review pending" />
                          </td>
                          <td>Lorem Ipsum</td>
                          <td className="goa-table-number-column">1234567890</td>
                          <td>
                            <GoAButton type="tertiary">Action</GoAButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </GoATable>
                </GoATab>
                <GoATab heading={<>Complete<GoABadge type="information" content="338"></GoABadge></>}>
                  <GoATable width="100%">
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Text</th>
                        <th className="goa-table-number-header">Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {complete.map((i) => (
                        <tr key={i}>
                          <td>
                            <GoABadge type="information" content="Complete" />
                          </td>
                          <td>Lorem Ipsum</td>
                          <td className="goa-table-number-column">1234567890</td>
                          <td>
                            <GoAButton type="tertiary">Action</GoAButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </GoATable>
                </GoATab>
              </GoATabs>
            </Sandbox>
          </GoATab>

          <GoabTab
            heading={
              <>
                Design guidelines
                <GoabBadge type="information" content="In progress" />
              </>
            }></GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
