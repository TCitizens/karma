export const RECEIVE_NEW_ACTIVITY = 'RECEIVE_NEW_ACTIVITY'

export const receiveNewActivity = activity => ({
  type: RECEIVE_NEW_ACTIVITY,
  activity
})

export const postNewActivity = activity => dispatch => dispatch(receiveNewActivity(activity))
