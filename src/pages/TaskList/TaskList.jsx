import axios from "axios";
import { useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../../components/Loading";
import TaskListContent from "./TaskListContent";

const TaskList = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const categories = [
    { title: "To-Do", status: "todo" },
    { title: "In Progress", status: "inProgress" },
    { title: "Done", status: "done" },
  ];

  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      try {
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/tasks?email=${user?.email}`
        );
        return data;
      } catch  {
        alert("Something went wrong.");
     
      }
    },
  });

  // update
  const updateTaskStatus = useMutation({
    mutationFn: async ({ id, newStatus }) => {
      await axios.patch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        category: newStatus,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: () => {
      alert("Failed to update task status.");
    },
  });

  // delete
  const deleteTask = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${import.meta.env.VITE_API_URL}/tasks/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      alert("Task deleted!");
    },
    onError: () => {
      alert("Failed to delete task.");
    },
  });

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceTasks = tasks.filter(
      (task) => task.category === source.droppableId
    );

    const movedTask = sourceTasks[source.index];

    if (!movedTask) return;

    if (movedTask.category !== destination.droppableId) {
      updateTaskStatus.mutate({
        id: movedTask._id,
        newStatus: destination.droppableId,
      });
    }
  };

  if (isLoading) return <Loading></Loading>;

  if (isError) return <p>{error.message}</p>;

  return (
    <div className="container mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold text-center mb-36">Task List</h2>
      <h2> </h2>
      <TaskListContent
        categories={categories}
        deleteTask={deleteTask}
        handleDragEnd={handleDragEnd}
        tasks={tasks}
      ></TaskListContent>
    </div>
  );
};
export default TaskList;
