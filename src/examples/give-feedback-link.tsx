import { GoabMicrositeHeader } from "@abgov/react-components";
import { Sandbox } from "@components/sandbox";

export default function GiveFeedbackLinkExample() {
  const onClick = () => {
    console.log("Feedback clicked");
    alert("Thank you for your feedback!");
  };
  return (
    <>

      <Sandbox fullWidth skipRender>
        <GoabMicrositeHeader type="alpha" onFeedbackClick={onClick} />
        {/* ...React + Angular code snippets here (same as original)... */}
      </Sandbox>
    </>
  );
}

