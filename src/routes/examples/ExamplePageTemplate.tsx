import { useParams } from "react-router-dom";
import { lazy, Suspense, useEffect, useState, useMemo } from "react";
import { GoabBlock, GoabSkeleton, GoabLink } from "@abgov/react-components";
import { fetchItemsFromProject } from "../../utils";
import { ExampleHeader } from "@components/example-header/ExampleHeader.tsx";


export default function ExamplePageTemplate() {
  const { slug } = useParams(); // assumes route like /examples/:slug
  const [example, setExample] = useState<any>(null);

  // Dynamic import based on slug
  const ExampleComponent = useMemo(() => {
    if (!slug) return () => <div>Invalid slug</div>;
    return lazy(() =>
      import(`../../examples/${slug}.tsx`).catch(() =>
        import("@routes/examples/FallbackExample.tsx")
      )
    );
  }, [slug]);
  console.log("Loaded example metadata:", example);
  useEffect(() => {
    if (!slug) return;
    console.log("Looking for slug:", slug);
    fetchItemsFromProject("Examples").then(data => {
      console.log("Fetched metadata:", data);
      const match = data.find((item: any) => item.slug === slug);
      console.log("Matched example:", match);
      setExample(match);
    }).catch(error => {
      console.error("Error fetching metadata:", error);
    });
  }, [slug]);
  return (
    <main
      className="main">
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>

        <GoabBlock mb="l">
        <GoabLink leadingIcon="chevron-back" mt="l" mb={"none"}>
          <a href="/examples">Back</a>
        </GoabLink>
      </GoabBlock>
      {!example ? (
        <GoabBlock gap="none" direction="column" mb="xl" mt="none">
          <GoabSkeleton type="header" size="4" />
          <GoabBlock gap="none" direction="column">
            <GoabSkeleton type="text-small" size="4" />
            <GoabSkeleton type="text-small" size="4" />
          </GoabBlock>
        </GoabBlock>
      ) : (
        <ExampleHeader
          name={example.name}
          description={example.description}
          githubLink={example.url ?? ""}
          figmaLink={example.designComponentFigmaUrl}
          tags={example.tags}
        />
      )}

      <Suspense fallback={<GoabSkeleton type="card" size="3" />}>
        <ExampleComponent />
      </Suspense>
      </div>
    </main>
  );
}