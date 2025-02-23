import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import CreateTaskForm from "./CreateTaskForm";

const CreateTask = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const taskInfo = {
      ...data,
      date: new Date(),
      category: "todo",
      user: { name: user?.displayName, email: user?.email },
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/tasks`, taskInfo);
      alert("success");
      navigate("/taskList");
    } catch {
      alert("error");
    }
  };

  return (
    <div className="container mx-auto mt-10 p-6 ">
      <h2 className="text-3xl font-bold mb-10 text-center">Create New Task</h2>
      <CreateTaskForm
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
      ></CreateTaskForm>
    </div>
  );
};

export default CreateTask;
