import React from 'react';

export default function TaskForm({ task, setNew, setBool, handleSubmit, handleDelete }) {
  return (
    <form>
      <label>task name</label>
      <input 
        placeholder="task" 
        type="text" 
        value={task.task_info} 
        onChange={(e) => {setNew(e.target.value); }} />

      <label>completed?</label>
      {task.is_complete 
        ? 
        <input 
          checked 
          placeholder="completed" 
          type="checkbox" 
          onChange={(e) => {setBool('is_complete', e.target.checked); }} />
        : 
        <input 
          placeholder="completed" 
          type="checkbox" 
          onChange={(e) => {setBool('is_complete', e.target.checked); }} />}

      <button onClick={handleSubmit}>insert task</button>
      <button onClick={handleDelete}>Delete Task</button>
    </form>
  );
}
