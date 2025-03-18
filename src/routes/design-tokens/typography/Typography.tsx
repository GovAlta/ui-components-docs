import { GoabContainer, GoabGrid, GoabTable } from "@abgov/react-components";
import { TokenSnippet } from "@components/token-snippet/TokenSnippet";
import TYPO_TOKENS from "./typography.json";
import { getTokenGroups } from "../getTokenGroups";
import { Token } from "../token";
import { useContext } from "react";
import { DeviceWidthContext } from "../../../contexts/DeviceWidthContext";
import { getCssVarValue } from "../../../utils/styling";
import { ComponentContent } from "@components/component-content/ComponentContent";

interface TypographyToken extends Token {
  figmaTypeStyle: string;
  typeFamily: string;
  weight: string;
  fontSize: string;
  lineHeight: string;
}

export default function TypographyPage() {
  const tokens: TypographyToken[] = TYPO_TOKENS;
  const { isDesktop } = useContext(DeviceWidthContext);

  const renderDesktop = () => {
    return (
      <GoabTable variant="normal" width="100%">
        <thead>
          <tr>
            <th>Figma type style</th>
            <th>Design token</th>
            <th>Type family</th>
            <th>Weight</th>
            <th>Font size</th>
            <th>Line height</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td style={{ font: getCssVarValue(`--${token.tokenName}`) }}>
                {token.figmaTypeStyle}
              </td>
              <td>
                <TokenSnippet code={token.tokenName} />
              </td>
              <td>{token.typeFamily}</td>
              <td>{token.weight === "Bold" ? <strong>{token.weight}</strong> : token.weight}</td>
              <td>{token.fontSize}</td>
              <td>{token.lineHeight}</td>
            </tr>
          ))}
        </tbody>
      </GoabTable>
    );
  };

  const renderMobile = () => {
    return (
      <GoabGrid minChildWidth="22rem" gap="xl">
        {getTokenGroups(tokens as Token[]).map(group =>
          group.map((token: TypographyToken, idx: number) => (
            <GoabContainer key={idx}>
              <dl>
                <dd style={{ font: getCssVarValue(`--${token.tokenName}`) }}>
                  {token.figmaTypeStyle}
                </dd>
                <dd>
                  <TokenSnippet code={token.tokenName} />
                </dd>
                <dt>Type family</dt> <dd>{token.typeFamily}</dd>
                <dt>Weight</dt> <dd>{token.weight}</dd>
                <dt>Font size</dt> <dd>{token.fontSize}</dd>
                <dt>Line height</dt> <dd>{token.lineHeight}</dd>
              </dl>
            </GoabContainer>
          ))
        )}
      </GoabGrid>
    );
  };

  return (
    <ComponentContent>
      <div style={{ whiteSpace: "normal" }}>
        <h1>Typography</h1>
        {isDesktop ? renderDesktop() : renderMobile()}
      </div>
    </ComponentContent>
  );
}
