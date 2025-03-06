import { useEffect, useState } from "react";
import {
  GoATable,
  GoATableSortHeader,
  GoATabs,
  GoATab,
  GoAGrid,
  GoAText,
  GoAFormItem,
  GoAInput,
  GoABadge,
} from "@abgov/react-components";
import { ComponentCard, Props as ComponentProps } from "@components/component-card/ComponentCard";

const AllComponents = () => {
  const [filter, setFilter] = useState<string>("");
  const [issueCounts, setIssueCounts] = useState<Record<string, number>>({});
  const [cards, setCards] = useState<ComponentProps[]>(() => {
    const initialCards: ComponentProps[] = [
      {
        name: "accordion",
        groups: ["Content layout"],
        tags: ["blind", "collapse", "content layout", "expandable panel", "expand"],
        description: "Let users show and hide sections of related content on a page.",
        status: "Published",
      },
      {
        name: "callout",
        groups: ["Content layout"],
        tags: ["alert", "feedback and alerts", "show more information"],
        description: "Communicate important information through a strong visual emphasis.",
        status: "Published",
      },
      {
        name: "container",
        groups: ["Content layout"],
        tags: ["card", "content", "content layout", "group", "structure"],
        description: "Group information, create hierarchy, and show related information.",
        status: "Published",
      },
      {
        name: "details",
        groups: ["Content layout"],
        tags: [
          "accordion details",
          "additional info",
          "additional information",
          "content layout",
          "detail accordion",
          "details expander",
          "details toggle",
          "disclosure",
          "expand",
          "expander",
          "expanding detail",
          "expandable details",
          "expandable help text",
          "more info",
          "see more",
          "show more",
          "show more information",
        ],
        description: "Let users reveal more detailed information when they need it.",
        status: "Published",
      },
      {
        name: "hero banner",
        groups: ["Content layout"],
        tags: ["promotion banner", "hero panel", "structure and navigation"],
        description: "A visual band of text, including an image and a call to action.",
        status: "Published",
      },
      {
        name: "list",
        groups: ["Content layout"],
        tags: ["content layout"],
        description: "Organize information into brief and clear groups.",
        status: "Published",
      },
      {
        name: "popover",
        groups: ["Content layout"],
        tags: ["content layout", "show more information"],
        description: "A small overlay that opens on demand, used in other components.",
        status: "Published",
      },
      {
        name: "table",
        groups: ["Content layout"],
        tags: ["data table", "content layout", "interactive table", "sortable table"],
        description:
            "A set of structured data that is easy for a user to scan, examine, and compare.",
        status: "Published",
      },
      {
        name: "badge",
        groups: ["Feedback and alerts"],
        tags: ["feedback and alerts", "label", "lozenge", "status", "tag", "token"],
        description:
            "Small labels which hold small amounts of information, system feedback, or states.",
        status: "Published",
      },
      {
        name: "chip",
        groups: ["Feedback and alerts"],
        tags: ["inputs and actions", "pill"],
        description: "Allow the user to enter information, filter content, and make selections.",
        status: "Published",
      },
      {
        name: "modal",
        groups: ["Feedback and alerts"],
        tags: [
          "feedback and alerts",
          "popup modal",
          "popup box",
          "modal dialog",
          "show more information",
        ],
        description:
            "An overlay that appears in front of all other content, and requires a user to take an action before continuing.",
        status: "Published",
      },
      {
        name: "notification banner",
        groups: ["Feedback and alerts"],
        tags: ["alert banner", "banner", "feedback and alerts"],
        description: "Display important page level information or notifications.",
        status: "Published",
      },
      {
        name: "progress indicator",
        groups: ["Feedback and alerts"],
        tags: [
          "feedback and alerts",
          "loading",
          "loader",
          "loading indicator",
          "progress spinner",
          "process timer",
          "spinner",
        ],
        description: "Provide feedback of progress to users while loading.",
        status: "Published",
      },
      {
        name: "skeleton loading",
        groups: ["Feedback and alerts"],
        tags: ["content layout", "loading"],
        description:
            "Provide visual feedback to users while loading a content heavy page or page element.",
        status: "Published",
      },
      {
        name: "tooltip",
        groups: ["Feedback and alerts"],
        tags: ["feedback and alerts"],
        description: "A small popover that displays more information about an item.",
        status: "Published",
      },
      {
        name: "button",
        groups: ["Inputs and actions"],
        tags: ["action", "inputs and actions", "submit"],
        description: "Carry out an important action or navigate to another page.",
        status: "Published",
      },
      {
        name: "button group",
        groups: ["Inputs and actions"],
        tags: ["action", "inputs and actions", "submit"],
        description:
            "Display multiple related actions stacked or in a horizontal row to help with arrangement and spacing.",
        status: "Published",
      },
      {
        name: "checkbox",
        groups: ["Inputs and actions"],
        tags: ["checkbox", "checklist", "input", "inputs and actions", "options"],
        description: "Let the user select one or more options.",
        status: "Published",
      },
      {
        name: "date picker",
        groups: ["Inputs and actions"],
        tags: ["calendar, date, date picker, inputs and actions, input"],
        description:
            "Lets users select a date through a calendar without the need to manually type it in a field.",
        status: "Published",
      },
      {
        name: "dropdown",
        groups: ["Inputs and actions"],
        tags: ["inputs and actions", "select", "single select dropdown"],
        description: "Present a list of options to the user to select from.",
        status: "Published",
      },
      {
        name: "file uploader",
        groups: ["Inputs and actions"],
        tags: ["drag and drop", "file upload", "inputs and actions", "uploader"],
        description: "Help users select and upload a file.",
        status: "Published",
      },
      {
        name: "icon button",
        groups: ["Inputs and actions"],
        tags: ["action", "inputs and actions", "submit"],
        description: "A compact button with an icon and no text.",
        status: "Published",
      },
      {
        name: "input",
        groups: ["Inputs and actions"],
        tags: ["inputs and actions", "text field", "text box", "search", "text input"],
        description: "A single-line field where users can input and edit text.",
        status: "Published",
      },
      {
        name: "radio",
        groups: ["Inputs and actions"],
        tags: ["inputs and actions", "option button", "radio button group", "radio buttons"],
        description: "Allow users to select one option from a set.",
        status: "Published",
      },
      {
        name: "text area",
        groups: ["Inputs and actions"],
        tags: [
          "inputs and actions",
          "long answer input field",
          "multi line text input",
          "multiple text box",
          "text box",
          "text input area",
        ],
        description: "A multi-line field where users can input and edit text.",
        status: "Published",
      },
      {
        name: "footer",
        groups: ["Structure and navigation"],
        tags: ["page footer", "structure and navigation"],
        description: "Provides information related your service at the bottom of every page.",
        status: "Published",
      },
      {
        name: "form stepper",
        groups: ["Structure and navigation"],
        tags: [
          "form stepper",
          "horizontal step navigation",
          "process overview",
          "progress indicator",
          "steps",
          "structure and navigation",
          "wizard",
        ],
        description: "Provides a visual representation of a form through a series of steps.",
        status: "Published",
      },
      {
        name: "header",
        groups: ["Structure and navigation"],
        tags: [
          "app header",
          "global navigation",
          "header",
          "header and navigation",
          "main navigation",
          "navigation header",
          "navigation menu",
          "primary navigation",
          "service header",
          "structure and navigation",
          "top navigation",
        ],
        description: "Provide structure to help users find their way around the service.",
        status: "Published",
      },
      {
        name: "microsite header",
        groups: ["Structure and navigation"],
        tags: [
          "banner",
          "development header",
          "feedback bar",
          "microheader",
          "microsite banner",
          "service header",
          "service bar",
          "service stage banner",
          "service state banner",
          "status bar",
          "structure and navigation",
        ],
        description:
            "Communicate what stage the service is at, connect to Alberta.ca, and gather feedback on your service.",
        status: "Published",
      },
      {
        name: "pagination",
        groups: ["Structure and navigation"],
        tags: ["pager", "pagination controls", "structure and navigation"],
        description:
            "Help users navigation between multiple pages or screens as part of a set.",
        status: "Published",
      },
      {
        name: "side menu",
        groups: ["Structure and navigation"],
        tags: ["secondary navigation", "side nav", "side bar", "structure and navigation"],
        description: "A side navigation that helps the user navigate between pages.",
        status: "Published",
      },
      {
        name: "tabs",
        groups: ["Structure and navigation"],
        tags: ["sections", "structure and navigation", "tabbed interface"],
        description:
            "Let users navigate between related sections of content, displaying one section at a time.",
        status: "Published",
      },
      {
        name: "block",
        groups: ["Utilities"],
        tags: ["utility"],
        description:
            "Used when grouping components into a block with consistent space between.",
        status: "Published",
      },
      {
        name: "divider",
        groups: ["Utilities"],
        tags: ["dividing line", "page divider", "utilities"],
        description:
            "Indicate a separation of layout, or to distinguish large chunks of information on a page.",
        status: "Published",
      },
      {
        name: "form item",
        groups: ["Utilities"],
        tags: ["form", "input", "inputs and actions"],
        description:
            "Wraps an input control with a text label, requirement label, helper text, and error text.",
        status: "Published",
      },
      {
        name: "grid",
        groups: ["Utilities"],
        tags: ["utilities"],
        description: "Arrange a number of components into a responsive grid pattern.",
        status: "Published",
      },
      {
        name: "icons",
        groups: ["Utilities"],
        tags: ["utilities"],
        description:
            "A simple and universal graphic symbol representing an action, object, or concept to help guide the user.",
        status: "Published",
      },
      {
        name: "spacer",
        groups: ["Utilities"],
        tags: ["gap", "margin", "padding", "space", "utilities"],
        description: "Negative area between the components and the interface.",
        status: "Published",
      },
      {
        name: "Toggle button",
        groups: ["Inputs and actions"],
        tags: ["button", "inputs and actions"],
        description: "Currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "Back button",
        groups: ["Inputs and actions"],
        tags: ["button", "inputs and actions"],
        description: "Related to form pattern, currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "Breadcrumb",
        groups: ["Structure and navigation"],
        tags: ["breadcrumb"],
        description: "Currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "Drawer",
        groups: ["Structure and navigation"],
        tags: ["Drawer", "Sheet", "Sidesheet", "Sidepanel"],
        description: "There is currently an experimental drawer in development.",
        status: "In Progress",
      },
      {
        name: "Error summary",
        groups: ["Feedback and alerts"],
        tags: ["Error"],
        description: "Related to form pattern, currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "Floating action button",
        groups: ["Inputs and actions"],
        tags: ["FAB"],
        description: "Currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "Quick exit",
        groups: ["Structure and navigation"],
        tags: ["Quick exit"],
        description: "Currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "Skip to content",
        groups: ["Structure and navigation"],
        tags: ["Skip to content", "accessibility"],
        description: "Currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "Rich text editor",
        groups: ["Inputs and actions"],
        tags: ["Skip to content", "accessibility"],
        description: "Currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "Temporary notification",
        groups: ["Feedback and alerts"],
        tags: ["Snackbar", "Toast", "Temporary notification"],
        description: "Planned for development",
        status: "Not Published",
      },
      {
        name: "Menu button",
        groups: ["Inputs and actions"],
        tags: ["Menu button", "split button"],
        description: "Planned for development.",
        status: "Not Published",
      },
      {
        name: "Time picker",
        groups: ["Inputs and actions"],
        tags: ["Time picker", "date picker"],
        description: "Currently tracking this need in services.",
        status: "Not Published",
      },
    ];

    return initialCards.sort((a, b) => {
      const statusOrder = ["Published", "In Progress", "Not Published"];
      const statusComparison = statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
      if (statusComparison !== 0) return statusComparison;
      return a.name.localeCompare(b.name);
    });
  });
  const [sortDirection, setSortDirection] = useState<{ [key: string]: number }>({
    status: -1,
    name: 1,
  });

  const filteredCards = cards.filter((card) => {
    const filterLowerCase = filter.toLowerCase();
    const nameMatches = card.name.toLowerCase().includes(filterLowerCase);
    const tagsMatch = card.tags?.some((tag) => tag.toLowerCase().includes(filterLowerCase));
    return !filter || nameMatches || tagsMatch;
  });

  const sortData = (sortBy: string) => {
    const newDirection = sortDirection[sortBy] === 1 ? -1 : 1;
    const sorted = [...cards].sort((a, b) => {
      if (sortBy === "status") {
        const statusOrder = ["Published", "In Progress", "Not Published"];
        const statusComparison = statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
        if (statusComparison !== 0) return statusComparison * newDirection;
      }
      const aValue =
        sortBy === "name"
          ? a.name.toLowerCase()
          : Array.isArray(a[sortBy])
            ? a[sortBy][0]
            : a[sortBy];
      const bValue =
        sortBy === "name"
          ? b.name.toLowerCase()
          : Array.isArray(b[sortBy])
            ? b[sortBy][0]
            : b[sortBy];

      if (aValue > bValue) return newDirection;
      if (aValue < bValue) return -newDirection;
      return 0;
    });
    setCards(sorted);
    setSortDirection({ [sortBy]: newDirection });
  };

  // Helper to convert to sentence case
  const toSentenceCase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  // Helper to format the label query for REST URLs
  const getLabelQuery = (name: string) => {
    const formatted = toSentenceCase(name);
    return formatted.includes(" ") ? `"${formatted}"` : formatted;
  };

  // Helper to format the label query for GraphQL (escaping inner quotes)
  const getGraphQLLabelQuery = (name: string) => {
    const formatted = toSentenceCase(name);
    return formatted.includes(" ") ? `\\"${formatted}\\"` : formatted;
  };

  useEffect(() => {
    const fetchIssueCountsGraphQL = async () => {
      const token =
        import.meta.env.VITE_GITHUB_TOKEN ||
        import.meta.env.VITE_GITHUB_TOKEN_ALTERNATE;
      if (!token) {
        console.error("GitHub token not provided");
        return;
      }

      // Build a single GraphQL query for all cards
      const queryFields = cards.map((card) => {
        const alias = card.name.replace(/\s+/g, "").toLowerCase();
        const labelQuery = getGraphQLLabelQuery(card.name);
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
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ query: graphQLQuery }),
        });

        const result = await response.json();
        if (result.errors) {
          console.error("GraphQL errors:", result.errors);
          return;
        }

        const newIssueCounts: Record<string, number> = {};
        cards.forEach((card) => {
          const alias = card.name.replace(/\s+/g, "").toLowerCase();
          newIssueCounts[card.name] =
            result.data[alias] && result.data[alias].issueCount
              ? result.data[alias].issueCount
              : 0;
        });

        setIssueCounts(newIssueCounts);
      } catch (error) {
        console.error("Error fetching issue counts:", error);
      }
    };

    fetchIssueCountsGraphQL();
  }, [cards]);

  const renderTable = () => (
    <GoATable width="100%" onSort={sortData}>
      <thead>
      <tr>
        <th>
          <GoATableSortHeader
            name="status"
            direction={sortDirection.status === -1 ? "asc" : "desc"}
            onClick={() => sortData("status")}
          >
            Status
          </GoATableSortHeader>
        </th>
        <th>
          <GoATableSortHeader name="name" onClick={() => sortData("name")}>
            Name
          </GoATableSortHeader>
        </th>
        <th>
          <GoATableSortHeader name="groups" onClick={() => sortData("groups")}>
            Category
          </GoATableSortHeader>
        </th>
        <th style={{ width: "130px", minWidth: "130px" }}>Open issues</th>
      </tr>
      </thead>
      <tbody>
      {filteredCards.map((card) => (
        <tr key={card.name}>
          <td style={{ width: "100px" }}>
            <GoABadge type={card.status === "Published" ? "success" : card.status === "In Progress" ? "important" : "information"} content={card.status} />
          </td>
          <td>
            {card.status === "Published" ? (
              <a href={`/components/${card.name.toLowerCase()}`}>
                {toSentenceCase(card.name)}
              </a>
            ) : (
              <span>{toSentenceCase(card.name)}</span>
            )}
          </td>
          <td>{card.groups.join(", ")}</td>
          <td style={{ minWidth: "135px", maxWidth: "170px" }}>
            <a
              href={`https://github.com/GovAlta/ui-components/issues?q=is%3Aissue+is%3Aopen+label%3A${encodeURIComponent(getLabelQuery(card.name))}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View
              {issueCounts[card.name] !== undefined && ` (${issueCounts[card.name]})`}
            </a>
          </td>
        </tr>
      ))}
      </tbody>
    </GoATable>
  );

  return (
    <div>
      <GoAText size="heading-xl" mt="xl">
        Components
      </GoAText>
      <GoAText size="body-l" mt="m" mb="l">
        Components are reusable parts of the user interface that have been made to support a variety of applications. You can use individual components in many different patterns and contexts.
      </GoAText>

      <GoAFormItem helpText="Search by keyword, category, or name" mb="xl">
        <GoAInput
          leadingIcon="search"
          name="filter"
          type="text"
          value={filter}
          width="100%"
          onChange={(_name, value) => setFilter(value)}
        />
      </GoAFormItem>

      <GoATabs>
        <GoATab heading="Cards">
          <GoAGrid minChildWidth="15rem" gap="xl">
            {filteredCards.map((card) => (
              <ComponentCard
                key={card.name}
                name={card.name}
                groups={card.groups}
                description={card.description}
                status={card.status}
                githubLink={`https://github.com/GovAlta/ui-components/issues?q=is%3Aissue+is%3Aopen+label%3A${encodeURIComponent(getLabelQuery(card.name))}`}
              />
            ))}
          </GoAGrid>
        </GoATab>
        <GoATab heading="List">{renderTable()}</GoATab>
      </GoATabs>
    </div>
  );
};

export default AllComponents;