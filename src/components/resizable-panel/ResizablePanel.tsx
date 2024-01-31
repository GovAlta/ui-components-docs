import { ReactNode, useEffect, useRef, useState } from "react";
import Css from "./ResizablePanel.module.css";

export type ResizableProps = {
  minWidth?: number;
  children: ReactNode;
}

export function ResizablePanel(props: ResizableProps): JSX.Element {
  // element refs
  const bgRef = useRef<HTMLDivElement | null>(null);
  const resizableSectionRef = useRef<HTMLElement | null>(null);
  const widthRef = useRef<HTMLDivElement | null>(null);

  // state
  const [width, setWidth] = useState<string>();

  useEffect(() => {
    const resizeObserver = new ResizeObserver(es => {
      const maxWidth = bgRef.current?.getBoundingClientRect().width ?? -1;
      if (maxWidth === -1) return;
      
      for (const e of es) {
        const entry = e as ResizeObserverEntry;
        const width = entry.contentRect.width;

        // set displayed px width
        widthRef.current?.setAttribute("style", `right: ${maxWidth - width + 16}px`);
        setWidth(`${Math.round(width)}px`)
      }
    });

    const el = resizableSectionRef.current;
    el && resizeObserver.observe(el);

    return () => {
      el && resizeObserver.unobserve(el);
    }
  }, [resizableSectionRef.current, bgRef.current])

  return (
    <div ref={bgRef} className={Css.panelBackground}>
      <section ref={resizableSectionRef} className={Css.panel} style={{ resize: "horizontal", overflow: "auto" }}>
        <div className={Css.children}>
          {props.children}
        </div>
      </section>
      <div ref={widthRef} className={Css.width}>{width}</div>
    </div>
  )
}

export default ResizablePanel;
