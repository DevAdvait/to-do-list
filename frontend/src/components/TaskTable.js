import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";


const TaskTable = () => {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState({});
  const [readDescription, setReadDescription] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    const editedTask = tasks.find((task) => task._id === id);
    setEditedTask(editedTask);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setEditedTask({});
  };

  const handleSave = () => {
    axios
      .put(`http://localhost:5000/tasks/${editedTask._id}`, editedTask)
      .then((res) => {
        setTasks(res.data);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = () => {
    handleCloseModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevState) => ({ ...prevState, [name]: value }));
  };

  function changeDescripttionStatus() {
    setReadDescription(!readDescription);
  }

  const handleChangeStatus = (e, id) => {
    const selectedTask = tasks.find((task) => task._id === id);
    const updatedTask = { ...selectedTask, status: e.target.value };
    const updatedTasks = tasks.map((task) =>
      task._id === id ? updatedTask : task
    );
    setTasks(updatedTasks);
    axios
      .put(`http://localhost:5000/tasks/${id}`, updatedTask)
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {tasks && tasks.length > 0 ? (
        <Table >
          <thead>
            <tr>
              <th>Task </th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td className="task-data-cell">
                  <h3>{task.name}</h3>
                  {readDescription ? (
                    <p onClick={changeDescripttionStatus}>
                      Description
                      <a>
                        <img
                          src="https://img.icons8.com/3d-fluency/94/null/down.png"
                          style={{ width: "15px" }}
                        />
                      </a>
                    </p>
                  ) : (
                    <p>
                      {task.description}
                      <a onClick={changeDescripttionStatus}>
                        <img
                          src="https://img.icons8.com/3d-fluency/94/null/up.png"
                          style={{ width: "15px" }}
                        />
                      </a>
                    </p>
                  )}
                </td>
                <td>
                  {new Date(task.dueDate).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td>
                  <select
                    value={task.status}
                    onChange={(e) => handleChangeStatus(e, task._id)}
                    className="change-status-input"
                  >
                    <option value="Not Started">Not Started</option>
                    <option value="Active">Active</option>
                    <option value="Complete">Complete</option>
                  </select>
                </td>
                <td>
                  {editedTask._id === task._id ? (
                    <>
                      <button onClick={handleSave}>Save</button>
                      <button onClick={handleCancel}>Cancel</button>
                    </>
                  ) : (
                    <div className="actions-data-cell">
                      <button
                        onClick={() => handleEdit(task._id)}
                        className="edit"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="delete"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Table striped bordered hover size="sm" variant="dark">
          <thead>
            <tr>
              <th>Task</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tbody>
        </Table >
      )}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Task</h3>
            <form>
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                value={editedTask.name}
                onChange={handleChange}
              />
              <br />
              <label for="description">Description</label>
              <textarea
                rows={"4"}
                cols={"50"}
                name="description"
                value={editedTask.description}
                onChange={handleChange}
              ></textarea>
              <br />
              <label for="dueDate">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={editedTask.dueDate}
                onChange={handleChange}
              />
              <br />
              <div className="edit-form-button-div">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskTable;
