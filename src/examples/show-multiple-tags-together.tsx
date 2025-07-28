import { GoabBadge, GoabBlock } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";

export const ShowMultipleTagsTogether = () => {
  return (
    <>
      <Sandbox>
        <GoabBlock gap="xs">
          <GoabBadge type="information" content="In progress" />
          <GoabBadge type="important" content="Priority" />
          <GoabBadge type="emergency" content="Past deadline" />
        </GoabBlock>
      </Sandbox>
    </>
  );
};

export default ShowMultipleTagsTogether;
