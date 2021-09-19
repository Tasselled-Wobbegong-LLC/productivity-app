import React from 'react';
import Tasks from './Tasks'
import '../stylesheets/styles.css';

const TaskDisplay = props => {
  const tasks = [];
  const taskList = props.taskList;
  for (let id in taskList) {
    tasks.push(<Tasks key={id} taskName={taskList[id].task} />)
  };
  console.log(tasks);
  return (
    <div>
      {tasks}
    </div>
  )
}

export default TaskDisplay;
