import {
  GoABlock,
  GoAButton,
  GoACallout,
  GoADetails,
  GoAFormItem,
  GoAInput,
  GoARadioItem,
  GoARadioGroup,
  GoATextArea
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import { useNavigate } from "react-router-dom";
  
export default function ReportBugPage() {
  interface Package {
    name: string;
    location: string;
  }

  let navigate = useNavigate();
  
  const packages: Package[] = [
    {
      name: "web",
      location: "/@abgov/web-components"
    },
    {
      name: "angular",
      location: "/@abgov/angular-components"
    },
    {
      name: "react",
      location: "/@abgov/react-components"
    }
  ]
  const [formValues, setFormValues] = useState({
    email: "",
    webVersion: "",
    otherVersion: "",
    expected: "",
    actual: "",
    replication: "",
    stackblitz: "",
    jam: "",
    additional: ""
  })
  const [versions, setVersions] = useState({
    react: "",
    angular: "",
    web: ""
  })

  const [emailError, setEmailError] = useState<string>();
  const [webVersionError, setWebVersionError] = useState<string>();
  const [otherVersionError, setOtherVersionError] = useState<string>();
  const [expectedError, setExpectedError] = useState<string>();
  const [actualError, setActualError] = useState<string>();
  const [replicationError, setReplicationError] = useState<string>();
  const [stackblitzError, setStackblitzError] = useState<string>();
  const [jamError, setJamError] = useState<string>();
  const [responseURL, setResponseURL] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [issueSelection, setIssueSelection] = useState<string>("")

  function bugOrFeature(_: string, value: string) {
    setIssueSelection(value);
  }

  function openPage() {
    setFormSubmitted(false);
    setFormValues({
      email: "",
      webVersion: "",
      otherVersion: "",
      expected: "",
      actual: "",
      replication: "",
      stackblitz: "",
      jam: "",
      additional: ""
    })

    if (issueSelection === "bug") {
      navigate("/get-started/support/report-bug");
    } else {
      navigate("/get-started/support/request-feature");
    }
  }

  const handleChange = (name: string, value: string[] | string | null) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  async function submitBug() {
    if (validateInputs()) {
      const octokit = new Octokit({
        auth: import.meta.env.VITE_AUTH_TOKEN
      })

      let body = "Issue reported by: " + formValues.email + "@gov.ab.ca\n"
        + "Web component version: " + formValues.webVersion + "\n"
        + "Angular/React version: " + formValues.otherVersion + "\n\n"
        + "## Expected Behaviour\n\n"
        + formValues.expected + "\n\n"
        + "## Actual Behaviour\n\n"
        + formValues.actual + "\n\n"
        + "## Replication Steps\n\n"
        + formValues.replication;

      if (formValues.stackblitz.length !== 0) {
        body += "\n\n[Stackblitz URL](" + formValues.stackblitz + ")";
      }
      if (formValues.jam.length !== 0) {
        body += "\n\n[JamDev URL](" + formValues.jam + ")"
      }
      if (formValues.additional.length !== 0) {
        body += "\n\n## Additional Info\n\n"
          + formValues.additional
      }

      const response = await octokit.request("POST /repos/GovAlta/ui-components/issues", {
        owner: "GovAlta",
        repo: "ui-components",
        title: "Reported Bug",
        body: body,
        labels: [
          "bug"
        ],
        headers: {
          "X-Github-Api-Version": "2022-11-28"
        }
      })
      setResponseURL(response.data.html_url);

      setFormSubmitted(true);
    }
  }

  function validateInputs() {
    let valid = true;

    if (formValues.email.length == 0) {
      valid = false;
      setEmailError("An email address is required");
    } else {
      setEmailError(undefined);
    }

    if (formValues.webVersion.length == 0) {
      valid = false;
      setWebVersionError("We require the version of web components you are using");
    } else {
      setWebVersionError(undefined);
    }

    if (formValues.otherVersion.length == 0) {
      valid = false;
      setOtherVersionError("We require the version of wrapper components you are using");
    } else {
      setOtherVersionError(undefined);
    }

    if (formValues.expected.length == 0) {
      valid = false;
      setExpectedError("We need to know what the expected behaviour is");
    } else {
      setExpectedError(undefined);
    }

    if (formValues.actual.length == 0) {
      valid = false;
      setActualError("We need to know what the actual behaviour is");
    } else {
      setActualError(undefined);
    }

    if (formValues.replication.length == 0) {
      valid = false;
      setReplicationError("We need to know the replication steps for the issue");
    } else {
      setReplicationError(undefined);
    }

    if (formValues.stackblitz.length !== 0 && !/^https:\/\/stackblitz\.com\/[-a-zA-Z0-9%\+.?\/[\],=]*/.test(formValues.stackblitz)) {
      valid = false;
      setStackblitzError("The URL needs to be to Stackblitz");
    } else {
      setStackblitzError(undefined);
    }
  
    if (formValues.jam.length !== 0 && !/^https:\/\/jam\.dev\/([-a-z0-9[\-\/]*)/.test(formValues.jam)) {
      valid = false;
      setJamError("The URL needs to be to jam.dev")
    } else {
      setJamError(undefined);
    }

    return valid;
  }

  useEffect(() => {
    async function getLatestVersion() {
      for (let singlePackage of packages) {
        try {
          const response = await fetch("https://registry.npmjs.org" + singlePackage.location + "/latest");
          const data = await response.json();

          setVersions(prevVersions => ({
            ...prevVersions,
            [singlePackage.name]: data.version
          }));
        } catch (error) {
          console.error("Error fetching version for ", singlePackage.name, error);
        }
      }
    }

    getLatestVersion();
  }, [])

  if (!formSubmitted) {
    return (
      <ComponentContent>
        <a href="/get-started/support" className="back">Back</a>
        <h1>Report a bug</h1>
        <h3>
          Let us know if you find a problem or inconsistency in the design system. Providing complete details in your bug report
          helps our team understand, prioritize, and fix the issue faster.
        </h3>
        <GoACallout type="information" heading="Ensure you're using the latest package versions" mb="2xl">
          <ul>
            <li>Web Components - { versions["web"] }</li>
            <li>Angular Components - { versions["angular"] }</li>
            <li>React Components - { versions["react"] }</li>
          </ul>
        </GoACallout>
        <GoAFormItem label="Your email" mb="xl" error={ emailError }>
          <GoAInput name="email" value={ formValues.email } onChange={ handleChange } trailingContent="@gov.ab.ca" width="30ch" error={ !!emailError } />
        </GoAFormItem>
        <GoABlock gap="3xl" mb="xl">
          <GoAFormItem label="Web components version" error={ webVersionError }>
            <GoAInput name="webVersion" value={ formValues.webVersion } onChange={ handleChange } width="167px" error={ !!webVersionError } />
          </GoAFormItem>
          <GoAFormItem label="React or Angular components version" error={ otherVersionError }>
            <GoAInput name="otherVersion" value={ formValues.otherVersion } onChange={ handleChange } width="167px" error={ !!otherVersionError } />
          </GoAFormItem>
        </GoABlock>
        <GoAFormItem label="Expected Behaviour" mb="xl" helpText="A description of what you are expecting to happen." error={ expectedError }>
          <GoATextArea name="expected" value={ formValues.expected } onChange={ handleChange } rows={ 6 } width="90%" error={ !!expectedError } />
        </GoAFormItem>
        <GoAFormItem label="Actual Behaviour" mb="xl" helpText="A description of what is actually happening (what the bug is)." error={ actualError }>
          <GoATextArea name="actual" value={ formValues.actual } onChange={ handleChange } rows={ 6 } width="90%" error={ !!actualError } />
        </GoAFormItem>
        <GoAFormItem label="Replication steps" mb="xl" helpText="Detailed steps to reproduce your issue." error={ replicationError }>
          <GoATextArea name="replication" value={ formValues.replication } onChange={ handleChange } rows={ 6 } width="90%" error={ !!replicationError } />
        </GoAFormItem>
        <GoAFormItem label="StackBlitz URL" mb="s" helpText="Share your code with us in an isolated environment." requirement="optional" error={ stackblitzError }>
          <GoAInput name="stackblitz" value={ formValues.stackblitz } onChange={ handleChange } width="90%" error={ !!stackblitzError } />
        </GoAFormItem>
        <GoADetails heading="Why stackblitz?" maxWidth="90%" mb="s">
          The design system team uses <a href="https://stackblitz.com/" target="_blank">StackBlitz</a> to create and share live code
          examples. It allows us to easily see your code in an environment that is unaffected by the rest of your project. Create a free
          account and share your work directly with the team.
        </GoADetails>
        <GoAFormItem label="Jam.dev URL" mb="s" helpText="Show us the bug." requirement="optional" error={ jamError }>
          <GoAInput name="jam" value={ formValues.jam } onChange={ handleChange } width="90%" error={ !!jamError } />
        </GoAFormItem>
        <GoADetails heading="Why jam.dev" maxWidth="90%" mb="s">
          The design system team uses <a href="https://jam.dev/" target="_blank">jam.dev</a> to share and report bugs. This gives us
          a lot of the information we need to understand what's happening and how to fix it. Create a free account and record and share
          the issue.        
        </GoADetails>
        <GoAFormItem label="Any additional information" mb="2xl" helpText="Add any other relevant context." requirement="optional">
          <GoATextArea name="additional" value={ formValues.additional } onChange={ handleChange } rows={ 6 } width="90%" />
        </GoAFormItem>
        <GoAButton onClick={ submitBug }>Submit bug</GoAButton>
      </ComponentContent>
    );
  } else {
    return (
      <ComponentContent>
        <a href="/get-started/support" className="back">Back</a>
        <h1>Issue Submitted</h1>
        <GoACallout type="success" heading="Your issue has been submitted to Github" mb="xl">
          <a href={ responseURL } target="_blank">View your issue</a> in the design system backlog.
        </GoACallout>
        <h3>What happens next</h3>
        <ol>
          <li>The design system team will review the issue in the next backlog grooming</li>
          <li>Subscribe to your issue in Github to get notified of any updates</li>
        </ol>
        <h3>Create another issue</h3>
        <GoARadioGroup name="bug-or-feature" onChange={bugOrFeature}>
          <GoARadioItem value="bug" label="Report a bug" />
          <GoARadioItem value="feature" label="Request a new feature" />
        </GoARadioGroup>
        <br />
        <GoAButton onClick={openPage} mt="m">Raise an issue</GoAButton>   
      </ComponentContent>
    );
  }
}
  