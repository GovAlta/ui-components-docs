import {
  GoabBadge,
  GoabBlock,
} from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";
import { BadgeShowStatusInTableExample } from "@examples/badge/BadgeShowStatusInTableExample.tsx";
import { BadgeShowStatusOnCardExample } from "@examples/badge/BadgeShowStatusOnCardExample.tsx";

export default function BadgeExamples() {
  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>

      <h3 id="component-example-show-status-table">Show status in a table</h3>
      <BadgeShowStatusInTableExample/>

      <h3 id="component-example-multiple-tags-together">Show multiple tags together</h3>
      <Sandbox>
        <GoabBlock>
          <GoabBadge type="information" content="In progress" />
          <GoabBadge type="important" content="Priority" />
          <GoabBadge type="emergency" content="Past deadline" />
        </GoabBlock>
      </Sandbox>

      <h3 id="component-example-show-status-card">Show a status on a card</h3>
      <BadgeShowStatusOnCardExample/>
    </>
  );
}
