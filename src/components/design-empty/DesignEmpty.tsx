import { GoAContainer, GoAText } from "@abgov/react-components";
import "./DesignEmpty.css";

  export interface Props {
    figmaLink: string;
  }
  export function DesignEmpty(props: Props) {
    return (
    <div className="design-empty">

      <GoAContainer type="non-interactive" accent="filled" padding="relaxed" width="content">
        <GoAText size="body-m" mb="none">
          Detailed design documentation for this component can be found on it's {" "}
        <a href={props.figmaLink} target="_blank" rel="noreferrer">
          component&nbsp;page&nbsp;in&nbsp;Figma.
        </a>{" "}
        </GoAText>
      </GoAContainer>
    </div>
  );
};
