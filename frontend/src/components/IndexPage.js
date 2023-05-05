import { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";
import TaskTable from "./TaskTable";

export default function IndexPage() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [showAddTaskForm, setShowAddTaskForm] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleTaskAdd = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskDelete = (taskId) => {
    if (tasks.length > 0) {
      setTasks(tasks.filter((task) => task._id !== taskId));
    }
  };

  const handleTaskEdit = (taskId) => {
    setEditTask(tasks.find((task) => task._id === taskId));
  };

  const changeAddTaskFormStatus = () => {
    setShowAddTaskForm(!showAddTaskForm);
  };

  return (
    <div style={{marginTop:"1rem"}}>
      {showAddTaskForm ? (
        <div className="add-task-form-div">
          <button
            onClick={changeAddTaskFormStatus}
            className="display-task-form-button"
          >
            Add Task
          </button>
        </div>
      ) : (
        <div className="add-task-form-div">
          <button
            onClick={changeAddTaskFormStatus}
            className="display-task-form-button"
          >
            Hide Task Form
          </button>
          <div className="form-div">
            <TaskForm onTaskAdd={handleTaskAdd} className="add-task-form" />
          </div>
        </div>
      )}
      <TaskTable
        tasks={tasks}
        onTaskDelete={handleTaskDelete}
        onTaskEdit={handleTaskEdit}
      />
    </div>
  );
}
