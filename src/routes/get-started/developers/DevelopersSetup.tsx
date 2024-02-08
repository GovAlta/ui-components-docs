import { GoABlock, GoAButton, GoAContainer, GoADivider, GoAGrid } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import "./Developers.css";

export default function DevelopersSetupPage() {
  function scrollToDiv(targetId: string) {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="developer-setup">
      <h1>Developers</h1>
      <h2>Setup</h2>

      <GoAGrid minChildWidth="20ch" gap="xs" mt="m" mb="3xl">
        <GoABlock gap="xs" direction="column">
          <a href="#angular">Angular</a>
          <a href="#vue">Vue</a>
        </GoABlock>
        <GoABlock gap="xs" direction="column">
          <a href="#react">React</a>
          <a href="#templates">Template</a>
        </GoABlock>
      </GoAGrid>

      <GoAContainer type="non-interactive">
        <h3>Once you are setup, you can use the project template to quickly get started.</h3>
        <GoAButton type="tertiary" onClick={() => scrollToDiv("templates")}>
          View project templates
        </GoAButton>
      </GoAContainer>

      <h3 id="angular">Angular UI components</h3>
      <p>This is the web component library and utilizes Angular's web component integration.</p>

      <h4>1. Add Dependencies</h4>
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          npm i @abgov/web-components
          npm i @abgov/angular-components
        `}
      ></CodeSnippet>

      <h4>2. Link ionicons in app/index.html Add the following in the head element</h4>
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        `}
      />

      <h4>3. Update src/app/app.module.ts as per the four steps below</h4>
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          // 1. Import the CUSTOM_ELEMENTS_SCHEMA
          import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
          // 2. Import the libs
          import "@abgov/web-components";
          import { AngularComponentsModule } from "@abgov/angular-components";
          
          @NgModule({
            declarations: [AppComponent],
            imports: [
              // 3. Add the needed imports
              BrowserModule,
              AngularComponentsModule,
            ],
            providers: [],
            bootstrap: [AppComponent],
            // 4. Add the CUSTOM_ELEMENTS_SCHEMA to the NgModule
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
          })
          export class AppModule {}
        `}
      />

      <h4>4. Add the styles link in the src/styles.css file</h4>
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`@import "@abgov/web-components/index.css";`}
      />

      <GoADivider mt="2xl" mb="xl" />

      <h3 id="react">React UI components</h3>
      <p>
        This library contains React components which wrap the Government of Alberta Web Components.
      </p>

      <h4>1. Add Dependencies</h4>
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          npm i @abgov/react-components
          npm i @abgov/web-components
        `}
      />

      <h4>2. Link ionicons in app/index.html Add the following to the head element</h4>
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        `}
      />

      <h4>3. Import the web-component styles in the src/index.css file</h4>
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`@import "@abgov/web-components/index.css";`}
      />

      <GoADivider mt="2xl" mb="xl" />

      <h3 id="vue">Vue web components</h3>
      <p>This library contains react components from the Government of Alberta.</p>

      <h4>1. Add Dependencies</h4>
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`npm i @abgov/web-components`}
      />

      <h4>2. Link ionicons in index.html Add the following in the head element</h4>
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        `}
      />

      <h4>3. Update vite.config.js with the following:</h4>
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
          plugins: [
            vue({
              template: {
               compilerOptions: {
                 // treat all tags with goa- as custom elements
                 isCustomElement: (tag) => tag.includes('goa-')
               }
            }
          })],
        `}
      />

      <h4>4. Import the web-components into src/main.js:</h4>
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`import "@abgov/web-components";`}
      />

      <h4>
        5. Add the styles link in the src/assets/main.css file or wherever your main css file is
        located:
      </h4>
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`@import "@abgov/web-components/index.css";`}
      />

      <GoADivider mt="2xl" mb="xl" />

      <h3 id="templates">Angular/React templates</h3>
      <GoABlock gap="xl" mb="xl">
        <a href="https://github.com/GovAlta/ui-components-angular-template" target="_blank">
          Angular template
        </a>
        <a href="https://github.com/GovAlta/ui-components-react-template" target="_blank">
          React template
        </a>
      </GoABlock>

      <p>To use the templates, follow these steps:</p>
      <ol>
        <li>
          Click the green <strong>Use this template</strong> button
        </li>
        <li>
          Select <strong>Create a new repository</strong>
        </li>
        <li>Select an owner and give the repo a suitable name for your project</li>
        <li>Select either Public or Private</li>
        <li>
          Click the button <strong>Create repository from template</strong>
        </li>
        <li>Clone the repo onto your machine</li>
        <li>
          Using a terminal of some kind, go into the directory you created and run the following
          commands (in order):
          <ol>
            <li>
              <code>npm i</code>
            </li>
            <li>
              <code>npm run build</code>
            </li>
            <li>
              <code>npm run start</code>-- if using Angular, <code>npm run dev</code> --if using
              react
            </li>
          </ol>
        </li>
        <li>Go to the listed port number of your localhost</li>
      </ol>
    </div>
  );
}
