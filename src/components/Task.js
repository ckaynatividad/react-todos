import React from 'react';

export default function Task(props) {
  return (
    <><h1>{props.task}</h1><p>{props.is_complete}</p></>
  );
}
