import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import App from "./App";
import AllCampaign from "./components/AllCampaign";
import Add_New_Campaign from "./components/Add_New_Campaign";
import My_Campaigns from "./components/My_Campaigns";
import My_Donations from "./components/My_Donations";
import Login from "./components/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("https://crowdcudee-backend.vercel.app"),
      },
      {
        path: "/AllCampaign",
        element: <AllCampaign />,
        loader: () => fetch("https://crowdcudee-backend.vercel.app"),
      },
      {
        path: "/Add_New_Campaign",
        element: <Add_New_Campaign />,
      },
      {
        path: "/My_Campaigns",
        element: <My_Campaigns />,
      },
      {
        path: "/My_Donations",
        element: <My_Donations />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
