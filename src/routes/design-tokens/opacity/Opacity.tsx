import { GoabContainer, GoabGrid, GoabTable } from "@abgov/react-components";
import { TokenSnippet } from "@components/token-snippet/TokenSnippet";
import "./Opacity.css";
import { getTokenGroups } from "../getTokenGroups";
import { useContext } from "react";
import { DeviceWidthContext } from "../../../contexts/DeviceWidthContext";
import { getCssVarValue } from "../../../utils/styling";
import { ComponentContent } from "@components/component-content/ComponentContent";

interface Token {
  tokenName: string;
  percentage: string;
  figmaUsage: string;
}

export default function OpacityPage() {
  const tokens: Token[] = [
    {
      tokenName: "goa-opacity-background-modal",
      percentage: "50%",
      figmaUsage: "Fill: opacity/background/modal",
    },
    {
      tokenName: "goa-opacity-background-loading",
      percentage: "90%",
      figmaUsage: "Fill: opacity/background/loading",
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
            <th>%</th>
            <th>Figma style</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td>
                <div style={{ display: "flex" }}>
                  <div className="blue-box"></div>
                  <div
                    className="grey-box"
                    style={{
                      opacity: getCssVarValue(`--${token.tokenName}`),
                    }}
                  ></div>
                </div>
              </td>
              <td>
                <TokenSnippet code={token.tokenName} />
              </td>
              <td>{token.percentage}</td>
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
          group.map((token: Token, idx: number) => (
            <GoabContainer key={idx}>
              <div style={{ display: "flex" }}>
                <div className="blue-box"></div>
                <div
                  className="grey-box"
                  style={{
                    opacity: getCssVarValue(`--${token.tokenName}`),
                  }}
                ></div>
              </div>
              <TokenSnippet code={token.tokenName} />
              <dl>
                <dt>%</dt> <dd>{token.percentage}</dd>
                <dt>Figma usage</dt> <dd>{token.figmaUsage}</dd>
              </dl>
            </GoabContainer>
          ))
        )}
      </GoabGrid>
    );
  };

  return (
    <ComponentContent contentClassName="opacity-page">
      <h1>Opacity</h1>
      {isDesktop ? renderDesktop() : renderMobile()}
    </ComponentContent>
  );
}
