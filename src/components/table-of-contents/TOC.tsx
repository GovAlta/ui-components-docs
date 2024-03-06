import { TOCItem } from "@hooks/useTOC";
import { useEffect, useRef, useState } from "react";
import throttle from "lodash/throttle";

interface Props {
  items: TOCItem[];
}

export const HeaderThreshold = 60;

function scanPageForCurrentHeading(): string | void {
  const contentTopMargin = HeaderThreshold;
  const headings = document.querySelectorAll(".main h2, .main h3");
  if (!headings.length) {
    return;
  }
  let currentHeading: Element | null = null;
  // Scan the headings from the bottom. The heading that comes first
  // after the "content top margin" is the current heading.
  for (let i = headings.length - 1; i >= 0; i--) {
    const heading = headings[i];
    const { top } = heading.getBoundingClientRect();
    currentHeading = heading;
    if (top < contentTopMargin) {
      break;
    }
  }

  if (!currentHeading && headings.length > 0) {
    currentHeading = headings[0];
  }

  if (currentHeading) {
    const id = currentHeading.getAttribute("id");
    if (id) {
      return id;
    }
  }
}

export function TOC({ items }: Props) {
  const [idOfCurrentHeading, setIdOfCurrentHeading] = useState<string>();
  const temporarilyIgnoreScrolling = useRef(false);
  const lastScrollY = useRef(0);
  function waitForScrollToStop() {
    function checkIfStillScrolling() {
      if (lastScrollY.current !== window.scrollY) {
        // Don't check too often
        // because the scrollY diff between frames might be
        // less than 1 if rounded.
        setTimeout(checkIfStillScrolling, 100);
      } else {
        temporarilyIgnoreScrolling.current = false;
      }
      lastScrollY.current = window.scrollY;
    }
    // Give some time to start scrolling
    setTimeout(checkIfStillScrolling, 100);
  }

  function scrollIntoView(id: string) {
    setIdOfCurrentHeading(id);
    const contentTopMargin = HeaderThreshold;
    const targetEl = document.getElementById(id);
    if (targetEl) {
      const { top: distanceFromViewportTop } = targetEl.getBoundingClientRect();
      let newScrollY = window.scrollY + distanceFromViewportTop - contentTopMargin + 1;

      const isAlmostAtTheTopOfThePage = newScrollY < contentTopMargin * 1.25;
      if (isAlmostAtTheTopOfThePage) {
        newScrollY = 0;
      }

      history.pushState({}, "", `#${id}`);

      temporarilyIgnoreScrolling.current = true;
      window.scrollTo({ top: newScrollY, behavior: "smooth" });
      waitForScrollToStop();
    }
  }

  function detectCurrentHeading() {
    if (temporarilyIgnoreScrolling.current) return;
    const id = scanPageForCurrentHeading();
    if (id) {
      setIdOfCurrentHeading(id);
    }
  }

  useEffect(() => {
    const throttledDetectCurrentHeading = throttle(detectCurrentHeading, 100);
    detectCurrentHeading();
    window.addEventListener("scroll", throttledDetectCurrentHeading);
    return () => window.removeEventListener("scroll", throttledDetectCurrentHeading);
  }, []);

  if (!items.length) {
    return null;
  }

  return (
    <div className="toc-wrapper">
      {items.map(({ title, id, children }) => {
        return (
          <div key={title}>
            <a
              onClick={evt => {
                scrollIntoView(id);
                evt.preventDefault();
              }}
              href={`#${id}`}
              className={`toc-item-h2 ${id === idOfCurrentHeading ? "active-link" : ""}`}>
              {title}
            </a>

            {children.length > 0 && (
              <div>
                {children.map(child => {
                  return (
                    <div key={child.title}>
                      <a
                        onClick={evt => {
                          scrollIntoView(child.id);
                          evt.preventDefault();
                        }}
                        href={`#${child.id}`}
                        className={`toc-item-h3 ${
                          child.id === idOfCurrentHeading ? "active-link" : ""
                        }`}>
                        {child.title}
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TOC;
