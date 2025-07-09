import {
  ComponentCardProps as ComponentProps,
  ComponentStatus,
  Group
} from "@components/component-card/ComponentCard.tsx";

type IssueGroup = "Components" | "Examples";

export function toKebabCase(str: string) {
  return str
    .replace(/\s+/g, "-")        // Replace spaces with -
    .replace(/_/g, "-")          // Replace underscores with -
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Convert camelCase to kebab-case
    .toLowerCase();              // Convert to lowercase
}

export const toSentenceCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Set cache with expiration (in ms)
function setCache(name: string, data: any, ttlMs: number = 1000 * 60 * 60 * 24) { // default: 24 hours
  const record = {
    data,
    expiry: Date.now() + ttlMs,
  };
  window.localStorage.setItem(`goa-github-${name}`, JSON.stringify(record));
}

// Get cache and check expiration
function getCache(name: string): any | null {
  const cachedData = window.localStorage.getItem(`goa-github-${name}`);
  if (cachedData) {
    try {
      const record = JSON.parse(cachedData);
      if (record.expiry && Date.now() < record.expiry) {
        return record.data;
      } else {
        // Expired, remove from cache
        window.localStorage.removeItem(`goa-github-${name}`);
        return null;
      }
    } catch {
      // If parsing fails, treat as no cache
      window.localStorage.removeItem(`goa-github-${name}`);
      return null;
    }
  }
  return null;
}

// Enhanced GraphQL execution with caching
async function executeGraphQLQuery(cacheName: string, query: string): Promise<any> {
  const token =
    import.meta.env.VITE_GITHUB_TOKEN ||
    import.meta.env.VITE_GITHUB_TOKEN_ALTERNATE;

  if (!token) {
    console.error("GitHub token not provided");
    return null;
  }

  // Check cache first
  const cachedData = getCache(cacheName);
  if (cachedData) {
    return cachedData;
  }

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

    // Cache the successful result
    setCache(cacheName, result.data);
    return result.data;
  } catch (error) {
    console.error("Error executing GraphQL query:", error);
    return null;
  }
}

// Unified mapping function (Benji's consolidation approach)
function mapItemsToMetadata(items: any[], group: IssueGroup): ComponentProps[] {
  const validStatuses: ComponentStatus[] = ["Published", "In Progress", "Not Published"];

  return items
    .filter((item: any) =>
      item.fieldValues.nodes.some(
        (f: any) => f.field?.name === "Category" && f.name === group
      )
    )
    .map((item: any) => {
      const title = item.content?.title || "";
      const name = toSentenceCase(title.trim());
      const slug = name.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      const body = item.content?.body || "";
      const labels = item.content?.labels?.nodes.map((l: any) => toSentenceCase(l.name.trim())) || [];

      // Only apply groups for Components, not Examples
      const componentGroup = group === "Components" ? labels.find((l: string) =>
        ["Content layout", "Inputs and actions", "Feedback and alerts", "Structure and navigation", "Utilities"]
          .map(toSentenceCase)
          .includes(toSentenceCase(l))
      ) : undefined;

      const statusField = item.fieldValues.nodes.find((f: any) => f.field?.name === "Status");
      const descriptionField = item.fieldValues.nodes.find((f: any) => f.field?.name === "Description");

      const rawStatus = statusField?.name;
      const status: ComponentStatus =
        validStatuses.includes(rawStatus as ComponentStatus)
          ? (rawStatus as ComponentStatus)
          : "Not Published";

      const designSystemUrl = item.fieldValues.nodes.find((f: any) => f.field?.name === "Design System website URL")?.text;
      const designComponentFigmaUrl = item.fieldValues.nodes.find((f: any) => f.field?.name === "Design component (Figma)")?.text;
      const designContributionFigmaUrl = item.fieldValues.nodes.find((f: any) => f.field?.name === "Design contribution file (Figma)")?.text;
      const openIssuesUrl = item.fieldValues.nodes.find((f: any) => f.field?.name === "Open issues (Github)")?.text;

      let metatags: string[] = [];
      const metatagField = item.fieldValues.nodes.find((f: any) => f.field?.name === "Metatags");
      if (metatagField?.text) {
        metatags = metatagField.text.split(",").map((t: string) => t.trim().toLowerCase());
      }

      return {
        name,
        slug,
        groups: componentGroup ? [componentGroup as Group] : [],
        tags: labels.filter((l: string) => l !== componentGroup),
        metatags,
        description: descriptionField?.text || body,
        status,
        designSystemUrl,
        designComponentFigmaUrl,
        designContributionFigmaUrl,
        openIssuesUrl,
        url: item.content?.url
      };
    });
}

