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
    body
    url
    labels(first: 10) {
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
            status: fieldValueByName(name:"Status") {
              ... on ProjectV2ItemFieldSingleSelectValue {
                name
              }
            }
              
            category: fieldValueByName(name:"Category") {
              ... on ProjectV2ItemFieldSingleSelectValue {
                name
              }
            }
            designSystemUrl: fieldValueByName(name:"Design System website URL") {
              ... on ProjectV2ItemFieldTextValue {
                text
              }
            }

            openIssuesUrl: fieldValueByName(name:"Open issues (Github)") {
              ... on ProjectV2ItemFieldTextValue {
                text
              }
            }

            figmaComponentUrl: fieldValueByName(name:"Design component (Figma)") {
              ... on ProjectV2ItemFieldTextValue {
                text
              }
            }
             
            figmaContributionUrl: fieldValueByName(name:"Design contribution file (Figma)") {
              ... on ProjectV2ItemFieldTextValue {
                text
              }
            }  
          
            description: fieldValueByName(name:"Description") {
              ... on ProjectV2ItemFieldTextValue {
                text
              }
            }
              
            metatags: fieldValueByName(name:"Metatags") {
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