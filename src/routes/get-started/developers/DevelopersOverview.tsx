import "./Developers.css";
import React from "react";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoAIcon } from "@abgov/react-components";

export const DevelopersOverview: React.FC = () => {
  return (
    <>
      <div className="developers-overview-page">
        <h1>Developers</h1>
        <h3>
          As a developer, you can consume the design system using tokens,
          components, templates, and the demo application.
        </h3>
        <h2>Overview</h2>
        <p>
          The DDD Design System is built with Web Components. Web Components are
          technology agnostic. You can choose various front-end frameworks, like
          Angular, React, or Vue, to use with our web components. All components
          include sample HTML and only use JavaScript when necessary.
        </p>
        <p>The design system consists of:</p>
        <ul>
          <a href="#designTokenIntro">
            <li>Design tokens</li>
          </a>
          <a href="#componentsIntro">
            <li>Components</li>
          </a>
          <a href="#productTemplatesIntro">
            <li>Product templates</li>
          </a>
        </ul>

        <p>
          Designers also have access to the same resources in Figma. To begin
          with, they should utilize the components from the design system for
          common elements of the service. This will save you from having to
          create everything from scratch.
        </p>
        <p>
          These design system components have all been designed and coded to
          meet a{" "}
          <a
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
            target="_blank"
          >
            WCAG 2.1 accessibility standard.
          </a>
        </p>
        <h3 id="designTokenIntro">Design tokens</h3>
        <p>
          You can access the <a href="/design-tokens">design tokens</a> as an
          NPM package here:{" "}
          <a
            href="https://www.npmjs.com/package/@abgov/design-tokens"
            target="_blank"
          >
            npm: @abgov/design-tokens.
          </a>{" "}
          Incorporate the SCSS or CSS file into your projects and replace
          hard-coded values with the token variables from the design system.
        </p>
        <p>
          Your designers can use and reference these design tokens in their
          tools to hand off their designs to you.
        </p>
        <h3 id="componentsIntro">Components</h3>
        <p>
          Components are reusable parts of the user interface that have been
          made to support a variety of applications. You can use individual
          components in many different patterns and contexts. Our components are
          available in{" "}
          <a
            href="https://www.npmjs.com/package/@abgov/angular-components"
            target="_blank"
          >
            Angular,
          </a>{" "}
          <a
            href="https://www.npmjs.com/package/@abgov/react-components"
            target="_blank"
          >
            {" "}
            React,
          </a>{" "}
          and as{" "}
          <a
            href="https://www.npmjs.com/package/@abgov/web-components"
            target="_blank"
          >
            web components.
          </a>
        </p>
        <a href="/get-started/developers/technologies">
          Read more about design system technologies
        </a>
        <h4>Visual Studio Code support</h4>
        <p>
          In order to use VS Code's{" "}
          <a
            href="https://github.com/microsoft/vscode-custom-data"
            target="_blank"
          >
            HTML/CSS Custom Data
          </a>{" "}
          support to enhance GoA Web Components HTML editing experience, include
          our html custom data setting found in.vscode/settings.json:
        </p>
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                    {
                        "html.customData": [
                            "./node_modules/@abgov/web-components/html.html-data.json"
                        ]
                    }
                    `}
        ></CodeSnippet>
        <h3 id="productTemplatesIntro">Product templates</h3>
        <p>
          To help get teams up and running sooner, this product template has
          been created for teams to quickly use the ui-components and provide a
          starting point for building DDD products. The product templates are
          available in{" "}
          <a
            href="https://github.com/GovAlta/ui-components-angular-template"
            target="_blank"
          >
            Angular
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/GovAlta/ui-components-react-template"
            target="_blank"
          >
            React.
          </a>
        </p>
        <h3>Demo application</h3>
        <p>
          This is a demo application to see and interact with the design system
          components.
        </p>
        <a href="https://abgov-ui-react.netlify.app/" target="_blank">
          View demo application{" "}
          <div className="open-icon">
            <GoAIcon type="open" />
          </div>
        </a>
      </div>
    </>
  );
};

export default DevelopersOverview;
