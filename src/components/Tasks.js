import React from 'react';

export default function Tasks({ task, is_complete }) {
  return (
    <div>
      <p>{task}</p>
      <p>completed? {is_complete}</p>
    </div>
  );
}
