import { GoabContainer, GoabFilterChip, GoabFormItem, GoabInput } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { GoabInputOnChangeDetail, GoabInputOnKeyPressDetail } from "@abgov/ui-components-common";

export const TypeToCreateANewFilter = () => {
  const {version} = useContext(LanguageVersionContext);
  const [typedChips, setTypedChips] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

	const handleInputChange = (detail: GoabInputOnChangeDetail) => {
		const newValue = detail.value.trim();
		setInputValue(newValue);
	};

	const handleInputKeyPress = (detail: GoabInputOnKeyPressDetail) => {
		const newValue = detail.value.trim();
		if (detail.key === "Enter" && newValue !== "") {
			setTypedChips(prevChips => [...prevChips, newValue]);
			setTimeout(() => {
				setInputValue("");
			}, 0);
		} else if (detail.key === "Backspace" && newValue === "" && typedChips.length > 0) {
			setTypedChips(prevChips => prevChips.slice(0, -1));
		}
	};

  const removeTypedChip = (chip: string) => {
    setTypedChips(prevChips => prevChips.filter(c => c !== chip));
  };

  return (
    // NOTE: Input onKeyPress functionality breaks when wrapped in Sandbox component
    // <Sandbox fullWidth skipRender>
    <>
      <GoabContainer mb="none">
				<GoabFormItem label="Type to create a chip" mb="m">
					<GoabInput
						name="chipInput"
						value={inputValue}
						onChange={handleInputChange}
						onKeyPress={handleInputKeyPress}
						width="100%"
					/>
				</GoabFormItem>
				<div>
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
				</div>
			</GoabContainer>

      {version === "old" && (
        <>
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
export class FilterChipComponent {
  typedChips: string[] = [];
  inputValue = "";

  handleInputChange(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value.trim();
    this.inputValue = newValue;
  }

  handleInputKeyPress(event: KeyboardEvent): void {
			const newValue = (event.target as HTMLInputElement).value.trim();
    if (event.key === "Enter" && newValue !== "") {
      this.addChip();
    } else if (!this.inputValue && this.typedChips.length > 0 && event.key === "Backspace") {
      this.typedChips.pop();
    }
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
}
                `}
          />
          <CodeSnippet
            lang="html"
            tags="angular"
            allowCopy={true}
            code={`
<goa-form-item label="Type to create a chip" mb="m">
  <goa-input
    id="chipInput"
    [value]="inputValue"
    (_change)="handleInputChange($event)"
		(keydown)="handleInputKeyPress($event)"
    width="100%"
  >
  </goa-input>
</goa-form-item>
<div *ngIf="typedChips.length > 0">
  <goa-filter-chip
    *ngFor="let typedChip of typedChips"
    [content]="typedChip"
    mb="xs"
    mr="xs"
    (_click)="removeTypedChip(typedChip)"
  >
  </goa-filter-chip>
</div>
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
export class FilterChipComponent {
  typedChips: string[] = [];
  inputValue = "";

  handleInputChange(detail: GoabInputOnChangeDetail): void {
    const newValue = detail.value.trim();
    this.inputValue = newValue;
  }

  handleInputKeyPress(detail: GoabInputOnKeyPressDetail): void {
    const newValue = detail.value.trim();
    if (detail.key === "Enter" && newValue !== "") {
      this.addChip();
    } else if (!this.inputValue && this.typedChips.length > 0 && detail.key === "Backspace") {
      this.typedChips.pop();
    }
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
}
            `}
          />
          <CodeSnippet
            lang="html"
            tags="angular"
            allowCopy={true}
            code={`
<goab-form-item label="Type to create a chip" mb="m">
  <goab-input
    id="chipInput"
    [value]="inputValue"
    (onChange)="handleInputChange($event)"
    (onKeyPress)="handleInputKeyPress($event)"
    width="100%"
  >
  </goab-input>
</goab-form-item>
<div *ngIf="typedChips.length > 0">
  <goab-filter-chip
    *ngFor="let typedChip of typedChips"
    [content]="typedChip"
    mb="xs"
    mr="xs"
    (onClick)="removeTypedChip(typedChip)"
  >
  </goab-filter-chip>
</div>
            `}
          />
        </>
      )}

      {version === "old" && (
        <>
          <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
  const [typedChips, setTypedChips] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (_name: string, value: string) => {
    const newValue = value.trim();
		setInputValue(newValue);
	};

  const handleInputKeyPress = (_name: string, value: string, key: string) => {
		const newValue = value.trim();
		if (key === "Enter" && newValue !== "") {
			setTypedChips(prevChips => [...prevChips, newValue]);
			setTimeout(() => {
				setInputValue("");
			}, 0);
		} else if (key === "Backspace" && newValue === "" && typedChips.length > 0) {
			setTypedChips(prevChips => prevChips.slice(0, -1));
		}
	};

  const removeTypedChip = (chip: string) => {
    setTypedChips(prevChips => prevChips.filter(c => c !== chip));
  };
            `}
          />
          <CodeSnippet
            lang="html"
            tags="react"
            allowCopy={true}
            code={`
      <GoAFormItem label="Type to create a chip" mb="m">
        <GoAInput
          name="chipInput"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          width="100%"
        />
      </GoAFormItem>
      <div>
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
      </div>
            `}
          />
        </>
      )}

      {version === "new" && (
        <>
          <CodeSnippet
            lang="typescript"
            tags="react"
            allowCopy={true}
            code={`
  const [typedChips, setTypedChips] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

	const handleInputChange = (detail: GoabInputOnChangeDetail) => {
		const newValue = detail.value.trim();
		setInputValue(newValue);
	};

	const handleInputKeyPress = (detail: GoabInputOnKeyPressDetail) => {
		const newValue = detail.value.trim();
		if (detail.key === "Enter" && newValue !== "") {
			setTypedChips(prevChips => [...prevChips, newValue]);
			setTimeout(() => {
				setInputValue("");
			}, 0);
		} else if (detail.key === "Backspace" && newValue === "" && typedChips.length > 0) {
			setTypedChips(prevChips => prevChips.slice(0, -1));
		}
	};

  const removeTypedChip = (chip: string) => {
    setTypedChips(prevChips => prevChips.filter(c => c !== chip));
  };
            `}
          />
          <CodeSnippet
            lang="html"
            tags="react"
            allowCopy={true}
            code={`
      <GoabFormItem label="Type to create a chip" mb="m">
        <GoabInput
          name="chipInput"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          width="100%"
        />
      </GoabFormItem>
      <div>
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
      </div>
            `}
          />
        </>
      )}
    </>
    // </Sandbox>
  );
}

export default TypeToCreateANewFilter;