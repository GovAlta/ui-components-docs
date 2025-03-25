type TokenValue = {
  value: string | Record<string, any>;
  description?: string;
};

type CategorizedToken = {
  name: string;
  value: string | Record<string, any>;
  description: string;
};

const defaultTokenCategories: Record<string, string> = {
  size: "Size & spacing tokens",
  spacing: "Size & spacing tokens",
  gap: "Size & spacing tokens",
  padding: "Size & spacing tokens",
  typography: "Typography tokens",
  font: "Typography tokens",
  icon: "Icons tokens",
  primary: "Primary button tokens",
  secondary: "Secondary button tokens",
  tertiary: "Tertiary button tokens",
  hover: "State tokens",
  focus: "State tokens",
  active: "State tokens",
  disabled: "State tokens"
};

export function categorizeTokens(
  rawTokens: Record<string, TokenValue>,
  tokenCategories: Record<string, string> = defaultTokenCategories,
  categoryOrder?: string[]
): {
  categories: Record<string, CategorizedToken[]>;
  orderedCategoryNames: string[];
} {
  const categorized: Record<string, CategorizedToken[]> = {};

  Object.entries(rawTokens).forEach(([key, data]) => {
    const match = Object.keys(tokenCategories).find((keyword) => key.includes(keyword));
    const category = match ? tokenCategories[match] : "Other tokens";

    if (!categorized[category]) {
      categorized[category] = [];
    }

    categorized[category].push({
      name: `--goa-${key}`,
      value: data.value,
      description: data.description || "",
    });
  });

  // Sort categories according to custom order if provided
  Object.keys(categorized);
  const nonEmptyCategoryNames = Object.keys(categorized).filter(cat => categorized[cat].length > 0);

  const orderedCategoryNames = categoryOrder
    ? categoryOrder.filter(cat => nonEmptyCategoryNames.includes(cat)).concat(
      nonEmptyCategoryNames.filter(cat => !categoryOrder.includes(cat))
    )
    : nonEmptyCategoryNames.sort();

  return {
    categories: categorized,
    orderedCategoryNames
  };
}