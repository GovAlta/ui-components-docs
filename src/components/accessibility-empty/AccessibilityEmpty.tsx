import { GoAContainer, GoAText } from "@abgov/react-components";

  export interface Props {
    figmaLink: string;
  }
  export function AccessibilityEmpty(props: Props) {
    return (
    <div className="accessibility-empty">
      <GoAContainer type="non-interactive" accent="filled" padding="relaxed" width="content">
        <GoAText size="body-m" mt="none">
          Accessibility documentation for this component can be found on it's {" "}
          <a href={props.figmaLink} target="_blank" rel="noreferrer">
            component&nbsp;page&nbsp;in&nbsp;Figma.
          </a>{" "}
        </GoAText>
        <GoAText size="body-m" mb="none">
          More accessibility guidance for design and development is coming soon.
        </GoAText>
      </GoAContainer>
    </div>
  );
}