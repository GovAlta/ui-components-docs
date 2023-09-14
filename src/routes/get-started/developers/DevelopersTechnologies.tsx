import "./Developers.css";
export const DevelopersTechnologies: React.FC = () => {
  return (
    <>
      <div className="developers-technologies-page">
        <h1>Developers</h1>
        <h2>Design system technologies</h2>
        <div className="design-system-image">
          <img src="/images/design-system-technologies.png" />
        </div>
        <h3>Web components</h3>
        <p>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components"
            target="_blank"
          >
            Web Components
          </a>{" "}
          is a suite of different technologies allowing you to create reusable
          custom elements with styling and functionality encapsulated away from
          the rest of your code.
        </p>
        <h4>Benefits of using web components</h4>
        <ul>
          <li>
            <strong>Reuse:</strong> A component is made once and can be reused
            across different pages, apps, or frameworks.
          </li>
          <li>
            <strong>Support:</strong> Once fully standardized, it will work on
            any browser without additional libraries.
          </li>
          <li>
            <strong>Maintenance:</strong> Since the design is modular and the
            components are self-contained, they're easier to maintain.
          </li>
          <li>
            <strong>Encapsulation:</strong> Markup structure, style, and
            behaviour will be kept hidden and separate from other code on the
            page so that different parts do not clash.
          </li>
          <li>
            <strong>Reliability:</strong> Code is not spread across HTML and JS
            files, thereby avoiding inconsistencies.
          </li>
          <li>
            <strong>Flexibility:</strong> Components can be written inline,
            imported or even compiled.
          </li>
          <li>
            <strong>Composability:</strong> Components can use or interface with
            other components.
          </li>
        </ul>
        <h4>Using web components in your project</h4>
        <p>
          Web Components generated from Svelte can be used along side various
          other front-end frameworks or used with our Angular or React
          implementations.
        </p>
        <h3>Svelte</h3>
        <p>
          <a href="https://svelte.dev/" target="_blank">
            Svelte
          </a>{" "}
          is a JavaScript framework that we are using to generate web
          components.
        </p>
        <h4>Why use Svelte</h4>
        <p>
          We use Svelte to build our web components. Svelte gathers the logic
          (JavaScript), the structure (HTML), and the style (CSS) in the same
          file. Then, Svelte is used to build single and reusable components for
          larger applications written with various front-end frameworks.
        </p>
        <h3>Angular</h3>
        <p>
          <a href="https://angular.io/" target="_blank">
            Angular
          </a>{" "}
          is a TypeScript-based open-source platform and web application
          framework that helps us to create single-page applications using
          TypeScript and HTML. It uses HTML to define the UI of the application.
          It is a declarative and intuitive language with directives like
          ng-app, ng-model, ng-repeat, and forms control.
        </p>
        <p>
          Angular is the most used web application framework in this
          organization.
        </p>
        <h4>How Web Components and Angular work together</h4>
        <p>
          Our Angular implementation adds form binding, both Reactive and
          Template, to our web components.
        </p>
        <p>
          Angular applications will need to use our web components and Angular
          components.
        </p>
        <h3>React</h3>
        <p>
          <a href="https://react.dev/" target="_blank">
            React
          </a>{" "}
          is an open-source JavaScript library commonly used to create user
          interfaces for single-page applications from isolated components.
        </p>
        <p>
          React is the 2nd most used web application framework in this
          organization.
        </p>
        <h4>How Web Components and React work together</h4>
        <p>
          We use React to create wrappers around our web components. This helps
          manage events and properties of the web components rather than trying
          to use our web components by themselves.
        </p>
        <p>
          The React wrappers are used inside a React app, which then makes
          requests back to our web components to create the actual component.
        </p>
      </div>
    </>
  );
};

export default DevelopersTechnologies;
