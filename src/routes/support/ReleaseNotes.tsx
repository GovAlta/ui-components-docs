import { PageContent } from "@components/page-content/PageContent";

export default function ReleaseNotesPage() {
  return (
    <PageContent>
      <h1>Release notes</h1>
      <p>
        Design system release notes are official documentation that accompany a new version or
        update of a design system. These notes provide a comprehensive overview of the changes made,
        including new features, modifications to existing components, bug fixes, and deprecated
        elements.
      </p>
      <a href="https://github.com/GovAlta/ui-components/releases" target="_blank">
        View our release notes on GitHub
      </a>
    </PageContent>
  );
}
