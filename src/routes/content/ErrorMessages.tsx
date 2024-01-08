import { DoDont } from "@components/do-dont/DoDont";
import {
  GoACheckbox,
  GoADivider,
  GoAFormItem,
  GoAGrid,
  GoAInput,
  GoARadioGroup,
  GoARadioItem,
} from "@abgov/react-components";
import { Link } from "react-router-dom";

export default function ErrorMessagesPage() {
  const noop = () => {};
  return (
    <>
      <h1>Error messages</h1>
      <h3>Error messages appear when the user’s proposed action fails.</h3>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <GoAGrid minChildWidth="40ch" gap="3xl">
        <GoAFormItem
          label="First name"
          helpText="Enter your legal name."
          error="Error message"
          key=".0">
          <GoAInput onChange={noop} name="firstName" value="" error></GoAInput>
        </GoAFormItem>
        <GoAFormItem
          label="How would you prefer to be contacted"
          labelSize="regular"
          error="Error message">
          <GoARadioGroup name="item" value="1" onChange={noop} error>
            <GoARadioItem value="1" label="Email"></GoARadioItem>
            <GoARadioItem value="2" label="Phone"></GoARadioItem>
            <GoARadioItem value="3" label="Text message"></GoARadioItem>
          </GoARadioGroup>
        </GoAFormItem>
        <GoAFormItem label="Tuition" error="Tuition cost must be lower than $5,000." key=".0">
          <GoAInput
            name="input"
            value="5420.00"
            prefix="$"
            suffix="per semester"
            onChange={noop}
            error
          />
        </GoAFormItem>
        <GoAFormItem
          label="Acknowledgment"
          labelSize="regular"
          error="Confirm the information accuracy.">
          <GoACheckbox
            name="item"
            text="I confirm the contact information is correct."
            onChange={noop}
            error
            checked={false}></GoACheckbox>
        </GoAFormItem>
      </GoAGrid>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <h2 id="anatomy">Anatomy</h2>
      <p>
        When a user inputs an unexpected value in the input field, an error message will appear
        below the field followed by a 16 pixels error icon. Both the icon and the error text are in
        red. The input field frame is displayed in red.
      </p>
      <h3>Helper text</h3>
      <p>
        When helper text and error message are both shown, the error message always appears above
        the helper text.
      </p>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch" gap="2xl">
          <DoDont type="do" description="Place error message above helper text.">
            <img src="/images/error-messages/helper-text-do.png" width="80%"></img>
          </DoDont>
          <DoDont type="dont" description="Hide the helper text when there is an error.">
            <img src="/images/error-messages/helper-text-dont.png" width="80%"></img>
          </DoDont>
        </GoAGrid>
      </div>
      <h3>Border</h3>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch" gap="2xl">
          <DoDont type="do" description="Display input field border in red when there is an error.">
            <img src="/images/error-messages/border-do.png" width="80%"></img>
          </DoDont>
          <DoDont
            type="dont"
            description="Display the input field border in any other colour when there is an error.">
            <img src="/images/error-messages/border-dont.png" width="80%"></img>
          </DoDont>
        </GoAGrid>
      </div>
      <h3>Button/upload area</h3>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch" gap="2xl">
          <DoDont type="do" description="Display an error message below the upload button.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/error-messages/upload-button-do.png" width="100px"></img>
            </div>
          </DoDont>
          <DoDont
            type="dont"
            description="Add a red border to the upload button.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/error-messages/upload-button-dont.png" width="100px"></img>
            </div>
          </DoDont>
          <DoDont type="do" description="Display an error message below the upload area.">
            <img src="/images/error-messages/upload-area-do.png" width="80%"></img>
          </DoDont>
          <DoDont
            type="dont"
            description="Add a red border to the upload area.">
            <img src="/images/error-messages/upload-area-dont.png" width="80%"></img>
          </DoDont>
        </GoAGrid>
      </div>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <h2 id="language-and-tone">Language and tone</h2>
      <h3>Be clear and concise</h3>
      <p>
        Communicate errors with a brief, clear, positive and solution-oriented approach. Be direct
        and natural.
      </p>
      <h3>Be specific</h3>
      <p>
        Be specific about required information and what users should do to recover from the error.
      </p>
      <h3>Provide a solution</h3>
      <p>
        Always provide a solution to the user through clear instruction. When applicable, provide an
        example.
      </p>
      <h3>Be empathetic</h3>
      <p>
        Speak in a humanized tone to be empathetic to the user. Let the user know that you
        understand their frustration.
      </p>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <h2 id="common-error-message-templates">Common error message templates</h2>
      <p>
        Follow the templates and examples below for common errors to create an error message that
        fits your context.
      </p>
      <GoADivider mb="xl" mt="xl"></GoADivider>
      <h3 id="input-empty">Input is empty</h3>
      <p>This error appears when user leaves a required field blank.</p>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/error-messages/empty-input.png" width="60%"></img>
            </div>
          </DoDont>
        </GoAGrid>
        <GoAGrid minChildWidth="50ch" mt="2xl" gap="2xl">
          <DoDont
            type="do"
            description="Provide a clear solution for the user to correct the error.">
            <div className="example">Enter a first name.</div>
          </DoDont>
          <DoDont
            type="dont"
            description="Show an error without providing a clear solution with actionable language.">
            <div className="example">First name is required.</div>
          </DoDont>
          <DoDont
            type="do"
            description="Be specific, clear, and direct in communicating the required information to the user.">
            <div className="example">Enter an email address.</div>
          </DoDont>
          <DoDont
            type="dont"
            description="Show general errors to the user without including the context.">
            <div className="example">This field is required.</div>
          </DoDont>
        </GoAGrid>
      </div>
      <h3 id="incorrect-information">Incorrect information format</h3>
      <p>
        This error appears when the user fails to input valid/correct information such as entering
        an invalid postal code or phone number.
      </p>
      <p>
        To keep messages clear and concise, provide the solution to the user and include an example
        of a valid entry.
      </p>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch" gap="2xl">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/error-messages/incorrect-information.png" width="60%"></img>
            </div>
          </DoDont>
        </GoAGrid>
        <GoAGrid minChildWidth="50ch" gap="2xl" mt="2xl">
          <DoDont type="do" description="Provide a clear positive solution with an example.">
            <div className="example">
              Enter a valid postal code,
              <br /> such as T3Y 8Y2.
            </div>
          </DoDont>
          <DoDont
            type="dont"
            description="Use a negative structure like “is not correct” or “incorrect”.">
            <div className="example">Postal code entered above is not correct.</div>
          </DoDont>
          <DoDont
            type="do"
            description="Provide an example as to what the user should do and a hint to what the information should look like.">
            <div className="example">
              Enter a valid phone number,
              <br /> such as 403-124-4567.
            </div>
          </DoDont>
          <DoDont
            type="dont"
            description="Provide an error without a solution. Frame the error message with a solution, along with an example of a valid input.">
            <div className="example">Your phone number is not valid.</div>
          </DoDont>
        </GoAGrid>
      </div>
      <h3 id="error-date-input">Error with a date input</h3>
      <p>
        This error appears when the user fails to input a valid/correct date. Date range/duration
        information should be provided in the error message.
      </p>
      <p>
        <Link to="/content/date-format">View more information on date formatting.</Link>
      </p>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/error-messages/error-with-date.png" width="70%"></img>
            </div>
          </DoDont>
        </GoAGrid>
        <GoAGrid minChildWidth="50ch" gap="2xl" mt="2xl">
          <DoDont type="do" description="Provide adequate information.">
            <div className="example">
              The student must be 16 years old or older to be eligible for funding.
            </div>
          </DoDont>
          <DoDont
            type="dont"
            description="Provide inadequate information. This example is not telling the user what age is accepted for funding. ">
            <div className="example">
              The student is younger than 16 years old on the session start date. They are not
              eligible for funding.
            </div>
          </DoDont>
          <DoDont type="do" description="Give the user a clear idea of the acceptable date range. ">
            <div className="example">The study period must be between 3 and 52 weeks.</div>
          </DoDont>
          <DoDont
            type="dont"
            description="Be too wordy. Try to be less wordy, more direct and natural in your message.">
            <div className="example">
              Study period must be longer than 3 and shorter than 52 weeks.
            </div>
          </DoDont>
        </GoAGrid>
      </div>
      <h3 id="error-value-range">Error within a value range</h3>
      <p>This error appears when user fails to input a valid/correct amount.</p>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch">
          <DoDont type="generic" description="*Include amount if known">
            <div style={{ textAlign: "center" }}>
              <img src="/images/error-messages/error-with-range.png" width="60%"></img>
            </div>
          </DoDont>
        </GoAGrid>
        <GoAGrid minChildWidth="30ch" gap="2xl" mt="2xl">
          <DoDont type="do" description="Provide a correct value if it is known.">
            <div className="example">Books and Materials cost must be lower than $4,000.</div>
          </DoDont>
          <DoDont type="dont" description="Show an error without providing a solution.">
            <div className="example">You have exceeded the maximum amount.</div>
          </DoDont>
        </GoAGrid>
      </div>
      <div className="dodont-wrapper">
        <h3 id="error-outside-accepted">Input outside accepted values</h3>
        <GoAGrid minChildWidth="50ch">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/error-messages/input-outside-expected.png" width="60%"></img>
            </div>
          </DoDont>
        </GoAGrid>
        <GoAGrid minChildWidth="50ch" gap="2xl" mt="2xl">
          <DoDont type="do" description="Give a ranged value when possible.">
            <div className="example">PID must be between 10 and 15 digits.</div>
          </DoDont>
          <DoDont
            type="dont"
            description="Provide inadequate solution. This example gives an unclear solution. User only knows that the PID must be at least 10 digit.">
            <div className="example">PID must be at least 10 digits</div>
          </DoDont>
        </GoAGrid>
      </div>
      <h2 id="upload-errors">Upload errors</h2>
      <p>
        When there is an error with the requested file, error message appears below the file upload
        button or area.
      </p>
      <p>
        <Link to="/components/file-uploader">View more information on file upload.</Link>
      </p>
      <p>
        File upload errors can appear when a user does any of the following:
        <ul>
          <li>Wrong file format uploaded.</li>
          <li>File size exceeds the upload limit.</li>
          <li>Upload fails.</li>
          <li>Duplicate file is uploaded.</li>
          <li>Required file is missing.</li>
        </ul>
      </p>
      <h3 id="wrong-file-type">Wrong file type</h3>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/error-messages/wrong-file-types.png" width="60%"></img>
            </div>
          </DoDont>
        </GoAGrid>
        <GoAGrid minChildWidth="50ch" gap="2xl" mt="2xl">
          <DoDont type="do" description="Provide user with the list of accepted formats.">
            <div className="example">The selected file must be a PDF, JPG, PNG, or TIFF.</div>
          </DoDont>
          <DoDont type="dont" description="Use wordy and negative structure.">
            <div className="example">
              Unsupported file format. Please try again with below mentioned formats. PDF, JPEG, PNG
              or TIFF file type(s).
            </div>
          </DoDont>
        </GoAGrid>
      </div>
      <h3 id="file-too-large">File too large</h3>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/error-messages/file-too-large.png" width="60%"></img>
            </div>
          </DoDont>
        </GoAGrid>
        <GoAGrid minChildWidth="50ch" gap="2xl" mt="2xl">
          <DoDont type="do" description="Provide user with the exact file size limit.">
            <div className="example">The selected file must be less than 5MB.</div>
          </DoDont>
          <DoDont
            type="dont"
            description="Give the user an error without unclear instruction on how to be successful.">
            <div className="example">File size over limit. Please try again.</div>
          </DoDont>
        </GoAGrid>
      </div>

      <h3 id="upload-failed">File upload failed</h3>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/error-messages/file-upload-failed.png" width="70%"></img>
            </div>
          </DoDont>
        </GoAGrid>
        <GoAGrid minChildWidth="50ch" gap="2xl" mt="2xl">
          <DoDont
            type="do"
            description="Use humanized tone when stating the problem. In this example, the service accepts the responsibility for the failed upload and eases the frustration that user might feel.">
            <div className="example">
              We experienced an error while uploading your file. Please try again.
            </div>
          </DoDont>
          <DoDont
            type="dont"
            description="Use blunt language. This example is not taking responsibility for the failed upload, and is passively blaming the user.">
            <div className="example">File upload failed. Please try again.</div>
          </DoDont>
        </GoAGrid>
      </div>
      <h3 id="duplicate-upload">Duplicate file uploaded</h3>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/error-messages/duplicate-file-upload.png" width="70%"></img>
            </div>
          </DoDont>
        </GoAGrid>
        <GoAGrid minChildWidth="50ch" gap="2xl" mt="2xl">
          <DoDont
            type="do"
            description="State the problem in a clear language and provide a solution as to what action should be taken.">
            <div className="example">
              This file is already uploaded. Please upload a different one.
            </div>
          </DoDont>
          <DoDont
            type="dont"
            description="State unclear problem. This example has a negative structure (“are not”) and does not guide the user to a solution.">
            <div className="example">Duplicate files are not accepted. Please try again.</div>
          </DoDont>
        </GoAGrid>
      </div>
      <div className="dodont-wrapper">
        <h3 id="no-file-selected">No file selected</h3>
        <GoAGrid minChildWidth="50ch">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/error-messages/no-file-selected.png" width="60%"></img>
            </div>
          </DoDont>
        </GoAGrid>
        <GoAGrid minChildWidth="50ch" gap="2xl" mt="2xl">
          <DoDont type="do" description="Provide a clear solution as to what user should do.">
            <div className="example">Upload a work permit.</div>
          </DoDont>
          <DoDont
            type="dont"
            description="Provide an error without additional context as to what is required to be successful.">
            <div className="example">Document required</div>
          </DoDont>
        </GoAGrid>
      </div>

      <h3 id="invalid-characters">Invalid characters used</h3>
      <p>
        This error appears when user inputs invalid characters. To keep messages clear and concise,
        provide a guided solution.
      </p>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/error-messages/invalid-characters.png" width="60%"></img>
            </div>
          </DoDont>
        </GoAGrid>
        <GoAGrid minChildWidth="50ch" gap="2xl" mt="2xl">
          <DoDont
            type="do"
            description="Display valid characters when possible. This example also conveys the accepted letters case to the users.">
            <div className="example">
              You may only use Aa-Zz, 0-9, accents, a period, apostrophe, hyphen, and space.
            </div>
          </DoDont>
          <DoDont type="dont" description="State the guided solution in two parts.">
            <div className="example">
              You may only use letters, numbers and the following special characters; accents, a
              period, apostrophe, hyphen or space.
            </div>
          </DoDont>
        </GoAGrid>
      </div>

      <p>When the accepted characters are known, include an example in the error message.</p>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch">
          <DoDont type="generic" description="*Use “only” when relevant.">
            <div style={{ textAlign: "center" }}>
              <img src="/images/error-messages/invalid-characters-2.png" width="80%"></img>
            </div>
          </DoDont>
        </GoAGrid>
        <GoAGrid minChildWidth="50ch" gap="2xl" mt="2xl">
          <DoDont type="do" description="Provide clear guided solution.">
            <div className="example">
              Alberta Bar ID must include numbers only, such as “12345.”
            </div>
          </DoDont>
          <DoDont type="dont" description="Use wordy and confusing language.">
            <div className="example">
              The Alberta Bar ID must consist of numerical digits only e.g. 12345
            </div>
          </DoDont>
        </GoAGrid>
      </div>
      <h3 id="incorrect-number-of-characters">Incorrect number of characters</h3>
      <div className="dodont-wrapper">
        <GoAGrid minChildWidth="50ch">
          <DoDont type="generic">
            <div style={{ textAlign: "center" }}>
              <img src="/images/error-messages/invalid-number-of-characters.png" width="60%"></img>
            </div>
          </DoDont>
        </GoAGrid>
        <GoAGrid minChildWidth="50ch" gap="2xl" mt="2xl">
          <DoDont type="do" description="Provide a clear guided solution with context.">
            <div className="example">The Mobius reference number must be 10 digits.</div>
          </DoDont>
          <DoDont type="dont" description="Display numbers in letters.">
            <div className="example">Ensure Mobius reference number is ten digits.</div>
          </DoDont>
        </GoAGrid>
      </div>
    </>
  );
}
