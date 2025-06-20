import {
  GoabText,
} from "@abgov/react-components";
import { useQuery } from "@apollo/client";
import { DS_BACKLOG_ISSUES_QUERY } from "../../utils/github.ts";

import { ExampleCard } from "@components/example-card/ExampleCard.tsx";

export default function ExamplesOverviewPage() {
  const {loading, error, data} = useQuery(DS_BACKLOG_ISSUES_QUERY);
  return (
    <div>
      <GoabText size="heading-xl" mt="xl">
        Examples
      </GoabText>
      <GoabText size="body-l" mt="m" mb="xl">
        Common patterns, pages, tasks, component configurations, flows, and more to use as a starting point when
        creating government digital services.
      </GoabText>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
          gap: "var(--goa-space-xl)",
          width: "100%"
        }}
      >

        {loading && (
          <>Loading...</>
        )}

        {error && (
          <>There was an error.</>
        )}
        
        { data && (
          data.repository?.projectV2?.items?.nodes
            .filter((card: any) => card.category?.name === "Examples")
            .map((card: any) => (
            <ExampleCard
              key={card?.content?.title}
              name={card?.content?.title}
              description={card?.description?.text}
              status={card?.status?.name}
              openIssues={1}
              isNew={false}
              designComponentFigmaUrl={card?.figmaComponentUrl?.text}
              designContributionFigmaUrl={card?.figmaContributionUrl?.text}
              imageFolder="example-thumbnails"
              githubLink={card?.openIssuesUrl?.text}
            />
          ))
        )}       
      </div>
    </div>
  );
}