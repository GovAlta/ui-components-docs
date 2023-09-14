import { GoAIcon } from "@abgov/react-components";
import React from "react";
import "./DesignersOverview.css";

export const DesignerOverview: React.FC = () => {
  return (
    <div className="designers-overview-page">
      <h1>UX Designers</h1>
      <h3>
        As a designer, you can consume the design system through Figma. Through
        Figma you can use tokens, components, and page templates.
      </h3>

      <h2>Overview</h2>
      <p>
        The design system provides designers with a library of{" "}
        <a href="/design-tokens">design tokens</a>,{" "}
        <a href="/components">components</a>, and{" "}
        <a href="/patterns">patterns</a> in Figma that are also available to
        developers in code. Start by using the design system components for
        common parts of your service so that your developers can also use the
        coded components.
      </p>
      <ol>
        <li>
          Start with the design system and validate your design through user
          testing.
        </li>
        <li>
          If usability issues arise or a problem cannot be resolved within the
          system, then consider a custom solution or extending a component.
        </li>
      </ol>
      <p>
        The tools below will set you up to access the most up-to-date designs
        and standards:
      </p>
      <h3>Figma</h3>
      <p>
        The design system tokens, styles, components and page templates are all
        available to pull into your file in Figma.
      </p>
      <p>
        <h4>Design system library - Figma</h4>
        <a
          href="https://www.figma.com/file/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Components-%7C-DDI?node-id=1101%3A7241"
          target="_blank"
        >
          View the Figma design system library{" "}
          <div className="open-icon">
            <GoAIcon type="open" />
          </div>
        </a>
      </p>
      <h3>Design tokens</h3>
      <p>
        The components and resources in the design system libraries in both
        Figma and code are built using{" "}
        <a href="/design-tokens">design tokens</a>. As a designer, you can
        communicate design decisions using design tokens, which developers can
        then use in code.
      </p>
      <p>
        Save time going back and forth with your developer on hex values and
        adjusting a few pixels at a time. Instead, reference semantic tokens
        that the developer can consume.
      </p>
      <p>
        eg. “The colour is:
        <code>--goa-color-info-default</code>, the spacing is:{" "}
        <code>--goa-spacing-m"</code>.
      </p>
      <h3>Components</h3>
      <p>
        All of the components in the design system are available in Figma and in
        code.
      </p>
      <p>
        These design system components have all been designed and coded to meet
        a{" "}
        <a
          href="https://www.w3.org/WAI/standards-guidelines/wcag/"
          target="_blank"
        >
          {" "}
          WCAG 2.1 accessibility standard.
        </a>
      </p>
      <p>
        Avoid detaching components when possible. Instead, use the component's
        variant options or show and hide layers within the component. If a
        component is not working as expected, reach out via{" "}
        <a
          href="https://goa-dio.slack.com/archives/C02PLLT9HQ9"
          target="_blank"
        >
          #design-system-support.
        </a>
      </p>
      <p>
        Make sure to keep your components up-to-date. You may see a notification
        in the bottom right corner of Figma when an update is available.
      </p>
      <h3>Figma file templates and helper components</h3>
      <p>
        A{" "}
        <a
          href="https://www.figma.com/file/7xRtDWqMrJi2msuxgzyU79/DDD-Figma-file-template?type=design&node-id=53-350&mode=design&t=xrLI0oN7vgLk0HXQ-0"
          target="_blank"
        >
          starter template file
        </a>{" "}
        is included within each digital service project folder in Figma to help
        provide some initial structure and organization to your design file.
        This is important for better handoff with developers, and to help others
        navigate and find what you're looking for in each other's design files.
      </p>
      <p>
        In addition to these templates ,{" "}
        <a
          href="https://www.figma.com/file/LTUW8lBTgtTJKOFrLE93zP/%E2%9D%96-Design-file-utilities-(Figma-helper-components)?type=design&node-id=52-7&mode=design&t=GrjjCo71z9UFWoUO-0"
          target="_blank"
        >
          Helper Components
        </a>{" "}
        can help clearly communicate your intent when sharing your design with
        developers, other designers, and other members of your team.
      </p>
    </div>
  );
};

export default DesignerOverview;
