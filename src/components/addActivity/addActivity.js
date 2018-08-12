import React from "react";
import {
  Button,
  Header,
  Dropdown,
  Image,
  Modal,
  Icon,
  Form
} from "semantic-ui-react";
import { isObject } from "util";
import { WEBSOCKET_SERVER } from "../../util/socket";
import io from "socket.io-client";
import { StyleSheet, css } from "aphrodite";

const CATEGORIES = [
  { key: "socialWelfare", text: "Social Welfare", value: "socialWelfare" },
  { key: "everyday", text: "Everyday", value: "everyday" },
  { key: "charity", text: "Charity", value: "charity" }
];

const socialWelfareActivities = [
  {
    key: "religousConvene",
    text: "Volunteer at a religous convene",
    value: "religousConvene"
  },
  { key: "shelter", text: "Volunteer at a shelter", value: "shelter" },
  { key: "reliefEfforts", text: "Relief Efforts", value: "reliefEfforts" },
  { key: "mentorship", text: "Mentorship", value: "mentorship" },
  { key: "cleanCommunity", text: "Clean Community", value: "cleanCommunity" }
];

const everydayActivities = [
  { key: "pickUpLitter", text: "Pick up litter", value: "pickUpLitter" },
  {
    key: "giveUpSeat",
    text: "Give up seat to another person",
    value: "giveUpSeat"
  },
  { key: "payItForward", text: "Pay it forward", value: "payItForward" },
  { key: "feedAPerson", text: "Feed a person in need", value: "feedAPerson" },
  { key: "giveComplement", text: "Give a complement", value: "giveComplement" }
];

const charityActivities = [
  {
    key: "donateReligousGroup",
    text: "Donate to a religous group",
    value: "donateReligousGroup"
  },
  {
    key: "donateSocialCause",
    text: "Donate to a social cause",
    value: "donateSocialCause"
  }
];

class AddActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      activity: "",
      activityValue: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const socket = io(WEBSOCKET_SERVER);
    socket.on("karma-activity", this.processActivities);
  }

  processActivities() {}

  componentWillUnmount() {
    this.setState({
      category: "",
      activity: ""
    });
  }

  handleInput(field) {
    if (field === "activity") {
    }

    return (event, data) => {
      this.setState({
        [field]: data.value
      });
    };
  }

  getActivityValue(activity) {}

  handleSubmit(event) {
    event.preventDefault();
    const { activity, activityValue } = this.state;
    const { currentUser } = this.props;
    const date = new Date(); // change format for reef needs
    const socket = io(WEBSOCKET_SERVER);
    socket.emit("karma-activity", {
      currentUser,
      activity,
      activityValue,
      date
    });
  }

  render() {
    const { category, activity } = this.state;

    const ACTIVITIES =
      category === "socialWelfare"
        ? socialWelfareActivities
        : category === "everyday"
          ? everydayActivities
          : charityActivities;

    return (
      <Modal trigger={<Icon name="plus" />}>
        <Modal.Header>Add an Activity</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              control={Dropdown}
              options={CATEGORIES}
              search
              selection
              value={category}
              onChange={this.handleInput("category")}
              placeholder="Category"
            />
            <Form.Input
              control={Dropdown}
              options={ACTIVITIES}
              disabled={!category}
              search
              selection
              value={activity}
              onChange={this.handleInput("activity")}
              placeholder="Activity"
            />
            <Form.Button
              className={css(styles.activitySendButton)}
              content="Send"
              disabled={!category || !activity}
              icon="send"
              primary
            />
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  activitySendButton: {
    display: "grid"
  }
});

export default AddActivity;
