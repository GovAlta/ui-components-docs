# Project Overview
This project contains the public documentation for the Government of Alberta's Design System.

## Libraries and Frameworks
- The site is built with React components from the Government of Alberta's UI Components library.

## Folder Structure
- `src/routes/home.tsx`: The home page.
- `src/routes/get-started`: The pages for starting with the design system.
- `src/routes/examples/ExamplesOverview.tsx`: The page listing all examples.
- `src/examples`: Examples of patterns, pages, tasks, component configurations, flows, and more.
- `src/routes/components/AllComponents.tsx`: The page listing all components.
- `src/routes/components`: The pages for each UI component.
- `src/routes/design-tokens`: The pages for design tokens.
- `src/routes/foundations`: The pages for design foundations.

## Component versions
- Documentation for the most recent version of components are shown with `version === "new"`.
- Documentation for old Long-Term Support (LTS) components are shown with `version === "old"`.

## Commits & Pull Requests
- Use Conventional Commits format for commit messages.
- Use the present tense.
- Use the imperative mood.
- Limit the first line to 72 characters or less.
- Start the commit message with a reference to the GitHub Issue number, such as `feat(#1234):`
- If the commit relates to an issue, include "Closes #ISSUE_NUMBER" in the commit message.
- If the commit relates to a breaking change, include "BREAKING CHANGE:" in the commit message.

## Pull Requests
- Only add a single commit to a Pull Request.
- Start the Pull Request title with a reference to the GitHub Issue number, such as `feat(#1234):`

## CSS and Design Tokens
- Use CSS custom properties that are defined by our design tokens.
- Name custom properties for global styles in this format: `--goa-[category]-[name]`, such as `--goa-color-primary`.
- Name custom properties for component-specific styles in this format: `--goa-[component]-[category]-[name]`.
