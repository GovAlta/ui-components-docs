import TOC from "@components/table-of-contents/TOC";
import "./component-content.css";
import { GoabDivider } from "@abgov/react-components";

type Props = {
  children: React.ReactNode;
  tocCssQuery?: string;
  contentClassName?: string;
};

export function ComponentContent({ tocCssQuery, contentClassName, children }: Props): JSX.Element {
  return (
    <>
      <div className="component-content--container">
        <div
          style={{ maxWidth: tocCssQuery ? "auto" : "54rem" }}
          className={`component-content--content ${contentClassName ? contentClassName : ""}`}
        >
          {children}
          <GoabDivider mt="3xl"></GoabDivider>
        </div>
        {tocCssQuery && <TOC cssQuery={tocCssQuery} />}
      </div>
    </>
  );
}
