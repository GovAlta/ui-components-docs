import {
  GoabCallout,
  GoabContainer,
  GoabDetails,
  GoabDivider,
  GoabSpacer,
  GoabTable,
  GoabText
} from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
export default function ContributePage() {
  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">
      <GoabText size="heading-xl" mb="m" mt="xl">
        Contribute
      </GoabText>
      <GoabText size="heading-m" mb="l">
        Add to the components or patterns in the design system
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">The design system is a shared resource for product teams to use and
        contribute to. We encourage everyone, regardless of their role, to help improve the design system.</GoabText>

      <GoabText size="heading-s" mt={"xl"} mb="m">Start by using what's in the design system</GoabText>
      <GoabDetails heading="What happens when I need a new or different component or pattern?" mb={"2xl"}>
          <img src="/images/Contribution/contribution-process.png" width="100%" alt="Contribute" />
        <GoabText size="body-m" mt="m">
          <a
            href="https://www.figma.com/board/bFFeTY8CI2qOqCq7yvVXK6/Design-System---Governance-Process-Map?node-id=510-1364&t=gt7XnMUq1UsmJ7Lf-4"
            target="_blank">
              View the full governance process in Figma
            </a>
        </GoabText>
        </GoabDetails>

      <GoabCallout type="information" heading="Did you know…" size="medium" maxWidth="640px" mb={"3xl"}>
        There are open <a href="https://www.figma.com/files/1352057334427203708/team/1365458889622139826" target="_blank">contribution files</a> in Figma for every component and pattern in the design system, including unpublished ideas and experiments.
      </GoabCallout>

      <h2 id="design-contribution-process">Design contribution process</h2>

      <div className="max-width-72ch contribute-page-content">
        <GoabText size="body-m" mt="l" mb="l">
        If a <a href="https://design.alberta.ca/components" target="_blank">component</a> or <a href="https://design.alberta.ca/patterns" target="_blank">pattern</a> doesn’t exist in production or doesn’t meet the needs of your users, please contact the design system team. We’ll discuss the issue to understand it better and decide on the next steps together.
        </GoabText>
        <GoabText size="heading-m" mt="2xl" mb="m">1. Come talk to us:</GoabText>
        <ul>
          <li>
            <a href="https://goa-dio.slack.com/archives/C02PLLT9HQ9" target="_blank">#design-system-support</a> on slack
          </li>
        </ul>
        <GoabText size="heading-s" mt="xl">Be prepared to:</GoabText>
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
        <GoabText size="heading-m" mt="xl" mb="m">2. Your contribution will be evaluated against the following
          contribution criteria:</GoabText>
        <GoabText size="heading-s" mt="xl" mb="s">Proposing a component or pattern</GoabText>
        <GoabText size="body-m" mt="l" mb="l">For something to be added or changed in the design system, it needs to
          be:</GoabText>
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
        <GoabText size="heading-s" mt="2xl" mb="s">Standards for a given solution</GoabText>
        <GoabText size="body-m" mt="l" mb="l">For a new component or pattern to be published, a given solution has to
          be:</GoabText>
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
        <GoabText size="heading-m" mt="2xl" mb="m">3. Once approved, it will be added to the <a
          href="https://github.com/orgs/GovAlta/projects/35/views/1?filterQuery=" target="_blank">Design System's
          backlog</a> </GoabText>
            <ul>
              <li>
                When work starts, we will collaborate with you and your team to ensure the component meets your specific
                needs.
              </li>
            </ul>
        <GoabText size="heading-m" mt="2xl" mb="m">4. Contribute code to the component or pattern</GoabText>
            <ul>
              <li>
                To help build or contribute code to the component or pattern in the design system, follow the <a
                href="#development">code contribution process</a> below.
              </li>
            </ul>
      </div>

      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>
      <div className="max-width-72ch contribute-page-content">
        <h2 id="development">Code contribution process</h2>
        <GoabText size="body-m" mt="l" mb="l">In order to support all of the development frameworks that service teams
          use, we build and support a library of web components. Contributing entire components can be challenging and
          time-consuming, so we recommend and encourage smaller-scale contributions instead.</GoabText>
        <GoabText size="heading-s" mt="xl" mb="s">Recommended ways to contribute:</GoabText>
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
        <GoabText size="heading-s" mt="xl" mb="s">Setup contribution environment</GoabText>
        <ol start={ 3 }>
          <li>
            Go to <a href="https://github.com/GovAlta/ui-components" target="_blank">ui-components</a> repo and clone the repo
          </li>
          <li>Open the repo&rsquo;s folder in your IDE</li>
          <li>Create a branch to work on with the name "contributions/story-number"</li>
          <li>
            Run the following command:
            <CodeSnippet lang="css" allowCopy={true} code={`npm i`} />
          </li>
          <li>
            Run the bash script:
            <CodeSnippet lang="css" allowCopy={true} code={`./playground-setup.sh`} />
          </li>
          <li>The commands above will install all necessary packages and create a “playground” folder containing both React and Angular environments. Since nothing in this folder is committed to the repository, you can freely make any changes you want. These environments are designed for testing purposes.</li>
          <li>
            Use the following commands to run your playground environments:
            <br />
            <b>Angular</b>
            <CodeSnippet lang="css" allowCopy={true} code={
              `npm run dev:watch
              npm run serve:angular`
            }/>
            <GoabSpacer vSpacing="s" />
            <b>React</b>
            <CodeSnippet lang="css" allowCopy={true} code={
              `npm run dev:watch
              npm run serve:react`
            }/>
          </li>
        </ol>
        <GoabSpacer vSpacing="l" />
        <h3 id="react-and-web-wrappers">React and Angular wrappers</h3>
        <GoabText size="body-m" mt="l" mb="l">
          <strong>React wrappers</strong> <br/>
          <CodeSnippet lang="css" allowCopy={true} code={`/libs/react-components/src/lib`}/>
          Each folder represents a single component with its associated unit tests and wrapper code
        </GoabText>
        <GoabText size="body-m" mt="l" mb="2xl">
          <strong>Angular wrappers</strong> <br />
          <CodeSnippet lang="css" allowCopy={true} code={`/libs/angular-components/src/lib/components`}/>
          <GoabSpacer vSpacing="s"></GoabSpacer>
          Each folder represents a single component with its associated unit tests and wrapper code
        </GoabText>
        <h3 id="web-components">Web Components</h3>
        <GoabText size="body-m" mt="l" mb="l">
          <CodeSnippet lang="css" allowCopy={true} code={`/libs/web-components/src/components`}/>
          Each folder represents a single component with:
        </GoabText>
        <ul>
          <li>
            Unit tests as <code>*.spec.ts</code>
          </li>
          <li>
            Component code as <code>*.ts</code>
          </li>
        </ul>
        <GoabSpacer vSpacing="s"></GoabSpacer>
        <h3 id="testing-procedures">Testing procedures</h3>
        <GoabText size="body-m" mt="l" mb="l">All unit tests must be written in Svelte.</GoabText>
        <ul>
          <li>
            If you&#39;re updating/modifying React and/or Angular wrappers, you will need to write unit tests in
            React and/or Angular
          </li>
          <li>It would also be recommended to add proper browser testing using jest for React wrappers and Svelte components.</li>
          <li>Manually test in React and Angular</li>
        </ul>
        <GoabText size="body-m" mt="l" mb="l">
          Additionally, one of our developers will manually test the PR to
          ensure the components&#39; quality and functionality.
        </GoabText>
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
