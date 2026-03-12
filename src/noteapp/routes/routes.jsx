import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Help from "../pages/Help";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouting from "../privaterouting/PrivateRouting";
import DashboardHome from "../dashboard/dashboardpages/DashboardHome";
import Profile from "../dashboard/dashboardpages/Profile";
import UpdateStatus from "../privaterouting/UpdateStatus";
import Layout from "../component/layout/Layout";
import AddNotes from "../dashboard/dashboardpages/AddNotes";
import AllNotes from "../dashboard/dashboardpages/AllNotes";
import UpdateProfile from "../dashboard/dashboardpages/Updateprofile";
import UserDashboard from "../dashboard/UserDashBoard";
import UpdateNotes from "../dashboard/dashboardpages/UpdateNotes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: (
          <UpdateStatus>
            <Home />
          </UpdateStatus>
        )
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/help",
        element: <Help />
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRouting>
            <UserDashboard/>
          </PrivateRouting>
        ),
        children: [
          {
            path: "/dashboard",
            element: <DashboardHome />
          },
          {
            path: "/dashboard/profile/:userId",
            element: <Profile />
          },
          {
            path: "/dashboard/updateprofile/:userId",
            element: <UpdateProfile/>
          },
         {
           path:"/dashboard/addnotes/:userId",
           element:<AddNotes/>
         },
          {
            path:"/dashboard/allnotes/:userId",
            element:<AllNotes/>
          },
          {
          path: "updatenote/:id",
          element: <UpdateNotes/>
         }
        ]
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);