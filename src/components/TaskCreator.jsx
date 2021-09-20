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
        <input type='text' id='newTask'></input>
        {/* <input type='button' id='newTask' onClick={() => props.addTask('hello')}> Add Task</input> */}
        <button onClick={() => {
          // onSave(dispatch);
          return this.props.addTask(document.getElementById('newTask').value, this.props.taskId); 
        }
        }>Add Task</button>
      </div>
    )
  }
}

export default TaskCreator;
