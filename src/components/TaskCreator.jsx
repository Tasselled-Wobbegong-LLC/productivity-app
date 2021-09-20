/* eslint-disable */
import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import '../stylesheets/styles.css';
import { saveTasks } from '../reducers/taskReducers.js';


// class TaskCreator extends Component {

//   render(){
//     const onSave = dispatch => {
//       dispatch(saveTasks());
//     }
//     return(
//       <div>
//         <h3>Create New Tasks</h3>
//         <input type='text' id='newTask'></input>
//         {/* <input type='button' id='newTask' onClick={() => props.addTask('hello')}> Add Task</input> */}
//         <button onClick={() => {
//           onSave();
//           return props.addTask(document.getElementById('newTask').value); 
//         }
//         }>Add Task</button>
//       </div>
//     )
//   }
// }
// const TaskCreator = props =>  {
class TaskCreator extends Component {
  // dispatch = useDispatch()

  // onSave = (dispatch) => {
  //   this.dispatch(saveTasks());
  // }
  // constructor(props){
  //   super(props);
  // }

  render() {
    // console.log('this is props.taskId', this.props.taskId)
    return(
      <div>
        <h3>Create New Tasks</h3>
        <div className="input-group mb-3">
          <input type="text" id="newTask" className="form-control userInput" placeholder="Add new task..." aria-label="Add new task..." aria-describedby="button-addon2"></input>
          <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {
          return this.props.addTask(this.props.username, document.getElementById('newTask').value, this.props.taskId); 
        }}>Add Task</button>
        </div>
      </div>
    )
  }
}

export default TaskCreator;
