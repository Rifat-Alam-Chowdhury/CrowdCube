import { createBrowserRouter } from "react-router";
import App from "./App";
import HOME from "./HOME";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HOME></HOME>,
      },
    ],
  },
]);
