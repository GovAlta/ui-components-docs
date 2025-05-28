import "./container/container-case-files-example.css";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabBadge, GoabBlock, GoabButton, GoabContainer } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";

export const CardViewOfCaseFiles = () => {
  return (
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
  )
}

export default CardViewOfCaseFiles;
