import { Link } from "react-router-dom";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabText } from "@abgov/react-components";

export default function DevelopersVSCodePage() {
  return (
    <ComponentContent>
      <GoabText size="heading-m" mt="xl" mb={"xs"}>Developers</GoabText>
      <GoabText size="heading-xl" mt="none" mb="m">VS Code</GoabText>
      <GoabText size="body-l" mt="none" mb="xl">
        You can use VS Code's autocomplete suggestions for design system components and design tokens.
      </GoabText>

      <GoabText size="heading-m" mt="2xl" mb="m">Design tokens autocomplete</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        Get code autocomplete suggestions for the <Link to="/design-tokens">goa design tokens.</Link>
      </GoabText>
      <ul>
        <li>Automatically works for CSS and Sass files</li>
        <li>Preview design token values in autocomplete description</li>
        <li>Color previews for all color tokens</li>
        <li>Relevant code completions based on the current line of code</li>
      </ul>

      <GoabText size="heading-m" mt="2xl" mb="m">Components autocomplete</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        In order to use VS Code's{" "}
        <a href="https://github.com/microsoft/vscode-custom-data" target="_blank">
          HTML/CSS Custom Data
        </a>{" "}
        support to enhance GoA Web Components HTML editing experience, include our html custom data setting found
        in <code>.vscode/settings.json</code>:
      </GoabText>
    </ComponentContent>
  );
}
