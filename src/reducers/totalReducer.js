import { RECEIVE_NEW_ACTIVITY } from '../actions/activityActions';
import merge from 'lodash/merge';

const totalReducer = (state = {}, action) => {
  debugger
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_ACTIVITY:
      newState = merge({}, state);
      newState[action.activity.username] += action.activityValue
      return newState;
    default:
      return state;
  }
}

export default totalReducer;
