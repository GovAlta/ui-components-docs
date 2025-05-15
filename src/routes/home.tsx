import {
  GoabAccordion,
  GoabButton,
  GoabButtonGroup, GoabCallout, GoabContainer,
  GoabDivider,
  GoabGrid,
  GoabHeroBanner,
  GoabHeroBannerActions, GoabLink,
  GoabPageBlock,
  GoabSpacer, GoabText
} from "@abgov/react-components";
import "./home.css";
import CardLite from "../components/card-lite/CardLite";
import { useNavigate } from "react-router-dom";
import { SupportInfo } from '../components/support-info/SupportInfo';
import { MAX_CONTENT_WIDTH } from "../global-constants.ts";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
      <GoabHeroBanner
        heading={"Design government services using reusable examples, components, and design tokens"}
        maxContentWidth={MAX_CONTENT_WIDTH}
      >
        <GoabText tag="h2" size="heading-m" mt="m" mb="xl" maxWidth={"688px"}>
          Use the design system to build your service. Build on the research and experience of other service teams and
          avoid repeating work that’s already been done.
        </GoabText>

        <GoabHeroBannerActions>
          <GoabButtonGroup alignment="start">
            <GoabButton
              onClick={() => {
              navigate("get-started");
              }}
              trailingIcon="arrow-forward"
            >
              Get started
            </GoabButton>
            <GoabButton onClick={() => {
              window.open("https://github.com/GovAlta/ui-components/releases", "_blank");
            }} type="tertiary">
              Learn about the latest release
            </GoabButton>
          </GoabButtonGroup>
        </GoabHeroBannerActions>
      </GoabHeroBanner>
      </div>

      <GoabPageBlock width={MAX_CONTENT_WIDTH}>
        <GoabGrid minChildWidth="240px" mt="2xl" gap="xl">
          <CardLite
            title="Patterns"
            description="Common patterns and examples to use as a starting point for a government service."
            linkTo="/patterns"
            linkDisplay="View patterns"
          />
          <CardLite
            title="Components"
            description="Reusable parts of the user interface such as buttons, modals, notifications, and inputs. "
            linkTo="/components"
            linkDisplay="View components"
          />
          <CardLite
            title="Design tokens"
            description="All of the styles within your service, shared across design and development."
            linkTo="/design-tokens"
            linkDisplay="View tokens"
          />
          <CardLite
            title="Content"
            description="Content guidelines to simplify understanding and communication for the user."
            linkTo="/content/capitalization"
            linkDisplay="View content"
          />
        </GoabGrid>

        <GoabDivider mb="2xl" mt="3xl"></GoabDivider>
        <GoabGrid gap="xl" minChildWidth="320px">
          <div>
            <GoabText size={"heading-l"} mb={"l"}><b> Start by using the design system in your service</b></GoabText>
            <GoabText size={"body-m"} mb={"m"}>
              Use the existing components and patterns in the design system to save time and build off of the current
              standard. Typically, these cover around 80% of your service's needs.
            </GoabText>
            <GoabText size={"body-m"} mb={"l"}>
              <a href={"/get-started/support"}>Talk to the Design System team</a>{" "}
              before creating a custom solution. This
              way you can see what’s available, what
              other teams have already done, and avoid repeating work.
            </GoabText>

            <GoabButton type="secondary" trailingIcon="arrow-forward" onClick={() => {
              navigate("get-started");
            }}>
              Learn more
            </GoabButton>
          </div>
          <div>
            <GoabAccordion mb={"xl"}
                           heading="What happens when I need a new or different component or pattern?"
                           headingSize="medium"
            >
              <GoabText size={"body-m"} mb={"m"}>
                If a component or pattern doesn’t exists in the design system or doesn’t meet the needs of your users,
                follow the process below:
              </GoabText>

              <a
                href="https://www.figma.com/board/bFFeTY8CI2qOqCq7yvVXK6/Design-System---Governance-Process-Map?node-id=510-1364&t=gt7XnMUq1UsmJ7Lf-4"
                target="_blank"
                rel="noopener noreferrer"
                className="no-external-icon"
              >
                <img src="/images/governance-process.png" alt="Design system workflow diagram"
                     style={{ maxWidth: "100%" }} />
              </a>
              <GoabLink mt="l">
                <a
                  href="https://www.figma.com/board/bFFeTY8CI2qOqCq7yvVXK6/Design-System---Governance-Process-Map?node-id=510-1364&t=gt7XnMUq1UsmJ7Lf-4"
                  target="_blank"
                  rel="noopener noreferrer">
                  View process for new components and patterns (Figjam)
                </a>
              </GoabLink>
            </GoabAccordion>
            <GoabCallout type="information" size="medium" maxWidth="480px">
              Avoid custom solutions without a genuine user need to prevent unnecessary work and save time.
            </GoabCallout>
          </div>
        </GoabGrid>

        <GoabText size={"heading-l"} mt={"3xl"} mb={"xl"}><b> Additional resources</b></GoabText>
        <GoabGrid gap="xl" minChildWidth="320px">
          <GoabContainer type="non-interactive" accent="filled" padding="relaxed" width="full">
            <GoabText size={"heading-m"} mb={"m"}>
              Common capabilities: Shared digital services
            </GoabText>
            <GoabText size={"body-m"} mb={"m"}>
              A directory of reusable backend services designed to help you and your team work more efficiently and
              align to government infrastructure standards.
            </GoabText>
            <GoabLink>
              <a
                href="https://common-capabilities.digital.gov.ab.ca/"
                target="_blank"
                rel="noopener noreferrer">
                Go to common capabilities
              </a>
            </GoabLink>
          </GoabContainer>
          <GoabContainer type="non-interactive" accent="filled" padding="relaxed" width="full">
            <GoabText size={"heading-m"} mb={"m"}>
              User Experience best practices
            </GoabText>
            <GoabText size={"body-m"} mb={"m"}>
              These resources establish best practices to shape and guide the work of DDD user experience designers.
            </GoabText>
            <GoabLink>
              <a
                href="https://abgov.sharepoint.com/sites/S600D27-DDDUXT"
                target="_blank"
                rel="noopener noreferrer">
                Go to UX practice resources
              </a>
            </GoabLink>
          </GoabContainer>
        </GoabGrid>
        <SupportInfo />

        <GoabSpacer vSpacing="xl"></GoabSpacer>
      </GoabPageBlock>

    </>

  );
};
export default HomePage;
