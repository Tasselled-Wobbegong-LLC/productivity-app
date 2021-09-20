import * as types from '../constants/actionTypes';
import axios from 'axios';
import thunk from 'redux-thunk';

export const addTaskActionCreator = task => ({
  type: types.ADD_TASK,
  payload: task,
});

export const addUserActionCreator = () => ({
  type: types.ADD_USER,
});

export const checkUserActionCreator = (validated) => ({
  type: types.CHECK_USER,
  paload: validated,
});

//Add a new user
export const addUser = (username, password) => async (dispatch,getState) => {
  await fetch('http://localhost:3000/signup', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-type' : 'application/x-www-form-urlencoded'
    },
    //body is currently hardcoded
    body: `username=${username}&password=${password}`
  })
  return dispatch(addUserActionCreator());
}

export const checkUser = (username, password) => (dispatch, getState) => {
  // await fetch('http://localhost:3000/login', {
  //   method: 'POST',
  //   mode: 'no-cors',
  //   headers: {
  //     'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  //   },
  //   // headers:{
  //   //   'Content-type': 'application/json',
  //   // },
  //   // body: JSON.stringify({username: username, password: password}),
  //   body: `username=${username}&password=${password}`,
  // })
  //   .then((response) => response.json())
  //   .then((response) => console.log('response is...: ', response))
  //   .catch((error) => {
  //     console.log(error);
  axios
  //   axios.post('/user', {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   },{
  //   headers:{
  //     Accept: 'application/json',
  //    'Content-Type': 'application/json',
  //     Authorization: 'Bearer ' + token // if you use token
  // }JSON.stringify({username: username, password: password})
    .post('http://localhost:3000/login',
    `username=${username}&password=${password}`,
      {
        mode: 'no-cors',
        headers: {
          'Accept' : 'application/json',
          'Content-type': 'application/x-www-form-urlencoded',
        },
      })
    .then(response => console.log(response.data.task))
  // });
  // await ((response) => {console.log(response)})//ohh okay, coming
  // .then(response => {
  //   console.log(`response is ${response}`)
  //   // console.log(response)
  //   console.log(userTasks)
  const validated = true;
  return dispatch(checkUserActionCreator(validated));
};
// &username=${username}
// Body needs to match content-type
export const saveTasks = (task, taskId) => async (dispatch, getState) => {
  const username = 'SecondUser';
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