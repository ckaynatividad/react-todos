import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import TaskForm from '../components/TaskForm';
import { fetchTodoId, updateTodo } from '../services/todos';

export default function EditTodo(props) {
  const [task, setTask] = useState({});

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodoId(props.match.params.id);
      setTask(data[0]);
    };
    fetchData();
  }, [props.match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { await updateTodo(task);
      alert('Task updated');
      history.push(`/${task.id}`);
    } catch {
      alert('Try again');
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
