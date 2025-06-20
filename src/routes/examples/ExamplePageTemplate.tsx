import { useParams } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";
import { GoabBlock, GoabSkeleton, GoabLink } from "@abgov/react-components";
import { useQuery } from "@apollo/client";
import { DS_BACKLOG_ISSUES_QUERY } from "../../utils/github.ts";
import { toKebabCase } from "../../utils/index.ts";


export default function ExamplePageTemplate() {
  const { slug } = useParams(); // assumes route like /examples/:slug

  // Dynamic import based on slug
  const ExampleComponent = useMemo(() => {
    if (!slug) return () => <div>Invalid slug</div>;
    return lazy(() =>
      import(`../../examples/${slug}.tsx`).catch(() =>
        import("@routes/examples/FallbackExample.tsx")
      )
    );
  }, [slug]);
  
  const { loading, error, data } = useQuery(DS_BACKLOG_ISSUES_QUERY);

  return (
    <main
      className="main">
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>

        <GoabBlock mb="l">
        <GoabLink leadingIcon="chevron-back" mt="l" mb={"none"}>
          <a href="/examples">Back</a>
        </GoabLink>
      </GoabBlock>
      {loading && (
        <GoabBlock gap="none" direction="column" mb="xl" mt="none">
          <GoabSkeleton type="header" size="4" />
          <GoabBlock gap="none" direction="column">
            <GoabSkeleton type="text-small" size="4" />
            <GoabSkeleton type="text-small" size="4" />
          </GoabBlock>
        </GoabBlock>
      )}

      {error && (
        <span>Error!</span>
      )}
      {data && (
        <h1>{data?.repository?.projectV2?.items?.nodes.find((item: any) => toKebabCase(item.content.title) === slug).content.title}</h1>
      )}

      <Suspense fallback={<GoabSkeleton type="card" size="3" />}>
        <ExampleComponent />
      </Suspense>
      </div>
    </main>
  );
}