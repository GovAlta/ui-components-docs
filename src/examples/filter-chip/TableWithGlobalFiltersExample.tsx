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
} from "@abgov/react-components";
import type { GoabInputOnChangeDetail, GoabInputOnKeyPressDetail } from "@abgov/react-components";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const TableWithGlobalFiltersExample = () => {
  const { version } = useContext(LanguageVersionContext);
  const [typedChips, setTypedChips] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [errorChips, setErrorChips] = useState<string[]>([]);
  const errorDuplicate = "Duplicate filter";
  const headers = ["Status", "Text", "Number", "Action"];
  const data = useMemo(
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

  const handleInputChange = (detail: GoabInputOnChangeDetail) => {
    const newValue = detail.value.trim();
    setInputValue(newValue);
    if (newValue === "") {
      setInputError("");
    }
  };

  const handleInputKeyPress = (detail: GoabInputOnKeyPressDetail) => {
    if (detail.key === "Enter") {
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

  const getFilteredData = useCallback(
    (typedChips: string[]) => {
      setErrorChips([]);
      if (typedChips.length === 0) {
        return data;
      }
      const filteredData = data.filter((item: object) =>
        typedChips.every(chip => checkNested(item, chip))
      );

      typedChips.forEach(chip => {
        if (!data.some((item: object) => checkNested(item, chip))) {
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
		// NOTE: Input onKeyPress functionality breaks when wrapped in Sandbox component
    // <Sandbox
    // 	fullWidth
    // 	skipRender
    // 	note="Highlights matching text in table rows when filtering applied">
    <>
      <GoabContainer width="full" mt="m" mb="none">
        <div style={{ textAlign: "right", justifyItems: "right" }}>
          <GoabFormItem label="Filter Results" id="filterChipInput" error={inputError}>
            <GoabBlock gap="xs" direction="row">
              <GoabInput
                name="filterChipInput"
                aria-labelledby="filterChipInput"
                placeholder="Type to filter results"
                value={inputValue}
                maxLength={100}
                leadingIcon="filter"
                onChange={handleInputChange}
                onKeyPress={handleInputKeyPress}
              />
              <GoabButton
                type="primary"
                onClick={applyFilter}
                disabled={inputValue === ""}
                leadingIcon="filter">
                Apply
              </GoabButton>
            </GoabBlock>
          </GoabFormItem>

          <div>
            {typedChips.length > 0 &&
              typedChips.map((typedChip, index) => (
                <GoabFilterChip
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

        <GoabTable width="100%">
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
                  <GoabBadge type="information" content={item.status} />
                </td>
                <td dangerouslySetInnerHTML={{ __html: highlightText(item.text) }} />
                <td
                  dangerouslySetInnerHTML={{
                    __html: highlightText(item.number),
                  }}
                />
                <td>
                  <GoabButton type="tertiary">
                    <span dangerouslySetInnerHTML={{ __html: highlightText(item.action.text) }} />
                  </GoabButton>
                </td>
              </tr>
            ))}
            {dataFiltered.length === 0 && data.length > 0 && (
              <tr>
                <td colSpan={headers.length}>All results are being filtered out</td>
              </tr>
            )}
          </tbody>
        </GoabTable>
      </GoabContainer>

      <div className="sandbox-note">
        Highlights matching text in table rows when filtering applied
      </div>

      {version === "old" && (
        <>
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
export class TableComponent() {
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

  handleInputChange(event: Event): void {
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
}
						`}
          />
          <CodeSnippet
            lang="html"
            tags="angular"
            allowCopy={true}
            code={`
<div style="text-align: right; justify-items: right">
  <goa-form-item label="Filter Results" id="filterChipInput" [error]="inputError">
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
        (_keyPress)="handleInputKeyPress($event)"
      ></goa-input>

      <goa-button
        type="primary"
        (_click)="applyFilter()"
        [disabled]="inputValue === ''"
        leadingicon="filter"
      >
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
        <goa-button type="tertiary">
          <span [innerHTML]="highlightText(item.action.text)"></span>
        </goa-button>
      </td>
    </tr>
    <tr *ngIf="dataFiltered.length === 0 && data.length > 0">
      <td [attr.colspan]="headers.length">All results are being filtered out</td>
    </tr>
  </tbody>
</goa-table>
            `}
          />
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
  const data = useMemo(
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

  const handleInputKeyPress = (_name: string, _value: string, key: string) => {
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

  const getFilteredData = useCallback(
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
          "<mark>" +
          text.slice(range.start, range.end) +
          "</mark>"
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
      <div style={{ textAlign: "right", justifyItems: "right" }}>
        <GoAFormItem label="Filter Results" id="filterChipInput" error={inputError}>
          <GoABlock gap="xs" direction="row">
            <GoAInput
              name="filterChipInput"
              ariaLabelledBy="filterChipInput"
              placeholder="Type to filter results"
              value={inputValue}
              maxLength={100}
              leadingIcon="filter"
              onChange={handleInputChange}
              onKeyPress={handleInputKeyPress}
            />
            <GoAButton
              type="primary"
              onClick={applyFilter}
              disabled={inputValue === ""}
              leadingIcon="filter"
            >
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
                <GoAButton type="tertiary">
                  <span dangerouslySetInnerHTML={{ __html: highlightText(item.action.text) }} />
                </GoAButton>
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
export class TableComponent {
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

  handleInputChange(detail: GoabInputOnChangeDetail): void {
    const newValue = detail.value.trim();
    this.inputValue = newValue;
    if (newValue === "") {
      this.inputError = "";
    }
  }

  handleInputKeydown(event: KeyboardEvent): void {
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
}
						`}
          />
          <CodeSnippet
            lang="html"
            tags="angular"
            allowCopy={true}
            code={`
<div style="text-align: right; justify-items: right">
  <goab-form-item label="Filter Results" id="filterChipInput" [error]="inputError">
    <goab-block gap="xs" direction="row">
      <goab-input
        name="filterChipInput"
        aria-labelledby="filterChipInput"
        placeholder="Type to filter results"
        [value]="inputValue"
        maxlength="100"
        size="large"
        leadingIcon="filter"
        (onChange)="handleInputChange($event)"
        (keydown)="handleInputKeydown($event)"
      ></goab-input>

      <goab-button
        type="primary"
        (onClick)="applyFilter()"
        [disabled]="inputValue === ''"
        leadingIcon="filter"
      >
        Apply
      </goab-button>
    </goab-block>
  </goab-form-item>

  <div>
    <ng-container *ngIf="typedChips.length > 0">
      <goab-filter-chip
        *ngFor="let typedChip of typedChips; let index = index"
        [content]="typedChip"
        (onClick)="removeTypedChip(typedChip)"
        [error]="errorChips.includes(typedChip)"
        mt="s"
        ml="s"
      ></goab-filter-chip>
    </ng-container>
  </div>
</div>

<goab-table width="100%">
  <thead>
    <tr>
      <th *ngFor="let header of headers">{{ header }}</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let item of dataFiltered">
      <td>
        <goab-badge type="information" [content]="item.status"></goab-badge>
      </td>
      <td [innerHTML]="highlightText(item.text)"></td>
      <td [innerHTML]="highlightText(item.number)"></td>
      <td>
        <goab-button type="tertiary">
          <span [innerHTML]="highlightText(item.action.text)"></span>
        </goab-button>
      </td>
    </tr>
    <tr *ngIf="dataFiltered.length === 0 && data.length > 0">
      <td [attr.colspan]="headers.length">All results are being filtered out</td>
    </tr>
  </tbody>
</goab-table>
            `}
          />
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
  const data = useMemo(
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

  const handleInputChange = (detail: GoabInputOnChangeDetail) => {
    const newValue = detail.value.trim();
    setInputValue(newValue);
    if (newValue === "") {
      setInputError("");
    }
  };

  const handleInputKeyPress = (detail: GoabInputOnKeyPressDetail) => {
    if (detail.key === "Enter") {
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

  const getFilteredData = useCallback(
    (typedChips: string[]) => {
      setErrorChips([]);
      if (typedChips.length === 0) {
        return data;
      }
      const filteredData = data.filter((item: object) =>
        typedChips.every((chip) => checkNested(item, chip)),
      );

      typedChips.forEach((chip) => {
        if (!data.some((item: object) => checkNested(item, chip))) {
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
          "<mark>" +
          text.slice(range.start, range.end) +
          "</mark>"
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
    <>
      <div style={{ textAlign: "right", justifyItems: "right" }}>
        <GoabFormItem label="Filter Results" id="filterChipInput" error={inputError}>
          <GoabBlock gap="xs" direction="row">
            <GoabInput
              name="filterChipInput"
              aria-labelledby="filterChipInput"
              placeholder="Type to filter results"
              value={inputValue}
              maxLength={100}
              leadingIcon="filter"
              onChange={handleInputChange}
              onKeyPress={handleInputKeyPress}
            />
            <GoabButton
              type="primary"
              onClick={applyFilter}
              disabled={inputValue === ""}
              leadingIcon="filter"
            >
              Apply
            </GoabButton>
          </GoabBlock>
        </GoabFormItem>

        <div>
          {typedChips.length > 0 &&
            typedChips.map((typedChip, index) => (
              <GoabFilterChip
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

      <GoabTable width="100%">
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
                <GoabBadge type="information" content={item.status} />
              </td>
              <td dangerouslySetInnerHTML={{ __html: highlightText(item.text) }} />
              <td
                dangerouslySetInnerHTML={{
                  __html: highlightText(item.number),
                }}
              />
              <td>
                <GoabButton type="tertiary">
                  <span
                    dangerouslySetInnerHTML={{ __html: highlightText(item.action.text) }}
                  />
                </GoabButton>
              </td>
            </tr>
          ))}
          {dataFiltered.length === 0 && data.length > 0 && (
            <tr>
              <td colSpan={headers.length}>All results are being filtered out</td>
            </tr>
          )}
        </tbody>
      </GoabTable>
    </>
            `}
          />
        </>
      )}
    </>
    // </Sandbox>
  );
};
