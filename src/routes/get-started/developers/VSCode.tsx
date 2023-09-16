export const DeveloperVSCode: React.FC = () => {
  return (
    <>
      <h1>Developers</h1>
      <h2>VS Code</h2>
      <p>
      You can use VS Code's autocomplete suggestions for design system components and design tokens.
      </p>
      <h3>Design tokens autocomplete</h3>
      <p>Get code autocomplete suggestions for the goa design tokens.</p>
      <ul>
      <li>Automatically works for CSS and Sass files</li>
      <li>Preview design token values in autocomplete description</li>
      <li>Color previews for all color tokens</li>
      <li>Relevant code completions based on the current line of code</li>
      </ul>
      <h3>
      Components autocomplete
      </h3>
      <p>
      In order to use VS Code's <a href="https://github.com/microsoft/vscode-custom-data">HTML/CSS Custom Data</a> support to enhance GoA Web Components HTML editing experience, include our html custom data setting found in .vscode/settings.json:
      </p>
    </>
  );
};

export default DeveloperVSCode;
