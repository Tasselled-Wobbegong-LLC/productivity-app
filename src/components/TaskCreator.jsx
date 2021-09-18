import React from 'react';
import '../stylesheets/styles.css';

const TaskCreator = (props) => {
  return(
    <div>
      <h3>Create New Tasks</h3>
      <input type='text' id='newTask'></input>
      {/* <input type='button' id='newTask' onClick={() => props.addTask('hello')}> Add Task</input> */}
      <button onClick={() => props.addTask(document.getElementById('newTask').value)}>Add Task</button>
    </div>
  )
}

export default TaskCreator;
