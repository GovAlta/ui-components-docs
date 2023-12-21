import {
  GoAButton,
  GoAButtonGroup,
  GoADivider,
  GoAGrid,
  GoAHeroBanner,
  GoAHeroBannerActions,
  GoAPageBlock,
} from "@abgov/react-components";
import "./home.css";
import { MAX_CONTENT_WIDTH } from "@routes/root";
import CardLite from "../components/card-lite/CardLite";
import { Link, useNavigate } from "react-router-dom";
import { SupportInfo } from '../components/support-info/SupportInfo';
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <GoAHeroBanner
        heading="Design your service using reusable guidelines, tokens, components,
        and patterns."
        maxContentWidth={MAX_CONTENT_WIDTH}
      >
        Use these resources to build your service. Use and learn from the research and experience of
        other service teams and avoid repeating work that's already been done.
        <GoAHeroBannerActions>
          <GoAButtonGroup alignment="start">
            <GoAButton
              onClick={() => {
                navigate("get-started");
              }}
              trailingIcon="arrow-forward"
            >
              Get Started
            </GoAButton>
            <GoAButton onClick={() => {}} type="tertiary">
              Learn about our latest release
            </GoAButton>
          </GoAButtonGroup>
        </GoAHeroBannerActions>
      </GoAHeroBanner>

      <GoAPageBlock width={MAX_CONTENT_WIDTH}>
        <GoAGrid minChildWidth="300px" mt="2xl" mb="2xl" gap="2xl">
          <CardLite
            title="Patterns and templates"
            description="Patterns and page templates to create a better user experience for government services."
            linkTo="/patterns"
            linkDisplay="Browse patterns"
          />
          <CardLite
            title="Components"
            description="Reusable parts of the user interface such as buttons, modals, steppers, and text inputs."
            linkTo="/components"
            linkDisplay="Browse Components"
          />
          <CardLite
            title="Styles"
            description="Use the design system styles within your service, shared across design and development."
            linkTo="/design-tokens"
            linkDisplay="Browse Styles"
          />
          <CardLite
            title="Content"
            description="Use the design system styles within your service, shared across design and development."
            linkTo="/content"
            linkDisplay="Browse Content"
          />
        </GoAGrid>

        <GoADivider mb="2xl"></GoADivider>
        <h2>Using the design system in your service</h2>
        <div className="home__using-design-system">
          <ol>
            <li>Start with the design system and validate your design through user testing.</li>
            <li>
              If usability issues arise or a problem cannot be resolved within the system, only then
              consider a custom solution or extending a component.
            </li>
          </ol>
          <p>
            <strong>Remember:</strong> Avoid custom solutions without a genuine user need to prevent
            unnecessary rework and keep your team on track.
          </p>
          <Link to="https://goa-dio.atlassian.net/wiki/spaces/DS/pages/2663678161/Starting+with+the+DDD+design+system">
            View more information on starting with the design system
          </Link>
          <SupportInfo />
        </div>
      </GoAPageBlock>
    </>
  );
};
export default HomePage;
