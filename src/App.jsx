import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, Outlet } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>saas</h1>
      <Outlet></Outlet>
    </>
  );
}

export default App;
