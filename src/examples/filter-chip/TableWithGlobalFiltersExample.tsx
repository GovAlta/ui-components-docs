import React, { useState, useEffect, useCallback, useContext } from "react";
import {
  GoABadge,
  GoABlock,
  GoAButton,
  GoAContainer,
  GoAFilterChip,
  GoAFormItem,
  GoAInput,
  GoATable,
} from "@abgov/react-components";
import { LanguageContext, Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const TableWithGlobalFiltersExample = () => {
  const language = useContext(LanguageContext);
  const [typedChips, setTypedChips] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [errorChips, setErrorChips] = useState<string[]>([]);
  const errorDuplicate = "Duplicate filter";
  const headers = ["Status", "Text", "Number", "Action"];
  const data = React.useMemo(
    () => [
      {
        status: "Info 1",
        text: "Lorem ipsum dolor sit amet",
        number: "9876543210",
        action: { text: "Lorem", hyperlink: "https://design.alberta.ca" },
      },
      {
        status: "Info 2",
        text: "Consectetur adipiscing elit",
        number: "1234509876",
        action: { text: "Ipsum", hyperlink: "https://design.alberta.ca" },
      },
      {
        status: "Info 3",
        text: "Sed do eiusmod tempor",
        number: "5647382910",
        action: { text: "Dolor", hyperlink: "https://design.alberta.ca" },
      },
      {
        status: "Info 4",
        text: "Incididunt ut labore et dolore",
        number: "1029384756",
        action: { text: "Sit", hyperlink: "https://design.alberta.ca" },
      },
    ],
    []
  );
  const [dataFiltered, setDataFiltered] = useState(data);

  const handleInputChange = (_name: string, value: string) => {
    const newValue = value.trim();
    setInputValue(newValue);
    if (newValue === "") {
      setInputError("");
    }
  };

  const handleInputKeyDown = (_name: string, _value: string, key: string) => {
    if (key === "Enter") {
      applyFilter();
    }
  };

  const applyFilter = () => {
    if (inputValue === "") {
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

  const getFilteredData = React.useCallback(
    (typedChips: string[]) => {
      setErrorChips([]);
      if (typedChips.length === 0) {
        return data;
      }
      const filteredData = data.filter(item => typedChips.every(chip => checkNested(item, chip)));

      typedChips.forEach(chip => {
        if (!data.some(item => checkNested(item, chip))) {
          setErrorChips(prev => [...prev, chip]);
        }
      });

      return filteredData;
    },
    [checkNested, data]
  );

  useEffect(() => {
    setDataFiltered(getFilteredData(typedChips));
  }, [getFilteredData, typedChips]);

  const highlightText = (text: string): string => {
    const ranges = typedChips
      .flatMap(chip => {
        const regex = new RegExp(chip, "gi");
        const matches = [];
        let match;
        while ((match = regex.exec(text)) !== null) {
          matches.push({ start: match.index, end: match.index + match[0].length });
        }
        return matches;
      })
      .sort((a, b) => a.start - b.start);

    const mergedRanges = ranges.reduce<{ start: number; end: number }[]>((acc, range) => {
      const last = acc[acc.length - 1];
      if (!last || last.end < range.start) {
        acc.push(range);
      } else {
        last.end = Math.max(last.end, range.end);
      }
      return acc;
    }, []);

    return (
      mergedRanges.reduce((acc, range, index) => {
        const prevEnd = index === 0 ? 0 : mergedRanges[index - 1].end;
        return (
          acc +
          text.slice(prevEnd, range.start) +
          "<mark>" +
          text.slice(range.start, range.end) +
          "</mark>"
        );
      }, "") + text.slice(mergedRanges.length ? mergedRanges[mergedRanges.length - 1].end : 0)
    );
  };

  return (
    <>
      <h3 id="component-table-with-global-filters-example">Table with Global Filters</h3>
      <GoAContainer width="full" mt="m" mb="none">
        <div style={{ textAlign: "right", justifyItems: "right", boxSizing: "border-box" }}>
          <GoAFormItem label="Filter Results" id="filterChipInput" error={inputError}>
            <GoABlock gap="xs" direction="row">
              <GoAInput
                name="filterChipInput"
                aria-labelledby="filterChipInput"
                placeholder="Type to filter results"
                value={inputValue}
                maxLength={100}
                onChange={handleInputChange}
                onKeyPress={handleInputKeyDown}
              />
              <GoAButton
                type="primary"
                onClick={applyFilter}
                disabled={inputValue === ""}
                leadingIcon="filter">
                Apply
              </GoAButton>
            </GoABlock>
          </GoAFormItem>

          <div>
            {typedChips.length > 0 &&
              typedChips.map((typedChip, index) => (
                <GoAFilterChip
                  key={index}
                  content={typedChip}
                  mt="s"
                  ml="s"
                  mb="2xs"
                  onClick={() => removeTypedChip(typedChip)}
                  error={errorChips.includes(typedChip)}
                />
              ))}
          </div>
        </div>

        <GoATable width="100%">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataFiltered.map((item, index) => (
              <tr key={index}>
                <td>
                  <GoABadge type="information" content={item.status} />
                </td>
                <td dangerouslySetInnerHTML={{ __html: highlightText(item.text) }} />
                <td
                  dangerouslySetInnerHTML={{
                    __html: highlightText(item.number),
                  }}
                />
                <td>
                  <a
                    href={item.action.hyperlink}
                    dangerouslySetInnerHTML={{
                      __html: highlightText(item.action.text),
                    }}></a>
                </td>
              </tr>
            ))}
            {dataFiltered.length === 0 && data.length > 0 && (
              <tr>
                <td colSpan={headers.length}>All results are being filtered out</td>
              </tr>
            )}
          </tbody>
        </GoATable>
      </GoAContainer>

      <Sandbox
        fullWidth
        skipRender
        note="Highlights matching text in table rows when filtering applied">
        <p></p>
      </Sandbox>

      {language === "angular" && (
        <>
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
							typedChips: string[] = [];
							inputValue = "";
							inputError = "";
							errorChips: string[] = [];
							readonly errorDuplicate = "Duplicate filter";
							readonly headers = ["Status", "Text", "Number", "Action"];
							data = [
								{
									status: "Info 1",
									text: "Lorem ipsum dolor sit amet",
									number: "9876543210",
									action: { text: "Lorem", hyperlink: "https://design.alberta.ca" },
								},
								{
									status: "Info 2",
									text: "Consectetur adipiscing elit",
									number: "1234509876",
									action: { text: "Ipsum", hyperlink: "https://design.alberta.ca" },
								},
								{
									status: "Info 3",
									text: "Sed do eiusmod tempor",
									number: "5647382910",
									action: { text: "Dolor", hyperlink: "https://design.alberta.ca" },
								},
								{
									status: "Info 4",
									text: "Incididunt ut labore et dolore",
									number: "1029384756",
									action: { text: "Sit", hyperlink: "https://design.alberta.ca" },
								},
							];
							dataFiltered = this.getFilteredData(this.typedChips);

							handleInputChange(event: Event) {
								const newValue = (event.target as HTMLInputElement).value.trim();
								this.inputValue = newValue;
								if (newValue === "") {
									this.inputError = "";
								}
							}

							handleInputKeyPress(event: KeyboardEvent): void {
								if (event.key === "Enter") {
									this.applyFilter();
								}
							}

							applyFilter() {
								if (this.inputValue === "") {
									return;
								}
								if (this.typedChips.includes(this.inputValue)) {
									this.inputError = this.errorDuplicate;
									return;
								}
								this.typedChips = [...this.typedChips, this.inputValue];
								this.inputValue = "";
								this.inputError = "";
								this.dataFiltered = this.getFilteredData(this.typedChips);
							}

							removeTypedChip(chip: string) {
								this.typedChips = this.typedChips.filter((c) => c !== chip);
								this.dataFiltered = this.getFilteredData(this.typedChips);
								this.inputError = "";
							}

							getFilteredData(typedChips: string[]) {
								this.errorChips = [];
								if (typedChips.length === 0) {
									return this.data;
								}
								const filteredData = this.data.filter((item) =>
									typedChips.every((chip) => this.checkNested(item, chip)),
								);

								typedChips.forEach((chip) => {
									if (!this.data.some((item) => this.checkNested(item, chip))) {
										this.errorChips = [...this.errorChips, chip];
									}
								});

								return filteredData;
							}

							checkNested(obj: object, chip: string): boolean {
								return Object.values(obj).some((value) =>
									typeof value === "object" && value !== null
										? this.checkNested(value, chip)
										: typeof value === "string" && value.toLowerCase().includes(chip.toLowerCase()),
								);
							}

							highlightText(text: string): string {
								const ranges = this.typedChips
									.flatMap((chip) => {
										const regex = new RegExp(chip, "gi");
										const matches = [];
										let match;
										while ((match = regex.exec(text)) !== null) {
											matches.push({ start: match.index, end: match.index + match[0].length });
										}
										return matches;
									})
									.sort((a, b) => a.start - b.start);

								const mergedRanges = ranges.reduce((acc: { start: number; end: number }[], range) => {
									const last = acc[acc.length - 1];
									if (!last || last.end < range.start) {
										acc.push(range);
									} else {
										last.end = Math.max(last.end, range.end);
									}
									return acc;
								}, []);

								return (
									mergedRanges.reduce((acc, range, index) => {
										const prevEnd = index === 0 ? 0 : mergedRanges[index - 1].end;
										return (
											acc +
											text.slice(prevEnd, range.start) +
											'<mark>' + text.slice(range.start, range.end) + '</mark>'
										);
									}, "") +
									text.slice(mergedRanges.length ? mergedRanges[mergedRanges.length - 1].end : 0)
								);
							}
						`}
          />
          <CodeSnippet
            lang="html"
            tags="angular"
            allowCopy={true}
            code={`
							<goa-container width="full" mt="m" mb="none">
								<div style="text-align: right; justify-items: right;">
									<goa-form-item
										label="Table with Global Filters"
										id="filterChipInput"
										[error]="inputError"
									>
										<goa-block gap="xs" direction="row">
											<goa-input
												name="filterChipInput"
												aria-labelledby="filterChipInput"
												placeholder="Type to filter results"
												[value]="inputValue"
												maxlength="100"
												leadingicon="filter"
												size="large"
												(_change)="handleInputChange($event)"
												(keypress)="handleInputKeyPress($event)"
											></goa-input>

											<goa-button
												type="primary"
												(click)="applyFilter()"
												[disabled]="inputValue === ''"
												leadingicon="filter">
												Apply
											</goa-button>
										</goa-block>
									</goa-form-item>

									<div>
										<ng-container *ngIf="typedChips.length > 0">
											<goa-filter-chip
												*ngFor="let typedChip of typedChips; let index = index"
												[content]="typedChip"
												(_click)="removeTypedChip(typedChip)"
												[error]="errorChips.includes(typedChip)"
												mt="s"
												ml="s"
											></goa-filter-chip>
										</ng-container>
									</div>
								</div>

								<goa-table width="100%">
									<thead>
										<tr>
											<th *ngFor="let header of headers">{{ header }}</th>
										</tr>
									</thead>
									<tbody>
										<tr *ngFor="let item of dataFiltered">
											<td>
												<goa-badge type="information" [content]="item.status"></goa-badge>
											</td>
											<td [innerHTML]="highlightText(item.text)"></td>
											<td [innerHTML]="highlightText(item.number)"></td>
											<td>
												<a
													[href]="item.action.hyperlink"
													[innerHTML]="highlightText(item.action.text)"
												></a>
											</td>
										</tr>
										<tr *ngIf="dataFiltered.length == 0 && data.length > 0">
											<td [attr.colspan]="headers.length">All results are being filtered out</td>
										</tr>
									</tbody>
								</goa-table>
							</goa-container>
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
							const [typedChips, setTypedChips] = useState<string[]>([]);
							const [inputValue, setInputValue] = useState("");
							const [inputError, setInputError] = useState("");
							const [errorChips, setErrorChips] = useState<string[]>([]);
							const errorDuplicate = "Duplicate filter";
							const headers = ["Status", "Text", "Number", "Action"];
							const data = React.useMemo(
								() => [
									{
										status: "Info 1",
										text: "Lorem ipsum dolor sit amet",
										number: "9876543210",
										action: { text: "Lorem", hyperlink: "https://design.alberta.ca" },
									},
									{
										status: "Info 2",
										text: "Consectetur adipiscing elit",
										number: "1234509876",
										action: { text: "Ipsum", hyperlink: "https://design.alberta.ca" },
									},
									{
										status: "Info 3",
										text: "Sed do eiusmod tempor",
										number: "5647382910",
										action: { text: "Dolor", hyperlink: "https://design.alberta.ca" },
									},
									{
										status: "Info 4",
										text: "Incididunt ut labore et dolore",
										number: "1029384756",
										action: { text: "Sit", hyperlink: "https://design.alberta.ca" },
									},
								],
								[],
							);
							const [dataFiltered, setDataFiltered] = useState(data);

							const handleInputChange = (_name: string, value: string) => {
								const newValue = value.trim();
								setInputValue(newValue);
								if (newValue === "") {
									setInputError("");
								}
							};

							const handleInputKeyDown = (_name: string, _value: string, key: string) => {
								if (key === "Enter") {
									applyFilter();
								}
							};

							const applyFilter = () => {
								if (inputValue === "") {
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

							const getFilteredData = React.useCallback(
								(typedChips: string[]) => {
									setErrorChips([]);
									if (typedChips.length === 0) {
										return data;
									}
									const filteredData = data.filter((item) =>
										typedChips.every((chip) => checkNested(item, chip)),
									);

									typedChips.forEach((chip) => {
										if (!data.some((item) => checkNested(item, chip))) {
											setErrorChips((prev) => [...prev, chip]);
										}
									});

									return filteredData;
								},
								[checkNested, data],
							);

							useEffect(() => {
								setDataFiltered(getFilteredData(typedChips));
							}, [getFilteredData, typedChips]);

							const highlightText = (text: string): string => {
								const ranges = typedChips
									.flatMap((chip) => {
										const regex = new RegExp(chip, "gi");
										const matches = [];
										let match;
										while ((match = regex.exec(text)) !== null) {
											matches.push({ start: match.index, end: match.index + match[0].length });
										}
										return matches;
									})
									.sort((a, b) => a.start - b.start);

								const mergedRanges = ranges.reduce<{ start: number; end: number }[]>((acc, range) => {
									const last = acc[acc.length - 1];
									if (!last || last.end < range.start) {
										acc.push(range);
									} else {
										last.end = Math.max(last.end, range.end);
									}
									return acc;
								}, []);

								return (
									mergedRanges.reduce((acc, range, index) => {
										const prevEnd = index === 0 ? 0 : mergedRanges[index - 1].end;
										return (
											acc +
											text.slice(prevEnd, range.start) +
											'<mark>' + text.slice(range.start, range.end) + '</mark>'
										);
									}, "") +
									text.slice(mergedRanges.length ? mergedRanges[mergedRanges.length - 1].end : 0)
								);
							};
            `}
          />

          <CodeSnippet
            lang="html"
            tags="react"
            allowCopy={true}
            code={`
							<GoAContainer width="full" mt="m" mb="none">
								<div style={{ textAlign: "right", justifyItems: "right"}}>
									<GoAFormItem
										label="Filter Results"
										id="filterChipInput"
										error={inputError}
									>
										<GoABlock gap="xs" direction="row">
											<GoAInput
												name="filterChipInput"
												aria-labelledby="filterChipInput"
												placeholder="Type to filter results"
												value={inputValue}
												maxLength={100}
												leadingIcon="filter"
												onChange={handleInputChange}
												onKeyPress={handleInputKeyDown}
											/>
											<GoAButton
												type="primary"
												onClick={applyFilter}
												disabled={inputValue === ""}
												leadingIcon="filter">
												Apply
											</GoAButton>
										</GoABlock>
									</GoAFormItem>

									<div>
										{typedChips.length > 0 &&
											typedChips.map((typedChip, index) => (
												<GoAFilterChip
													key={index}
													content={typedChip}
													mt="s"
													ml="s"
													onClick={() => removeTypedChip(typedChip)}
													error={errorChips.includes(typedChip)}
												/>
											))}
									</div>
								</div>

								<GoATable width="100%">
									<thead>
										<tr>
											{headers.map((header, index) => (
												<th key={index}>{header}</th>
											))}
										</tr>
									</thead>
									<tbody>
										{dataFiltered.map((item, index) => (
											<tr key={index}>
												<td>
													<GoABadge type="information" content={item.status} />
												</td>
												<td dangerouslySetInnerHTML={{ __html: highlightText(item.text) }} />
												<td
													dangerouslySetInnerHTML={{
														__html: highlightText(item.number),
													}}
												/>
												<td>
													<a
														href={item.action.hyperlink}
														dangerouslySetInnerHTML={{
															__html: highlightText(item.action.text),
														}}
													></a>
												</td>
											</tr>
										))}
										{dataFiltered.length === 0 && data.length > 0 && (
											<tr>
												<td colSpan={headers.length}>All results are being filtered out</td>
											</tr>
										)}
									</tbody>
								</GoATable>
							</GoAContainer>
            `}
          />
        </>
      )}
    </>
  );
};
