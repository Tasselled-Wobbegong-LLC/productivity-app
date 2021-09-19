import * as types from '../constants/actionTypes';
import thunk from 'redux-thunk';


const initialState = {
  taskList: {},
  taskId: 0,
  loggedIn: false,
};

export default function taskReducers(state = initialState, action) {
  let taskList;
  let taskId = state.taskId;

  switch (action.type) {
    case 'ADD_TASK' : {
      const newTask = {
        taskId : {
          task: action.payload,
          completed: false
        }
      };

      //make a copy of state for taskList
      // taskList = Object.create({}, state.taskList);
      // taskList[taskId] = newTask.taskId;
      taskList = JSON.parse(JSON.stringify(state.taskList));
      taskList[taskId] = newTask.taskId;
      taskId = state.taskId + 1;
      return {
        ...state,
        taskList: taskList,
        taskId: taskId,
      }
    };
    case 'ADD_USER': {
      return {
        ...state,
        loggedIn: true,
      }
    }; 
    // maybe try putting your fetch into action.js as a thunk?, going back to server.js. bbye

    default : {
      return state;
    } 
  }
};
/*  Redux-Thunks  (is a middleware, allows you to make action-creations return a function)

Thunks are just like action-creators, but of creating an object used to modify state,
they create a function that gives you access to your state, and dispatch new  actions

  export const saveTasks = () => async (dispatch,getState) => {
    const tasks = getState().taskList?
    await fetch('localhost:3000/testing??',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(tasks)
    })
  }
  - The second function is postponed until a certain condition is met.

*/