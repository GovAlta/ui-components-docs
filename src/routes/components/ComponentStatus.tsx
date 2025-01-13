import React, { useState, useEffect } from "react";
import {
  GoATab,
  GoATabs,
  GoATable,
  GoAText,
  GoASpacer,
  GoABadge,
  GoAGrid,
  GoAInput,
  GoAFormItem,
  GoACircularProgress
} from "@abgov/react-components";
import { ComponentCard, Props as ComponentProps } from "@components/component-card/ComponentCard";

const GitHubProjectViews = () => {
  const [filter, setFilter] = useState<string>(""); // Search filter state
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mocked card data for the grid
  const cards: ComponentProps[] = [
    {
      name: "accordion",
      groups: ["Content layout"],
      tags: ["blind", "collapse", "content layout", "expandable panel", "expand"],
      description: "Let users show and hide sections of related content on a page.",
      status: "Published"
    },
    {
      name: "callout",
      groups: ["Content layout"],
      tags: ["alert", "feedback and alerts", "show more information"],
      description: "Communicate important information through a strong visual emphasis.",
      status: "Not Published"
    },
    {
      name: "container",
      groups: ["Content layout"],
      tags: ["card", "content", "content layout", "group", "structure"],
      description: "Group information, create hierarchy, and show related information.",
      status: "Published"
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
      status: "Published"
    },
    {
      name: "hero banner",
      groups: ["Content layout"],
      tags: ["promotion banner", "hero panel", "structure and navigation"],
      description: "A visual band of text, including an image and a call to action.",
      status: "Published"
    },
    {
      name: "list",
      groups: ["Content layout"],
      tags: ["content layout"],
      description: "Organize information into brief and clear groups.",
      status: "Published"
    },
    {
      name: "popover",
      groups: ["Content layout"],
      tags: ["content layout", "show more information"],
      description: "A small overlay that opens on demand, used in other components.",
      status: "Published"
    },
    {
      name: "table",
      groups: ["Content layout"],
      tags: ["data table", "content layout", "interactive table", "sortable table"],
      description: "A set of structured data that is easy for a user to scan, examine, and compare.",
      status: "Published"
    },
    {
      name: "badge",
      groups: ["Feedback and alerts"],
      tags: ["feedback and alerts", "label", "lozenge", "status", "tag", "token"],
      description: "Small labels which hold small amounts of information, system feedback, or states.",
      status: "Published"
    },
    {
      name: "chip",
      groups: ["Feedback and alerts"],
      tags: ["inputs and actions", "pill"],
      description: "Allow the user to enter information, filter content, and make selections.",
      status: "Published"
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
      description: "An overlay that appears in front of all other content, and requires a user to take an action before continuing.",
      status: "Published"
    },
    {
      name: "notification banner",
      groups: ["Feedback and alerts"],
      tags: ["alert banner", "banner", "feedback and alerts"],
      description: "Display important page level information or notifications.",
      status: "Published"
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
      status: "Not Published"
    },
    {
      name: "skeleton loading",
      groups: ["Feedback and alerts"],
      tags: ["content layout", "loading"],
      description: "Provide visual feedback to users while loading a content heavy page or page element.",
      status: "Published"
    },
    {
      name: "tooltip",
      groups: ["Feedback and alerts"],
      tags: ["feedback and alerts"],
      description: "A small popover that displays more information about an item.",
      status: "Published"
    },
    {
      name: "button",
      groups: ["Inputs and actions"],
      tags: ["action", "inputs and actions", "submit"],
      description: "Carry out an important action or navigate to another page.",
      status: "Published"
    },
    {
      name: "button group",
      groups: ["Inputs and actions"],
      tags: ["action", "inputs and actions", "submit"],
      description: "Display multiple related actions stacked or in a horizontal row to help with arrangement and spacing.",
      status: "Published"
    },
    {
      name: "checkbox",
      groups: ["Inputs and actions"],
      tags: ["checkbox", "checklist", "input", "inputs and actions", "options"],
      description: "Let the user select one or more options.",
      status: "Published"
    },
    {
      name: "date picker",
      groups: ["Inputs and actions"],
      tags: ["calendar, date, date picker, inputs and actions, input"],
      description: "Lets users select a date through a calendar without the need to manually type it in a field.",
      status: "Published"
    },
    {
      name: "dropdown",
      groups: ["Inputs and actions"],
      tags: ["inputs and actions", "select", "single select dropdown"],
      description: "Present a list of options to the user to select from.",
      status: "Published"
    },
    {
      name: "file uploader",
      groups: ["Inputs and actions"],
      tags: ["drag and drop", "file upload", "inputs and actions", "uploader"],
      description: "Help users select and upload a file.",
      status: "Published"
    },
    {
      name: "icon button",
      groups: ["Inputs and actions"],
      tags: ["action", "inputs and actions", "submit"],
      description: "A compact button with an icon and no text.",
      status: "Published"
    },
    {
      name: "input",
      groups: ["Inputs and actions"],
      tags: ["inputs and actions", "text field", "text box", "search", "text input"],
      description: "A single-line field where users can input and edit text.",
      status: "Published"
    },
    {
      name: "radio",
      groups: ["Inputs and actions"],
      tags: ["inputs and actions", "option button", "radio button group", "radio buttons"],
      description: "Allow users to select one option from a set.",
      status: "Published"
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
      status: "Published"
    },
    {
      name: "footer",
      groups: ["Structure and navigation"],
      tags: ["page footer", "structure and navigation"],
      description: "Provides information related your service at the bottom of every page.",
      status: "Published"
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
      status: "Published"
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
      status: "Published"
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
      description: "Communicate what stage the service is at, connect to Alberta.ca, and gather feedback on your service.",
      status: "Published"
    },
    {
      name: "pagination",
      groups: ["Structure and navigation"],
      tags: ["pager", "pagination controls", "structure and navigation"],
      description: "Help users navigation between multiple pages or screens as part of a set.",
      status: "Published"
    },
    {
      name: "side menu",
      groups: ["Structure and navigation"],
      tags: ["secondary navigation", "side nav", "side bar", "structure and navigation"],
      description: "A side navigation that helps the user navigate between pages.",
      status: "Published"
    },
    {
      name: "tabs",
      groups: ["Structure and navigation"],
      tags: ["sections", "structure and navigation", "tabbed interface"],
      description: "Let users navigate between related sections of content, displaying one section at a time.",
      status: "Published"
    },
    {
      name: "block",
      groups: ["Utilities"],
      tags: ["utility"],
      description: "Used when grouping components into a block with consistent space between.",
      status: "Published"
    },
    {
      name: "divider",
      groups: ["Utilities"],
      tags: ["dividing line", "page divider", "utilities"],
      description: "Indicate a separation of layout, or to distinguish large chunks of information on a page.",
      status: "Published"
    },
    {
      name: "form item",
      groups: ["Utilities"],
      tags: ["form", "input", "inputs and actions"],
      description: "Wraps an input control with a text label, requirement label, helper text, and error text.",
      status: "Published"
    },
    {
      name: "grid",
      groups: ["Utilities"],
      tags: ["utilities"],
      description: "Arrange a number of components into a responsive grid pattern.",
      status: "Published"
    },
    {
      name: "icons",
      groups: ["Utilities"],
      tags: ["utilities"],
      description: "A simple and universal graphic symbol representing an action, object, or concept to help guide the user.",
      status: "Published"
    },
    {
      name: "spacer",
      groups: ["Utilities"],
      tags: ["gap", "margin", "padding", "space", "utilities"],
      description: "Negative area between the components and the interface.",
      status: "Published"
    },
    
    // Add other cards here...
    /* THESE ARE UNPUBLISHED CARDS FOR COMPONENTS (IDEA)
    {
      name: "Filter chip",
      groups: ["feedback"],
      tags: ["Not published"],
      description: "In progress.",
      status: "Not Published"
    },
    {
      name: "Back button",
      groups: ["inputs"],
      tags: ["Not published"],
      description: "Not yet available for use.",
      status: "Not Published"
    },
    {
      name: "Breadcrumb",
      groups: ["structure"],
      tags: ["Not published"],
      description: "Not yet available for use.",
      status: "Not Published"
    },
    {
      name: "Card",
      groups: ["structure"],
      tags: ["Not published"],
      description: "Not doing, tracking need.",
      status: "Not Published"
    },
    {
      name: "Disclaimer",
      groups: ["structure"],
      tags: ["Not published"],
      description: "Not doing, tracking need.",
      status: "Not Published"
    },
    {
      name: "Drawer",
      groups: ["structure"],
      tags: ["Not published"],
      description: "Not yet available for use.",
      status: "Not Published"
    },
    {
      name: "Error summary",
      groups: ["structure"],
      tags: ["Not published"],
      description: "Not yet available for use.",
      status: "Not Published"
    },
    {
      name: "Floating action button (FAB)",
      groups: ["structure"],
      tags: ["Not published"],
      description: "Not yet available for use.",
      status: "Not Published"
    },
    {
      name: "Quick exit",
      groups: ["structure"],
      tags: ["Not published"],
      description: "Not yet available for use.",
      status: "Not Published"
    },
    {
      name: "Rich text editor",
      groups: ["structure"],
      tags: ["Not published"],
      description: "Not yet available for use.",
      status: "Not Published"
    },
    {
      name: "Split button",
      groups: ["structure"],
      tags: ["Not published"],
      description: "Not yet available for use.",
      status: "Not Published"
    },
    {
      name: "Temporary notification",
      groups: ["structure"],
      tags: ["Not published"],
      description: "Not yet available for use.",
      status: "Not Published"
    },
    
    */
    // Add more card definitions here...
  ];

  // GitHub Fetch
  useEffect(() => {
    const fetchProject = async () => {
      const query = `
        query {
          user(login: "twjeffery") {
            projectV2(number: 5) {
              id
              title
              url
              items(first: 100) {
                nodes {
                  content {
                    ... on Issue {
                      id
                      title
                      url
                      state
                    }
                    ... on PullRequest {
                      id
                      title
                      url
                      state
                    }
                  }
                  fieldValues(first: 10) {
                    nodes {
                      __typename
                      ... on ProjectV2ItemFieldSingleSelectValue {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;

      const token = import.meta.env.VITE_GITHUB_TOKEN;

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();

        if (result.errors) {
          throw new Error(result.errors.map((e) => e.message).join(", "));
        }

        setProject(result.data.user.projectV2);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, []);

  if (loading) {
    return (
      <GoACircularProgress variant="fullscreen" size="large" message="Loading..." />
    );
  }  if (error) return <div>Could not load page. {error}</div>;

  if (!project) return <div>Could not load page.</div>;

  const getPublishedStatus = (item) => {
    const statusField = item.fieldValues.nodes.find(
      (field) =>
        field.__typename === "ProjectV2ItemFieldSingleSelectValue" &&
        (field.name === "Published" || field.name === "Not published" || field.name === "In progress")
    );
    return statusField ? statusField.name : "Unknown";
  };

  const isComponentType = (item) => {
    const typeField = item.fieldValues.nodes.find(
      (field) =>
        field.__typename === "ProjectV2ItemFieldSingleSelectValue" && field.name === "Component"
    );
    return !!typeField;
  };

  const sortedItems = project.items.nodes
  .filter((item) => isComponentType(item)) // Filter by type "component"
  .filter((item) => {
    const filterLowerCase = filter.toLowerCase();
    const titleMatches = item.content.title.toLowerCase().includes(filterLowerCase);
    return !filter || titleMatches;
  })
  .sort((a, b) => {
    const statusA = getPublishedStatus(a);
    const statusB = getPublishedStatus(b);

    // Sort by status: Published first, In Progress second, Not Published last
    const statusOrder = {
      Published: 1,
      "In progress": 2,
      "Not published": 3,
    };

    if (statusOrder[statusA] !== statusOrder[statusB]) {
      return statusOrder[statusA] - statusOrder[statusB];
    }

    // If statuses are the same, sort alphabetically by title
    const titleA = a.content.title.toLowerCase();
    const titleB = b.content.title.toLowerCase();
    return titleA.localeCompare(titleB);
  });

  const getAllComponents = (): React.ReactNode[] =>
    cards
      .filter((card) => card.status === "Published") // Filter by status: Published
      .filter((card) => {
        const filterLowerCase = filter.toLowerCase();
        const nameMatches = card.name.toLowerCase().includes(filterLowerCase);
        const tagsMatch = card.tags.some((tag) => tag.toLowerCase().includes(filterLowerCase));
        return !filter || nameMatches || tagsMatch;
      })
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((card: ComponentProps) => (
        <ComponentCard
          key={card.name}
          name={card.name}
          groups={card.groups}
          description={card.description}
          href={`/components/${card.name}`}
        />
      ));

  const getNotPublishedComponents = (): React.ReactNode[] =>
    cards
      .filter((card) => card.status === "Not Published") // Filter by status: Published
      .filter((card) => {
        const filterLowerCase = filter.toLowerCase();
        const nameMatches = card.name.toLowerCase().includes(filterLowerCase);
        const tagsMatch = card.tags.some((tag) => tag.toLowerCase().includes(filterLowerCase));
        return !filter || nameMatches || tagsMatch;
      })
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((card: ComponentProps) => (
        <ComponentCard
          key={card.name}
          name={card.name}
          groups={card.groups}
          description={card.description}
        />
    ));

  const filterComponents = (value: string) => {
    setFilter(value);
  };

  return (
    <div>
      <GoAText size="heading-xl" mt="xl">
        Components
      </GoAText>
      <GoAText size="body-l" mt="m" mb="l">
        Components are reusable parts of the user interface that have been made to support a variety
        of applications. You can use individual components in many different patterns and contexts.
      </GoAText>

      <GoAFormItem helpText="Search by keyword, category, or name" mb="xl">
        <GoAInput
          leadingIcon="search"
          name="filter"
          type="text"
          value={filter}
          width="100%"
          onChange={(_name, value) => filterComponents(value)}
        />
      </GoAFormItem>

      <GoATabs mt="l">

        <GoATab heading="Grid">
          <GoAGrid minChildWidth="15rem" gap="xl">
            {getAllComponents()}
          </GoAGrid>

         
          
          <GoAGrid minChildWidth="15rem" gap="xl">
            {getNotPublishedComponents()}
          </GoAGrid>
          
        </GoATab>

        <GoATab heading="List">
  {sortedItems.length === 0 ? (
    <p>No items found.</p>
  ) : (
    <>
      {/* Table for Published items */}
     
      <GoATable width="640px">
        <thead>
          <tr>
            <th>Name</th>
            <th width="80px">Status</th>
            <th width="140px">GitHub issue</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems
            .filter((item) => getPublishedStatus(item) === "Published")
            .map((item, index) => (
              <tr key={index}>
                <td>
                  <a href={`/components/${item.content.title.toLowerCase()}`}>
                    {item.content.title}
                  </a>
                </td>
                <td>
                  <GoABadge type="success" content={getPublishedStatus(item)} />
                </td>
                <td>
                  <a href={item.content.url} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </GoATable>

      <GoASpacer vSpacing="xxl" />

     {/* Table for In Progress and Not Published items */}
<GoAText size="heading-m" mt="2xl" mb="m">
  Not Published
</GoAText>
<GoATable width="640px">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>GitHub issue</th>
    </tr>
  </thead>
  <tbody>
    {sortedItems
      .filter(
        (item) =>
          getPublishedStatus(item) === "In progress" ||
          getPublishedStatus(item) === "Not published"
      )
      .map((item, index) => (
        <tr key={index}>
          <td>{item.content.title}</td> {/* No link here */}
          <td>
            <GoABadge
              type={
                getPublishedStatus(item) === "In progress"
                  ? "information"
                  : "important"
              }
              content={getPublishedStatus(item)}
            />
          </td>
          <td>
            <a href={item.content.url} target="_blank" rel="noopener noreferrer">
              View
            </a>
          </td>
        </tr>
      ))}
  </tbody>
</GoATable>
    </>
  )}
</GoATab>
        
      </GoATabs>
    </div>
  );
};

export default GitHubProjectViews;