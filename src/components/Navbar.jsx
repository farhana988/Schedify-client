import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { CgLogOff } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const link = (
    <>
      <li>
        <NavLink to="/"
         className={({ isActive }) =>
          ` ${
            isActive
              ? "md:text-lg lg:text-2xl font-bold italic"
              : "font-medium  lg:text-lg "
          }`}
        >Home</NavLink>
      </li>
      <li>
        <NavLink to="/createTask"
           className={({ isActive }) =>
            ` ${
              isActive
                ? "md:text-lg lg:text-2xl font-bold italic"
                : "font-medium  lg:text-lg "
            }`}>Create Task</NavLink>
      </li>
      <li>
        <NavLink to="/taskList"
           className={({ isActive }) =>
            ` ${
              isActive
                ? "md:text-lg lg:text-2xl font-bold italic"
                : "font-medium  lg:text-lg "
            }`}>Task List</NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed z-50 bg-[#B3D8A8]/70 w-full">
      <nav className="container mx-auto px-4 flex justify-between items-center py-4 ">
        <div className="flex gap-2 ">
          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <GiHamburgerMenu className="text-xl lg:text-2xl mt-1" />
            </button>
          </div>
          <Link to="/" className="text-xl lg:text-2xl font-bold italic">

            Schedify
          </Link>
        </div>

        {/* Middle Links */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-10">{link}</ul>
        </div>

        {/* Right Side (User Info and Logout) */}
        <div className="flex justify-center items-center gap-5">
          {user ? (
            <>
              <div className="user-info relative">
                <img
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt="User"
                  className="w-7 h-7 lg:w-10 lg:h-10 rounded-full"
                />
                <div className="user-name absolute bottom-[-10px] left-0 w-full text-xs text-center font-semibold p-2 rounded opacity-0 transition-opacity duration-300">
                  {user?.displayName}
                </div>
              </div>
              <button onClick={logOut} className="text-3xl lg:text-4xl">
                <CgLogOff />
              </button>
            </>
          ) : (
            <FaRegUserCircle className="text-3xl" />
          )}
        </div>

        {/* Mobile Menu  */}
        {menuOpen && (
          <div className="absolute top-[61px] left-0 right-0 bg-[#B3D8A8] shadow-md 
          lg:hidden z-10">
            <ul className="flex flex-col  pl-12 pb-4 gap-2  text-lg">{link}</ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
