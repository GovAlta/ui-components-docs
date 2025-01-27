import { GoabContainer, GoabFilterChip, GoabInput, GoabInputOnChangeDetail, GoabInputOnKeyPressDetail } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const FilterChipTypedChipExample = () => {
  const {version} = useContext(LanguageVersionContext);
  const [typedChips, setTypedChips] = useState<string[]>([
    "Typed Chip 1",
    "Typed Chip 2",
    "Typed Chip 3",
  ]);

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
    // <Sandbox
    // 	fullWidth
    // 	skipRender>
    <>
      <GoabContainer mb="none">
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
          <GoabInput
            name="chipInput"
            placeholder="Type and press Enter"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
            width="30ch"
            mr="s"
          />
          {typedChips.map((chip, index) => (
            <GoabFilterChip
              key={index}
              content={chip}
              onClick={() => removeTypedChip(chip)}
              mr="s"
              mt="s"
              mb="s"
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

                  import { Component } from "@angular/core";

                  @Component({
                    selector: "abgov-chip",
                    templateUrl: "./filter-chip.component.html",
                    styleUrl: "./filter-chip.component.css",
                  })
                  export class FilterChipComponent {
                   
                    typedChips: string[] = ["Typed Chip 1", "Typed Chip 2", "Typed Chip 3"];
                    inputValue = "";
										
                    handleInputChange(event: Event): void {
                      const newValue = (event.target as HTMLInputElement).value.trim();
                      this.inputValue = newValue;
                    }

                    handleInputKeyPress(event: KeyboardEvent): void {
                      const newValue = (event.target as HTMLInputElement).value.trim();
                      if (event.key === "Enter" && newValue !== "") {
                        addChip();
                      } else if (!this.inputValue && this.typedChips.length > 0 && event.key === "Backspace") {
                        this.typedChips.pop();
                        event.preventDefault();
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
              <goa-input
                id="chipInput"
                type="text"
                [value]="inputValue"
                (_change)="handleInputChange($event)"
                (_keyPress)="handleInputKeyPress($event)"
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

      {version === "new" && (
        <>
          <CodeSnippet
            lang="typescript"
            tags="angular"
            allowCopy={true}
            code={`
export class FilterChipComponent {
  typedChips: string[] = ["Typed Chip 1", "Typed Chip 2", "Typed Chip 3"];
  inputValue = "";

  handleInputChange(detail: GoabInputOnChangeDetail): void {
    const newValue = detail.value.trim();
    this.inputValue = newValue;
  }

  handleInputKeydown(event: KeyboardEvent): void {
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
<h2>Typed Chip</h2>
<goab-input
  id="chipInput"
  type="text"
  [value]="inputValue"
  (onChange)="handleInputChange($event)"
  (keydown)="handleInputKeydown($event)"
  placeholder="Type and press Enter"
  mr="s"
>
</goab-input>
<goab-filter-chip
  *ngFor="let chip of typedChips"
  [content]="chip"
  (onClick)="removeTypedChip(chip)"
  mr="s"
  mt="s"
  mb="s"
>
</goab-filter-chip>
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
                      const [typedChips, setTypedChips] = useState<string[]>([
                        "Typed Chip 1",
                        "Typed Chip 2",
                        "Typed Chip 3",
                      ]);
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

      {version === "new" && (
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
                        <GoabInput
                          name="chipInput"
                          placeholder="Type and press Enter"
                          value={inputValue}
                          onChange={(detail) => handleInputChange(detail.name, detail.value)}
                          onKeyPress={(detail) => handleInputKeyDown(detail.name, detail.value, detail.key)}
                          width="30ch"
                          mr="s"
                        />    
                        {typedChips.map((chip, index) => (
                          <GoabFilterChip
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
    </>
    // </Sandbox>
  );
}
