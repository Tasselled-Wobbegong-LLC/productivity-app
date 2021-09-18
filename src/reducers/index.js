import { combineReducers } from 'redux';
import taskReducers from './taskReducers';

const reducers = combineReducers({
  tasks: taskReducers,
});

export default reducers;