import {connect} from 'react-redux';
import NewsFeed from './newsFeed';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    activites: state.activities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
// activites: state.activities
