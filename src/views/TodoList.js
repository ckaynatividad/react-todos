import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import { fetchTodos } from '../services/todos';
import './TodoList.css';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodos();
      setTasks(data);
    };
    fetchData();
  }, []);
  return (
    <div className="toDolist">
      <header>
        <h1>Task</h1>
        <h1>Status</h1>
      </header>
      
      {tasks.map((task) => (
        <Link key={task.id} to={`/${task.id}/edit`}><Tasks key={task.id} {...task} /></Link>
      ))}
    </div>
  );
}
