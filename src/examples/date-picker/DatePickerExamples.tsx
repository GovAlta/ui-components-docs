import { TodayDatePickerField } from "@examples/choose-a-date.tsx";
import { ResetDatePickerField } from "@examples/reset-date-picker-field.tsx";
import { DateOfBirth } from "@examples/date-of-birth.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useContext } from "react";

export const DatePickerExamples = () => {
  const { version } = useContext(LanguageVersionContext);

  return (
    <>
      <SandboxHeader
        exampleTitle="Choose a date"
        figmaExample="">
      </SandboxHeader>
      < TodayDatePickerField />    

      <SandboxHeader
        exampleTitle="Reset example"
        figmaExample="">
      </SandboxHeader>
      <ResetDatePickerField />

      {version === "new" && (
        <>
          <SandboxHeader
            exampleTitle="Date of birth"
            figmaExample="https://www.figma.com/design/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?node-id=1896-179590&m=dev">
          </SandboxHeader>
          < DateOfBirth />    
        </>
      )}
    </>
  )
}
