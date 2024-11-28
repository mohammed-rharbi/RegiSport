import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "../layout/layout";
import NotFound from "../pages/notFound";
import Login from "../pages/login";
import Register from "../pages/register";
import LandingPage from "../pages/landingPage";
import Home from "../pages/home";
import DashBoard from "../pages/dashBoard";
import ManagerLayout from "../layout/managerLayout";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />, 
      },

    ],
  },

  {
    path: "/",
    element: <ManagerLayout />,
    children: [
    
      {
        path: "dash",
        element: <DashBoard />, 
      },
    ],
  },




  {
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default MainRouter;