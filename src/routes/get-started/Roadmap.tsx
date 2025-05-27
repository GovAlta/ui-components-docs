import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabCallout, GoabDivider, GoabText } from "@abgov/react-components";

export default function RoadmapPage() {
  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">
      <GoabText size="heading-xl" mt="xl" mb="m">Roadmap</GoabText>

      <GoabText size="body-l" mb="m">
        A high-level summary of the work the design system team plans to focus on in 2025. Some initiatives span
        multiple phases, meaning they will be continuously worked on across the year.
      </GoabText>
      <GoabText size="body-m" mb="2xl">
        For more information on the latest
        releases, visit the
        {" "}
        <a href="https://github.com/GovAlta/ui-components/releases" target="_blank">
          release notes
        </a>
      </GoabText>
      <div className="max-width-72ch">
        <GoabCallout type="information" mt="xl" mb="3xl">
          The roadmap is subject to change as we gather new information. We will communicate updates to ensure product
          teams can align, prepare, and strategize their work accordingly.
          <br /><br />
          For more details on our priorities and day-to-day activities, see our{" "}
          <a href="https://github.com/orgs/GovAlta/projects/35/views/1" target="_blank">
            design system backlog
          </a>{" "}
        </GoabCallout>


        <h2 id="ongoing">Ongoing</h2>
        <GoabText size="body-m" mb="xl">
          <i>These initiatives will be continuously worked on, refined, and expanded over the course of the year.</i>
        </GoabText>

        <GoabText size="heading-m" mt="xl" mb="l">Components in context</GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Objective:</b> Improve component documentation by providing real-world examples and guidance on how
          components function alongside other components and in specific contexts.
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Benefit:</b> Helps teams understand when and how to use components together, reducing implementation time
          and inconsistencies. This ensures more efficient development workflows and stronger alignment across digital
          products.
        </GoabText>

        <GoabText size="heading-m" mt="2xl" mb="l">Workspace component development
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Objective:</b> Design and develop new components required to support the workspace pattern.
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Benefit:</b> Ensures that workspace templates include the necessary foundational components for product
          teams to build efficiently. Standardized workspace components reduce implementation effort, improve
          maintainability, and accelerate workspace pattern adoption.
        </GoabText>

        <GoabText size="heading-m" mt="2xl" mb="l">Expanding design system documentation
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Objective:</b> Enhance documentation with detailed usage guidelines, examples, and design guidelines for
          components and patterns.
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Benefit:</b> Provides clearer direction for designers and developers, leading to more consistent,
          accessible, and comprehensive design system implementation. Well-structured documentation reduces onboarding
          time for new teams, improves design integrity, and minimizes implementation errors.
        </GoabText>

        <GoabText size="heading-m" mt="2xl" mb="l">Addressing findings from accessibility audit
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Objective:</b> Resolve accessibility barriers identified in the Code for Canada audit by addressing issues
          related to DDD Design System components.
        </GoabText>
        <GoabText size="body-m" mt="l">
          <b>Benefit:</b> Improves accessibility and inclusivity across the design system, ensuring a better experience
          for users relying on assistive technologies. This initiative will help eliminate at least eight known
          accessibility barriers, improving WCAG 2.2 AA compliance.
        </GoabText>

        <GoabDivider mt="2xl" mb="3xl"></GoabDivider>

        <h2 id="now">Now</h2>
        <GoabText size="body-m" mt="l" mb="l">
          <i>Work that is currently in progress.</i>
        </GoabText>

        <GoabText size="heading-m" mt="xl" mb="l">Citizen-facing form template</GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Objective:</b> Provide a pre-built template and working example for citizen-facing forms, incorporating
          best practices for usability and accessibility.
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Benefit:</b> Reduces setup time, ensures compliance with usability and accessibility standards, and
          improves consistency across services. This will enable teams to deploy citizen-facing forms faster while
          adhering to government guidelines.
        </GoabText>

        <GoabText size="heading-m" mt="2xl" mb="l">Front-end development skill assessment
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Objective:</b> Assess front-end skills among full-stack developers to identify gaps and training needs.
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Benefit:</b> Helps determine what training materials and documentation are needed to improve front-end
          development outputs. The findings from this research have informed at least three targeted training
          initiatives to support developer growth.
        </GoabText>

        <GoabText size="heading-m" mt="2xl" mb="l">'Foundations' content for the design system website
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Objective:</b> Introduce a 'Foundations' section to the design system website, providing essential guidance
          on design principles, accessibility, and visual standards for government digital products.
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Benefit:</b> Helps teams build modern, consistent, and user-friendly digital experiences by offering clear
          direction on fundamental design topics. This section will standardize key design principles across the
          organization, reinforcing usability and accessibility best practices.
        </GoabText>

        <GoabDivider mt="2xl" mb="3xl"></GoabDivider>

        <h2 id="next">Next</h2>
        <GoabText size="body-m" mt="l" mb="l">
          <i>Work that we have a clear definition around, discovery is underway, or we have moved to the design
            phase.</i>
        </GoabText>

        <GoabText size="heading-m" mt="xl" mb="l">Design system evolution</GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Objective:</b> Elevate the overall quality and visual appeal of government digital products.
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Benefit:</b> Delivers more consistent, high-quality services that match the digital standards citizens
          expect, improving user trust and engagement.
        </GoabText>

        <GoabText size="heading-m" mt="2xl" mb="l">Productivity-focused workspace templates
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Objective:</b> Launch the first set of ready-to-use workspace templates to streamline interface design for
          complex workflows. Additional components and functionality will be introduced throughout the year to enhance
          flexibility and meet evolving product team needs.
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Benefit:</b> Speeds up development by providing well-structured, reusable templates, reducing the need for
          extensive customization. These templates will help product teams build scalable digital workspaces more
          efficiently, ensuring alignment with government standards.
        </GoabText>

        <GoabText size="heading-m" mt="2xl" mb="l">Front-end development training materials
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Objective:</b> Develop structured front-end development training materials for full-stack developers.
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Benefit:</b> Improves the quality, consistency, and efficiency of front-end development across teams.
          Providing standardized training will reduce implementation errors, increase development velocity, and educate
          on accessibility best practices.
        </GoabText>

        <GoabDivider mt="2xl" mb="3xl"></GoabDivider>

        <h2 id="later">Later</h2>
        <GoabText size="body-m" mt="l" mb="l">
          <i>Work that is currently in the early phases of discovery and may see substantial changes as the work becomes
            more defined.</i>
        </GoabText>

        <GoabText size="heading-m" mt="xl" mb="l">Citizen-Facing Form & Workspace Integration Example</GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Objective:</b> Develop a reference implementation demonstrating how the “Citizen-facing form” template can
          connect seamlessly with the “Workspace” template.
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Benefit:</b> Helps teams implement the “Citizen-facing form” and “Workspace” combination by providing a
          ready-to-use example. Instead of building from scratch, teams can leverage this combination to stand up
          government services quickly and efficiently. This will also help ensure design and development consistency
          across projects.
        </GoabText>

        <GoabText size="heading-m" mt="2xl" mb="l">Integrating common platform services

        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Objective:</b> Streamline the adoption of “Citizen-facing form” and “Workspace” patterns by integrating
          frequently used platform services, such as “File service”, “PDF service”, and “Notification Service.”
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          <b>Benefit:</b> Simplifies development and accelerates time to market while improving maintainability,
          scalability, and consistency across government services. This ensures teams can focus on building
          context-specific features instead of rebuilding core functionalities. Additionally, aligning with government
          platform services improves security and compliance with government standards.
        </GoabText>

        
      </div>
    </ComponentContent>
  );
}