// Core data fetching with caching
export async function fetchMetadataFromProject(): Promise<any[]> {
  const allItems: any[] = [];
  let hasNextPage = true;
  let endCursor = null;
  let pageNumber = 0;

  while (hasNextPage) {
    const cacheName = `project-items-page-${pageNumber}`;

    const query = `
      query {
        node(id: "PVT_kwDOBQjO6M4A1oga") {
          ... on ProjectV2 {
            items(first: 100${endCursor ? `, after: \"${endCursor}\"` : ""}) {
              pageInfo {
                hasNextPage
                endCursor
              }
              nodes {
                content {
                  ... on Issue {
                    title
                    body
                    url
                    labels(first: 10) {
                      nodes {
                        name
                      }
                    }
                  }
                }
                fieldValues(first: 20) {
                  nodes {
                    ... on ProjectV2ItemFieldSingleSelectValue {
                      name
                      field {
                        ... on ProjectV2SingleSelectField {
                          name
                        }
                      }
                    }
                    ... on ProjectV2ItemFieldTextValue {
                      text
                      field {
                        ... on ProjectV2FieldCommon {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const result = await executeGraphQLQuery(cacheName, query);
    if (!result) return [];

    const pageItems = result.node.items.nodes;
    allItems.push(...pageItems);

    hasNextPage = result.node.items.pageInfo.hasNextPage;
    endCursor = result.node.items.pageInfo.endCursor;
    pageNumber++;
  }

  return allItems;
}

// Benji's unified approach
export async function fetchItemsFromProject(group: IssueGroup): Promise<ComponentProps[]> {
  const allItems = await fetchMetadataFromProject();
  return mapItemsToMetadata(allItems, group);
}

// Your original specific functions (maintained for backwards compatibility)
export async function fetchComponentMetadataFromProject(): Promise<ComponentProps[]> {
  return fetchItemsFromProject("Components");
}

export async function fetchExampleMetadataFromProject(): Promise<ComponentProps[]> {
  return fetchItemsFromProject("Examples");
}

// Issue count fetching with caching
export async function fetchAllIssueCounts(group: IssueGroup, cards: { name: string }[]): Promise<Record<string, number>> {
  const cacheName = `all-${group.toLowerCase()}-issue-counts`;

  const queryFields = cards.map((card) => {
    const alias = card.name.replace(/\s+/g, "").replace(/[^a-zA-Z ]/g, "").toLowerCase();
    const label = card.name.charAt(0).toUpperCase() + card.name.slice(1).toLowerCase();
    const labelQuery = label.includes(" ") ? `\\"${label}\\"` : label;
    return `${alias}: search(query: "is:issue is:open repo:GovAlta/ui-components label:${labelQuery}", type: ISSUE, first: 1) { issueCount }`;
  }).join('\n      ');

  const query = `
    query {
      ${queryFields}
    }
  `;

  const result = await executeGraphQLQuery(cacheName, query);
  if (result.errors) {
    console.error("GraphQL errors:", result.errors);
    return {};
  }

  const issueCounts: Record<string, number> = {};
  cards.forEach((card) => {
    const alias = card.name.replace(/\s+/g, "").replace(/[^a-zA-Z ]/g, "").toLowerCase();
    issueCounts[card.name] =
      result[alias] && result[alias]?.issueCount
        ? result[alias].issueCount
        : 0;
  });

  return issueCounts;
}

// Utility function to clear cache (useful for development/debugging)
export function clearCache(): void {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith("github-")) {
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.warn("Failed to clear cache:", error);
  }
}