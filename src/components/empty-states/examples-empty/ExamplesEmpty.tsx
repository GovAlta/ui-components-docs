import { GoabContainer, GoabText } from "@abgov/react-components";

export function ExamplesEmpty( ) {
  return (
    <div className="examples-empty">
      <GoabContainer type="non-interactive" accent="filled" padding="relaxed" width="content">
        <GoabText size="body-m" mt="none" mb="none">
          We are currently collecting contextual service examples for this component to provide as a starting point in both Figma and code libraries. To contribute examples from your service {" "}
          <a href="/get-started/support" rel="noreferrer">
            talk&nbsp;to&nbsp;the&nbsp;design&nbsp;system&nbsp;team.
          </a>{" "}
        </GoabText>
      </GoabContainer>
    </div>
  );
}