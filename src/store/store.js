import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

export const history = createHistory();

const middleware = [
  thunk,
  routerMiddleware(history)
];

// Configure the logger middleware
const logger = createLogger({
  level: 'info',
  collapsed: true
})

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export function configureStore(initialState = {}) {
  // Create the redux store and add middleware to it
  let configureStore = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )

  return configureStore;
}