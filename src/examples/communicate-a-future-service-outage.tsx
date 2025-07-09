import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabNotification  } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const CommunicateAFutureServiceOutage = () => {
  const {version} = useContext(LanguageVersionContext);
  return (
    <>
      <Sandbox fullWidth allow={['h2', 'h3', 'p']} skipRender>
        {/*Angular code*/}
        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <goa-notification type="important">
              Our system will be under maintenance from Thursday, September 15, 2025 at 10 pm to Friday, September 16, 2025 at 10 am. If you have questions or concerns, contact us at <a href="mailto:support@example.com">support@example.com</a>. 
            </goa-notification>
          `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <goab-notification type="important">
              Our system will be under maintenance from Thursday, September 15, 2025 at 10 pm to Friday, September 16, 2025 at 10 am. If you have questions or concerns, contact us at <a href="mailto:support@example.com">support@example.com</a>. 
            </goab-notification>
          `}
        />}

        {/*React code*/}
        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <GoaNotification type="important">
              Our system will be under maintenance from Thursday, September 15, 2025 at 10 pm to Friday, September 16, 2025 at 10 am. If you have questions or concerns, contact us at <a href="mailto:support@example.com">support@example.com</a>. 
            </GoaNotification>
          `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <GoabNotification type="important">
              Our system will be under maintenance from Thursday, September 15, 2025 at 10 pm to Friday, September 16, 2025 at 10 am. If you have questions or concerns, contact us at <a href="mailto:support@example.com">support@example.com</a>. 
            </GoabNotification>
          `}
        />}

          <GoabNotification type="important">
          Our system will be under maintenance from Thursday, September 15, 2025 at 10 pm 
          to Friday, September 16, 2025 at 10 am. If you have questions or concerns, 
          contact us at <a href="mailto:support@example.com">support@example.com</a>. 
          </GoabNotification>
      </Sandbox>
    </>
  )
}

export default CommunicateAFutureServiceOutage;
