import { useContext } from "react";
import { GoAContainer, GoAGrid, GoATable } from "@abgov/react-components";
import { TokenSnippet } from "@components/token-snippet/TokenSnippet";
import "./BorderRadius.css";
import { Token } from "../token";
import { getTokenGroups } from "../getTokenGroups";
import { DeviceWidthContext } from "../../../contexts/DeviceWidthContext";
import { getCssVarValue } from "../../../utils/styling";

export default function BorderRadiusPage() {
  const tokens: Token[] = [
    {
      tokenName: "goa-border-radius-none",
      rem: "0rem",
      px: "0px",
      figmaUsage: "Use a border radius of 0px.",
    },
    {
      tokenName: "goa-border-radius-m",
      rem: "0.25rem",
      px: "4px",
      figmaUsage: "Use a border radius of 4px.",
    },
  ];
  const { isDesktop } = useContext(DeviceWidthContext);

  return (
    <div className="border-radius-page">
      <h1>Border Radius</h1>
      {isDesktop ? (
        <section>
          <GoATable variant="normal">
            <thead>
              <tr>
                <th></th>
                <th>Token name</th>
                <th>REM</th>
                <th>PX</th>
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
                        borderRadius: getCssVarValue(`--${token.tokenName}`),
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
          </GoATable>
        </section>
      ) : (
        <section>
          <GoAGrid minChildWidth="22rem" gap="xl">
            {getTokenGroups(tokens).map((group) =>
              group.map((token, idx) => (
                <>
                  <GoAContainer key={idx}>
                    <dl>
                      <dd>
                        <div
                          className="token-block"
                          style={{
                            borderRadius: getCssVarValue(
                              `--${token.tokenName}`
                            ),
                          }}
                        />
                      </dd>
                      <dd>
                        <TokenSnippet code={token.tokenName} />
                      </dd>
                      <dt>REM</dt>
                      <dd>{token.rem}</dd>
                      <dt>PX</dt>
                      <dd>{token.px}</dd>
                      <dt>Figma usage</dt>
                      <dd>{token.figmaUsage}</dd>
                    </dl>
                  </GoAContainer>
                </>
              ))
            )}
          </GoAGrid>
        </section>
      )}
    </div>
  );
}
