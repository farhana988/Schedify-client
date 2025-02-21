import { useState } from "react";
import CreateTask from "../components/CreateTask";

const Home = () => {
  const [tasks, setTasks] = useState([])
  return (
    <div>
      <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
    </div>
  );
};

export default Home;