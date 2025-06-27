import { GoabCallout, GoabContainer } from "@abgov/react-components";
import { GoabText } from "@abgov/react-components";
import "../Developers.css";
import { ComponentContent } from "@components/component-content/ComponentContent";
import css from "@routes/patterns/patterns.module.css";
import { ReactGuide } from "@routes/get-started/developers/upgrade-guide/ReactGuide.tsx";
import { AngularGuide } from "@routes/get-started/developers/upgrade-guide/AngularGuide.tsx";
import { InlineCode } from "@components/inline-code/InlineCode.tsx";

export default function DevelopersUpgradePage() {
  return (
    <div className="developer-setup">
      <ComponentContent tocCssQuery="h2[id], h3[id]">

        <GoabText size="heading-m" mt="xl" mb={"xs"}>Developers</GoabText>
        <GoabText size="heading-xl" mb="m">Version update guide</GoabText>
        <GoabText size="body-l" mb="2xl">Step-by-step guide to updating your code from DDD Design System v3 to v4
          (Angular) and v5 to v6 (React)</GoabText>

        <GoabText size="heading-m" mt="l" mb="l">
          The update introduces the following key improvements:
        </GoabText>

        <GoabText size="body-m" mt="l" mb="l">
        <ul>
          <li><strong>Type-ahead support for Angular components:</strong> Get coding faster with smart suggestions directly in your IDE.</li>
          <li><strong>New features and properties added across existing components:</strong> More flexibility, and improved accessibility.</li>
          <li><strong>New components available:</strong> Build more complex interfaces with less custom code.</li>
          <li><strong>Improved error checking during builds:</strong> Catch issues earlier for a smoother development experience.</li>
        </ul>
        </GoabText>
        <GoabText size="body-m" mt="l" mb="l">
          This guide will help you update your project to DDD Design System v4 (Angular) and v6 (React).
        </GoabText>

        <GoabCallout size="medium" type="important" heading={"Legacy component: Form stepper"} mb={"l"} mt={"xl"}
                     maxWidth={"65ch"}>
          The component is stable and supported in the latest major release. However, we recommend using the <a href="/patterns/public-form">public form pattern</a> for a more modular, flexible, and accessible approach.
        </GoabCallout>

        <GoabContainer mt="xl">
          <GoabText size="heading-m" mb="m">
            Major differences between current and new version
          </GoabText>
          <GoabText size="body-m" mt="l">
            One of the most significant changes in v4 (Angular) and v6 (React) is the renaming of component prefixes to
            align better across frameworks. In React, the prefix changes
            from <InlineCode>GoA</InlineCode> to <InlineCode>Goab</InlineCode>, while in Angular, it changes
            from <InlineCode>goa-</InlineCode> to <InlineCode>goab-</InlineCode>. See the following examples:
          </GoabText>
          <div className={css.descriptionWithList}>
            <h4>React</h4>
            <ul>
              <li>
                <InlineCode>GoAButton</InlineCode> will be <InlineCode>GoabButton</InlineCode>
              </li>
              <li>
                <InlineCode>GoAContainer</InlineCode> will be <InlineCode>GoabContainer</InlineCode>
              </li>
            </ul>
            <h4>Angular</h4>
            <ul>
              <li>
                <InlineCode>goa-button</InlineCode> will be <InlineCode>goab-button</InlineCode>
              </li>
              <li>
                <InlineCode>goa-container</InlineCode> will be{" "}
                <InlineCode>goab-container</InlineCode>
              </li>
            </ul>
          </div>
        </GoabContainer>
  <GoabCallout type="information" heading="Watch a real service upgrade" maxWidth="65ch">
    See a real government service go through a version update in this short, three-part video series:

    <ol>
      <li>
        <strong>Updating versions</strong> – two ways to install the latest packages
      </li>
      <li>
        <strong>Renaming components</strong> – update old names to new names
      </li>
      <li>
        <strong>Updating component props</strong> – adjust component properties and clean up warnings
      </li>
    </ol>
    <p>
      <a href="https://abgov.sharepoint.com/:u:/r/sites/DDDdesignsystem/SitePages/Version-update-walkthrough.aspx?csf=1&web=1&share=EWA6F1DYep1AjhES5h3NoBkBxL6fd2ym9wtiyXyz3klPCw&e=FFsDQM">
        View the upgrade videos
      </a>
    </p>
  </GoabCallout>
        <ReactGuide />
        <AngularGuide />
      </ComponentContent>
    </div>
  );
}
