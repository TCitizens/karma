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
    event_: 'fed a person in need',
     date: 'Saturday, August 12'
  }
  let activity2 = {
    username: 'alice',
    avatar: Pikachu,
    activityValue: 50,
    event_: 'donated to a social cause',
    date: 'Saturday, August 11'
  }
  let activity3 = {
    username: 'ken',
    avatar: Bullbasaur,
    activityValue: 20,
    event_: 'donated to a social cause',
    date: 'Sunday, August 12'
  }
  let activity4 = {
    username: 'ken',
    avatar: Bullbasaur,
    activityValue: 15,
    event_: 'provided mentorship',
    date: 'Sunday, August 10'
  }
  let activity5 = {
    username: 'ken',
    avatar: Bullbasaur,
    activityValue: 3,
    event_: 'payed it forward',
    date: 'Sunday, August 10'
  }
  initialState = {
    activities: [activity1, activity2, activity3, activity4, activity5],
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
