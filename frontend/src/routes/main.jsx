import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "../layout/layout";
import NotFound from "../pages/notFound";
import Login from "../pages/login";
import Register from "../pages/register";
import LandingPage from "../pages/landingPage";
import Home from "../pages/home";
import DashBoard from "../pages/dashBoard";
import ManagerLayout from "../layout/managerLayout";
import ManageEvents from "../components/events/manageEvents";
import ManageUsers from "../components/users/manageUsers";
import EventDetails from "../components/events/eventDetails";

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
      {
        path: "users",
        element: <ManageUsers />, 
      },
      {
        path: "events",
        element: <ManageEvents />, 
      },
      {
        path: "event/details/:id",
        element: <EventDetails />, 
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
