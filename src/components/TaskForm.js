import React from 'react';

export default function TaskForm({ task, setNew, handleSubmit }) {
  return (
    <form>
      <label>task name</label>
      <input placeholder="task" type="text" value={task.task} onChange={(e) => {setNew('task', e.target.value); }} />

      <label>completed?</label>
      <input placeholder="completed" type="checkbox" value={task.is_complete} onChange={(e) => {setNew('is_complete', e.target.value); }} />

      <button onClick={handleSubmit}>insert task</button>
    </form>
  );
}
