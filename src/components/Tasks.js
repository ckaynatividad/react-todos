import React from 'react';
import { Link } from 'react-router-dom';

export default function Tasks({ task_info, is_complete, id }, setNew) {
  return (
    <div>
      <p>{task_info}</p>
      <p>completed? {is_complete ? 'yes' : 'no'} </p>
    </div>
  );
}
