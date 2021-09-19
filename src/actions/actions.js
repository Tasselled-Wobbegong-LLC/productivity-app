import * as types from '../constants/actionTypes';
import thunk from 'redux-thunk';

export const addTaskActionCreator = task => ({
  type: types.ADD_TASK,
  payload: task,
});


// &username=${username}
// Body needs to match content-type
export const saveTasks = (task, taskId) => async (dispatch,getState) => {
  console.log('this is getstate', getState());
  const tasks = `task=${task}&taskId=${taskId}&isCompleted=${false}`;
  await fetch('http://localhost:3000/testing', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: tasks,
  })
  console.log(dispatch)
  return dispatch(addTaskActionCreator(task));
}