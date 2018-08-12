import React from "react";
import AddActivity from "../addActivity/addActivity";
import { WEBSOCKET_SERVER } from "../../util/socket";
import io from "socket.io-client";

class NewsFeed extends React.Component {
  componentDidMount() {
    const socket = io(WEBSOCKET_SERVER);
    socket.on("karma-activity", this.processActivities);
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
