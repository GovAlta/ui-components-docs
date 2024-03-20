import { GoABlock } from "@abgov/react-components";
import TOC from "@components/table-of-contents/TOC";

type Props = {
  children: React.ReactNode;
  cssQuery: string;
}

export function ComponentContent({cssQuery, children}: Props): JSX.Element {
  return <>
    <GoABlock gap="2xl">
      <div style={{flex: "1 1 auto"}}>
        {children}
      </div>
      <TOC cssQuery={cssQuery} />
    </GoABlock>
  </>  
}
