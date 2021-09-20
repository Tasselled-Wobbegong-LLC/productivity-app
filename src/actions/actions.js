/* eslint-disable */
import axios from 'axios';
// import thunk from 'redux-thunk';
import * as types from '../constants/actionTypes';

export const addTaskActionCreator = (task) => ({
  type: types.ADD_TASK,
  payload: task,
});

export const addUserActionCreator = () => ({
  type: types.ADD_USER,
});

export const checkUserActionCreator = (validated, response) => ({
  type: types.CHECK_USER,
  payload: {
    validated : validated,
    response: response.task,
    username: response.username,
  },
});

// Add a new user
export const addUser = (username, password) => (dispatch, getState) => {
  axios
    .post('http://localhost:3000/signup',
      `username=${username}&password=${password}`,
      {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          'Content-type': 'application/x-www-form-urlencoded',
        },
      })
    .then((response) => {
      // response received is an empty object
      console.log('expecting none for signup', response);
      return dispatch(addUserActionCreator());
    })
    .catch((error) => console.log('Error from /signup page, username exists'));
};

export const checkUser = (username, password) => (dispatch, getState) => {
  console.log(username)
  console.log('this is getstate', getState());
  axios
    .post('http://localhost:3000/login',
      `username=${username}&password=${password}`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      })
    // do something here
    .then((response) => {
      // console.log('checkUser: response', response.data.task);
      // console.log('response.data.task', response.data.task.task);
      const validated = true;
      if (!response.data.task) return dispatch(checkUserActionCreator(validated));
      else return dispatch(checkUserActionCreator(validated, response.data.task));
    });
};
// &username=${username}
// Body needs to match content-type
export const saveTasks = (username, task, taskId) => (dispatch, getState) => {
  console.log('saveTasks username, ', username);
  console.log('saveTasks task action, ', task);
  console.log('saveTasks taskId action, ', taskId);
  // console.log('this is getstate', getState());
  const tasks = `task=${task}&taskId=${taskId}&isCompleted=${false}&username=${username}`;
  axios
    .post('http://localhost:3000/addtask',
      tasks,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      })
    .then((response) => {
      console.log('response from the saveTasks: ', response);
      return dispatch(addTaskActionCreator(task));
    });
};
