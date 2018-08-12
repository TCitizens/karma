import {connect} from 'react-redux';
import NewsFeed from './newsFeed';
import {postCurrentUser} from '../actions/currentUserActions';
import {postNewActivity} from '../actions/activityActions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    activites: state.activities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postCurrentUser: (id) => dispatch(postCurrentUser(id)),
    postNewActivity: (activity) => dispatch(postNewActivity(activity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
