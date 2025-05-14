import { GoabCallout, GoabContainer } from "@abgov/react-components";
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
        <h1>Version update guide</h1>
        <h3>Step-by-step guide to updating your code from DDD Design System v3 to v4 (Angular) and v5 to v6 (React)</h3>
        <p>
          The update introduces the following key improvements:
        </p>
        <ul>
          <li><strong>Type-ahead support for Angular components:</strong> Get coding faster with smart suggestions directly in your IDE.</li>
          <li><strong>New features and properties added across existing components:</strong> More flexibility, and improved accessibility.</li>
          <li><strong>New components available:</strong> Build more complex interfaces with less custom code.</li>
          <li><strong>Improved error checking during builds:</strong> Catch issues earlier for a smoother development experience.</li>
        </ul>
        <p>
          This guide will help you update your project to DDD Design System v4 (Angular) and v6 (React).
        </p>

        <GoabCallout size="medium" type="important" heading={"Legacy component: Form stepper"} mb={"l"}>
          The component is stable and supported in the latest major release. However, we recommend using the <a href="/patterns/public-form">public form pattern</a> for a more modular, flexible, and accessible approach.
        </GoabCallout>

        <GoabContainer mt="xl">
          <h3>Major differences between current and new version</h3>
          <p>
            One of the most significant changes in v4 (Angular) and v6 (React) is the renaming of component prefixes to align
            better across frameworks. In React, the prefix changes from <InlineCode>GoA</InlineCode>{" "}
            to <InlineCode>Goab</InlineCode>, while in Angular, it changes from{" "}
            <InlineCode>goa-</InlineCode> to <InlineCode>goab-</InlineCode>. See the following
            examples:
          </p>
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

        <ReactGuide />
        <AngularGuide />
      </ComponentContent>
    </div>
  );
}
