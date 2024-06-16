import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Nav from './components/Nav.jsx';
import Habitacion from './components/Habitacion.jsx';
import Portada from './components/Portada.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    // element: <Nav></Nav>,
    children: [
      {
        path: "/",
        element: <Portada></Portada>
      },
      {
        path: "/Habitacion",
        element: <Habitacion></Habitacion>,
      },
      {
        path: "/app",
        element: <App></App>,
      },
      {
        path: "/app2",
        element: <App />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    
  </RouterProvider>,
)
