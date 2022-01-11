import React, { useEffect, useState } from 'react';
import Tasks from '../components/Tasks';
import { fetchTodos } from '../services/todos';

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
      {tasks.map((task) => (
        <Tasks key={task.id} {...task} />
      ))}
            
    </div>
  );
}
