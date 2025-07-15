import "./container-card-grid-example.css";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabContainer, GoabGrid } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";

export const ContainerCardGridExample = () => {
  return (
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
          <a href="" className="container-example-3--container-title">
            Waitlist submission
          </a>
          <div className="container-example-3--container-content">
            Enter and maintain information about the households waiting for affordable housing with
            your organization.
          </div>
        </GoabContainer>

        <GoabContainer accent="thin" mb="none">
          <a href="" className="container-example-3--container-title">
            Lodge assistance program
          </a>
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
          <a href="" className="container-example-3--container-title">
            Social Assistance
          </a>
          <div className="container-example-3--container-content">
            Learn about available support programs, apply for financial aid, and access community
            resources.
          </div>
        </GoabContainer>

        <GoabContainer accent="thin" mb="none">
          <a href="" className="container-example-3--container-title">
            Employment Opportunity
          </a>
          <div className="container-example-3--container-content">
            Search for job openings, access career development tools, and receive employment-related
            updates.
          </div>
        </GoabContainer>

        <GoabContainer accent="thin" mb="none">
          <a href="" className="container-example-3--container-title">
            Housing Assistance
          </a>
          <div className="container-example-3--container-content">
            Find affordable housing options, apply for housing subsidies, and report maintenance
            issues seamlessly.
          </div>
        </GoabContainer>
      </GoabGrid>
    </Sandbox>
  );
};
