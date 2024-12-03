import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () =>
          fetch("https://crowdcudee-backend.vercel.app/home", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(),
          }),
      },
    ],
  },
]);
