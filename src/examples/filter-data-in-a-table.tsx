import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  GoabBadge,
  GoabBlock,
  GoabButton,
  GoabContainer,
  GoabFilterChip,
  GoabFormItem,
  GoabInput,
  GoabTable,
  GoabText,
  GoabPopover,
  GoabRadioGroup,
  GoabRadioItem
} from "@abgov/react-components";
import type {
  GoabBadgeType,
  GoabInputOnChangeDetail,
  GoabInputOnKeyPressDetail,
} from "@abgov/ui-components-common";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabRadioGroupOnChangeDetail } from "@abgov/ui-components-common";

export const FilterDataInATable = () => {
  const { version } = useContext(LanguageVersionContext);

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [typedChips, setTypedChips] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const errorEmpty = "Empty filter";
  const errorDuplicate = "Enter a unique filter";
  const data = useMemo(
    () => [
      {
        status: { type: "information" as GoabBadgeType, text: "In progress" },
        name: "Ivan Schmidt",
        id: "7838576954",
      },
      {
        status: { type: "success" as GoabBadgeType, text: "Completed" },
        name: "Luz Lakin",
        id: "8576953364",
      },
      {
        status: { type: "information" as GoabBadgeType, text: "In progress" },
        name: "Keith McGlynn",
        id: "9846041345",
      },
      {
        status: { type: "success" as GoabBadgeType, text: "Completed" },
        name: "Melody Frami",
        id: "7385256175",
      },
      {
        status: { type: "important" as GoabBadgeType, text: "Updated" },
        name: "Frederick Skiles",
        id: "5807570418",
      },
      {
        status: { type: "success" as GoabBadgeType, text: "Completed" },
        name: "Dana Pfannerstill",
        id: "5736306857",
      },
    ],
    []
  );
  const [dataFiltered, setDataFiltered] = useState(data);

  const target = (
      <GoabButton type="tertiary" leadingIcon="funnel" size="compact" aria-label="Filter table">
          Filter
      </GoabButton>
  );

  const handleInputChange = (detail: GoabInputOnChangeDetail) => {
    const newValue = detail.value.trim();
    setInputValue(newValue);
  };

  const handleInputKeyPress = (detail: GoabInputOnKeyPressDetail) => {
    if (detail.key === "Enter") {
      applyFilter();
    }
  };

  const applyFilter = () => {
    if (inputValue === "") {
      setInputError(errorEmpty);
      return;
    }
    if (typedChips.length > 0 && typedChips.includes(inputValue)) {
      setInputError(errorDuplicate);
      return;
    }
    setTypedChips([...typedChips, inputValue]);
    setTimeout(() => {
      setInputValue("");
    }, 0);
    setInputError("");
  };

  const removeTypedChip = (chip: string) => {
    setTypedChips(typedChips.filter(c => c !== chip));
    setInputError("");
  };

  const checkNested = useCallback((obj: object, chip: string): boolean => {
    return Object.values(obj).some(value =>
      typeof value === "object" && value !== null
        ? checkNested(value, chip)
        : typeof value === "string" && value.toLowerCase().includes(chip.toLowerCase())
    );
  }, []);

  function radioGroupOnChange(event: GoabRadioGroupOnChangeDetail) {
      setSelectedFilter(event.value);
  }

  const getFilteredData = useCallback(
    (typedChips: string[], selectedFilter: string | null) => {
      let filteredData = data;

      if (typedChips.length > 0) {
        filteredData = filteredData.filter((item: any) =>
          typedChips.every(chip => checkNested(item, chip))
        );
      }

      if (selectedFilter) {
        filteredData = filteredData.filter(
          (item: any) => item.status && item.status.text === selectedFilter
        );
      }

      return filteredData;
    },
    [checkNested, data]
  );


  useEffect(() => {
    setDataFiltered(getFilteredData(typedChips, selectedFilter));
  }, [getFilteredData, typedChips, selectedFilter]);

  return (
    // NOTE: Input onKeyPress functionality breaks when wrapped in Sandbox component
    // <Sandbox fullWidth skipRender>
    <>
      <GoabContainer width="full" mt="m" mb="none">
        <GoabFormItem id="filterChipInput" error={inputError}>
          <GoabBlock gap="xs" direction="row" alignment="center">
            <GoabInput
              name="filterChipInput"
              aria-labelledby="filterChipInput"
              value={inputValue}
              leadingIcon="search"
              onChange={handleInputChange}
              onKeyPress={handleInputKeyPress}
            />
            
            <GoabPopover target={target} minWidth="150px">
                <form>
                    <GoabFormItem label="Status">
                        <GoabRadioGroup name="item" onChange={radioGroupOnChange} value={selectedFilter ?? ""}>
                            <GoabRadioItem value="In progress" label="In progress" />
                            <GoabRadioItem value="Completed" label="Completed" />
                            <GoabRadioItem value="Updated" label="Updated" />
                        </GoabRadioGroup>
                    </GoabFormItem>
                </form>
            </GoabPopover>
          </GoabBlock>
        </GoabFormItem>

        {(typedChips.length > 0 || selectedFilter) && (
          <div>
            <GoabText tag="span" color="secondary" mb="xs" mr="xs" mt="l">
              Filter:
            </GoabText>
            {typedChips.map((typedChip, index) => (
              <GoabFilterChip
                key={index}
                content={typedChip}
                mb="xs"
                mr="xs"
                mt="l"
                onClick={() => removeTypedChip(typedChip)}
              />
            ))}
            {selectedFilter && (
              <GoabFilterChip
                content={selectedFilter}
                mb="xs"
                mr="xs"
                mt="l"
                onClick={() => {
                  setSelectedFilter(null);
                }}
              />
            )}
            {(typedChips.length > 0 || selectedFilter) && (
              <GoabButton type="tertiary" size="compact" mb="xs" onClick={() => {
                setTypedChips([]);
                setSelectedFilter(null);
              }}>
                Clear all
              </GoabButton>
            )}
          </div>
        )}

        <GoabTable width="100%" mt="s">
          <thead>
            <tr>
              <th>Status</th>
              <th>Name</th>
              <th className="goa-table-number-header">ID Number</th>
            </tr>
          </thead>
          <tbody>
            {dataFiltered.map(item => (
              <tr key={item.id}>
                <td>
                  <GoabBadge type={item.status.type} content={item.status.text} />
                </td>
                <td>{item.name}</td>
                <td className="goa-table-number-column">{item.id}</td>
              </tr>
            ))}
          </tbody>
        </GoabTable>

        {dataFiltered.length === 0 && data.length > 0 && (
          <GoabBlock mt="l" mb="l">
            No results found
          </GoabBlock>
        )}
      </GoabContainer>

      {version === "old" && (
        <>
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
              export class TablePopoverComponent {
                typedChips: string[] = [];

                inputValue = '';
                inputError = '';
                readonly errorEmpty = 'Empty filter';
                readonly errorDuplicate = 'Enter a unique filter';

                // Radio filter state
                selectedFilter: string | null = null;

                // Table data
                popoverValues: PopoverValue[] = [
                  {
                    status: { type: "information", text: "In progress" },
                    name: "Ivan Schmidt",
                    id: "7838576954",
                  },
                  {
                    status: { type: "success", text: "Completed" },
                    name: "Luz Lakin",
                    id: "8576953364",
                  },
                  {
                    status: { type: "information", text: "In progress" },
                    name: "Keith McGlynn",
                    id: "9846041345",
                  },
                  {
                    status: { type: "success", text: "Completed" },
                    name: "Melody Frami",
                    id: "7385256175",
                  },
                  {
                    status: { type: "important", text: "Updated" },
                    name: "Frederick Skiles",
                    id: "5807570418",
                  },
                  {
                    status: { type: "success", text: "Completed" },
                    name: "Dana Pfannerstill",
                    id: "5736306857",
                  },
                ];

                get filteredData(): PopoverValue[] {
                  let filtered = this.popoverValues;

                  // Apply radio filter
                  if (this.selectedFilter) {
                    filtered = filtered.filter(item => item.status === this.selectedFilter);
                  }

                  // Apply chip filters (all chips must match)
                  if (this.typedChips.length > 0) {
                    filtered = filtered.filter(item =>
                      this.typedChips.every(chip =>
                        Object.values(item).some(val =>
                          typeof val === 'string' && val.toLowerCase().includes(chip.toLowerCase())
                        )
                      )
                    );
                  }

                  return filtered;
                }

                handleInputChange(event: any): void {
                  this.inputValue = event.target.value.trim();
                }

                handleInputKeyPress(event: KeyboardEvent): void {
                  if (event.key === 'Enter') {
                    this.applyFilter();
                  }
                }

                applyFilter() {
                  if (this.inputValue === '') {
                    this.inputError = this.errorEmpty;
                    return;
                  }
                  if (this.typedChips.includes(this.inputValue)) {
                    this.inputError = this.errorDuplicate;
                    return;
                  }
                  this.typedChips = [...this.typedChips, this.inputValue];
                  this.inputValue = '';
                  this.inputError = '';
                }

                removeTypedChip(chip: string) {
                  this.typedChips = this.typedChips.filter(c => c !== chip);
                  this.inputError = '';
                }

                removeAllTypedChips() {
                  this.typedChips = [];
                  this.inputError = '';
                }

                radioGroupOnChange(value: string) {
                  this.selectedFilter = value;
                }

                clearRadioFilter() {
                  this.selectedFilter = null;
                }

                checkNested(obj: object, chip: string): boolean {
                  return Object.values(obj).some((value) =>
                    typeof value === "object" && value !== null
                      ? this.checkNested(value, chip)
                      : typeof value === "string" && value.toLowerCase().includes(chip.toLowerCase()),
                  );
                }
              }
						`}
          />
          <CodeSnippet
            lang="html"
            tags="angular"
            allowCopy={true}
            code={`
              <goa-form-item id="filterChipInput" [error]="inputError" mb="m">
                <goa-block gap="xs" direction="row" alignment="start">
                  <input
                    name="filterChipInput"
                    aria-labelledby="filterChipInput"
                    [value]="inputValue"
                    (input)="handleInputChange($event)"
                    (keydown)="handleInputKeyPress($event)"
                    placeholder="Type to filter"
                  />

                  <goa-popover>
                    <form>
                      <goa-form-item label="Status">
                        <goa-radio-group
                          name="item"
                          [value]="selectedFilter"
                          (_change)="radioGroupOnChange($event.target.value)">
                          <goa-radio-item value="In progress" label="In progress"></goa-radio-item>
                          <goa-radio-item value="Completed" label="Completed"></goa-radio-item>
                          <goa-radio-item value="Updated" label="Updated"></goa-radio-item>
                        </goa-radio-group>
                      </goa-form-item>
                      <goa-button type="tertiary" mt="m" (_click)="clearRadioFilter()">
                        Remove filter
                      </goa-button>
                    </form>
                    <div slot="target">
                      <goa-button
                        type="tertiary"
                        leadingIcon="funnel"
                        size="compact"
                        aria-label="Filter table">
                        Filter
                      </goa-button>
                    </div>
                  </goa-popover>
                  <goa-button type="secondary" (_click)="applyFilter()" leadingIcon="filter">
                    Filter
                  </goa-button>
                </goa-block>
              </goa-form-item>

              <ng-container *ngIf="typedChips.length > 0">
                <goa-text tag="span" color="secondary" mb="xs" mr="xs">
                  Filter:
                </goa-text>
                <goa-filter-chip
                  *ngFor="let typedChip of typedChips"
                  [content]="typedChip"
                  mb="xs"
                  mr="xs"
                  (_click)="removeTypedChip(typedChip)">
                </goa-filter-chip>
                <goa-button type="tertiary" size="compact" mb="xs" (_click)="removeAllTypedChips()">
                  Clear all
                </goa-button>
              </ng-container>

              <goa-table width="100%" mb="xl">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Text</th>
                    <th class="goa-table-number-header">Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let u of filteredData">
                    <td>
                      <goa-badge [type]="u.type" [content]="u.status"></goa-badge>
                    </td>
                    <td>Lorem ipsum</td>
                    <td class="goa-table-number-column">{{ u.key }}</td>
                  </tr>
                </tbody>
              </goa-table>

              <goa-block mt="l" mb="l" *ngIf="dataFiltered.length === 0 && data.length > 0">
                No results found
              </goa-block>
            `}
          />
          <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
              const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
              const [typedChips, setTypedChips] = useState<string[]>([]);
              const [inputValue, setInputValue] = useState("");
              const [inputError, setInputError] = useState("");
              const errorEmpty = "Empty filter";
              const errorDuplicate = "Enter a unique filter";
              const data = useMemo(
                () => [
                  {
                    status: { type: "information" as GoABadgeType, text: "In progress" },
                    name: "Ivan Schmidt",
                    id: "7838576954",
                  },
                  {
                    status: { type: "success" as GoABadgeType, text: "Completed" },
                    name: "Luz Lakin",
                    id: "8576953364",
                  },
                  {
                    status: { type: "information" as GoABadgeType, text: "In progress" },
                    name: "Keith McGlynn",
                    id: "9846041345",
                  },
                  {
                    status: { type: "success" as GoABadgeType, text: "Completed" },
                    name: "Melody Frami",
                    id: "7385256175",
                  },
                  {
                    status: { type: "important" as GoABadgeType, text: "Updated" },
                    name: "Frederick Skiles",
                    id: "5807570418",
                  },
                  {
                    status: { type: "success" as GoABadgeType, text: "Completed" },
                    name: "Dana Pfannerstill",
                    id: "5736306857",
                  },
                ],
                [],
              );
              const [dataFiltered, setDataFiltered] = useState(data);

              const target = (
                  <GoAButton type="tertiary" leadingIcon="funnel" size="compact" aria-label="Filter table">
                      Filter
                  </GoAButton>
              );

              const handleInputChange = (_name: string, value: string) => {
                const newValue = value.trim();
                setInputValue(newValue);
              };

              const handleInputKeyPress = (_name: string, _value: string, key: string) => {
                if (key === "Enter") {
                  applyFilter();
                }
              };

              const applyFilter = () => {
                if (inputValue === "") {
                  setInputError(errorEmpty);
                  return;
                }
                if (typedChips.length > 0 && typedChips.includes(inputValue)) {
                  setInputError(errorDuplicate);
                  return;
                }
                setTypedChips([...typedChips, inputValue]);
                setTimeout(() => {
                  setInputValue("");
                }, 0);
                setInputError("");
              };

              const removeTypedChip = (chip: string) => {
                setTypedChips(typedChips.filter((c) => c !== chip));
                setInputError("");
              };

              const checkNested = useCallback((obj: object, chip: string): boolean => {
                return Object.values(obj).some((value) =>
                  typeof value === "object" && value !== null
                    ? checkNested(value, chip)
                    : typeof value === "string" && value.toLowerCase().includes(chip.toLowerCase()),
                );
              }, []);

              const handleInputChange = (_name: string, value: string) => {
                setSelectedFilter(value);
              };

              const getFilteredData = useCallback(
                (typedChips: string[], selectedFilter: string | null) => {
                  let filteredData = data;

                  if (typedChips.length > 0) {
                    filteredData = filteredData.filter((item: any) =>
                      typedChips.every(chip => checkNested(item, chip))
                    );
                  }

                  if (selectedFilter) {
                    filteredData = filteredData.filter(
                      (item: any) => item.status && item.status.text === selectedFilter
                    );
                  }

                  return filteredData;
                },
                [checkNested, data]
              );

              useEffect(() => {
                setDataFiltered(getFilteredData(typedChips, selectedFilter));
              }, [getFilteredData, typedChips, selectedFilter]);
            `}
          />

          <CodeSnippet
            lang="html"
            tags="react"
            allowCopy={true}
            code={`
              <GoAContainer width="full" mt="m" mb="none">
                <GoAFormItem id="filterChipInput" error={inputError}>
                  <GoABlock gap="xs" direction="row" alignment="center">
                    <GoAInput
                      name="filterChipInput"
                      aria-labelledby="filterChipInput"
                      value={inputValue}
                      leadingIcon="search"
                      onChange={handleInputChange}
                      onKeyPress={handleInputKeyPress}
                    />
                    
                    <GoAPopover target={target} minWidth="150px">
                        <form>
                            <GoAFormItem label="Status">
                                <GoARadioGroup name="item" onChange={radioGroupOnChange} value={selectedFilter ?? ""}>
                                    <GoARadioItem value="In progress" label="In progress" />
                                    <GoARadioItem value="Completed" label="Completed" />
                                    <GoARadioItem value="Updated" label="Updated" />
                                </GoARadioGroup>
                            </GoAFormItem>
                        </form>
                    </GoAPopover>
                  </GoABlock>
                </GoAFormItem>

                {(typedChips.length > 0 || selectedFilter) && (
                  <div>
                    <GoAText tag="span" color="secondary" mb="xs" mr="xs" mt="l">
                      Filter:
                    </GoAText>
                    {typedChips.map((typedChip, index) => (
                      <GoAFilterChip
                        key={index}
                        content={typedChip}
                        mb="xs"
                        mr="xs"
                        mt="l"
                        onClick={() => removeTypedChip(typedChip)}
                      />
                    ))}
                    {selectedFilter && (
                      <GoAFilterChip
                        content={selectedFilter}
                        mb="xs"
                        mr="xs"
                        mt="l"
                        onClick={() => {
                          setSelectedFilter(null);
                        }}
                      />
                    )}
                    {(typedChips.length > 0 || selectedFilter) && (
                      <GoAButton type="tertiary" size="compact" mb="xs" onClick={() => {
                        setTypedChips([]);
                        setSelectedFilter(null);
                      }}>
                        Clear all
                      </GoAButton>
                    )}
                  </div>
                )}

                <GoATable width="100%" mt="s">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Name</th>
                      <th className="goa-table-number-header">ID Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataFiltered.map(item => (
                      <tr key={item.id}>
                        <td>
                          <GoABadge type={item.status.type} content={item.status.text} />
                        </td>
                        <td>{item.name}</td>
                        <td className="goa-table-number-column">{item.id}</td>
                      </tr>
                    ))}
                  </tbody>
                </GoATable>

                {dataFiltered.length === 0 && data.length > 0 && (
                  <GoABlock mt="l" mb="l">
                    No results found
                  </GoABlock>
                )}
              </GoAContainer>
            `}
          />
        </>
      )}

      {version === "new" && (
        <>
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
              
              export class TablePopoverComponent {
                typedChips: string[] = [];

                inputValue = '';
                inputError = '';
                readonly errorEmpty = 'Empty filter';
                readonly errorDuplicate = 'Enter a unique filter';

                // Radio filter state
                selectedFilter: string | null = null;

                // Table data
                popoverValues: PopoverValue[] = [
                  {
                    status: { type: "information" as GoabBadgeType, text: "In progress" },
                    name: "Ivan Schmidt",
                    id: "7838576954",
                  },
                  {
                    status: { type: "success" as GoabBadgeType, text: "Completed" },
                    name: "Luz Lakin",
                    id: "8576953364",
                  },
                  {
                    status: { type: "information" as GoabBadgeType, text: "In progress" },
                    name: "Keith McGlynn",
                    id: "9846041345",
                  },
                  {
                    status: { type: "success" as GoabBadgeType, text: "Completed" },
                    name: "Melody Frami",
                    id: "7385256175",
                  },
                  {
                    status: { type: "important" as GoabBadgeType, text: "Updated" },
                    name: "Frederick Skiles",
                    id: "5807570418",
                  },
                  {
                    status: { type: "success" as GoabBadgeType, text: "Completed" },
                    name: "Dana Pfannerstill",
                    id: "5736306857",
                  },
                ];

                get filteredData(): PopoverValue[] {
                  let filtered = this.popoverValues;

                  // Apply radio filter
                  if (this.selectedFilter) {
                    filtered = filtered.filter(item => item.status === this.selectedFilter);
                  }

                  // Apply chip filters (all chips must match)
                  if (this.typedChips.length > 0) {
                    filtered = filtered.filter(item =>
                      this.typedChips.every(chip =>
                        Object.values(item).some(val =>
                          typeof val === 'string' && val.toLowerCase().includes(chip.toLowerCase())
                        )
                      )
                    );
                  }

                  return filtered;
                }

                handleInputChange(detail: GoabInputOnChangeDetail): void {
                  const newValue = detail.value.trim();
                  this.inputValue = newValue;
                }

                handleInputKeyPress(detail: GoabInputOnKeyPressDetail): void {
                  if (detail.key === "Enter") {
                    this.applyFilter();
                  }
                }

                applyFilter() {
                  if (this.inputValue === '') {
                    this.inputError = this.errorEmpty;
                    return;
                  }
                  if (this.typedChips.includes(this.inputValue)) {
                    this.inputError = this.errorDuplicate;
                    return;
                  }
                  this.typedChips = [...this.typedChips, this.inputValue];
                  this.inputValue = '';
                  this.inputError = '';
                }

                removeTypedChip(chip: string) {
                  this.typedChips = this.typedChips.filter(c => c !== chip);
                  this.inputError = '';
                }

                removeAllTypedChips() {
                  this.typedChips = [];
                  this.inputError = '';
                }

                radioGroupOnChange(event: GoabRadioGroupOnChangeDetail) {
                  this.selectedFilter = event.value;
                }

                clearRadioFilter() {
                  this.selectedFilter = null;
                }

                checkNested(obj: object, chip: string): boolean {
                  return Object.values(obj).some((value) =>
                    typeof value === "object" && value !== null
                      ? this.checkNested(value, chip)
                      : typeof value === "string" && value.toLowerCase().includes(chip.toLowerCase()),
                  );
                }
              }
						`}
          />
          <CodeSnippet
            lang="html"
            tags="angular"
            allowCopy={true}
            code={`
              <goab-form-item id="filterChipInput" [error]="inputError" mb="m">
                <goab-block gap="xs" direction="row" alignment="start">
                  <input
                    name="filterChipInput"
                    aria-labelledby="filterChipInput"
                    [value]="inputValue"
                    (input)="handleInputChange($event)"
                    (keydown)="handleInputKeyPress($event)"
                    placeholder="Type to filter"
                  />

                  <goab-popover>
                    <form>
                      <goab-form-item label="Status">
                        <goab-radio-group
                          name="item"
                          [value]="selectedFilter"
                          (onChange)="radioGroupOnChange($event.target.value)">
                          <goab-radio-item value="In progress" label="In progress"></goab-radio-item>
                          <goab-radio-item value="Completed" label="Completed"></goab-radio-item>
                          <goab-radio-item value="Updated" label="Updated"></goab-radio-item>
                        </goab-radio-group>
                      </goab-form-item>
                    </form>
                    <div slot="target">
                      <goab-button
                        type="tertiary"
                        leadingIcon="funnel"
                        size="compact"
                        aria-label="Filter table">
                        Filter
                      </goab-button>
                    </div>
                  </goab-popover>
                  <goab-button type="secondary" (click)="applyFilter()" leadingIcon="filter">
                    Filter
                  </goab-button>
                </goab-block>
              </goab-form-item>

              <ng-container *ngIf="typedChips.length > 0">
                <goab-text tag="span" color="secondary" mb="xs" mr="xs">
                  Filter:
                </goab-text>
                <goab-filter-chip
                  *ngFor="let typedChip of typedChips"
                  [content]="typedChip"
                  mb="xs"
                  mr="xs"
                  (click)="removeTypedChip(typedChip)">
                </goab-filter-chip>
                <goab-button type="tertiary" size="compact" mb="xs" (click)="removeAllTypedChips()">
                  Clear all
                </goab-button>
              </ng-container>

              <goab-table width="100%" mb="xl">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Text</th>
                    <th class="goa-table-number-header">Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let u of filteredData">
                    <td>
                      <goab-badge [type]="u.type" [content]="u.status"></goab-badge>
                    </td>
                    <td>Lorem ipsum</td>
                    <td class="goa-table-number-column">{{ u.key }}</td>
                  </tr>
                </tbody>
              </goab-table>

              <goab-block mt="l" mb="l" *ngIf="dataFiltered.length === 0 && data.length > 0">
                No results found
              </goab-block>
            `}
          />
          <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
              const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
              const [typedChips, setTypedChips] = useState<string[]>([]);
              const [inputValue, setInputValue] = useState("");
              const [inputError, setInputError] = useState("");
              const errorEmpty = "Empty filter";
              const errorDuplicate = "Enter a unique filter";
              const data = useMemo(
                () => [
                  {
                    status: { type: "information" as GoabBadgeType, text: "In progress" },
                    name: "Ivan Schmidt",
                    id: "7838576954",
                  },
                  {
                    status: { type: "success" as GoabBadgeType, text: "Completed" },
                    name: "Luz Lakin",
                    id: "8576953364",
                  },
                  {
                    status: { type: "information" as GoabBadgeType, text: "In progress" },
                    name: "Keith McGlynn",
                    id: "9846041345",
                  },
                  {
                    status: { type: "success" as GoabBadgeType, text: "Completed" },
                    name: "Melody Frami",
                    id: "7385256175",
                  },
                  {
                    status: { type: "important" as GoabBadgeType, text: "Updated" },
                    name: "Frederick Skiles",
                    id: "5807570418",
                  },
                  {
                    status: { type: "success" as GoabBadgeType, text: "Completed" },
                    name: "Dana Pfannerstill",
                    id: "5736306857",
                  },
                ],
                []
              );
              const [dataFiltered, setDataFiltered] = useState(data);

              const target = (
                  <GoabButton type="tertiary" leadingIcon="funnel" size="compact" aria-label="Filter table">
                      Filter
                  </GoabButton>
              );

              const handleInputChange = (detail: GoabInputOnChangeDetail) => {
                const newValue = detail.value.trim();
                setInputValue(newValue);
              };

              const handleInputKeyPress = (detail: GoabInputOnKeyPressDetail) => {
                if (detail.key === "Enter") {
                  applyFilter();
                }
              };

              const applyFilter = () => {
                if (inputValue === "") {
                  setInputError(errorEmpty);
                  return;
                }
                if (typedChips.length > 0 && typedChips.includes(inputValue)) {
                  setInputError(errorDuplicate);
                  return;
                }
                setTypedChips([...typedChips, inputValue]);
                setTimeout(() => {
                  setInputValue("");
                }, 0);
                setInputError("");
              };

              const removeTypedChip = (chip: string) => {
                setTypedChips(typedChips.filter(c => c !== chip));
                setInputError("");
              };

              const checkNested = useCallback((obj: object, chip: string): boolean => {
                return Object.values(obj).some(value =>
                  typeof value === "object" && value !== null
                    ? checkNested(value, chip)
                    : typeof value === "string" && value.toLowerCase().includes(chip.toLowerCase())
                );
              }, []);

              function radioGroupOnChange(event: GoabRadioGroupOnChangeDetail) {
                  setSelectedFilter(event.value);
              }

              const getFilteredData = useCallback(
                (typedChips: string[], selectedFilter: string | null) => {
                  let filteredData = data;

                  if (typedChips.length > 0) {
                    filteredData = filteredData.filter((item: any) =>
                      typedChips.every(chip => checkNested(item, chip))
                    );
                  }

                  if (selectedFilter) {
                    filteredData = filteredData.filter(
                      (item: any) => item.status && item.status.text === selectedFilter
                    );
                  }

                  return filteredData;
                },
                [checkNested, data]
              );


              useEffect(() => {
                setDataFiltered(getFilteredData(typedChips, selectedFilter));
              }, [getFilteredData, typedChips, selectedFilter]);
            `}
          />

          <CodeSnippet
            lang="html"
            tags="react"
            allowCopy={true}
            code={`
              <GoabContainer width="full" mt="m" mb="none">
                <GoabFormItem id="filterChipInput" error={inputError}>
                  <GoabBlock gap="xs" direction="row" alignment="center">
                    <GoabInput
                      name="filterChipInput"
                      aria-labelledby="filterChipInput"
                      value={inputValue}
                      leadingIcon="search"
                      onChange={handleInputChange}
                      onKeyPress={handleInputKeyPress}
                    />
                    
                    <GoabPopover target={target} minWidth="150px">
                        <form>
                            <GoabFormItem label="Status">
                                <GoabRadioGroup name="item" onChange={radioGroupOnChange} value={selectedFilter ?? ""}>
                                    <GoabRadioItem value="In progress" label="In progress" />
                                    <GoabRadioItem value="Completed" label="Completed" />
                                    <GoabRadioItem value="Updated" label="Updated" />
                                </GoabRadioGroup>
                            </GoabFormItem>
                        </form>
                    </GoabPopover>
                  </GoabBlock>
                </GoabFormItem>

                {(typedChips.length > 0 || selectedFilter) && (
                  <div>
                    <GoabText tag="span" color="secondary" mb="xs" mr="xs" mt="l">
                      Filter:
                    </GoabText>
                    {typedChips.map((typedChip, index) => (
                      <GoabFilterChip
                        key={index}
                        content={typedChip}
                        mb="xs"
                        mr="xs"
                        mt="l"
                        onClick={() => removeTypedChip(typedChip)}
                      />
                    ))}
                    {selectedFilter && (
                      <GoabFilterChip
                        content={selectedFilter}
                        mb="xs"
                        mr="xs"
                        mt="l"
                        onClick={() => {
                          setSelectedFilter(null);
                        }}
                      />
                    )}
                    {(typedChips.length > 0 || selectedFilter) && (
                      <GoabButton type="tertiary" size="compact" mb="xs" onClick={() => {
                        setTypedChips([]);
                        setSelectedFilter(null);
                      }}>
                        Clear all
                      </GoabButton>
                    )}
                  </div>
                )}

                <GoabTable width="100%" mt="s">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Name</th>
                      <th className="goa-table-number-header">ID Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataFiltered.map(item => (
                      <tr key={item.id}>
                        <td>
                          <GoabBadge type={item.status.type} content={item.status.text} />
                        </td>
                        <td>{item.name}</td>
                        <td className="goa-table-number-column">{item.id}</td>
                      </tr>
                    ))}
                  </tbody>
                </GoabTable>

                {dataFiltered.length === 0 && data.length > 0 && (
                  <GoabBlock mt="l" mb="l">
                    No results found
                  </GoabBlock>
                )}
              </GoabContainer>
            `}
          />
        </>
      )}
    </>
    // </Sandbox>
  );
};

export default FilterDataInATable;