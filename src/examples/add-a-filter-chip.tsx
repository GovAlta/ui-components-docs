import { Sandbox } from "@components/sandbox";
import { GoabButton, GoabButtonGroup, GoabFilterChip } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const AddAFilterChip = () => {
  const {version} = useContext(LanguageVersionContext);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const addFilter = () => {
    const randomFilter = `Filter ${Math.floor(Math.random() * 100)}`;
    if (!activeFilters.includes(randomFilter)) {
      setActiveFilters(prevFilters => [...prevFilters, randomFilter]);
    }
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(prevFilters => prevFilters.filter(f => f !== filter));
  };

  return (
    <Sandbox skipRender>
      {activeFilters.map(filter => (
        <GoabFilterChip
          key={filter}
          content={filter}
          onClick={() => removeFilter(filter)}
          mr="s"
          mb="s"
          mt="s"
        />
      ))}

      <GoabButtonGroup alignment="center" mt="l">
        <GoabButton onClick={addFilter}>Add Random Filter</GoabButton>
      </GoabButtonGroup>

      <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
               export class FilterChipInteractiveExampleComponent {
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
              }
      `}
      />

      {version === "old" && (
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
      )}
      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
                      <div>
                        <goab-filter-chip
                          *ngFor="let filter of activeFilters"
                          [content]="filter"
                          (onClick)="removeFilter(filter)"
                          mr="s">
                        </goab-filter-chip>
                      </div>
                      <goab-button-group alignment="center" mt="l">
                        <goab-button (onClick)="addFilter()">Add Random Filter</goab-button>
                      </goab-button-group>
                `}
        />
      )}

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

      {version === "old" && (
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
      )}
      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
                  <div>
                    {activeFilters.map((filter) => (
                      <GoabFilterChip
                        key={filter}
                        content={filter}
                        onClick={() => removeFilter(filter)}
                        mr="s"
                        mb="s"
                        mt="s"
                      />
                    ))}
                  </div>
                  <GoabButtonGroup alignment="center" mt="l">
                    <GoabButton onClick={addFilter}>Add Random Filter</GoabButton>
                  </GoabButtonGroup>
                `}
        />
      )}
    </Sandbox>
  )
}

export default AddAFilterChip;
