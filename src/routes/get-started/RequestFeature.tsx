import { GoabSpacer } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";
import { Link } from "react-router-dom";
  
export default function RequestFeaturePage() {
  return (
    <ComponentContent>
      <a href="/get-started/support" className="back">Back</a>
      <h1>Request a new feature</h1>
      <h3>Anyone can propose a new component or pattern for the design system.</h3>
      <GoabSpacer vSpacing="2xs" />
      <h3>1. Check the design system backlog on Github</h3>
      <p>
        First, check the <a href="https://github.com/orgs/GovAlta/projects/35/views/1?filterQuery=" target="_blank">design system backlog</a> to see if someone else has already identified a similar need or idea.</p>
      <GoabSpacer vSpacing="2xs"  />
      <h3>2. Talk to us</h3>
      <p>
        If a component or pattern doesn't exist in production or doesn't meet the needs of your users, contact the design
        system team. We'll discuss the issue to understand it better and decide on the next steps together.
      </p>
      <GoabSpacer vSpacing="2xs" />
      <h4>Get in touch with the design system team:</h4>
      <p>
        Book time with us in <a href="https://outlook.office365.com/book/BKGDesignsystemdropinhours@abgov.onmicrosoft.com/" target="_blank">Design system Drop-in hours</a>
      </p>
      <h4>Be prepared to:</h4>
      <ul>
        <li>Describe the component or pattern and its purpose</li>
        <li>Explain your user and service goals</li>
        <li>Share any options and iterations that were explored with and without the Design System</li>
      </ul>
      <GoabSpacer vSpacing="2xs" />
      <Link to="/get-started/contribute">View our contribution process</Link>
    </ComponentContent>
  );
}
