import React from "react";
import { Outlet } from "react-router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* navbar thakbe */}
      <Nav></Nav>

      <div className="min-h-[calc(100vh-286px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
      {/* footer thkbe */}
    </>
  );
}

export default App;
