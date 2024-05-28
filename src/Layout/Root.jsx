import { Outlet } from "react-router-dom";
import { Aloqa, Navbar } from "../components";

const Root = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <header className="flex-1">
        <Navbar />
      </header>
      <main  className="flex-1">
        <Outlet />
      </main>
      <Aloqa />
    </div>
  );
};

export default Root;