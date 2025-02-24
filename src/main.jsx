import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "./layout/MainLayout";
import TaskList from "./pages/TaskList/TaskList";
import CreateTask from "./pages/CreateTask/CreateTask";
import PrivateRoute from "./PrivateRoute";

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/createTask",
        element: <PrivateRoute> <CreateTask></CreateTask> </PrivateRoute> ,
      },
      {
        path: "/taskList",
        element: <PrivateRoute>  <TaskList></TaskList> </PrivateRoute>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
