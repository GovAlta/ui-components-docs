import { Sandbox } from "@components/sandbox";
import { GoabFormItem, GoabDatePicker } from "@abgov/react-components";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export const DateOfBirth = () => {
  return (
    <Sandbox skipRender>
      <GoabFormItem label="Date of birth">
        <GoabDatePicker type="input" />
      </GoabFormItem>

      <CodeSnippet
        lang="html"
        tags="angular"
        allowCopy={true}
        code=
          {`
            <goab-form-item label="Date of birth">
              <goab-date-picker type="input" />
            </goab-form-item>
          `}
      />

      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code=
          {`
            <GoabFormItem label="Date of birth">
              <GoabDatePicker type="input" />
            </GoabFormItem>
          `}
      />
    </Sandbox>
  )
}

export default DateOfBirth;