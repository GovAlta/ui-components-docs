export function toKebabCase(str: string) {
  return str
  .replace(/\s+/g, '-')        // Replace spaces with -
  .replace(/_/g, '-')          // Replace underscores with -
  .replace(/([a-z])([A-Z])/g, '$1-$2') // Convert camelCase to kebab-case
  .toLowerCase();              // Convert to lowercase
}

export const toSentenceCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export async function fetchAllIssueCounts(cards: { name: string }[]): Promise<Record<string, number>> {
  const token =
    import.meta.env.VITE_GITHUB_TOKEN ||
    import.meta.env.VITE_GITHUB_TOKEN_ALTERNATE;

  if (!token) {
    console.error("GitHub token not provided");
    return {};
  }

  const queryFields = cards.map((card) => {
    const alias = card.name.replace(/\s+/g, "").toLowerCase();
    const label = card.name.charAt(0).toUpperCase() + card.name.slice(1).toLowerCase();
    const labelQuery = label.includes(" ") ? `\\"${label}\\"` : label;
    return `${alias}: search(query: "is:issue is:open repo:GovAlta/ui-components label:${labelQuery}", type: ISSUE, first: 1) { issueCount }`;
  }).join("\n");

  const graphQLQuery = `
    query {
      ${queryFields}
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ query: graphQLQuery })
    });

    const result = await response.json();
    if (result.errors) {
      console.error("GraphQL errors:", result.errors);
      return {};
    }

    const issueCounts: Record<string, number> = {};
    cards.forEach((card) => {
      const alias = card.name.replace(/\s+/g, "").toLowerCase();
      issueCounts[card.name] =
        result.data[alias] && result.data[alias].issueCount
          ? result.data[alias].issueCount
          : 0;
    });

    return issueCounts;
  } catch (error) {
    console.error("Error fetching issue counts:", error);
    return {};
  }
}

export async function fetchIssueCount(label: string): Promise<number | null> {
  const token =
    import.meta.env.VITE_GITHUB_TOKEN ||
    import.meta.env.VITE_GITHUB_TOKEN_ALTERNATE;

  if (!token) {
    console.error("GitHub token not provided");
    return null;
  }

  const labelQuery = label.includes(" ") ? `\\"${label}\\"` : label;

  const query = `
    query {
      issues: search(query: "is:issue is:open repo:GovAlta/ui-components label:${labelQuery}", type: ISSUE, first: 1) {
        issueCount
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ query })
    });

    const result = await response.json();

    if (result.errors) {
      console.error("GraphQL errors:", result.errors);
      return null;
    }

    return result.data.issues.issueCount;
  } catch (error) {
    console.error("Error fetching issue count:", error);
    return null;
  }
}