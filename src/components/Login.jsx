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
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;