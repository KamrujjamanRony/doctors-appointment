import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layouts/Main.jsx';
import ErrorPage from './Shared/ErrorPage.jsx';
import Home from './Pages/Home/Home.jsx';
import Department from './Pages/Appointment/Department.jsx';
import DoctorsList from './Pages/Appointment/DoctorsList.jsx';
import AllDoctors from './Pages/AllDoctors/AllDoctors.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "doctors",
        element: <AllDoctors />,
      },
      {
        path: "appointment",
        element: <Department />,
      },
      {
        path: "appointment/:department",
        element: <DoctorsList />,
      },
    ],
  },
 ]);
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
