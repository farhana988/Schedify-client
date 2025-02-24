import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const {signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate()
  const handleLogin = async () => {
    try {
       await signInWithGoogle();
       Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have successfully logged in!",
        toast: true,
        position: "top-end",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
      });
       navigate('/createTask')
    } catch  {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Something went wrong. Please try again.",
        confirmButtonText: "OK"
      });
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={handleLogin}
        className="bg-[#ec8619] font-semibold rounded-t-4xl rounded-b-md px-5 py-3 cursor-pointer"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;