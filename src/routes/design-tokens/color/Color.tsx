import { GoabContainer, GoabGrid, GoabTable, GoabText } from "@abgov/react-components";
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
      <>
        {colors.map((color, index) => (
          <div key={index} className="color-section">
            <GoabText size="heading-m" mt="2xl" mb="m">
              {" "}
              {color.name}{" "}
            </GoabText>
            <GoabTable width="100%">
              <thead>
                <tr>
                  <th></th>
                  <th>Design token</th>
                  <th>Hex code</th>
                  <th>Figma</th>
                </tr>
              </thead>
              <tbody>
                {color.tokens.map((token, tokenIndex) => (
                  <tr key={tokenIndex}>
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

                    {/*
                    <td>
                      {token.description && (
                        <GoabDetails heading="View">
                          {token.description}
                        </GoabDetails>
                      )}
                    </td>
                    */}
                  </tr>
                ))}
              </tbody>
            </GoabTable>
          </div>
        ))}
      </>
    );
  };

  const renderTablet = () => {
    return (
      <section>
        {colors.map((color, index) => (
          <React.Fragment key={index}>
            <h3 id={color.name.toLowerCase()} className="category">
              {color.name}
            </h3>

            <GoabGrid minChildWidth="22rem" gap="l">
              {color.tokens.map((token, tokenIndex) => (
                <GoabContainer key={tokenIndex}>
                  <div
                    className="token-block"
                    style={{
                      backgroundColor: getCssVarValue(`--${token.code}`) || token.value,
                    }}
                  />
                  <TokenSnippet className="mobile-token-view" code={token.code} />
                  <dl>
                    <dt>Hex value</dt> <dd className="dd-style">{token.value}</dd>
                    <dt>Figma colour style</dt>{" "}
                    <dd className="dd-style">{token.figmaColorStyle}</dd>
                    <dt>Description</dt> <dd className="dd-style">{token.description}</dd>
                  </dl>
                </GoabContainer>
              ))}
            </GoabGrid>
          </React.Fragment>
        ))}
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
