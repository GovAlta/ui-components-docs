import { GoABlock } from "@abgov/react-components";
import TOC from "@components/table-of-contents/TOC";

type Props = {
  children: React.ReactNode;
  tocCssQuery?: string;
  contentClassName?: string;
}

export function ComponentContent({tocCssQuery, contentClassName, children}: Props): JSX.Element {
  const contentStyle = {
    flex: "1 1 auto",
    container: "self/inline-size",
    maxWidth: tocCssQuery ? undefined : "54rem" // if no table of content, set max width
  };
  return <>
    <GoABlock gap="2xl">
      <div style={contentStyle} className={contentClassName}>
        {children}
      </div>
      {tocCssQuery && <TOC cssQuery={tocCssQuery} />}
    </GoABlock>
  </>  
}
