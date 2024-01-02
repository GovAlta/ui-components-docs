import { GoABlock, GoAGrid, GoAInput } from "@abgov/react-components";
import { ComponentCard, Props as ComponentProps } from "@components/component-card/ComponentCard";
import { ReactNode, useState } from "react";
import "./AllComponents.css";

export default function CheckboxPage() {
  const cards: ComponentProps[] = [
    {
      name: "accordion",
      groups: ["content"],
      description: "Accordions let users show and hide sections of related content on a page.",
    },
    {
      name: "container",
      groups: ["content"],
      description: "Group information, create hierarchy, and show related information.",
    },
    {
      name: "date picker",
      groups: ["inputs"],
      description: "A date picker lets users select a date through a calendar without the need to manually type it in a field."
    },
    {
      name: "details",
      groups: ["content"],
      description: "Let users reveal more detailed information when they need it.",
    },
    { name: "list", groups: ["content"], description: "Needs description" },
    {
      name: "table",
      groups: ["content"],
      description:
        "A set of structured data that is easy for a user to scan, examine, and compare.",
    },
    {
      name: "badge",
      groups: ["feedback"],
      description:
        "Small labels which hold small amounts of information, system feedback, or states.",
    },
    {
      name: "callout",
      groups: ["feedback"],
      description: "Communicate important information through a strong visual emphasis.",
    },
    {
      name: "modal",
      groups: ["feedback"],
      description: "An overlay that appears in front of the main page content.",
    },
    {
      name: "notification banner",
      groups: ["feedback"],
      description: "Display important page level information or notifications.",
    },
    {
      name: "progress indicator",
      groups: ["feedback"],
      description: "Provide visual feedback to users while loading.",
    },
    {
      name: "snackbar",
      groups: ["feedback"],
      description: "A temporary notification showing a process started or completed.",
    },
    {
      name: "tooltip",
      groups: ["feedback"],
      description: "More information displayed in a popover when a user hovers over an element.",
    },
    {
      name: "button",
      groups: ["inputs"],
      description: "Use a button to carry out an important action or to navigate to another page.",
    },
    {
      name: "checkbox",
      groups: ["inputs"],
      description: "Let the user select one or more options.",
    },
    {
      name: "chip",
      groups: ["inputs"],
      description: "Allow the user to enter information, filter content, and make selections.",
    },
    {
      name: "combobox",
      groups: ["inputs"],
      description: "Functions like a dropdown with the ability to filter options by typing.",
    },
    {
      name: "dropdown",
      groups: ["inputs"],
      tags: ["select"],
      description: "Functions like a dropdown with the ability to filter options by typing.",
    },
    {
      name: "file uploader",
      groups: ["inputs"],
      description: "Help users select and upload a file from their computer.",
    },
    {
      name: "radio",
      groups: ["inputs"],
      description: "Allow users to select one option from a set.",
    },
    {
      name: "text area",
      groups: ["inputs"],
      description: "Let users enter and input text for multiple lines of information.",
    },
    {
      name: "input",
      groups: ["inputs"],
      tags: ["text"],
      description: "Let users enter and input text for a single line of information.",
    },
    {
      name: "footer",
      groups: ["structure"],
      description: "Provides information related your service at the bottom of every page.",
    },
    {
      name: "hero banner",
      groups: ["structure"],
      description: "A visual band of text, including an image and a call to action.",
    },
    {
      name: "microsite header",
      groups: ["structure"],
      description: "Communicate what stage the service is at, and connect to Alberta.ca.",
    },
    {
      name: "pagination",
      groups: ["structure"],
      description: "Help users navigation between multiple pages or screens as part of a set.",
    },
    {
      name: "app header",
      groups: ["structure"],
      description: "Used to help users find their way around a website or app.",
    },
    {
      name: "form stepper",
      groups: ["structure"],
      description: "Provides a visual representation of a form through a series of steps.",
    },
    {
      name: "block",
      groups: ["utilities"],
      description: "Used when grouping components into a block with consistent space between.",
    },
    {
      name: "form item",
      groups: ["utilities"],
      description:
        "Wraps an input control with a text label, requirement label, helper text, and error text.",
    },
    {
      name: "grid",
      groups: ["utilities"],
      description:
        "The grid helps to arrange a number of components into a responsive grid pattern.",
    },
    {
      name: "spacer",
      groups: ["utilities"],
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
      .filter(card => card.name.includes(filter) || card.tags?.includes(filter))
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
      <h1>Components</h1>
      <h3>
        Components are reusable parts of the user interface that have been made to support a variety
        of applications. You can use individual components in many different patterns and contexts.
      </h3>

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
          <GoAGrid minChildWidth={"30ch"} gap="xs" mt="2xl" mb="3xl">
            <a href="#content">Content layout</a>
            <a href="#feedback">Feedback and alerts</a>
            <a href="#structure">Structure and navigation</a>
            <a href="#inputs">Inputs and actions</a>
            <a href="#utilities">Utilities</a>
          </GoAGrid>

          <a id="content" />
          <h2>Content layout</h2>
          <h3>Organize content</h3>
          <GoAGrid minChildWidth="15rem" gap="xl">
            {getComponentsByGroup("content")}
          </GoAGrid>
          <div className="back-to-top">
            <a href="#top">Back to top</a>
          </div>

          <a id="feedback" />
          <h2>Feedback and alerts</h2>
          <h3>Capture attention</h3>
          <GoAGrid minChildWidth="15rem" gap="xl">
            {getComponentsByGroup("feedback")}
          </GoAGrid>
          <div className="back-to-top">
            <a href="#top">Back to top</a>
          </div>

          <a id="inputs" />
          <h2>Inputs and actions</h2>
          <h3>Gather information</h3>
          <GoAGrid minChildWidth="15rem" gap="xl">
            {getComponentsByGroup("inputs")}
          </GoAGrid>
          <div className="back-to-top">
            <a href="#top">Back to top</a>
          </div>

          <a id="structure" />
          <h2>Structure and navigation</h2>
          <h3>Create structure</h3>
          <GoAGrid minChildWidth="15rem" gap="xl">
            {getComponentsByGroup("structure")}
          </GoAGrid>
          <div className="back-to-top">
            <a href="#top">Back to top</a>
          </div>

          <a id="utilities" />
          <h2>Utilities</h2>
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
