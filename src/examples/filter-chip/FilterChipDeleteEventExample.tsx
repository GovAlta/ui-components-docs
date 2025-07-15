import { Sandbox } from "@components/sandbox";
import { GoabFilterChip } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const FilterChipDeleteEventExample = () => {
  const { version } = useContext(LanguageVersionContext);
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  const deleteChip = (chip: string) => {
    setChips(prevChips => prevChips.filter(c => c !== chip));
  };

  return (
    <Sandbox skipRender>
      {chips.map(chip => (
        <GoabFilterChip key={chip} content={chip} onClick={() => deleteChip(chip)} mr="s" />
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

      {version === "old" && (
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
      )}
      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
                  <goab-filter-chip
                    *ngFor="let chip of chips"
                    [content]="chip"
                    (onClick)="deleteChip(chip)"
                    mr="s">
                  </goab-filter-chip>
                `}
        />
      )}

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

      {version === "old" && (
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
      )}
      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
                  {chips.map(chip => (
                    <GoabFilterChip
                      key={chip}
                      content={chip}
                      onClick={() => deleteChip(chip)}
                      mr="s"
                    />
                  ))}
                `}
        />
      )}
    </Sandbox>
  );
};
