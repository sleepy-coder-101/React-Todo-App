import AddTask from "./components/Tasks/AddTask";
import MainNavigation from "./components/Layout/MainNavigation";
import TaskList from "./components/Tasks/TaskList";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addTaskHandler = async (task) => {
    // console.log("RENDERING ADD TASK");

    const response = await fetch(
      `https://todo-app-135-default-rtdb.firebaseio.com/tasks.json`,
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setTasks((prevTasks) => [{ id: data.name, ...task }, ...prevTasks]);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      // console.log("RENDERING FETCH TASK");
      setIsLoading(true);
      const response = await fetch(
        `https://todo-app-135-default-rtdb.firebaseio.com/tasks.json`
      );
      //error checking
      if (response.status !== 200) {
        console.log("Some error occured!");
        return;
      }

      const data = await response.json();
      setIsLoading(false);
      const loadedTasks = [];
      for (const key in data) {
        loadedTasks.unshift({
          id: key,
          title: data[key].title,
          description: data[key].description,
        });
      }
      setTasks(loadedTasks);
    };
    fetchTasks();
  }, []);

  const removeTaskHandler = async (taskId) => {
    // console.log("RENDERING REMOVE TASK");
    setIsLoading(true);
    await fetch(
      `https://todo-app-135-default-rtdb.firebaseio.com/tasks/${taskId}.json`,
      {
        method: "DELETE",
      }
    );
    setIsLoading(false);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <MainNavigation />
      <AddTask onAddTask={addTaskHandler} />
      <TaskList
        onTaskArray={tasks}
        onTaskRemove={removeTaskHandler}
        loading={isLoading}
      />
    </div>
  );
}

export default App;
