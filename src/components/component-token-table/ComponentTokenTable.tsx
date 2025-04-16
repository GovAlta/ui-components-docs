import { GoabAccordion, GoabTable, GoabIcon, GoabBlock, GoabText, GoabButton } from "@abgov/react-components";
import { useState } from "react";

export type CategorizedToken = {
  name: string;
  value: string | Record<string, any>;
  description: string;
};

export interface ComponentTokenTableProps {
  tokensList: Record<string, CategorizedToken[]>;
  orderedCategories: string[];
}

export function ComponentTokenTable({
  tokensList,
  orderedCategories,
}: ComponentTokenTableProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [accordionStatus, setAccordionStatus] = useState<string>("Show all");
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const onClick = () => {
    const nextOpen = !open;
    setOpen(nextOpen);
    setAccordionStatus(nextOpen ? "Hide all" : "Show all");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedToken(text);
      setTimeout(() => setCopiedToken(null), 4500);
    }).catch(err => console.error("Failed to copy text: ", err));
  };

  return (
    <>
      {copiedToken && (
        <div style={{
          position: "fixed",
          bottom: "var(--goa-space-l)",
          right: "var(--goa-space-l)",
          backgroundColor: "var(--goa-color-greyscale-black)",
          color: "var(--goa-color-text-light)",
          padding: "var(--goa-space-m) var(--goa-space-l) 19px var(--goa-space-l)",
          borderRadius: "4px",
          zIndex: 1000
        }}>
          Copied <span style={{ color: "var(--goa-color-extended-violet)"}}>{copiedToken}</span> to clipboard
        </div>
      )}
      <GoabBlock gap="l" mt="2xl" mb="l" alignment="start">
        <GoabText size="heading-m" mt="3xs">
          Component tokens
        </GoabText>
        <GoabButton type="tertiary" onClick={onClick}>
          {accordionStatus}
        </GoabButton>
      </GoabBlock>
      {orderedCategories.map((category) => {
        const tokens = tokensList[category] || [];
        return (
          <GoabAccordion open={open} key={category} heading={category}>
            <GoabTable width="100%">
              <thead>
              <tr>
                <th style={{ width: "50%" }}>Token Name</th>
                <th style={{ width: "50%" }}>Value</th>
              </tr>
              </thead>
              <tbody>
              {tokens.map((token) => (
                <tr key={token.name}>
                  <td
                    style={{
                      cursor: "pointer",
                      color: "var(--goa-color-interactive-default)",
                    }}
                    onClick={() => copyToClipboard(token.name)}
                  >
                    <div
                      style={{
                        display: "inline",
                        font: "var(--goa-typography-number-s)",
                        color: "var(--goa-color-interactive-default)",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                          "var(--goa-color-interactive-hover)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "var(--goa-color-interactive-default)")
                      }
                    >
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        <span>{token.name}</span>
                        <GoabIcon
                          type="copy"
                          size="small"
                          theme="outline"
                          title="Copy token name"
                          opacity={1}
                        />
                      </span>
                    </div>
                  </td>
                  <td>
                      {typeof token.value === "string"
                        ? token.value.replace(/^\{(.*)\}$/, "$1")
                        : Object.entries(token.value)
                          .map(([k, v]) =>
                            `${k}: ${
                              typeof v === "string"
                                ? v.replace(/^\{(.*)\}$/, "$1")
                                : v
                            }`
                          )
                          .join(", ")}
                  </td>
                </tr>
              ))}
              </tbody>
            </GoabTable>
          </GoabAccordion>
        );
      })}
    </>
  );
}