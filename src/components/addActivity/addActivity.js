import React from "react";
import { Dropdown, Modal, Button, Icon, Form } from "semantic-ui-react";
import { WEBSOCKET_SERVER } from "../../util/socket";
import io from "socket.io-client";
import { StyleSheet, css } from "aphrodite";

const CATEGORIES = [
  { key: "socialWelfare", text: "Social Welfare", value: "socialWelfare" },
  { key: "everyday", text: "Everyday", value: "everyday" },
  { key: "charity", text: "Charity", value: "charity" },
  { key: "promo", text: "Promotion", value: "promo" }
];

const socialWelfareActivities = [
  {
    key: "religousConvene",
    text: "Volunteer at a religous convene",
    value: "volunteered at a religious convene"
  },
  {
    key: "shelter",
    text: "Volunteer at a shelter",
    value: "volunteered at a shelter"
  },
  {
    key: "reliefEfforts",
    text: "Relief Efforts",
    value: "participated in a relief effort"
  },
  { key: "mentorship", text: "Mentorship", value: "provided mentorship" },
  {
    key: "cleanCommunity",
    text: "Clean Community",
    value: "cleaned the community"
  }
];

const everydayActivities = [
  { key: "pickUpLitter", text: "Pick up litter", value: "picked up litter" },
  {
    key: "giveUpSeat",
    text: "Give up seat to another person",
    value: "gave up their seat to another person"
  },
  { key: "payItForward", text: "Pay it forward", value: "paid it forward" },
  { key: "feedAPerson", text: "Feed a person in need", value: "fed a person" },
  {
    key: "giveComplement",
    text: "Give a complement",
    value: "gave a complement"
  }
];

const charityActivities = [
  {
    key: "donateReligousGroup",
    text: "Donate to a religious group",
    value: "donated to a religious group"
  },
  {
    key: "donateSocialCause",
    text: "Donate to a social cause",
    value: "donated to a social cause"
  }
];

const promoActivities = [
  {
    key: "foodPantry",
    text: "Volunteer at a food pantry",
    value: "volunteered at a food pantry"
  }
];

const activityValues = {
  "volunteered at a religious convene": 20,
  "volunteered at a shelter": 20,
  "participated in a relief effort": 30,
  "provided mentorship": 15,
  "cleaned the community": 10,
  "picked up litter": 1,
  "gave up their seat to another person": 2,
  "paid it forward": 3,
  "fed a person": 4,
  "gave a complement": 1,
  "donated to a religious group": 50,
  "donated to a social cause": 50,
  "volunteered at a food pantry": 30
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
          : category === "charity"
            ? charityActivities
            : promoActivities;

    return (
      <Modal
        className={css(styles.addActivityModal)}
        trigger={
          <Button
            icon
            className={css(styles.plusIconButton)}
            onClick={() => this.setState({ showModal: true })}
          >
            <Icon name="plus" size="big" className={css(styles.crossIcon)} />
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
  crossIcon: {
    color: "white"
  },
  plusIconButton: {
    position: "fixed",
    right: "40px",
    bottom: "50px",
    height: "50px",
    backgroundColor: "#01b4c0",
    ":hover": {
      backgroundColor: "#008a93"
    }
  },
  addActivityModal: {
    top: "25%"
  }
});

export default AddActivity;
