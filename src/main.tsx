import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Information from './routes/information.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import Root from './routes/root.tsx'
import { rootLoader } from './routes/root.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
    loader: rootLoader,
    children: [
      {
        path: 'information/:id',
        element: <Information />,
        errorElement: <ErrorBoundary />
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
