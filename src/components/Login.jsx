import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate()
  const handleLogin = async () => {
    try {
       await signInWithGoogle();
       navigate('/createTask')
    } catch (error) {
      console.error(error);
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