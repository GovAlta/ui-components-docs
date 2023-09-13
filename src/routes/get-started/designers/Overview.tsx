import { Link } from "react-router-dom";

export const DesignerOverview: React.FC = () => {
  return (
    <>
      <h1>Designers</h1>
      <h3>
        As a designer, you can consume the design system through Figma. Through
        Figma you can use tokens, components, and page templates.
      </h3>
      <h2>Get started</h2>
      <p>
        The design system provides designers with a library of{" "}
        <Link to="">design tokens</Link>, <Link to="">components</Link>, and{" "}
        <Link to="">patterns</Link> in Figma that are also available to
        developers in code. Start by using the design system components for
        common parts of your service so that your developers can also use the
        coded components. Start with the design system and validate your design
        through user testing. If usability issues arise or a problem cannot be
        resolved within the system, then consider a custom solution or extending
        a component. The tools below will set you up to access the most
        up-to-date designs and standards:
      </p>
      <h3>Figma</h3>
      <p>
        The design system tokens, styles, components and page templates are all
        available to pull into your file in Figma.
      </p>
      <p>
        <strong>Design system library - Figma</strong> <br />
        <a href="https://www.figma.com/file/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Components-%7C-DDI?node-id=1101%3A7241">
          View the Figma design system library
        </a>
      </p>
      <h3>Design tokens</h3>
      <p>
        The components and resources in the design system libraries in both
        Figma and code are built using design tokens. As a designer, you can
        communicate design decisions using design tokens, which developers can
        then use in code. Save time going back and forth with your developer on
        hex values and adjusting a few pixels at a time. Instead, reference
        semantic tokens that the developer can consume. eg. “The colour is:
        --goa-color-info-default, the spacing is: --goa-spacing-m".
      </p>
      <h3>Components</h3>
      <p>
        All of the components in the design system are available in Figma and in
        code.
      </p>
      <p>
        These design system components have all been designed and coded to meet
        a WCAG 2.1 accessibility standard.
      </p>
      <p>
        Avoid detaching components when possible. Instead, use the component's
        variant options or show and hide layers within the component. If a
        component is not working as expected, reach out via
        #design-system-support.
      </p>
      <p>
        Make sure to keep your components up-to-date. You may see a notification
        in the bottom right corner of Figma when an update is available.
      </p>
      <h3>Figma file templates and helper components</h3>
      <p>
        A starter template file is included within each digital service project
        folder in Figma to help provide some initial structure and organization
        to your design file. This is important for better handoff with
        developers, and to help others navigate and find what you're looking for
        in each other's design files.
      </p>
      <p>
        In addition to these templates, Helper Components can help clearly
        communicate your intent when sharing your design with developers, other
        designers, and other members of your team.
      </p>
    </>
  );
};

export default DesignerOverview;
