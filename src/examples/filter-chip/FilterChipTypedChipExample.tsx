import { GoabContainer, GoabFilterChip, GoabInput } from "@abgov/react-components";
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
  return (
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
            onChange={detail => handleInputChange(detail.name, detail.value)}
            onKeyPress={detail => handleInputKeyDown(detail.name, detail.value, detail.key)}
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

                    onInput(detail: GoabInputOnChangeDetail): void {
                      this.inputValue = detail.value;
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
                        (onChange)="onInput($event)"
                        (keydown)="handleBackspace($event)"
                        (keydown.enter)="addChip()"
                        placeholder="Type and press Enter"
                        mr="s">
                      </goab-input>
                      <goab-filter-chip
                        *ngFor="let chip of typedChips"
                        [content]="chip"
                        (_click)="removeTypedChip(chip)"
                        mr="s"
                        mt="s"
                        mb="s">
                      </goab-filter-chip>
                  `}
          />
        </>
      )}

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
      {version === "old" && (
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
      )}
      {version === "new" && (
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
      )}
    </>
  );
}
