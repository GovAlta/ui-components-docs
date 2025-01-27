import { Route, Routes, useParams } from "react-router-dom";
import ComponentsPage from "@routes/components/Components.tsx";
import ComponentNotFoundPage from "@routes/not-found/NotFound.tsx";
import AllComponentsPage from "@routes/components/AllComponents.tsx";
import React from "react";
import AccordionPage from "@routes/components/Accordion.tsx";
import BadgePage from "@routes/components/Badge.tsx";
import BlockPage from "@routes/components/Block.tsx";
import ButtonPage from "@routes/components/Button.tsx";
import ButtonGroupPage from "@routes/components/ButtonGroup.tsx";
import CalloutPage from "@routes/components/Callout.tsx";
import CheckboxPage from "@routes/components/Checkbox.tsx";
import ContainerPage from "@routes/components/Container.tsx";
import DatePickerPage from "@routes/components/DatePicker.tsx";
import DetailsPage from "@routes/components/Details.tsx";
import DividerPage from "@routes/components/Divider.tsx";
import DropdownPage from "@routes/components/Dropdown.tsx";
import FileUploaderPage from "@routes/components/FileUploader.tsx";
import FormItemPage from "@routes/components/FormItemPage.tsx";
import FormStepperPage from "@routes/components/FormStepper.tsx";
import GridPage from "@routes/components/Grid.tsx";
import HeroBannerPage from "@routes/components/HeroBanner.tsx";
import IconsPage from "@routes/components/Icons.tsx";
import IconButtonPage from "@routes/components/IconButton.tsx";
import TextFieldPage from "@routes/components/TextField.tsx";
import ListPage from "@routes/components/List.tsx";
import MicrositeHeaderPage from "@routes/components/MicrositeHeader.tsx";
import ModalPage from "@routes/components/Modal.tsx";
import NotificationBannerPage from "@routes/components/Notificationbanner.tsx";
import PaginationPage from "@routes/components/Pagination.tsx";
import PopoverPage from "@routes/components/Popover.tsx";
import ProgressIndicatorPage from "@routes/components/ProgressIndicator.tsx";
import RadioPage from "@routes/components/Radio.tsx";
import SideMenuPage from "@routes/components/SideMenu.tsx";
import SkeletonPage from "@routes/components/Skeleton.tsx";
import SpacerPage from "@routes/components/Spacer.tsx";
import TablePage from "@routes/components/Table.tsx";
import TabsPage from "@routes/components/Tabs.tsx";
import TextAreaPage from "@routes/components/TextArea.tsx";
import TooltipPage from "@routes/components/Tooltip.tsx";
import AppHeaderPage from "@routes/components/AppHeader.tsx";
import AppFooterPage from "@routes/components/AppFooter.tsx";
import {
  OLD_ANGULAR_URL_SEGMENT,
  OLD_REACT_URL_SEGMENT,
} from "@components/version-language-switcher/version-language-constants.ts";
import PatternsLayout from "@routes/patterns/PatternsLayout.tsx";
import PatternsOverviewPage from "@routes/patterns/PatternsOverview.tsx";
import LayoutPage from "@routes/patterns/LayoutPage.tsx";
import StartPage from "@routes/patterns/StartPage.tsx";
import TaskListPage from "@routes/patterns/TaskListPage.tsx";
import QuestionPage from "@routes/patterns/QuestionPage.tsx";
import ReviewPage from "@routes/patterns/ReviewPage.tsx";
import ResultPage from "@routes/patterns/ResultPage.tsx";
import SimpleFormPage from "@routes/patterns/SimpleFormPage.tsx";
import FilterChipPage from "@routes/components/FilterChip.tsx";

const ComponentRoute: React.FC<{
  componentPaths: Record<string, React.ReactElement>;
}> = ({ componentPaths }: { componentPaths: Record<string, React.ReactElement> }) => {
  const { component } = useParams<{ component: string }>();
  return componentPaths[component as keyof typeof componentPaths] || <ComponentNotFoundPage />;
};

