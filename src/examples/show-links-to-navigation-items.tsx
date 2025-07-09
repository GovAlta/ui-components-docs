import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabAppFooter,
  GoabAppFooterMetaSection,
  GoabAppFooterNavSection, GoabAppFooterProps,
  GoabFooterNavSectionProps
} from "@abgov/react-components";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { propsToString } from "@components/sandbox/BaseSerializer.ts";

type FooterNavPropsType = GoabFooterNavSectionProps;
type FooterPropsType = GoabAppFooterProps;
type CastingType = {
  // add any required props here
  [key: string]: unknown;
};

export const ShowLinksToNavigationItems = () => {
  const {version} = useContext(LanguageVersionContext);

  const [appFooterNavBindings, setAppFooterNavBindings] = useState<ComponentBinding[]>([
    {
      label: "Max content width",
      type: "string",
      name: "maxContentWidth",
      value: "100%",
    },
    {
      label: "Max footer nav columns",
      type: "number",
      name: "maxColumnCount",
      value: 1,
    },
    {
      label: "Heading",
      type: "string",
      name: "heading",
      value: "",
    },
  ]);
  const [footerNavSectionProps, setFooterNavSectionProps] = useState<FooterNavPropsType>({
    maxColumnCount: 1,
    heading: "",
  });
  const [footerProps, setFooterProps] = useState<FooterPropsType>({
    maxContentWidth: "100%"
  });

  function onSandbox2Change(bindings: ComponentBinding[], props: Record<string, unknown>) {
    const footerProps = { maxContentWidth: props.maxContentWidth };
    const footerNavSectionProps = {
      heading: props.heading || "",
      maxColumnCount: props.maxColumnCount || 1
    };

    setFooterProps(footerProps as CastingType);
    setFooterNavSectionProps(footerNavSectionProps as CastingType);
    setAppFooterNavBindings(bindings);
  }

  return (
    <Sandbox
      properties={appFooterNavBindings}
      onChange={onSandbox2Change}
      skipRenderOnly={"angular"}
      fullWidth>
      {version === "old" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
                <goa-app-footer ${propsToString(footerProps as Record<string, string>, "angular", "old")}>
                  <goa-app-footer-nav-section slot="nav" ${propsToString(footerNavSectionProps as Record<string, string>, "angular", "old")}>
                    <a href="a.html">
                      Arts and culture
                    </a>
                    <a href="b.html">
                      Education and training
                    </a>
                    <a href="c.html">
                      Family and social supports
                    </a>
                    <a href="d.html">
                      Housing and community
                    </a>
                    <a href="e.html">
                      Life events
                    </a>
                    <a href="f.html">
                      Business and economy
                    </a>
                    <a href="g.html">
                      Emergencies and public safety
                    </a>
                    <a href="h.html">
                      Government
                    </a>
                    <a href="i.html">
                      Jobs and employment
                    </a>
                    <a href="j.html">
                      Moving to Alberta
                    </a>
                  </goa-app-footer-nav-section>
                  <goa-app-footer-meta-section slot="meta">
                    <a href="privacy.html">
                      Privacy
                    </a>
                    <a href="disclaimer.html">
                      Disclaimer
                    </a>
                    <a href="accessibility.html">
                      Accessibility
                    </a>
                    <a href="using-alberta.html">
                      Using Alberta.ca
                    </a>
                  </goa-app-footer-meta-section>
                </goa-app-footer>
               `}
      />}

      {version === "new" && <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
                <goab-app-footer ${propsToString(footerProps as Record<string, string>, "angular", "new")}>
                  <goab-app-footer-nav-section slot="nav" ${propsToString(footerNavSectionProps as Record<string, string|number>, "angular", "new")}>
                  <a href="a.html">
                    Arts and culture
                  </a>
                  <a href="b.html">
                    Education and training
                  </a>
                  <a href="c.html">
                    Family and social supports
                  </a>  
                  <a href="d.html">
                    Housing and community
                  </a>
                  <a href="e.html">
                    Life events
                  </a>
                  <a href="f.html">
                    Business and economy
                  </a>
                  <a href="g.html">
                    Emergencies and public safety
                  </a>
                  <a href="h.html">
                    Government
                  </a>
                  <a href="i.html">
                    Jobs and employment
                  </a>
                  <a href="j.html">
                    Moving to Alberta
                  </a>
                </goab-app-footer-nav-section>
                <goab-app-footer-meta-section slot="meta">
                  <a href="privacy.html">
                    Privacy
                  </a>
                  <a href="disclaimer.html">
                    Disclaimer
                  </a>
                  <a href="accessibility.html">
                    Accessibility
                  </a>
                  <a href="using-alberta.html">
                    Using Alberta.ca
                  </a>
                </goab-app-footer-meta-section>
              </goab-app-footer>
               `}
      />}

      <GoabAppFooter {...footerProps}>
        <GoabAppFooterNavSection {...footerNavSectionProps}>
          <a href="a.html">Arts and culture</a>
          <a href="b.html">Education and training</a>
          <a href="c.html">Family and social supports</a>
          <a href="d.html">Housing and community</a>
          <a href="e.html">Life events</a>
          <a href="f.html">Business and economy</a>
          <a href="g.html">Emergencies and public safety</a>
          <a href="h.html">Government</a>
          <a href="i.html">Jobs and employment</a>
          <a href="j.html">Moving to Alberta</a>
        </GoabAppFooterNavSection>
        <GoabAppFooterMetaSection>
          <a href="privacy.html">Privacy</a>
          <a href="disclaimer.html">Disclaimer</a>
          <a href="accessibility.html">Accessibility</a>
          <a href="using-alberta.html">Using Alberta.ca</a>
        </GoabAppFooterMetaSection>
      </GoabAppFooter>
    </Sandbox>
  )
}

export default ShowLinksToNavigationItems;
