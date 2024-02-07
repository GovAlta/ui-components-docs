import { Link } from "react-router-dom";

export default function DevelopersVSCodePage() {
  return (
    <>
      <h1>Developers</h1>
      <h2>VS Code</h2>
      <p>
        You can use VS Code's autocomplete suggestions for design system components and design
        tokens.
      </p>

      <h3>Design tokens autocomplete</h3>
      <p>
        Get code autocomplete suggestions for the <Link to="/design-tokens">goa design tokens.</Link>
      </p>
      <ul>
        <li>Automatically works for CSS and Sass files</li>
        <li>Preview design token values in autocomplete description</li>
        <li>Color previews for all color tokens</li>
        <li>Relevant code completions based on the current line of code</li>
      </ul>

      <h3>Components autocomplete</h3>
      <p>
        In order to use VS Code's{" "}
        <a href="https://github.com/microsoft/vscode-custom-data" target="_blank">
          HTML/CSS Custom Data
        </a>{" "}
        support to enhance GoA Web Components HTML editing experience, include our html custom data
        setting found in <code>.vscode/settings.json</code>:
      </p>
    </>
  );
}
