import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import Css from "./ResizablePanel.module.css";
import { GoAIcon } from "@abgov/react-components";

export type ResizableProps = {
  minWidth?: number;
  children: ReactNode;
}

export function ResizablePanel(props: ResizableProps): JSX.Element {
  // refs
  const bgRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const widthRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const maxWidth = useRef<number>(0);

  // state
  const [width, setWidth] = useState<string>();

  const dragImageOverride = useMemo<HTMLImageElement>(() => {
    const img = new Image();
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    return img;
  }, [])

  useEffect(() => {
    maxWidth.current = bgRef.current?.getBoundingClientRect().width ?? 0;
  }, [])

  function onDragStart(e: React.DragEvent) {
    e.dataTransfer.setDragImage(dragImageOverride, 0, 0);
  }

  // Firefox needs the onDragEnd event which falls back to this function
  function onDrag(e: React.DragEvent) {
    const sectionEl = sectionRef.current;
    const xOffset = sectionEl?.getBoundingClientRect().x || 0;
    const mouseX = e.nativeEvent.clientX;
    const minWidth = props.minWidth || 0;

    if (mouseX <= 0) {
      return;
    }

    // mouse direction
    const newXPos = dragRef.current?.getBoundingClientRect().x ?? 0;

    // set width of preview area
    const calcWidth = Math.max(newXPos - xOffset, Math.min(mouseX - xOffset, maxWidth.current));
    const elementWidth = Math.max(minWidth, calcWidth - 64); // 4rem padding

    // prevent dragging bar more than allowed
    if (elementWidth <= minWidth) {
      return;
    }

    // set resizable area width
    sectionEl?.setAttribute("style", `width: ${calcWidth}px;`);
    // set displayed px width
    widthRef.current?.setAttribute("style", `right: ${maxWidth.current - calcWidth + 32}px`);
    setWidth(`${Math.round(elementWidth)}px`)
  }

  return (
    <div ref={bgRef} className={Css.panelBackground}>
      <section ref={sectionRef} className={Css.panel}>
        <div className={Css.children}>
          {props.children}
        </div>
        <div
          ref={dragRef}
          onDrag={onDrag} 
          onDragStart={onDragStart} 
          onDragEnd={onDrag} 
          draggable={true}
          className={Css.handle}
        >
          <GoAIcon type="reorder-two" />
        </div>
      </section>
      <div ref={widthRef} className={Css.width}>{width}</div>
    </div>
  )
}

export default ResizablePanel;

