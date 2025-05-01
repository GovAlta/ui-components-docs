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

  const getAnchorIdFromHash = (hash: string) => {
    if (hash.includes("#tab-")) {
      const parts = hash.split("#");
      if (parts.length > 2) {
        return parts[2];
      }
    }
    return hash.replace("#", "");
  }
  useEffect(() => {
    // set first link as current by default if no hash exists
    setTimeout(() => {
      const hash = document.location.hash;
      if (hash === "") {
        setActiveByScroll(queryItems()?.[0]);
      } else {
        const idPart = getAnchorIdFromHash(hash);
        const el = document.getElementById(idPart);
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

  function isActive(id: string, index: number): boolean {
    if (activeByScroll == null && index === 0) return true;
    if (activeByScroll?.id === id) return true;
    const currentHash = location.hash;
    const idPart = getAnchorIdFromHash(currentHash);
    return !activeByScroll && idPart === id;
  }

  function getAnchorLink(id: string): string {
    const currentHash = window.location.hash;
    
    if (currentHash.includes('#tab-')) {
      // If URL contains #tab-, append our ID after it
      return `${currentHash}#${id}`;
    }
    
    return `#${id}`;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: "smooth"});
      const newHash = getAnchorLink(id);
      window.history.replaceState(null, "", newHash);
    }
  }

  return (
    <nav className={css["toc"]}>
      {items && items.map(({ title, tagName: element, id }, index) => {
        return <div key={id}>
          <a
            className={`
              ${css[`toc-item-${element.toLowerCase()}`]}
              ${isActive(id, index) ? css["active"] : ""}
            `}
            href={getAnchorLink(id)}
            onClick={(e) => handleClick(e, id)}
          >
            {title}
          </a>
        </div>
      })}
    </nav>
  );
}

export default TOC;
