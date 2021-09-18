import React from 'react';
import Tasks from './Tasks'
import '../stylesheets/styles.css';

class TaskDisplay extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Tasks />
      </div>
    )
  }
}

export default TaskDisplay;