const VersionedComponentRoute: React.FC<{
  componentPaths: Record<string, React.ReactElement>;
}> = ({ componentPaths }: { componentPaths: Record<string, React.ReactElement> }) => {
  const { version, component } = useParams<{ version: string; component: string }>();
  if (!version || !component) {
    return <ComponentNotFoundPage />;
  }
  const supportedVersions = [`${OLD_ANGULAR_URL_SEGMENT}`, OLD_REACT_URL_SEGMENT];
  if (!supportedVersions.includes(version)) {
    return <ComponentNotFoundPage />;
  }

  const getComponent = (componentName: keyof typeof componentPaths) => {
    return componentPaths[componentName] || <ComponentNotFoundPage />;
  };

  return getComponent(component as keyof typeof componentPaths);
};

export const ComponentsRouter = () => {
  const componentPaths: Record<string, React.ReactElement> = {
    "accordion": <AccordionPage />,
    "badge": <BadgePage />,
    "block": <BlockPage />,
    "button": <ButtonPage />,
    "button-group": <ButtonGroupPage />,
    "callout": <CalloutPage />,
    "checkbox": <CheckboxPage />,
    "container": <ContainerPage />,
    "date-picker": <DatePickerPage />,
    "details": <DetailsPage />,
    "divider": <DividerPage />,
    "dropdown": <DropdownPage />,
    "file-uploader": <FileUploaderPage />,
    "filter-chip": <FilterChipPage />,
    "form-item": <FormItemPage />,
    "form-stepper": <FormStepperPage />,
    "grid": <GridPage />,
    "hero-banner": <HeroBannerPage />,
    "icons": <IconsPage />,
    "icon-button": <IconButtonPage />,
    "input": <TextFieldPage />,
    "list": <ListPage />,
    "microsite-header": <MicrositeHeaderPage />,
    "modal": <ModalPage />,
    "notification-banner": <NotificationBannerPage />,
    "pagination": <PaginationPage />,
    "popover": <PopoverPage />,
    "progress-indicator": <ProgressIndicatorPage />,
    "radio": <RadioPage />,
    "side-menu": <SideMenuPage />,
    "skeleton-loader": <SkeletonPage />,
    "spacer": <SpacerPage />,
    "table": <TablePage />,
    "tabs": <TabsPage />,
    "text-area": <TextAreaPage />,
    "tooltip": <TooltipPage />,
    "text-field": <TextFieldPage />,
    "header": <AppHeaderPage />,
    "footer": <AppFooterPage />,
  };

  return (
    <Routes>
      <Route path="/" element={<ComponentsPage />} errorElement={<ComponentNotFoundPage />}>
        {/* Non-versioned paths components */}
        <Route index element={<AllComponentsPage />} />
        <Route path=":component" element={<ComponentRoute componentPaths={componentPaths} />} />

        {/* Versioned paths components */}
        <Route path=":version/:component" element={<VersionedComponentRoute componentPaths={componentPaths}/>} />
      </Route>
    </Routes>
  );
};

export const PatternsRouter = () => {
  const patternsPaths = {
    "layout": <LayoutPage/>,
    "start-page": <StartPage/>,
    "task-list-page": <TaskListPage/>,
    "question-page": <QuestionPage/>,
    "review-page": <ReviewPage/>,
    "result-page": <ResultPage/>,
  };

  return (
    <Routes>
      <Route path="/" element={<PatternsLayout />} errorElement={<ComponentNotFoundPage />}>
        {/* Non-versioned paths components */}
        <Route index element={<PatternsOverviewPage />} />
        <Route path="/simple-form" element={<SimpleFormPage/>} />
        <Route path=":component" element={<ComponentRoute componentPaths={patternsPaths} />} />
        {/* Versioned paths components */}
        <Route path=":version/:component" element={<VersionedComponentRoute componentPaths={patternsPaths} />} />
      </Route>
    </Routes>
  );
};
