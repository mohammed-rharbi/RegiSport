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
import MyEvents from "../pages/myEvents";
import UpcomingEvents from "../pages/upcomingEvents";
import Guard from "./guard";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Guard roles={'participent'}> <Layout />  </Guard>,
    children: [
      {
        path: "home",
        element:  <Home />, 
      },

      {
        path: "myEvents",
        element: <MyEvents />, 
      },

      {
        path: "commingEvents",
        element: <UpcomingEvents />, 
      },
    ],
  },

  {
    path: "/",
    element:  <Guard roles={'manager'}> <ManagerLayout />  </Guard>,
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
        path: "landing",
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
