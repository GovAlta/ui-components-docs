import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { CommunicateAFutureServiceOutage } from "@examples/communicate-a-future-service-outage.tsx";

export const NotificationExamples = () => {
  return (
    <>
      <SandboxHeader
        exampleTitle="Communicate a future service outage"
        figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=6311-93778&t=sWyB4A2UXCb9rn2W-1">
      </SandboxHeader>
      <CommunicateAFutureServiceOutage />
    </>
  )
}
