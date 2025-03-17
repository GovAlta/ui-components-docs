import { GoabContainer } from "@abgov/react-components";
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
          This guide will help you update your project to DDD Design System v4 (Angular) and v6 (React). The update
          introduces key improvements, including enhanced alignment between Angular and React
          properties, better error checking during builds, and type-ahead suggestions for Angular
          components. These changes aim to improve the developer experience when working with the
          design system.
        </p>
        <GoabContainer>
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
