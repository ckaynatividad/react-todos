import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Footer from '../components/Footer';
import TaskForm2 from '../components/TaskForm2';
import { deleteTodo, fetchTodoId, updateTodo } from '../services/todos';

export default function EditTodo() {
  const [task, setTask] = useState({});

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodoId(params.id);
      setTask(data[0]);
    };
    fetchData();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { await updateTodo(task);
      alert('Task updated');
      history.push(`/`);
    } catch {
      alert('Try again');
    }};

  const handleDelete = async (e) => {
    e.preventDefault();
    try { await deleteTodo(task.id) ;
      alert('Task successfully deleted');
      history.push(`/`);
    } catch {
      alert('Try deleting again, something went wrong');
    }
  };

  const setBool = (key, value) => {
    task[key] = value;
    setTask({ ...task });
  };
  const setNew = description => {
    setTask(prevState => ({ ...prevState, task_info: description }));
  };
  return (
    <div>
      <TaskForm2 task={task} handleSubmit={handleSubmit} handleDelete={handleDelete} setNew={setNew} setBool={setBool} /> 
      <Footer />    
    </div>
  );
}
