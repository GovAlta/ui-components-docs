import { GoABlock, GoAContainer, GoADivider } from "@abgov/react-components";
import { Link } from "react-router-dom";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function ContributePage() {
  return (
    <ComponentContent>
      <h1>Your contributions make an impact</h1>
      <h3 className="introduction">The design system is a shared resource for internal product teams to use and contribute to. We encourage everyone, regardless of their role, to enhance the quality of the design system.</h3>

      <GoABlock gap="xl">
        <a href="#design">Design</a>
        <a href="#development">Development</a>
      </GoABlock>
      <GoADivider mb="2xl" mt="2xl"></GoADivider>

      <h2 id="design">Design contribution process</h2>
      <div className="max-width-72ch contribute-page-content">
        <ol>
          <li>
            <div className="share-ideas">
              Share your idea or suggestion with us at Design System Drop-in hours {" "}
              <a
                href="https://outlook.office365.com/owa/calendar/BKGDesignsystemdropinhours@abgov.onmicrosoft.com/bookings/"
                target="_blank">
                Book a time
              </a>
            </div>
            <strong>Be prepared to:</strong>
            <ul>
              <li>Explain your project goals</li>
              <li>
                Share what options and iterations were explored with and without the Design System
                components
              </li>
            </ul>
          </li>
          <li>
            We will evaluate the contribution against the design system contribution criteria.
          </li>{" "}
          <li>
            Once approved, the item will be added to the Design System's backlog. As work commences,
            we will collaborate with the team that made the request to ensure the component meets
            their specific needs.
          </li>
        </ol>
        <h3>Criteria for being part of the design system</h3>
        <h4>Useful</h4>
        <p>
          There is evidence that this component or pattern would be useful for many teams or
          services. Evidence could be screenshots or links to versions of it being used in different
          services.
        </p>
        <h4>Unique</h4>
        <p>
          It does not replicate something already in the Design System. <br />
          If it's intended to replace an existing component or pattern, there is evidence to show
          that it's better than the existing version.
        </p>
        <h4>Good user experience</h4>
        <p>
          It creates a more accessible, usable, and simpler experience for the user. The user has a
          greater understanding and consent to what they are doing. <br />
          It should be informed by research to show that it improves user experience and is
          responding to a user need.
        </p>
        <h4>Universal</h4>
        <p>
          It is inclusive and accessible. <br />
          It should meet or exceed accessible standards. <br />
          <a href="https://www.w3.org/TR/WCAG21/" target="_blank">
            WCAG 2.1
          </a>
        </p>
      </div>

      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <div className="max-width-72ch contribute-page-content">
        <h2 id="development">Code contribution process</h2>
    <p>The recommended type of code contributions to the design system are viewed as minor, such as:</p>

<ul>
	<li>bug fixes,</li>
	<li>documentation updates; or</li>
	<li>enhancements to existing components.</li>
</ul>

<p>Major contributions such as new components or patterns are discouraged due to the complexity and need for our team&#39;s involvement.</p>

<h3 class="null">How to contribute through GitHub</h3>

<p><strong>Step one:</strong> Reach out on the design system support channel to let us know you&rsquo;re interested in contributing.</p>

<ol>
	<li>Find an issue in our <a href="https://github.com/orgs/GovAlta/projects/35/views/1?filterQuery=" target="_blank">backlog</a>&nbsp;tagged with &ldquo;ready-for-contribution&rdquo;. Let us know which issue(s) you&rsquo;re picking up.</li>
</ol>
<GoAContainer type="non-interactive" mb="l">
<p>Avoid leaving comments in the story like &ldquo;I am working on this story&rdquo; as our team does not receive notifications for new comments, and we may miss your message.</p>
</GoAContainer>
<strong>Step two:</strong> Setup contribution environment

<ol>
	<li>Go to ui-components page and choose the &ldquo;Fork&rdquo; link in the top-right of the page</li>
	<li>Create a Fork, choose an owner and a repo name
	<ul>
		<li>Make sure you&#39;re forking our repo and not directly cloning our repo</li>
	</ul>
	</li>
	<li>Clone the newly created repo</li>
	<li>Open the repo&rsquo;s folder in your IDE</li>
	<li>Run the following commands in order:
	<ol type="a">
		<li><code>npm i</code></li>
		<li>run a bash script <code>./playground-setup.sh</code></li>
		<li><code>npm run build</code></li>
	</ol>
	</li>
	<li>The commands above will create a &quot;playground&quot; folder containing both React and Angular environments. Since nothing in this folder is committed to the repository, you can freely make any changes you want. These environments are designed for testing purposes.</li>
	<li>Use the following commands to run your playground environments:
	<ol type="a">
		<li>Angular: <code>npm run dev:angular</code></li>
		<li>React: <code>npm run dev:react</code></li>
	</ol>
	</li>
</ol>

<h4 class="null">Where to find React and Web wrappers</h4>

<p><strong>React wrappers:</strong> <code>/libs/react-components/src/lib</code>. Each folder represents a single component with its associated unit tests and wrapper code</p>

<p><strong>Web wrappers:</strong> <code>/libs/web-components/src/components</code>. Each folder represents a single component with:</p>

<ul>
	<li>Unit tests as <code>*.spec.ts</code></li>
	<li>Component code as <code>*.ts</code></li>
	<li>Documentation as <code>doc.md&nbsp;</code></li>
</ul>

<h4 class="null">Testing procedures</h4>

<p>All unit tests must be written in Svelte.</p>

<ul>
	<li>If you&#39;re updating/modifying React wrappers, you will need to write unit tests in React</li>
	<li>Manually test in React and Angular</li>
</ul>

<p>Additionally, our QA automation developer will perform a comprehensive series of tests to ensure the components&#39; quality and functionality.</p>

<h4 class="null">Submitting your code</h4>

<p>Submit your code in a pull request to the alpha branch from your forked repository, include the following as a title:</p>

<ul>
	<li>Bug fix: <code>fix(#storyNumber): short description of issue fixed (7 words max)</code></li>
	<li>Feature request: <code>feat(#storyNumber): short description of feature (7 words max)</code></li>
</ul>

<p>Make sure you mark the PR as a draft.</p>

      </div>
    </ComponentContent>
  );
}
