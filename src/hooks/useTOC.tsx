import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { debounce } from "lodash";

export interface TOCItem {
  title: string;
  element: "H2" | "H3";
  id: string;
  children: TOCItem[];
}

export const useTOC = () => {
  const [tocItems, setToc] = useState<TOCItem[]>([]);
  const location = useLocation();
  const updateTOC = debounce(() => {
    const headings = document.querySelectorAll<HTMLHeadingElement>(".main h2[id], .main h3[id]");
    let tocNodes: TOCItem[] = [];
    let currentNode: TOCItem | null = null;

    headings.forEach(el => {
      const id = el.getAttribute("id");
      if (typeof el.textContent === "string" && id) {
        if (el.tagName === "H2") {
          if (currentNode !== null) {
            tocNodes.push(currentNode);
          }
          currentNode = { title: el.textContent, id, element: "H2", children: [] };
        } else if (el.tagName === "H3") {
          if (currentNode && currentNode.element === "H2") {
            currentNode.children.push({ title: el.textContent, id, element: "H3", children: [] });
          } else {
            tocNodes.push({ title: el.textContent, id, element: "H3", children: [] });
            currentNode = null;
          }
        }
      }
    });

    if (currentNode !== null) {
      tocNodes.push(currentNode);
    }

    setToc(tocNodes);
  }, 300);

  // Expose a method to manually trigger TOC update
  const recomputeTOC = updateTOC();

  useEffect(() => {
    const contentArea = document.querySelector(".main") || document.body;
    const observer = new MutationObserver(updateTOC);
    observer.observe(contentArea, {
      childList: true,
      subtree: true,
    });

    updateTOC();

    return () => {
      observer.disconnect();
      updateTOC.cancel();
    };
  }, [location.pathname]);

  return {tocItems, recomputeTOC, setToc}
};