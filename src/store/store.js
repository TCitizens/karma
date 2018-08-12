import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import Bullbasaur from '../assets/bullbasaur.png'
import Snorlax from '../assets/snorlax.png'
import Pikachu from '../assets/pikachu.png'

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
   let activity1 = {
    username: 'bob',
    avatar: Snorlax,
    activityValue: 4,
    event_: 'Bob fed a person in need',
    date: '7:00 Saturday, August 11'
  }
  let activity2 = {
    username: 'alice',
    avatar: Pikachu,
    activityValue: 50,
    event_: 'Alice donated to a social cause',
    date: '8:00 Saturday, August 11'
  }
  let activity3 = {
    username: 'ken',
    avatar: Bullbasaur,
    activityValue: 20,
    event_: 'ken donated to a social cause',
    date: '9:00 Sunday, August 12'
  }
  initialState = {
    activities: [activity1, activity2, activity3],
    total: {
      bob: {
        points: 100
      },
      alice: {
        points: 200
      },
      ken: {
        points: 150
      }
    }
  }

  let configureStore = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )

  return configureStore;
}
