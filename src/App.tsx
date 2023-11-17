import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import ComponentsPage from "./routes/components/Components";
import DropdownPage from "./routes/components/Dropdown";
import AccordionPage from "./routes/components/Accordion.tsx";
import ButtonPage from "./routes/components/Button";
import FormStepperPage from "./routes/components/FormStepper";
import CheckboxPage from "./routes/components/Checkbox";
import BadgePage from "./routes/components/Badge";
import DetailsPage from "./routes/components/Details";
import ListPage from "./routes/components/List";
import PopoverPage from "./routes/components/Popover";
import ContainerPage from "@routes/components/Container";
import SkeletonPage from "@routes/components/Skeleton.tsx";
import TablePage from "./routes/components/Table";
import DividerPage from "./routes/components/Divider";
import HeroBannerPage from "./routes/components/HeroBanner";
import BlockPage from "./routes/components/Block";
import IconsPage from "./routes/components/Icons";
import AllComponentsPage from "./routes/components/AllComponents";
import ComponentNotFoundPage from "./routes/not-found/NotFound";
import Root from "./routes/root";
import "./index.css";
// Design Tokens Pages
import DesignTokens from "./routes/design-tokens/DesignTokenLayout.tsx";
import BorderWidthPage from "./routes/design-tokens/border-width/BorderWidth";
import BorderRadiusPage from "./routes/design-tokens/border-radius/BorderRadius";
import ColorPage from "./routes/design-tokens/color/Color";
import IconSizePage from "./routes/design-tokens/icon-size/IconSize";
import OpacityPage from "./routes/design-tokens/opacity/Opacity";
import ShadowPage from "./routes/design-tokens/shadow/Shadow";
import SpacingPage from "./routes/design-tokens/spacing/Spacing";
import TypographyPage from "./routes/design-tokens/typography/Typography";
import DesignTokensOverviewPage from "./routes/design-tokens/overview/Overview";
// Get Started Pages
import GetStartedLayout from "./routes/get-started/GetStartedLayout";
import UxDesignerPage from "./routes/get-started/designers/UxDesigner";
import DevelopersTechnologiesPage from "./routes/get-started/developers/DevelopersTechnologies";
import DevelopersVSCodePage from "./routes/get-started/developers/DevelopersVSCode";
import SupportedBrowsersPage from "./routes/get-started/developers/SupportedBrowsers";
import QATestingOverviewPage from "./routes/get-started/qa-testing/QATestingOverview";
import GetStartedOverviewPage from "./routes/get-started/GetStartedOverview";
import RoadmapPage from "./routes/get-started/Roadmap";
import ServicePrinciplesPage from "./routes/get-started/ServicePrinciples";
import DevelopersOverviewPage from "./routes/get-started/developers/DevelopersOverview";
import DevelopersSetupPage from "./routes/get-started/developers/DevelopersSetup";

import { useMediaQuery } from "./hooks/useMediaQuery.tsx";
import { DeviceWidthContext } from "./contexts/DeviceWidthContext.ts";

import HomePage from "@routes/home";



interface DeviceWidthProviderProps {
  children: ReactNode;
}

const DeviceWidthProvider: React.FC<DeviceWidthProviderProps> = ({ children }) => {
  const isDesktop = useMediaQuery("(min-width: 1232px)");
  const isMobile = useMediaQuery("(max-width: 623px)");

  return (
    <DeviceWidthContext.Provider value={{ isDesktop, isMobile }}>
      {children}
    </DeviceWidthContext.Provider>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<HomePage />} />
      <Route path="components" element={<ComponentsPage />} errorElement={<ComponentNotFoundPage />}>
        <Route index element={<AllComponentsPage />} />
        <Route path="accordion" element={<AccordionPage />} />
        <Route path="button" element={<ButtonPage />} />
        <Route path="dropdown" element={<DropdownPage />} />
        <Route path="form-stepper" element={<FormStepperPage />} />
        <Route path="checkbox" element={<CheckboxPage />} />
        <Route path="badge" element={<BadgePage />} />
        <Route path="popover" element={<PopoverPage />} />
        <Route path="badge" element={<BadgePage/>} />
        <Route path="details" element={<DetailsPage />} />
        <Route path="list" element={<ListPage/>} />
        <Route path='container' element={<ContainerPage />} />
        <Route path="skeleton-loader" element={<SkeletonPage/>} />
        <Route path="table" element={<TablePage />} />
        <Route path="divider" element={<DividerPage/>} />
        <Route path="skeleton-loader" element={<SkeletonPage/>} />
        <Route path="hero-banner" element={<HeroBannerPage />} />
        <Route path="block" element={<BlockPage />} />
        <Route path="icons" element={<IconsPage/>} />
        <Route path="*" element={<ComponentNotFoundPage />} />
      </Route>

      <Route
        path="design-tokens"
        element={<DesignTokens />}
        errorElement={<ComponentNotFoundPage />}
      >
        <Route index element={<DesignTokensOverviewPage />} />
        <Route path="border-width" element={<BorderWidthPage />} />
        <Route path="border-radius" element={<BorderRadiusPage />} />
        <Route path="color" element={<ColorPage />} />
        <Route path="icon-size" element={<IconSizePage />} />
        <Route path="opacity" element={<OpacityPage />} />
        <Route path="shadow" element={<ShadowPage />} />
        <Route path="spacing" element={<SpacingPage />} />
        <Route path="typography" element={<TypographyPage />} />
      </Route>

      <Route path="get-started" element={<GetStartedLayout />}>
        <Route index element={<GetStartedOverviewPage />} />
        <Route path="designers">
          <Route index element={<UxDesignerPage />} />
        </Route>
        <Route path="developers">
          <Route index element={<DevelopersOverviewPage />} />
          <Route path="setup" element={<DevelopersSetupPage />} />
          <Route path="vscode" element={<DevelopersVSCodePage />} />
          <Route path="technologies" element={<DevelopersTechnologiesPage />} />
          <Route path="browsers" element={<SupportedBrowsersPage />} />
        </Route>
        <Route path="qa-testing">
          <Route index element={<QATestingOverviewPage />} />
        </Route>
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="service-principles" element={<ServicePrinciplesPage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DeviceWidthProvider>
      <RouterProvider router={router} />
    </DeviceWidthProvider>
  </React.StrictMode>
);
