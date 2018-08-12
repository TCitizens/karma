import React from "react";
import AddActivity from "../addActivity/addActivity";
import { WEBSOCKET_SERVER } from "../../util/socket";
import io from "socket.io-client";

class NewsFeed extends React.Component {
  state = {
    activities: []
  }
  componentDidMount() {
    const socket = io(WEBSOCKET_SERVER);
    socket.on("karma-activity", this.processActivities);
  }

  processActivities = activity =>  {
    //TO BE FILLED IN
    // this.setState({activities: [...this.state.activities, activity]})
    console.log('this is an activity', activity)
  }

  render() {
    return (
      <div>
        ----NEWSFEED----
        <AddActivity />
      </div>
    );
  }
}

export default NewsFeed;
