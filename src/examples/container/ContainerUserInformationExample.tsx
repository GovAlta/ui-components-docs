import "./container-user-information-example.css";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabBlock, GoabButton, GoabContainer, GoabTable } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const ContainerUserInformationExample = () => {
  const {version} = useContext(LanguageVersionContext);

  return (
    <Sandbox fullWidth skipRender>
      {/*CSS Code Snippet*/}
      <CodeSnippet
        lang="css"
        allowCopy={true}
        code={`
            .container-example-1--sub-header {
              color: var(--goa-color-greyscale-700);
              font: var(--goa-typography-body-m);
            }

            .container-example-1--header {
              color: var(--goa-color-greyscale-700);
              font-size: var(--goa-font-size-7);
              font-weight: var(--goa-font-weight-bold);
              line-height: var(--goa-line-height-4);
              margin-bottom: var(--goa-space-s);
            }

            span.container-example-1--contact-label {
              color: var(--goa-color-greyscale-700);
              font: var(--goa-typography-heading-s);
            }

            span.container-example-1--contact-value {
              color: var(--goa-color-greyscale-700);
              font: var(--goa-typography-body-m);
            }
           
            .container-example-1 goa-table tbody.striped tr:nth-child(even) {
              background-color: #F8F8F8;
            }
            .container-example-1 goa-table td.align-right {
              text-align: right;
            }
          `}
      />

      {/*Angular Code Snippet*/}
      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <goa-container>
                <span class="container-example-1--sub-header">Housing Advisor</span>
                <p class="container-example-1--header">Tracy Hero</p>
                <goa-block direction="row" gap="m">
                  <goa-block direction="column" gap="m">
                    <span class="container-example-1--contact-label">Email</span>
                    <span class="container-example-1--contact-label">Phone</span>
                  </goa-block>
                  
                  <goa-block direction="column" gap="m">
                    <span class="container-example-1--contact-value">tracyhero@email.com</span>
                    <span class="container-example-1--contact-value">283-203-4921</span>
                  </goa-block>
                </goa-block>
              </div>
            </goa-container>

            <goa-container type="non-interactive" accent="thick">
              <div slot="title">Upcoming important due dates</div>
              <div slot="actions">
                <goa-button type="tertiary" size="compact" leadingicon="calendar" (_click)="onClick($event)">
                    Add to calendar
                </goa-button>
              </div>
              
              <div class="container-example-1">
                <goa-table width="100%">
                  <tbody class="striped">
                    <tr>
                      <td>Business plan submission</td>
                      <td class="align-right">June 30, 2024</td>
                    </tr>
                    <tr>
                      <td>Annual review</td>
                      <td class="align-right">October 3, 2024</td>
                    </tr>
                    <tr>
                      <td>Application submission</td>
                      <td class="align-right">December 20, 2024</td>
                    </tr>
                    <tr>
                      <td>Application review</td>
                      <td class="align-right">January 3, 2025</td>
                    </tr>
                  </tbody>
                </goa-table>
              </div>
            </goa-container>
          `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            export class SomeComponent {
              onClick() {
                console.log("clicked!");
              }
            }
          `}
        />
      )}
      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <goab-container>
              <span class="container-example-1--sub-header">Housing Advisor</span>
              <p class="container-example-1--header">Tracy Hero</p>
              <goab-block direction="row" gap="m">
                <goab-block direction="column" gap="m">
                  <span class="container-example-1--contact-label">Email</span>
                  <span class="container-example-1--contact-label">Phone</span>
                </goab-block>

                <goab-block direction="column" gap="m">
                  <span class="container-example-1--contact-value">tracyhero&#64;email.com</span>
                  <span class="container-example-1--contact-value">283-203-4921</span>
                </goab-block>
              </goab-block>
            </goab-container>
            
            <goab-container type="non-interactive" accent="thick">
              <div slot="title">Upcoming important due dates</div>
              <div slot="actions">
                <goab-button type="tertiary" size="compact" leadingIcon="calendar" (onClick)="onClick()">
                  Add to calendar
                </goab-button>
              </div>

            <div class="container-example-1">
              <goab-table width="100%">
                <tbody class="striped">
                  <tr>
                    <td>Business plan submission</td>
                    <td class="align-right">June 30, 2024</td>
                  </tr>
                  <tr>
                    <td>Annual review</td>
                    <td class="align-right">October 3, 2024</td>
                  </tr>
                  <tr>
                    <td>Application submission</td>
                    <td class="align-right">December 20, 2024</td>
                  </tr>
                  <tr>
                    <td>Application review</td>
                    <td class="align-right">January 3, 2025</td>
                  </tr>
                </tbody>
              </goab-table>
            </div>
          </goab-container>
          `}
        />
      )}

      {/*React*/}
      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
          const actions = (
            <GoAButton type="tertiary" size="compact" leadingIcon="calendar" onClick={() => {/* do nothing */}}>
                Add to calendar
            </GoAButton>);
          `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
          const actions = (
            <GoabButton type="tertiary" size="compact" leadingIcon="calendar" onClick={() => {/* do nothing */}}>
                Add to calendar
            </GoabButton>);
          `}
        />
      )}

      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
          <GoAContainer>
            <span className="container-example-1--sub-header">Housing Advisor</span>
            <p className="container-example-1--header">Tracy Hero</p>
            <GoABlock direction="row" gap="m">
              <GoABlock direction="column" gap="m">
                <span className="container-example-1--contact-label">Email</span>
                <span className="container-example-1--contact-label">Phone</span>
              </GoABlock>

              <GoABlock direction="column" gap="m">
                <span className="container-example-1--contact-value">tracyhero@email.com</span>
                <span className="container-example-1--contact-value">283-203-4921</span>
              </GoABlock>
            </GoABlock>
          </GoAContainer>

          <GoAContainer
            type="non-interactive"
            accent="thick"
            heading="Upcoming important due dates"
            actions={actions}>
            <div className="container-example-1">
              <GoATable width="100%">
                <tbody className="striped">
                  <tr>
                    <td>Business plan submission</td>
                    <td className="align-right">June 30, 2024</td>
                  </tr>
                  <tr>
                    <td>Annual review</td>
                    <td className="align-right">October 3, 2024</td>
                  </tr>
                  <tr>
                    <td>Application submission</td>
                    <td className="align-right">December 20, 2024</td>
                  </tr>
                  <tr>
                    <td>Application review</td>
                    <td className="align-right">January 3, 2025</td>
                  </tr>
                </tbody>
              </GoATable>
            </div>
          </GoAContainer>
          `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
          <GoabContainer>
          <span className="container-example-1--sub-header">Housing Advisor</span>
          <p className="container-example-1--header">Tracy Hero</p>
          <GoabBlock direction="row" gap="m">
            <GoabBlock direction="column" gap="m">
              <span className="container-example-1--contact-label">Email</span>
              <span className="container-example-1--contact-label">Phone</span>
            </GoabBlock>

            <GoabBlock direction="column" gap="m">
              <span className="container-example-1--contact-value">tracyhero@email.com</span>
              <span className="container-example-1--contact-value">283-203-4921</span>
            </GoabBlock>
          </GoabBlock>
        </GoabContainer>

        <GoabContainer
          type="non-interactive"
          accent="thick"
          heading="Upcoming important due dates"
          actions={actions}>
          <div className="container-example-1">
            <GoabTable width="100%">
              <tbody className="striped">
                <tr>
                  <td>Business plan submission</td>
                  <td className="align-right">June 30, 2024</td>
                </tr>
                <tr>
                  <td>Annual review</td>
                  <td className="align-right">October 3, 2024</td>
                </tr>
                <tr>
                  <td>Application submission</td>
                  <td className="align-right">December 20, 2024</td>
                </tr>
                <tr>
                  <td>Application review</td>
                  <td className="align-right">January 3, 2025</td>
                </tr>
              </tbody>
            </GoabTable>
          </div>
        </GoabContainer>
          `}
        />
      )}
      {/*Code Block*/}
      <GoabContainer>
        <span className="container-example-1--sub-header">Housing Advisor</span>
        <p className="container-example-1--header">Tracy Hero</p>
        <GoabBlock direction="row" gap="m">
          <GoabBlock direction="column" gap="m">
            <span className="container-example-1--contact-label">Email</span>
            <span className="container-example-1--contact-label">Phone</span>
          </GoabBlock>

          <GoabBlock direction="column" gap="m">
            <span className="container-example-1--contact-value">tracyhero@email.com</span>
            <span className="container-example-1--contact-value">283-203-4921</span>
          </GoabBlock>
        </GoabBlock>
      </GoabContainer>

      <GoabContainer
        type="non-interactive"
        accent="thick"
        heading="Upcoming important due dates"
        actions={
          <GoabButton type="tertiary" size="compact" leadingIcon="calendar" onClick={() => {/* do nothing */}}>
            Add to calendar
          </GoabButton>
        }>
        <div className="container-example-1">
          <GoabTable width="100%">
            <tbody className="striped">
            <tr>
              <td>Business plan submission</td>
              <td className="align-right">June 30, 2024</td>
            </tr>
            <tr>
              <td>Annual review</td>
              <td className="align-right">October 3, 2024</td>
            </tr>
            <tr>
              <td>Application submission</td>
              <td className="align-right">December 20, 2024</td>
            </tr>
            <tr>
              <td>Application review</td>
              <td className="align-right">January 3, 2025</td>
            </tr>
            </tbody>
          </GoabTable>
        </div>
      </GoabContainer>
    </Sandbox>
  )
}
