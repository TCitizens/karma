import React from 'react';
import { withRouter } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import Navigation from '../navigation/navigation'


class MainHeader extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div className={css(styles.headerContainer)}>
          <div className={css(styles.headerTitle)}>
            <span className={css(styles.headerTitleManagement)}>Karma</span>
          </div>
          <div className={css(styles.headerUserContainer)}>
            <div className={css(styles.headerUser)}>
              USER
            </div>
          </div>
        </div>
        <div className={css(styles.childrenContainer)}>
          <Navigation children={children} />
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #C4C4C4',
    height: '41px'
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginLeft: '20px',
    cursor: 'pointer'
  },
  headerTitleManagement: {
    color: '#01b4c0'
  },
  headerUserContainer: {
    display: 'flex',
    minHeight: '100%',
    justifyContent: 'space-between',
    width: '250px'
  },
  headerUser: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '150px',
    color: '#01b4c0',
    fontSize: '18px'
  },
  childrenContainer: {
    height: 'calc(100vh - 41px)',
    overflowX: 'hidden'
  }
});

const mapStateToProps = () => {
}

const mapDispatchToProps = dispatch => {
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainHeader));