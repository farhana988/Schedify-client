import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="min-h-screen">
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default MainLayout;
