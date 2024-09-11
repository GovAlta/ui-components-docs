import {
  GoabBadge,
  GoabBlock,
  GoabButton,
  GoabContainer, GoabDropdown, GoabDropdownItem, GoabFormItem,
  GoabGrid, GoabRadioGroup, GoabRadioItem,
  GoabTable, GoabTextarea
} from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import "./container-example.css";

export default function ContainerExamples() {
  return (
    <>
      {/*Container examples*/}
      <h2 id="component-examples" className="hidden" aria-hidden="true">Examples</h2>
      <h3 id="component-example-1">User information</h3>
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

        {/*React*/}
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
          const actions = (
            <GoAButton type="tertiary" size="compact" leadingIcon="calendar" onClick={() => {}}>
                Add to calendar
            </GoAButton>);
          `}
        />

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
            <GoabButton type="tertiary" size="compact" leadingIcon="calendar" onClick={() => {}}>
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

      <h3 id="component-example-2">Card view of case files</h3>
      <Sandbox fullWidth>
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            .container-example-2--container {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            
            span.container-example-2--body-text {
              font: var(--goa-typography-body-s);
            }
            
            .container-example-2--right-content {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            
            @media screen and (max-width: 623px) {
              .container-example-2--container {
                flex-direction: column;
                justify-content: center;
                align-items: stretch;
              }
              .container-example-2--right-content {
                display:block;
                margin-top: var(--goa-space-xs);
              }
            }
          `}
        />

        <GoabContainer mt="l">
          <div className="container-example-2--container">
            <GoabBlock direction="column" gap="2xs" alignment="start">
              <strong>Fiscal year: 2021/2022</strong>
              <span className="container-example-2--body-text">Submitted: April 23, 2023</span>
            </GoabBlock>
            <div className="container-example-2--right-content">
              <GoabBlock direction="row" alignment="center" gap="l">
                <GoabBadge type="midtone" content="Not started"></GoabBadge>
                <GoabButton type="tertiary" size="compact">
                  Edit
                </GoabButton>
              </GoabBlock>
            </div>
          </div>
        </GoabContainer>

        <GoabContainer>
          <div className="container-example-2--container">
            <GoabBlock direction="column" gap="2xs" alignment="start">
              <strong>Fiscal year: 2020/2021</strong>
              <span className="container-example-2--body-text">Submitted: April 9, 2022</span>
            </GoabBlock>
            <div className="container-example-2--right-content">
              <GoabBlock direction="row" alignment="center" gap="l">
                <GoabBadge type="important" content="Information needed"></GoabBadge>
                <GoabButton type="tertiary" size="compact">
                  View
                </GoabButton>
              </GoabBlock>
            </div>
          </div>
        </GoabContainer>

        <GoabContainer>
          <div className="container-example-2--container">
            <GoabBlock direction="column" gap="2xs" alignment="start">
              <strong>Fiscal year: 2019/2020</strong>
              <span className="container-example-2--body-text">Submitted: April 14, 2021</span>
            </GoabBlock>
            <div className="container-example-2--right-content">
              <GoabBlock direction="row" alignment="center" gap="l">
                <GoabBadge type="success" content="Approved"></GoabBadge>
                <GoabButton type="tertiary" size="compact">
                  View
                </GoabButton>
              </GoabBlock>
            </div>
          </div>
        </GoabContainer>
      </Sandbox>

      <h3 id="component-example-3">Card grid that links to different sections</h3>
      <Sandbox fullWidth>
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            .container-example-3--container-title {
              color: var(--goa-color-interactive-default);
              font: var(--goa-typography-heading-m);
              text-decoration-line: underline;
              margin-top:0;
              margin-bottom: var(--goa-space-m);
            }
            .container-example-3--container-content{
              font: var(--goa-typography-body-m);
            }
          `}
        />

        <GoabGrid gap="xl" minChildWidth="320px">
          <GoabContainer accent="thin" mb="none">
            <a href="" className="container-example-3--container-title">Waitlist submission</a>
            <div className="container-example-3--container-content">
              Enter and maintain information about the households waiting for affordable housing
              with your organization.
            </div>
          </GoabContainer>

          <GoabContainer accent="thin" mb="none">
            <a href="" className="container-example-3--container-title">Lodge assistance program</a>
            <div className="container-example-3--container-content">
              Keep track of the individuals who are placed in lodges and may qualify for the Lodge
              Assistance Program subsidy.
            </div>
          </GoabContainer>

          <GoabContainer accent="thin" mb="none">
            <a className="container-example-3--container-title">Education Support</a>
            <div className="container-example-3--container-content">
              Explore educational resources, enroll in courses, and track your academic progress
              effortlessly.
            </div>
          </GoabContainer>

          <GoabContainer accent="thin" mb="none">
            <a href="" className="container-example-3--container-title">Social Assistance</a>
            <div className="container-example-3--container-content">
              Learn about available support programs, apply for financial aid, and access community
              resources.
            </div>
          </GoabContainer>

          <GoabContainer accent="thin" mb="none">
            <a href=""  className="container-example-3--container-title">Employment Opportunity</a>
            <div className="container-example-3--container-content">
              Search for job openings, access career development tools, and receive
              employment-related updates.
            </div>
          </GoabContainer>

          <GoabContainer accent="thin" mb="none">
            <a href="" className="container-example-3--container-title">Housing Assistance</a>
            <div className="container-example-3--container-content">
              Find affordable housing options, apply for housing subsidies, and report maintenance
              issues seamlessly.
            </div>
          </GoabContainer>
        </GoabGrid>
      </Sandbox>

      <h3 id="example-4">Review and action</h3>
      <Sandbox fullWidth flags={["reactive"]}>

        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            h3.container-example-4--h3 {
              margin-bottom: var(--goa-space-m);
            }
            label.container-example-4--label {
              font: var(--goa-typography-body-s);
              color: var(--goa-color-text-secondary);
            }
            .container-example-4--container-content {
              font: var(--goa-typography-body-m);
            }
            p.container-example-4--container-content {
              margin-bottom: 0;
            }

            h5.container-example-4--h5 {
              font: var(--goa-typography-body-m);
              color: var(--goa-color-text-secondary);
              margin-top: var(--goa-space-m);
              margin-bottom: var(--goa-space-m);
            }

            h6.container-example-4--h6 {
              font: var(--goa-typography-heading-s);
              margin-top:0;
              margin-bottom: 0;
            }
          `}
        />

        <GoabGrid minChildWidth="315px">
          <GoabContainer accent="thin" type="non-interactive">
            <h3 className="container-example-4--h3">Appearance details</h3>
            <GoabGrid minChildWidth="40%" gap="m">
              <GoabBlock direction="column" gap="xs">
                <label className="container-example-4--label">Accused name</label>
                <span className="container-example-4--container-content">Doe, John Scott</span>
              </GoabBlock>

              <GoabBlock direction="column" gap="xs">
                <label className="container-example-4--label">Date of birth</label>
                <span className="container-example-4--container-content">Mar 14, 2021</span>
              </GoabBlock>

              <GoabBlock direction="column" gap="xs">
                <label className="container-example-4--label">Court location</label>
                <span className="container-example-4--container-content">Calgary</span>
              </GoabBlock>

              <GoabBlock direction="column" gap="xs">
                <label className="container-example-4--label">Upcoming appearance date(s)</label>
                <span className="container-example-4--container-content">Sep 20, 2021</span>
              </GoabBlock>
            </GoabGrid>

            <h5 className="container-example-4--h5">Docket number(s) $ charges</h5>
            <GoabContainer type="non-interactive">
              <h6 className="container-example-4--h6">1) 12345678</h6>
              <p className="container-example-4--container-content">CC 334(1) - Theft under $5000</p>
              <p className="container-example-4--container-content">CC 268(1) - Aggravated assult</p>
            </GoabContainer>

            <GoabContainer type="non-interactive">
              <h6 className="container-example-4--h6">2) 12345678</h6>
              <p className="container-example-4--container-content">CC 334(1) - Theft under $5000</p>
              <p className="container-example-4--container-content">CC 268(1) - Aggravated assult</p>
            </GoabContainer>

            <GoabContainer type="non-interactive">
              <h6 className="container-example-4--h6">3) 12345678</h6>
              <p className="container-example-4--container-content">
                CC 334(1) - Theft under $5000
              </p>
              <p className="container-example-4--container-content">
                CC 268(1) - Aggravated assult
              </p>
            </GoabContainer>
          </GoabContainer>
          <GoabContainer accent="thin">
            <h3 className="container-example-4--h3">Adjournment request</h3>
            <p className="container-example-4--container-content">Keep track of the individuals who are placed in lodges and may qualify for the Lodge Assistance Program subsidy.</p>

            <GoabFormItem label="Case history and new request" mt="l">
              <GoabRadioGroup name="case" onChange={() => {}}>
                <GoabRadioItem value="grant" label="Grant"></GoabRadioItem>
                <GoabRadioItem value="deny" label="Deny"></GoabRadioItem>
              </GoabRadioGroup>
            </GoabFormItem>

            <GoabFormItem label="Reason to deny">
              <GoabDropdown name="reason" onChange={() => {}}>
                <GoabDropdownItem value="1" label="Incomplete Application"></GoabDropdownItem>
                <GoabDropdownItem value="2" label="Eligibility Criteria Not Met"></GoabDropdownItem>
                <GoabDropdownItem value="3" label="Documentation Verification Failure"></GoabDropdownItem>
              </GoabDropdown>
            </GoabFormItem>

            <GoabFormItem label="Message" mt="l">
              <GoabTextarea name="message" rows={5} value="" onChange={() => {}}/>
            </GoabFormItem>

            <GoabButton mt="xl" onClick={()=> {}}>Confirm</GoabButton>
          </GoabContainer>
        </GoabGrid>
      </Sandbox>
    </>
  );
}
