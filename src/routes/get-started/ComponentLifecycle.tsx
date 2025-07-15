import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabText } from "@abgov/react-components";

export default function ComponentLifecyclePage() {
  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">
      <GoabText size="heading-xl" mb="m" mt="xl">
        Component lifecycle
      </GoabText>
      <GoabText size="body-m" mb="2xl">
        This lifecycle defines the stages every component in the Design System undergoes, from Alpha
        to Production to Legacy. Each stage describes the component's maturity, adoption level, and
        support status.
        <br />
        <br />
        To request new components or enhancements, please follow the{" "}
        <a href="/get-started/contribute">Design contribution process</a>.
      </GoabText>

      {/* Alpha Section */}
      <h2 id="alpha">Alpha</h2>
      <GoabText size="body-l" mb="m">
        New changes or components available for testing and feedback prior to production.
      </GoabText>
      <GoabText size="body-m" mb="xs">
        <strong>Characteristics:</strong>
      </GoabText>
      <ul style={{ marginBottom: "1.5rem" }}>
        <li>Actively gathering feedback from selected teams</li>
        <li>May be unstable or subject to breaking changes</li>
        <li>Not yet documented publicly</li>
      </ul>
      <GoabText size="body-m" mb="xs">
        <strong>Goals</strong>
      </GoabText>
      <ul style={{ marginBottom: "2.5rem" }}>
        <li>Validate functionality and design completeness</li>
        <li>Ensure technical and accessibility standards compliance</li>
        <li>Prepare documentation for public release</li>
      </ul>

      {/* Production Section */}
      <h2 id="production">Production</h2>
      <GoabText size="body-l" mb="m">
        Stable, fully supported component ready for wide adoption.
      </GoabText>
      <GoabText size="body-m" mb="xs">
        <strong>Characteristics:</strong>
      </GoabText>
      <ul style={{ marginBottom: "1.5rem" }}>
        <li>Fully documented (design guidelines, properties, examples)</li>
        <li>Meets accessibility and design system standards</li>
        <li>Optimized for mobile use</li>
        <li>Actively maintained with regular updates and bug fixes</li>
        <li>Documentation available publicly</li>
      </ul>
      <GoabText size="body-m" mb="xs">
        <strong>Goals</strong>
      </GoabText>
      <ul style={{ marginBottom: "2.5rem" }}>
        <li>Promote widespread adoption</li>
        <li>Continuously monitor for improvements and bug reports</li>
        <li>Maintain feature parity across React and Angular</li>
      </ul>

      {/* Legacy Section */}
      <h2 id="legacy">Legacy</h2>
      <GoabText size="body-l" mb="m">
        Older components supported primarily for existing implementations; transition to alternative
        is recommended.
      </GoabText>
      <GoabText size="body-m" mb="xs">
        <strong>Characteristics:</strong>
      </GoabText>
      <ul style={{ marginBottom: "1.5rem" }}>
        <li>No active maintenance or updates (critical issues may remain unresolved)</li>
        <li>Recommended alternative clearly identified</li>
        <li>Marked as "Legacy" within official documentation</li>
      </ul>
      <GoabText size="body-m" mb="xs">
        <strong>Goals</strong>
      </GoabText>
      <ul style={{ marginBottom: "2.5rem" }}>
        <li>Assist teams with migration strategies</li>
        <li>Actively communicate the benefits of migrating to newer components</li>
        <li>Minimize long-term maintenance overhead and technical debt</li>
      </ul>
    </ComponentContent>
  );
}
