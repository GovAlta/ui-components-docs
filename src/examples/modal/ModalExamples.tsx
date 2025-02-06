import "./modal-examples.css";
import { ModalBasicExample } from "@examples/modal/ModalBasicExample.tsx";
import { ModalConfirmDestructiveActionExample } from "@examples/modal/ModalConfirmDestructiveActionExample.tsx";
import { ModalWarnUserDeadlineExample } from "@examples/modal/ModalWarnUserDeadlineExample.tsx";
import { ModalConfirmRecordChangeExample } from "@examples/modal/ModalConfirmRecordChangeExample.tsx";
import { ModalAddAnotherItemExample } from "@examples/modal/ModalAddAnotherItemExample.tsx";
import { ModalRouteChangeExample } from "@examples/modal/ModalRouteChangeExample.tsx";

export default function ModalExamples() {
  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>
      <h3 id="component-example-basic">Basic Modal</h3>
      <ModalBasicExample/>

      <h3 id="component-example-destructive">Confirm a destructive action</h3>
      <ModalConfirmDestructiveActionExample/>

      <h3 id="component-example-warning">Warn a user of a deadline</h3>
      <ModalWarnUserDeadlineExample/>

      <h3 id="component-example-with-input">Confirm record change</h3>
      <ModalConfirmRecordChangeExample/>

      <h3 id="component-example-add-item">Add another item</h3>
      <ModalAddAnotherItemExample/>

      <h3 id="component-example-route-change">Route changes</h3>
      <ModalRouteChangeExample/>
    </>
  );
}
