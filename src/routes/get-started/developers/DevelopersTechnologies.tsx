import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabText, GoabCallout } from "@abgov/react-components";

export default function DevelopersTechnologiesPage() {
  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">
      <GoabText size="heading-m" mt="xl" mb={"xs"}>Developers</GoabText>
      <GoabText size="heading-xl" mt="none" mb="m">Technologies</GoabText>
      <GoabText size="body-l" mt="none" mb="2xl">An overview of the technologies that make up the design system.</GoabText>

      <div className="design-system-image">
        <img src="/images/component-thumbnails/design-system-technologies.png" />
      </div>

      <h2 id="web-components">Web components</h2>
      <GoabText size="body-m" mt="l" mb="l">
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components" target="_blank">
          Web Components
        </a>{" "}
        is a suite of different technologies allowing you to create reusable custom elements with
        styling and functionality encapsulated away from the rest of your code.
      </GoabText>

      <GoabText size="heading-s" mt="xl" mb="s">Benefits of using web components</GoabText>
      <ul>
        <li>
          <strong>Reuse:</strong> A component is made once and can be reused across different pages,
          apps, or frameworks.
        </li>
        <li>
          <strong>Support:</strong> Once fully standardized, it will work on any browser without
          additional libraries.
        </li>
        <li>
          <strong>Maintenance:</strong> Since the design is modular and the components are
          self-contained, they're easier to maintain.
        </li>
        <li>
          <strong>Encapsulation:</strong> Markup structure, style, and behaviour will be kept hidden
          and separate from other code on the page so that different parts do not clash.
        </li>
        <li>
          <strong>Reliability:</strong> Code is not spread across HTML and JS files, thereby
          avoiding inconsistencies.
        </li>
        <li>
          <strong>Flexibility:</strong> Components can be written inline, imported or even compiled.
        </li>
        <li>
          <strong>Composability:</strong> Components can use or interface with other components.
        </li>
      </ul>

      <GoabText size="heading-s" mt="xl" mb="s">Using web components in your project</GoabText>
      <GoabText size="body-m" mt="l" mb="2xl">
        Web Components generated from Svelte can be used along side various other front-end
        frameworks or used with our Angular or React implementations.
      </GoabText>

      <h2 id="svelte">Svelte</h2>
      <GoabText size="body-m" mt="l" mb="l">
        <a href="https://svelte.dev/" target="_blank">
          Svelte
        </a>{" "}
        is a JavaScript framework that we are using to generate web components.
      </GoabText>

      <GoabText size="heading-s" mt="xl" mb="s">Why use Svelte</GoabText>
      <GoabText size="body-m" mt="l" mb="2xl">
        We use Svelte to build our web components. Svelte gathers the logic (JavaScript), the
        structure (HTML), and the style (CSS) in the same file. Then, Svelte is used to build single
        and reusable components for larger applications written with various front-end frameworks.
      </GoabText>

      <h2 id="angular">Angular</h2>
      <GoabCallout type="information" heading="Versions supported in latest" size="medium">
        17, 18, 19, 20
      </GoabCallout>
      <GoabText size="body-m" mt="l" mb="l">
        <a href="https://angular.io/" target="_blank">
          Angular
        </a>{" "}
        is a TypeScript-based open-source platform and web application framework that helps us to
        create single-page applications using TypeScript and HTML. It uses HTML to define the UI of
        the application. It is a declarative and intuitive language with directives like ng-app,
        ng-model, ng-repeat, and forms control.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">Angular is the most used web application framework in this
        organization.</GoabText>

      <GoabText size="heading-s" mt="xl" mb="s">How Web Components and Angular work together</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        We use Angular to create wrappers around our web components. This helps manage events and properties
        of the web components rather than trying to use our web components by themselves. Our Angular
        implementation adds form binding, both Reactive and Template, to our web
        components.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="2xl">The Angular wrappers are used inside an Angular app,
        which then makes requests back to our web components to create the actual component.</GoabText>

      <h2 id="react">React</h2>
      <GoabCallout type="information" heading="Versions supported in latest" size="medium">
        17, 18, 19
      </GoabCallout>
      <GoabText size="body-m" mt="l" mb="l">
        <a href="https://react.dev/" target="_blank">
          React
        </a>{" "}
        is an open-source JavaScript library commonly used to create user interfaces for single-page
        applications from isolated components.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">React is the 2nd most used web application framework in this
        organization.</GoabText>

      <GoabText size="heading-s" mt="xl" mb="s">How Web Components and React work together</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        We use React to create wrappers around our web components. This helps manage events and
        properties of the web components rather than trying to use our web components by themselves.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        The React wrappers are used inside a React app, which then makes requests back to our web
        components to create the actual component.
      </GoabText>
    </ComponentContent>
  );
}
