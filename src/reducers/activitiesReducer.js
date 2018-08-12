import {RECEIVE_NEW_ACTIVITY} from '../actions/activityActions';
import merge from 'lodash/merge';

const activitiesReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_ACTIVITY:
      newState = merge({}, state, { activities: action.activity });
      return newState;
    default:
      return state;
  }
}

export default activitiesReducer;
