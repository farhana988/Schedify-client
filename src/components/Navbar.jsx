import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { CgLogOff } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/createTask">Create Task</NavLink>
      </li>
      <li>
        <NavLink to="/taskList">Task List</NavLink>
      </li>
    </>
  );

  
  return (
    <nav className="container mx-auto px-4 flex justify-between items-center py-4">
      <div>
        <Link to="/">Schedify</Link>
      </div>
      {/* middle */}
      <div>
        <ul className="flex items-center gap-10">{link}</ul>
      </div>
      <div className="flex  justify-center items-center gap-5">
        {user ? (
          <>
            <div className="user-info relative ">
              <img
                referrerPolicy="no-referrer"
                src={user?.photoURL}
                alt=""
                className="w-7 h-7 
                    lg:w-10 lg:h-10 rounded-full"
              />
              <div
                className="user-name absolute bottom--10 left-0 w-full text-xs  text-center
              font-semibold p-2 rounded opacity-0 transition-opacity duration-300"
              >
                {user?.displayName}
              </div>
            </div>
            <button onClick={logOut} className="  text-3xl">
              <CgLogOff />
            </button>
          </>
        ) : (
          <>
            {" "}
            <FaRegUserCircle />{" "}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
