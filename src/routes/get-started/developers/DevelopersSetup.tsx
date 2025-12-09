import { GoabDivider, GoabText, GoabCallout } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import "./Developers.css";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function DevelopersSetupPage() {
  return (
    <div className="developer-setup">
    <ComponentContent tocCssQuery="h2[id], h3[id]">
      <GoabText size="heading-m" mt="xl" mb={"xs"}>Developers</GoabText>
      <GoabText size="heading-xl" mt="none" mb="m">Setup</GoabText>
      <GoabText size="body-l" mt="none" mb="m">Use this guide to get setup</GoabText>

      <h2 id="angular">Angular UI components</h2>
      <GoabCallout type="information" heading="Versions supported in latest" size="medium">
        17, 18, 19, 20
      </GoabCallout>
      <GoabText size="body-m" mt="l" mb="l">This is the web component library and utilizes Angular's web component
        integration.</GoabText>

      <GoabText size="heading-s" mt="xl" mb="s">1. Add Dependencies</GoabText>
      <CodeSnippet
        lang="typescript"
        allowCopy={true}
        code={`
          npm i @abgov/web-components
          npm i @abgov/angular-components
        `}
      />

      <GoabText size="heading-s" mt="xl" mb="s">2. Link ionicons in app/index.html Add the following in the head
        element</GoabText>
      <CodeSnippet
        lang="typescript"
        allowCopy={true}
        code={`
          <script type="module" src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.js"></script>
        `}
      />

      <GoabText size="heading-s" mt="xl" mb="s">3. Update src/app/app.module.ts as per the four steps below</GoabText>
      <CodeSnippet
        lang="typescript"
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

      <GoabText size="heading-s" mt="xl" mb="s">4. Add the styles link in the src/styles.css file</GoabText>
      <CodeSnippet
        lang="typescript"
        allowCopy={true}
        code={`@import "@abgov/web-components/index.css";`}
      />

      <GoabDivider mt="2xl" mb="2xl" />

      <h2 id="react">React UI components</h2>
      <GoabCallout type="information" heading="Versions supported in latest" size="medium">
        17, 18, 19
      </GoabCallout>
      <GoabText size="body-m" mt="l" mb="l">
          This library contains React components which wrap the Government of Alberta Web
          Components.
      </GoabText>

      <GoabText size="heading-s" mt="xl" mb="s">1. Add Dependencies</GoabText>
        <CodeSnippet
          lang="typescript"
          allowCopy={true}
          code={`
          npm i @abgov/react-components
          npm i @abgov/web-components
        `}
        />

      <GoabText size="heading-s" mt="xl" mb="s">2. Link ionicons in app/index.html Add the following to the head
        element</GoabText>
        <CodeSnippet
          lang="typescript"
          allowCopy={true}
          code={`
          <script type="module" src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.js"></script>
        `}
        />

      <GoabText size="heading-s" mt="xl" mb="s">3. Import the web-components in the src/main.tsx file</GoabText>
        <CodeSnippet
          lang="typescript"
          allowCopy={true}
          code={`import "@abgov/web-components";`}
        />

      <GoabText size="heading-s" mt="xl" mb="s">4. Import the web-component styles in the src/index.css file</GoabText>
        <CodeSnippet
          lang="typescript"
          allowCopy={true}
          code={`@import "@abgov/web-components/index.css";`}
        />

      <GoabDivider mt="2xl" mb="2xl" />

      <h2 id="web-components">Web components</h2>
      <GoabText size="body-m" mt="l" mb="l">This library contains react components from the Government of
        Alberta.</GoabText>

      <GoabText size="heading-s" mt="xl" mb="s">1. Add Dependencies</GoabText>
        <CodeSnippet
          lang="typescript"
          allowCopy={true}
          code={`npm i @abgov/web-components`}
        />

      <GoabText size="heading-s" mt="xl" mb="s">2. Link ionicons in index.html Add the following in the head
        element</GoabText>
        <CodeSnippet
          lang="typescript"
          allowCopy={true}
          code={`
          <script type="module" src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.js"></script>
        `}
        />

      <GoabText size="heading-s" mt="xl" mb="s">3. Import the web-components into src/main.js:</GoabText>
        <CodeSnippet
          lang="typescript"
          allowCopy={true}
          code={`import "@abgov/web-components";`}
        />

      <GoabText size="heading-s" mt="xl" mb="s">
          4. Add the styles link in the src/assets/main.css file or wherever your main css file is
          located:
      </GoabText>
        <CodeSnippet
          lang="typescript"
          allowCopy={true}
          code={`@import "@abgov/web-components/index.css";`}
        />
      </ComponentContent>
    </div>
  );
}
