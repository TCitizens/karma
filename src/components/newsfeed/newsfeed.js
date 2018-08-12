import React from "react";
import AddActivity from "../addActivity/addActivity";
import { WEBSOCKET_SERVER } from "../../util/socket";
import io from "socket.io-client";
import Bullbasaur from '../../assets/bullbasaur.png'
import Snorlax from '../../assets/snorlax.png'
import Pikachu from '../../assets/pikachu.png'
import { StyleSheet, css } from 'aphrodite';
import {Feed} from 'semantic-ui-react';

class NewsFeed extends React.Component {
  state = {
    activities: []
  };
  componentDidMount() {
    const socket = io(WEBSOCKET_SERVER);
    socket.on("karma-activity", this.processActivities);
  }

  processActivities = activity => {
    //TO BE FILLED IN
    // this.setState({activities: [...this.state.activities, activity]})
    debugger
    let newActivity = {
      username: this.props.currentUser,
      avatar: '',
      activityValue: activity.activityValue,
      event_: activity.activity,
      date: '7:00 Saturday, August 11'
    }
    this.props.postNewActivity(newActivity);
    console.log("this is an activity", activity);
  };

  render() {
    const {currentUser} = this.props;
    const activities = this.props.activities.map(activity => {
      return {
        username: activity.username,
        avatar: activity.avatar,
        activityValue: activity.activityValue,
        event_: activity.event,
        date: activity.date
      };
  })
    return (
      <div className={css(styles.newsFeedContainer)}>
        ----NEWSFEED----
        <Feed events={activities} />
        <AddActivity username={currentUser}/>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  newsFeedContainer: {
    marginLeft: '100px'
  }
})

export default NewsFeed;
