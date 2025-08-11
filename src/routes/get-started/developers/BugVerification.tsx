import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabCallout, GoabText } from "@abgov/react-components";

export default function BugVerificationPage() {
  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">
      <GoabText size="heading-m" mt="xl" mb={"xs"}>Developers</GoabText>
      <GoabText size="heading-xl" mt="none" mb="m">Verify a bug</GoabText>
      <GoabText size="body-l" mt="none" mb="xl">
        How to resolve issues with design system components </GoabText>

      <GoabText size="body-m" mt="l" mb="l">
        Follow these steps when you encounter issues with our design system components. This process helps isolate
        problems, streamlines investigation, and speeds up resolution.
      </GoabText>

      <GoabCallout type="important" maxWidth="480px" mb={"2xl"}>
        This process is for Angular or React users only.
      </GoabCallout>

      <h2 id="version-check">1. Version check</h2>
      <GoabText size="body-m" mt="l" mb="m">
        Ensure you are using the latest version of:
      </GoabText>
      <ul>
        <li>Web components</li>
        <li> Angular or React</li>
      </ul>
      <GoabText size="body-m" mt="l" mb="2xl">
        If not, upgrade and retest. If yes, proceed to step 2.
      </GoabText>

      <h2 id="test-with-templates">2. Test with product templates</h2>
      <GoabText size="body-m" mt="l" mb="m">
        Use Angular or React product templates from the design system to isolate and verify the bug:
      </GoabText>
      <GoabText size="body-m" mb="2xl">
      <ul>
        <li><a href="https://github.com/GovAlta/ui-components-angular-template">Test with Angular template</a></li>
        <li><a href="https://github.com/GovAlta/ui-components-react-template">Test with React template</a></li>
      </ul>
      </GoabText>

      <h2 id="recreate-the-issue">3. Recreate the issue</h2>
      <GoabText size="body-m" mb="2xl">
        <ul>
          <li>Set up a minimal test environment</li>
          <li>Use minimal code required for the example to function</li>
          <li>Include only problematic components</li>
          <li>Verify if the issue can be replicated</li>
        </ul>
      </GoabText>

      <h2 id="sharing-and-reporting">4. Sharing and reporting</h2>
      <GoabText size="body-m" mt="l" mb="m">
        If the issue is replicable:
      </GoabText>
      <ul>
        <li>Share the template app link in the <a
          href="https://goa-dio.slack.com/archives/C02PLLT9HQ9">#design-system-support</a> channel
        </li>
        <li>Provide a link to your repo where we can quickly view and replicate the issue</li>
      </ul>
      <GoabText size="body-m" mt="l" mb="l">
        Following these steps will help to ensure efficient investigation and quicker resolution of design system
        component issues.
      </GoabText>
    </ComponentContent>
  );
}
