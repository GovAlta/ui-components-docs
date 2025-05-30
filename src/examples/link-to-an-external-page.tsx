import { Sandbox } from "@components/sandbox";
import { GoabLink } from "@abgov/react-components";

export const LinkToAnExternalPage = () => {
  return (
    <>
      <Sandbox>
        <GoabLink trailingIcon="open">
          <a href="#external-url">External link</a>
        </GoabLink>
      </Sandbox>
    </>
  );
};

export default LinkToAnExternalPage;