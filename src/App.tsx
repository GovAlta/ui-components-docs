import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ComponentsPage from "./routes/components/Components";
import DropdownPage from "./routes/components/Dropdown";
import ButtonPage from "./routes/components/Button";
import FormStepperPage from "./routes/components/FormStepper";
import CheckboxPage from "./routes/components/Checkbox";
import AllComponentsPage from "./routes/components/AllComponents";
import ComponentNotFoundPage from "./routes/not-found/NotFound";
import Root from "./routes/root";
import "./index.css";
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
import GetStartedOverview from "./routes/get-started/Overview";
import DeveloperOverview from "./routes/get-started/developers/DevelopersOverview.tsx";
import DevelopersTechnologies from "./routes/get-started/developers/DevelopersTechnologies.tsx";
import DevelopersSetup from "./routes/get-started/developers/DevelopersSetup.tsx";
import DevelopersVSCode from "./routes/get-started/developers/DevelopersVSCode.tsx";
import DevelopersBrowsers from "./routes/get-started/developers/DevelopersBrowsers.tsx";
import DesignerOverview from "./routes/get-started/designers/DesignersOverview.tsx";

import Roadmap from "./routes/get-started/Roadmap";
import ServicePrinciples from "./routes/get-started/ServicePrinciples";
import QATestingOverview from "./routes/get-started/qa-testing/QATestingOverview.tsx";
import GetStarted from "./routes/get-started/GetStartedLayout.tsx";


import { useMediaQuery } from "./hooks/useMediaQuery";
import { DeviceWidthContext } from "./contexts/DeviceWidthContext";

interface DeviceWidthProviderProps {
  children: ReactNode;
}
const DeviceWidthProvider: React.FC<DeviceWidthProviderProps> = ({
  children,
}) => {
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
      <Route
        path="components"
        element={<ComponentsPage />}
        errorElement={<ComponentNotFoundPage />}
      >
        <Route index element={<AllComponentsPage />} />
        <Route path="button" element={<ButtonPage />} />
        <Route path="dropdown" element={<DropdownPage />} />
        <Route path="form-stepper" element={<FormStepperPage />} />
        <Route path="checkbox" element={<CheckboxPage />} />
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

      <Route path="get-started" element={<GetStarted />}>
        <Route index element={<GetStartedOverview />} />
        <Route path="designers">
          <Route index element={<DesignerOverview />} />
        </Route>
        <Route path="developers">
          <Route index element={<DeveloperOverview />} />
          <Route path="setup" element={<DevelopersSetup />} />
          <Route path="vscode" element={<DevelopersVSCode />} />
          <Route path="technologies" element={<DevelopersTechnologies />} />
          <Route path="browsers" element={<DevelopersBrowsers />} />
        </Route>
        <Route path="qa-testing">
          <Route index element={<QATestingOverview />} />
        </Route>
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="service-principles" element={<ServicePrinciples />} />
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
