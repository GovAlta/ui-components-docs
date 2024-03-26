type Props = {
  children: React.ReactNode;
  cssClass?: string;
}

export function PageContent({children, cssClass}: Props): JSX.Element {
  return <>
    <div style={{maxWidth: "54rem"}} className={cssClass}>
      {children}
    </div>
  </>
}
