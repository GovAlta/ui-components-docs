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
        <p>Work that is currently in progress.</p>
        <h3>Citizen-facing form documentation and examples:</h3>
        <ul>
          <li>
            <strong>Objective:</strong>To simplify the design and development process by offering 
            predefined page layouts and comprehensive guidelines on the structure and workflow of 
            citizen-facing forms.
          </li>
          <li>
            <strong>Benefit:</strong> Accelerates delivery, ensures consistency, and maintains 
            high quality across projects.
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
