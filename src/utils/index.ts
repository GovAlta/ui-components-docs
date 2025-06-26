import {
  ComponentCardProps as ComponentProps,
  ComponentStatus,
  Group
} from "@components/component-card/ComponentCard.tsx";

type issueGroup = "Components" | "Examples";

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

function setCache(name: string, data: any) {
  window.localStorage.setItem(`github-${name}`, JSON.stringify(data));
}

function getCache(name: string): any | null {
  const cachedData = window.localStorage.getItem(`github-${name}`);
  if (cachedData) {
    return cachedData
  }
  return null;
}

async function executeGraphQLQuery(name: string, query: string): Promise<any> {
  const token =
    import.meta.env.VITE_GITHUB_TOKEN ||
    import.meta.env.VITE_GITHUB_TOKEN_ALTERNATE;

  if (!token) {
    console.error("GitHub token not provided");
    return null;
  }

  const cachedData = getCache(name);
  if (cachedData) {
    try {
      const parsedData = JSON.parse(cachedData);
      if (parsedData) {
        console.log(`Using cached data for ${name}`);
        return parsedData;
      }
    } catch (error) {
      console.error(`Error parsing cache for ${name}:`, error);
    }
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

    setCache(name, result.data);
    return result.data;
  } catch (error) {
    console.error("Error executing GraphQL query:", error);
    return null;
  }
}

function mapItemsToMetadata(items: any[], group: issueGroup): ComponentProps[] {
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

      const group = labels.find((l: string) =>
        ["Content layout", "Inputs and actions", "Feedback and alerts", "Structure and navigation", "Utilities"]
          .map(toSentenceCase)
          .includes(toSentenceCase(l))
      );

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
        groups: group ? [group as Group] : [],
        tags: labels.filter((l: string) => l !== group),
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

export async function fetchMetadataFromProject(): Promise<ComponentProps[]> {
  const allItems: any[] = [];
  let hasNextPage = true;
  let endCursor = null;

  while (hasNextPage) {
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

    const result = await executeGraphQLQuery("project-items", query);
    if (!result) return [];

    const pageItems = result.node.items.nodes;
    allItems.push(...pageItems);

    hasNextPage = result.node.items.pageInfo.hasNextPage;
    endCursor = result.node.items.pageInfo.endCursor;
  }

  return allItems;
}

export async function fetchItemsFromProject(group: issueGroup): Promise<ComponentProps[]> {
  const allItems = await fetchMetadataFromProject();
  return mapItemsToMetadata(allItems, group);
}

export async function fetchAllIssueCounts(cards: { name: string }[]): Promise<Record<string, number>> {
  const results = await Promise.all(cards.map(async (card) => {
    return { [card.name]: 1 };
  }));

  return results.reduce((acc, curr) => ({ ...acc, ...curr }), {});
}

export async function fetchIssueCount(label: string): Promise<number | null> {
  console.log(label)
  return 1;
}