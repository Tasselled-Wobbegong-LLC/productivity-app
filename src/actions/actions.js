import * as types from '../constants/actionTypes';

export const addTaskActionCreator = task => ({
  type: types.ADD_TASK,
  payload: task,
});
