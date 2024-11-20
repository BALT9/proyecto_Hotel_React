import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landing from './pages/Landing.jsx';
import Hotel from './pages/Hotel.jsx';

import Detalle from './pages/Detalle.jsx';

import Formulario1 from './components/forms/Formulario1.jsx';
import Formulario2 from './components/forms/Formulario2.jsx';

import Dashboard from './components/Dashboard.jsx';
import Steper from './components/Steper.jsx';

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Landing />
    },
    {
      path:'/registrarse',
      element: <Steper></Steper>
    },
    {
      path:'/login',
      element: <Formulario2 />
    },
    {
      path:'/miNegocio',
      element: <Dashboard></Dashboard>
    },
    {
      path:':nombreHotel',
      element:  <Hotel />,
    },
    {
      path: ':nombreHotel/:habitacion',
      element: <Detalle />,
    },
    {
      path:'/probarAhora',
      element:  <Steper></Steper>,
    },
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
      
    </RouterProvider>,
  )