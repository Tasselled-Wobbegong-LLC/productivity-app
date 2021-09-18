import React from 'react';
import TaskCreator from '../components/TaskCreator';
import TaskDisplay from '../components/TaskDisplay';
import '../stylesheets/styles.css';

class TaskContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  
  render() {
    return (
      <div>
        <TaskCreator />
        <TaskDisplay />
      </div>
    )
  }
}

export default TaskContainer;
