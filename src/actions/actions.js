import * as types from '../constants/actionTypes';
import thunk from 'redux-thunk';

export const addTaskActionCreator = task => ({
  type: types.ADD_TASK,
  payload: task,
});

export const addUserActionCreator = () => ({
  type: types.ADD_USER,
});

export const addUser = (username, password) => async (dispatch,getState) => {
  await fetch('http://localhost:3000/login', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    // body: `username=${username}&password=${password}`
    body: `username=SecondUser`
  })
  return dispatch(addUserActionCreator());
}

// &username=${username}
// Body needs to match content-type
export const saveTasks = (task, taskId) => async (dispatch,getState) => {
  const username = 'FakeUsername';
  console.log('this is getstate', getState());
  const tasks = `task=${task}&taskId=${taskId}&isCompleted=${false}&username=${username}`;
  await fetch('http://localhost:3000/addtask', {
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