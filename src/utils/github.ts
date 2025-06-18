import { gql } from "@apollo/client";

export type GithubIssue = {
    id: string;
    title: string;
    url: string;
    labels: {
      edges: GithubLabel[];
    };
};

export type GithubLabel = {
  node: {
    name: string;
  };
};

export type GithubProjectIssue = {
  content: GithubIssue;
  category: {
    name: string;
  };
  description: {
    text: string;
  };
};

export type GithubProjectIssues = {
  rpository: {
    projectV2: {
      items: {
        totalCount: number;
        nodes: GithubIssue[];
      };
    };
  };
};

export type GithubRepoIssues = {
  repository: {
    issues: {
      totalCount: number;
      edges: GithubIssue[];
    };
  };
}

export const ISSUE_FRAGMENTS = gql`
  fragment IssueFields on Issue {
    id
    title
    url
    labels(first: 5) {
      edges {
        node {
          name
        }
      }
    }
  }
  
  `;   
    
export const UI_COMPONENTS_ISSUES_QUERY = gql`
  query {
    repository(owner:"govalta", name:"ui-components") {
      issues(first: 100) {
        totalCount
        edges {
          node {
            ... IssueFields
          }
        }
      }
    }
  }
  ${ISSUE_FRAGMENTS}
  `;

export const DS_BACKLOG_ISSUES_QUERY = gql`
  query {
    repository(owner:"govalta", name:"design-system-backlog") {
      projectV2(number: 38) {
        items(first: 100) {
          totalCount
          nodes {
            content {
              ... IssueFields
            }
            category: fieldValueByName(name:"Category") {
              ... on ProjectV2ItemFieldSingleSelectValue {
                name
              }
            }
            description: fieldValueByName(name:"Description") {
              ... on ProjectV2ItemFieldTextValue {
                text
              }
            }  
          }
        }
      }
    }
  }
  ${ISSUE_FRAGMENTS}
`;