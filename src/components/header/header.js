import React from "react";
import { withRouter } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { Dropdown, Image } from "semantic-ui-react";
import { selectCurrentUser } from "../../actions/currentUserActions";
import Navigation from "../navigation/navigation";
import Snorlax from "../../assets/snorlax.png";
import Pikachu from "../../assets/pikachu.png";
import Bullbasaur from "../../assets/bullbasaur.png";

class MainHeader extends React.Component {
  state = {
    username: "bob",
    avatar: Snorlax
  };

  handleSelect = (event, { name, value }) => {
    const { selectCurrentUser } = this.props;
    this.setState({ [name]: value, avatar: this.getAvatar(value) }, () =>
      selectCurrentUser({ ...this.state })
    );
  };

  getUserOptions = () => {
    return [
      {
        key: "bob",
        text: "Bob",
        value: "bob",
        image: { avatar: true, src: Snorlax }
      },
      {
        key: "alice",
        text: "Alice",
        value: "alice",
        image: { avatar: true, src: Pikachu }
      },
      {
        key: "ken",
        text: "Ken",
        value: "ken",
        image: { avatar: true, src: Bullbasaur }
      }
    ];
  };

  getAvatar = username => {
    const avatars = {
      bob: Snorlax,
      alice: Pikachu,
      ken: Bullbasaur
    };
    return avatars[username];
  };

  render() {
    const { children } = this.props;
    const { avatar, username } = this.state;
    const userOptions = this.getUserOptions();
    return (
      <div>
        <div className={css(styles.headerContainer)}>
          <div className={css(styles.headerTitle)}>
            <span className={css(styles.headerTitleManagement)}>Karma</span>
          </div>
          <div className={css(styles.headerUserContainer)}>
            <div className={css(styles.headerUser)}>
              <Image src={avatar} avatar />
              <Dropdown
                selection
                placeholder="Select User"
                name="username"
                value={username}
                options={userOptions}
                onChange={this.handleSelect}
                className={css(styles.headerUserSelection)}
              />
            </div>
          </div>
        </div>
        <div className={css(styles.childrenContainer)}>
          <Navigation children={children} />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #C4C4C4",
    height: "49px"
  },
  headerTitle: {
    fontSize: "24px",
    fontWeight: "700",
    marginLeft: "20px",
    cursor: "pointer"
  },
  headerTitleManagement: {
    color: "#01b4c0"
  },
  headerUserContainer: {
    display: "flex",
    minHeight: "100%",
    justifyContent: "space-between",
    width: "125px"
  },
  headerUser: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "150px",
    color: "#01b4c0",
    fontSize: "18px"
  },
  headerUserSelection: {
    marginLeft: "25px"
  },
  childrenContainer: {
    height: "calc(100vh - 49px)",
    overflowX: "hidden"
  }
});

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser: currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCurrentUser: currentUser => dispatch(selectCurrentUser(currentUser))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainHeader)
);
