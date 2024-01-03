import { GoABlock, GoAGrid, GoAInput } from "@abgov/react-components";
import { ComponentCard, Props as ComponentProps } from "@components/component-card/ComponentCard";
import { ReactNode, useState } from "react";
import "./AllComponents.css";

export default function CheckboxPage() {
  const cards: ComponentProps[] = [
    {
      name: "accordion",
      groups: ["content"],
      tags: ["Blind, Collapse, Content layout, Expandable panel, Expand"],
      description: "Let users show and hide sections of related content on a page.",
    },
    {
      name: "callout",
      groups: ["content"],
      tags: ["Alert, Feedback and alerts, Show more information"],
      description: "Communicate important information through a strong visual emphasis.",
    },
    {
      name: "container",
      groups: ["content"],
      tags: ["Card, Content, Content layout, Group, Structure"],
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
      tags: ["Accordion details, Additional info, Additional information, Content layout, Detail accordion, Details expander, Details toggle, Disclosure, Expand, Expander, Expanding detail, Expandable details, Expandable help text, More info, See more, Show more, Show more information"],
      description: "Let users reveal more detailed information when they need it.",
    },
    {
      name: "hero banner",
      groups: ["content"],
      tags: ["Promotion banner, Hero panel, Structure and navigation"],
      description: "A visual band of text, including an image and a call to action.",
    },
    { 
      name: "list", 
      groups: ["content"],
      tags: ["Content layout"],
      description: "Chunk information into short succinct ideas.",
    },
    { 
      name: "popover", 
      groups: ["content"],
      tags: ["Content layout, Show more information"],
      description: "A small overlay that opens on demand, used in other components.",
    },
    {
      name: "table",
      groups: ["content"],
      tags: ["Data table, Content layout, Interactive table, Sortable table"],
      description:
        "A set of structured data that is easy for a user to scan, examine, and compare.",
    },
    {
      name: "badge",
      groups: ["feedback"],
      tags: ["Feedback and alerts, Label, Lozenge, Status, Tag, Token"],
      description:
        "Small labels which hold small amounts of information, system feedback, or states.",
    },
    {
      name: "chip",
      groups: ["feedback"],
      tags: ["Inputs and actions, Pill"],
      description: "Allow the user to enter information, filter content, and make selections.",
    },
    {
      name: "modal",
      groups: ["feedback"],
      tags: ["Feedback and alerts, Popup modal, Popup box, Modal dialog, Show more information"],
      description: "An overlay that appears in front of the main page content.",
    },
    {
      name: "notification banner",
      groups: ["feedback"],
      tags: ["Alert banner, Banner, Feedback and alerts"],
      description: "Display important page level information or notifications.",
    },
    {
      name: "progress indicator",
      groups: ["feedback"],
      tags: ["Feedback and alerts, Loading, Loader, Loading indicator, Progress spinner, Process timer, Spinner"],
      description: "Provide feedback of progress to users while loading.",
    },
    {
      name: "skeleton loading",
      groups: ["feedback"],
      tags: ["Content layout, Loading"],
      description: "Provide visual feedback to users while loading a content heavy page or page element.",
    },
    {
      name: "tooltip",
      groups: ["feedback"],
      tags: ["Feedback and alerts"],
      description: "Display more information in a popover when a user hovers over an element.",
    },
    {
      name: "button",
      groups: ["inputs"],
      tags: ["Action, Inputs and actions, Submit"],
      description: "Carry out an important action or navigate to another page.",
    },
    {
      name: "button group",
      groups: ["inputs"],
      tags: ["Action, Inputs and actions, Submit"],
      description: "Display multiple related actions stacked or in a horizontal row to help with arrangement and spacing.",
    },
    {
      name: "checkbox",
      groups: ["inputs"],
      tags: ["Checkbox, Checklist, Input, Inputs and actions, Options"],
      description: "Let the user select one or more options.",
    },
    {
      name: "dropdown",
      groups: ["inputs"],
      tags: ["Inputs and actions, Select, Single select dropdown"],
      description: "Present a list of options to the user to select from.",
    },
    {
      name: "file uploader",
      groups: ["inputs"],
      tags: ["Drag and drop, File upload, Inputs and actions, Uploader"],
      description: "Help users select and upload a file from their computer.",
    },
    {
      name: "icon button",
      groups: ["inputs"],
      tags: ["Action, Inputs and actions, Submit"],
      description: "A compact button with an icon and no text.",
    },
    {
      name: "radio",
      groups: ["inputs"],
      tags: ["Inputs and actions, Option button, Radio button group, Radio buttons"],
      description: "Allow users to select one option from a set.",
    },
    {
      name: "text area",
      groups: ["inputs"],
      tags: ["Inputs and actions, Long answer input field, Multi line text input, Multiple text box, Text box, Text input area"],
      description: "Let users enter and input text for multiple lines of information.",
    },
    {
      name: "text field",
      groups: ["inputs"],
      tags: ["Inputs and actions, Text field, Text box"],
      description: "Let users enter and input text for a single line of information.",
    },
    {
      name: "footer",
      groups: ["structure"],
      tags: ["Page footer, Structure and navigation"],
      description: "Provides information related your service at the bottom of every page.",
    },
    {
      name: "header",
      groups: ["structure"],
      tags: ["App Header, Global navigation, Header, Header and navigation, Main Navigation, Navigation header, Navigation menu, Primary Navigation, Service Header, Structure and navigation, Top Navigation"],
      description: "Used to help users find their way around a website or app.",
    },
    {
      name: "microsite header",
      groups: ["structure"],
      tags: ["Banner, Development header, Feedback bar, Microheader, Microsite banner, Service header, Service bar, Service stage banner, Service state banner, Status bar, Structure and navigation"],
      description: "Communicate what stage the service is at and gather feedback on your service.",
    },
    {
      name: "pagination",
      groups: ["structure"],
      tags: ["Pager, Pagination controls, Structure and navigation"],
      description: "Help users navigation between multiple pages or screens as part of a set.",
    },
    {
      name: "side menu",
      groups: ["structure"],
      tags: ["Secondary navigation, Side nav, Side bar, Structure and navigation"],
      description: "A side navigation that helps the user navigate between pages.",
    },
    {
      name: "stepper",
      groups: ["structure"],
      tags: ["Form stepper, Horizontal step navigation, Process overview, Progress indicator, Steps, Structure and navigation, Wizard"],
      description: "Provides a visual representation of a form through a series of steps.",
    },
    {
      name: "tabs",
      groups: ["structure"],
      tags: ["Sections, Structure and navigation, Tabbed interface"],
      description: "Let users navigate between related sections of content, displaying one section at a time.",
    },
    {
      name: "block",
      groups: ["utilities"],
      tags: ["Utility"],
      description: "Used when grouping components into a block with consistent space between.",
    },
    {
      name: "divider",
      groups: ["utilities"],
      tags: ["Dividing line, Page divider, Utilities"],
      description: "Indicate a separation of layout, or to distinguish large chunks of information on a page.",
    },
    {
      name: "form item",
      groups: ["utilities"],
      tags: ["Form, Input, Inputs and actions"],
      description:
        "Wraps an input control with a text label, requirement label, helper text, and error text.",
    },
    {
      name: "grid",
      groups: ["utilities"],
      tags: ["Utilities"],
      description:
        "The grid helps to arrange a number of components into a responsive grid pattern.",
    },
    {
      name: "icon",
      groups: ["utilities"],
      tags: ["Utilities"],
      description:
        "Use simple, easy-to-understand, universal icons from the design system to help guide users.",
    },
    {
      name: "spacer",
      groups: ["utilities"],
      tags: ["Gap, Margin, Padding, Space, Utilities"],
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
          <GoAGrid minChildWidth="15rem" gap="xl">
            {getComponentsByGroup("content")}
          </GoAGrid>
          <div className="back-to-top">
            <a href="#top">Back to top</a>
          </div>

          <a id="feedback" />
          <h2>Feedback and alerts</h2>
          <GoAGrid minChildWidth="15rem" gap="xl">
            {getComponentsByGroup("feedback")}
          </GoAGrid>
          <div className="back-to-top">
            <a href="#top">Back to top</a>
          </div>

          <a id="inputs" />
          <h2>Inputs and actions</h2>
          <GoAGrid minChildWidth="15rem" gap="xl">
            {getComponentsByGroup("inputs")}
          </GoAGrid>
          <div className="back-to-top">
            <a href="#top">Back to top</a>
          </div>

          <a id="structure" />
          <h2>Structure and navigation</h2>
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
