/* eslint-disable */
import React from 'react';
import Tasks from './Tasks'
import '../stylesheets/styles.css';

const TaskDisplay = props => {
  const tasks = [];
  const taskList = props.taskList;
  // console.log('task display props', props);
  for (let id in taskList) {
    // console.log(`id in for in loop`, id)
    tasks.push(<Tasks key={id} id={id} taskName={taskList[id].task} toggleTask={props.toggleTask}/>)
  };
  // console.log(tasks);
  return (
    <div className="list-group">
      {tasks}
    </div>
  )
}

export default TaskDisplay;
