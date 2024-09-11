import { GoabContainer } from "@abgov/react-components";
import "./Overview.css";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";
export default function DesignTokensOverviewPage() {
  return (
    <ComponentContent contentClassName="overview-page">
      <h1>Styles</h1>
      <h3 className="introduction">
        We use design tokens to communicate design decisions across design and development. These
        design decisions are a limited set of options for spacing, colour, typography, object
        styles, and more that maintain consistency across the design system.
      </h3>

      <p>
        These design tokens are used in place of hard-coded values in order to ensure flexibility
        and unity across all digital products. They are shared references used together by design
        and development, packaged in a format that’s consumable and easily distributed across all
        platforms.
      </p>
      <p>
        The tokens are an abstraction, allowing underlying values to change in different scenarios
        without affecting the designer or developer experience.
      </p>
      <p>
        Design tokens are created and updated through the design tool and exported as a JSON file.
        This file is then converted with Style Dictionary into formats like CSS and Sass for use by
        product teams.
      </p>

      <GoabContainer type="non-interactive" mt="2xl" mb="xs">
        <h4>Design token example</h4>
        <p>
          The GoA’s colour for a hover interaction is #004F84. This property is defined as a design
          token called <code className="inline">--goa-color-interactive-hover</code>. This token is used in Figma as a
          style and used in code as CSS or SASS variables
        </p>
      </GoabContainer>

      <h3>What this means for...</h3>
      <h4>Developers</h4>
      <p>
        You can access the design tokens as an NPM package here:{" "}
        <a href="https://www.npmjs.com/package/@abgov/design-tokens" target="_blank">npm: @abgov/design-tokens</a>.
        Incorporate the SCSS or CSS file into your projects, replacing hard-coded values with the
        token variables from the design system. Your designers can use and reference these design
        tokens in their tools to hand off their designs to you.
      </p>
      <p>
        Save time going back and forth with your designer on hex values and adjusting a few pixels
        at a time. "The colour is: <code className="inline">--goa-color-info-default</code>, the spacing is:{" "}
        <code className="inline">--goa-spacing-m</code>".
      </p>

      <h4>Designers</h4>
      <p>
        Many of the design tokens are represented in Figma as styles within the shared GOA Figma
        Styles Library here: <a href="https://www.figma.com/file/ylmHeuDMfxnDBnP1VaQYz8/%E2%9D%96-Styles-and-Guidelines-%7C-DDD?type=design&node-id=4154-103403&mode=design&t=gILvZW7G5Zl8hYZz-4" target="_blank">Styles, Guidelines, and Patterns | DDD</a>, and
        is automatically enabled in your project files. Spacing can be applied in Figma using the
        spacing component. As a designer, you can communicate design decisions using design tokens,
        which developers can then use in code.
      </p>
      <p>
        Save time going back and forth with your developer on hex values and adjusting a few pixels
        at a time. "The colour is: <code className="inline">--goa-color-info-default</code>, the spacing is:{" "}
        <code className="inline"> --goa-spacing-m</code>".
      </p>
    </ComponentContent>
  );
}
