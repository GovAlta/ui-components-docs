import {
  GoAContainer,
  GoAGrid,
  GoAIcon,
  GoATable,
} from "@abgov/react-components";
import { TokenSnippet } from "@components/token-snippet/TokenSnippet";
import "./IconSize.css";
import { getTokenGroups } from "../getTokenGroups";
import { IconSize } from "@abgov/react-components/lib/icon/icon";
import { Token } from "../token";
import { useContext } from "react";
import { DeviceWidthContext } from "../../../contexts/DeviceWidthContext";

interface IconSizeToken extends Token {
  size: IconSize | string;
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

  return (
    <div className="icon-size">
      <h1>Icon size</h1>
      {isDesktop ? (
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
                  <div className={`icon ${token.tokenName}`}>
                    <GoAIcon type="add" size={token.size as IconSize}></GoAIcon>
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
        </GoATable>
      ) : (
        <GoAGrid minChildWidth="22rem" gap="xl">
          {getTokenGroups(tokens).map((group) =>
            group.map((token: IconSizeToken, idx: number) => (
              <GoAContainer key={idx}>
                <dl>
                  <div className={`icon ${token.tokenName}`}>
                    <GoAIcon type="add" size={token.size as IconSize}></GoAIcon>
                  </div>
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
            ))
          )}
        </GoAGrid>
      )}
    </div>
  );
}