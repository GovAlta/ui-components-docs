import { GoAContainer } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import "./Developers.css";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function DevelopersUpgradePage() {
  return (
    <div className="developer-setup">
      <ComponentContent tocCssQuery="h2[id], h3[id]">
        <h1>Developers</h1>
        <h2 id="setup">Guide</h2>
        <GoAContainer type="non-interactive">
          <h3>Step-by-step guide to updating your code from DDD Design System v3 to v4.</h3>
        </GoAContainer>

        <h3 id="overview">Overview</h3>
        <p>
          This guide helps you update your project to DDD Design System v4. It is broken into
          sections based on how you are using DDD Design System components in your project today.
        </p>
        <p>
          One of the biggest changes to DDD Design System in v4 is that we rename our component
          prefix from <code className="inline">GoA</code> to <code className="inline">GoAB</code> (for React)
          and <code className="inline">goa</code> to{" "}
          <code className="inline">goab</code> (for Angular). What this means for you is that if you were previously
          using the below component names in your project:
          <ul>
            <li>
              <code className="inline">GoAButton</code> will be <code className="inline">GoABButton</code> in React and{" "}
              <code className="inline">goa-button</code> will be <code className="inline">goab-button</code> in Angular.
            </li>
            <li>
              <code className="inline">GoAContainer</code> will be <code className="inline">GoABContainer</code> in React and{" "}
              <code className="inline">goa-container</code> will be <code className="inline">goab-container</code> in Angular.
            </li>
            <li>And same for other components...</li>
          </ul>
        </p>
        <p>If you were previously import components props (in React) from <code>@abgov/react-components</code>, components props from DDD Design System
        v4 packages are available under <code className="inline">@abgov/ui-components-common</code>.</p>

        <h3 id="react">Migrating a React app</h3>
        <p>
          The React components for DDD Design System still live in the{" "}
          <code className="inline">@abgov/react-components</code> package. However, the component props will be imported from <code className="inline">@abgov/ui-components-common</code> instead of <code className="inline">@abgov/react-components</code>.
        </p>
        <h4>1. Update Dependencies</h4>
        <p>To get started, update the following packages:</p>
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
          npm i @abgov/web-components@4.x
          npm i @abgov/react-components@4.x
          npm i @abgov/ui-components-common@4.x
        `}
        />

        <h4>2. Rename all components name from <code className="inline">GoA-ComponentName</code> to <code className="inline">GoAB-ComponentName</code></h4>
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
          // Before
          import {GoAAccordion, GoAButton, GoACallout, GoAHeadingSize } from '@abgov/react-components';
          
          // After
          import {GoABAccordion, GoABButton, GoABCallout} from '@abgov/react-components';
          import {GoABAccordionHeadingSize} from '@abgov/ui-components-common';
        `}
        />

        <h4>3. Update components that have changed</h4>
        <p>In v4, we have updated the APIs of certain components in one of the following ways:</p>
        <ul>
          <li>Update component's props name from some common names to a specific component name that props belonged to. For example: <code className="inline">GoAHeadingSize</code> will become <code className="inline">GoABAccordionHeadingSize</code></li>
          <li>Update component's function arguments from multiple arguments to a single component props. For example: <code className="inline">onChange(name: string, checked: boolean, value: string)</code> for <code className="inline">
              GoABCheckbox
            </code> will become <code className="inline">onChange(detail: GoABCheckboxOnChangeDetail)</code> </li>
        </ul>
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            // Before
            <GoACheckbox onChange={(name, checked, value) => handleChange} />
            // After
            <GoABCheckbox onChange={(detail) => handleChange} />
        `}
        />

        {/*<h4>4. Add the styles link in the src/styles.css file</h4>*/}
        {/*<CodeSnippet*/}
        {/*  lang="typescript"*/}
        {/*  tags="react"*/}
        {/*  allowCopy={true}*/}
        {/*  code={`@import "@abgov/web-components/index.css";`}*/}
        {/*/>*/}

        {/*<GoADivider mt="2xl" mb="xl" />*/}

        {/*<h3 id="react">React UI components</h3>*/}
        {/*<p>*/}
        {/*  This library contains React components which wrap the Government of Alberta Web*/}
        {/*  Components.*/}
        {/*</p>*/}

        {/*<h4>1. Add Dependencies</h4>*/}
        {/*<CodeSnippet*/}
        {/*  lang="typescript"*/}
        {/*  tags="react"*/}
        {/*  allowCopy={true}*/}
        {/*  code={`*/}
        {/*  npm i @abgov/react-components*/}
        {/*  npm i @abgov/web-components*/}
        {/*`}*/}
        {/*/>*/}

        {/*<h4>2. Link ionicons in app/index.html Add the following to the head element</h4>*/}
        {/*<CodeSnippet*/}
        {/*  lang="typescript"*/}
        {/*  tags="react"*/}
        {/*  allowCopy={true}*/}
        {/*  code={`*/}
        {/*  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>*/}
        {/*  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>*/}
        {/*`}*/}
        {/*/>*/}

        {/*<h4>3. Import the web-component styles in the src/index.css file</h4>*/}
        {/*<CodeSnippet*/}
        {/*  lang="typescript"*/}
        {/*  tags="react"*/}
        {/*  allowCopy={true}*/}
        {/*  code={`@import "@abgov/web-components/index.css";`}*/}
        {/*/>*/}

        {/*<GoADivider mt="2xl" mb="xl" />*/}

        {/*<h3 id="vue">Vue web components</h3>*/}
        {/*<p>This library contains react components from the Government of Alberta.</p>*/}

        {/*<h4>1. Add Dependencies</h4>*/}
        {/*<CodeSnippet*/}
        {/*  lang="typescript"*/}
        {/*  tags="react"*/}
        {/*  allowCopy={true}*/}
        {/*  code={`npm i @abgov/web-components`}*/}
        {/*/>*/}

        {/*<h4>2. Link ionicons in index.html Add the following in the head element</h4>*/}
        {/*<CodeSnippet*/}
        {/*  lang="typescript"*/}
        {/*  tags="react"*/}
        {/*  allowCopy={true}*/}
        {/*  code={`*/}
        {/*  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>*/}
        {/*  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>*/}
        {/*`}*/}
        {/*/>*/}

        {/*<h4>3. Update vite.config.js with the following:</h4>*/}
        {/*<CodeSnippet*/}
        {/*  lang="typescript"*/}
        {/*  tags="react"*/}
        {/*  allowCopy={true}*/}
        {/*  code={`*/}
        {/*  plugins: [*/}
        {/*    vue({*/}
        {/*      template: {*/}
        {/*       compilerOptions: {*/}
        {/*         // treat all tags with goa- as custom elements*/}
        {/*         isCustomElement: (tag) => tag.includes('goa-')*/}
        {/*       }*/}
        {/*    }*/}
        {/*  })],*/}
        {/*`}*/}
        {/*/>*/}

        {/*<h4>4. Import the web-components into src/main.js:</h4>*/}
        {/*<CodeSnippet*/}
        {/*  lang="typescript"*/}
        {/*  tags="react"*/}
        {/*  allowCopy={true}*/}
        {/*  code={`import "@abgov/web-components";`}*/}
        {/*/>*/}

        {/*<h4>*/}
        {/*  5. Add the styles link in the src/assets/main.css file or wherever your main css file is*/}
        {/*  located:*/}
        {/*</h4>*/}
        {/*<CodeSnippet*/}
        {/*  lang="typescript"*/}
        {/*  tags="react"*/}
        {/*  allowCopy={true}*/}
        {/*  code={`@import "@abgov/web-components/index.css";`}*/}
        {/*/>*/}

        {/*<GoADivider mt="2xl" mb="xl" />*/}

        {/*<h3 id="templates">Angular/React templates</h3>*/}
        {/*<GoABlock gap="xl" mb="xl">*/}
        {/*  <a href="https://github.com/GovAlta/ui-components-angular-template" target="_blank">*/}
        {/*    Angular template*/}
        {/*  </a>*/}
        {/*  <a href="https://github.com/GovAlta/ui-components-react-template" target="_blank">*/}
        {/*    React template*/}
        {/*  </a>*/}
        {/*</GoABlock>*/}

        {/*<p>To use the templates, follow these steps:</p>*/}
        {/*<ol>*/}
        {/*  <li>*/}
        {/*    Click the green <strong>Use this template</strong> button*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    Select <strong>Create a new repository</strong>*/}
        {/*  </li>*/}
        {/*  <li>Select an owner and give the repo a suitable name for your project</li>*/}
        {/*  <li>Select either Public or Private</li>*/}
        {/*  <li>*/}
        {/*    Click the button <strong>Create repository from template</strong>*/}
        {/*  </li>*/}
        {/*  <li>Clone the repo onto your machine</li>*/}
        {/*  <li>*/}
        {/*    Using a terminal of some kind, go into the directory you created and run the following*/}
        {/*    commands (in order):*/}
        {/*    <ol>*/}
        {/*      <li>*/}
        {/*        <code>npm i</code>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <code>npm run build</code>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <code>npm run start</code>-- if using Angular, <code>npm run dev</code> --if using*/}
        {/*        react*/}
        {/*      </li>*/}
        {/*    </ol>*/}
        {/*  </li>*/}
        {/*  <li>Go to the listed port number of your localhost</li>*/}
        {/*</ol>*/}
      </ComponentContent>
    </div>
  );
}
