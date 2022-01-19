import React from 'react';
import './Tasks.css';

export default function Tasks({ task_info, is_complete }) {
  
  return (
    <><div className="list">
      <p>{task_info}</p> {is_complete 
        ? 
        <input 
          checked 
          placeholder="completed" 
          type="checkbox"
          readOnly 
        />
        : 
        <input 
          placeholder="completed" 
          type="checkbox" 
          readOnly
        />}
    </div></>
  );
}
