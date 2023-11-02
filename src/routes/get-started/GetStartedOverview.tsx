import {GoAButton, GoAButtonGroup, GoAContainer, GoAGrid} from "@abgov/react-components";
import {useNavigate} from "react-router-dom";

export default function GetStartedOverviewPage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Starting with the design system</h1>
      <h3 className="introduction">
        Start with the design system to build on the research and experience of other service teams
        and avoid repeating work that's already been done.
      </h3>

      <div className="max-width-72ch">
        <GoAGrid minChildWidth="32ch" mb="xl">
          <h4 className="heading">Using the design system by role:</h4>
          <GoAButtonGroup alignment="start">
            <GoAButton
              type="tertiary"
              size="compact"
              onClick={() => navigate("/get-started/designers")}>
              Designers
            </GoAButton>
            <GoAButton
              type="tertiary"
              size="compact"
              onClick={() => navigate("/get-started/developers")}>
              Developers
            </GoAButton>
            <GoAButton
              type="tertiary"
              size="compact"
              onClick={() => navigate("/get-started/qa-testing")}>
              QA Testers
            </GoAButton>
          </GoAButtonGroup>
        </GoAGrid>

        <GoAContainer type="non-interactive" mb="l">
          Start with the design system. You don’t need to reinvent the wheel. The design system is
          the floor, not the ceiling. Start with it to save time building the common parts of a
          service, so that you can spend time on the unique challenges within your service context.
        </GoAContainer>

        <h3>The value of starting with the design system components</h3>
        <p>
          The design system is your foundation for success and an incredible time-saver, allowing
          you to focus on high-value work. By starting with the design system, you can:
        </p>
        <ul>
          <li>
            <strong>Streamline collaboration:</strong> Your developers can use the corresponding
            coded design system components.
          </li>
          <li>
            <strong>Ensure accessibility:</strong> Accessibility is built into the components from
            both design and code.
          </li>
          <li>
            <strong>Benefit from thorough testing:</strong> Components have been rigorously tested
            across various devices, browsers, and service contexts.
          </li>
          <li>
            <strong>Maintain consistency:</strong> Components are coordinated with the rest of the
            system for a cohesive experience.
          </li>
        </ul>

        <h3>More time for other high value work</h3>
        <p>
          Leveraging what exists in the design system saves you time, enabling you to spend more
          time on other high-value tasks such as:
        </p>
        <ul>
          <li>Usability testing</li>
          <li>User research</li>
          <li>Content design</li>
          <li>Accessibility</li>
          <li>Design integrity of the product</li>
          <li>Lo-fidelity design and testing</li>
        </ul>
      </div>
    </>
  );
}
