import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const enhancers = [composeWithDevTools(),applyMiddleware(thunk)];

const store = createStore(
  reducers,
  compose(...enhancers)
);

export default store;