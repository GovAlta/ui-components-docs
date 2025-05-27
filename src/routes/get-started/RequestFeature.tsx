import { GoabText } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";
import { Link } from "react-router-dom";

export default function RequestFeaturePage() {
  return (
    <ComponentContent>
      <a href="/get-started/support" className="back">Back</a>

      <GoabText size="heading-xl" mb="m" mt="l">
        Request a new feature
      </GoabText>
      <GoabText size="body-l" mb="xl">
        Anyone can propose a new component or pattern for the design
        system.
      </GoabText>

      <GoabText size="heading-m" mt="2xl" mb="m">1. Check the design system backlog on Github</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        First, check the <a href="https://github.com/orgs/GovAlta/projects/35/views/1?filterQuery=" target="_blank">design
        system backlog</a> to see if someone else has already identified a similar need or idea.</GoabText>
      <GoabText size="heading-m" mt="2xl" mb="m">2. Talk to us</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        If a component or pattern doesn't exist in production or doesn't meet the needs of your users, contact the design
        system team. We'll discuss the issue to understand it better and decide on the next steps together.
      </GoabText>
      <GoabText size="heading-s" mt="xl" mb="s">Get in touch with the design system team:</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        Book time with us in <a
        href="https://outlook.office365.com/book/BKGDesignsystemdropinhours@abgov.onmicrosoft.com/" target="_blank">Design
        system Drop-in hours</a>
      </GoabText>
      <GoabText size="heading-s" mt="xl" mb="s">Be prepared to:</GoabText>
      <ul>
        <li>Describe the component or pattern and its purpose</li>
        <li>Explain your user and service goals</li>
        <li>Share any options and iterations that were explored with and without the Design System</li>
      </ul>
      <Link to="/get-started/contribute">View our contribution process</Link>
    </ComponentContent>
  );
}
