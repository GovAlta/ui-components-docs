import { GoabContainer, GoabGrid, GoabTable } from "@abgov/react-components";
import { TokenSnippet } from "@components/token-snippet/TokenSnippet";
import "./Color.css";
import COLORS from "./colors.json";
import React, { useContext } from "react";
import { DeviceWidthContext } from "@contexts/DeviceWidthContext";
import { getCssVarValue } from "../../../utils/styling";
import { ComponentContent } from "@components/component-content/ComponentContent";

interface Token {
  code: string;
  value: string;
  figmaColorStyle: string;
  description: string;
}

interface Color {
  name: string;
  tokens: Token[];
}

export default function ColorPage() {
  const colors: Color[] = COLORS;
  const { isDesktop } = useContext(DeviceWidthContext);

  const renderDesktop = () => {
    return (
      <GoabTable variant="normal" width="100%">
        <thead>
          <tr>
            <th>Type</th>
            <th></th>
            <th>Token</th>
            <th>Hex value</th>
            <th>Figma color style</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {colors.map((color, index) => (
            <React.Fragment key={index}>
              {color.tokens.map((token, tokenIndex) => (
                <tr key={tokenIndex}>
                  {tokenIndex === 0 && <td rowSpan={color.tokens.length}>{color.name}</td>}
                  <td>
                    <div
                      className="token-block"
                      style={{
                        backgroundColor: getCssVarValue(`--${token.code}`) || token.value,
                      }}
                    />
                  </td>
                  <td>
                    <TokenSnippet code={token.code} />
                  </td>
                  <td>{token.value}</td>
                  <td>{token.figmaColorStyle}</td>
                  <td>{token.description}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </GoabTable>
    );
  };

  const renderTablet = () => {
    return (
      <section>
        <>
        {colors.map((color, index) => (
          <React.Fragment key={index}>
            <h3 id={color.name.toLowerCase()} className="category">
              {color.name}
            </h3>

            <GoabGrid minChildWidth="22rem" gap="xl">
              {color.tokens.map((token, tokenIndex) => (
                <GoabContainer key={tokenIndex}>
                  <div
                    className="token-block"
                    style={{
                      backgroundColor: getCssVarValue(`--${token.code}`) || token.value,
                    }}
                  />
                  <TokenSnippet code={token.code} />
                  <dl>
                    <dt>Hex value</dt> <dd>{token.value}</dd>
                    <dt>Figma colour style</dt> <dd>{token.figmaColorStyle}</dd>
                    <dt>Description</dt> <dd>{token.description}</dd>
                  </dl>
                </GoabContainer>
              ))}
            </GoabGrid>
          </React.Fragment>
        ))}
        </>
      </section>
    );
  };

  return (
    <ComponentContent contentClassName="colors-page">
      <h1>Color</h1>
      {isDesktop ? renderDesktop() : renderTablet()}
    </ComponentContent>
  );
}
