import { TodayDatePickerField } from "@examples/choose-a-date.tsx";
import { ResetDatePickerField } from "@examples/reset-date-picker-field.tsx";
import { SandboxHeader } from "@components/sandbox/sandbox-header/sandboxHeader.tsx";

export const DatePickerExamples = () => {
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
    </>
  )
}
