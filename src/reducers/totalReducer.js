import { RECEIVE_NEW_ACTIVITY } from '../actions/activityActions';
import merge from 'lodash/merge';

const totalReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_ACTIVITY:
      newState = merge({}, state);
      let activityVal = newState[action.activity.username];
      if(activityVal) {
        newState[action.activity.username] += action.activity.activityValue;
      } else {
        newState[action.activity.username] = action.activity.activityValue;
      }
      return newState;
    default:
      return state;
  }
}

export default totalReducer;
