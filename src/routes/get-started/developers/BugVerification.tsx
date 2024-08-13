import { ComponentContent } from "@components/component-content/ComponentContent";

export default function BugVerificationPage() {
  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">
  <h1>Verify a bug</h1>
      <h2>How to resolve issues with design system components</h2>
      <p>Follow these steps when you encounter issues with our design system components. This process helps isolate problems, streamlines investigation, and speeds up resolution.</p>

<p>This process is for Angular or React users only.</p>
  
  <h3>1. Version check</h3>
      <p>Ensure you are using the latest version of:</p>
      <ul>
      <li>Web components</li>
      <li> Angular or React</li>
      </ul>

      <p>If not, upgrade and retest. If yes, proceed to step 2.</p>

      <h3>2. Test with product templates</h3>
      <p>Use Angular or React product templates from the design system to isolate and verify the bug:</p>

      <ul>
      <li><a href="https://github.com/GovAlta/ui-components-angular-template">Test with Angular template</a></li>
      <li><a href="https://github.com/GovAlta/ui-components-react-template">Test with React template</a></li>
      </ul>

      <h3>3. Recreate the issue</h3>
<ul>
<li>Set up a minimal test environment</li>
  <li>Use minimal code required for the example to function</li>
  <li>Include only problematic components</li>
  <li>Verify if the issue can be replicated</li>
</ul>
      <h3>4. Sharing and reporting</h3>
      <p>If the issue is replicable:</p>
      <ul>
      <li>Share the template app link in the <a href="https://goa-dio.slack.com/archives/C02PLLT9HQ9">#design-system-support</a> channel</li>
        <li>Provide a link to your repo where we can quickly view and replicate the issue</li>
      </ul>

      <p>Following these steps will help to ensure efficient investigation and quicker resolution of design system component issues.</p>
    
    </ComponentContent>
  );
}
