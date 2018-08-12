import { SELECT_CURRENT_USER } from '../actions/currentUserActions';
import merge from 'lodash/merge';

const defaultState = {
  username: '',
  avatar: ''
}

export const currentUserReducer = (state = defaultState, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case SELECT_CURRENT_USER:
      newState = merge({}, state, action.currentUser);
      return newState;
    default:
      return state;
  }
}
