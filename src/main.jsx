import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,

    children:[

      {
        path: "/music",
        element: <h1> All the Music albums are here</h1>,
      },
      {
        path: "/comedy",
        element: <h1>All the Comedy Videos are here </h1>,
      },
      {
        path: "/drawing",
        element: <h1>All the  Drawings are here  </h1>,
      },
    ]

  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
