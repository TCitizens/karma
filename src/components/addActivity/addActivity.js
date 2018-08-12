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
      activity: ""
    };
  }

  handleInput(field) {
    return (event, data) => {
      this.setState({
        [field]: data.value
      });
    };
  }

  handleSubmit() {}

  render() {
    const { category } = this.state;
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
          <Form>
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
              search
              selection
              value={category}
              onChange={this.handleInput("activity")}
              placeholder="Activity"
            />
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default AddActivity;
