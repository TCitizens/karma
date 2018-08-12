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
    let newActivity = {
      username: this.props.currentUser.username,
      avatar: this.props.currentUser.avatar,
      activityValue: activity.activityValue,
      event_: activity.activity,
      date: activity.date
    }
    this.props.postNewActivity(newActivity);
    console.log("this is an activity", activity);
  };

  sortDate = activities => {
    let sortedActivities = activities.sort((first, second) => {
      let a = new Date(first['date']);
      let b = new Date(second['date']);
      return a > b ? -1 : a < b ? 1 : 0
    })

    return sortedActivities;
  }

  render() {
    const {currentUser} = this.props;
    const activities = this.props.activities.map(activity => {
      return {
        username: activity.username,
        avatar: activity.avatar,
        activityValue: activity.activityValue,
        event_: activity.event_,
        date: activity.date
      };
    })
    const sortedActivities = this.sortDate(activities);
    return (
      <div className={css(styles.newsFeedContainer)}>
        <div className={css(styles.newsFeedTitle)}>
          NEWSFEED
        </div>
        {
          sortedActivities.map((activity, index) => {
            let formattedText = `${activity.username} ${activity.event_} on ${activity.date}: +${activity.activityValue}`;
            return <Feed key={index}>
              <Feed.Event>
                <Feed.Label image={activity.avatar}/>
                <Feed.Content>
                  <Feed.Date content={activity.date}/>
                  <Feed.Summary content={formattedText}/>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          })
        }
        <AddActivity username={currentUser}/>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  newsFeedContainer: {
    marginLeft: '100px'
  },
  newsFeedTitle: {
    color: "#01b4c0",
    fontWeight: '700',
    marginBottom: '25px'
  }
})

export default NewsFeed;
