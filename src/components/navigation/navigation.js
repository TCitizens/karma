import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { Menu, Sidebar, Icon } from 'semantic-ui-react';

class Navigation extends React.Component {
  state = { visible: false}

  handleSidebarHide = () => this.setState({ visible: false })

  handleSidebar = () => this.setState({ visible: true })
  
  render() {
    const { children } = this.props;
    const { visible } = this.state;
    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          vertical
          onHide={this.handleSidebarHide}
          visible={visible}
        >
          <Menu.Item disabled={true}>
            <div>
              <span className={css(styles.navButtonTitle)}>Karma Navigation</span>
            </div>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>
              <div className={css(styles.navButtonContainer)}>
                <span className={css(styles.navButtonTextAlt)}>ACTIVITY FEED</span>
              </div>
            </Menu.Header>

            <Menu.Menu>
              <Menu.Item as={NavLink} to='/'>
                <div className={css(styles.navButtonContainer)}>
                  <span className={css(styles.navButtonInnerText)}>HOME</span>
                </div>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>
              <div className={css(styles.navButtonContainer)}>
                <span className={css(styles.navButtonTextAlt)}>LEADERBOARD</span>
              </div>
            </Menu.Header>

            <Menu.Menu>
              <Menu.Item as={NavLink} to='/leaderboard'>
                <div className={css(styles.navButtonContainer)}>
                  <span className={css(styles.navButtonInnerText)}>HOME</span>
                </div>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
          <div className={css(styles.childrenContainer)}>
            <div className={css(styles.navigationArrowContainer)}>
              <Icon 
                className={css(styles.navigationArrow)}
                name="angle double right"
                onClick={this.handleSidebar}
                />
            </div>
            <div className={css(styles.children)}>
              {children}
            </div>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

const styles = StyleSheet.create({
  navButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    color: '#01b4c0',
    ':hover': {
      color: '#10a1ab'
    }
  },
  navButtonTitle: {
    fontSize: '16px',
  },
  navButtonText: {
    marginLeft: '15px'
  },
  navButtonInnerText: {
    marginLeft: '5px'
  },
  childrenContainer: {
    display: 'flex',
    marginTop: '20px'
  },
  navigationArrowContainer: {
    width: '65px',
  },
  navigationArrow: {
    top: '50%',
    position: 'fixed',
    fontWeight: '700',
    fontSize: '40px',
    cursor: 'pointer',
    color: '#01b4c0',
    ':hover': {
      color: '#10a1ab'
    }
  },
  children: {
    width: '100%',
    margin: '0 auto'
  }
});

export default withRouter(connect()(Navigation));