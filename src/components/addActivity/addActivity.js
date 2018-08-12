import React from "react";
import { Dropdown, Modal, Button, Icon, Form } from "semantic-ui-react";
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

const activityValues = {
  religousConvene: 20,
  shelter: 20,
  reliefEfforts: 30,
  mentorship: 15,
  cleanCommunity: 10,
  pickUpLitter: 1,
  giveUpSeat: 2,
  payItForward: 3,
  feedAPerson: 4,
  giveComplement: 1,
  donateReligousGroup: 50,
  donateSocialCause: 50
};

class AddActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      activity: "",
      activityValue: 0,
      showModal: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    this.setState({
      category: "",
      activity: "",
      activityValue: 0,
      showModal: false
    });
  }

  handleInput(field) {
    let activityVal = 0;
    return (event, data) => {
      if (field === "activity") {
        activityVal = activityValues[data.value];
      }

      this.setState({
        [field]: data.value,
        activityValue: activityVal
      });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { activity, activityValue } = this.state;
    const { currentUser } = this.props;
    const date = new Date();
    const socket = io(WEBSOCKET_SERVER);

    socket.emit("karma-activity", {
      currentUser,
      activity,
      activityValue,
      date
    });

    this.resetState();
  }

  render() {
    const { category, activity, showModal } = this.state;
    const ACTIVITIES =
      category === "socialWelfare"
        ? socialWelfareActivities
        : category === "everyday"
          ? everydayActivities
          : charityActivities;

    return (
      <Modal
        trigger={
          <Button
            icon
            className={css(styles.plusIconButton)}
            onClick={() => this.setState({ showModal: true })}
          >
            <Icon name="plus" size="big" />
          </Button>
        }
        onClose={this.resetState}
        open={showModal}
      >
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
  },
  plusIconButton: {
    position: "fixed",
    right: "40px",
    bottom: "50px",
    height: "50px"
  }
});

export default AddActivity;
