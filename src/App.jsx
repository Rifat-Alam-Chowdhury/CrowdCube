import React, { useContext } from "react";
import { Outlet } from "react-router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Dcontext } from "./Context/DataContext";

function App() {
  const { UserData } = useContext(Dcontext);

  return (
    <>
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
