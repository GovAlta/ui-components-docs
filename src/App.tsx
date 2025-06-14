import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "@abgov/web-components";

import Root from "@routes/root";
import { DeviceWidthProvider } from "@contexts/DeviceWidthContext";
import "./index.css";

// Support

import HomePage from "@routes/home";

// Design Tokens

import DesignTokensOverviewPage from "@routes/design-tokens/overview/Overview";
import BorderRadiusPage from "@routes/design-tokens/border-radius/BorderRadius";
import BorderWidthPage from "@routes/design-tokens/border-width/BorderWidth";
import ColorPage from "@routes/design-tokens/color/Color";
import DesignTokens from "@routes/design-tokens/DesignTokenLayout.tsx";
import IconSizePage from "@routes/design-tokens/icon-size/IconSize";
import OpacityPage from "@routes/design-tokens/opacity/Opacity";
import ShadowPage from "@routes/design-tokens/shadow/Shadow";
import SpacingPage from "@routes/design-tokens/spacing/Spacing";
import TypographyPage from "@routes/design-tokens/typography/Typography";

// Get Started

import DevelopersOverviewPage from "@routes/get-started/developers/DevelopersOverview";
import DevelopersSetupPage from "@routes/get-started/developers/DevelopersSetup";
import DevelopersTechnologiesPage from "@routes/get-started/developers/DevelopersTechnologies";
import DevelopersVSCodePage from "@routes/get-started/developers/DevelopersVSCode";
import BugVerificationPage from "@routes/get-started/developers/BugVerification";
import GetStartedLayout from "@routes/get-started/GetStartedLayout";
import GetStartedOverviewPage from "@routes/get-started/GetStartedOverview";
import QATestingOverviewPage from "@routes/get-started/qa-testing/QATestingOverview";
import ComponentLifecyclePage from "@routes/get-started/ComponentLifecycle";
import ContributePage from "@routes/get-started/Contribute";
import SupportPage from "@routes/get-started/Support";
import RequestFeaturePage from "@routes/get-started/RequestFeature";
import ReportBugPage from "@routes/get-started/ReportBug";
import RoadmapPage from "@routes/get-started/Roadmap";
import SupportedBrowsersPage from "@routes/get-started/developers/SupportedBrowsers";
import UxDesignerPage from "@routes/get-started/designers/UxDesigner";
import { LtsPolicyPage } from "@routes/get-started/LtsPolicyPage.tsx";

// Content Pages

import ContentLayout from "@routes/content/ContentLayout";
import CapitalizationPage from "@routes/content/Capitalization";
import DateFormatPage from "@routes/content/DateFormat";
import ErrorMessagesPage from "@routes/content/ErrorMessages";
import HelperTextPage from "@routes/content/HelperText";
import UserExperienceGuidelinesPage from "@routes/get-started/UserExperienceGuidelines";

import { VersionFromUrlProvider } from "@contexts/VersionFromUrlContext.tsx";
import { ComponentsRouter, PatternsRouter } from "./versioned-router";
import ComponentNotFound from "@routes/not-found/NotFound.tsx";
import { LanguageVersionProvider } from "@contexts/LanguageVersionContext.tsx";
import DevelopersUpgradePage from "@routes/get-started/developers/upgrade-guide/DevelopersUpgrade.tsx";

// Foundations Pages
import FoundationsLayout from "@routes/foundations/FoundationsLayout";
import DesignAtGoAPage from "@routes/foundations/DesignAtGoA";
import BrandGuidelinesPage from "@routes/foundations/BrandGuidelines";
import AccessibilityPage from "@routes/foundations/Accessibility";
import FoundationsColorPage from "@routes/foundations/Color";
import IconographyPage from "@routes/foundations/Iconography";
import ImagesPage from "@routes/foundations/Photography";
import LogoPage from "@routes/foundations/Logo";
import FoundationsTypographyPage from "@routes/foundations/Typography";
import FoundationsLayoutPage from "@routes/foundations/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/components/*" element={<ComponentsRouter />}></Route>
      <Route path="design-tokens" element={<DesignTokens />} errorElement={<ComponentNotFound />}>
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
          <Route path="browsers" element={<SupportedBrowsersPage />} />
          <Route path="setup" element={<DevelopersSetupPage />} />
          <Route path="technologies" element={<DevelopersTechnologiesPage />} />
          <Route path="vscode" element={<DevelopersVSCodePage />} />
          <Route path="bug" element={<BugVerificationPage />} />
          <Route path="update" element={<DevelopersUpgradePage />} />
        </Route>
        <Route path="qa-testing">
          <Route index element={<QATestingOverviewPage />} />
        </Route>
        <Route path="component-lifecycle" element={<ComponentLifecyclePage />} />
        <Route path="lts-policy">
          <Route index element={<LtsPolicyPage />} />
        </Route>
        <Route path="contribute">
          <Route index element={<ContributePage />} />
        </Route>
        <Route path="support">
          <Route index element={<SupportPage />} />
          <Route path="report-bug" element={<ReportBugPage />} />
          <Route path="request-feature" element={<RequestFeaturePage />} />
        </Route>
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="user-experience-guidelines" element={<UserExperienceGuidelinesPage />} />
      </Route>

       <Route path="foundations" element={<FoundationsLayout />}>
        <Route index element={<DesignAtGoAPage />} />
        <Route path="accessibility" element={<AccessibilityPage />} />
        <Route path="brand-guidelines" element={<BrandGuidelinesPage />} />
        <Route path="color" element={<FoundationsColorPage />} />
        <Route path="iconography" element={<IconographyPage />} />
        <Route path="photography" element={<ImagesPage />} />
        <Route path="logo" element={<LogoPage />} />
        <Route path="typography" element={<FoundationsTypographyPage />} />
        <Route path="layout" element={<FoundationsLayoutPage />} />
      </Route>

      <Route path="content" element={<ContentLayout />}>
        <Route path="capitalization">
          <Route index element={<CapitalizationPage />} />
        </Route>
        <Route path="date-format" element={<DateFormatPage />} />
        <Route path="error-messages" element={<ErrorMessagesPage />} />
        <Route path="helper-text" element={<HelperTextPage />} />
      </Route>

      <Route path="/patterns/*" element={<PatternsRouter />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LanguageVersionProvider>
      <VersionFromUrlProvider>
        <DeviceWidthProvider>
          <RouterProvider router={router} />
        </DeviceWidthProvider>
      </VersionFromUrlProvider>
    </LanguageVersionProvider>
  </React.StrictMode>
);
