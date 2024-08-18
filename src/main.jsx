import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landing from './components/Landing.jsx';
import Hotel from './components/Hotel.jsx';

import Detalle from './components/Detalle.jsx';

import Galeria from './components/Galeria.jsx';

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Landing />
    },
    {
      path:':nombreHotel',
      element:  <Hotel />,
    },
    {
      path: ':nombreHotel/:habitacion',
      element: <Detalle />,
    }
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
      
    </RouterProvider>,
  )