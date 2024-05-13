import { ComponentContent } from "@components/component-content/ComponentContent";

export default function RoadmapPage() {
  return (
    <ComponentContent>
      <h1>Roadmap</h1>
      <h3 className="introduction">
        A high level summary of the work the design system team plans to complete in 2024. For more
        information on the latest releases, visit the{" "}
        <a href="https://github.com/GovAlta/ui-components/releases" target="_blank">
          release notes
        </a>
        
      </h3>
      <div className="max-width-72ch">
        <p>
          Please note the roadmap is subject to changes as we learn more information. We will
          communicate any updates on the direction of the design system so that product teams can
          align, prepare, and strategize their work as applicable.
        </p>
        <p>
          See our{" "}
          <a href="https://github.com/orgs/GovAlta/projects/35/views/1" target="_blank">
            GitHub design system backlog
          </a>{" "}
          for more details on our priorities and day-to-day activities.
        </p>

        <h2>Now</h2>
        <ul>
          <li>
            <strong>Design system documentation upgrade:</strong> We plan to enhance and centralize
            our documentation site to serve both design and technical practitioners better. Key
            updates will include a real-time component sandbox for configuring components, and
            context-specific examples with code samples, all designed to expedite product
            development.
          </li>
          <li>
            <strong>User experience-focused form improvements:</strong> Acknowledging the importance
            of forms in government services, we are developing a form pattern in conjunction with
            product teams. This will provide guidance and design and development resources to easily
            create user-friendly and accessible forms, thereby enhancing the user experience and
            streamline data collection.
          </li>
          <li>
            <strong>Design system onboarding:</strong> We're preparing a comprehensive onboarding
            process for new design and technical practitioners, providing them with the knowledge
            and tools to build efficient, consistent services that encourage cross-functional
            collaboration.
          </li>
        </ul>

        <h2>Next</h2>
        <ul>
          <li>
            <strong>Pattern research initiative:</strong> With this initiative we aim to improve our
            visibility and understanding of the organization's existing 3D products to identify and
            document the most effective and frequently used service patterns, thereby accelerating
            development and creating better services.
          </li>
          <li>
            <strong>Collaborative UI components delivery:</strong> The design system plans to
            partner with platform teams to co-create components and patterns. This initiative builds
            on the success of our past collaboration with the Seniors Community and Social Services
            (SCSS) platform team. It aims to foster similar partnerships to deliver UI components
            and patterns effectively.
          </li>
        </ul>

        <h2>Future</h2>
        <ul>
          <li>
            <strong>
              Initiate a pilot project to build a digital service with a product team:
            </strong>{" "}
            As part of this initiative, members of the design system team will be integrated into a
            product team. This arrangement benefits both sides - product teams will have direct
            access to design system expertise, speeding up their processes. Concurrently, design
            system team members will gain hands-on experience on how design system components are
            incorporated into a real DDD product.
          </li>
        </ul>
      </div>
    </ComponentContent>
  );
}
