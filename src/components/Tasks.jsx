import React from 'react';
import '../stylesheets/styles.css';

const Tasks = (props) => {
  // console.log(`task props ${props.taskList}`)
  return (
    <div>
      <h1>{props.taskName}</h1>
    </div>
  )
}

export default Tasks;
