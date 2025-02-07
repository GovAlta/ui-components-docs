import { GoabContainer, GoabGrid, GoabIcon, GoabTable } from "@abgov/react-components";
import { TokenSnippet } from "@components/token-snippet/TokenSnippet";
import "./IconSize.css";
import { getTokenGroups } from "../getTokenGroups";
import { Token } from "../token";
import { useContext } from "react";
import { DeviceWidthContext } from "../../../contexts/DeviceWidthContext";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabIconSize } from "@abgov/ui-components-common";

interface IconSizeToken extends Token {
  size: GoabIconSize | string;
}

export default function IconSizePage() {
  const tokens: IconSizeToken[] = [
    {
      tokenName: "goa-icon-size-s",
      rem: "1rem",
      px: "16px",
      figmaUsage: "Icon Size/Small",
      size: "small",
    },
    {
      tokenName: "goa-icon-size-m",
      rem: "1.25rem",
      px: "20px",
      figmaUsage: "Icon Size/Medium",
      size: "medium",
    },
    {
      tokenName: "goa-icon-size-l",
      rem: "1.5rem",
      px: "24px",
      figmaUsage: "Icon Size/Large",
      size: "large",
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
                <div className={`icon ${token.tokenName}`}>
                  <GoabIcon type="add" size={token.size as GoabIconSize}></GoabIcon>
                </div>
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
          group.map((token: IconSizeToken, idx: number) => (
            <GoabContainer key={idx}>
              <div className={`icon ${token.tokenName}`}>
                <GoabIcon type="add" size={token.size as GoabIconSize}></GoabIcon>
              </div>
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
    <ComponentContent contentClassName="icon-size">
      <h1>Icon size</h1>
      {isDesktop ? renderDesktop() : renderMobile()}
    </ComponentContent>
  );
}
