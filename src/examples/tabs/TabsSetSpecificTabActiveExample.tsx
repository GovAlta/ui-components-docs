import { GoabBadge, GoabButton, GoabContainer, GoabTab, GoabTable, GoabTabs } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const TabsSetSpecificTabActiveExample = () => {
  const review = [0, 1, 2, 3];
  const complete = [0, 1];
  const {version} = useContext(LanguageVersionContext);

  return (
    <>
      <GoabContainer mt="none" mb="none">
        <div style={{ padding: "40px" }}>
            <GoabTabs initialTab={1}>
              <GoabTab heading="All">
                <GoabTable width="100%">
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
                          <GoabBadge type="important" content="Review pending" />
                        </td>
                        <td>Lorem Ipsum</td>
                        <td className="goa-table-number-column">1234567890</td>
                        <td>
                          <GoabButton type="tertiary">Action</GoabButton>
                        </td>
                      </tr>
                    ))}
                    {complete.map((i) => (
                      <tr key={i}>
                        <td>
                          <GoabBadge type="information" content="Complete" />
                        </td>
                        <td>Lorem Ipsum</td>
                        <td className="goa-table-number-column">1234567890</td>
                        <td>
                          <GoabButton type="tertiary">Action</GoabButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </GoabTable>
              </GoabTab>
              <GoabTab heading={<>Review pending<GoabBadge type="important" content="4"></GoabBadge></>}>
                <GoabTable width="100%">
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
                          <GoabBadge type="important" content="Review pending" />
                        </td>
                        <td>Lorem Ipsum</td>
                        <td className="goa-table-number-column">1234567890</td>
                        <td>
                          <GoabButton type="tertiary">Action</GoabButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </GoabTable>
              </GoabTab>
              <GoabTab heading={<>Complete<GoabBadge type="information" content="338"></GoabBadge></>}>
                <GoabTable width="100%">
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
                          <GoabBadge type="information" content="Complete" />
                        </td>
                        <td>Lorem Ipsum</td>
                        <td className="goa-table-number-column">1234567890</td>
                        <td>
                          <GoabButton type="tertiary">Action</GoabButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </GoabTable>
              </GoabTab>
            </GoabTabs>
        </div>
      </GoabContainer>

        {/*Angular code*/}
        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <goa-tabs initialTab={1}>
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
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <goab-tabs [initialTab]="1">
              <goab-tab heading="All">
                <goab-table width="100%">
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
                        <goab-badge type="important" content="Review pending" />
                      </td>
                      <td>Lorem ipsum</td>
                      <td class="goa-table-number-column">1234567890</td>
                      <td>
                        <goab-button type="tertiary">Action</goab-button>
                      </td>
                    </tr>
                    <tr *ngFor="let i of [0,1]">
                      <td>
                        <goab-badge type="information" content="Complete" />
                      </td>
                      <td>Lorem Ipsum</td>
                      <td class="goa-table-number-column">1234567890</td>
                      <td>
                        <goab-button type="tertiary">Action</goab-button>
                      </td>
                    </tr>
                  </tbody>
                </goab-table>
              </goab-tab>
              <goab-tab [heading]="reviewPending">
                <ng-template #reviewPending>Review pending<goab-badge type="important" content="4"></goab-badge></ng-template>
                <goab-table width="100%">
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
                        <goab-badge type="important" content="Review pending" />
                      </td>
                      <td>Lorem ipsum</td>
                      <td class="goa-table-number-column">1234567890</td>
                      <td>
                        <goab-button type="tertiary">Action</goab-button>
                      </td>
                    </tr>
                  </tbody>
                </goab-table>
              </goab-tab>
              <goab-tab [heading]="complete">
                <ng-template #complete>Complete<goab-badge type="information" content="338"></goab-badge></ng-template>
                <goab-table width="100%">
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
                        <goab-badge type="information" content="Complete" />
                      </td>
                      <td>Lorem Ipsum</td>
                      <td class="goa-table-number-column">1234567890</td>
                      <td>
                        <goab-button type="tertiary">Action</goab-button>
                      </td>
                    </tr>
                  </tbody>
                </goab-table>
              </goab-tab>
            </goab-tabs>
          `}
        />}
        {/*React code*/}
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            const review = [0, 1, 2, 3];
            const complete = [0, 1];
            `}
        />

        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <GoATabs initialTab={1}>
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
        />}
        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <GoabTabs initialTab={1}>
              <GoabTab heading="All">
                <GoabTable width="100%">
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
                          <GoabBadge type="important" content="Review pending" />
                        </td>
                        <td>Lorem Ipsum</td>
                        <td className="goa-table-number-column">1234567890</td>
                        <td>
                          <GoabButton type="tertiary">Action</GoabButton>
                        </td>
                      </tr>
                    ))}
                    {complete.map((i) => (
                      <tr key={i}>
                        <td>
                          <GoabBadge type="information" content="Complete" />
                        </td>
                        <td>Lorem Ipsum</td>
                        <td className="goa-table-number-column">1234567890</td>
                        <td>
                          <GoabButton type="tertiary">Action</GoabButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </GoabTable>
              </GoabTab>
              <GoabTab heading={<>Review pending<GoabBadge type="important" content="4"></GoabBadge></>}>
                <GoabTable width="100%">
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
                          <GoabBadge type="important" content="Review pending" />
                        </td>
                        <td>Lorem Ipsum</td>
                        <td className="goa-table-number-column">1234567890</td>
                        <td>
                          <GoabButton type="tertiary">Action</GoabButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </GoabTable>
              </GoabTab>
              <GoabTab heading={<>Complete<GoabBadge type="information" content="338"></GoabBadge></>}>
                <GoabTable width="100%">
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
                          <GoabBadge type="information" content="Complete" />
                        </td>
                        <td>Lorem Ipsum</td>
                        <td className="goa-table-number-column">1234567890</td>
                        <td>
                          <GoabButton type="tertiary">Action</GoabButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </GoabTable>
              </GoabTab>
            </GoabTabs>
            `}
        />}
    </>
  )
}
