import { useEffect, useState } from "react";
import { ComponentStatus } from "@components/component-card/ComponentCard";
import { toSentenceCase, fetchAllIssueCounts } from "../../utils";
import {
  GoabTable,
  GoabTableSortHeader,
  GoabTabs,
  GoabTab,
  GoabGrid,
  GoabText,
  GoabFormItem,
  GoabInput,
  GoabBadge,
} from "@abgov/react-components";
import { ComponentCard, Props as ComponentProps } from "@components/component-card/ComponentCard";
import { GoabBadgeType } from "@abgov/ui-components-common";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { ANGULAR_VERSIONS, REACT_VERSIONS } from "@components/version-language-switcher/version-language-constants.ts";


// Helper function to determine badge type based on status
const getBadgeType = (status: ComponentStatus): GoabBadgeType => {
  const successStatuses = ["Published", "Available"];
  if (successStatuses.includes(status)) return "success";
  if (status === "Legacy") return "information";
  if (status === "In Progress") return "important";
  return "light"; // Default or "Not Published"
};

const AllComponents = () => {
  const { version, language } = useContext(LanguageVersionContext);
  const [filter, setFilter] = useState<string>("");
  const [issueCounts, setIssueCounts] = useState<Record<string, number>>({});
  const [cards, setCards] = useState<ComponentProps[]>(() => {
    const initialCards: ComponentProps[] = [
      {
        name: "accordion",
        groups: ["Content layout"],
        tags: ["blind", "collapse", "content layout", "expandable panel", "expand"],
        description: "Let users show and hide sections of related content on a page.",
        status: "Available",
      },
      {
        name: "callout",
        groups: ["Content layout"],
        tags: ["alert", "feedback and alerts", "show more information"],
        description: "Communicate important information through a strong visual emphasis.",
        status: "Available",
      },
      {
        name: "container",
        groups: ["Content layout"],
        tags: ["card", "content", "content layout", "group", "structure"],
        description: "Group information, create hierarchy, and show related information.",
        status: "Available",
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
        status: "Available",
      },
      {
        name: "hero banner",
        groups: ["Content layout"],
        tags: ["promotion banner", "hero panel", "structure and navigation"],
        description: "A visual band of text, including an image and a call to action.",
        status: "Available",
      },
      {
        name: "list",
        groups: ["Content layout"],
        tags: ["content layout"],
        description: "Organize information into brief and clear groups.",
        status: "Available",
      },
      {
        name: "popover",
        groups: ["Content layout"],
        tags: ["content layout", "show more information"],
        description: "A small overlay that opens on demand, used in other components.",
        status: "Available",
      },
      {
        name: "table",
        groups: ["Content layout"],
        tags: ["data table", "content layout", "interactive table", "sortable table"],
        description:
          "A set of structured data that is easy for a user to scan, examine, and compare.",
        status: "Available",
      },
      {
        name: "badge",
        groups: ["Feedback and alerts"],
        tags: ["feedback and alerts", "label", "lozenge", "status", "tag", "token"],
        description:
          "Small labels which hold small amounts of information, system feedback, or states.",
        status: "Available",
      },
      {
        name: "filter chip",
        groups: ["Feedback and alerts"],
        tags: ["inputs and actions", "pill"],
        description: "Allow the user to enter information, filter content, and make selections.",
        status: "Available",
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
        status: "Available",
      },
      {
        name: "notification banner",
        groups: ["Feedback and alerts"],
        tags: ["alert banner", "banner", "feedback and alerts"],
        description: "Display important page level information or notifications.",
        status: "Available",
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
        status: "Available",
      },
      {
        name: "skeleton loader",
        groups: ["Feedback and alerts"],
        tags: ["content layout", "loading"],
        description:
          "Provide visual feedback to users while loading a content heavy page or page element.",
        status: "Available",
      },
      {
        name: "tooltip",
        groups: ["Feedback and alerts"],
        tags: ["feedback and alerts"],
        description: "A small popover that displays more information about an item.",
        status: "Available",
      },
      {
        name: "button",
        groups: ["Inputs and actions"],
        tags: ["action", "inputs and actions", "submit"],
        description: "Carry out an important action or navigate to another page.",
        status: "Available",
      },
      {
        name: "button group",
        groups: ["Inputs and actions"],
        tags: ["action", "inputs and actions", "submit"],
        description:
          "Display multiple related actions stacked or in a horizontal row to help with arrangement and spacing.",
        status: "Available",
      },
      {
        name: "checkbox",
        groups: ["Inputs and actions"],
        tags: ["checkbox", "checklist", "input", "inputs and actions", "options"],
        description: "Let the user select one or more options.",
        status: "Available",
      },
      {
        name: "date picker",
        groups: ["Inputs and actions"],
        tags: ["calendar, date, date picker, inputs and actions, input"],
        description:
          "Lets users select a date through a calendar without the need to manually type it in a field.",
        status: "Available",
      },
      {
        name: "drawer",
        groups: ["Structure and navigation"],
        tags: ["sections", "structure and navigation", "Sheet", "Sidesheet", "Sidepanel"],
        description:
          "A panel that slides in from the side of the screen to display additional content or actions without navigating away from the current view.",
        status: "Available",
        isNew: true,
      },
      {
        name: "dropdown",
        groups: ["Inputs and actions"],
        tags: ["inputs and actions", "select", "single select dropdown"],
        description: "Present a list of options to the user to select from.",
        status: "Available",
      },
      {
        name: "file uploader",
        groups: ["Inputs and actions"],
        tags: ["drag and drop", "file upload", "inputs and actions", "uploader"],
        description: "Help users select and upload a file.",
        status: "Available",
      },
      {
        name: "icon button",
        groups: ["Inputs and actions"],
        tags: ["action", "inputs and actions", "submit"],
        description: "A compact button with an icon and no text.",
        status: "Available",
      },
      {
        name: "input",
        groups: ["Inputs and actions"],
        tags: ["inputs and actions", "text field", "text box", "search", "text input"],
        description: "A single-line field where users can input and edit text.",
        status: "Available",
      },
      {
        name: "radio",
        groups: ["Inputs and actions"],
        tags: ["inputs and actions", "option button", "radio button group", "radio buttons"],
        description: "Allow users to select one option from a set.",
        status: "Available",
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
        status: "Available",
      },
      {
        name: "footer",
        groups: ["Structure and navigation"],
        tags: ["page footer", "structure and navigation"],
        description: "Provides information related your service at the bottom of every page.",
        status: "Available",
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
        status: "Legacy",
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
        status: "Available",
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
        status: "Available",
      },
      {
        name: "pagination",
        groups: ["Structure and navigation"],
        tags: ["pager", "pagination controls", "structure and navigation"],
        description:
          "Help users navigation between multiple pages or screens as part of a set.",
        status: "Available",
      },
      {
        name: "side menu",
        groups: ["Structure and navigation"],
        tags: ["secondary navigation", "side nav", "side bar", "structure and navigation"],
        description: "A side navigation that helps the user navigate between pages.",
        status: "Available",
      },
      {
        name: "tabs",
        groups: ["Structure and navigation"],
        tags: ["sections", "structure and navigation", "tabbed interface"],
        description:
          "Let users navigate between related sections of content, displaying one section at a time.",
        status: "Available",
      },
      {
        name: "block",
        groups: ["Utilities"],
        tags: ["utility"],
        description:
          "Used when grouping components into a block with consistent space between.",
        status: "Available",
      },
      {
        name: "divider",
        groups: ["Utilities"],
        tags: ["dividing line", "page divider", "utilities"],
        description:
          "Indicate a separation of layout, or to distinguish large chunks of information on a page.",
        status: "Available",
      },
      {
        name: "form item",
        groups: ["Utilities"],
        tags: ["form", "input", "inputs and actions"],
        description:
          "Wraps an input control with a text label, requirement label, helper text, and error text.",
        status: "Available",
      },
      {
        name: "grid",
        groups: ["Utilities"],
        tags: ["utilities"],
        description: "Arrange a number of components into a responsive grid pattern.",
        status: "Available",
      },
      {
        name: "icons",
        groups: ["Utilities"],
        tags: ["utilities"],
        description:
          "A simple and universal graphic symbol representing an action, object, or concept to help guide the user.",
        status: "Available",
      },
      {
        name: "link",
        groups: ["Utilities"],
        tags: ["utilities"],
        description: "Wraps an anchor element to add icons or margins.",
        status: "Available",
      },
      {
        name: "spacer",
        groups: ["Utilities"],
        tags: ["gap", "margin", "padding", "space", "utilities"],
        description: "Negative area between the components and the interface.",
        status: "Available",
      },
      {
        name: "toggle button",
        groups: ["Inputs and actions"],
        tags: ["button", "inputs and actions"],
        description: "Currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "back button",
        groups: ["Inputs and actions"],
        tags: ["button", "inputs and actions"],
        description: "Related to form pattern, currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "breadcrumb",
        groups: ["Structure and navigation"],
        tags: ["breadcrumb"],
        description: "Currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "error summary",
        groups: ["Feedback and alerts"],
        tags: ["Error"],
        description: "Related to form pattern, currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "floating action button",
        groups: ["Inputs and actions"],
        tags: ["FAB"],
        description: "Currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "quick exit",
        groups: ["Structure and navigation"],
        tags: ["Quick exit"],
        description: "Currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "skip to content",
        groups: ["Structure and navigation"],
        tags: ["Skip to content", "accessibility"],
        description: "Currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "rich text editor",
        groups: ["Inputs and actions"],
        tags: ["Skip to content", "accessibility"],
        description: "Currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "temporary notification",
        groups: ["Feedback and alerts"],
        tags: ["Snackbar", "Toast", "Temporary notification"],
        description: "Planned for development",
        status: "Not Published",
      },
      {
        name: "menu button",
        groups: ["Inputs and actions"],
        tags: ["Menu button", "split button"],
        description: "Planned for development.",
        status: "Not Published",
      },
      {
        name: "time picker",
        groups: ["Inputs and actions"],
        tags: ["Time picker", "date picker"],
        description: "Currently tracking this need in services.",
        status: "Not Published",
      },
      {
        name: "text",
        groups: ["Content layout"],
        tags: ["text", "body", "copy"],
        description: "Provides consistent sizing, spacing, and colour to written content.",
        status: "Available",
      },
    ];

    return initialCards.sort((a, b) => {
      const statusOrder: ComponentStatus[] = ["Published", "In Progress", "Legacy", "Not Published"];
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
    const filterLowerCase = (filter || "").toLowerCase();
    const nameMatches = card.name.toLowerCase().includes(filterLowerCase);
    const tagsMatch = card.tags?.some((tag) => tag.toLowerCase().includes(filterLowerCase));
    return !filter || nameMatches || tagsMatch;
  });

  const sortData = (detailOrSortBy: string | { sortBy: string }) => {
    // If a string is passed, use it directly; otherwise extract the sortBy property
    const sortBy = typeof detailOrSortBy === "string" ? detailOrSortBy : detailOrSortBy.sortBy;

    const newDirection = sortDirection[sortBy] === 1 ? -1 : 1;
    const sorted = [...cards].sort((a, b) => {
      if (sortBy === "status") {
        const statusOrder: ComponentStatus[] = ["Published", "In Progress", "Legacy", "Not Published"];
        const statusComparison = statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
        if (statusComparison !== 0) return statusComparison * newDirection;
      }
      const key = sortBy as keyof ComponentProps;
      const aField = a[key];
      const bField = b[key];

      const aValue =
        sortBy === "name"
          ? a.name.toLowerCase()
          : Array.isArray(aField)
            ? (aField.length > 0 ? aField[0] : "")
            : (aField ?? "");
      const bValue =
        sortBy === "name"
          ? b.name.toLowerCase()
          : Array.isArray(bField)
            ? (bField.length > 0 ? bField[0] : "")
            : (bField ?? "");

      if (aValue > bValue) return newDirection;
      if (aValue < bValue) return -newDirection;
      return 0;
    });

    setCards(sorted);
    setSortDirection({ [sortBy]: newDirection });
  };

  // Helper to format the label query for REST URLs
  const getLabelQuery = (name: string) => {
    const formatted = toSentenceCase(name);
    return formatted.includes(" ") ? `"${formatted}"` : formatted;
  };

  // Helper to format the label query for GraphQL (escaping inner quotes)
  useEffect(() => {
    const loadIssueCounts = async () => {
      const issueCounts = await fetchAllIssueCounts(cards);
      setIssueCounts(issueCounts);
    };

    loadIssueCounts();
  }, [cards]);

  const renderTable = () => (
    <GoabTable width="100%" onSort={sortData}>
      <thead>
      <tr>
        <th>
          <GoabTableSortHeader
            name="status"
            direction={sortDirection.status === -1 ? "asc" : "desc"}
          >
            Status
          </GoabTableSortHeader>
        </th>
        <th>
          <GoabTableSortHeader name="name">
            Name
          </GoabTableSortHeader>
        </th>
        <th>
          <GoabTableSortHeader name="groups">
            Category
          </GoabTableSortHeader>
        </th>
        <th style={{ width: "130px", minWidth: "130px" }}>Open issues</th>
      </tr>
      </thead>
      <tbody>
      {filteredCards.map((card) => (
        <tr key={card.name}>
          <td style={{ width: "100px" }}>
            <GoabBadge
              mt="2xs"
              type={
                version === "old" && card.name === "drawer" 
                  ? "important" 
                  : getBadgeType(card.status)
              }
              content={
                version === "old" && card.name === "drawer"
                  ? "Available in " + 
                    (language === "angular"
                      ? ANGULAR_VERSIONS.NEW.label.substring(0, 2).toUpperCase()
                      : REACT_VERSIONS.NEW.label.substring(0, 2).toUpperCase())
                  : card.status
              }
            />
          </td>
          <td>
            {card.status === "Published" || card.status === "Available" ? (
              <a href={`/components/${card.name.toLowerCase().replace(/\s+/g, "-")}`}>
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
    </GoabTable>
  );

  return (
    <div>
      <GoabText size="heading-xl" mt="xl">
        Components
      </GoabText>
      <GoabText size="body-l" mt="m" mb="xl">
        Components are reusable parts of the user interface that have been made to support a variety of applications. You can use individual components in many different patterns and contexts.
      </GoabText>

      <GoabFormItem helpText="Search by keyword, category, or name" mb="xl">
        <GoabInput
          leadingIcon="search"
          name="filter"
          type="text"
          value={filter}
          width="100%"
          onChange={({ value }) => setFilter(value || "")}        />
      </GoabFormItem>

      <GoabTabs initialTab={1}>
        <GoabTab heading="Cards">
          <GoabGrid minChildWidth="15rem" gap="xl">
            {filteredCards.map((card) => (
              <ComponentCard
                key={card.name}
                name={card.name}
                groups={card.groups}
                description={card.description}
                status={card.status}
                githubLink={`https://github.com/GovAlta/ui-components/issues?q=is%3Aissue+is%3Aopen+label%3A${encodeURIComponent(getLabelQuery(card.name))}`}
                openIssues={issueCounts[card.name]}
                isNew={card.isNew}
              />
            ))}
          </GoabGrid>
        </GoabTab>
        <GoabTab heading="List">{renderTable()}</GoabTab>
      </GoabTabs>
    </div>
  );
};

export default AllComponents;
