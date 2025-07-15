import { useContext } from "react";
import { GoabContainer, GoabGrid, GoabTable } from "@abgov/react-components";
import { TokenSnippet } from "@components/token-snippet/TokenSnippet";
import "./BorderRadius.css";
import { Token } from "../token";
import { getTokenGroups } from "../getTokenGroups";
import { DeviceWidthContext } from "@contexts/DeviceWidthContext.tsx";
import { getCssVarValue } from "../../../utils/styling";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function BorderRadiusPage() {
  const tokens: Token[] = [
    {
      tokenName: "goa-border-radius-none",
      rem: "0rem",
      px: "0px",
      figmaUsage: "Border-radius/None",
    },
    {
      tokenName: "goa-border-radius-s",
      rem: "0.125rem",
      px: "2px",
      figmaUsage: "Border-radius/Small",
    },
    {
      tokenName: "goa-border-radius-m",
      rem: "0.25rem",
      px: "4px",
      figmaUsage: "Border-radius/Medium",
    },
    {
      tokenName: "goa-border-radius-l",
      rem: "0.375rem",
      px: "6px",
      figmaUsage: "Border-radius/Large",
    },
    {
      tokenName: "goa-border-radius-xl",
      rem: "0.5rem",
      px: "8px",
      figmaUsage: "Border-radius/XLarge",
    },
    {
      tokenName: "goa-border-radius-2xl",
      rem: "0.625rem",
      px: "10px",
      figmaUsage: "Border-radius/2XLarge",
    },
    {
      tokenName: "goa-border-radius-3xl",
      rem: "0.75rem",
      px: "12px",
      figmaUsage: "Border-radius/3XLarge",
    },
  ];
  const { isDesktop } = useContext(DeviceWidthContext);

  const renderDesktop = () => {
    return (
      <GoabTable variant="normal" width="100%">
        <thead>
          <tr>
            <th></th>
            <th>Design token</th>
            <th>rem</th>
            <th>px</th>
            <th>Figma</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td>
                <div
                  className="token-block"
                  style={{
                    borderRadius: getCssVarValue(`--${token.tokenName}`),
                  }}
                />
              </td>
              <td>
                <TokenSnippet code={token.tokenName} />
              </td>
              <td>{token.rem}</td>
              <td>{token.px}</td>
              <td>{token.figmaUsage}</td>
            </tr>
          ))}
        </tbody>
      </GoabTable>
    );
  };

  const renderMobile = () => {
    return (
      <GoabGrid minChildWidth="22rem" gap="l">
        {getTokenGroups(tokens).map(group =>
          group.map((token, idx) => (
            <>
              <GoabContainer key={idx}>
                <div
                  className="token-block"
                  style={{
                    borderRadius: getCssVarValue(`--${token.tokenName}`),
                  }}
                />
                <TokenSnippet code={token.tokenName} className="mobile-token-view" />
                <dl>
                  <dt>rem</dt> <dd className="dd-style">{token.rem}</dd>
                  <dt>px</dt> <dd className="dd-style">{token.px}</dd>
                  <dt>Figma variable</dt> <dd className="dd-style">{token.figmaUsage}</dd>
                </dl>
              </GoabContainer>
            </>
          ))
        )}
      </GoabGrid>
    );
  };

  return (
    <ComponentContent contentClassName="border-radius-page">
      <h1>Border Radius</h1>
      {isDesktop ? renderDesktop() : renderMobile()}
    </ComponentContent>
  );
}
