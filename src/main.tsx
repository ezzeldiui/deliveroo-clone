import { NuqsAdapter } from 'nuqs/adapters/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CountryProvider } from './context/CountryContext.tsx'
import './index.css'
import { Homepage } from './pages/Homepage.tsx'
import { Loginpage } from './pages/Loginpage.tsx'
import { RestaurantBrowse } from './pages/RestaurantBrowse.tsx'

export const baseUrl = '/deliveroo-clone'

const router = createBrowserRouter([
  {
    path: `${baseUrl}/`,
    element: <Homepage />,
  },
  {
    path: `${baseUrl}/login`,
    element: <Loginpage />,
  },
  {
    path: `${baseUrl}/restaurant/search`,
    element: <RestaurantBrowse />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <CountryProvider>
        <NuqsAdapter>
            <RouterProvider router={router} />
        </NuqsAdapter>
      </CountryProvider>
  </StrictMode>,
)
