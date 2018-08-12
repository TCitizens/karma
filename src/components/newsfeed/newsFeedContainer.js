import {connect} from 'react-redux';
import NewsFeed from './newsfeed';
import {postCurrentUser} from '../../actions/currentUserActions';
import {postNewActivity} from '../../actions/activityActions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    activities: state.activities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postCurrentUser: (id) => dispatch(postCurrentUser(id)),
    postNewActivity: (activity) => dispatch(postNewActivity(activity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
