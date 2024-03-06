import { GoABlock, GoAGrid, GoAInput } from "@abgov/react-components";
import { ComponentCard, Props as ComponentProps } from "@components/component-card/ComponentCard";
import { ReactNode, useState } from "react";
import "./AllComponents.css";
import { ComponentHeader } from "@components/component-header/ComponentHeader.tsx";

export default function AllComponentsPage() {
  const cards: ComponentProps[] = [
    {
      name: "accordion",
      groups: ["content"],
      tags: ["blind", "collapse", "content layout", "expandable panel", "expand"],
      description: "Let users show and hide sections of related content on a page.",
    },
    {
      name: "callout",
      groups: ["content"],
      tags: ["alert", "feedback and alerts", "show more information"],
      description: "Communicate important information through a strong visual emphasis.",
    },
    {
      name: "container",
      groups: ["content"],
      tags: ["card", "content", "content layout", "group", "structure"],
      description: "Group information, create hierarchy, and show related information.",
    },
    {
      name: "details",
      groups: ["content"],
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
    },
    {
      name: "hero banner",
      groups: ["content"],
      tags: ["promotion banner", "hero panel", "structure and navigation"],
      description: "A visual band of text, including an image and a call to action.",
    },
    {
      name: "list",
      groups: ["content"],
      tags: ["content layout"],
      description: "Organize information into brief and clear groups.",
    },
    {
      name: "popover",
      groups: ["content"],
      tags: ["content layout", "show more information"],
      description: "A small overlay that opens on demand, used in other components.",
    },
    {
      name: "table",
      groups: ["content"],
      tags: ["data table", "content layout", "interactive table", "sortable table"],
      description:
        "A set of structured data that is easy for a user to scan, examine, and compare.",
    },
    {
      name: "badge",
      groups: ["feedback"],
      tags: ["feedback and alerts", "label", "lozenge", "status", "tag", "token"],
      description:
        "Small labels which hold small amounts of information, system feedback, or states.",
    },
    {
      name: "chip",
      groups: ["feedback"],
      tags: ["inputs and actions", "pill"],
      description: "Allow the user to enter information, filter content, and make selections.",
    },
    {
      name: "modal",
      groups: ["feedback"],
      tags: [
        "feedback and alerts",
        "popup modal",
        "popup box",
        "modal dialog",
        "show more information",
      ],
      description: "An overlay that appears in front of all other content, and requires a user to take an action before continuing.",
    },
    {
      name: "notification banner",
      groups: ["feedback"],
      tags: ["alert banner", "banner", "feedback and alerts"],
      description: "Display important page level information or notifications.",
    },
    {
      name: "progress indicator",
      groups: ["feedback"],
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
    },
    {
      name: "skeleton loading",
      groups: ["feedback"],
      tags: ["content layout", "loading"],
      description:
        "Provide visual feedback to users while loading a content heavy page or page element.",
    },
    {
      name: "tooltip",
      groups: ["feedback"],
      tags: ["feedback and alerts"],
      description: "A small popover that displays more information about an item.",
    },
    {
      name: "button",
      groups: ["inputs"],
      tags: ["action", "inputs and actions", "submit"],
      description: "Carry out an important action or navigate to another page.",
    },
    {
      name: "button group",
      groups: ["inputs"],
      tags: ["action", "inputs and actions", "submit"],
      description:
        "Display multiple related actions stacked or in a horizontal row to help with arrangement and spacing.",
    },
    {
      name: "checkbox",
      groups: ["inputs"],
      tags: ["checkbox", "checklist", "input", "inputs and actions", "options"],
      description: "Let the user select one or more options.",
    },
    {
      name: "date picker",
      groups: ["inputs"],
      description:
        "Lets users select a date through a calendar without the need to manually type it in a field.",
    },
    {
      name: "dropdown",
      groups: ["inputs"],
      tags: ["inputs and actions", "select", "single select dropdown"],
      description: "Present a list of options to the user to select from.",
    },
    {
      name: "file uploader",
      groups: ["inputs"],
      tags: ["drag and drop", "file upload", "inputs and actions", "uploader"],
      description: "Help users select and upload a file.",
    },
    {
      name: "icon button",
      groups: ["inputs"],
      tags: ["action", "inputs and actions", "submit"],
      description: "A compact button with an icon and no text.",
    },
    {
      name: "radio",
      groups: ["inputs"],
      tags: ["inputs and actions", "option button", "radio button group", "radio buttons"],
      description: "Allow users to select one option from a set.",
    },
    {
      name: "text area",
      groups: ["inputs"],
      tags: [
        "inputs and actions",
        "long answer input field",
        "multi line text input",
        "multiple text box",
        "text box",
        "text input area",
      ],
      description: "A multi-line field where users can input and edit text.",
    },
    {
      name: "text field",
      groups: ["inputs"],
      tags: ["inputs and actions", "text field", "text box"],
      description: "A single-line field where users can input and edit text.",
    },
    {
      name: "footer",
      groups: ["structure"],
      tags: ["page footer", "structure and navigation"],
      description: "Provides information related your service at the bottom of every page.",
    },
    {
      name: "form stepper",
      groups: ["structure"],
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
    },
    {
      name: "header",
      groups: ["structure"],
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
    },
    {
      name: "microsite header",
      groups: ["structure"],
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
    },
    {
      name: "pagination",
      groups: ["structure"],
      tags: ["pager", "pagination controls", "structure and navigation"],
      description: "Help users navigation between multiple pages or screens as part of a set.",
    },
    {
      name: "side menu",
      groups: ["structure"],
      tags: ["secondary navigation", "side nav", "side bar", "structure and navigation"],
      description: "A side navigation that helps the user navigate between pages.",
    },
    {
      name: "tabs",
      groups: ["structure"],
      tags: ["sections", "structure and navigation", "tabbed interface"],
      description:
        "Let users navigate between related sections of content, displaying one section at a time.",
    },
    {
      name: "block",
      groups: ["utilities"],
      tags: ["utility"],
      description: "Used when grouping components into a block with consistent space between.",
    },
    {
      name: "divider",
      groups: ["utilities"],
      tags: ["dividing line", "page divider", "utilities"],
      description:
        "Indicate a separation of layout, or to distinguish large chunks of information on a page.",
    },
    {
      name: "form item",
      groups: ["utilities"],
      tags: ["form", "input", "inputs and actions"],
      description:
        "Wraps an input control with a text label, requirement label, helper text, and error text.",
    },
    {
      name: "grid",
      groups: ["utilities"],
      tags: ["utilities"],
      description:
        "Arrange a number of components into a responsive grid pattern.",
    },
    {
      name: "icon",
      groups: ["utilities"],
      tags: ["utilities"],
      description:
        "A simple and universal graphic symbol representing an action, object, or concept to help guide the user.",
    },
    {
      name: "spacer",
      groups: ["utilities"],
      tags: ["gap", "margin", "padding", "space", "utilities"],
      description: "Negative area between the components and the interface.",
    },
  ];

  function getComponentsByGroup(group: string): ReactNode[] {
    return cards
      .filter(card => card.groups.includes(group))
      .map((card: ComponentProps) => (
        <ComponentCard
          key={card.name}
          name={card.name}
          groups={card.groups}
          description={card.description}
        />
      ));
  }

  function getComponentsByFilter(): ReactNode[] {
    return cards
      .filter(
        card =>
          card.name.includes(filter.toLowerCase()) || (card.tags && card.tags.some(tag => tag.includes(filter.toLowerCase())))
      )
      .map((card: ComponentProps) => (
        <ComponentCard
          key={card.name}
          name={card.name}
          groups={card.groups}
          description={card.description}
        />
      ));
  }

  const [mode, setMode] = useState<"list" | "search">("list");
  const [filter, setFilter] = useState<string>("");

  function filterComponents(value: string) {
    if (value === "") {
      setMode("list");
      return;
    }
    setFilter(value);
    setMode("search");
  }

  return (
    <>
      <a id="top" />
      <ComponentHeader name={"Components"}
      description="Components are reusable parts of the user interface that have been made to support a variety
        of applications. You can use individual components in many different patterns and contexts."/>
      <GoABlock mt="xs" mb="xl">
        <GoAInput
          name="filter"
          value=""
          type="text"
          width="80ch"
          leadingIcon="search"
          onChange={(_name, value) => filterComponents(value)}
        />
      </GoABlock>

      {mode === "search" && <GoAGrid minChildWidth="300px">{getComponentsByFilter()}</GoAGrid>}

      {mode === "list" && (
        <>
          <h2 id="content">Content layout</h2>
          <GoAGrid minChildWidth="15rem" gap="xl">
            {getComponentsByGroup("content")}
          </GoAGrid>
          <div className="back-to-top">
            <a href="#top">Back to top</a>
          </div>

          <h2 id="feedback">Feedback and alerts</h2>
          <GoAGrid minChildWidth="15rem" gap="xl">
            {getComponentsByGroup("feedback")}
          </GoAGrid>
          <div className="back-to-top">
            <a href="#top">Back to top</a>
          </div>

          <h2 id="inputs">Inputs and actions</h2>
          <GoAGrid minChildWidth="15rem" gap="xl">
            {getComponentsByGroup("inputs")}
          </GoAGrid>
          <div className="back-to-top">
            <a href="#top">Back to top</a>
          </div>

          <h2 id="structure">Structure and navigation</h2>
          <GoAGrid minChildWidth="15rem" gap="xl">
            {getComponentsByGroup("structure")}
          </GoAGrid>
          <div className="back-to-top">
            <a href="#top">Back to top</a>
          </div>

          <h2 id="utilities">Utilities</h2>
          <GoAGrid minChildWidth="15rem" gap="xl">
            {getComponentsByGroup("utilities")}
          </GoAGrid>
          <div className="back-to-top">
            <a href="#top">Back to top</a>
          </div>
        </>
      )}
    </>
  );
}
