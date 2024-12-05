import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Router.jsx";
import DataContext from "./Context/DataContext.jsx";
import AuthCOntext from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthCOntext>
      <DataContext>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </DataContext>
    </AuthCOntext>
  </StrictMode>
);
