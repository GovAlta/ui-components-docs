import { useEffect, useState } from "react";
import { categorizeTokens } from "../utils/categorizeComponentTokens";

export function useComponentTokens(
  tokens: Record<string, any>,
  categoryOrder: string[] = []
) {
  const [tokensList, setTokensList] = useState({});
  const [orderedCategories, setOrderedCategories] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [accordionStatus, setAccordionStatus] = useState<string>("Show all");

  useEffect(() => {
    if (tokens && Object.keys(tokens).length > 0) {
      const { categories, orderedCategoryNames } = categorizeTokens(
        tokens,
        undefined,
        categoryOrder
      );
      setTokensList(categories);
      setOrderedCategories(orderedCategoryNames);
    } else {
      console.warn("No component tokens found. The JSON might be empty.");
    }
  }, [tokens]);

  const onClick = () => {
    const nextOpen = !open;
    setOpen(nextOpen);
    setAccordionStatus(nextOpen ? "Hide all" : "Show all");
  };

  return {
    tokensList,
    orderedCategories,
    open,
    onClick,
    accordionStatus,
  };
}