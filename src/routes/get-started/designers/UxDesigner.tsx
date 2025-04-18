import { Link } from "react-router-dom";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function UxDesignerPage() {
  return ( <ComponentContent tocCssQuery="h2[id], h3[id]">
      <h1>Designers</h1>
      <h3>
        As a designer, you can consume the design system through Figma. Through Figma you can use
        tokens, components, and page templates.
      </h3>

      <h2 id="overview">Overview</h2>
      <p>
        The design system provides designers with a library of{" "}
        <a href="https://www.figma.com/file/ylmHeuDMfxnDBnP1VaQYz8/%E2%9D%96-Styles-and-Guidelines-%7C-DDD?type=design&node-id=7497-327764&mode=design" target="_blank">design tokens</a>,{" "}
        <a href="https://www.figma.com/file/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?type=design&node-id=1101-7241&mode=design" target="_blank">components</a>, and{" "}
        <a href="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-and-Templates-library-%7C-DDD?type=design&node-id=101-4112&mode=design" target="_blank">patterns</a>
        in Figma that are also available to developers in code.
        Start by using the design system components for common parts of your service so that your
        developers can also use the coded components.
      </p>

      <ol className="max-width-72ch">
        <li>Start with the design system and validate your design through user testing.</li>
        <li>
          If usability issues arise or a problem cannot be resolved within the system, then consider
          a custom solution or extending a component.
        </li>
      </ol>

      <p>The tools below will set you up to access the most up-to-date designs and standards:</p>

      <h3 id="figma">Figma</h3>
      <p>
        The design system tokens, styles, components and page templates are all available to pull
        into your file in Figma.
      </p>
    <goa-callout heading="Design with development in mind" type="information" size="large" arialive="off">When selecting components, prioritize those with a “goa-” prefix in the name such as “goa-input.” These components are available in both design and development, which means that developers can avoid unnecessary custom development.</goa-callout>
      <p>
        <a
          href="https://www.figma.com/files/project/36119371/%E2%9D%96-Design-System-libraries?fuid=997916706634348976"
          target="_blank"
        >
          View the Figma design system library
        </a>
      </p>

      <h3 id="design-tokens">Design tokens</h3>
      <p>
        The components and resources in the design system libraries in both Figma and code are built
        using <Link to="/design-tokens">design tokens</Link>. As a designer, you can communicate design
        decisions using design tokens, which developers can then use in code.
      </p>
      <p>
        Save time going back and forth with your developer on hex values and adjusting a few pixels
        at a time. Instead, reference semantic tokens that the developer can consume.
      </p>
      <p>
        eg. “The colour is:
        <code>--goa-color-info-default</code>, the spacing is: <code>--goa-spacing-m"</code>.
      </p>

      <h3 id="components">Components</h3>
      <p>All of the components in the design system are available in Figma and in code.</p>
      <p>
        These design system components have all been designed and coded to meet a{" "}
        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">
          {" "}
          WCAG 2.1 accessibility standard
        </a>
        .
      </p>
      <p>
        Avoid detaching components when possible. Instead, use the component's variant options or
        show and hide layers within the component. If a component is not working as expected, reach
        out via{" "}
        <a href="https://goa-dio.slack.com/archives/C02PLLT9HQ9" target="_blank">
          #design-system-support
        </a>
        .
      </p>
      <p>
        Make sure to keep your components up-to-date. You may see a notification in the bottom right
        corner of Figma when an update is available.
      </p>

      <h3 id="figma-templates">Figma file templates and helper components</h3>
      <p>
        A{" "}
        <a
          href="https://www.figma.com/design/l5kjG0bfltQFqPpK2uorC0/DDD-Figma-file-template?m=auto&t=1Stq1DIiLM6zOVqf-6"
          target="_blank"
        >
          starter template file
        </a>{" "}
        is included within each digital service project folder in Figma to help provide some initial
        structure and organization to your design file. This is important for better handoff with
        developers, and to help others navigate and find what you're looking for in each other's
        design files.
      </p>
      <p>
        In addition to these templates ,{" "}
        <a
          href="https://www.figma.com/design/TDbVPfpFxcUj4iuaJf7a0V/%E2%9D%96-Low-Fi-Prototyping-%26-Annotation-Kit-%7C-DDD?node-id=1101-7241&t=bnms7IudBx2gX3Rx-1"
          target="_blank"
        >
          helper components
        </a>{" "}
        can help clearly communicate your intent when sharing your design with developers, other
        designers, and other members of your team.
      </p>
    </ComponentContent>
  );
}
