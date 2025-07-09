import { GoabMicrositeHeader } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";

export default function ShowVersionNumberExample() {

  return (
    <>
      <Sandbox fullWidth skipRender>
        {/* ...React + Angular code snippets here (same as original)... */}
        <GoabMicrositeHeader
          type="alpha"
          version={
            <>
              <span>Slotted <b>version text</b>.</span>
              <span>v1.23</span>
            </>
          }
        />
      </Sandbox>
    </>
  );
}