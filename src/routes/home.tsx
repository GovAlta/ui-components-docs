import {
  GoAButton,
  GoAButtonGroup,
  GoADivider,
  GoAGrid,
  GoAHeroBanner,
  GoAHeroBannerActions,
  GoAPageBlock,
  GoASpacer,
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
        heading="Design your government service using reusable patterns, components, design tokens, and content guidelines."
        maxContentWidth={MAX_CONTENT_WIDTH}
      >
        Resources for Government of Alberta product teams to build better services. Learn from the research and experience of other 
        service teams and avoid repeating work that’s already been done.
        <GoAHeroBannerActions>
          <GoAButtonGroup alignment="start">
            <GoAButton onClick={() => {
              navigate("get-started");
              }}
              trailingIcon="arrow-forward"
            >
              Get started
            </GoAButton>
            <GoAButton onClick={() => {
              window.open("https://github.com/GovAlta/ui-components/releases", "_blank");
            }} type="tertiary">
              Learn about the latest release
            </GoAButton>
          </GoAButtonGroup>
        </GoAHeroBannerActions>
      </GoAHeroBanner>

      <GoAPageBlock width={MAX_CONTENT_WIDTH}>
        <GoAGrid minChildWidth="300px" mt="2xl" mb="2xl" gap="xl">
          <CardLite
            title="Patterns and templates"
            description="Common patterns and page templates to use as a starting point for a government service."
            linkTo="/patterns"
            linkDisplay="Browse patterns"
          />
          <CardLite
            title="Components"
            description="Reusable parts of the user interface for content layout, feedback, alerts, inputs, actions, structure, navigation, and other utilities."
            linkTo="/components"
            linkDisplay="Browse components"
          />
          <CardLite
            title="Styles"
            description="Shared design decisions encapsulated in design tokens to use across design and development."
            linkTo="/design-tokens"
            linkDisplay="Browse styles"
          />
          <CardLite
            title="Content"
            description="Use the design system styles within your service, shared across design and development."
            linkTo="/content/capitalization"
            linkDisplay="Browse Content"
          />
        </GoAGrid>

        <GoADivider mb="2xl"></GoADivider>
        <h2>How to use the design system in your government service</h2>
        <div className="max-width-72ch">
          <ol>
            <li>Start by using the design system resources and validate your product through user testing.</li>
            <li>
            If a component or pattern doesn’t exist in production or doesn’t meet the needs of your users,
            {' '}<Link to="/support">contact the design system team</Link>. We’ll discuss the issue to understand it better and decide on the next steps together.
            </li>
          </ol>
          <p>
            <strong>Remember:</strong> Avoid custom solutions without a genuine user need. Leverage the existing resources from the design system first to prevent
            unnecessary work and iterate on your service faster.
          </p>
          <Link to="/get-started">
            Learn more about starting with the design system
          </Link>
          <SupportInfo />
        </div>
        <GoASpacer vSpacing="xl"></GoASpacer>
      </GoAPageBlock>
    </>
  );
};
export default HomePage;
