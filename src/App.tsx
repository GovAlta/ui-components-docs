import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ComponentsPage from "./routes/components/Components"
import DropdownPage from './routes/components/Dropdown';
import ButtonPage from './routes/components/Button';
import FormStepperPage from './routes/components/FormStepper';
import CheckboxPage from './routes/components/Checkbox';
import AllComponentsPage from './routes/components/AllComponents';
import ComponentNotFoundPage from './routes/components/NotFound';
import Root from './routes/root';

import './index.css'
import GetStarted from './routes/get-started';
import GetStartedOverview from './routes/get-started/Overview';
import DeveloperOverview from './routes/get-started/developers/Overview';
import DeveloperTechnologies from './routes/get-started/developers/Technologies';
import DeveloperSetup from './routes/get-started/developers/Setup';
import DeveloperVSCode from './routes/get-started/developers/VSCode';
import DeveloperBrowsers from './routes/get-started/developers/Browsers';
import DesignerOverview from './routes/get-started/designers/Overview';
import Roadmap from './routes/get-started/Roadmap';
import ServicePrinciples from './routes/get-started/ServicePrinciples';
import QATesting from './routes/get-started/QATesting';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="components" element={<ComponentsPage />} errorElement={<ComponentNotFoundPage />} >
        <Route index element={<AllComponentsPage />} />
        <Route path="button" element={<ButtonPage />} />
        <Route path="dropdown" element={<DropdownPage />} />
        <Route path="form-stepper" element={<FormStepperPage />} />
        <Route path="checkbox" element={<CheckboxPage />} />

        <Route path="*" element={<ComponentNotFoundPage />} />
      </Route>
      <Route path="get-started" element={<GetStarted />}>
        <Route index element={<GetStartedOverview />} />
        <Route path="designers">
          <Route index element={<DesignerOverview />} />
        </Route>

        <Route path="developers">
          <Route index element={<DeveloperOverview />} />
          <Route path="setup" element={<DeveloperSetup />} />
          <Route path="vscode" element={<DeveloperVSCode />} />
          <Route path="technologies" element={<DeveloperTechnologies />} />
          <Route path="browsers" element={<DeveloperBrowsers />} />
        </Route>
        <Route path="qa-testing">
          <Route index element={<QATesting />} />
        </Route>
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="service-principles" element={<ServicePrinciples />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
