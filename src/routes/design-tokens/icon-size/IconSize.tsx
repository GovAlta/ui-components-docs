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
      tokenName: "goa-icon-size-1",
      rem: "1rem",
      px: "16px",
      figmaUsage: "Icon-size/1",
      size: "1",
    },
    {
      tokenName: "goa-icon-size-2",
      rem: "1.125rem",
      px: "18px",
      figmaUsage: "Icon-size/2",
      size: "2",
    },
    {
      tokenName: "goa-icon-size-3",
      rem: "1.25rem",
      px: "20px",
      figmaUsage: "Icon-size/3",
      size: "3",
    },
    {
      tokenName: "goa-icon-size-4",
      rem: "1.5rem",
      px: "24px",
      figmaUsage: "Icon-size/4",
      size: "4",
    },
    {
      tokenName: "goa-icon-size-5",
      rem: "2rem",
      px: "32px",
      figmaUsage: "Icon-size/5",
      size: "5",
    },
    {
      tokenName: "goa-icon-size-6",
      rem: "2.5rem",
      px: "40px",
      figmaUsage: "Icon-size/6",
      size: "6",
    },
    {
      tokenName: "goa-icon-size-s",
      rem: "1rem",
      px: "16px",
      figmaUsage: "Icon-size/Small",
      size: "small",
    },
    {
      tokenName: "goa-icon-size-m",
      rem: "1.25rem",
      px: "20px",
      figmaUsage: "Icon-size/Medium",
      size: "medium",
    },
    {
      tokenName: "goa-icon-size-l",
      rem: "1.5rem",
      px: "24px",
      figmaUsage: "Icon-size/Large",
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
                <div className={`icon ${token.tokenName}`}>
                  <GoabIcon type="add-circle" size={token.size as GoabIconSize}></GoabIcon>
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
      <GoabGrid minChildWidth="22rem" gap="l">
        {getTokenGroups(tokens).map(group =>
          group.map((token: IconSizeToken, idx: number) => (
            <GoabContainer key={idx}>
              <div className={`icon ${token.tokenName}`}>
                <GoabIcon type="add" size={token.size as GoabIconSize}></GoabIcon>
              </div>
              <TokenSnippet code={token.tokenName} className="mobile-token-view" />
              <dl>
                <dt>rem</dt> <dd className="dd-style">{token.rem}</dd>
                <dt>px</dt> <dd className="dd-style">{token.px}</dd>
                <dt>Figma usage</dt> <dd className="dd-style">{token.figmaUsage}</dd>
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
