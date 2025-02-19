import { GoabContainer, GoabGrid, GoabTable } from "@abgov/react-components";
import { TokenSnippet } from "@components/token-snippet/TokenSnippet";
import "./Shadow.css";
import { getTokenGroups } from "../getTokenGroups";
import { useContext } from "react";
import { DeviceWidthContext } from "../../../contexts/DeviceWidthContext";
import { ComponentContent } from "@components/component-content/ComponentContent";

interface Token {
  tokenName: string;
  value: string;
  figmaUsage: string;
}

export default function ShadowPage() {
  const tokens: Token[] = [
    {
      tokenName: "goa-shadow-modal",
      value: "x=6, y=6, blur=6, spread=0, rgba(0,0,0,0.16)",
      figmaUsage: "Effect: Drop Shadow/Modal",
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
            <th>Value</th>
            <th>Figma usage</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td>
                <div className="token-block" />
              </td>
              <td>
                <TokenSnippet code={token.tokenName} />
              </td>
              <td>{token.value}</td>
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
              <div className="token-block" />
              <TokenSnippet code={token.tokenName} />
              <dl>
                <dt>Value</dt> <dd>{token.value}</dd>
                <dt>Figma usage</dt> <dd>{token.figmaUsage}</dd>
              </dl>
            </GoabContainer>
          ))
        )}
      </GoabGrid>
    );
  };

  return (
    <ComponentContent contentClassName="shadow-page">
      <h1>Shadow</h1>
      {isDesktop ? renderDesktop() : renderMobile()}
    </ComponentContent>
  );
}
