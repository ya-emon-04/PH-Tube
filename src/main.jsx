import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Error from './components/Error.jsx'
import Music from './Components/Music.jsx'
import Comedy from './Components/Comedy.jsx'

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
        element: <Music></Music>,
      },
      {
        path: "/comedy",
        element: <Comedy></Comedy>,
      },
      {
        path: "/drawing",
        element: <Error></Error> ,
      },
    ]

  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
