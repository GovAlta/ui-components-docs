import { ComponentContent } from "@components/component-content/ComponentContent";

export default function AccessibilityPage() {
  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">
      <h1>Accessibility</h1>
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

        <h2 id="now">Now</h2>
        <p>Work that is currently in progress.</p>
        <h3>Citizen-facing form documentation and examples:</h3>
        <ul>
          <li>
            <strong>Objective:</strong> To simplify the design and development process by offering 
            predefined page layouts and comprehensive guidelines on the structure and workflow of 
            citizen-facing forms. 
          </li>
          <li>
            <strong>Benefit:</strong> Accelerates delivery, ensures consistency, and maintains 
            high quality across projects.
          </li>
        
        </ul>

        <h3>Angular library wrappers:</h3>
        <ul>
          <li>
            <strong>Objective:</strong> To streamline the integration of our components with Angular, 
            enhancing natural development flows and real-time error checking.
          </li>
          <li>
            <strong>Benefit:</strong> Increases efficiency and reduces development time, enabling 
            Angular developers to utilize design system components more effectively.
          </li>
        
        </ul>

        <h2 id="next">Next</h2>
        <p>Work that we have a clear definition around, discovery is well underway, or we have moved 
          to the design phase.</p>
        <h3>Sample citizen-facing form:</h3>
        <ul>
          <li>
            <strong>Objective:</strong> To create an implementation of a citizen-facing form through 
            an end-to-end sample service that integrates all components as they would appear in actual 
            use.
          </li>
          <li>
            <strong>Benefit:</strong> Provides a practical example to facilitate the adoption of the 
            citizen-facing form pattern.
          </li>
        
        </ul>

        <h3>Design documentation enhancement:</h3>
        <ul>
          <li>
            <strong>Objective:</strong> To centralize design resources by migrating design and usage 
            guidelines from Figma to our design system website.
          </li>
          <li>
            <strong>Benefit:</strong> Improves accessibility of documentation for teams and allows 
            for the refinement of content based on feedback from earlier iterations.
          </li>
        
        </ul>

        <h2 id="future">Future</h2>
        <p>Work that is currently in the early phases of discovery and may see substantial changes 
          as the work becomes more defined.</p>
        <h3>Continued focus on patterns:</h3>
        <p>Patterns will help drive consistency and quality across digital services. They also 
          allow teams to get to working software more quickly, leaving more time for content design, 
          user and stakeholder engagement, and testing.</p>
        <h4>Complex form pattern:</h4>
        <ul>
          <li>
            <strong>Definition:</strong> For frequent or expert users, this pattern emphasizes speed 
            and flexibility, streamlining repeated form interactions.
          </li>
          <li>
            <strong>Context:</strong> Ideal for scenarios where efficiency and speed are prioritized 
            over clarity and error prevention.
          </li>
        
        </ul>
        
        <h4>Case management patterns:</h4>
        <ul>
          <li>
            <strong>Definition:</strong> To support professional users in managing, reviewing, and 
            processing cases within work contexts.
          </li>
          <li>
            <strong>Context:</strong> Used in services where cases are created, reviewed, actioned, 
            and processed, supporting "case" workflows.
          </li>
        
        </ul>
        
      </div>
    </ComponentContent>
  );
}
