import { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const task = { name, description, dueDate };
    axios.post('https://to-do-list-backend-jkba.onrender.com/tasks', task)
      .then(res => {
        console.log(res.data);
        setName('');
        setDescription('');
        setDueDate('');
      })
      .catch(err => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />

      <label htmlFor="description">Description:</label>
      <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} />

      <label htmlFor="dueDate">Due Date:</label>
      <input type="date" id="dueDate" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
