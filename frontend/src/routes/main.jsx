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
import EventPage from "../pages/eventPage";
import Guard from "./guard";

const MainRouter = createBrowserRouter([

  {
    element: <Outlet />,
    children: [
      {
        path: "landing",
        element: <LandingPage />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },


  {
    path: "/",
    element: (
      <Guard>
        <Layout />
      </Guard>
    ),
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "myEvents",
        element: <MyEvents />,
      },
      {
        path: "commingEvents",
        element: <UpcomingEvents />,
      },
      {
        path: "event/page/:id",
        element: <EventPage />,
      },
    ],
  },


  {
    path: "/",
    element: (
      <Guard roles={["manager"]}>
        <ManagerLayout />
      </Guard>
    ),
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
]);

export default MainRouter;
