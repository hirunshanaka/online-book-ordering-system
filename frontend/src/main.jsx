import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AboutUs from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Cart from './pages/Cart.jsx';
import FantasyBooks from './Categories/FantasyBooks.jsx';
import HorrorBooks from './Categories/HorrorBooks.jsx';
import RomanceNovels from './Categories/RomanceNovels.jsx';
import ScienceFictionBooks from './Categories/ScienceFictionBooks.jsx';
import HistoryBooks from './Categories/HistoryBooks.jsx';
// Admin Components
import DashboardLayout from "./dashboard/DashboardLayout.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import UploadBook from "./dashboard/UploadBook.jsx";
import ManageBook from "./dashboard/ManageBook.jsx";

// Router setup
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BodyContent from './HomePage/BodyContent/BodyContent.jsx';



const router = createBrowserRouter([
  // Public Routes
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  
  {
    path: "/FantasyBooks",
    element: <FantasyBooks/>
  },
  {
   path:"/HistoryBooks",
   element:<HistoryBooks/>
  },
   {
    path:"/HorrorBooks",
    element:<HorrorBooks/>
   },
   {
    path:"/RomanceNovels",
    element:<RomanceNovels/>
   },
   {
    path:"/ScienceFictionBooks",
    element:<ScienceFictionBooks/>
   },
   {
    path:"/BodyContent",
    element:<BodyContent/>
   },
  // Admin Routes
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBook />,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default router;
