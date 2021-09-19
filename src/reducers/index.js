import { combineReducers } from 'redux';
import taskReducers from './taskReducers';
// require("babel-core/register");
// require("babel-polyfill");

const reducers = combineReducers({
  tasks: taskReducers,
});

export default reducers;