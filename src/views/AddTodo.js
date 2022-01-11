import React, { useState } from 'react';
import { useHistory } from 'react-router';
import TaskForm from '../components/TaskForm';
import { createTodo } from '../services/todos';

export default function AddTodo() {
  const [task, setTask] = useState({});
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { await createTodo(task) ;
      alert('Task created');
      history.push(`/`);
    } catch {
      alert('Task not created');
    }};

  const setNew = (key, value) => {
    task[key] = value;
    setTask({ ...task });
  };
  return (
    <div>
      <TaskForm task={task} handleSubmit={handleSubmit} setNew={setNew} />
    </div>
  );
}
