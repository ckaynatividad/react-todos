import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TaskForm({ task, setNew, setBool, handleSubmit, handleDelete }) {
  return (
    <form>
      <label>Task </label>
      <input 
        placeholder="task" 
        type="text" 
        value={task.task_info} 
        onChange={(e) => {setNew(e.target.value); }} />

      <label> Completed?</label>
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

      <p><button onClick={handleSubmit}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </p>
      <p><NavLink className="words" to="/">go back</NavLink> </p>
    </form>
  );
}
