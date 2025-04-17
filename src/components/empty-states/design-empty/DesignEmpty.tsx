import { GoabContainer, GoabText } from "@abgov/react-components";

export interface Props {
  figmaLink: string;
}
export function DesignEmpty(props: Props) {
  return (
    <div className="design-empty">

      <GoabContainer type="non-interactive" accent="filled" padding="relaxed" width="content">
        <GoabText size="body-m" mb="none" mt="none">
          Detailed design documentation for this component can be found on it's {" "}
          <a href={props.figmaLink} target="_blank" rel="noreferrer">
            component&nbsp;page&nbsp;in&nbsp;Figma.
          </a>{" "}
        </GoabText>
      </GoabContainer>
    </div>
  );
}