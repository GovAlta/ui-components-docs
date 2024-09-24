import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoABadge,
  GoAButton,
  GoAButtonGroup,
  GoAContainer,
  GoAFilterChip,
  GoAFilterChipProps,
  GoAInput,
  GoATab,
  GoATabs,
} from "@abgov/react-components";
import { ComponentBinding, LanguageContext, Sandbox } from "@components/sandbox";
import { useContext, useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import ICONS from "./icons.json";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

// == Page props ==

const componentName = "Filter Chip";
const description = "Allow the user to enter information, filter content, and make selections.";
const category = Category.FEEDBACK_AND_ALERTS;
const relatedComponents = [
  { link: "/components/badge", name: "Badge" },
  { link: "/components/popover", name: "Popover" },
  { link: "/components/Table", name: "Table" },
];
type ComponentPropsType = GoAFilterChipProps;

type CastingType = {
  content: string;
  [key: string]: unknown;
};

export default function FilterChipPage() {
  const [componentProps, setComponentProps] = useState<ComponentPropsType>({
    content: "Chip text",
  });
  const language = useContext(LanguageContext);
  const [componentBindings, setComponentBindings] = useState<ComponentBinding[]>([
    {
      label: "Leading icon",
      type: "combobox",
      name: "leadingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
    {
      label: "Icon Theme",
      type: "list",
      name: "iconTheme",
      options: ["", "outline", "filled"],
      defaultValue: "outline",
      value: "",
    },
    {
      label: "Deletable",
      type: "boolean",
      name: "deletable",
      value: false,
    },
    {
      label: "Error",
      type: "boolean",
      name: "error",
      value: false,
    },
    {
      label: "Content",
      type: "string",
      name: "content",
      value: "Chip text",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "leadingicon",
      type: "GoAIconType",
      description: "Shows an icon to the left of the text.",
      lang: "angular",
    },
    {
      name: "leadingIcon",
      type: "GoAIconType",
      description: "Shows an icon to the left of the text.",
      lang: "react",
    },
    {
      name: "icontheme",
      type: "outline | filled",
      description: "The style of the leading icon",
      defaultValue: "outline",
      lang: "angular",
    },
    {
      name: "iconTheme",
      type: "outline | filled",
      description: "The style of the leading icon",
      defaultValue: "outline",
      lang: "react",
    },
    {
      name: "error",
      type: "boolean",
      description: "Shows an error state.",
    },
    {
      name: "deletable",
      type: "boolean",
      description: "Shows a delete icon button on the right of the text label.",
    },
    {
      name: "content",
      type: "string",
      required: true,
      description: "Text label of the chip.",
    },
    {
      name: "_click",
      type: "CustomEvent",
      description: "Callback when deletable and delete icon is clicked.",
      lang: "angular",
    },
    {
      name: "onClick",
      type: "() = void",
      description: "Callback when deletable and delete icon is clicked.",
      lang: "react",
    },
    {
      name: "testId",
      type: "string",
      lang: "react",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "testid",
      type: "string",
      lang: "angular",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    // ...
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as CastingType);
  }

  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const deleteChip = (chip: string) => {
    setChips(prevChips => prevChips.filter(c => c !== chip));
  };

  const addFilter = () => {
    const randomFilter = `Filter ${Math.floor(Math.random() * 100)}`;
    if (!activeFilters.includes(randomFilter)) {
      setActiveFilters(prevFilters => [...prevFilters, randomFilter]);
    }
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(prevFilters => prevFilters.filter(f => f !== filter));
  };

  const [typedChips, setTypedChips] = useState<string[]>([
    "Typed Chip 1",
    "Typed Chip 2",
    "Typed Chip 3",
  ]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (name: string, value: string) => {
    setInputValue(value);
  };

  const handleInputKeyDown = (name: string, value: string, key: string) => {
    if (key === "Enter" && value.trim() !== "") {
      setTypedChips(prevChips => [...prevChips, value.trim()]);
      setTimeout(() => {
        setInputValue("");
      }, 0);
    } else if (key === "Backspace" && value === "" && typedChips.length > 0) {
      setTypedChips(prevChips => prevChips.slice(0, -1));
    }
  };

  const removeTypedChip = (chip: string) => {
    setTypedChips(prevChips => prevChips.filter(c => c !== chip));
  };

  return (
    <>
      <ComponentHeader
        name={componentName}
        category={category}
        description={description}
        relatedComponents={relatedComponents}
      />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code examples">
            <h2 id="component" style={{ display: "none" }}>
              Component
            </h2>
            <Sandbox properties={componentBindings} onChange={onSandboxChange}>
              <GoAFilterChip {...componentProps} />
            </Sandbox>
            <ComponentProperties properties={componentProperties} />

            <h3 id="component-example-un-filled">
              Unfilled Close Icon (Default) / Filled Close Icon (On Hover)
            </h3>
            <Sandbox skipRender>
              <GoAFilterChip content="Hover Me" deletable={true} />

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-filter-chip content="Hover Me" deletable="true"></goa-filter-chip>
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                 <GoAFilterChip content="Hover Me" deletable={true} />
                `}
              />
            </Sandbox>

            <h3 id="component-example-un-filled">No Background Fill on Hover</h3>
            <Sandbox skipRender>
              <GoAFilterChip content="No Background 1" />
              <GoAFilterChip content="No Background 2" />

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-filter-chip content="No Background 1"></goa-filter-chip>
                  <goa-filter-chip content="No Background 2"></goa-filter-chip>
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  <GoAFilterChip content="No Background 1" />
                  <GoAFilterChip content="No Background 2" />
                `}
              />
            </Sandbox>

            <h3 id="component-example-delete">Delete Event</h3>
            <Sandbox skipRender>
              {chips.map(chip => (
                <GoAFilterChip
                  key={chip}
                  content={chip}
                  deletable={true}
                  onClick={() => deleteChip(chip)}
                />
              ))}

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  chips: string[] = ["Chip 1", "Chip 2", "Chip 3"];

                  deleteChip(chip: string): void {
                    this.chips = this.chips.filter((c) => c !== chip);
                  }
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-filter-chip
                    *ngFor="let chip of chips"
                    [content]="chip"
                    deletable="true"
                    (_click)="deleteChip(chip)">
                  </goa-filter-chip>
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  
                  const deleteChip = (chip: string) => {
                    setChips((prevChips) => prevChips.filter((c) => c !== chip));
                  };

                  {chips.map(chip => (
                    <GoAFilterChip
                      key={chip}
                      content={chip}
                      deletable={true}
                      onClick={() => deleteChip(chip)}
                    />
                  ))}
                `}
              />
            </Sandbox>

            <h3 id="component-interactive">Interactive Example</h3>
            <Sandbox skipRender>
              {activeFilters.map(filter => (
                <GoAFilterChip
                  key={filter}
                  content={filter}
                  deletable={true}
                  onClick={() => removeFilter(filter)}
                />
              ))}

              <GoAButtonGroup alignment="start" mt="l">
                <GoAButton onClick={addFilter}>Add Random Filter</GoAButton>
              </GoAButtonGroup>

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  chips: string[] = ["Chip 1", "Chip 2", "Chip 3"];
                  activeFilters: string[] = [];

                  removeFilter(filter: string): void {
                    this.activeFilters = this.activeFilters.filter((f) => f !== filter);
                  }

                  addFilter(): void {
                    const randomFilter = "Filter " + Math.floor(Math.random() * 100);
                    if (!this.activeFilters.includes(randomFilter)) {
                      this.activeFilters.push(randomFilter);
                    }
                  }
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  <div>
                  <goa-filter-chip
                    *ngFor="let filter of activeFilters"
                    [content]="filter"
                    deletable="true"
                    (_click)="removeFilter(filter)">
                  </goa-filter-chip>
                  </div>
                  <goa-button (click)="addFilter()">Add Random Filter</goa-button>
                `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                  const [activeFilters, setActiveFilters] = useState<string[]>([]);

                  const removeFilter = (filter: string) => {
                    setActiveFilters((prevFilters) => prevFilters.filter((f) => f !== filter));
                  };

                  <div>
                    {activeFilters.map((filter) => (
                      <GoAFilterChip
                        key={filter}
                        content={filter}
                        deletable={true}
                        onClick={() => removeFilter(filter)}
                      />
                    ))}
                  </div>
                  <GoAButton onClick={addFilter}>Add Random Filter</GoAButton>
                `}
              />
            </Sandbox>

            <h3 id="component-typed">Typed Chips Example</h3>
            <GoAContainer mb="none">
              <div
                className="chip-input-wrapper"
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  borderRadius: "4px",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}>
                {typedChips.map((chip, index) => (
                  <GoAFilterChip
                    key={index}
                    content={chip}
                    deletable={true}
                    onClick={() => removeTypedChip(chip)}
                  />
                ))}
                <GoAInput
                  name="chipInput"
                  placeholder="Type and press Enter"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleInputKeyDown}
                  width="30ch"
                />
              </div>
            </GoAContainer>

            {language === "angular" && (
              <>
                <CodeSnippet
                  lang="typescript"
                  tags="angular"
                  allowCopy={true}
                  code={`

                  import { Component } from "@angular/core";

                  @Component({
                    selector: "abgov-chip",
                    templateUrl: "./filter-chip.component.html",
                    styleUrl: "./filter-chip.component.css",
                  })
                  export class FilterChipComponent {
                    chips: string[] = ["Chip 1", "Chip 2", "Chip 3"];
                    activeFilters: string[] = [];
                    typedChips: string[] = ["Typed Chip 1", "Typed Chip 2", "Typed Chip 3"];
                    inputValue = "";


                    onInput(event: Event): void {
                      this.inputValue = (event.target as HTMLInputElement).value;
                    }

                    addChip(): void {
                      if (this.inputValue.trim()) {
                        this.typedChips.push(this.inputValue.trim());
                        this.inputValue = "";
                      }
                    }

                    removeTypedChip(chip: string): void {
                      this.typedChips = this.typedChips.filter((c) => c !== chip);
                    }

                    handleBackspace(event: KeyboardEvent): void {
                      if (!this.inputValue && this.typedChips.length > 0 && event.key === "Backspace") {
                        this.typedChips.pop();
                        event.preventDefault();
                      }
                    }
                  }
                
                `}
                />
              </>
            )}

            {language === "angular" && (
              <>
                <CodeSnippet
                  lang="typescript"
                  tags="angular"
                  allowCopy={true}
                  code={`
                  <goa-filter-chip
                    *ngFor="let chip of typedChips"
                    [content]="chip"
                    deletable="true"
                    (_click)="removeTypedChip(chip)"
                  ></goa-filter-chip>
                  <goa-input
                    id="chipInput"
                    type="text"
                    [value]="inputValue"
                    (input)="onInput($event)"
                    (keydown)="handleBackspace($event)"
                    (keydown.enter)="addChip()"
                    placeholder="Type and press Enter"
                  />
                 
                `}
                />
              </>
            )}

            {language === "react" && (
              <>
                <CodeSnippet
                  lang="typescript"
                  tags="react"
                  allowCopy={true}
                  code={`
                    export default function FilterChipComponent() {
                      const [typedChips, setTypedChips] = useState<string[]>([
                        "Typed Chip 1",
                        "Typed Chip 2",
                        "Typed Chip 3",
                      ]);
                      const [inputValue, setInputValue] = useState("");
                      const handleInputChange = (name: string, value: string) => {
                        setInputValue(value);
                      };

                      const handleInputKeyDown = (name: string, 
                                                  value: string, 
                                                  key: string) => {
                        if (key === "Enter" && value.trim() !== "") {
                          setTypedChips((prevChips) => [...prevChips, value.trim()]);
                          setTimeout(() => {
                            setInputValue("");
                          }, 0);
                        } else if (key === "Backspace" 
                                    && value === "" 
                                    && typedChips.length > 0) {
                          setTypedChips((prevChips) => prevChips.slice(0, -1));
                        }
                      };

                      const removeTypedChip = (chip: string) => {
                        setTypedChips((prevChips) => prevChips.filter((c) => c !== chip));
                      };

                      return (
                        {typedChips.map((chip, index) => (
                          <GoAFilterChip
                            key={index}
                            content={chip}
                            deletable={true}
                            onClick={() => removeTypedChip(chip)}
                          />
                        ))}
                        <GoAInput
                          name="chipInput"
                          placeholder="Type and press Enter"
                          value={inputValue}
                          onChange={handleInputChange}
                          onKeyPress={handleInputKeyDown}
                          width="30ch"
                        />
                    );
                  }
                `}
                />
              </>
            )}
          </GoATab>

          <GoATab
            heading={
              <>
                Design guidelines
                <GoABadge type="information" content="In progress" />
              </>
            }></GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}
