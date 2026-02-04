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
import CheckboxListPage from "@routes/components/CheckboxList";
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
import MenuButtonPage from "@routes/components/MenuButton.tsx";
import MicrositeHeaderPage from "@routes/components/MicrositeHeader.tsx";
import ModalPage from "@routes/components/Modal.tsx";
import NotificationBannerPage from "@routes/components/Notificationbanner.tsx";
import PaginationPage from "@routes/components/Pagination.tsx";
import PopoverPage from "@routes/components/Popover.tsx";
import CircularProgressIndicatorPage from "@routes/components/CircularProgressIndicator.tsx";
import LinearProgressIndicatorPage from "@routes/components/LinearProgressIndicator.tsx";
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
  VERSIONED_ANGULAR_URL_SEGMENT,
  VERSIONED_REACT_URL_SEGMENT,
} from "@components/version-language-switcher/version-language-constants.ts";
import ExamplesLayout from "@routes/examples/ExamplesLayout.tsx";
import PatternsOverviewPage from "@routes/examples/ExamplesOverview.tsx";
import BasicPageLayout from "@examples/basic-page-layout.tsx";
import TaskListPage from "@examples/task-list-page.tsx";
import QuestionPage from "@examples/question-page.tsx";
import ReviewPage from "@examples/review-page.tsx";
import ResultPage from "@examples/result-page.tsx";
import PublicForm from "@examples/public-form.tsx";
import FilterChipPage from "@routes/components/FilterChip.tsx";
import TextPage from "@routes/components/Text.tsx";
import { DrawerPage } from "@routes/components/Drawer.tsx";
import DataGridPage from "@routes/components/DataGrid.tsx";
import LinkPage from "@routes/components/Link.tsx";
import TemporaryNotificationPage from "@routes/components/TemporaryNotification.tsx";

const ComponentRoute: React.FC<{
  versionedPaths: Record<string, React.ReactElement>;
}> = ({ versionedPaths }: { versionedPaths: Record<string, React.ReactElement> }) => {
  const { component } = useParams<{ component: string }>();
  return versionedPaths[component as keyof typeof versionedPaths] || <ComponentNotFoundPage />;
};

const VersionedComponentRoute: React.FC<{
  versionedPaths: Record<string, React.ReactElement>;
}> = ({ versionedPaths }: { versionedPaths: Record<string, React.ReactElement> }) => {
  const { version, component } = useParams<{ version: string; component: string }>();
  if (!version || !component) {
    return <ComponentNotFoundPage />;
  }
  const supportedVersions = [VERSIONED_ANGULAR_URL_SEGMENT, VERSIONED_REACT_URL_SEGMENT];
  if (!supportedVersions.includes(version)) {
    return <ComponentNotFoundPage />;
  }

  const getReactPage = (componentName: keyof typeof versionedPaths) => {
    return versionedPaths[componentName] || <ComponentNotFoundPage />;
  };

  return getReactPage(component as keyof typeof versionedPaths);
};

export const ComponentsRouter = () => {
  const componentPaths: Record<string, React.ReactElement> = {
    accordion: <AccordionPage />,
    badge: <BadgePage />,
    block: <BlockPage />,
    button: <ButtonPage />,
    "button-group": <ButtonGroupPage />,
    callout: <CalloutPage />,
    checkbox: <CheckboxPage />,
    "checkbox-list": <CheckboxListPage />,
    "container": <ContainerPage />,
    "data-grid": <DataGridPage />,
    "date-picker": <DatePickerPage />,
    details: <DetailsPage />,
    divider: <DividerPage />,
    drawer: <DrawerPage />,
    dropdown: <DropdownPage />,
    "file-uploader": <FileUploaderPage />,
    "filter-chip": <FilterChipPage />,
    "form-item": <FormItemPage />,
    "form-stepper": <FormStepperPage />,
    grid: <GridPage />,
    "hero-banner": <HeroBannerPage />,
    icons: <IconsPage />,
    "icon-button": <IconButtonPage />,
    input: <TextFieldPage />,
    list: <ListPage />,
    "menu-button": <MenuButtonPage />,
    "microsite-header": <MicrositeHeaderPage />,
    modal: <ModalPage />,
    "notification-banner": <NotificationBannerPage />,
    pagination: <PaginationPage />,
    popover: <PopoverPage />,
    "circular-progress-indicator": <CircularProgressIndicatorPage />,
    "linear-progress-indicator": <LinearProgressIndicatorPage />,
    radio: <RadioPage />,
    "side-menu": <SideMenuPage />,
    "skeleton-loader": <SkeletonPage />,
    spacer: <SpacerPage />,
    table: <TablePage />,
    tabs: <TabsPage />,
    "temporary-notification": <TemporaryNotificationPage />,
    text: <TextPage />,
    "text-area": <TextAreaPage />,
    tooltip: <TooltipPage />,
    "text-field": <TextFieldPage />,
    header: <AppHeaderPage />,
    footer: <AppFooterPage />,
    link: <LinkPage />,
  };

  return (
    <Routes>
      <Route path="/" element={<ComponentsPage />} errorElement={<ComponentNotFoundPage />}>
        {/* Non-versioned paths components */}
        <Route index element={<AllComponentsPage />} />
        <Route path=":component" element={<ComponentRoute versionedPaths={componentPaths} />} />

        {/* Versioned paths components */}
        <Route
          path=":version/:component"
          element={<VersionedComponentRoute versionedPaths={componentPaths} />}
        />
      </Route>
    </Routes>
  );
};

export const PatternsRouter = () => {
  const patternsPaths = {
    layout: <BasicPageLayout />,
    "task-list-page": <TaskListPage />,
    "question-page": <QuestionPage />,
    "review-page": <ReviewPage />,
    "result-page": <ResultPage />,
  };

  return (
    <Routes>
      <Route path="/" element={<ExamplesLayout />} errorElement={<ComponentNotFoundPage />}>
        {/* Non-versioned paths components */}
        <Route index element={<PatternsOverviewPage />} />
        <Route path="/public-form" element={<PublicForm />} />
        <Route path=":component" element={<ComponentRoute versionedPaths={patternsPaths} />} />
        {/* Versioned paths components */}
        <Route
          path=":version/:component"
          element={<VersionedComponentRoute versionedPaths={patternsPaths} />}
        />
      </Route>
    </Routes>
  );
};
