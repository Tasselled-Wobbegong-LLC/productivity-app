import React from 'react';
import Tasks from './Tasks'
import '../stylesheets/styles.css';

const TaskDisplay = props => {
  console.log(`task display`)
  console.log(props)
  const tasks = [];
  for (let i = 0; i < props.taskList.length; i++) {
    tasks.push(<Tasks key={i} taskName={props.taskList[i].task} />)
  }
    return (
      <div>
        {tasks}
      </div>
    )
}

export default TaskDisplay;
