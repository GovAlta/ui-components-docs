import {
  GoabBadge,
  GoabBlock,
} from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { BadgeShowStatusInTableExample } from "@examples/badge/BadgeShowStatusInTableExample.tsx";
import { BadgeShowStatusOnCardExample } from "@examples/badge/BadgeShowStatusOnCardExample.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export default function BadgeExamples() {
  return (
    <>

      <SandboxHeader
        exampleTitle="Show status in a table"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6304-22364&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <BadgeShowStatusInTableExample />

      <SandboxHeader
        exampleTitle="Show multiple tags together"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=60735-375622&t=tGwTYaG8Orm4iOm7-4">
      </SandboxHeader>
      <Sandbox>
        <GoabBlock gap="xs">
          <GoabBadge type="information" content="In progress" />
          <GoabBadge type="important" content="Priority" />
          <GoabBadge type="emergency" content="Past deadline" />
        </GoabBlock>
      </Sandbox>

      <SandboxHeader
        exampleTitle="Show a status on a card"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6304-22768&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <BadgeShowStatusOnCardExample/>
    </>
  );
}
