import TOC from "@components/table-of-contents/TOC";
import "./component-content.css";

type Props = {
  children: React.ReactNode;
  tocCssQuery?: string;
  contentClassName?: string;
}

export function ComponentContent({tocCssQuery, contentClassName, children}: Props): JSX.Element {

  return <>
    <div className="component-content--container">
      <div style={{ maxWidth: tocCssQuery ? "auto" : "54rem" }} className={`component-content--content ${contentClassName ? contentClassName: ""}`}>
        {children}
      </div>
      {tocCssQuery && <TOC cssQuery={tocCssQuery} />}
    </div>
  </>
}
