import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  GoABadge,
  GoABadgeType,
  GoABlock,
  GoAButton,
  GoAButtonGroup,
  GoAContainer,
  GoAFilterChip,
  GoAFilterChipProps,
  GoAInput,
  GoATab,
  GoATable,
  GoATabs
} from "@abgov/react-components";
import { ComponentBinding, LanguageContext, Sandbox } from "@components/sandbox";
import { useContext, useEffect, useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

// Page props
const componentName = "Filter Chip";
const description = "Allow the user to filter content.";
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
      name: "error",
      type: "boolean",
      description: "Shows an error state.",
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
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setComponentBindings(bindings);
    setComponentProps(props as CastingType);
  }

  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  const [tableChips, setTableChips] = useState(["Filter 1: Item", "Filter 2: Item", "Filter 3: Item"]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const deleteTableChip = (chip: string) => {
    setTableChips(prevChips => prevChips.filter(c => c !== chip));
  };

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
  const handleInputChange = (_name: string, value: string) => {
    setInputValue(value);
  };

  const handleInputKeyDown = (_name: string, value: string, key: string) => {
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

  interface User {
    badgeType: string;
    name: string;
    text: string;
    status: string;
    number: number;
  }

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const _users: User[] = [
      {
        badgeType: "success",
        status: "Completed",
        name:"1",
        text: "Lorem ipsum dolor sit amet consectetur.",
        number: 1234567890,
      },
      {
        badgeType: "success",
        status: "Completed",
        name:"2",
        text: "Lorem ipsum dolor sit amet consectetur.",
        number: 1234567890,
      },
      {
        badgeType: "success",
        status: "Completed",
        name:"3",
        text: "Lorem ipsum dolor sit amet consectetur.",
        number: 1234567890,
      },
      {
        badgeType: "success",
        status: "Completed",
        name:"4",
        text: "Lorem ipsum dolor sit amet consectetur.",
        number: 1234567890,
      },
      {
        badgeType: "success",
        status: "Completed",
        name:"5",
        text: "Lorem ipsum dolor sit amet consectetur.",
        number: 1234567890,
      },
      {
        badgeType: "success",
        status: "Completed",
        name:"6",
        text: "Lorem ipsum dolor sit amet consectetur.",
        number: 1234567890,
      },
    ];
    setUsers(_users);
  }, []);

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

            <h3 id="component-example-delete">Delete Event</h3>
            <Sandbox skipRender>
              {chips.map(chip => (
                <GoAFilterChip key={chip} content={chip} onClick={() => deleteChip(chip)} mr="s" />
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
                lang="html"
                tags="angular"
                allowCopy={true}
                code={`
                  <goa-filter-chip
                    *ngFor="let chip of chips"
                    [content]="chip"
                    (_click)="deleteChip(chip)"
                    mr="s">
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
                `}
              />

              <CodeSnippet
                lang="html"
                tags="react"
                allowCopy={true}
                code={`
                  {chips.map(chip => (
                    <GoAFilterChip
                      key={chip}
                      content={chip}
                      onClick={() => deleteChip(chip)}
                      mr="s"
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
                  onClick={() => removeFilter(filter)}
                  mr="s"
                  mb="s"
                  mt="s"
                />
              ))}

              <GoAButtonGroup alignment="center" mt="l">
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
                lang="html"
                tags="angular"
                allowCopy={true}
                code={`
                      <div>
                        <goa-filter-chip
                          *ngFor="let filter of activeFilters"
                          [content]="filter"
                          (_click)="removeFilter(filter)"
                          mr="s">
                        </goa-filter-chip>
                      </div>
                      <goa-button-group alignment="center" mt="l">
                        <goa-button (click)="addFilter()">Add Random Filter</goa-button>
                      </goa-button-group>
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

                  const addFilter = () => {
                    const randomFilter = 'Filter ' + Math.floor(Math.random() * 100);
                    if (!activeFilters.includes(randomFilter)) {
                      setActiveFilters(prevFilters => [...prevFilters, randomFilter]);
                    }
                  };
                `}
              />

              <CodeSnippet
                lang="html"
                tags="react"
                allowCopy={true}
                code={`
                  <div>
                    {activeFilters.map((filter) => (
                      <GoAFilterChip
                        key={filter}
                        content={filter}
                        onClick={() => removeFilter(filter)}
                        mr="s"
                        mb="s"
                        mt="s"
                      />
                    ))}
                  </div>
                  <GoAButtonGroup alignment="center" mt="l">
                    <GoAButton onClick={addFilter}>Add Random Filter</GoAButton>
                  </GoAButtonGroup>
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
                <GoAInput
                  name="chipInput"
                  placeholder="Type and press Enter"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleInputKeyDown}
                  width="30ch"
                  mr="s"
                />
                {typedChips.map((chip, index) => (
                  <GoAFilterChip
                    key={index}
                    content={chip}
                    onClick={() => removeTypedChip(chip)}
                    mr="s"
                    mt="s"
                    mb="s"
                  />
                ))}
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
                  lang="html"
                  tags="angular"
                  allowCopy={true}
                  code={`
                      <goa-input
                          id="chipInput"
                          type="text"
                          [value]="inputValue"
                          (_change)="onInput($event)"
                          (keydown)="handleBackspace($event)"
                          (keydown.enter)="addChip()"
                          placeholder="Type and press Enter"
                          mr="s">
                      </goa-input>
                      <goa-filter-chip
                          *ngFor="let chip of typedChips"
                          [content]="chip"
                          (_click)="removeTypedChip(chip)"
                          mr="s"
                          mt="s"
                          mb="s">
                      </goa-filter-chip>
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
                `}
                />

                <CodeSnippet
                  lang="html"
                  tags="react"
                  allowCopy={true}
                  code={`
                        <GoAInput
                          name="chipInput"
                          placeholder="Type and press Enter"
                          value={inputValue}
                          onChange={handleInputChange}
                          onKeyPress={handleInputKeyDown}
                          width="30ch"
                          mr="s"
                        />    
                        {typedChips.map((chip, index) => (
                          <GoAFilterChip
                            key={index}
                            content={chip}
                            onClick={() => removeTypedChip(chip)}
                            mr="s"
                            mt="s"
                            mb="s"/>
                        ))}
                `}
                />
              </>
            )}

            <h3 id="component-filters-applied-table">Show filters applied to a view of a table</h3>
            <Sandbox fullWidth skipRender>
              <GoABlock alignment="center">
                <h3 style={{ marginRight: "auto" }}>Records</h3>
                <GoAButton type="secondary" leadingIcon="filter">
                  Filter
                </GoAButton>
              </GoABlock>
              <GoABlock>
                <p>Filter:</p>
                {tableChips.map(chip => (
                  <GoAFilterChip key={chip} content={chip} onClick={() => deleteTableChip(chip)} mr="3xs" />
                ))}
                <GoAButton type="tertiary">
                  Clear
                </GoAButton>
              </GoABlock>
              <GoATable width="100%">
                <thead>
                  <tr>
                    <th>
                      Status
                    </th>
                    <th>
                      Text
                    </th>
                    <th className="goa-table-number-header">
                      Number
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.name}>
                      <td><GoABadge type={user.badgeType as GoABadgeType} content={user.status}></GoABadge></td>
                      <td>{user.text}</td>
                      <td className="goa-table-number-column">{user.number}</td>
                    </tr>
                  ))}
                </tbody>
              </GoATable>

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                  chips: string[] = ["Filter 1: Item", "Filter 2: Item", "Filter 3: Item"];

                  deleteTableChip(chip: string): void {
                    this.chips = this.chips.filter((c) => c !== chip);
                  }

                  userValues = [
                    {
                      type: "success",
                      content: "Completed",
                      name:"1",
                      text: "Lorem ipsum dolor sit amet consectetur.",
                      number: 1234567890,
                    },
                    {
                      type: "success",
                      content: "Completed",
                      name:"2",
                      text: "Lorem ipsum dolor sit amet consectetur.",
                      number: 1234567890,
                    },
                    {
                      type: "success",
                      content: "Completed",
                      name:"3",
                      text: "Lorem ipsum dolor sit amet consectetur.",
                      number: 1234567890,
                    },
                    {
                      type: "success",
                      content: "Completed",
                      name:"4",
                      text: "Lorem ipsum dolor sit amet consectetur.",
                      number: 1234567890,
                    },
                    {
                      type: "success",
                      content: "Completed",
                      name:"5",
                      text: "Lorem ipsum dolor sit amet consectetur.",
                      number: 1234567890,
                    },
                    {
                      type: "success",
                      content: "Completed",
                      name:"6",
                      text: "Lorem ipsum dolor sit amet consectetur.",
                      number: 1234567890,
                    },
                  ]
                `}
              />

              
              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                   <goa-block alignment="center">
                      <h3>Records</h3>
                      <goa-button type="secondary" leadingicon="filter">
                        Filter
                      </goa-button>
                    </goa-block>
                    <goa-block>
                      <p>Filter:</p>
                      <goa-filter-chip
                        *ngFor="let chip of tableChips"
                        [content]="chip"
                        (_click)="deleteTableChip(chip)"
                        mr="3xs">
                      </goa-filter-chip>
                      <goa-button type="tertiary">
                        Clear
                      </goa-button>
                    </goa-block>
                    <goa-table width="100%">
                      <thead>
                        <tr>
                          <th>
                            Status
                          </th>
                          <th>
                            Text
                          </th>
                          <th class="goa-table-number-header">
                            Number
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr *ngFor="let user of userValues">
                          <td><goa-badge [type]="user.type" [content]="user.content" /></td>
                          <td>{user.text}</td>
                          <td class="goa-table-number-column">{user.number}</td>
                        </tr>
                      </tbody>
                    </goa-table>
                  }
                `}
              />

              <CodeSnippet
                  lang="html"
                  tags="react"
                  allowCopy={true}
                  code={`
                  const [tableChips, setTableChips] = useState(["Filter 1: Item", "Filter 2: Item", "Filter 3: Item"]);

                  const deleteTableChip = (chip: string) => {
                    setChips((prevChips) => prevChips.filter((c) => c !== chip));
                  };

                  const userValues = [
                    {
                      badgeType: "success",
                      status: "Completed",
                      name:"1",
                      text: "Lorem ipsum dolor sit amet consectetur.",
                      number: 1234567890,
                    },
                    {
                      badgeType: "success",
                      status: "Completed",
                      name:"2",
                      text: "Lorem ipsum dolor sit amet consectetur.",
                      number: 1234567890,
                    },
                    {
                      badgeType: "success",
                      status: "Completed",
                      name:"3",
                      text: "Lorem ipsum dolor sit amet consectetur.",
                      number: 1234567890,
                    },
                    {
                      badgeType: "success",
                      status: "Completed",
                      name:"4",
                      text: "Lorem ipsum dolor sit amet consectetur.",
                      number: 1234567890,
                    },
                    {
                      badgeType: "success",
                      status: "Completed",
                      name:"5",
                      text: "Lorem ipsum dolor sit amet consectetur.",
                      number: 1234567890,
                    },
                    {
                      badgeType: "success",
                      status: "Completed",
                      name:"6",
                      text: "Lorem ipsum dolor sit amet consectetur.",
                      number: 1234567890,
                    },
                  ]
                `}
              />

              <CodeSnippet
                  lang="html"
                  tags="react"
                  allowCopy={true}
                  code={`
                    <GoABlock alignment="center">
                      <h3>Records</h3>
                      <GoAButton type="secondary" leadingIcon="filter">
                        Filter
                      </GoAButton>
                    </GoABlock>
                    <GoABlock>
                      <p>Filter:</p>
                      {tableChips.map(chip => (
                        <GoAFilterChip key={chip} content={chip} onClick={() => deleteTableChip(chip)} mr="3xs" />
                      ))}
                      <GoAButton type="tertiary">
                        Clear
                      </GoAButton>
                    </GoABlock>
                    <GoATable width="100%">
                      <thead>
                        <tr>
                          <th>
                            Status
                          </th>
                          <th>
                            Text
                          </th>
                          <th className="goa-table-number-header">
                            Number
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {userValues.map(user => (
                          <tr key={user.name}>
                            <td><GoABadge type={user.badgeType as GoABadgeType} content={user.status}></GoABadge></td>
                            <td>{user.text}</td>
                            <td className="goa-table-number-column">{user.number}</td>
                          </tr>
                        ))}
                      </tbody>
                    </GoATable>
                `}
              />
            </Sandbox>
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
