import { useContext } from "react";
import { GoabContainer, GoabGrid, GoabTable } from "@abgov/react-components";
import { TokenSnippet } from "@components/token-snippet/TokenSnippet";
import "./BorderWidth.css";
import { Token } from "../token";
import { getTokenGroups } from "../getTokenGroups";
import { DeviceWidthContext } from "../../../contexts/DeviceWidthContext";
import { getCssVarValue } from "../../../utils/styling";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function BorderWidthPage() {
  const tokens: Token[] = [
    {
      tokenName: "goa-border-width-s",
      rem: "0.0625rem",
      px: "1px",
      figmaUsage: "Use a border width of 1px.",
    },
    {
      tokenName: "goa-border-width-m",
      rem: "0.125rem",
      px: "2px",
      figmaUsage: "Use a border width of 2px.",
    },
    {
      tokenName: "goa-border-width-l",
      rem: "0.1875rem",
      px: "3px",
      figmaUsage: "Use a border width of 3px.",
    },
  ];
  const { isDesktop } = useContext(DeviceWidthContext);

  const renderDesktop = () => {
    return (
      <GoabTable variant="normal" width="100%">
        <thead>
          <tr>
            <th></th>
            <th>Token name</th>
            <th>rem</th>
            <th>px</th>
            <th>Figma usage</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td>
                <div
                  className="token-block"
                  style={{
                    height: getCssVarValue(`--${token.tokenName}`),
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
      <GoabGrid minChildWidth="22rem" gap="xl">
        {getTokenGroups(tokens).map(group =>
          group.map((token, idx) => (
            <GoabContainer key={idx}>
              <div
                className="token-block"
                style={{
                  height: getCssVarValue(`--${token.tokenName}`),
                }}
              />
              <TokenSnippet code={token.tokenName} />
              <dl>
                <dt>rem</dt> <dd>{token.rem}</dd>
                <dt>px</dt> <dd>{token.px}</dd>
                <dt>Figma usage</dt> <dd>{token.figmaUsage}</dd>
              </dl>
            </GoabContainer>
          ))
        )}
      </GoabGrid>
    );
  };

  return (
    <ComponentContent contentClassName="border-width-page">
      <h1>Border Width</h1>
      {isDesktop ? renderDesktop() : renderMobile()}
    </ComponentContent>
  );
}
