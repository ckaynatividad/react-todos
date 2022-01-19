import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TaskForm({ task, setNew, handleSubmit }) {
  return (
    <form>
      <input 
        placeholder="New Task" 
        type="text" 
        value={task.task_info} 
        onChange={(e) => {setNew(e.target.value); }} /> <button onClick={handleSubmit}>Enter</button>

      {/* <label>completed?</label>
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
          onChange={(e) => {setBool('is_complete', e.target.checked); }} />} */}
      <NavLink className="words" to="/">  cancel</NavLink> 
    </form>
  );
}
