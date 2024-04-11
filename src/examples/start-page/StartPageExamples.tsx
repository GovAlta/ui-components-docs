import { Sandbox } from "@components/sandbox";
import {
  GoABlock,
  GoAButton,
} from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import "./start-page-example.css";
export function StartPageExamples() {

  return (
    <div className="start-page-example">
      <h3 id="component-example-1">Start page from Alberta</h3>
      <Sandbox fullWidth allow={["Browser"]}>
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
                  .page-header h1 {
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
        <GoABlock direction="column" gap="none">
          <div className="page-header">
            <h1>Name of service</h1>
            <h3>
              1-3 sentence overview gravida amet habitant quam semper rhoncus vitae vulputate eu.
            </h3>
          </div>
          <p>
            Longer and richer overview with more information. Egestas egestas enim cras pretium
            nulla mattis consectetur. Ornare varius lacus mauris tellus egestas hendrerit. Purus ac
            ullamcorper enim sodales mauris elit aenean. Donec a justo lacinia ultrices praesent
            eget.
            <br />
            Quisque sollicitudin risus pretium condimentum pharetra malesuada. Tincidunt lacus
            nullam tincidunt leo neque vel. Habitant nunc libero dictum sit lacus dolor sem at eget.
          </p>
          <h2>Before you begin</h2>
          <p>
            Longer and richer overview with more information. Egestas egestas enim cras pretium
            nulla mattis consectetur.
          </p>
          <p>
            Quisque sollicitudin risus pretium condimentum pharetra malesuada. Tincidunt lacus
            nullam tincidunt leo neque vel. Habitant nunc libero dictum sit lacus.
          </p>

          <GoAButton mt="m" mb="xl" type="start" onClick={() => {}}>
            Get started
          </GoAButton>

          <h2>Other information about the service</h2>
          <p>
            Longer and richer overview with more information. Egestas egestas enim cras pretium
            nulla mattis consectetur. Ornare varius lacus mauris tellus egestas hendrerit. Purus ac
            ullamcorper enim sodales mauris elit aenean. Donec a justo lacinia ultrices praesent
            eget.
          </p>
          <p>
            Quisque sollicitudin risus pretium condimentum pharetra malesuada. Tincidunt lacus
            nullam tincidunt leo neque vel. Habitant nunc libero dictum sit lacus dolor sem at eget.
          </p>

          <h2>Support</h2>
          <p>
            For assistance, email us at <a href="mailto:help@gov.ab.ca">help@gov.ab.ca</a>
          </p>
        </GoABlock>
      </Sandbox>
    </div>
  );
}
