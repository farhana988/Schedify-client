import axios from "axios";
import { useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../../components/Loading";
import TaskListContent from "./TaskListContent";
import Swal from "sweetalert2";

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
      } catch {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Something went wrong. Please try again.",
          confirmButtonText: "OK",
        });
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
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Failed to update task status. Please try again.",
        confirmButtonText: "OK",
      });
    },
  });

  // delete
  const deleteTask = useMutation({
    mutationFn: async (id) => {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to undo this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axios.delete(`${import.meta.env.VITE_API_URL}/tasks/${id}`);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "The task has been deleted.",
          toast: true,
          position: "top-end",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: "Failed to delete task. Please try again.",
        confirmButtonText: "OK",
      });
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
