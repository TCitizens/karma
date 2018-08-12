import {connect} from 'react-redux';
import Board from './board';

const mapStateToProps = (state) => {
  return {
    totals: state.total
  }
}

export default connect(mapStateToProps, null)(Board);
