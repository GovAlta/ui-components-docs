import { GoabContainer, GoabText } from "@abgov/react-components";

export interface Props {
  figmaLink: string;
}
export function AccessibilityEmpty(props: Props) {
  return (
    <div className="accessibility-empty">
      <GoabContainer type="non-interactive" accent="filled" padding="relaxed" width="content">
        <GoabText size="body-m" mt="none">
          Accessibility documentation for this component can be found on its {" "}
          <a href={props.figmaLink} target="_blank" rel="noreferrer">
            component&nbsp;page&nbsp;in&nbsp;Figma.
          </a>{" "}
        </GoabText>
        <GoabText size="body-m" mb="none" mt="none">
          More accessibility guidance for design and development is coming soon.
        </GoabText>
      </GoabContainer>
    </div>
  );
}