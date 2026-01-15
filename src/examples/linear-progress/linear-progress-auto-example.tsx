import { useEffect, useState } from "react";
import { GoabLinearProgress } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export function LinearProgressAutoExample() {
  const [autoProgress, setAutoProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let nextProgress = autoProgress + 0.25;
      if (nextProgress > 100) {
        nextProgress = 0;
      }
      setAutoProgress(nextProgress);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <>
      <GoabLinearProgress progress={autoProgress} />
      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
  export function LinearProgressAutoExample() {
    const [autoProgress, setAutoProgress] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        let nextProgress = autoProgress + 0.25;
        if (nextProgress > 100) {
          nextProgress = 0;
        }
        setAutoProgress(nextProgress);
      }, 100);

      return () => {
        clearInterval(intervalId);
      };
    });

    return <GoabLinearProgress progress={autoProgress} />;
  };`}
      />
      <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
    autoProgress = 0;
    private intervalId: any;

    ngOnInit() {
      this.intervalId = setInterval(() => {
        this.autoProgress += 0.25;
        if (this.autoProgress > 100) {
          this.autoProgress = 0;
        }
      }, 100);
    }

    ngOnDestroy() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }

    <goab-linear-progress [progress]="autoProgress" />`}
      />{" "}
    </>
  );
}
