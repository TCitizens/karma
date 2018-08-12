import { RECEIVE_NEW_ACTIVITY } from '../actions/activityActions';
import merge from 'lodash/merge';

const totalReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
}

export default totalReducer;
