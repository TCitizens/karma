import React from "react";
import AddActivity from "../addActivity/addActivity";
import Banner from "../banner/banner";
import { WEBSOCKET_SERVER } from "../../util/socket";
import io from "socket.io-client";
import Bullbasaur from '../../assets/bullbasaur.png'
import Snorlax from '../../assets/snorlax.png'
import Pikachu from '../../assets/pikachu.png'
import { StyleSheet, css } from 'aphrodite';
import {Feed} from 'semantic-ui-react';

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: this.props.activities
    }
  }
  componentDidMount() {
    const socket = io(WEBSOCKET_SERVER);
    socket.on("karma-activity", this.processActivities);
  }

  processActivities = activity => {
    let formattedDate = this.formatDate(activity.date);
    let newActivity = {
      username: activity.currentUser.username,
      avatar: this.getAvatar(activity.currentUser.username),
      activityValue: activity.activityValue,
      event_: activity.activity,
      date: formattedDate
    }
    this.setState({ activities: [...this.state.activities, newActivity] });
  };

  getAvatar = username => {
    const avatars = {
      bob: Snorlax,
      alice: Pikachu,
      ken: Bullbasaur
    };
    return avatars[username];
  };

  sortDate = activities => {
    let sortedActivities = activities.sort((first, second) => {
      let a = new Date(first['date']);
      let b = new Date(second['date']);
      return a > b ? -1 : a < b ? 1 : 0
    })

    return sortedActivities;
  }

  formatDate = date => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

  render() {
    const {currentUser} = this.props;
    const { activities } = this.state;
    const mappedActivities = activities.map(activity => {
      return {
        username: activity.username,
        avatar: activity.avatar,
        activityValue: activity.activityValue,
        event_: activity.event_,
        date: activity.date
      };
    })
    const sortedActivities = this.sortDate(mappedActivities);
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
        <AddActivity currentUser={currentUser}/>
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
