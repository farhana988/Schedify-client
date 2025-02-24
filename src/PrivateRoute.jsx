/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import Loading from "./components/Loading";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (user) return children;

  if (loading) return <Loading></Loading>;
    Swal.fire({
    icon: "warning",
    title: "Unauthorized",
    text: "Please sign in first.",
    confirmButtonText: "OK"
  });
  return <Navigate to="/" state={location.pathname} />;
};

export default PrivateRoute;
