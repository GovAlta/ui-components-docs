import { GoabButton, GoabHeroBanner, GoabHeroBannerActions } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { Sandbox } from "@components/sandbox";

export const HeroBannerWithActions = () => {
  const { version } = useContext(LanguageVersionContext);

  function noop() {}

  return (
    <>
      <Sandbox skipRender fullWidth>
        {version === "old" && (
          <CodeSnippet
            lang="html"
            tags="angular"
            allowCopy={true}
            code={`
<goa-hero-banner heading="Supporting public citizens">
  Digital services help to support Albertan citizens receive government services.
  <div slot="actions">
    <goa-button type="start" (_click)="onClick($event)">Call to action</goa-button>
  </div>
</goa-hero-banner>
								`}
          />
        )}

        {version === "new" && (
          <CodeSnippet
            lang="html"
            tags="angular"
            allowCopy={true}
            code={`
<goab-hero-banner heading="Supporting Businesses" [actions]="heroBannerActionTemplate">
  Resources are available to help Alberta entrepreneurs and small businesses start, grow and succeed.
  <ng-template #heroBannerActionTemplate>
    <goab-button type="start">Call to action</goab-button>
  </ng-template>
</goab-hero-banner>
								`}
          />
        )}

        {/*React code*/}
        {version === "old" && (
          <CodeSnippet
            lang="html"
            tags="react"
            allowCopy={true}
            code={`
<GoAHeroBanner heading="Supporting Businesses">
  Resources are available to help Alberta entrepreneurs and small businesses start, grow and succeed.
  <GoAHeroBannerActions>
    <GoAButton type="start" onClick={noop}>Call to action</GoAButton>
  </GoAHeroBannerActions>
</GoAHeroBanner>
								`}
          />
        )}
        {version === "new" && (
          <CodeSnippet
            lang="html"
            tags="react"
            allowCopy={true}
            code={`
<GoabHeroBanner heading="Supporting Businesses">
  Resources are available to help Alberta entrepreneurs and small businesses start, grow and succeed.
  <GoabHeroBannerActions>
    <GoabButton type="start">Call to action</GoabButton>
  </GoabHeroBannerActions>
</GoabHeroBanner>
								`}
          />
        )}

        <GoabHeroBanner heading="Supporting Businesses">
          Resources are available to help Alberta entrepreneurs and small businesses start, grow and
          succeed.
          <GoabHeroBannerActions>
            <GoabButton type="start" onClick={noop}>
              Call to action
            </GoabButton>
          </GoabHeroBannerActions>
        </GoabHeroBanner>
      </Sandbox>
    </>
  );
};

export default HeroBannerWithActions;
