import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements, useParams
} from "react-router-dom";

import "@abgov/web-components";

import Root from "@routes/root";
import { DeviceWidthProvider } from "@contexts/DeviceWidthContext";
import "./index.css";

// Support

import HomePage from "@routes/home";

// Components

import ComponentsPage from "@routes/components/Components";

import AllComponentsPage from "@routes/components/AllComponents";
import AccordionPage from "@routes/components/Accordion.tsx";
import BadgePage from "@routes/components/Badge";
import BlockPage from "@routes/components/Block";
import ButtonGroupPage from "@routes/components/ButtonGroup";
import ButtonPage from "@routes/components/Button";
import CalloutPage from "@routes/components/Callout";
import CheckboxPage from "@routes/components/Checkbox";
import ChipPage from "@routes/components/Chip";
import ComponentNotFoundPage from "@routes/not-found/NotFound";
import ContainerPage from "@routes/components/Container";
import DatePickerPage from "@routes/components/DatePicker";
import DetailsPage from "@routes/components/Details";
import DividerPage from "@routes/components/Divider";
import DropdownPage from "@routes/components/Dropdown";
import FileUploaderPage from "@routes/components/FileUploader";
import FormItemPage from "@routes/components/FormItemPage.tsx";
import FormStepperPage from "@routes/components/FormStepper";
import GridPage from "@routes/components/Grid";
import HeroBannerPage from "@routes/components/HeroBanner";
import IconsPage from "@routes/components/Icons";
import IconButtonPage from "@routes/components/IconButton";
import ListPage from "@routes/components/List";
import ModalPage from "@routes/components/Modal";
import NotificationBannerPage from "@routes/components/Notificationbanner";
import PaginationPage from "@routes/components/Pagination";
import PopoverPage from "@routes/components/Popover";
import ProgressIndicatorPage from "@routes/components/ProgressIndicator";
import RadioPage from "@routes/components/Radio";
import SkeletonPage from "@routes/components/Skeleton.tsx";
import SpacerPage from "@routes/components/Spacer";
import TablePage from "@routes/components/Table";
import TabsPage from "@routes/components/Tabs.tsx";
import TooltipPage from "@routes/components/Tooltip";
import TextFieldPage from "@routes/components/TextField";
import TextAreaPage from "@routes/components/TextArea";
import MicrositeHeaderPage from "@routes/components/MicrositeHeader";
import AppHeaderPage from "@routes/components/AppHeader";
import AppFooterPage from "@routes/components/AppFooter";
import SideMenuPage from "@routes/components/SideMenu";

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
import ContributePage from '@routes/get-started/Contribute';
import SupportPage from '@routes/get-started/Support';
import RequestFeaturePage from "@routes/get-started/RequestFeature";
import ReportBugPage from "@routes/get-started/ReportBug";
import RoadmapPage from "@routes/get-started/Roadmap";
import SupportedBrowsersPage from "@routes/get-started/developers/SupportedBrowsers";
import UxDesignerPage from "@routes/get-started/designers/UxDesigner";

// Content Pages

import ContentLayout from '@routes/content/ContentLayout';
import CapitalizationPage from '@routes/content/Capitalization';
import DateFormatPage from '@routes/content/DateFormat';
import ErrorMessagesPage from '@routes/content/ErrorMessages';
import HelperTextPage from '@routes/content/HelperText';
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
import { VersionProvider } from "@contexts/VersionContext.tsx";

const componentRoutes = {
  accordion: <AccordionPage />,
  badge: <BadgePage />,
  block: <BlockPage />,
  button: <ButtonPage />,
  "button-group": <ButtonGroupPage />,
  callout: <CalloutPage />,
  checkbox: <CheckboxPage />,
  chip: <ChipPage />,
  container: <ContainerPage />,
  "date-picker": <DatePickerPage />,
  details: <DetailsPage />,
  divider: <DividerPage />,
  dropdown: <DropdownPage />,
  "file-uploader": <FileUploaderPage />,
  "form-item": <FormItemPage />,
  "form-stepper": <FormStepperPage />,
  grid: <GridPage />,
  "hero-banner": <HeroBannerPage />,
  icons: <IconsPage />,
  "icon-button": <IconButtonPage />,
  input: <TextFieldPage />,
  list: <ListPage />,
  "microsite-header": <MicrositeHeaderPage />,
  modal: <ModalPage />,
  "notification-banner": <NotificationBannerPage />,
  pagination: <PaginationPage />,
  popover: <PopoverPage />,
  "progress-indicator": <ProgressIndicatorPage />,
  radio: <RadioPage />,
  "side-menu": <SideMenuPage />,
  "skeleton-loader": <SkeletonPage />,
  spacer: <SpacerPage />,
  table: <TablePage />,
  tabs: <TabsPage />,
  "text-area": <TextAreaPage />,
  tooltip: <TooltipPage />,
  "text-field": <TextFieldPage />,
  header: <AppHeaderPage />,
  footer: <AppFooterPage />,
}
const supportedVersions = ['v3-angular', 'v4-react'];

const getComponent = (componentName: keyof typeof componentRoutes) => {
  return componentRoutes[componentName] || <ComponentNotFoundPage />;
}

const ComponentRoute: React.FC = () => {
  const { component } = useParams<{ component: string }>();
  const Component = componentRoutes[component as keyof typeof componentRoutes] || <ComponentNotFoundPage />;
  return Component;
};

const VersionedComponentRoute: React.FC = () => {
  const { version, component } = useParams<{ version: string, component: string }>();
  if (!version || !component) {
    return <ComponentNotFoundPage />;
  }
  if (!supportedVersions.includes(version)) {
    return <ComponentNotFoundPage/>;
  }
  return getComponent(component as keyof typeof componentRoutes);
}

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Root />}>
      <Route path="/" element={<HomePage />} />

      {/*// user copy and paste the URL: /v5/components/accordion but they choose angular ==> 404*/}
      <Route
        path="components"
        element={<ComponentsPage />}
        errorElement={<ComponentNotFoundPage />}>
        {/* Non-versioned paths components */}
        <Route index element={<AllComponentsPage />} />
        <Route
          path=":component"
          element={<ComponentRoute/>}
        />
        {/* Versioned paths components */}
        <Route path=":version/:component" element={<VersionedComponentRoute />} />
      </Route>



      <Route
        path="design-tokens"
        element={<DesignTokens />}
        errorElement={<ComponentNotFoundPage />}>
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

      <Route path="patterns" element={<PatternsLayout />} errorElement={<ComponentNotFoundPage />}>
        <Route index element={<PatternsOverviewPage />} />
        <Route path="simple-form" element={<SimpleFormPage/>} />
        <Route path="layout" element={<LayoutPage />} />
        <Route path="start-page" element={<StartPage/>} />
        <Route path="task-list-page" element={<TaskListPage/>} />
        <Route path="question-page" element={<QuestionPage/>} />
        <Route path="review-page" element={<ReviewPage/>} />
        <Route path="result-page" element={<ResultPage/>} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <VersionProvider>
      <DeviceWidthProvider>
        <VersionProvider>
          <RouterProvider router={router} />
        </VersionProvider>
      </DeviceWidthProvider>
    </VersionProvider>
  </React.StrictMode>
);
