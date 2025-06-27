import React, { createContext, useEffect, useState } from "react";

interface GitHubDataContextProps {
  components: any[] | null;
  examples: any[] | null;
  issues: any[] | null;
  loading: boolean;
}

interface GitHubDataProviderProps {
  children: React.ReactNode;
}

// Set cache with expiration (in ms)
function setCache(name: string, data: any, ttlMs: number = 1000 * 60 * 10) { // default: 10 minutes
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

async function executeGraphQLQuery(query: string): Promise<any> {
  const token =
    import.meta.env.VITE_GITHUB_TOKEN ||
    import.meta.env.VITE_GITHUB_TOKEN_ALTERNATE;

  if (!token) {
    console.error("GitHub token not provided");
    return null;
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
    return result.data;
  } catch (error) {
    console.error("Error executing GraphQL query:", error);
    return null;
  }
}

export async function fetchDataFromGitHub(name: string, project: number): Promise<any[]> {
  const cachedData = getCache(name);
  if (cachedData) {
    return cachedData;
  }

  const allItems: any[] = [];
  let hasNextPage = true;
  let endCursor = null;

  while (hasNextPage) {
    const query = `
        query {
          repository(owner:"govalta", name: "${name}") {
            projectV2(number: ${project}) {
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
                      state
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

    const result = await executeGraphQLQuery(query);
    if (!result) return [];

    console.log("Result", result);

    const pageItems = result.repository?.projectV2?.items?.nodes;
    allItems.push(...pageItems);

    hasNextPage = result.repository?.projectV2?.items?.pageInfo?.hasNextPage;
    endCursor = result.repository?.projectV2?.items?.pageInfo?.endCursor;
  }

  setCache(name, allItems);
  return allItems;
}

export const GitHubDataContext = createContext<GitHubDataContextProps>({ components: null, examples: null, issues: null, loading: true });

export const GitHubDataProvider:React.FC<GitHubDataProviderProps> = ({ children }) => {
  const [components, setComponents] = useState<any[]>([]);
  const [examples, setExamples] = useState<any[]>([]);
  const [issues, setIssues] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      const allItems = await fetchDataFromGitHub("design-system-backlog", 38);
      const components = allItems.filter((item: any) =>
        item.fieldValues.nodes.some(
          (f: any) => f.field?.name === "Category" && f.name === "Components"
        ));
      const examples = allItems.filter((item: any) =>
        item.fieldValues.nodes.some(
          (f: any) => f.field?.name === "Category" && f.name === "Examples"
        ));
      const issues = await fetchDataFromGitHub("ui-components", 35);
      if (components && examples && issues) {
        setComponents(components);
        setExamples(examples);
        setIssues(issues);
        setLoading(false);
      }
    };
    getItems().catch((error) => {
      console.error("Error fetching GitHub data:", error);
      setLoading(false);
    });
    
  }, []);

  return (
    <GitHubDataContext.Provider value={{ components, examples, issues, loading }}>
      {children}
    </GitHubDataContext.Provider>
  );
};