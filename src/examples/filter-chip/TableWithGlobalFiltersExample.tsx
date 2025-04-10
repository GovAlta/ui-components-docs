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
} from "@abgov/react-components";
import type {
  GoabBadgeType,
  GoabInputOnChangeDetail,
  GoabInputOnKeyPressDetail,
} from "@abgov/react-components";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const TableWithGlobalFiltersExample = () => {
  const { version } = useContext(LanguageVersionContext);

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

  const getFilteredData = useCallback(
    (typedChips: string[]) => {
      if (typedChips.length === 0) {
        return data;
      }
      const filteredData = data.filter((item: object) =>
        typedChips.every(chip => checkNested(item, chip))
      );

      return filteredData;
    },
    [checkNested, data]
  );

  useEffect(() => {
    setDataFiltered(getFilteredData(typedChips));
  }, [getFilteredData, typedChips]);

  return (
    // NOTE: Input onKeyPress functionality breaks when wrapped in Sandbox component
    // <Sandbox fullWidth skipRender>
    <>
      <GoabContainer width="full" mt="m" mb="none">
        <GoabFormItem id="filterChipInput" error={inputError} mb="m">
          <GoabBlock gap="xs" direction="row" alignment="start">
            <GoabInput
              name="filterChipInput"
              aria-labelledby="filterChipInput"
              value={inputValue}
              leadingIcon="search"
              onChange={handleInputChange}
              onKeyPress={handleInputKeyPress}
            />
            <GoabButton type="secondary" onClick={applyFilter} leadingIcon="filter">
              Filter
            </GoabButton>
          </GoabBlock>
        </GoabFormItem>

        {typedChips.length > 0 && (
          <div>
            <GoabText as="span" color="secondary" mb="xs" mr="xs">
              Filter:
            </GoabText>
            {typedChips.length > 0 &&
              typedChips.map((typedChip, index) => (
                <GoabFilterChip
                  key={index}
                  content={typedChip}
                  mb="xs"
                  mr="xs"
                  onClick={() => removeTypedChip(typedChip)}
                />
              ))}
            <GoabButton type="tertiary" size="compact" mb="xs" onClick={() => setTypedChips([])}>
              Clear all
            </GoabButton>
          </div>
        )}

        <GoabTable width="100%">
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
export class TableComponent {
  typedChips: string[] = [];
  inputValue = "";
  inputError = "";
  readonly errorEmpty = "Empty filter";
  readonly errorDuplicate = "Enter a unique filter";
  readonly data = [
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
  dataFiltered = this.getFilteredData(this.typedChips);

  handleInputChange(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value.trim();
    this.inputValue = newValue;
  }

  handleInputKeyPress(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      this.applyFilter();
    }
  }

  applyFilter() {
    if (this.inputValue === "") {
			this.inputError = this.errorEmpty;
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

  removeAllTypedChips() {
    this.typedChips = [];
    this.dataFiltered = this.getFilteredData(this.typedChips);
    this.inputError = "";
  }

  getFilteredData(typedChips: string[]) {
    if (typedChips.length === 0) {
      return this.data;
    }
    const filteredData = this.data.filter((item) =>
      typedChips.every((chip) => this.checkNested(item, chip)),
    );
    return filteredData;
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
    <goa-input
      name="filterChipInput"
      aria-labelledby="filterChipInput"
      [value]="inputValue"
      maxlength="100"
      size="large"
      leadingIcon="search"
      (_change)="handleInputChange($event)"
      (keydown)="handleInputKeyPress($event)"
    ></goa-input>

    <goa-button
      type="secondary"
      (_click)="applyFilter()"
      leadingIcon="filter"
    >
      Filter
    </goa-button>
  </goa-block>
</goa-form-item>

<ng-container *ngIf="typedChips.length > 0">
  <goa-text as="span" color="secondary" mb="xs" mr="xs">
    Filter:
  </goa-text>
  <goa-filter-chip
    *ngFor="let typedChip of typedChips; let index = index"
    [content]="typedChip"
    mb="xs"
    mr="xs"
    (_click)="removeTypedChip(typedChip)"
  ></goa-filter-chip>
  <goa-button type="tertiary" size="compact" mb="xs" (_click)="removeAllTypedChips()">
    Clear all
  </goa-button>
</ng-container>

<goa-table width="100%">
  <thead>
    <tr>
      <th>Status</th>
      <th>Name</th>
      <th className="goa-table-number-header">ID Number</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let item of dataFiltered">
      <td>
        <goa-badge [type]="item.status.type" [content]="item.status.text"></goa-badge>
      </td>
      <td>{{ item.name }}</td>
      <td className="goa-table-number-column">{{ item.id }}</td>
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

  const getFilteredData = useCallback(
    (typedChips: string[]) => {
      if (typedChips.length === 0) {
        return data;
      }
      const filteredData = data.filter((item: object) =>
        typedChips.every((chip) => checkNested(item, chip)),
      );

      return filteredData;
    },
    [checkNested, data],
  );

  useEffect(() => {
    setDataFiltered(getFilteredData(typedChips));
  }, [getFilteredData, typedChips]);
            `}
          />

          <CodeSnippet
            lang="html"
            tags="react"
            allowCopy={true}
            code={`
    <>
      <GoAFormItem id="filterChipInput" error={inputError} mb="m">
        <GoABlock gap="xs" direction="row" alignment="start">
          <GoAInput
            name="filterChipInput"
            aria-labelledby="filterChipInput"
            value={inputValue}
            leadingIcon="search"
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
          />
          <GoAButton
            type="secondary"
            onClick={applyFilter}
            leadingIcon="filter"
          >
            Filter
          </GoAButton>
        </GoABlock>
      </GoAFormItem>

      {typedChips.length > 0 && (
        <div>
          <GoAText as="span" color="secondary" mb="xs" mr="xs">
            Filter:
          </GoAText>
          {typedChips.length > 0 &&
            typedChips.map((typedChip, index) => (
              <GoAFilterChip
                key={index}
                content={typedChip}
                mb="xs"
                mr="xs"
                onClick={() => removeTypedChip(typedChip)}
              />
            ))}
          <GoAButton
            type="tertiary"
            size="compact"
            mb="xs"
            onClick={() => setTypedChips([])}
          >
            Clear all
          </GoAButton>
        </div>
      )}

      <GoATable width="100%">
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th className="goa-table-number-header">ID Number</th>
          </tr>
        </thead>
        <tbody>
          {dataFiltered.map((item) => (
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
        <GoABlock mt="l" mb="l">No results found</GoABlock>
      )}
    </>
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
  readonly errorEmpty = "Empty filter";
  readonly errorDuplicate = "Enter a unique filter";
  readonly data = [
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
  dataFiltered = this.getFilteredData(this.typedChips);

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
    if (this.inputValue === "") {
			this.inputError = this.errorEmpty;
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

  removeAllTypedChips() {
    this.typedChips = [];
    this.dataFiltered = this.getFilteredData(this.typedChips);
    this.inputError = "";
  }

  getFilteredData(typedChips: string[]) {
    if (typedChips.length === 0) {
      return this.data;
    }
    const filteredData = this.data.filter((item) =>
      typedChips.every((chip) => this.checkNested(item, chip)),
    );
    return filteredData;
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
    <goab-input
      name="filterChipInput"
      aria-labelledby="filterChipInput"
      [value]="inputValue"
      maxlength="100"
      size="large"
      leadingIcon="search"
      (onChange)="handleInputChange($event)"
      (onKeyPress)="handleInputKeyPress($event)"
    ></goab-input>

    <goab-button
      type="secondary"
      (onClick)="applyFilter()"
      leadingIcon="filter"
    >
      Filter
    </goab-button>
  </goab-block>
</goab-form-item>

<ng-container *ngIf="typedChips.length > 0">
  <goab-text as="span" color="secondary" mb="xs" mr="xs">
    Filter:
  </goab-text>
  <goab-filter-chip
    *ngFor="let typedChip of typedChips; let index = index"
    [content]="typedChip"
    mb="xs"
    mr="xs"
    (onClick)="removeTypedChip(typedChip)"
  ></goab-filter-chip>
  <goab-button type="tertiary" size="compact" mb="xs" (onClick)="removeAllTypedChips()">
    Clear all
  </goab-button>
</ng-container>

<goab-table width="100%">
  <thead>
    <tr>
      <th>Status</th>
      <th>Name</th>
      <th className="goa-table-number-header">ID Number</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let item of dataFiltered">
      <td>
        <goab-badge [type]="item.status.type" [content]="item.status.text"></goab-badge>
      </td>
      <td>{{ item.name }}</td>
      <td className="goa-table-number-column">{{ item.id }}</td>
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

  const getFilteredData = useCallback(
    (typedChips: string[]) => {
      if (typedChips.length === 0) {
        return data;
      }
      const filteredData = data.filter((item: object) =>
        typedChips.every(chip => checkNested(item, chip))
      );

      return filteredData;
    },
    [checkNested, data]
  );

  useEffect(() => {
    setDataFiltered(getFilteredData(typedChips));
  }, [getFilteredData, typedChips]);
            `}
          />

          <CodeSnippet
            lang="html"
            tags="react"
            allowCopy={true}
            code={`
    <>
      <GoabFormItem id="filterChipInput" error={inputError} mb="m">
        <GoabBlock gap="xs" direction="row" alignment="start">
          <GoabInput
            name="filterChipInput"
            aria-labelledby="filterChipInput"
            value={inputValue}
            leadingIcon="search"
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
          />
          <GoabButton
            type="secondary"
            onClick={applyFilter}
            leadingIcon="filter">
            Filter
          </GoabButton>
        </GoabBlock>
      </GoabFormItem>

      {typedChips.length > 0 && (
        <div>
          <GoabText as="span" color="secondary" mb="xs" mr="xs">
            Filter:
          </GoabText>
          {typedChips.length > 0 &&
            typedChips.map((typedChip, index) => (
              <GoabFilterChip
                key={index}
                content={typedChip}
                mb="xs"
                mr="xs"
                onClick={() => removeTypedChip(typedChip)}
              />
            ))}
          <GoabButton type="tertiary" size="compact" mb="xs" onClick={() => setTypedChips([])}>
            Clear all
          </GoabButton>
        </div>
      )}

      <GoabTable width="100%">
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
        <GoabBlock mt="l" mb="l">No results found</GoabBlock>
      )}
    </>
            `}
          />
        </>
      )}
    </>
    // </Sandbox>
  );
};
