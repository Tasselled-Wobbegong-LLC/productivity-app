/* eslint-disable */
import * as types from '../constants/actionTypes';

const initialState = {
  taskList: {},
  taskId: 0,
  loggedIn: false,
  username: '',
};

export default function taskReducers(state = initialState, action) {
  let taskList;
  let { taskId } = state;

  switch (action.type) {
    case 'ADD_TASK': {
      const newTask = {
        taskId: {
          task: action.payload,
          completed: false,
        },
      };

      // make a copy of state for taskList
      // taskList = Object.create({}, state.taskList);
      // taskList[taskId] = newTask.taskId;
      taskList = JSON.parse(JSON.stringify(state.taskList));
      taskList[taskId] = newTask.taskId;
      taskId = state.taskId + 1;
      return {
        ...state,
        taskList,
        taskId,
      };
    }
    case 'ADD_USER': {
      return {
        ...state,
        loggedIn: true,
      };
    }
    case 'CHECK_USER': {
      // console.log(`action payload`,action.payload.username);
      const tasks = action.payload.response;
      taskList = {};
      for (const [key, value] of Object.entries(tasks)) {
        taskList[key] = {
          task: value.taskName,
          completed: value.isCompleted,
        }
        // console.log(value.taskName)
        // console.log(key, value);
      }
      // console.log(taskList);
      return {
        ...state,
        taskList,
        loggedIn: action.payload.validated,
        username: action.payload.username,
      };
    }
    default: {
      return state;
    }
  }
}
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
