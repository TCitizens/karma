export const SELECT_CURRENT_USER = 'SELECT_CURRENT_USER';

export const selectCurrentUser = currentUser => ({
  type: SELECT_CURRENT_USER,
  currentUser
})

export const postCurrentUser = currentUser => dispatch => dispatch(selectCurrentUser(currentUser))