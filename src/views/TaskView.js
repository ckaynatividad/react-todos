import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Task from '../components/Task';
import { deleteTodo, fetchTodoId } from '../services/todos';

export default function TaskView() {
  const [task, setTask] = useState([]);

  const history = useHistory();
 
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodoId(params.id);
      setTask(data[0]);
    };
    fetchData();
  }, [params.id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    try { await deleteTodo(task.id) ;
      alert('Task successfully deleted');
      history.push(`/`);
    } catch {
      alert('Try deleting again, something went wrong');
    }
  };
  return (
    <div>
      <Task key={task.id} {...task} handleDelete={handleDelete} />
    </div>
  );
}
