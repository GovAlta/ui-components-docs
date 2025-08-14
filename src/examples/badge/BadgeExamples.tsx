import { ShowStatusInATable } from "@examples/show-status-in-a-table.tsx";
import { ShowMultipleTagsTogether } from "@examples/show-multiple-tags-together.tsx";
import { ShowStatusOnACard } from "@examples/show-status-on-a-card.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export default function BadgeExamples() {
  return (
    <>
      <SandboxHeader
        exampleTitle="Show status in a table"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6304-22364&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <ShowStatusInATable />

      <SandboxHeader
        exampleTitle="Show multiple tags together"
        figmaExample="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=60735-375622&t=tGwTYaG8Orm4iOm7-4">
      </SandboxHeader>
      <ShowMultipleTagsTogether />

      <SandboxHeader
        exampleTitle="Show a status on a card"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6304-22768&t=X0IQW5flDDaj8Vyg-4">
      </SandboxHeader>
      <ShowStatusOnACard />
    </>
  );
}
