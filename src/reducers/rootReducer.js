import { combineReducers } from 'redux';
import { currentUserReducer } from './currentUserReducer';
import activitiesReducer from './activitiesReducer'
import totalReducer from './totalReducer'

const rootReducer = combineReducers({
  currentUser: currentUserReducer, 
  activities: activitiesReducer,
  total: totalReducer
});

export default rootReducer;
