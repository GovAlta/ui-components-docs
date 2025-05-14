import { Sandbox } from "@components/sandbox";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { GoabLink } from "@abgov/react-components";

export const LinkExamples = () => {
  return (
    <>
      <SandboxHeader exampleTitle="Link to an external page">
      </SandboxHeader>

      <Sandbox>
        <GoabLink trailingIcon="open">
          <a href="#external-url">External link</a>
        </GoabLink>
      </Sandbox>
    </>
  );
}