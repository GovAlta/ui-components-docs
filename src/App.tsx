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
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
