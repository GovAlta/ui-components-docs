import { Sandbox } from "@components/sandbox";
import {
  GoabButton,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import "./start-page-example.css";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
export function StartPageExamples() {
  const {version} = useContext(LanguageVersionContext);
  return (
    <div className="start-page-example">
      <div className="component-example-header">
        <h3 id="component-example-1">Start page from Alberta.ca</h3>
        <a
          href="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4106&mode=design"
          target="_blank"
          rel="noreferrer">
          View in Figma
        </a>
      </div>
      <Sandbox fullWidth allow={["h1", "h2", "h3", "p", "ul", "strong"]} skipRender>
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
                  h1.page-title {
                    margin-bottom: var(--goa-space-l);
                  }
                  h2 {
                    margin-top: var(--goa-space-xl);
                    margin-bottom: 0;
                  }
                  h2 + p {
                    margin-top: var(--goa-space-l);
                  }
                `}
        />

        {/*Angular code*/}

        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <h1 class="page-title">
              Name of service
            </h1>
            <h3>
              A short overview of the service. This is a couple sentences that helps the user understand what the service is.
            </h3>
            <p>
              Use this service to apply for [service]. You can use this service to:
            </p>
            <ul>
              <li>see of you or a family member is eligible for [service]</li>
              <li>create and submit an application for [service]</li>
              <li>continue an application for [service] that you already started</li>
            </ul>
            <h2>Before you begin</h2>
            <p>The application form should take about 20 minutes to complete.</p>
            <p><strong>In order to complete the application you will need:</strong></p>
            <ul>
              <li>government issued ID for the person applying</li>
            </ul>
            <goa-button mt="m" mb="xl" type="start" (_click)="onClick($event)">
              Get started
            </goa-button>
            <h2>Other information about the service</h2>
            <p>This section contains supplementary details about the service, including descriptions of less common scenarios, exceptions, and additional resources available. It provides context and additional insights that may be relevant to your specific circumstances or interests, helping you understand the full scope and utility of the service offered.</p>
            <h2>Support</h2>
            <p><span>For assistance, email us at &nbsp;</span><a href="mailto:help@gov.ab.ca">help&#64;gov.ab.ca</a></p>
        `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <h1 class="page-title">
              Name of service
            </h1>
            <h3>
              A short overview of the service. This is a couple sentences that helps the user understand what the service is.
            </h3>
            <p>
              Use this service to apply for [service]. You can use this service to:
            </p>
            <ul>
              <li>see of you or a family member is eligible for [service]</li>
              <li>create and submit an application for [service]</li>
              <li>continue an application for [service] that you already started</li>
            </ul>
            <h2>Before you begin</h2>
            <p>The application form should take about 20 minutes to complete.</p>
            <p><strong>In order to complete the application you will need:</strong></p>
            <ul>
              <li>government issued ID for the person applying</li>
            </ul>
            <goab-button mt="m" mb="xl" type="start" (onClick)="onClick()">
              Get started
            </goab-button>
            <h2>Other information about the service</h2>
            <p>This section contains supplementary details about the service, including descriptions of less common scenarios, exceptions, and additional resources available. It provides context and additional insights that may be relevant to your specific circumstances or interests, helping you understand the full scope and utility of the service offered.</p>
            <h2>Support</h2>
            <p><span>For assistance, email us at &nbsp;</span><a href="mailto:help@gov.ab.ca">help&#64;gov.ab.ca</a></p>
        `}
        />}

        {/*React code*/}

        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <h1 className="page-title">
              Name of service
            </h1>
            <h3>
              A short overview of the service. This is a couple sentences that helps the user understand what the service is.
            </h3>
            <p>Use this service to apply for [service]. You can use this service to:</p>
            <ul>
              <li>see of you or a family member is eligible for [service]</li>
              <li>create and submit an application for [service]</li>
              <li>continue an application for [service] that you already started</li>
            </ul>
            <h2>Before you begin</h2>
            <p>The application form should take about 20 minutes to complete.</p>
            <p><strong>In order to complete the application you will need:</strong></p>
            <ul>
              <li>government issued ID for the person applying</li>
            </ul>
            <GoAButton mt="m" mb="xl" type="start" onClick={onClick}>
              Get started
            </GoAButton>
            <h2>
              Other information about the service
            </h2>
            <p>
              This section contains supplementary details about the service, including descriptions of less common scenarios, exceptions, and additional resources available. It provides context and additional insights that may be relevant to your specific circumstances or interests, helping you understand the full scope and utility of the service offered.
            </p>
            <h2>Support</h2>
            <p><span>For assistance, email us at &nbsp;</span><a href="mailto:help@gov.ab.ca">help@gov.ab.ca</a></p>
          `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <h1 className="page-title">
              Name of service
            </h1>
            <h3>
              A short overview of the service. This is a couple sentences that helps the user understand what the service is.
            </h3>
            <p>Use this service to apply for [service]. You can use this service to:</p>
            <ul>
              <li>see of you or a family member is eligible for [service]</li>
              <li>create and submit an application for [service]</li>
              <li>continue an application for [service] that you already started</li>
            </ul>
            <h2>Before you begin</h2>
            <p>The application form should take about 20 minutes to complete.</p>
            <p><strong>In order to complete the application you will need:</strong></p>
            <ul>
              <li>government issued ID for the person applying</li>
            </ul>
            <GoabButton mt="m" mb="xl" type="start" onClick={onClick}>
              Get started
            </GoabButton>
            <h2>
              Other information about the service
            </h2>
            <p>
              This section contains supplementary details about the service, including descriptions of less common scenarios, exceptions, and additional resources available. It provides context and additional insights that may be relevant to your specific circumstances or interests, helping you understand the full scope and utility of the service offered.
            </p>
            <h2>Support</h2>
            <p><span>For assistance, email us at &nbsp;</span><a href="mailto:help@gov.ab.ca">help@gov.ab.ca</a></p>
          `}
        />}

        <h1 className="page-title">Name of service</h1>
        <h3>
          A short overview of the service. This is a couple sentences that helps the user understand
          what the service is.
        </h3>
        <p>Use this service to apply for [service]. You can use this service to:</p>
        <ul>
          <li>see of you or a family member is eligible for [service]</li>
          <li>create and submit an application for [service]</li>
          <li>continue an application for [service] that you already started</li>
        </ul>

        <h2>Before you begin</h2>
        <p>The application form should take about 20 minutes to complete.</p>
        <p>
          <strong>In order to complete the application you will need:</strong>
        </p>
        <ul>
          <li>government issued ID for the person applying</li>
        </ul>
        <GoabButton mt="m" mb="xl" type="start" onClick={() => {}}>
          Get started
        </GoabButton>

        <h2>Other information about the service</h2>
        <p>
          This section contains supplementary details about the service, including descriptions of
          less common scenarios, exceptions, and additional resources available. It provides context
          and additional insights that may be relevant to your specific circumstances or interests,
          helping you understand the full scope and utility of the service offered.
        </p>

        <h2>Support</h2>
        <p>
          <span>For assistance, email us at &nbsp;</span><a href="mailto:help@gov.ab.ca">help@gov.ab.ca</a>
        </p>
      </Sandbox>
    </div>
  );
}
