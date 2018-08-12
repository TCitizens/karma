export const RECEIVE_NEW_ACTIVITY = 'RECEIVE_NEW_ACTIVITY'


export const createActivity = (activity) => dispatch => {
  return createActivty(activity).then(activity => {
    return dispatch({type: RECEIVE_NEW_ACTIVITY, activity});
  )}
