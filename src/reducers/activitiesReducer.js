import {RECEIVE_NEW_ACTIVITY} from '../actions/activityActions';

import merge from 'lodash/merge';

const activitiesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_NEW_ACTIVITY:
      break;
    default:
      return state;
  }
}

export default activitiesReducer;
