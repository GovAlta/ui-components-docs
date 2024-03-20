import css from "./toc.module.css";
import { useEffect, useState } from "react";

export type TOCItem = {
  title: string;
  tagName: string;
  id: string;
  yOffset: number;
}

type TOCProps = {
  cssQuery: string;
}

export function TOC(props: TOCProps) {
  const [items, setItems] = useState<TOCItem[]>();
  const [activeByScroll, setActiveByScroll] = useState<TOCItem | null>(null);
  const [previousUrl, setPreviousUrl] = useState<string>("");

  useEffect(() => {
    // set first link as current by default if no hash exists
    setTimeout(() => {
      if (document.location.hash === "") {
        setActiveByScroll(queryItems()?.[0]);
      } else {
        const el = document.querySelector(document.location.hash);
        el?.scrollIntoView();
      }
    }, 100)
    
    const updateOnScroll = () => {
      let activeItem: TOCItem | undefined;
      const items = queryItems().reverse();
      for (const item of items) {
        if (item.yOffset < 10) {
          activeItem = item;
          break;
        }
      }

      if (activeItem) {
        setActiveByScroll(activeItem);
      } 
    };

    // observe path changes
    const node = document.querySelector(".main");
    const observer = new MutationObserver(() => {
      if (location.href !== previousUrl) {
        bind();
        setPreviousUrl(location.href);
      }
    });

    if (node) {
      observer.observe(node, { childList: true, subtree: true })
    }

    // observe hash changes
    window.addEventListener("popstate", bind)

    document.addEventListener("scroll", updateOnScroll);

    // need small delay to ensure targets are found
    setTimeout(bind, 100);
    
    return () => {
      window.removeEventListener("popstate", bind)
      document.removeEventListener("scroll", updateOnScroll);
    }
  }, []);


  function bind() {
    const items = queryItems();
    setItems(items);
  }

  function queryItems(): TOCItem[] {
    let headings = document.querySelectorAll<HTMLHeadingElement>(props.cssQuery);
    let tocNodes: TOCItem[] = [];

    headings.forEach(el => {
      const rect = el.getBoundingClientRect();
      const id = el.getAttribute("id");

      if (id && typeof el.textContent === "string") {
        tocNodes.push({
          id,
          title: el.textContent,
          tagName: el.tagName,
          yOffset: rect.top,
        });
      }
    });

    return tocNodes;
  }

  function isActive(id: string): boolean {
    if (activeByScroll?.id === id) return true;
    if (!activeByScroll && location.hash === "#"+id) return true;
    return false;
  }

  return (
    <nav className={css["toc"]}>
      {items && items.map(({ title, tagName: element, id }) => {
        return <div key={id}>
          <a
            className={`
              ${css[`toc-item-${element.toLowerCase()}`]}
              ${isActive(id) ? css["active"] : ""}
            `}
            href={`#${id}`}
          >
            {title}
          </a>
        </div>
      })}
    </nav>
  );
}

export default TOC;
