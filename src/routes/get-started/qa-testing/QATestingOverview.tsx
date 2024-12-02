import { ComponentContent } from "@components/component-content/ComponentContent";

export default function QATestingOverviewPage() {
  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">
      <h1>QA Testing</h1>
      <h3 className="introduction">
        This document outlines the testing procedure for the DDD design system. The procedure
        ensures that all components function correctly and integrate seamlessly within DDD products.
      </h3>

      <div className="max-width-72ch">
        <h2 id="testingobjectives">Testing Objectives</h2>
        <ul>
          <li>Ensure that the coded components match the design specification.</li>
          <li>Ensure compatibility with both React and Angular frameworks.</li>
          <li>Validate the responsiveness and accessibility of components.</li>
          <li>Validate the mobile version of the components.</li>
          <li>Ensure the documentation on the design system website is accurate.</li>
        </ul>

        <h2 id="testcases">Test Cases</h2>
        <h3>Component Testing</h3>
        <ul>
          <li>Verify that the rendered component is true to the design and styling guidelines.</li>
          <li>Verify the component reflects the configured properties.</li>
          <li>Verify the corresponding event is fired when interacting with the component.</li>
        </ul>

        <h3>Responsiveness Testing</h3>
        <ul>
          <li>Test components on different screen sizes (mobile, tablet, desktop).</li>
          <li>Use browser developer tools to simulate different devices.</li>
        </ul>

        <h3>Accessibility Testing</h3>
        <ul>
          <li>Run Lighthouse audits to check accessibility scores.</li>
          <li>Ensure all components have appropriate ARIA labels and roles.</li>
          <li>Test keyboard navigation.</li>
          <li>Test with NVDA for screen reader compatibility.</li>
        </ul>

        <h3>Cross-browser Testing</h3>
        <ul>
          <li>Test components on the latest versions of Chrome, Firefox, Safari, and Edge.</li>
          <li>Test for mobile compatibility using Chrome's "device mode".</li>
          <li>Ensure consistency in appearance and behaviour across browsers.</li>
        </ul>

        <h3>Bug Testing</h3>
        <ul>
          <li>
            Once the issue is fixed, reproduce it with the main branch, then verify the fix on the
            PR branch.
          </li>
          <li>Thoroughly test the component in each aspect.</li>
        </ul>

        <h2 id="reporting">Reporting</h2>
        <ul>
          <li>
            Document updated testing results, findings, and screenshots in the pull request
            comments.
          </li>
          <li>Any new issues discovered are documented in the GitHub project backlog.</li>
        </ul>
      </div>
    </ComponentContent>
  );
}
