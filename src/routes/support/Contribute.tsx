import { GoABlock, GoAContainer, GoADivider } from "@abgov/react-components";
import { Link } from "react-router-dom";

export default function ContributePage() {
  return (
    <div>
      <h1>Contribute</h1>
      <h3 className="introduction">Propose a new component or pattern to the design system</h3>

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
              Share your idea or suggestion at a Friday{" "}
              <a
                href="https://goa-dio.atlassian.net/wiki/spaces/DS/pages/2342813697"
                target="_blank">
                Design System Drop-in Hours
              </a>
              . Book a time with us
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
          <a href="https://goa-dio.atlassian.net/wiki/spaces/DIO/pages/1702690950" target="_blank">
            WCAG 2.1
          </a>
        </p>
      </div>

      <GoADivider mb="2xl" mt="2xl"></GoADivider>
      <div className="max-width-72ch contribute-page-content">
        <h2 id="development">Code contribution process</h2>
        <ol>
          <li>
            Make sure your component has already gone through the Design contribution process
            outline above.
          </li>
          <li>
            Follow the <Link to="/get-started/developers/setup">contributor setup process</Link> to
            make sure that you're setup to contribute to our repo. Make sure you're forking our
            repo, not directly cloning our repo
          </li>
          <li>
            When writing your component, please be sure to update the{" "}
            <a
              href="https://github.com/GovAlta/ui-components/tree/alpha/libs/web-components/playground"
              target="_blank">
              palyground
            </a>{" "}
            with examples of your component in use. The design system team uses this for manual
            testing.
          </li>

          <GoAContainer type="non-interactive" mb="l">
            <h3>Tips when writing your own component</h3>
            <ul>
              <li>
                All components are written in Svelte, and can be found in
                /libs/web-components/src/components
              </li>
            </ul>
          </GoAContainer>
          <li>Write automated tests for your component</li>
          <li>Submit your code in a PR to the alpha branch from your forked repository</li>
          <li>
            Tag your commit with ‘feat:’ at the start and ensure you are making a draft instead of a
            PR
          </li>
          <li>
            In the description box of the PR, add in:
            <ul>
              <li>The use case of your component</li>
              <li>Links to the Design System Figma contribution</li>
              <li>
                Details on how the component is intended to be worked with (this is a new component
                to use, so please be detailed so we know how to test and know roughly what we’re
                looking at)
              </li>
            </ul>
          </li>
          <li>
            Post on the{" "}
            <a href="https://goa-dio.slack.com/archives/C02PLLT9HQ9" target="_blank">
              #design-system-support
            </a>{" "}
            Slack channel letting Chris Olsen and Dustin Nielsen know about your submission.
          </li>
          <li>It is not required to add your component to our documentation.</li>
          <li>
            Once a PR is submitted, it needs to pass linting, automated tests, build steps, and QA
            automation testing. It will then be reviewed by 2 developers on the Design System team,
            including Dustin Nielsen or Chris Olsen.
          </li>
          <li>
            Once approved, it will be pushed into Alpha, and released in the next production
            release.
          </li>
          <li>
            If documentation was written, it will be included in the release notes. If there is no
            documentation provided, it will not be in the release notes, until documentation is
            written for the component.
          </li>
        </ol>
      </div>
    </div>
  );
}
