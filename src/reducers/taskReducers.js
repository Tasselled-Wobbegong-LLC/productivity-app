import * as types from '../constants/actionTypes';

const initialState = {
  taskList: {},
  taskId: 0,
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
      // taskList = state.taskList.slice();
      // taskList.push(newTask);
      taskList = Object.create({}, taskList);
      taskList[taskId] = newTask.taskId;
      taskId = state.taskId + 1;
      return {
        ...state,
        taskList: taskList,
        taskId: taskId,
      }
    };
    default : {
      return state;
    } 
  };
};