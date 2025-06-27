import React, { createContext, useEffect, useState } from "react";

interface GitHubDataContextProps {
  data: any[] | null;
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
  window.localStorage.setItem(`github-${name}`, JSON.stringify(record));
}

// Get cache and check expiration
function getCache(name: string): any | null {
  const cachedData = window.localStorage.getItem(`github-${name}`);
  if (cachedData) {
    try {
      const record = JSON.parse(cachedData);
      if (record.expiry && Date.now() < record.expiry) {
        return record.data;
      } else {
        // Expired, remove from cache
        window.localStorage.removeItem(`github-${name}`);
        return null;
      }
    } catch {
      // If parsing fails, treat as no cache
      window.localStorage.removeItem(`github-${name}`);
      return null;
    }
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
    console.log(`Using cached data for ${name}`);
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

    setCache(name, result.data);
    return result.data;
  } catch (error) {
    console.error("Error executing GraphQL query:", error);
    return null;
  }
}

export async function fetchDataFromGitHub(): Promise<any[]> {
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

    const pageItems = result?.node?.items?.nodes;
    allItems.push(...pageItems);

    hasNextPage = result.node.items.pageInfo.hasNextPage;
    endCursor = result.node.items.pageInfo.endCursor;
  }

  return allItems;
}

export const GitHubDataContext = createContext<GitHubDataContextProps>({ data:  null, loading: true });

export const GitHubDataProvider:React.FC<GitHubDataProviderProps> = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching GitHub data...");

    const getItems = async () => {
    const allItems = await fetchDataFromGitHub();
      if (allItems) {
        setData(allItems);
        setLoading(false);
        console.log("GitHub data fetched successfully:", allItems.length, "items");
      }
    };
    getItems().catch((error) => {
      console.error("Error fetching GitHub data:", error);
      setLoading(false);
    });
    
  }, []);

  return (
    <GitHubDataContext.Provider value={{ data, loading }}>
      {children}
    </GitHubDataContext.Provider>
  );
};