import { GoabCallout, GoabContainer, GoabDetails, GoabDivider, GoabSpacer, GoabTable,  } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
export default function ContributePage() {
  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">
      <h1>Contribute</h1>
      <h3 className="introduction">
      Add to the components or patterns in the design system</h3>
       <p>The design system is a shared resource for product teams to use and contribute to. We encourage everyone, regardless of their role, to help improve the design system.</p>
      
      <GoabContainer type="non-interactive" mb="l" mt="m">
        <b>Start by using what's in the design system to design and build services easier</b>
        <GoabDetails heading="What happens when I need a new or different component or pattern?" mt="m">
          <img src="/images/Contribution/contribution-process.png" width="100%" alt="Contribute" />
          <GoabSpacer vSpacing="m"></GoabSpacer>
          <p>
            <a href="https://www.figma.com/board/bFFeTY8CI2qOqCq7yvVXK6/Design-System---Governance-Process-Map?node-id=510-1364&t=gt7XnMUq1UsmJ7Lf-4" target="_blank">  
              View the full governance process in Figma
            </a>
          </p>
        </GoabDetails>
      </GoabContainer>

      <GoabContainer type="interactive" mb="l" mt="m">
        <h3>Did you know…</h3>
        <p>
        There are open <a href="https://www.figma.com/files/1352057334427203708/team/1365458889622139826" target="_blank">contribution files</a> in Figma for every component and pattern in the design system, including unpublished ideas and experiments.
        </p>
      </GoabContainer>

      <h2 id="design-contribution-process">Design contribution process</h2>
      
      <div className="max-width-72ch contribute-page-content">
        <p>
        If a <a href="https://design.alberta.ca/components" target="_blank">component</a> or <a href="https://design.alberta.ca/patterns" target="_blank">pattern</a> doesn’t exist in production or doesn’t meet the needs of your users, please contact the design system team. We’ll discuss the issue to understand it better and decide on the next steps together.
        </p>
        <GoabSpacer vSpacing="2xs"></GoabSpacer>
        <h3>1. Come talk to us:</h3>
        <ul>
          <li>
            <a href="https://goa-dio.slack.com/archives/C02PLLT9HQ9" target="_blank">#design-system-support</a> on slack
          </li>
        </ul>
        <h4>Be prepared to:</h4>
        <ul>
          <li>
            Describe the component or pattern and its purpose
          </li>
          <li>
            Explain your user and service goals
          </li>
          <li>
            Share any options and iterations that were explored with and without the Design System
          </li>
        </ul> 
        <h3 id="contribution-criteria" style={{visibility: "hidden", height: "0px"}}>Contribution criteria</h3>
         <h3>2. Your contribution will be evaluated against the following contribution criteria:</h3>
         <h4>Proposing a component or pattern</h4>
         <p>For something to be added or changed in the design system, it needs to be:</p>
         <GoabTable width="100%" mb="xl">
            <thead>
              <tr>
                <th>
                  Criteria
                </th>
                <th>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Useful</b>
                </td>
                <td>
                  There is evidence that this component or pattern would be useful for many teams or services. Evidence could be screenshots or links to versions of it being used in different services.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Unique</b>
                </td>
                <td>
                  It does not replicate something already in the Design System. If it’s intended to replace an existing component or pattern, there is evidence to show that it’s better than the existing version.
                </td>
              </tr>
            </tbody>
          </GoabTable>
          <GoabSpacer vSpacing="2xs"></GoabSpacer>
<h4>Standards for a given solution</h4>
          <p>For a new component or pattern to be published, a given solution has to be:</p>
          <GoabTable width="100%" mb="xl">
            <thead>
              <tr>
                <th>
                  Criteria
                </th>
                <th>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Usable</b>
                </td>
                <td>
                It creates a better and more accessible, usable, and simple experience for the user. The user has a greater understanding and useful control of what they are doing. It should be informed by research to show that it improves user experience and is responding to a user need.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Universal</b>
                </td>
                <td>
                It is inclusive and accessible. It should meet or exceed accessible standards. <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG 2.1 AA</a> is the minimum standard.
                </td>
              </tr>
            </tbody>
          </GoabTable>
          <GoabSpacer vSpacing="3xs"></GoabSpacer>
            <h3>3. Once approved, it will be added to the <a href="https://github.com/orgs/GovAlta/projects/35/views/1?filterQuery=" target="_blank">Design System's backlog</a> </h3>
            <ul>
              <li>
                When work starts, we will collaborate with you and your team to ensure the component meets your specific needs. 
              </li>
            </ul>
            <h3>4. Contribute code to the component or pattern</h3>
            <ul>
              <li>
                To help build or contribute code to the component or pattern in the design system, follow the <a href="#development">code contribution process</a> below. 
              </li>
            </ul>
      </div>

      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>
      <div className="max-width-72ch contribute-page-content">
        <h2 id="development">Code contribution process</h2>
        <p>In order to support all of the development frameworks that service teams use, we build and support a library of web components. Contributing entire components can be challenging and time-consuming, so we recommend and encourage smaller-scale contributions instead.</p>
        <h4>Recommended ways to contribute:</h4>
        <ul>
          <li>bug fixes</li>
          <li>documentation updates</li>
          <li>enhancements to existing components</li>
        </ul>
        <ol>
          <li>Start by reaching out on the <a href="https://goa-dio.slack.com/archives/C02PLLT9HQ9" target="_blank">#design-system-support</a> channel on slack to let us know you’re interested in contributing.</li>
          <li>
            Find an issue in our <a href="https://github.com/orgs/GovAlta/projects/35/views/1?filterQuery=" target="_blank">backlog</a> tagged with &ldquo;ready-for-contribution&rdquo;. Let us know which issue(s) you&rsquo;re picking up.
            <GoabCallout type="information" mt="xl">
              Since our repository is “public”, you'll need to use a different GitHub account than the Enterprise Managed User (EMU) account you use for your product team work.
            </GoabCallout>
          </li>
        </ol>
        <h4>Setup contribution environment</h4>
        <ol start={ 3 }>
          <li>
            Go to ui-components page and choose the “Fork” link in the top-right of the page
          </li>
          <li>Create a Fork, choose an owner and a repo name</li>
          <ul>
            <li>Make sure you&#39;re forking our repo and not directly cloning our repo</li>
          </ul>
          <li>Clone the newly created repo</li>
          <li>Open the repo&rsquo;s folder in your IDE</li>
          <li>
            Run the following commands in order:
            <CodeSnippet lang="css" allowCopy={true} code={`npm i`} />
            <CodeSnippet lang="css" allowCopy={true} code={`npm run build`} />
          </li>
          <li>
            Run the bash script:
            <CodeSnippet lang="css" allowCopy={true} code={`./playground-setup.sh`} />
          </li>
          <li>The commands above will create a “playground” folder containing both React and Angular environments. Since nothing in this folder is committed to the repository, you can freely make any changes you want. These environments are designed for testing purposes.</li>
          <li>
            Use the following commands to run your playground environments:
            <br />
            <b>Angular</b>
            <CodeSnippet lang="css" allowCopy={true} code={`npm run dev:angular`}/>
            <GoabSpacer vSpacing="s" />
            <b>React</b>
            <CodeSnippet lang="css" allowCopy={true} code={`npm run dev:react`}/>
          </li>
        </ol>
        <GoabSpacer vSpacing="l" />
        <h3 id="react-and-web-wrappers">React and Web wrappers</h3>
        <GoabSpacer vSpacing="s" />
        <p>
          <strong>React wrappers</strong> <br/>
          <CodeSnippet lang="css" allowCopy={true} code={`/libs/react-components/src/lib`}/>
          <GoabSpacer vSpacing="s"></GoabSpacer>
          Each folder represents a single component with its associated unit tests and wrapper code
        </p>
        <GoabSpacer vSpacing="l"></GoabSpacer>
        <p>
          <strong>Web wrappers</strong> <br /> 
          <CodeSnippet lang="css" allowCopy={true} code={`/libs/web-components/src/components`}/>
          <GoabSpacer vSpacing="s"></GoabSpacer>
          Each folder represents a single component with:
        </p>
        <ul>
          <li>
            Unit tests as <code>*.spec.ts</code>
          </li>
          <li>
            Component code as <code>*.ts</code>
          </li>
          <li>
            Documentation as <code>doc.md&nbsp;</code>
          </li>
        </ul>
        <GoabSpacer vSpacing="s"></GoabSpacer>
        <h3 id="testing-procedures">Testing procedures</h3>
        <p>All unit tests must be written in Svelte.</p>
        <ul>
          <li>
            If you&#39;re updating/modifying React wrappers, you will need to write unit tests in
            React
          </li>
          <li>Manually test in React and Angular</li>
        </ul>
        <p>
          Additionally, our QA automation developer will perform a comprehensive series of tests to
          ensure the components&#39; quality and functionality.
        </p>
        <GoabSpacer vSpacing="s"></GoabSpacer>

        <h3 id="submitting-your-code">Submitting your code</h3>
        <ol>
          <li>
            Submit a commit using the following as your commit message:
            <GoabContainer type="non-interactive" mt="m">
              <dl>
                <dt><strong>Bug Fix:</strong></dt>
                <dd>fix(#storyNumber): short description of issue fixed (7 words max)</dd>
              </dl>
              <dl>
                <dt><strong>Feature Request:</strong></dt>
                <dd>feat(#storyNumber): short description of feature (7 words max)</dd>
              </dl>
            </GoabContainer>
          </li>
          <li>Create a pull request to the alpha branch from your branch</li>
          <li>Mark the PR as a draft</li>
        </ol>
      </div>
    </ComponentContent>
  );
}
