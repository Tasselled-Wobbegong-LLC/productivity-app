import React from 'react';
import LogIn from '../components/LogIn';
import TaskContainer from './TaskContainer';
import '../stylesheets/styles.css';

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render(){
    return(
      <div>
        <LogIn />
        <TaskContainer />
      </div>
    );
  }
}

export default MainContainer;
