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
    const {currentUser, activities} = this.props;
    const events = [
  {
    date: '1 Hour Ago',
    image: Bullbasaur,
    meta: '4 Likes',
    summary: 'Bullbasaur volunteered at the pet shelter',
  },
  {
    date: '4 days ago',
    image: Pikachu,
    meta: '1 Like',
    summary: 'Pikachu coached his local youth baseball team',
    extraImages: ['https://pre00.deviantart.net/328f/th/pre/f/2015/163/7/5/pikachu_baseball_hanshintigers_by_mr_shin-d8x2y58.jpg', 'https://react.semantic-ui.com/images/wireframe/image.png'],
  },
  {
    date: '3 days ago',
    image: Snorlax,
    meta: '8 Likes',
    summary: 'Snorlax picked up trash.. and ate it',
    extraText:
      "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
  },
  {
    date: '4 days ago',
    image: '/images/avatar/small/justen.jpg',
    meta: '41 Likes',
    summary: 'Justen Kitsune added 2 new photos of you',
    extraText: 'Look at these fun pics I found from a few years ago. Good times.',
    extraImages: ['/images/wireframe/image.png', '/images/wireframe/image-text.png'],
  },
]
    return (
      <div className={css(styles.newsFeedContainer)}>
        ----NEWSFEED----
        <Feed events={events} />
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
