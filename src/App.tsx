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
import ContributePage from "@routes/get-started/Contribute";
import SupportPage from "@routes/get-started/Support";
import RequestFeaturePage from "@routes/get-started/RequestFeature";
import ReportBugPage from "@routes/get-started/ReportBug";
import RoadmapPage from "@routes/get-started/Roadmap";
import SupportedBrowsersPage from "@routes/get-started/developers/SupportedBrowsers";
import UxDesignerPage from "@routes/get-started/designers/UxDesigner";

// Content Pages

import ContentLayout from "@routes/content/ContentLayout";
import CapitalizationPage from "@routes/content/Capitalization";
import DateFormatPage from "@routes/content/DateFormat";
import ErrorMessagesPage from "@routes/content/ErrorMessages";
import HelperTextPage from "@routes/content/HelperText";
import UserExperienceGuidelinesPage from "@routes/get-started/UserExperienceGuidelines";

// Patterns Pages

import PatternsLayout from "@routes/patterns/PatternsLayout";
import LayoutPage from "@routes/patterns/LayoutPage";
import PatternsOverviewPage from "@routes/patterns/PatternsOverview";
import SimpleFormPage from "@routes/patterns/SimpleFormPage";
import StartPage from "@routes/patterns/StartPage";
import TaskListPage from "@routes/patterns/TaskListPage";
import QuestionPage from "@routes/patterns/QuestionPage";
import ReviewPage from "@routes/patterns/ReviewPage";
import ResultPage from "@routes/patterns/ResultPage";
import { VersionFromUrlProvider } from "@contexts/VersionFromUrlContext.tsx";
import { ComponentsRouter } from "@components/components-router.tsx";
import ComponentNotFound from "@routes/not-found/NotFound.tsx";
import { LanguageVersionProvider } from "@contexts/LanguageVersionContext.tsx";

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
        </Route>
        <Route path="qa-testing">
          <Route index element={<QATestingOverviewPage />} />
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

      <Route path="content" element={<ContentLayout />}>
        <Route path="capitalization">
          <Route index element={<CapitalizationPage />} />
        </Route>
        <Route path="date-format" element={<DateFormatPage />} />
        <Route path="error-messages" element={<ErrorMessagesPage />} />
        <Route path="helper-text" element={<HelperTextPage />} />
      </Route>

      <Route path="patterns" element={<PatternsLayout />} errorElement={<ComponentNotFound />}>
        <Route index element={<PatternsOverviewPage />} />
        <Route path="simple-form" element={<SimpleFormPage />} />
        <Route path="layout" element={<LayoutPage />} />
        <Route path="start-page" element={<StartPage />} />
        <Route path="task-list-page" element={<TaskListPage />} />
        <Route path="question-page" element={<QuestionPage />} />
        <Route path="review-page" element={<ReviewPage />} />
        <Route path="result-page" element={<ResultPage />} />
      </Route>
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
