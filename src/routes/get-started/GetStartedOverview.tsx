import {
  GoabBlock,
  GoabCallout,
  GoabContainer,
  GoabLink,
  GoabText
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function GetStartedOverviewPage() {
  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">
      <GoabText size="heading-xl" mb="m" mt="2xl">
        Starting with the design system
      </GoabText>
      <GoabText size="heading-m" mb="xl">
        Start with the design system to build on the research and experience of other service teams and avoid
        repeating work that's already been done.
      </GoabText>

      <GoabBlock gap="m" direction="row" mb="xl">
        <GoabText size="heading-s" color="secondary">
          Design system by role:
        </GoabText>
        <GoabLink>
          <a href="/get-started/designers">
            Designer
          </a>
        </GoabLink>
        <GoabLink>
          <a href="/get-started/developers">
            Developer
          </a>
        </GoabLink>
        <GoabLink>
          <a href="/get-started/qa-testing">
            QA Tester
          </a>
        </GoabLink>
      </GoabBlock>

      <GoabContainer type="non-interactive" padding="relaxed" maxWidth="740px">
            Start with the design system. You don't need to reinvent the wheel. The design system is
            the floor, not the ceiling. Start with it to save time building the common parts of a
            service, so that you can spend time on the unique challenges within your service
            context.
          </GoabContainer>
      <h3 id="Why">Why start with the design system?</h3>
      <GoabText size="body-m" mb="m">
        The design system can save you time and effort getting to a better service, allowing you to focus on other
        high-value work. By starting with the design system, you can:
      </GoabText>
      <GoabText size="body-m" mb="m">
          <ul>
            <li>
              <strong>Streamline collaboration:</strong> Your developers can use the corresponding
              coded design system components.
            </li>
            <li>
              <strong>Ensure better accessibility:</strong> Accessibility is built into the components from
              both design and code.
            </li>
            <li>
              <strong>Save time on testing:</strong> Components have been rigorously tested
              across various devices, browsers, and service contexts.
            </li>
            <li>
              <strong>Maintain consistency:</strong> Components are coordinated with the rest of the
              system for a cohesive experience.
            </li>
          </ul>
      </GoabText>
      <GoabText size="heading-s" mt="xl" mb="s">
        More time for other high value work
      </GoabText>
      <GoabText size="body-m">
        Leveraging what exists in the design system saves you time, enabling you to spend more time on other
        high-value tasks such as:
      </GoabText>
      <GoabText size="body-m" mb={"2xl"}>
          <ul>
            <li>Usability testing</li>
            <li>User research</li>
            <li>Content design</li>
            <li>Accessibility</li>
            <li>Design integrity of the product</li>
            <li>Low fidelity design and testing</li>
          </ul>
      </GoabText>

      <h3 id="How"> How do I use the design system in my service?</h3>
      <GoabText size="body-m" mb="m">
        Start by using the design system <a href={"/components"}> components</a> and <a
        href={"/patterns"}>patterns.</a> You should expect that this will cover about 80% of your needs in a service.
        When usability testing shows that a new solution or an improvement to an existing solution is needed, design a
        better solution. Use a 3rd party library, code your own, and/or share solutions with other teams.
      </GoabText>
      <GoabText size="body-m" mb="xl">
        <ol>
          <li>
            Use the design system as the default first solution in design and development
          </li>
          <li>
            Identify any needs that don't exist in the design system through user testing
          </li>
          <li>
            <a href={"/get-started/support"}>Talk to the design system team</a> to see what’s available and what other
            teams have done
          </li>
          <li>
            Test a better solution with users
          </li>
          <li>
            Share learnings from design and development back to the design system so everyone can learn and improve
          </li>
          <li>
            The new solution or change to an existing solution:
            <ul>
              <li>Is added to the system</li>
              <li>Stays a snowflake (unique to your service) for now and is tracked in the <a
                href={"https://github.com/orgs/GovAlta/projects/38/views/3"}>design system backlog</a></li>
            </ul>
          </li>
        </ol>
      </GoabText>
      <GoabCallout type="information" heading={"Remember"} size={"medium"} maxWidth={"596px"}>
        Avoid custom solutions without a genuine user need to prevent unnecessary work and save time.<br /> <a
        href={"https://www.figma.com/board/bFFeTY8CI2qOqCq7yvVXK6/Design-System---Governance-Process-Map?node-id=510-1364&t=gt7XnMUq1UsmJ7Lf-4"}>View
        the design system governance process</a>
      </GoabCallout>

    </ComponentContent>
  );
}
