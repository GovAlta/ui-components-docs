import { GoAContainer, GoAGrid, GoATable } from "@abgov/react-components";
import { TokenSnippet } from "@components/token-snippet/TokenSnippet";
import "./Color.css";
import COLORS from "./colors.json";
import React, { useContext } from "react";
import { DeviceWidthContext } from "../../../contexts/DeviceWidthContext";
import { getCssVarValue } from "../../../utils/styling";

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
  const { isDesktop, isMobile } = useContext(DeviceWidthContext);
  return (
    <div className="colors-page">
      <h1>Color</h1>
      <h3 className="introduction">
        Our design system has a wide range of color design tokens to ensure
        brand consistency. Tokens are semantically named to make it easier for
        easy application by both developers and designers.
      </h3>
      {isDesktop ? (
        <GoATable variant="normal">
          <thead>
            <tr>
              <th>Type</th>
              <th></th>
              <th>Token</th>
              <th>Hex value</th>
              <th>Figma colour style</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {colors.map((color, index) => (
              <React.Fragment key={index}>
                {color.tokens.map((token, tokenIndex) => (
                  <tr key={tokenIndex}>
                    {tokenIndex === 0 && (
                      <td rowSpan={color.tokens.length}>{color.name}</td>
                    )}
                    <td>
                      <div
                        className="token-block"
                        style={{
                          backgroundColor:
                            getCssVarValue(`--${token.code}`) || token.value,
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
        </GoATable>
      ) : (
        <section>
          {!isMobile && (
            <GoAGrid minChildWidth="15rem" gap="m">
              {colors.map((color, index) => (
                <a key={index} href={`#${color.name.toLowerCase()}`}>
                  {color.name}
                </a>
              ))}
            </GoAGrid>
          )}
          {colors.map((color, index) => (
            <React.Fragment key={index}>
              <p id={color.name.toLowerCase()} className="category">
                {color.name}
              </p>
              <GoAGrid minChildWidth="22rem" gap="xl">
                {color.tokens.map((token, tokenIndex) => (
                  <GoAContainer key={tokenIndex}>
                    <dl>
                      <div>
                        <div
                          className="token-block"
                          style={{
                            backgroundColor:
                              getCssVarValue(`--${token.code}`) || token.value,
                          }}
                        />
                      </div>
                      <TokenSnippet code={token.code} />
                      <dt>Hex value</dt>
                      <dd>{token.value}</dd>
                      <dt>Figma colour style</dt>
                      <dd>{token.figmaColorStyle}</dd>
                      <dt>Description</dt>
                      <dd>{token.description}</dd>
                    </dl>
                  </GoAContainer>
                ))}
              </GoAGrid>
            </React.Fragment>
          ))}
        </section>
      )}
    </div>
  );
}
