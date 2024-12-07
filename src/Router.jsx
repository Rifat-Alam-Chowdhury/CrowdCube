import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import App from "./App";
import AllCampaign from "./components/AllCampaign";
import Add_New_Campaign from "./components/Add_New_Campaign";
import My_Campaigns from "./components/My_Campaigns";
import My_Donations from "./components/My_Donations";
import Login from "./components/Login";
import CampainDetails from "./components/CampainDetails";
import SignUp from "./components/SignUp";
import Private from "./components/Private/Private";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://crowdcudee-backend.vercel.app"),
      },

      {
        path: "/AllCampaign",
        element: <AllCampaign />,
        loader: () => fetch("https://crowdcudee-backend.vercel.app"),
      },
      {
        path: "/AddNewCampaign",
        element: (
          <Private>
            <Add_New_Campaign />
          </Private>
        ),
      },
      {
        path: "/MyCampaigns",
        element: (
          <Private>
            <My_Campaigns />
          </Private>
        ),
      },
      {
        path: "/MyDonations",
        element: (
          <Private>
            <My_Donations />
          </Private>
        ),
        loader: () => fetch("http://localhost:5000/"),
      },
      {
        path: "/campaignDetails/:id",
        element: <CampainDetails></CampainDetails>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/SignUp",
    element: <SignUp></SignUp>,
  },
]);
