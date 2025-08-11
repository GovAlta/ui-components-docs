import { useContext } from "react";
import { GoabContainer, GoabGrid, GoabTable, GoabText } from "@abgov/react-components";
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
      tokenName: "goa-border-width-none",
      rem: "0rem",
      px: "0px",
      figmaUsage: "Border-width/None",
    },
    {
      tokenName: "goa-border-width-2xs",
      rem: "0.03125rem",
      px: "0.5px",
      figmaUsage: "Border-width/2XSmall",
    },
    {
      tokenName: "goa-border-width-xs",
      rem: "0.04375rem",
      px: "0.7px",
      figmaUsage: "Border-width/XSmall",
    },
    {
      tokenName: "goa-border-width-s",
      rem: "0.0625rem",
      px: "1px",
      figmaUsage: "Border-width/Small",
    },
    {
      tokenName: "goa-border-width-m",
      rem: "0.125rem",
      px: "2px",
      figmaUsage: "Border-width/Medium",
    },
    {
      tokenName: "goa-border-width-l",
      rem: "0.1875rem",
      px: "3px",
      figmaUsage: "Border-width/Large",
    },
    {
      tokenName: "goa-border-width-xl",
      rem: "0.25rem",
      px: "4px",
      figmaUsage: "Border-width/XLarge",
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
      <GoabGrid minChildWidth="22rem" gap="l">
        {getTokenGroups(tokens).map(group =>
          group.map((token, idx) => (
            <GoabContainer key={idx}>
              <div
                className="token-block"
                style={{
                  height: getCssVarValue(`--${token.tokenName}`),
                }}
              />
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
    <ComponentContent contentClassName="border-width-page">
      <GoabText size="heading-xl" mb="m" mt="xl">Border Width</GoabText>
      {isDesktop ? renderDesktop() : renderMobile()}
    </ComponentContent>
  );
}
