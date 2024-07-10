import { GoACallout } from "@abgov/react-components";
import { Link } from "react-router-dom";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function DevelopersVSCodePage() {
  return (
    <ComponentContent>
      <h1>Developers</h1>
      <h2>Bug verification process</h2>
      <p>
      When encountering an issue with our design system components, please follow the steps below to 
      isolate potential problems with the design system resources used in your application. This process will ensure that 
      issues are efficiently investigated, leading to quicker turnaround times on fixes and less back and forth.
      </p>

    <GoACallout type="information" heading="This process is for angular or react users only">
    If you are not using Angular or React, please be advised our design system offers primary support for only 
    Angular and React. You may use the Web Components directly or the Design Tokens if you are using a different front-end framework. 
    </GoACallout>

    <h2>1. Version check</h2>
      <p>
      Are you using the latest version of <a href="https://www.npmjs.com/package/@abgov/web-components" target="_blank"> Web components </a> 
      and your framework of choice?
      </p>
      <p>
        <a href="https://www.npmjs.com/package/@abgov/angular-components" target="_blank"> Angular UI components </a>
      </p>
      <p>
        <a href="https://www.npmjs.com/package/@abgov/react-components" target="_blank"> React UI components </a>
      </p>
      <p>
      If No, please upgrade to the latest version and test again.
      </p>
      <p>
      If Yes, proceed to the next step.
      </p>
      <h2>2. Quickly test bugs with our product templates</h2>
      <h3>
      Use Angular or React product templates from the design system to test:
      </h3>
      <p>
      The DS templates are Github templates made with the design system components that can be used  to test and verify your bug in isolation. 
      These can also be used as a starting point for teams to build products.
      </p>
      <p>
      If you haven't tested with a template app, download and use one of our provided template applications to replicate the issue.
      </p>
      <p>
        <a href="https://github.com/GovAlta/ui-components-angular-template" target="_blank"> Test with the Angular template </a>
      </p>
      <p>
        <a href="https://github.com/GovAlta/ui-components-react-template" target="_blank"> Test with the React template </a>
      </p>
      <h3>Recreate the issue (Setup your test with the least amount of elements</h3>
      <ul>
        <li>Set up your test environment with the minimum necessary elements.</li>
        <li>Reduce the backend code to the minimum amount needed for the example to function.</li>
        <li>Include only the components that are causing the issue.</li>
        <li>Verify that the initial issue you observed can be replicated.</li>
        <li>If the issue is replicable, proceed to the sharing and reporting step.</li>
      </ul>

      <h2>3. Sharing and reporting</h2>
      <h3>
      Share link to template app with design system team in #design-system-support
      </h3>
      <p>
      Provide the design system team with a link to your repository where we can quickly view and replicate the issue.
      </p>
      
    </ComponentContent>
  );
}
