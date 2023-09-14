import { GoAContainer, GoAGrid, GoATable } from "@abgov/react-components";
import { TokenSnippet } from "@components/token-snippet/TokenSnippet";
import "./Shadow.css";
import { getTokenGroups } from "../getTokenGroups";
import { useContext } from "react";
import { DeviceWidthContext } from "../../../contexts/DeviceWidthContext";

interface Token {
  tokenName: string;
  value: string;
  figmaUsage: string;
}

export default function ShadowPage() {
  const tokens: Token[] = [
    {
      tokenName: "goa-shadow-modal",
      value: "x=6,y=6,blur=6,spread=0, rgba(0,0,0,0,16)",
      figmaUsage: "Drop Shadow/Small",
    },
  ];
  const { isDesktop } = useContext(DeviceWidthContext);

  const renderDesktop = () => {
    return (
      <GoATable variant="normal">
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
      </GoATable>
    );
  };

  const renderMobile = () => {
    return (
      <GoAGrid minChildWidth="22rem" gap="xl">
        {getTokenGroups(tokens).map((group) =>
          group.map((token: Token, idx: number) => (
            <GoAContainer key={idx}>
              <div className="token-block" />
              <TokenSnippet code={token.tokenName} />
              <dl>
                <dt>Value</dt> <dd>{token.value}</dd>
                <dt>Figma usage</dt> <dd>{token.figmaUsage}</dd>
              </dl>
            </GoAContainer>
          ))
        )}
      </GoAGrid>
    );
  };

  return (
    <div className="shadow-page">
      <h1>Shadow</h1>
      {isDesktop ? renderDesktop() : renderMobile()}
    </div>
  );
}
