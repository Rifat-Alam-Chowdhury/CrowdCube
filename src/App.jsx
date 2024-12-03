import { Outlet } from "react-router";

function App() {
  return (
    <>
      <h1 className="text-2xl text-green-700 bg-green-500">test</h1>
      {/* navbar thakbe */}
      <Outlet></Outlet>
      {/* footer thkbe */}
    </>
  );
}

export default App;
